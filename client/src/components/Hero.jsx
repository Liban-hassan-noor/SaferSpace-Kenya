import { motion } from "framer-motion";
import photo3 from "../assets/photo3.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="mission"
      className="h-screen bg-cover bg-center relative flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${photo3})` }}
    >
      {/* Zooming Background Animation */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-opacity-40"
      />

      {/* Frosted Glass Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 bg-white/10 backdrop-blur-xl text-white px-6 py-10 md:p-12 rounded-2xl max-w-3xl text-center shadow-xl border border-white/20"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-pink-300 leading-tight">
          "A Safe Space to Speak, Heal, and Grow , Together."
        </h1>

        <p className="mt-6 text-md md:text-lg text-green-100 leading-relaxed">
          SaferSpace is a healing-centered digital platform for girls and women in Kenya. 
          We provide access to safe clinics, mental health support, and a caring community , 
          while also connecting girls to real{" "}
          <span className="text-pink-200 font-semibold">
            opportunities for education, empowerment, and sponsorship
          </span>{" "}
          through our trusted partners.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-block px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white text-lg rounded-full shadow-md transition duration-300 hover:scale-105"
        >
          Talk to Us
        </Link>
      </motion.div>
    </section>
  );
}
