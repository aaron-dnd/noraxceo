import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Box sx={{ scrollBehavior: 'smooth' }}>
      <Navbar />
      <Box component="main">
        <Home />
        <Features />
        <HowItWorks />
        <About />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
