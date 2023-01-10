
import { Box } from '@chakra-ui/react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box bg={"bg.2"}><Hero /></Box>
      <Box bg={"bg.3"}><Projects /></Box>
    </div>
  );
}

export default App;
