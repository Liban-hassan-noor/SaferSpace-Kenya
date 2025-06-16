import { motion } from "framer-motion";
import photo2 from "../assets/photo2.jpg";

export default function JoinUs() {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-pink-100 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img
            src={photo2}
            alt="Support & Solidarity"
            className="rounded-2xl shadow-lg object-cover w-full h-full max-h-[500px] hover:scale-[1.02] transition duration-300"
          />
        </motion.div>

        {/* Animated Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 px-4 text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-700 leading-snug mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg text-green-800 mb-8 leading-relaxed">
            Every girl deserves safety, support, and the chance to heal.
            Together, we can create a future where survivors across Kenya are
            heard, helped, and truly empowered.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:saferspace.kenya@gmail.com"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition text-lg font-medium"
          >
            Partner With Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
