// components/Team.js

import { motion } from "framer-motion";
import React from "react";
import Liban from "../assets/Liban.jpg";
import zakiya from "../assets/zakiya.jpg";
import ebenezer from "../assets/ebenezer.jpg"; // Correctly import the image from the src folder

const teamMembers = [
  {
    name: "Liban Hassan",
    role: "Founder & fullstack engineer",
    image: Liban,
    description:
      "Liban founded SaferSpace to create a trusted platform where girls and women in North Eastern Kenya can find emotional support, safety, and access to critical resources.",
  },
  {
    name: "Zakiya Abass",
    role: "Software Engineer & Co-Founder",
    image: zakiya,
    description:
      "Zakiya leads the development of SaferSpace’s technology, building user-friendly and secure systems that ensure survivors can access help anytime, anywhere.",
  },
  {
    name: "Dr Ebenezer",
    role: " Health Lead & Co-Founder",
    image: ebenezer,
    description:
      "Dr. Ebenezer brings medical expertise to SaferSpace, offering frontline care and health education while connecting survivors to professional services in their communities.",
  },
];

const Team = () => {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-pink-700 text-center mb-12"
      >
        Meet the SaferSpace Team
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-green-600">
              {member.name}
            </h3>
            <p className="text-pink-700 font-medium">{member.role}</p>
            <p className="mt-2 text-gray-700 text-base">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
