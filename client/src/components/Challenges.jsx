import { motion } from "framer-motion";

export default function Challenges() {
  return (
    <section id="challenges" className="bg-pink-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-pink-700 mb-10"
        >
          The Challenges We Must Overcome
        </motion.h2>

        {/* Animated Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Sexual Violence",
              description:
                "Many girls suffer in silence after rape and abuse, afraid to seek help because of fear, stigma, or threats.",
            },
            {
              title: "Female Genital Mutilation (FGM)",
              description:
                "Harmful traditional practices like FGM continue to endanger the health, rights, and futures of young girls.",
            },
            {
              title: "Gender-Based Violence",
              description:
                "From homes to schools, many girls face daily violence that threatens their safety and dreams.",
            },
            {
              title: "Child Marriage",
              description:
                "Forced into marriage too young, many girls lose their chance at education, health, and freedom.",
            },
          ].map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md border border-pink-100"
            >
              <h3 className="text-2xl font-semibold text-pink-500 mb-3">
                {challenge.title}
              </h3>
              <p className="text-pink-700">{challenge.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Hopeful Ending */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="text-xl text-green-700 font-semibold">
            At SaferSpace, we believe every girl deserves protection, respect,
            and the power to choose her future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
