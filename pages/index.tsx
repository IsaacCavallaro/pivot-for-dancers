import Home from '../components/Home';
import Navigation from '../components/Navigation';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialSection';
import LogoMarquee from '@/components/LogoMarquee';

export default function HomePage() {
    return (
        <div>
            <Navigation />
            <Home />
            <LogoMarquee />
            <TestimonialsSection />
            <Footer />
        </div>
    );
}
