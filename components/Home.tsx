import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import {
    DeviceMockup,
    Reveal,
    SectionBlock,
    ShowcaseGrid,
} from './site/MarketingPrimitives';
import TestimonialsSection from './TestimonialSection';

const screens = [
    {
        variant: 'welcome' as const,
        eyebrow: 'Day 3 of 7',
        title: 'Welcome Back',
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
            'Career, mindset, and finance support in one place.',
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
            'Free, private, and easy to come back to.',
        ],
        ctaLabel: 'Explore the app',
    },
];

const youtubePlaylistUrl = 'https://www.youtube.com/playlist?list=PLjTsov7LqGgJ1XUG3vPMIFA6KOojU4_mm';

const featuredEpisodes = [
    {
        title: 'How Demi’s roller skating hobby turned into 500K followers on Instagram',
        guest: 'Demi Jenkins',
        duration: '22:37',
        videoId: '7EUfZS8mQtk',
        description: 'From dancer to social media creator, Demi shares how an unexpected interest became a whole new path.',
    },
    {
        title: 'Missing the magic of the stage? Here’s how Ali is finding meaning beyond her ballet career',
        guest: 'Ali Block',
        duration: '27:28',
        videoId: 'tnPkI_ezUto',
        description: 'Ali reflects on grief, identity, and the process of building purpose beyond ballet.',
    },
    {
        title: 'How a ski mountain helped Elise let go of her dance career',
        guest: 'Elise MacDonald',
        duration: '32:22',
        videoId: '16JMiSPzlBE',
        description: 'Elise shares how space away from dance helped her release an old identity and imagine a new chapter.',
    },
];

const podcastGuestCtaUrl = 'mailto:pivotfordancers@gmail.com?subject=Pivot%20Podcast%20Guest%20Request';

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
        <div
            ref={ref}
            className="rounded-[24px] border border-[#E8E0D4] bg-[#F5F6F2] p-3 shadow-[0_22px_50px_rgba(45,49,56,0.08)]"
        >
            <div className="rounded-[18px] border border-black/8 bg-white px-4 py-4">
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
        </div>
    );
};

const Home = () => {
    const [selectedEpisode, setSelectedEpisode] = useState(featuredEpisodes[0]);

    return (
        <>
            <section className="relative overflow-hidden bg-[#F7F2EA] px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
                <div className="pointer-events-none absolute inset-0 opacity-60">
                    <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(247,242,234,0.92),rgba(247,242,234,0))]" />
                    <div className="absolute inset-y-0 right-0 w-[32rem] bg-[radial-gradient(circle_at_center,rgba(100,124,144,0.08),transparent_70%)]" />
                </div>
                <div className="relative mx-auto max-w-[1280px]">
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

                                <div className="mt-5 max-w-xl rounded-[30px] border border-[#E8E0D4] bg-[#F5F6F2] p-4 shadow-[0_24px_56px_rgba(45,49,56,0.08)]">
                                    <div className="rounded-[24px] border border-black/8 bg-white px-5 py-5">
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
                            </div>
                        </Reveal>

                        <Reveal delay={120} className="lg:flex lg:h-full lg:flex-col">
                            <div className="rounded-[34px] border border-[#E8E0D4] bg-[#F5F6F2] p-4 shadow-[0_30px_70px_rgba(45,49,56,0.08)] md:p-5 lg:flex lg:h-full lg:flex-col">
                                <div className="rounded-[28px] border border-black/8 bg-white p-5 md:p-6 lg:flex lg:h-full lg:flex-col">
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
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <SectionBlock
                label="COMPREHENSIVE SUITE"
                title="Explore Our Complete Offerings"
                description="Discover our comprehensive suite of products, services, and resources designed specifically for dancers navigating career transitions."
                background="#F3EEE6"
            >
                <ShowcaseGrid
                    cards={[
                        {
                            title: 'Products',
                            description: 'Dancer-focused digital products to guide you through your career transition.',
                            href: '/products',
                            ctaLabel: 'Browse products',
                            image: '/assets/how-to-pivot-ebook.png',
                            tone: 'brand',
                        },
                        {
                            title: 'Services',
                            description: 'Bespoke career change services tailored to your unique experience and goals.',
                            href: '/services',
                            ctaLabel: 'View services',
                            image: '/assets/pivot-mentorship.png',
                            tone: 'dark',
                        },
                        {
                            title: 'Resources',
                            description: 'Countless hours of free, accessible content to help you feel less alone on your pivot journey.',
                            href: '/resources',
                            ctaLabel: 'Explore resources',
                            image: '/assets/data.png',
                            tone: 'light',
                        },
                    ]}
                />
            </SectionBlock>

            <SectionBlock
                label="WATCH + LISTEN"
                title="Real stories, not generic career advice"
                description="Podcast conversations and dancer stories that make career transition feel more human, specific, and possible."
                background="#FFFFFF"
            >
                <div className="grid gap-8 md:grid-cols-[1.04fr_0.96fr] md:items-stretch">
                    <Reveal className="h-full">
                        <div className="flex h-full flex-col overflow-hidden rounded-[34px] border border-[#E8E0D4] bg-[#F5F6F2] p-4 shadow-[0_30px_70px_rgba(45,49,56,0.08)]">
                            <div className="overflow-hidden rounded-[26px] border border-black/8 bg-white">
                                <iframe
                                    src={`https://www.youtube.com/embed/${selectedEpisode.videoId}?list=PLjTsov7LqGgJ1XUG3vPMIFA6KOojU4_mm`}
                                    title={selectedEpisode.title}
                                    className="aspect-video w-full md:min-h-[320px] lg:min-h-[360px]"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            <div className="mt-5 flex flex-1 flex-col justify-between gap-5 rounded-[26px] border border-[#E8E0D4] bg-white px-5 py-5">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="rounded-full bg-[#EEF2F5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#647C90]">
                                        Now Playing
                                    </span>
                                    <span className="rounded-full border border-black/8 bg-[#F8F6F0] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#111827]">
                                        {selectedEpisode.duration}
                                    </span>
                                </div>

                                <div>
                                    <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                        Share your story
                                    </p>
                                    <h3 className="mt-3 max-w-[16ch] text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-[#111827] lg:text-[32px]">
                                        Want to be interviewed for the podcast?
                                    </h3>
                                    <p className="mt-4 max-w-[60ch] text-[14px] leading-7 text-[#60636B]">
                                        If you have navigated a career pivot, identity shift, or unexpected transition beyond dance,
                                        we would love to hear your story and explore featuring it on Pivot Podcast.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
                                        href={podcastGuestCtaUrl}
                                        className="inline-flex items-center justify-center rounded-full border border-black/10 bg-[#F8F6F0] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#111827]"
                                    >
                                        Submit a guest request
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <div className="flex h-full flex-col gap-4">
                        {featuredEpisodes.map((episode, index) => (
                            <Reveal key={episode.title} delay={index * 90} className="flex-1">
                                <button
                                    type="button"
                                    onClick={() => setSelectedEpisode(episode)}
                                    className="flex h-full w-full flex-col justify-between rounded-[30px] border border-[#E8E0D4] bg-[#F5F6F2] p-6 text-left shadow-[0_22px_50px_rgba(45,49,56,0.06)] transition hover:-translate-y-1"
                                    style={{
                                        backgroundColor: selectedEpisode.videoId === episode.videoId ? '#EEF2F5' : '#F5F6F2',
                                        borderColor: selectedEpisode.videoId === episode.videoId ? '#647C90' : '#E8E0D4',
                                    }}
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                                {selectedEpisode.videoId === episode.videoId ? 'Now playing' : 'Featured episode'}
                                            </div>
                                            <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#647C90]">
                                                {episode.duration}
                                            </span>
                                        </div>
                                        <h3 className="mt-4 text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#111827]">
                                            {episode.title}
                                        </h3>
                                        <p className="mt-3 text-[14px] leading-7 text-[#60636B]">
                                            {episode.description}
                                        </p>
                                    </div>
                                    <div className="mt-5 flex items-center justify-between gap-4">
                                        <p className="text-[14px] leading-7 text-[#60636B]">{episode.guest}</p>
                                        <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[#111827]">
                                            Play
                                            <Play className="h-4 w-4" />
                                        </span>
                                    </div>
                                </button>
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
