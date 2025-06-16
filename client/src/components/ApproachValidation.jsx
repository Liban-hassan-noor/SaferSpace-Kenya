import { motion } from "framer-motion";
import { CheckCircle, Stethoscope, Users } from "lucide-react";

export default function ApproachValidation() {
  return (
    <section className="bg-green-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-green-700 mb-6"
        >
          Why Our Approach Works
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12"
        >
          SaferSpace combines science, empathy, and real community voices. Our
          approach is shaped by medical professionals, mental health experts,
          and survivors themselves — making healing and impact truly possible.
        </motion.p>

        {/* Icons Grid */}
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {/* Medically Approved */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md border border-green-100"
          >
            <Stethoscope className="text-green-600 mb-4 w-8 h-8" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Backed by Health Experts
            </h3>
            <p className="text-gray-700">
              Built with clinical guidance from doctors and therapists who
              specialize in trauma recovery, women's health, and safe disclosure.
            </p>
          </motion.div>

          {/* Trauma-Informed Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md border border-green-100"
          >
            <CheckCircle className="text-green-600 mb-4 w-8 h-8" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Trauma-Informed & Survivor-Centered
            </h3>
            <p className="text-gray-700">
              From language to layout, everything is designed to reduce harm,
              promote trust, and prioritize the survivor’s emotional safety.
            </p>
          </motion.div>

          {/* Community Powered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md border border-green-100"
          >
            <Users className="text-green-600 mb-4 w-8 h-8" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Powered by Community & Partners
            </h3>
            <p className="text-gray-700">
              Co-created with girls, health workers, and NGOs in Kenya — and
              growing through partnerships that create real opportunities.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="/contact"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-lg font-medium px-8 py-4 rounded-full transition shadow-md"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
