import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Brain, Briefcase, DollarSign, Play } from 'lucide-react';
import {
    DeviceMockup,
    InfoGrid,
    Reveal,
    SectionBlock,
    ShowcaseGrid,
} from './site/MarketingPrimitives';
import TestimonialsSection from './TestimonialSection';

const screens = [
    {
        variant: 'welcome' as const,
        eyebrow: 'Day 3 of 7',
        title: 'Welcome Back John',
        lines: [
            'How today\'s scenario reveals your priorities.',
            'What your instincts say about the future you want.',
            'One small reflection to carry into the rest of your week.',
        ],
        ctaLabel: 'Save Entry',
    },
    {
        variant: 'paths' as const,
        eyebrow: 'Continue where you left off',
        title: 'Discover Your Dream Life',
        lines: [
            '7 day journeys designed specifically for professional dancers.',
            'Real experiences from dancers who have already pivoted.',
            'A direct path into mentorship and deeper support.',
        ],
        ctaLabel: 'Continue Path',
    },
    {
        variant: 'journal' as const,
        eyebrow: 'Private by design',
        title: 'Your personal journal',
        lines: [
            'Journal entries stay inside your own personal record.',
            'Career, mindset, and finance prompts live in one place.',
            'Free first steps can lead naturally into the wider ecosystem.',
        ],
        ctaLabel: 'Explore the app',
    },
];

const youtubePlaylistUrl = 'https://www.youtube.com/playlist?list=PLjTsov7LqGgJ1XUG3vPMIFA6KOojU4_mm';
const spotifyUrl = 'https://open.spotify.com/show/4PfCp7OJWQCaqfGsbjbDZW?si=731ca82e254c43bd';

const featuredEpisodes = [
    {
        title: 'How Demi’s roller skating hobby turned into 500K followers on Instagram',
        guest: 'Demi Jenkins',
        duration: '23 min',
        url: 'https://open.spotify.com/episode/5fdb0koSHkDYXFzP8rFjNH?si=aec61c7441064528&nd=1&dlsi=d8c9432002594cc8',
    },
    {
        title: 'Missing the magic of the stage? Here’s how Ali is finding meaning beyond her ballet career',
        guest: 'Ali Block',
        duration: '28 min',
        url: 'https://open.spotify.com/episode/1dpY9nKHk6oBVcpOieodSA?si=98326958322e40f0',
    },
    {
        title: 'How a ski mountain helped Elise let go of her dance career',
        guest: 'Elise MacDonald',
        duration: '33 min',
        url: 'https://open.spotify.com/episode/7eW8KrFIGM2B94vJEbdq07?si=fXQEDUUVTYu2FRUOGlAcvQ',
    },
];

const heroStats = [
    { value: '25+', label: 'years of\ndance experience' },
    { value: '1,309+', label: 'dancers in\nour community' },
    { value: '17+', label: 'countries\nparticipating' },
    { value: '20+', label: 'successful\nworkshops' },
];

const Counter = ({ end, duration }: { end: number; duration: number }) => {
    const [count, setCount] = useState(0);
    const frameRef = useRef<number>(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration / 16);

        const step = () => {
            start += increment;

            if (start < end) {
                setCount(Math.floor(start));
                frameRef.current = requestAnimationFrame(step);
                return;
            }

            setCount(end);
        };

        frameRef.current = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frameRef.current);
    }, [duration, end]);

    return <span>{count.toLocaleString()}</span>;
};

const StatCard = ({ value, label }: { value: string; label: string }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const numericValue = Number.parseInt(value.replace(/[^\d]/g, ''), 10);
    const prefixMatch = value.match(/^[^\d]+/);
    const prefix = prefixMatch?.[0] ?? '';
    const hasPlus = value.endsWith('+');
    const isNumeric = Number.isFinite(numericValue) && numericValue > 0;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setIsVisible(true);
                observer.disconnect();
            },
            { threshold: 0.35 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="rounded-[20px] border border-black/8 bg-[#F5F6F2] px-4 py-4 shadow-[0_10px_24px_rgba(17,24,39,0.04)]">
            <div className="text-[26px] font-bold leading-none text-[#111827]">
                {isNumeric ? (
                    <>
                        {prefix}
                        {isVisible ? <Counter end={numericValue} duration={1800} /> : 0}
                        {hasPlus ? '+' : ''}
                    </>
                ) : (
                    value
                )}
            </div>
            <div className="mt-2 whitespace-pre-line text-[14px] leading-6 text-[#60636B]">{label}</div>
        </div>
    );
};

const Home = () => {
    return (
        <>
            <section className="px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
                <div className="mx-auto max-w-[1280px]">
                    <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
                        <Reveal className="lg:flex lg:h-full lg:flex-col lg:justify-between lg:pt-10">
                            <div>
                                <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#7A7D86]">
                                    Support for dancers in transition
                                </div>
                                <h1 className="mt-5 max-w-xl text-[52px] font-bold leading-[0.93] tracking-[-0.04em] text-[#111827] md:text-[72px] lg:text-[92px]">
                                    Pivot from surviving to thriving
                                </h1>
                                <p className="mt-6 max-w-xl text-[18px] leading-8 text-[#60636B] md:text-[20px]">
                                    We’re helping professional dancers find meaning off the stage through dancer-specific career change resources.
                                </p>

                                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                    <a
                                        href="/resources/pivot-paths"
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111827] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white"
                                    >
                                        Start with Pivot Paths
                                    </a>
                                    <a
                                        href="https://tidycal.com/pivotfordancers/mentorship-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#111827]"
                                    >
                                        Book support
                                    </a>
                                </div>
                            </div>

                            <div className="mt-8 lg:mt-10">
                                <div className="grid max-w-xl gap-3 sm:grid-cols-2">
                                    {heroStats.map((item) => (
                                        <StatCard key={item.label} value={item.value} label={item.label} />
                                    ))}
                                </div>

                                <div className="mt-5 max-w-xl rounded-[26px] border border-black/8 bg-[#F5F6F2] p-5">
                                    <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#7A7D86]">
                                        Founder-led support
                                    </div>
                                    <div className="mt-3 text-[22px] font-bold leading-tight tracking-[-0.02em] text-[#111827]">
                                        Built by a former professional dancer who has already lived the pivot.
                                    </div>
                                    <p className="mt-3 text-[14px] leading-7 text-[#60636B]">
                                        The emotional side of the transition is treated as seriously as the practical side.
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={120} className="lg:flex lg:h-full lg:flex-col">
                            <div className="rounded-[30px] border border-black/8 bg-[#F5F6F2] p-5 md:p-6 lg:flex lg:h-full lg:flex-col">
                                <div className="mb-5 flex items-start justify-between gap-4">
                                    <div>
                                        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#7A7D86]">
                                            Pivot Paths preview
                                        </div>
                                        <div className="mt-2 max-w-sm text-[18px] font-semibold leading-7 text-[#111827]">
                                            Your private toolkit for career transition, mindset wellness, and financial planning
                                        </div>
                                    </div>
                                    <a
                                        href="/resources/pivot-paths"
                                        className="hidden items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#111827] md:inline-flex"
                                    >
                                        Explore
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                                <div className="lg:flex lg:flex-1 lg:items-center">
                                    <DeviceMockup screens={screens} />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <SectionBlock
                label="START WITH THE APP"
                title="Pivot Paths is the front door into the ecosystem"
                description="The homepage should make the free app feel like the obvious first step, then clearly show how users move deeper when they are ready."
                background="#111827"
                dark
            >
                <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
                    <Reveal>
                        <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-5">
                            <div className="rounded-[28px] bg-[#647C90] p-5">
                                <Image
                                    src="/assets/pivot-mentorship.png"
                                    alt="Pivot Paths preview"
                                    width={768}
                                    height={768}
                                    className="h-auto w-full rounded-[20px]"
                                />
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={120}>
                        <div className="space-y-4">
                            {[
                                'Warm welcome screens and journal prompts.',
                                'Roleplay flows and decision-based reflection.',
                                'Mindset, career, and finance paths built for dancers.',
                                'A free starting point that naturally feeds into products and services.',
                            ].map((item) => (
                                <div key={item} className="rounded-[26px] border border-white/10 bg-white/6 px-5 py-5 text-[16px] leading-8 text-white/80">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </SectionBlock>

            <SectionBlock
                label="ONE ECOSYSTEM"
                title="Different levels of support, one clearer journey"
                description="This is where the site should behave like Future: one flagship entry point, then simple paths into the next offer."
                background="#F5F6F2"
            >
                <ShowcaseGrid
                    cards={[
                        {
                            title: 'Products',
                            description: 'Digital guides and courses that give dancers more structure, more depth, and a stronger roadmap.',
                            href: '/products',
                            ctaLabel: 'Browse products',
                            image: '/assets/how-to-pivot-ebook.png',
                            tone: 'brand',
                        },
                        {
                            title: 'Services',
                            description: 'Direct support for dancers who want one-to-one guidance and a more personalised next move.',
                            href: '/services',
                            ctaLabel: 'View services',
                            image: '/assets/pivot-mentorship.png',
                            tone: 'dark',
                        },
                        {
                            title: 'Resources',
                            description: 'Free tools, podcast conversations, and research-backed content that help dancers feel less alone as they pivot.',
                            href: '/resources',
                            ctaLabel: 'Explore resources',
                            image: '/assets/data.png',
                            tone: 'light',
                        },
                    ]}
                />
            </SectionBlock>

            <SectionBlock
                label="WHY IT WORKS"
                title="Built around the real shape of a dancer’s pivot"
                description="The support has to combine practical direction with emotional intelligence. That is the brand’s real advantage."
                background="#FFFFFF"
            >
                <InfoGrid
                    cards={[
                        {
                            title: 'Mindset support',
                            description: 'Help dancers process the identity shift instead of pretending the pivot is purely tactical.',
                            icon: Brain,
                        },
                        {
                            title: 'Career direction',
                            description: 'Turn dance experience into language, options, and practical next moves beyond the stage.',
                            icon: Briefcase,
                        },
                        {
                            title: 'Financial clarity',
                            description: 'Bring the money conversation into the support rather than leaving it out of the transition story.',
                            icon: DollarSign,
                        },
                    ]}
                />
            </SectionBlock>

            <SectionBlock
                label="WATCH + LISTEN"
                title="Real stories, not generic career advice"
                description="Bring the playlist and episode discovery back onto the homepage so the site immediately shows the voices, stories, and lived experience behind the brand."
                background="#FFFFFF"
            >
                <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
                    <Reveal>
                        <div className="overflow-hidden rounded-[34px] border border-[#E8E0D4] bg-[#F5F6F2] p-4 shadow-[0_30px_70px_rgba(45,49,56,0.08)]">
                            <div className="overflow-hidden rounded-[26px] border border-black/8 bg-white">
                                <iframe
                                    src="https://www.youtube.com/embed/16JMiSPzlBE?list=PLjTsov7LqGgJ1XUG3vPMIFA6KOojU4_mm"
                                    title="Pivot Podcast playlist"
                                    className="aspect-video w-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href={youtubePlaylistUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white"
                                >
                                    Watch Playlist
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                                <a
                                    href={spotifyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#111827]"
                                >
                                    Listen on Spotify
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    <div className="space-y-4">
                        {featuredEpisodes.map((episode, index) => (
                            <Reveal key={episode.title} delay={index * 90}>
                                <a
                                    href={episode.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block rounded-[30px] border border-[#E8E0D4] bg-[#F5F6F2] p-6 shadow-[0_22px_50px_rgba(45,49,56,0.06)] transition hover:-translate-y-1"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                            Featured episode
                                        </div>
                                        <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#647C90]">
                                            {episode.duration}
                                        </span>
                                    </div>
                                    <h3 className="mt-4 text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#111827]">
                                        {episode.title}
                                    </h3>
                                    <div className="mt-4 flex items-center justify-between gap-4">
                                        <p className="text-[14px] leading-7 text-[#60636B]">{episode.guest}</p>
                                        <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[#111827]">
                                            Play
                                            <Play className="h-4 w-4" />
                                        </span>
                                    </div>
                                </a>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </SectionBlock>

            <TestimonialsSection />
        </>
    );
};

export default Home;
