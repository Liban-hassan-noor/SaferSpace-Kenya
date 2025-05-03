//Hero(),howitworks,nabar ,footer

import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";

import Footer from "../components/Footer";
import JoinUs from "../components/JoinUs";
import Challenges from "../components/Challenges";

import React from "react";
import TrySaferSpaceNow from "../components/TrySaferSpaceNow";

const Home = () => {
  return (
    <>
      <Hero />
      <Challenges />
      <HowItWorks />
      <TrySaferSpaceNow />
      <JoinUs />
      <Footer />
    </>
  );
};

export default Home;
