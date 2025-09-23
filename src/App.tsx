import React from "react";
import { Box } from "@chakra-ui/react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import GitState from "./Components/GitState/GitState";
import TechStacks from "./Components/TechStacks/TechStacks";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Box id="home" bg={"bg.2"}>
        <Hero />
      </Box>
      <Box id="about" bg={"bg.3"}>
        <About />
      </Box>
      <Box id="skills" bg={"bg.2"}>
        <TechStacks />
      </Box>
      <Box id="projects" bg={"bg.3"}>
        <Projects />
      </Box>
      <Box id="gitState" bg={"bg.2"}>
        <GitState />
      </Box>
      <Contact />
    </div>
  );
};

export default App;
