import React from 'react';
import Home from './components/Home';
import FeaturedProducts from './components/Products';
import About from './components/About';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import TestimonialsSection from './components/TestimonialSection';
import Faq from './components/Faq';
import Timeline from './components/Timeline';
import EbookBanner from './components/EbookBanner';
import Quiz from './components/Quiz';
import DataSection from './components/Data';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <DataSection />
      <Timeline />
      <FeaturedProducts />
      <EbookBanner />
      <About />
      <TestimonialsSection />
      <Quiz />
      {/* <EbookBanner /> */}
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
