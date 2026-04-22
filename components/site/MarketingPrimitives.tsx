import { ReactNode, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { ArrowRight, BarChart3, BookOpen, CheckCircle2, Download, Heart, House, NotebookPen, Play, PlusCircle, Search, Share2, Trash2, User } from 'lucide-react';

type CTA = {
    label: string;
    href: string;
    external?: boolean;
    dark?: boolean;
};

type Metric = {
    value: string;
    label: string;
};

type InfoCard = {
    title: string;
    description: string;
    icon?: React.ComponentType<{ className?: string }>;
    kicker?: string;
};

type ShowcaseCard = {
    title: string;
    kicker?: string;
    description: string;
    image?: string;
    icon?: React.ComponentType<{ className?: string }>;
    href?: string;
    tone?: 'light' | 'dark' | 'brand';
    ctaLabel?: string;
};

type FAQItem = {
    question: string;
    answer: ReactNode;
};

export const Reveal = ({
    children,
    className = '',
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            window.setTimeout(() => setVisible(true), delay);
            observer.disconnect();
        }, { threshold: 0.14 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 700ms ease, transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
        >
            {children}
        </div>
    );
};

export const SiteChrome = ({ children }: { children: ReactNode }) => (
    <>
        <Navigation />
        <main className="bg-white">{children}</main>
        <Footer />
    </>
);

export const SectionLabel = ({ text, inverse = false }: { text: string; inverse?: boolean }) => (
    <div
        className="text-[12px] font-bold uppercase tracking-[0.24em]"
        style={{ color: inverse ? 'rgba(255,255,255,0.68)' : '#7A7D86' }}
    >
        {text}
    </div>
);

const CTAButton = ({ cta }: { cta: CTA }) => (
    <a
        href={cta.href}
        target={cta.external ? '_blank' : undefined}
        rel={cta.external ? 'noopener noreferrer' : undefined}
        className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] transition hover:opacity-92"
        style={{
            backgroundColor: cta.dark ? '#111827' : '#FFFFFF',
            color: cta.dark ? '#FFFFFF' : '#111827',
            border: cta.dark ? 'none' : '1px solid rgba(17,24,39,0.12)',
        }}
    >
        {cta.label}
        <ArrowRight className="h-4 w-4" />
    </a>
);

export const MetricsRow = ({ metrics }: { metrics: Metric[] }) => (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
            <div
                key={metric.label}
                className="rounded-[24px] border border-black/8 bg-[#F5F6F2] px-5 py-5"
            >
                <div className="text-[34px] font-bold tracking-tight text-[#111827]">{metric.value}</div>
                <p className="mt-2 text-[14px] leading-6 text-[#60636B]">{metric.label}</p>
            </div>
        ))}
    </div>
);

export const InfoGrid = ({ cards, columns = 3 }: { cards: InfoCard[]; columns?: 1 | 2 | 3 | 4 }) => {
    const gridClass =
        columns === 1
            ? 'lg:grid-cols-1'
            : columns === 4
                ? 'lg:grid-cols-4'
                : columns === 2
                    ? 'lg:grid-cols-2'
                    : 'lg:grid-cols-3';

    return (
        <div className={`grid gap-5 ${gridClass}`}>
            {cards.map((card, index) => (
                <Reveal key={card.title} delay={index * 90}>
                    <div className="h-full rounded-[28px] border border-black/8 bg-white p-6 md:p-7">
                        <div className="flex items-start justify-between gap-4">
                            {card.icon ? (
                                <span className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-[#111827]">
                                    <card.icon className="h-5 w-5 text-white" />
                                </span>
                            ) : (
                                <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#9FA2A9]">
                                    0{index + 1}
                                </span>
                            )}
                            {card.kicker && (
                                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#7A7D86]">
                                    {card.kicker}
                                </span>
                            )}
                        </div>
                        <h3 className="mt-5 text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#111827]">{card.title}</h3>
                        <p className="mt-4 text-[15px] leading-8 text-[#60636B]">{card.description}</p>
                    </div>
                </Reveal>
            ))}
        </div>
    );
};

export const ShowcaseGrid = ({ cards }: { cards: ShowcaseCard[] }) => (
    <div className="grid gap-5 lg:grid-cols-3">
        {cards.map((card, index) => {
            const accent =
                card.tone === 'dark' ? '#111827' : card.tone === 'brand' ? '#647C90' : '#928490';
            const accentSurface =
                card.tone === 'dark' ? '#EEF2F5' : card.tone === 'brand' ? '#EEF2F5' : '#F8F6F0';
            return (
                <Reveal key={card.title} delay={index * 90}>
                    <a
                        href={card.href ?? '#'}
                        className="group block h-full rounded-[34px] border border-[#E8E0D4] bg-[#F5F6F2] p-4 shadow-[0_24px_56px_rgba(45,49,56,0.08)] transition hover:-translate-y-1"
                    >
                        <div className="flex h-full flex-col rounded-[28px] border border-black/8 bg-white p-5">
                            {(card.image || card.icon) && (
                                <div
                                    className="flex min-h-[220px] items-center justify-center rounded-[24px] border p-4 md:min-h-[240px]"
                                    style={{
                                        backgroundColor: '#FFFFFF',
                                        borderColor: 'rgba(17,24,39,0.08)',
                                    }}
                                >
                                    {card.image ? (
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            width={720}
                                            height={720}
                                            className="h-[220px] w-full object-contain"
                                        />
                                    ) : card.icon ? (
                                        <span style={{ color: accent }}>
                                            <card.icon className="h-16 w-16" />
                                        </span>
                                    ) : null}
                                </div>
                            )}
                            <div className="flex flex-1 flex-col px-1 pb-1 pt-6">
                                <div
                                    className="inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em]"
                                    style={{ backgroundColor: accentSurface, color: accent }}
                                >
                                    {card.kicker ?? card.title}
                                </div>
                                <h3 className="mt-4 text-[30px] font-bold leading-tight tracking-[-0.02em] text-[#111827]">
                                    {card.title}
                                </h3>
                                <p className="mt-4 flex-1 text-[15px] leading-8 text-[#60636B]">
                                    {card.description}
                                </p>
                                {card.ctaLabel && (
                                    <div
                                        className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em]"
                                        style={{ color: accent }}
                                    >
                                        {card.ctaLabel}
                                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </a>
                </Reveal>
            );
        })}
    </div>
);

export const PageHero = ({
    eyebrow,
    title,
    description,
    primaryCta,
    secondaryCta,
    metrics,
    media,
    dark = false,
}: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta?: CTA;
    secondaryCta?: CTA;
    metrics?: Metric[];
    media?: ReactNode;
    dark?: boolean;
}) => (
    <section
        className="px-4 pb-18 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32"
        style={{ backgroundColor: dark ? '#111827' : '#FFFFFF' }}
    >
        <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
                <Reveal className="text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start">
                        <SectionLabel text={eyebrow} inverse={dark} />
                    </div>
                    <h1
                        className="mx-auto mt-5 max-w-xl text-[48px] font-bold leading-[0.94] tracking-[-0.04em] md:text-[66px] lg:mx-0 lg:text-[82px]"
                        style={{ color: dark ? '#FFFFFF' : '#111827' }}
                    >
                        {title}
                    </h1>
                    <p
                        className="mx-auto mt-6 max-w-xl text-[18px] leading-8 md:text-[20px] lg:mx-0"
                        style={{ color: dark ? 'rgba(255,255,255,0.76)' : '#60636B' }}
                    >
                        {description}
                    </p>
                    {(primaryCta || secondaryCta) && (
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                            {primaryCta && <CTAButton cta={{ ...primaryCta, dark: primaryCta.dark ?? true }} />}
                            {secondaryCta && <CTAButton cta={secondaryCta} />}
                        </div>
                    )}
                    {metrics && metrics.length > 0 && (
                        <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2 lg:mx-0">
                            {metrics.slice(0, 4).map((metric) => (
                                <div
                                    key={metric.label}
                                    className="rounded-[20px] border border-black/8 bg-[#F5F6F2] px-4 py-4"
                                >
                                    <div className="text-[26px] font-bold leading-none text-[#111827]">{metric.value}</div>
                                    <div className="mt-2 text-[14px] leading-6 text-[#60636B]">{metric.label}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </Reveal>

                {media && <Reveal delay={120}>{media}</Reveal>}
            </div>
        </div>
    </section>
);

export const SectionBlock = ({
    background = '#FFFFFF',
    dark = false,
    label,
    title,
    description,
    aside,
    children,
}: {
    background?: string;
    dark?: boolean;
    label: string;
    title: string;
    description?: string;
    aside?: ReactNode;
    children?: ReactNode;
}) => (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24" style={{ backgroundColor: background }}>
        <div className="mx-auto max-w-[1280px]">
            <Reveal className="flex flex-col gap-5 text-center md:flex-row md:items-end md:justify-between md:text-left">
                <div className="max-w-3xl">
                    <div className="flex justify-center md:justify-start">
                        <SectionLabel text={label} inverse={dark} />
                    </div>
                    <h2
                        className="mt-4 text-[36px] font-bold leading-[1.02] tracking-[-0.03em] md:text-[50px]"
                        style={{ color: dark ? '#FFFFFF' : '#111827' }}
                    >
                        {title}
                    </h2>
                    {description && (
                        <p
                            className="mx-auto mt-5 max-w-2xl text-[18px] leading-8 md:mx-0"
                            style={{ color: dark ? 'rgba(255,255,255,0.76)' : '#60636B' }}
                        >
                            {description}
                        </p>
                    )}
                </div>
                <div className="flex justify-center md:block">
                    {aside}
                </div>
            </Reveal>
            {children && <div className="mt-12">{children}</div>}
        </div>
    </section>
);

export const QuotePanel = ({
    quote,
    author,
    role,
    image,
}: {
    quote: string;
    author: string;
    role: string;
    image: string;
}) => (
    <div className="rounded-[30px] border border-black/8 bg-[#F5F6F2] p-6 md:p-7">
        <div className="flex items-center gap-1 text-[#F4B740]">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.834 1.516 8.273L12 19.771l-7.452 3.642 1.516-8.273L0 9.306l8.332-1.151z" />
                </svg>
            ))}
        </div>
        <p className="mt-6 text-[24px] font-semibold leading-[1.65] tracking-[-0.02em] text-[#111827] md:text-[30px]">
            “{quote}”
        </p>
        <div className="mt-8 flex items-center gap-4 border-t border-black/8 pt-6">
            <Image src={image} alt={author} width={96} height={96} className="h-16 w-16 rounded-full object-cover" />
            <div>
                <div className="text-[18px] font-bold text-[#111827]">{author}</div>
                <div className="text-[14px] text-[#60636B]">{role}</div>
            </div>
        </div>
    </div>
);

const deviceMockTabs = [
    { icon: House, label: 'Home' },
    { icon: BookOpen, label: 'Paths' },
    { icon: Play, label: 'Learn' },
    { icon: User, label: 'Progress' },
    { icon: NotebookPen, label: 'Journal' },
    { icon: BarChart3, label: 'Reports' },
] as const;

const demoPhases = [
    { key: 'game', label: 'Game', tab: 'Paths' },
    { key: 'reports', label: 'Reports', tab: 'Reports' },
    { key: 'journal', label: 'Journal', tab: 'Journal' },
] as const;

type DemoPhaseKey = (typeof demoPhases)[number]['key'];

const phaseMarketing: Record<DemoPhaseKey, { eyebrow: string; title: string; description: string }> = {
    game: {
        eyebrow: 'Mindset shift',
        title: 'Untangle the stories dancers were taught to believe',
        description: 'Gentle interactive moments help users question old beliefs and imagine a future that feels more honest and more expansive.',
    },
    reports: {
        eyebrow: 'Patterns you can feel',
        title: 'Notice what is giving you energy back',
        description: 'The app gathers your reflections into a calmer view of what is changing, what is recurring, and what wants more attention.',
    },
    journal: {
        eyebrow: 'Private reflection',
        title: 'Catch the thought while it is still honest',
        description: 'A simple journal space helps users write what they are noticing in real time and return to it later.',
    },
};

const phaseIntroMeta: Record<DemoPhaseKey, { icon: React.ComponentType<{ className?: string }>; stat: string; note: string }> = {
    game: {
        icon: CheckCircle2,
        stat: 'A gentle mindset reset',
        note: 'A moment inside the app',
    },
    reports: {
        icon: BarChart3,
        stat: 'See your patterns clearly',
        note: 'A moment inside the app',
    },
    journal: {
        icon: NotebookPen,
        stat: 'Write in real time',
        note: 'A moment inside the app',
    },
};

const getIntroHoldMs = (phaseKey: DemoPhaseKey) => (phaseKey === 'game' ? 5000 : 5400);

function getTargetScrollOffset(
    phaseKey: DemoPhaseKey,
    viewport: HTMLDivElement | null,
    content: HTMLDivElement | null
) {
    const maxOffset = viewport && content ? Math.max(0, content.scrollHeight - viewport.clientHeight) : 0;
    if (phaseKey === 'reports') {
        return maxOffset > 8 ? Math.round(maxOffset / 8) * 8 : 0;
    }

    const preferredStopsPx: Partial<Record<DemoPhaseKey, number>> = {
        game: 0,
        journal: 240,
    };
    const targetOffset = maxOffset > 8 ? Math.min(maxOffset, preferredStopsPx[phaseKey] ?? maxOffset) : 0;
    return targetOffset > 8 ? Math.round(targetOffset / 8) * 8 : 0;
}

export const DeviceMockup = ({
    screens,
    dark = false,
}: {
    screens: {
        title: string;
        description?: string;
        lines: string[];
        eyebrow?: string;
        ctaLabel?: string;
        variant?: 'onboarding' | 'home' | 'welcome';
    }[];
    dark?: boolean;
}) => {
    const [phaseIndex, setPhaseIndex] = useState(0);
    const [displayedPhaseIndex, setDisplayedPhaseIndex] = useState(0);
    const [scrollOffset, setScrollOffset] = useState(0);
    const [scrollDurationMs, setScrollDurationMs] = useState(6400);
    const [isScrollAnimating, setIsScrollAnimating] = useState(false);
    const [showPhaseIntro, setShowPhaseIntro] = useState(true);
    const [gameTapStep, setGameTapStep] = useState(0);
    const [reportsDemoStep, setReportsDemoStep] = useState(0);
    const [journalDemoText, setJournalDemoText] = useState('');
    const [journalDemoStep, setJournalDemoStep] = useState(0);
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const demoRevealSettleMs = 1100;
    const scrollStartDelayMs = 760;
    const demoContentSwapMs = 900;

    useEffect(() => {
        let enableAnimationTimer: number | undefined;
        let hideIntroTimer: number | undefined;
        let startScrollTimer: number | undefined;
        let advanceTimer: number | undefined;
        let swapDisplayedPhaseTimer: number | undefined;
        const frame = window.requestAnimationFrame(() => {
            const phase = demoPhases[phaseIndex];
            const topPauseMs = getIntroHoldMs(phase.key);
            const nextDuration =
                phase.key === 'game'
                    ? 7600
                    : phase.key === 'reports'
                        ? 13200
                        : 11000;
            const endPauseMs = 1300;

            setShowPhaseIntro(true);
            setIsScrollAnimating(false);
            setScrollDurationMs(nextDuration);
            setScrollOffset(0);

            swapDisplayedPhaseTimer = window.setTimeout(() => {
                setDisplayedPhaseIndex(phaseIndex);
            }, demoContentSwapMs);

            enableAnimationTimer = window.setTimeout(() => {
                setShowPhaseIntro(false);
            }, topPauseMs);

            hideIntroTimer = window.setTimeout(() => {
                setIsScrollAnimating(true);

                startScrollTimer = window.setTimeout(() => {
                    setScrollOffset(getTargetScrollOffset(phase.key, viewportRef.current, contentRef.current));
                }, scrollStartDelayMs);
            }, topPauseMs + demoRevealSettleMs);

            advanceTimer = window.setTimeout(() => {
                setIsScrollAnimating(false);
                setScrollOffset(0);
                setShowPhaseIntro(true);
                setPhaseIndex((value) => (value + 1) % demoPhases.length);
            }, topPauseMs + demoRevealSettleMs + scrollStartDelayMs + nextDuration + endPauseMs);
        });

        return () => {
            window.cancelAnimationFrame(frame);
            if (swapDisplayedPhaseTimer) window.clearTimeout(swapDisplayedPhaseTimer);
            if (enableAnimationTimer) window.clearTimeout(enableAnimationTimer);
            if (hideIntroTimer) window.clearTimeout(hideIntroTimer);
            if (startScrollTimer) window.clearTimeout(startScrollTimer);
            if (advanceTimer) window.clearTimeout(advanceTimer);
        };
    }, [phaseIndex]);

    useEffect(() => {
        const phaseKey = demoPhases[displayedPhaseIndex]?.key;
        if (phaseKey !== 'game') {
            setGameTapStep(0);
            return;
        }

        setGameTapStep(0);
        const baseDelayMs = getIntroHoldMs(phaseKey) + demoRevealSettleMs + 350;

        const timers = [
            window.setTimeout(() => setGameTapStep(1), baseDelayMs + 700),
            window.setTimeout(() => setGameTapStep(2), baseDelayMs + 1700),
            window.setTimeout(() => setGameTapStep(3), baseDelayMs + 2800),
            window.setTimeout(() => setGameTapStep(4), baseDelayMs + 3900),
            window.setTimeout(() => setGameTapStep(5), baseDelayMs + 5000),
            window.setTimeout(() => setGameTapStep(6), baseDelayMs + 6200),
            window.setTimeout(() => setGameTapStep(7), baseDelayMs + 7250),
            window.setTimeout(() => setGameTapStep(8), baseDelayMs + 8200),
            window.setTimeout(() => setGameTapStep(9), baseDelayMs + 9300),
            window.setTimeout(() => setGameTapStep(10), baseDelayMs + 10450),
            window.setTimeout(() => setGameTapStep(11), baseDelayMs + 11600),
        ];

        return () => {
            timers.forEach((timer) => window.clearTimeout(timer));
        };
    }, [displayedPhaseIndex]);

    useEffect(() => {
        const phaseKey = demoPhases[displayedPhaseIndex]?.key;
        if (phaseKey !== 'reports') {
            setReportsDemoStep(0);
            return;
        }

        setReportsDemoStep(0);
        const baseDelayMs = getIntroHoldMs(phaseKey) + demoRevealSettleMs + 1000;

        const timers = [
            window.setTimeout(() => setReportsDemoStep(1), baseDelayMs + 1900),
            window.setTimeout(() => setReportsDemoStep(2), baseDelayMs + 3700),
            window.setTimeout(() => setReportsDemoStep(3), baseDelayMs + 5900),
            window.setTimeout(() => setReportsDemoStep(4), baseDelayMs + 8100),
        ];

        return () => {
            timers.forEach((timer) => window.clearTimeout(timer));
        };
    }, [displayedPhaseIndex]);

    useEffect(() => {
        const phaseKey = demoPhases[displayedPhaseIndex]?.key;
        if (phaseKey !== 'journal') {
            setJournalDemoText('');
            setJournalDemoStep(0);
            return;
        }

        const demoText = "Today I realised I don't need to have every answer before I start exploring what comes next.";
        setJournalDemoText('');
        setJournalDemoStep(0);
        const baseDelayMs = getIntroHoldMs(phaseKey) + demoRevealSettleMs + 900;

        let intervalId: number | undefined;

        const startTyping = window.setTimeout(() => {
            setJournalDemoStep(1);
            let index = 0;
            intervalId = window.setInterval(() => {
                index += 1;
                setJournalDemoText(demoText.slice(0, index));
                if (index >= demoText.length) {
                    if (intervalId) window.clearInterval(intervalId);
                    setJournalDemoStep(2);
                }
            }, 54);
        }, baseDelayMs + 1500);

        const chooseMood = window.setTimeout(() => {
            setJournalDemoStep(3);
        }, baseDelayMs + 7000);

        const saveEntry = window.setTimeout(() => {
            setJournalDemoStep(4);
        }, baseDelayMs + 8300);

        return () => {
            window.clearTimeout(startTyping);
            window.clearTimeout(chooseMood);
            window.clearTimeout(saveEntry);
            if (intervalId) window.clearInterval(intervalId);
        };
    }, [displayedPhaseIndex]);

    const renderTabBar = (activeTab: (typeof deviceMockTabs)[number]['label']) => (
        <div className="grid grid-cols-6 border-t border-black/5 bg-[#E2DED0] px-2 py-2">
            {deviceMockTabs.map((item) => {
                const Icon = item.icon;
                const isActive = item.label === activeTab;
                return (
                    <div key={item.label} className="flex flex-col items-center gap-1 py-1">
                        <Icon className={`h-4 w-4 ${isActive ? 'text-[#4E4F50]' : 'text-[#928490]'}`} />
                        <span className={`text-[8px] font-medium ${isActive ? 'text-[#4E4F50]' : 'text-[#928490]'}`}>
                            {item.label}
                        </span>
                        <span className={`h-0.5 rounded-full transition-all duration-300 ${isActive ? 'mt-0.5 w-5 bg-[#647C90]' : 'mt-0.5 w-2 bg-transparent'}`} />
                    </div>
                );
            })}
        </div>
    );

    const renderTabShell = (activeTab: (typeof deviceMockTabs)[number]['label'], content: ReactNode) => (
        <div key={activeTab} className="flex h-full flex-col bg-[#E2DED0]">
            <div
                ref={viewportRef}
                className="min-h-0 flex-1 overflow-hidden"
            >
                <div
                    ref={contentRef}
                    className="min-h-full"
                    style={{
                        transform: `translateY(-${scrollOffset}px)`,
                        transition: isScrollAnimating ? `transform ${scrollDurationMs}ms cubic-bezier(0.16, 0.84, 0.24, 1)` : 'none',
                        willChange: 'transform',
                    }}
                >
                    {content}
                </div>
            </div>
            {renderTabBar(activeTab)}
        </div>
    );

    const renderGameTab = () => {
        type MythCardId = 'plan-b' | 'dream' | 'never-give-up';
        type GameFrame = {
            matchedCount: number;
            status: string;
            selectedMyths: MythCardId[];
            selectedRealities: MythCardId[];
            matchedPairs: MythCardId[];
            mismatchReality: MythCardId | null;
            pointer: { left: string; top: string } | null;
        };

        const gameFrames: GameFrame[] = [
            {
                matchedCount: 0,
                status: 'Watch the demo',
                selectedMyths: [],
                selectedRealities: [],
                matchedPairs: [],
                mismatchReality: null,
                pointer: null,
            },
            {
                matchedCount: 0,
                status: 'Select a myth',
                selectedMyths: ['plan-b'],
                selectedRealities: [],
                matchedPairs: [],
                mismatchReality: null,
                pointer: { left: '26%', top: '36%' },
            },
            {
                matchedCount: 0,
                status: 'Find the right reality',
                selectedMyths: ['plan-b'],
                selectedRealities: ['plan-b'],
                matchedPairs: [],
                mismatchReality: null,
                pointer: { left: '75%', top: '68%' },
            },
            {
                matchedCount: 1,
                status: 'Pair matched',
                selectedMyths: [],
                selectedRealities: [],
                matchedPairs: ['plan-b'],
                mismatchReality: null,
                pointer: null,
            },
            {
                matchedCount: 1,
                status: 'Select a myth',
                selectedMyths: ['dream'],
                selectedRealities: [],
                matchedPairs: ['plan-b'],
                mismatchReality: null,
                pointer: { left: '26%', top: '52%' },
            },
            {
                matchedCount: 1,
                status: 'Wrong pair',
                selectedMyths: ['dream'],
                selectedRealities: ['never-give-up'],
                matchedPairs: ['plan-b'],
                mismatchReality: null,
                pointer: { left: '75%', top: '52%' },
            },
            {
                matchedCount: 1,
                status: 'Not a match',
                selectedMyths: ['dream'],
                selectedRealities: ['never-give-up'],
                matchedPairs: ['plan-b'],
                mismatchReality: 'never-give-up',
                pointer: { left: '75%', top: '52%' },
            },
            {
                matchedCount: 1,
                status: 'Try again',
                selectedMyths: ['dream'],
                selectedRealities: [],
                matchedPairs: ['plan-b'],
                mismatchReality: null,
                pointer: { left: '26%', top: '52%' },
            },
            {
                matchedCount: 1,
                status: 'Find the right reality',
                selectedMyths: ['dream'],
                selectedRealities: ['dream'],
                matchedPairs: ['plan-b'],
                mismatchReality: null,
                pointer: { left: '75%', top: '36%' },
            },
            {
                matchedCount: 2,
                status: 'Pair matched',
                selectedMyths: [],
                selectedRealities: [],
                matchedPairs: ['plan-b', 'dream'],
                mismatchReality: null,
                pointer: null,
            },
            {
                matchedCount: 2,
                status: 'Next pair',
                selectedMyths: ['never-give-up'],
                selectedRealities: [],
                matchedPairs: ['plan-b', 'dream'],
                mismatchReality: null,
                pointer: { left: '26%', top: '68%' },
            },
            {
                matchedCount: 2,
                status: 'Find the right reality',
                selectedMyths: ['never-give-up'],
                selectedRealities: ["never-give-up"],
                matchedPairs: ['plan-b', 'dream'],
                mismatchReality: null,
                pointer: { left: '75%', top: '52%' },
            },
            {
                matchedCount: 3,
                status: 'Two pairs matched',
                selectedMyths: [],
                selectedRealities: [],
                matchedPairs: ['plan-b', 'dream', 'never-give-up'],
                mismatchReality: null,
                pointer: null,
            },
        ];

        const frame = gameFrames[Math.min(gameTapStep, gameFrames.length - 1)];
        const myths: { id: MythCardId; text: string }[] = [
            { id: 'plan-b', text: "Dancers shouldn't have a plan B." },
            { id: 'dream', text: 'Dance is the dream.' },
            { id: 'never-give-up', text: 'Never give up.' },
        ];
        const realities: { id: MythCardId; text: string }[] = [
            { id: 'dream', text: 'You can have more than one dream.' },
            { id: 'never-give-up', text: "It's ok to let go." },
            { id: 'plan-b', text: 'A backup plan is essential.' },
        ];

        return renderTabShell('Paths', (
        <div className="space-y-3 px-3 pb-4 pt-4">
            <div className="relative rounded-[20px] bg-[#F5F5F5] px-3 py-3 shadow-[0_10px_22px_rgba(17,24,39,0.08)]">
                <div className="mb-3 px-1 text-center">
                    <div className="font-serif text-[20px] font-bold leading-tight text-[#647C90]">
                        Myth Buster
                    </div>
                    <div className="mt-1 text-[10px] font-medium text-[#928490]">
                        Tap to match myths with their realities
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-[14px] bg-[#E2DED0] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#647C90]">
                        Myths
                    </div>
                    <div className="rounded-[14px] bg-[#E2DED0] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#647C90]">
                        Realities
                    </div>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                        {myths.map((item) => (
                            (() => {
                                const isMatched = frame.matchedPairs.includes(item.id);
                                const isSelected = frame.selectedMyths.includes(item.id);
                                return (
                            <div
                                key={item.id}
                                className={`relative flex h-[100px] items-center justify-center rounded-[12px] border-2 px-3 py-3 text-center shadow-[0_8px_18px_rgba(17,24,39,0.06)] transition-all duration-300 ${
                                    isMatched
                                        ? 'border-[#5A7D7B] bg-[rgba(90,125,123,0.2)]'
                                        : isSelected
                                            ? 'border-[#647C90] bg-[rgba(100,124,144,0.2)]'
                                            : 'border-transparent bg-[rgba(146,132,144,0.1)]'
                                }`}
                            >
                                <div
                                    className={`text-[12px] leading-[18px] ${
                                        isMatched
                                            ? 'font-medium text-[#5A7D7B]'
                                            : isSelected
                                                ? 'font-semibold text-[#647C90]'
                                                : 'font-normal text-[#4E4F50]'
                                    }`}
                                >
                                    {item.text}
                                </div>
                                {isSelected && frame.pointer && (
                                    <div className="pointer-events-none absolute right-2 top-2">
                                        <span className="relative flex h-4 w-4 items-center justify-center">
                                            <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-[#928490]/50" />
                                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#928490]" />
                                        </span>
                                    </div>
                                )}
                            </div>
                                );
                            })()
                        ))}
                    </div>
                    <div className="space-y-2">
                        {realities.map((item) => (
                            (() => {
                                const isMatched = frame.matchedPairs.includes(item.id);
                                const isSelected = frame.selectedRealities.includes(item.id);
                                const isMismatch = frame.mismatchReality === item.id;
                                return (
                            <div
                                key={item.id}
                                className={`relative flex h-[100px] items-center justify-center rounded-[12px] border-2 px-3 py-3 text-center shadow-[0_8px_18px_rgba(17,24,39,0.06)] transition-all duration-300 ${
                                    isMatched
                                        ? 'border-[#5A7D7B] bg-[rgba(90,125,123,0.2)]'
                                        : isMismatch
                                            ? 'border-[#C96B6B] bg-[rgba(201,107,107,0.14)]'
                                        : isSelected
                                            ? 'border-[#647C90] bg-[rgba(100,124,144,0.2)]'
                                            : 'border-transparent bg-[rgba(146,132,144,0.1)]'
                                }`}
                            >
                                <div
                                    className={`text-[12px] leading-[18px] ${
                                        isMatched
                                            ? 'font-medium text-[#5A7D7B]'
                                            : isMismatch
                                                ? 'font-medium text-[#dc3545]'
                                                : isSelected
                                                    ? 'font-semibold text-[#647C90]'
                                                    : 'font-normal text-[#4E4F50]'
                                    }`}
                                >
                                    {item.text}
                                </div>
                                {isSelected && frame.pointer && (
                                    <div className="pointer-events-none absolute right-2 top-2">
                                        <span className="relative flex h-4 w-4 items-center justify-center">
                                            <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-[#928490]/50" />
                                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#928490]" />
                                        </span>
                                    </div>
                                )}
                            </div>
                                );
                            })()
                        ))}
                    </div>
                </div>
                <div
                    className="pointer-events-none absolute z-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                        opacity: frame.pointer ? 1 : 0,
                        left: frame.pointer?.left ?? '50%',
                        top: frame.pointer?.top ?? '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <span className="relative block h-8 w-8">
                        <span className="absolute inset-0 rounded-full bg-white/72 shadow-[0_10px_18px_rgba(17,24,39,0.14)]" />
                        <span className="absolute inset-[5px] rounded-full border-2 bg-[#FAF9F5]" style={{ borderColor: frame.mismatchReality ? '#C96B6B' : '#928490' }} />
                        <span className="absolute inset-[11px] rounded-full" style={{ backgroundColor: frame.mismatchReality ? '#C96B6B' : '#928490' }} />
                    </span>
                </div>
            </div>
        </div>
    ));
    };

    const renderJournalTab = () => {
        const journalEntries = [
            {
                id: 'new',
                tag: 'Discover Dream Life • Day 4',
                content: journalDemoText,
                mood: 'Hopeful',
                isNew: true,
            },
            {
                id: 'entry-1',
                tag: 'Discover Dream Life • Day 3',
                content: 'I want more space to imagine a future that feels like mine.',
                mood: 'Hopeful',
            },
            {
                id: 'entry-2',
                tag: 'Confidence Gap • Day 5',
                content: 'Today made me realize how much identity is wrapped up in dance.',
                mood: 'Reflective',
            },
            {
                id: 'entry-3',
                tag: 'General',
                content: 'The journal helps me slow down and notice what I actually want.',
                mood: 'Calm',
            },
        ];

        return renderTabShell('Journal', (
            <div className="space-y-3 px-3 pb-4 pt-4">
                <div className="rounded-[12px] bg-[#F5F5F5] px-4 py-3">
                    <div className="flex items-center gap-3 text-[#928490]">
                        <Search className="h-4 w-4" />
                        <span className="text-[11px]">Search entries...</span>
                    </div>
                </div>
                <div className="rounded-[12px] bg-[#F5F5F5] px-4 py-3">
                    <div className="text-[11px] font-semibold text-[#647C90]">Filter by mood:</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {[
                            { label: 'All', active: journalDemoStep <= 2 },
                            { label: 'Hopeful', active: journalDemoStep >= 3 },
                            { label: 'Calm', active: false },
                            { label: 'Reflective', active: false },
                        ].map((item) => (
                            <span
                                key={item.label}
                                className={`rounded-full px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] transition-all duration-300 ${
                                    item.active ? 'bg-[#647C90] text-[#E2DED0]' : 'bg-[#E2DED0] text-[#647C90]'
                                }`}
                            >
                                {item.label}
                            </span>
                        ))}
                    </div>
                </div>

                <div
                    className={`rounded-[16px] px-4 py-4 shadow-[0_10px_22px_rgba(17,24,39,0.08)] transition-all duration-300 ${
                        journalDemoStep >= 1
                            ? 'border border-[#647C90]/25 bg-[rgba(100,124,144,0.1)]'
                            : 'bg-[#F5F5F5]'
                    }`}
                >
                    <div className="mb-2 flex items-center justify-between gap-3">
                        <div className="text-[11px] font-semibold text-[#647C90]">New Entry</div>
                        <NotebookPen className="h-4 w-4 text-[#647C90]" />
                    </div>
                    <div className="min-h-[84px] rounded-[12px] bg-white px-3 py-3 text-[11px] leading-4 text-[#4E4F50]">
                        {journalDemoText}
                        {journalDemoStep >= 1 && journalDemoStep < 4 && (
                            <span className="ml-0.5 inline-block h-[14px] w-[1.5px] animate-pulse bg-[#647C90] align-middle" />
                        )}
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-3">
                        <div className="inline-flex h-[34px] w-[112px] items-center justify-center rounded-full bg-[#647C90] px-3 py-2 text-[9px] font-medium uppercase tracking-[0.12em] text-[#E2DED0]">
                            {journalDemoStep >= 3 ? 'Hopeful' : 'Mood'}
                        </div>
                        <div
                            className={`inline-flex h-[34px] w-[112px] items-center justify-center gap-2 rounded-full px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                                journalDemoStep >= 4
                                    ? 'bg-[#5A7D7B] text-[#E2DED0]'
                                    : 'bg-[#647C90] text-[#E2DED0]'
                            }`}
                        >
                            {journalDemoStep >= 4 ? 'Saved' : 'Add Entry'}
                            <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>
                    </div>
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#647C90]">
                    {journalDemoStep >= 4 ? '4 Entries' : '3 Entries'}
                </div>

                {journalEntries
                    .filter((entry) => !entry.isNew || journalDemoStep >= 4)
                    .map((entry) => (
                        <div
                            key={entry.id}
                            className={`rounded-[16px] px-4 py-4 shadow-[0_10px_22px_rgba(17,24,39,0.08)] transition-all duration-300 ${
                                entry.isNew
                                    ? 'border border-[#5A7D7B]/25 bg-[rgba(90,125,123,0.12)]'
                                    : 'bg-[#F5F5F5]'
                            }`}
                        >
                            <div className="mb-3 flex items-start justify-between gap-3">
                                <div className="text-[11px] font-semibold text-[#647C90]">{entry.tag}</div>
                                <Trash2 className="h-4 w-4 text-[#928490]" />
                            </div>
                            <p className="text-[11px] leading-4 text-[#4E4F50]">{entry.content}</p>
                            <div className="mt-3 inline-flex rounded-full bg-[#647C90] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-[#E2DED0]">
                                {entry.mood}
                            </div>
                        </div>
                    ))}

                <div className="ml-auto flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#647C90] text-[#E2DED0] shadow-[0_10px_22px_rgba(17,24,39,0.18)]">
                    <PlusCircle className="h-6 w-6" />
                </div>
            </div>
        ));
    };

    const renderReportsTab = () => renderTabShell('Reports', (
        <div className="space-y-3 px-3 pb-4 pt-4">
            <div className="flex gap-2 overflow-hidden">
                {[
                    { label: 'This path', active: reportsDemoStep <= 1 },
                    { label: 'All paths', active: reportsDemoStep === 2 },
                    { label: '30 days', active: reportsDemoStep >= 3 },
                ].map((item) => (
                    <div
                        key={item.label}
                        className={`rounded-full border px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                            item.active
                                ? 'border-[#647C90] bg-[#647C90] text-[#E2DED0]'
                                : 'border-[#D9D3C6] bg-white text-[#928490]'
                        }`}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
            <div className="rounded-[18px] bg-[#F5F5F5] px-4 py-4 shadow-[0_10px_22px_rgba(17,24,39,0.08)]">
                <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#928490]">Completed path</div>
                <div className="mt-2 flex items-center justify-between gap-3">
                    <div>
                        <div className="font-serif text-[20px] leading-tight text-[#647C90]">Your Dream Life</div>
                        <div className="mt-1 text-[11px] text-[#928490]">7 of 7 days completed</div>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#647C90] text-[12px] text-[#E2DED0]">
                        ✓
                    </div>
                </div>
            </div>
            <div
                className={`rounded-[20px] px-4 py-4 shadow-[0_10px_22px_rgba(17,24,39,0.08)] transition-all duration-300 ${
                    reportsDemoStep === 1
                        ? 'border border-[#647C90]/25 bg-[rgba(100,124,144,0.12)]'
                        : 'bg-[#F5F5F5]'
                }`}
            >
                <div className="mb-3 flex items-center gap-2">
                    <Heart className="h-4 w-4 text-[#647C90]" />
                    <div className="font-serif text-[18px] text-[#647C90]">Mood Analysis</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[conic-gradient(#647C90_0_45%,#928490_45%_75%,#E2DED0_75%_100%)]">
                        <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-[#F5F5F5]">
                            <div className="text-[14px] font-semibold text-[#647C90]">12</div>
                            <div className="text-[8px] uppercase tracking-[0.12em] text-[#928490]">Total</div>
                        </div>
                    </div>
                    <div className="flex-1 space-y-2">
                        {[
                            ['Hopeful', '45%'],
                            ['Reflective', '30%'],
                            ['Calm', '25%'],
                        ].map(([label, pct]) => (
                            <div key={label}>
                                <div className="mb-1 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.12em] text-[#647C90]">
                                    <span>{label}</span>
                                    <span>{pct}</span>
                                </div>
                                <div className="h-1.5 overflow-hidden rounded-full bg-[#E2DED0]">
                                    <div className="h-full rounded-full bg-[#647C90]" style={{ width: pct }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="mt-3 text-[11px] leading-4 text-[#928490]">
                    Most Common Mood: Hopeful
                </p>
            </div>
            <div
                className={`rounded-[20px] px-4 py-4 shadow-[0_10px_22px_rgba(17,24,39,0.08)] transition-all duration-300 ${
                    reportsDemoStep === 2
                        ? 'border border-[#647C90]/25 bg-[rgba(100,124,144,0.12)]'
                        : 'bg-[#F5F5F5]'
                }`}
            >
                <div className="mb-3 flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-[#647C90]" />
                    <div className="font-serif text-[18px] text-[#647C90]">Path Activity</div>
                </div>
                <div className="space-y-2.5">
                    {[
                        ['Your Dream Life', '7 reflections', '92%'],
                        ['Money Mindsets', '5 reflections', '64%'],
                        ['Prep Your Pivot', '3 reflections', '41%'],
                    ].map(([label, meta, pct]) => (
                        <div key={label} className="rounded-[14px] bg-white px-3 py-3">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <div className="text-[11px] font-semibold text-[#4E4F50]">{label}</div>
                                    <div className="mt-1 text-[9px] uppercase tracking-[0.12em] text-[#928490]">{meta}</div>
                                </div>
                                <div className="text-[10px] font-semibold text-[#647C90]">{pct}</div>
                            </div>
                            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#E2DED0]">
                                <div className="h-full rounded-full bg-[#647C90]" style={{ width: pct }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {[
                { title: 'Dreamer Type', text: 'The Expansive Dreamer. You are motivated by possibility, freedom, and a life that feels emotionally rich.' },
                { title: 'Core Values', text: 'Connection, freedom, creativity' },
                { title: 'Curiosity Assessment', text: 'High readiness to explore new paths' },
                { title: 'Energy Audit', text: 'Restorative structure works best for you' },
                { title: 'Momentum Signal', text: 'Your clearest growth pattern appears after journaling and reflective path days.' },
                { title: 'Recommended Next Step', text: 'Continue with Prep Your Pivot to translate self-knowledge into concrete career action.' },
            ].map((item, index) => (
                <div
                    key={item.title}
                    className={`rounded-[18px] border-l-4 px-4 py-3.5 shadow-[0_10px_22px_rgba(17,24,39,0.08)] transition-all duration-300 ${
                        reportsDemoStep === 3 && index >= 4
                            ? 'border-[#647C90] bg-[rgba(100,124,144,0.12)]'
                            : 'border-[#647C90] bg-[#F5F5F5]'
                    }`}
                >
                    <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#928490]">{item.title}</div>
                    <div className="mt-2 text-[12px] leading-4 text-[#4E4F50]">{item.text}</div>
                </div>
            ))}
            <div
                className={`rounded-[20px] px-4 py-4 shadow-[0_10px_22px_rgba(17,24,39,0.08)] transition-all duration-300 ${
                    reportsDemoStep === 4
                        ? 'border border-[#647C90]/25 bg-[rgba(100,124,144,0.12)]'
                        : 'bg-[#F5F5F5]'
                }`}
            >
                <div className="font-serif text-[18px] text-[#647C90]">Recent Wins</div>
                <div className="mt-3 space-y-2">
                    {[
                        'Completed 3 guided days this week',
                        'Logged 12 journal reflections this month',
                        'Mood stability improved across the last 14 days',
                    ].map((item) => (
                        <div key={item} className="flex items-start gap-2 rounded-[14px] bg-white px-3 py-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#647C90]" />
                            <div className="text-[11px] leading-4 text-[#4E4F50]">{item}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className={`rounded-[20px] px-4 py-4 text-center shadow-[0_10px_22px_rgba(17,24,39,0.08)] transition-all duration-300 ${
                    reportsDemoStep === 4
                        ? 'border border-[#647C90]/25 bg-[rgba(100,124,144,0.12)]'
                        : 'bg-[#F5F5F5]'
                }`}
            >
                <Download className="mx-auto h-7 w-7 text-[#647C90]" />
                <div className="mt-3 font-serif text-[18px] text-[#647C90]">Share Your Progress</div>
                <p className="mt-2 text-[11px] leading-4 text-[#928490]">
                    Export and share your journal insights with others or keep for your records.
                </p>
                <div className={`mt-3 inline-flex items-center gap-2 rounded-full px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#E2DED0] transition-all duration-300 ${
                    reportsDemoStep === 4 ? 'scale-105 bg-[#556c7f]' : 'bg-[#647C90]'
                }`}>
                    Export Report
                    <Share2 className="h-3.5 w-3.5" />
                </div>
            </div>
        </div>
    ));

    const renderCurrentPhase = () => {
        const phase = demoPhases[displayedPhaseIndex];
        switch (phase.key) {
            case 'game':
                return renderGameTab();
            case 'reports':
                return renderReportsTab();
            case 'journal':
                return renderJournalTab();
            default:
                return renderGameTab();
        }
    };

    const activePhase = demoPhases[phaseIndex];
    const activeMarketing = phaseMarketing[activePhase.key];
    const activeIntro = phaseIntroMeta[activePhase.key];
    const ActiveIntroIcon = activeIntro.icon;

    return (
        <div className="relative mx-auto h-[460px] w-[228px] sm:h-[544px] sm:w-[270px] md:h-[640px] md:w-[318px] lg:h-[584px] lg:w-[290px] xl:h-[624px] xl:w-[310px]">
            <div className="absolute left-1/2 top-0 h-[640px] w-[318px] -translate-x-1/2 origin-top transform-gpu scale-[0.72] sm:scale-[0.85] md:scale-100 lg:scale-[0.912] xl:scale-[0.975]">
            <div
                className="absolute inset-0 z-10 rounded-[42px] border-[10px] border-[#111827] bg-[#111827] p-2 shadow-[0_42px_96px_rgba(17,24,39,0.18)]"
            >
                <div className="h-full rounded-[28px] bg-[#FAF9F5] p-2.5 sm:rounded-[32px] sm:p-3">
                    <div className="mb-2.5 flex items-center justify-between px-1.5 text-[10px] font-semibold text-[#111827] sm:mb-3 sm:px-2 sm:text-[11px]">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#647C90]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#928490]" />
                            <span className="h-2.5 w-6 rounded-full bg-[#111827]" />
                        </div>
                    </div>
                    <div className="relative h-[calc(100%-22px)] overflow-hidden rounded-[22px] border border-[rgba(17,24,39,0.08)] bg-[#E2DED0] sm:h-[calc(100%-24px)] sm:rounded-[26px]">
                        <div
                            className="h-full transition-[opacity,transform,filter] duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
                            style={{
                                opacity: showPhaseIntro ? 0 : 1,
                                transform: 'scale(1)',
                                filter: showPhaseIntro ? 'blur(2px)' : 'blur(0px)',
                            }}
                        >
                            {renderCurrentPhase()}
                        </div>
                        <div
                            className="pointer-events-none absolute inset-0 z-20 transition-[opacity,transform,filter] duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
                            style={{
                                opacity: showPhaseIntro ? 1 : 0,
                                transform: 'translateY(0)',
                                filter: showPhaseIntro ? 'blur(0px)' : 'blur(1px)',
                            }}
                        >
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(226,222,208,0.98),rgba(226,222,208,0.94))]" />
                            <div className="relative flex h-full items-center justify-center p-4">
                                <div className="w-full rounded-[24px] border border-[#D9D3C6] bg-[linear-gradient(160deg,#F8F3EA_0%,#F0EBDE_52%,#E7E0D0_100%)] p-5 shadow-[0_22px_50px_rgba(17,24,39,0.12)]">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="rounded-full bg-white/78 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#647C90]">
                                            {activeMarketing.eyebrow}
                                        </div>
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#647C90] text-[#E2DED0] shadow-[0_10px_18px_rgba(100,124,144,0.24)]">
                                            <ActiveIntroIcon className="h-4 w-4" />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#928490]">
                                            {activeIntro.note}
                                        </div>
                                        <div className="mt-2 font-serif text-[24px] leading-tight text-[#647C90]">
                                            {activeMarketing.title}
                                        </div>
                                        <p className="mt-3 text-[12px] leading-6 text-[#4E4F50]">
                                            {activeMarketing.description}
                                        </p>
                                    </div>
                                    <div className="mt-6 rounded-[18px] border border-black/8 bg-white/88 px-4 py-3 shadow-[0_10px_22px_rgba(17,24,39,0.08)]">
                                        <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#928490]">
                                            What you’ll see
                                        </div>
                                        <div className="mt-1.5 text-[12px] font-semibold leading-4 text-[#4E4F50]">
                                            {activeIntro.stat}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 flex justify-center gap-2">
                        {demoPhases.map((phase, nextIndex) => (
                            <button
                                key={phase.key}
                                type="button"
                                onClick={() => {
                                    setIsScrollAnimating(false);
                                    setScrollOffset(0);
                                    setPhaseIndex(nextIndex);
                                    setDisplayedPhaseIndex(nextIndex);
                                }}
                                aria-label={`Show ${phase.label}`}
                                className="h-2 rounded-full transition-all duration-300"
                                style={{
                                    width: nextIndex === phaseIndex ? 26 : 8,
                                    backgroundColor: nextIndex === phaseIndex ? '#647C90' : 'rgba(100,124,144,0.26)',
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export const FAQAccordion = ({ items }: { items: FAQItem[] }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div
                    key={item.question}
                    className="overflow-hidden rounded-[28px] border border-black/8 bg-white"
                >
                    <button
                        type="button"
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
                    >
                        <span className="text-[22px] font-bold leading-tight text-[#111827]">{item.question}</span>
                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#647C90] text-white">
                            {activeIndex === index ? '−' : '+'}
                        </span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="border-t border-black/8 px-6 pb-6 pt-5 text-[16px] leading-8 text-[#60636B]">
                            {item.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const Checklist = ({
    items,
    dark = false,
}: {
    items: string[];
    dark?: boolean;
}) => (
    <div className="space-y-4">
        {items.map((item) => (
            <div
                key={item}
                className="flex items-start gap-3 rounded-[24px] border px-4 py-4"
                style={{
                    borderColor: dark ? 'rgba(255,255,255,0.1)' : 'rgba(17,24,39,0.08)',
                    backgroundColor: dark ? 'rgba(255,255,255,0.06)' : '#FFFFFF',
                }}
            >
                <span
                    className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full"
                    style={{ backgroundColor: dark ? '#FFFFFF' : '#111827', color: dark ? '#111827' : '#FFFFFF' }}
                >
                    <CheckCircle2 className="h-4 w-4" />
                </span>
                <p className="text-[15px] leading-8" style={{ color: dark ? 'rgba(255,255,255,0.78)' : '#60636B' }}>
                    {item}
                </p>
            </div>
        ))}
    </div>
);
