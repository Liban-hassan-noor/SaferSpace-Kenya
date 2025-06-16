import { motion } from "framer-motion";

const TrySaferSpaceNow = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-purple-100 py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
          Step Into a Safer Space
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
          Whether you're here to get support or explore everything SaferSpace
          offers, you’re in the right place. Healing, connection, and care are
          just a click away.
        </p>

        <a
          href="https://saferspace-5852d.web.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-4 rounded-full shadow-lg transition transform hover:scale-105"
        >
          Visit Full Platform
        </a>
      </motion.div>
    </section>
  );
};

export default TrySaferSpaceNow;
