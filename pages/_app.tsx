import Head from 'next/head';
import '../styles.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

const siteUrl = 'https://pivotfordancers.com';
const ogImage = `${siteUrl}/assets/logo-share.png`;

export type RouteMeta = {
    title: string;
    description: string;
    canonicalPath?: string;
    noindex?: boolean;
};

export const routeMeta: Record<string, RouteMeta> = {
    '/': {
        title: 'Pivot For Dancers',
        description: "We're helping professional dancers find meaning off the stage through dancer-specific career change resources.",
    },
    '/about': {
        title: 'About',
        description: 'Learn more about Pivot For Dancers and the founder-led support designed to help dancers navigate career transition.',
    },
    '/faqs': {
        title: 'FAQs',
        description: 'Answers to common questions about Pivot For Dancers, Pivot Paths, products, services, and dancer career transition support.',
    },
    '/products': {
        title: 'Products',
        description: 'Explore dancer-focused digital products designed to support career transition beyond the stage.',
    },
    '/products/how-to-pivot': {
        title: 'How to Pivot',
        description: 'A practical guide to help dancers navigate the emotional, practical, and identity shifts that come with career transition.',
    },
    '/products/happy-trails': {
        title: 'Happy Trails',
        description: 'A digital course and roadmap to help dancers plan before, during, and after their pivot.',
    },
    '/services': {
        title: 'Services',
        description: 'Browse direct support services tailored to dancers navigating career change with more structure and confidence.',
    },
    '/services/mentorship': {
        title: 'Mentorship',
        description: 'Founder-led mentorship designed to help dancers move through career transition with guidance, clarity, and accountability.',
    },
    '/services/mock-interviews': {
        title: 'Mock Interviews',
        description: 'Mock interview support to help dancers translate their experience into language employers understand.',
    },
    '/resources': {
        title: 'Resources',
        description: 'Free tools, stories, podcasts, and research created to support dancers through career transition.',
    },
    '/resources/pivot-paths': {
        title: 'Pivot Paths',
        description: 'A guided mobile-first resource designed to support dancers with career transition, mindset wellness, and financial planning.',
    },
    '/resources/pivot-podcast': {
        title: 'Pivot Podcast',
        description: 'Listen to real stories and conversations about dancer career transition through the Pivot Podcast.',
    },
    '/resources/expectations-vs-reality': {
        title: 'Expectations vs Reality',
        description: 'Explore research and industry data showing the gap between dancers’ expectations and the reality of retirement and transition.',
    },
    '/resources/find-your-pivot-personality': {
        title: 'Find Your Pivot Personality',
        description: 'Take the Pivot Personality quiz to better understand how you approach career transition and what support fits best.',
    },
    '/find-your-pivot-personality': {
        title: 'Find Your Pivot Personality',
        description: 'Take the Pivot Personality quiz to better understand how you approach career transition and what support fits best.',
        canonicalPath: '/resources/find-your-pivot-personality',
        noindex: true,
    },
};

export const resolveRouteMetadata = (pathname: string, asPath: string) => {
    const meta = routeMeta[pathname] ?? routeMeta['/'];
    const canonicalPath = meta.canonicalPath ?? (asPath === '/' ? '/' : asPath.split('?')[0]);
    const canonicalUrl = `${siteUrl}${canonicalPath === '/' ? '/' : canonicalPath.replace(/\/$/, '')}/`;
    const pageTitle = meta.title === 'Pivot For Dancers' ? meta.title : `${meta.title} | Pivot For Dancers`;

    return {
        meta,
        canonicalUrl,
        pageTitle,
    };
};

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const { meta, canonicalUrl, pageTitle } = resolveRouteMetadata(router.pathname, router.asPath);

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={meta.description} />
                <link rel="canonical" href={canonicalUrl} />

                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Pivot For Dancers" />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:image:secure_url" content={ogImage} />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Pivot For Dancers social preview" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={ogImage} />
                <meta name="twitter:image:alt" content="Pivot For Dancers social preview" />

                {meta.noindex && <meta name="robots" content="noindex,follow" />}
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
