import Head from 'next/head';
import Home from '../components/Home';
import Navigation from '../components/Navigation';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialSection';

export default function HomePage() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pivotfordancers.com/';

    return (
        <>
            <Head>
                <title>Pivot For Dancers</title>
                <meta name="description" content="We’re helping professional dancers find meaning off the stage through dancer-specific career change resources." />

                {/* Open Graph */}
                <meta property="og:title" content="Pivot For Dancers" />
                <meta property="og:description" content="We’re helping professional dancers find meaning off the stage through dancer-specific career change resources." />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:image" content={`${siteUrl}/assets/logo.png`} />

                {/* Twitter */}
                <meta name="twitter:title" content="Pivot For Dancers" />
                <meta name="twitter:description" content="We’re helping professional dancers find meaning off the stage through dancer-specific career change resources." />
            </Head>

            <div>
                <Navigation />
                <Home />
                <TestimonialsSection />
                <Footer />
            </div>
        </>
    );
}