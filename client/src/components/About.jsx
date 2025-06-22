import { motion } from "framer-motion";
import { HeartHandshake, MapPin, UsersRound } from "lucide-react";
import actual from "../assets/actual.jpg";

const About = () => {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-pink-700 mb-6 flex items-center gap-2"
      >
        <UsersRound className="text-pink-500 w-8 h-8" />
        About SaferSpace
      </motion.h1>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <img
          src={actual}
          alt="Girls from North Eastern Kenya"
          className="rounded-lg shadow-lg w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Mission Paragraph */}
      <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-lg text-gray-700 mb-8 leading-relaxed"
>
  SaferSpace is a trauma-informed digital platform built to support girls
  and women in Kenya facing gender-based violence, early marriage, and
  stigma. Through our secure platform, we offer access to mental health
  support, peer connection, and nearby healthcare , all in one safe,
  private space. Beyond immediate care, we connect survivors to long-term
  opportunities , from returning to school and joining tech programs, to
  finding mentorship and empowerment communities. Our goal is simple: to
  help every girl feel seen, supported, and free.
</motion.p>


      {/* Our Story */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-green-600 mb-4 flex items-center gap-2"
      >
        <HeartHandshake className="text-green-500 w-6 h-6" />
        Our Story
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg text-gray-700 mb-8 leading-relaxed"
      >
        Growing up in North Eastern Kenya, I saw firsthand how silence and fear
        shaped the lives of many girls. Friends were forced into early
        marriages. Some left school after undergoing FGM. Others endured abuse
        quietly, with no one safe to talk to.
        <br />
        <br />
        SaferSpace was created from those memories , and the belief that healing
        begins with being heard. We combined local lived experience with
        technology to offer real support: peer-led chat spaces, trauma-informed
        tools, and a growing network of counselors, clinics, and allies. At its
        core, SaferSpace is a movement for dignity, courage, and connection.
      </motion.p>

      {/* How We Help */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-green-600 mb-4 flex items-center gap-2"
      >
        <MapPin className="text-green-500 w-6 h-6" />
        How We Help
      </motion.h2>

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="list-none space-y-4 text-lg text-gray-700"
      >
        <li className="flex gap-3 items-start">
          <UsersRound className="text-pink-500 mt-1 w-5 h-5" />
          <span>
            <b>Supportive Community Chats:</b> Safe spaces to speak up,
            connect, and find strength in shared experiences.
          </span>
        </li>
        <li className="flex gap-3 items-start">
    <UsersRound className="text-pink-500 mt-1 w-5 h-5" />
    <span>
      <b>Empowerment Opportunities:</b> We connect girls to school
      reentry programs, tech and coding classes, mentorship, and
      leadership networks , to help them rebuild their future.
    </span>
  </li>
        <li className="flex gap-3 items-start">
          <MapPin className="text-pink-500 mt-1 w-5 h-5" />
          <span>
            <b>Nearby Health Resources:</b> Maps and guides to free,
            survivor-friendly clinics and hospitals.
          </span>
        </li>
        <li className="flex gap-3 items-start">
          <HeartHandshake className="text-pink-500 mt-1 w-5 h-5" />
          <span>
            <b>Mental Health Support:</b> Chat with trained professionals on
            WhatsApp , whenever you're ready.
          </span>
        </li>
      </motion.ul>
    </section>
  );
};

export default About;
