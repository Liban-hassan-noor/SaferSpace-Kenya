import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Resend } from "resend";
import Contact from "./models/contact.js";

dotenv.config(); // Load environment variables from .env file
// This allows only your frontend to talk to your backend
//const app = express();
const app = express();

const allowedOrigins = [
  "http://localhost:5173", // local dev
  "https://safer-space-kenya.vercel.app", // deployed frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Resend API setup
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to get all contact messages
app.get("/contact", async (req, res) => {
  try {
    const messages = await Contact.find();
    res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch messages",
    });
  }
});

// Route to handle contact form submission
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Step 1: Save the message to MongoDB
    const newMessage = new Contact({ name, email, message });
    const savedMessage = await newMessage.save();

    // Step 2: Send email using Resend API
    await resend.emails.send({
      from: "onboarding@resend.dev", // Sender email
      to: "saferspace.kenya@gmail.com", // Receiver email (your email)
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    // Step 3: Respond with success message
    res.status(201).json({
      success: true,
      data: savedMessage,
      message: "Message saved and email sent successfully!",
    });
  } catch (error) {
    console.error("Error handling contact form:", error);
    res.status(500).json({
      success: false,
      message: "Failed to save message or send email. Please try again later.",
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
