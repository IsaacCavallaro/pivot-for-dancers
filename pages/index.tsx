import Home from '../components/Home';
import AboutUsSection from '@/components/About';
import Navigation from '../components/Navigation';
import Data from '../components/Data';
import FeaturedProducts from '../components/Products';
import FAQ from '@/components/Faq';
import Footer from '@/components/Footer';
import Quiz from '@/components/Quiz';
import TestimonialsSection from '@/components/TestimonialSection';

export default function HomePage() {
    return (
        <div>
            <Navigation />
            <Home />
            <Data />
            <FeaturedProducts />
            <AboutUsSection />
            <TestimonialsSection />
            <Quiz />
            <FAQ />
            <Footer />
        </div>
    );
}
