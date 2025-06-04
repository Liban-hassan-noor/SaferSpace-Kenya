import { motion } from "framer-motion";
import photo3 from "../assets/photo3.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="mission"
      className="h-screen bg-cover bg-center text-white flex items-center relative overflow-hidden"
      style={{ backgroundImage: `url(${photo3})` }}
    >
      {/* Background zoom animation */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-opacity-30"
      />

      {/* Content with frosted glass and fade-in */}
      <div className="relative z-10 w-full flex flex-col justify-center items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-xl max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-400">
            "A safe space to speak, heal, and grow — together."
          </h2>
          <p className="text-lg mt-4 text-green-500">
            SaferSpace is a digital platform for girls and women in Kenya, offering healing, community support, and access to
            care. Through our web app and WhatsApp chatbot, users can connect
            with professionals, find nearby safe clinics, and get real advice
            from survivors. This is more than a chatbot — it's a safe space to
            heal and grow.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-block px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full text-lg"
          >
            Talk to Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
