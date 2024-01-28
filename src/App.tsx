import React from 'react';
import Home from './components/Home'; // Import your custom components here
import FeaturedProducts from './components/Products';
import Contact from './components/Contact';
import About from './components/About';
import Values from './components/Values';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import TestimonialsSection from './components/TestimonialSection';

function App() {
  return (
    <div className="App">
      <Navigation /> 
      <Home /> 
      <FeaturedProducts /> 
      <About /> 
      <Values /> 
      <TestimonialsSection /> 
      <Contact /> 
      <Footer /> 
    </div>
  );
}

export default App;
