
import { Box } from '@chakra-ui/react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import GitState from "./Components/GitState/GitState"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box id="home" bg={"bg.2"}><Hero /></Box>
      <Box id="projects" bg={"bg.3"}><Projects /></Box>
      <Box id="gitStates" bg={"bg.2"}><GitState /></Box>
    </div>
  );
}

export default App;
