import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import AcademicInfo from "./AcademicInfo/AcademicInfo";
import GenaralInfo from "./GeneralInfo/GenaralInfo";
import Hero from "./Hero/Hero";
import Technologies from "./Technologies/Technologies";
import Projects from "./Projects/Projects";
import WorkHistory from "./WorkHistory/WorkHistory";


const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Hero />
      <GenaralInfo />
      <AcademicInfo />
      <WorkHistory />
      <Technologies />
      <Projects />
    </div>
  );
};

export default App;