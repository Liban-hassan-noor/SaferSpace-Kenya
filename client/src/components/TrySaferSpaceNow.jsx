// components/TrySaferSpaceNow.js
import React from "react";

const TrySaferSpaceNow = () => {
  return (
    <section className="bg-purple-50 py-12 text-center px-4">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">
        Step into a Safer Space
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Ready to talk, share, or get help? Access the full SaferSpace experience
        now.
      </p>
      <a
        href="https://your-safer-space-app-link.com" // replace with your actual app URL
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
      >
        Open SaferSpace Web App
      </a>
    </section>
  );
};

export default TrySaferSpaceNow;
