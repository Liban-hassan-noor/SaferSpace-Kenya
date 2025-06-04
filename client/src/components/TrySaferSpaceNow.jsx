// components/TrySaferSpaceNow.js
import React from "react";

const TrySaferSpaceNow = () => {
  return (
    <section className="bg-purple-50 py-12 text-center px-4">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">
        Step into a Safer Space
      </h2>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        Whether you're here to get support or try out the full SaferSpace
        platform, you're in the right place.
      </p>

      <button>
        <a
          href="https://saferspace-5852d.web.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
        >
          Visit Full Platform 
        </a>
      </button>
    </section>
  );
};

export default TrySaferSpaceNow;
