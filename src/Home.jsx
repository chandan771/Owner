import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./Context";
import Services from "./Services";

const Home = () => {
  // const data = {
  //   name: "Aecom Enterprises",
  //   image: "./images/hero.svg",
  //   para:
  //     "Aecom leads the development of advance computing solutions for rugged system with the latest Innovations in GPGPU-based AI Application and Cyber Security."
  // };

  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <div>
      <HeroSection />

      {/* <Services /> */}
    </div>
  );
};

export default Home;
