import React from 'react';
import Home from './components/Home';
import FeaturedProducts from './components/Products';
import Contact from './components/Contact';
import About from './components/About';
import Values from './components/Values';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import TestimonialsSection from './components/TestimonialSection';
import Faq from './components/Faq';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <FeaturedProducts />
      <About />
      <Timeline />
      <Values />
      <TestimonialsSection />
      <Contact />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
