import Head from 'next/head';
import Home from '../components/Home';
import Navigation from '../components/Navigation';
import Footer from '@/components/Footer';

export default function HomePage() {
    // Remove trailing slash from base URL to avoid double slashes
    const siteUrl = 'https://pivotfordancers.com';
    const ogImage = `${siteUrl}/assets/logo-share.png`;

    return (
        <>
            <Head>
                <title>Pivot For Dancers</title>
                <meta name="description" content="We're helping professional dancers find meaning off the stage through dancer-specific career change resources." />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Pivot For Dancers" />
                <meta property="og:description" content="We're helping professional dancers find meaning off the stage through dancer-specific career change resources." />
                <meta property="og:url" content={`${siteUrl}/`} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:image:secure_url" content={ogImage} />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Pivot For Dancers social preview" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Pivot For Dancers" />
                <meta name="twitter:description" content="We're helping professional dancers find meaning off the stage through dancer-specific career change resources." />
                <meta name="twitter:image" content={ogImage} />
                <meta name="twitter:image:alt" content="Pivot For Dancers social preview" />
            </Head>

            <div>
                <Navigation />
                <Home />
                <Footer />
            </div>
        </>
    );
}
