// components/TrySaferSpaceNow.js
import React from "react";

const TrySaferSpaceNow = () => {
  return (
    <section className="bg-purple-50 py-12 text-center px-4">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">
        Step into a Safer Space
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Ready to talk, share, or get help? The full SaferSpace experience is
        launching soon.
      </p>
      <button
        disabled
        className="inline-block bg-gray-400 text-white px-6 py-3 rounded-full cursor-not-allowed"
      >
        Coming Soon
      </button>
    </section>
  );
};

export default TrySaferSpaceNow;
