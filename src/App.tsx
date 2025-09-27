import React, { useEffect } from "react";
import ErrorBoundary from "./Components/ErrorBoundary";
import { Box, Container, useColorMode } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import TechStacks from "./pages/TechStacks/TechStacks";
import Projects from "./pages/Projects/Projects";
import GitState from "./pages/GitState/GitState";
import Contact from "./pages/Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { ModuleName, MODULES_DATA } from "./constants/constant";
import { ModuleItem } from "./types/interface";

const App: React.FC = () => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    AOS.init();
  }, []);

  const getComponentByModuleName = (
    moduleName: ModuleName
  ): React.ComponentType<any> => {
    const components: Record<string, React.ComponentType<any>> = {
      Hero,
      About,
      TechStacks,
      Projects,
      GitState,
      Contact,
    };
    return components[moduleName];
  };

  const renderModule = (module: ModuleItem, index: number) => {
    const { componentName, path } = module;
    const Component = getComponentByModuleName(componentName);
    // Use new color names and Chakra color mode
    const bg =
      colorMode === "light"
        ? index % 2 === 0
          ? "background"
          : "card"
        : index % 2 === 0
        ? "surface"
        : "card";

    return (
      <Box key={index} id={path} bg={bg}>
        <Container pt={{ base: "40px", md: 0 }} maxW="8xl" minH="100vh">
          {React.createElement(Component as React.FC)}
        </Container>
      </Box>
    );
  };

  return (
    <ErrorBoundary>
      <Box className="App">
        <Navbar />
        {MODULES_DATA.map((module, index) => renderModule(module, index))}
      </Box>
    </ErrorBoundary>
  );
};

export default App;
