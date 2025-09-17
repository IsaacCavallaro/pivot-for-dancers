import Home from '../components/Home';
import Navigation from '../components/Navigation';
// import Data from '../components/Data';
import FeaturedProducts from '../components/Products';
import FAQ from '@/components/Faq';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialSection';
import LogoMarquee from '@/components/LogoMarquee';

export default function HomePage() {
    return (
        <div>
            <Navigation />
            <Home />
            <LogoMarquee />
            {/* <Data /> */}
            <FeaturedProducts />
            <TestimonialsSection />
            <FAQ />
            <Footer />
        </div>
    );
}
