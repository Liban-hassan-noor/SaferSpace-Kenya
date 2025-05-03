import { motion } from "framer-motion";
import photo2 from "../assets/photo2.jpg"; // Correctly import the image from the src folder

export default function JoinUs() {
  return (
    <section className="bg-pink-100 py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <img
            src={photo2}
            alt="Support Image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </motion.div>

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-left px-6"
        >
          <h2 className="text-4xl font-bold text-pink-700 mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-green-800 text-lg mb-8">
            Every girl deserves safety, support, and the chance to heal.
            Together, we can build a future where survivors in North Eastern
            Kenya are heard, helped, and empowered.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:saferspace.kenya@gmail.com"
            className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition inline-block"
          >
            Partner With Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
