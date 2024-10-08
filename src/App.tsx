import React from 'react';
import Home from './components/Home';
import FeaturedProducts from './components/Products';
// import Contact from './components/Contact';
import About from './components/About';
import Values from './components/Values';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import TestimonialsSection from './components/TestimonialSection';
import Faq from './components/Faq';
import Timeline from './components/Timeline';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <FeaturedProducts />
      <TestimonialsSection />
      <About />
      <Timeline />
      <Banner />
      <Values />
      {/* <Contact /> */}
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
