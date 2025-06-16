import { motion } from "framer-motion";
import {
  ShieldAlert,
  Scissors,
  AlertTriangle,
  Lock,
} from "lucide-react"; // Importing relevant icons

export default function Challenges() {
  const challenges = [
    {
      title: "Sexual Violence",
      description:
        "Many girls suffer in silence after rape and abuse, afraid to seek help because of fear, stigma, or threats.",
      icon: <ShieldAlert className="text-pink-600 w-8 h-8 mb-4" />,
    },
    {
      title: "Female Genital Mutilation (FGM)",
      description:
        "Harmful traditional practices like FGM continue to endanger the health, rights, and futures of young girls.",
      icon: <Scissors className="text-pink-600 w-8 h-8 mb-4" />,
    },
    {
      title: "Gender-Based Violence",
      description:
        "From homes to schools, many girls face daily violence that threatens their safety and dreams.",
      icon: <AlertTriangle className="text-pink-600 w-8 h-8 mb-4" />,
    },
    {
      title: "Child Marriage",
      description:
        "Forced into marriage too young, many girls lose their chance at education, health, and freedom.",
      icon: <Lock className="text-pink-600 w-8 h-8 mb-4" />,
    },
  ];

  return (
    <section
      id="challenges"
      className="bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4"
        >
          The Challenges We Must Overcome
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-pink-400 mx-auto mb-12 origin-left"
        />

        {/* Animated Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-pink-200 transition duration-300 border border-pink-100"
            >
              <div className="flex flex-col items-center text-center">
                {challenge.icon}
                <h3 className="text-2xl font-bold text-pink-600 mb-3">
                  {challenge.title}
                </h3>
                <p className="text-pink-800 leading-relaxed text-md">
                  {challenge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hopeful Ending */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="text-2xl md:text-3xl text-green-700 font-semibold max-w-3xl mx-auto">
            At <span className="text-pink-600 font-bold">SaferSpace</span>, we
            believe every girl deserves protection, respect, and the power to
            choose her future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
// This code defines a React component that displays a section about the challenges faced by girls globally, including issues like sexual violence, FGM, gender-based violence, and child marriage.