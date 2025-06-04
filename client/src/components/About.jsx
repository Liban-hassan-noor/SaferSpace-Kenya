import { motion } from "framer-motion";
import actual from "../assets/actual.jpg";

const About = () => {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto">
      {/* Animated Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-pink-700 mb-6"
      >
        About SaferSpace
      </motion.h1>

      {/* Animated Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <img
          src={actual}
          alt="Girls from North eastern Kenya"
          className="rounded-lg shadow-lg w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Animated Paragraphs */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg text-gray-700 mb-6"
      >
        SaferSpace is a dedicated platform that empowers girls and women in
       Kenya, offering a safe and supportive environment where
        they can find the help they need. Through our online platform and
        WhatsApp chatbot, we connect survivors to essential mental health
        support, peer guidance, and free health services. Our mission is to
        ensure that no girl or woman faces these challenges alone — providing
        not just resources, but hope and community.
      </motion.p>

      {/* Animated Subheading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-green-600 mb-4"
      >
        Our Story
      </motion.h2>

      {/* More animated paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg text-gray-700 mb-6"
      >
        Coming from North Eastern Kenya myself, I have seen firsthand the
        painful challenges young girls face, including rape, early marriages,
        FGM, and lack of access to mental health support. SaferSpace was born
        from a deep belief that no girl should face these struggles alone. Our
        mission is to offer hope, healing, and practical help. Growing up, I
        witnessed how harmful traditions and silence could destroy a girl's
        future. I saw friends forced into marriage before they turned 15, girls
        who dropped out of school after being cut, and others who suffered in
        silence after sexual violence, afraid to speak up due to stigma or fear
        of retaliation. These experiences left a lasting mark on me. I knew
        something had to change. I wanted to create a space where girls could
        feel safe, heard, and empowered , a place where they could access
        support without judgment or fear. That's why I created SaferSpace. It's
        more than just a platform; it's a movement. We use technology ,like our
        WhatsApp chatbot and web app ,to connect girls with counselors, peer
        support, and nearby health services. But at its heart, SaferSpace is
        about community. It's about letting every girl know: you are not alone,
        and your voice matters.
      </motion.p>

      {/* Another Animated Subheading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-green-600 mb-4"
      >
        How We Help
      </motion.h2>

      {/* Animated List */}
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="list-disc list-inside text-lg text-gray-700 space-y-2"
      >
        <li>
          <b> Supportive Community Chats:</b> A safe space for survivors to
          share advice, encouragement, and personal experiences.
        </li>
        <li>
          <b> Nearby Health Resources:</b> A map to help users find free health
          facilities and services in their area.
        </li>
        <li>
          <b> Access to Professionals:</b> Direct connections to mental health
          experts and counselors for personalized support.
        </li>
      </motion.ul>
    </section>
  );
};

export default About;
