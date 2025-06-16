//Hero(),howitworks,nabar ,footer

import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";

import Footer from "../components/Footer";
import JoinUs from "../components/JoinUs";
import Challenges from "../components/Challenges";

import React from "react";
import TrySaferSpaceNow from "../components/TrySaferSpaceNow";
import ApproachValidation from "../components/ApproachValidation";

const Home = () => {
  return (
    <>
      <Hero />
      <Challenges />
      <HowItWorks />
      <ApproachValidation />
      <TrySaferSpaceNow />
      <JoinUs />
      <Footer />
    </>
  );
};

export default Home;
