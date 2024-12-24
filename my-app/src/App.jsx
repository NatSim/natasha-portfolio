import React from "react";
import { ThemeProvider } from "./common/ThemeContext";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Porfolio";

const App = () => {
  return (
    <ThemeProvider>
      <Hero />
      <AboutMe />
      <Portfolio />
    </ThemeProvider>
  );
};

export default App;
