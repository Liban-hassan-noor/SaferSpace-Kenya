import { motion } from "framer-motion";
import { Users, Hospital, MessageCircleHeart, Sparkles } from "lucide-react"; // Added Sparkles icon

export default function HowItWorks() {
  const features = [
    {
      title: "Join a Safe Community",
      description:
        "Share your story, find strength, and connect with others who truly understand. Together, healing is possible.",
      icon: <Users className="w-8 h-8 text-green-600 mb-4" />,
    },
     {
      title: "Access Real Opportunities",
      description:
        "We connect girls and survivors to life-changing opportunities — from tech and entrepreneurship programs to scholarships, safe spaces, and leadership networks — in partnership with trusted organizations.",
      icon: <Sparkles className="w-8 h-8 text-green-600 mb-4" />,
    },
    {
      title: "Discover Free Health Services",
      description:
        "Find hospitals and clinics near you offering free medical care, counseling, and protection when you need it most.",
      icon: <Hospital className="w-8 h-8 text-green-600 mb-4" />,
    },
    
    {
      title: "Talk to a Caring Professional",
      description:
        "Reach out to counselors and health experts on WhatsApp — get confidential support whenever you're ready.",
      icon: <MessageCircleHeart className="w-8 h-8 text-green-600 mb-4" />,
    },
   
  ];

  return (
    <section
      id="how"
      className="bg-gradient-to-br from-green-50 via-green-100 to-green-50 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4"
        >
          How SaferSpace Supports You
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-green-400 mx-auto mb-12 origin-left"
        />

        {/* Features Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-green-200 transition duration-300 border border-green-100"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-bold text-pink-500 mb-3">
                  {feature.title}
                </h3>
                <p className="text-green-800 leading-relaxed text-md">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
