import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./Context";

const About = () => {
  // const data = {
  //   name: "Aecom Technology",
  //   image: "./images/about1.svg",
  //   para:
  //     "Digital security company AECOM uses AI to address national security issues. Its AE/infokit platform uses AI, data science and data conditioning to create decision-making algorithms that are designed to work with, rather than replace, human intelligence."
  // };

  const { updateAboutPage } = useGlobalContext();

  useEffect(() => updateAboutPage(), []);

  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default About;
