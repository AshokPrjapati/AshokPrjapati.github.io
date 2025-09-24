import React from "react";
import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import TechStacks from "./pages/TechStacks/TechStacks";
import Projects from "./pages/Projects/Projects";
import GitState from "./pages/GitState/GitState";
import Contact from "./pages/Contact/Contact";

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
