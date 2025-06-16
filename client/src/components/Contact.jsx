import { useState } from "react";
import { Mail, User, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const endpoint = `${VITE_API_BASE_URL}/contact`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <section className="bg-gradient-to-br from-pink-50 to-green-50 py-20 px-6" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-700 mb-3">Get In Touch</h2>
        <p className="text-lg text-gray-600 mb-10">
          We’d love to hear from you. Fill out the form and we’ll get back as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-3xl shadow-xl space-y-6"
        >
          {/* Name */}
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
              Your Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-green-500">
              <User className="text-gray-400 mr-3 w-5 h-5" />
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Your Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-green-500">
              <Mail className="text-gray-400 mr-3 w-5 h-5" />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
              Your Message
            </label>
            <div className="flex items-start border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-green-500">
              <MessageCircle className="text-gray-400 mt-1 mr-3 w-5 h-5" />
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                rows="5"
                className="w-full outline-none bg-transparent resize-none"
                required
              ></textarea>
            </div>
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-3 rounded-full shadow-md transition-transform duration-200 hover:scale-105"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {success && (
              <p className="text-green-700 mt-4">
                 Thank you! Your message has been sent.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
