import { ReactNode, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { ArrowRight, BookOpen, CheckCircle2, Compass, Play } from 'lucide-react';

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
            const bg =
                card.tone === 'dark' ? '#111827' : card.tone === 'brand' ? '#647C90' : '#F5F6F2';
            const fg = card.tone === 'light' || !card.tone ? '#111827' : '#FFFFFF';
            const subtle = card.tone === 'light' || !card.tone ? '#60636B' : 'rgba(255,255,255,0.76)';
            return (
                <Reveal key={card.title} delay={index * 90}>
                    <a
                        href={card.href ?? '#'}
                        className="group block h-full rounded-[30px] border border-black/8 p-4 transition hover:-translate-y-1"
                        style={{ backgroundColor: bg }}
                    >
                        {(card.image || card.icon) && (
                            <div
                                className="flex min-h-[220px] items-center justify-center rounded-[24px] border p-4 md:min-h-[240px]"
                                style={{
                                    backgroundColor: card.tone === 'light' || !card.tone ? '#FFFFFF' : 'rgba(255,255,255,0.08)',
                                    borderColor: card.tone === 'light' || !card.tone ? 'rgba(17,24,39,0.08)' : 'rgba(255,255,255,0.08)',
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
                                    <span style={{ color: fg }}>
                                        <card.icon className="h-16 w-16" />
                                    </span>
                                ) : null}
                            </div>
                        )}
                        <div className="px-3 pb-3 pt-6">
                            <h3 className="text-[30px] font-bold leading-tight tracking-[-0.02em]" style={{ color: fg }}>
                                {card.title}
                            </h3>
                            <p className="mt-4 text-[15px] leading-8" style={{ color: subtle }}>
                                {card.description}
                            </p>
                            {card.ctaLabel && (
                                <div
                                    className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em]"
                                    style={{ color: fg }}
                                >
                                    {card.ctaLabel}
                                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                                </div>
                            )}
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
                <Reveal>
                    <SectionLabel text={eyebrow} inverse={dark} />
                    <h1
                        className="mt-5 max-w-xl text-[48px] font-bold leading-[0.94] tracking-[-0.04em] md:text-[66px] lg:text-[82px]"
                        style={{ color: dark ? '#FFFFFF' : '#111827' }}
                    >
                        {title}
                    </h1>
                    <p
                        className="mt-6 max-w-xl text-[18px] leading-8 md:text-[20px]"
                        style={{ color: dark ? 'rgba(255,255,255,0.76)' : '#60636B' }}
                    >
                        {description}
                    </p>
                    {(primaryCta || secondaryCta) && (
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            {primaryCta && <CTAButton cta={{ ...primaryCta, dark: primaryCta.dark ?? true }} />}
                            {secondaryCta && <CTAButton cta={secondaryCta} />}
                        </div>
                    )}
                    {metrics && metrics.length > 0 && (
                        <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
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
            <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                    <SectionLabel text={label} inverse={dark} />
                    <h2
                        className="mt-4 text-[36px] font-bold leading-[1.02] tracking-[-0.03em] md:text-[50px]"
                        style={{ color: dark ? '#FFFFFF' : '#111827' }}
                    >
                        {title}
                    </h2>
                    {description && (
                        <p
                            className="mt-5 max-w-2xl text-[18px] leading-8"
                            style={{ color: dark ? 'rgba(255,255,255,0.76)' : '#60636B' }}
                        >
                            {description}
                        </p>
                    )}
                </div>
                {aside}
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
        variant?: 'welcome' | 'paths' | 'journal';
    }[];
    dark?: boolean;
}) => {
    const resumeTitle = screens.find((screen) => screen.variant === 'paths')?.title ?? 'Discover Your Dream Life';
    const guidedPathsDescription =
        screens.find((screen) => screen.variant === 'paths')?.lines[0] ??
        '7 day journeys designed specifically for professional dancers.';
    const videoStoriesDescription =
        screens.find((screen) => screen.variant === 'paths')?.lines[1] ??
        'Real experiences from dancers who successfully pivoted careers.';

    return (
        <div className="relative mx-auto w-full max-w-[380px]">
            <div className="relative mx-auto aspect-[318/640] w-full rounded-[42px] border-[10px] border-[#111827] bg-[#111827] p-2 shadow-[0_42px_96px_rgba(17,24,39,0.18)]">
                <div className="h-full rounded-[32px] bg-[#FAF9F5] p-3">
                    <div className="mb-3 flex items-center justify-between px-2 text-[11px] font-semibold text-[#111827]">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#647C90]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#928490]" />
                            <span className="h-2.5 w-6 rounded-full bg-[#111827]" />
                        </div>
                    </div>
                    <div className="relative h-[calc(100%-24px)] overflow-hidden rounded-[26px] bg-[#E2DED0]">
                        <div
                            className="absolute inset-x-0 top-0 h-[148px] rounded-b-[30px] px-5 pb-6 pt-5"
                            style={{
                                background: dark
                                    ? 'linear-gradient(180deg, #4F6272 0%, #647C90 100%)'
                                    : 'linear-gradient(180deg, #5E7488 0%, #6B8397 100%)',
                            }}
                        >
                            <div className="relative flex items-center gap-3">
                                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-[3px] border-white/25 bg-white/10 shadow-[0_12px_24px_rgba(17,24,39,0.18)]">
                                    <Image src="/assets/logo.png" alt="Pivot for Dancers" width={56} height={56} className="h-full w-full object-cover" />
                                </div>
                                <div>
                                    <div className="font-serif text-[26px] leading-none text-[#F5F1E8] drop-shadow-[0_3px_8px_rgba(17,24,39,0.18)]">
                                        Pivot Paths
                                    </div>
                                    <div className="mt-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#F5F1E8]/80">
                                        By Pivot For Dancers
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 top-[112px] px-4 pb-4">
                            <div className="h-full rounded-[28px] bg-[#E2DED0] px-3 pb-3 pt-4">
                                <div className="space-y-3">
                                    <div className="rounded-[22px] bg-[#F5F5F5] px-4 py-4 shadow-[0_10px_22px_rgba(17,24,39,0.08)]">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#647C90] text-[#E2DED0]">
                                                <Compass className="h-4.5 w-4.5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#928490]">
                                                    Continue where you left off
                                                </div>
                                                <div className="mt-1 font-serif text-[21px] leading-tight text-[#647C90]">
                                                    {resumeTitle}
                                                </div>
                                                <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#647C90]/12">
                                                    <div className="h-full w-[68%] rounded-full bg-[#647C90]" />
                                                </div>
                                                <div className="mt-2 text-[11px] font-medium text-[#647C90]">68% completed</div>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex items-center justify-center rounded-[14px] bg-[#647C90] px-4 py-3 text-[12px] font-semibold text-[#E2DED0]">
                                            Continue Path
                                        </div>
                                    </div>

                                    {[
                                        { icon: BookOpen, title: 'Guided Paths', text: guidedPathsDescription, badges: ['mindset', 'career', 'finance'] },
                                        { icon: Play, title: 'Video Stories', text: videoStoriesDescription },
                                    ].map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <div key={item.title} className="rounded-[20px] bg-[#F5F5F5] px-4 py-4 shadow-[0_10px_22px_rgba(17,24,39,0.08)]">
                                                <div className="flex items-start gap-3">
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#647C90] text-[#E2DED0] shadow-[0_8px_18px_rgba(100,124,144,0.24)]">
                                                        <Icon className="h-4.5 w-4.5" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="font-serif text-[18px] leading-tight text-[#647C90]">{item.title}</div>
                                                        <p className="mt-1 text-[11px] leading-5 text-[#928490]">{item.text}</p>
                                                        {item.badges && (
                                                            <div className="mt-3 flex flex-wrap gap-1.5">
                                                                {item.badges.map((badge) => (
                                                                    <span key={badge} className="rounded-full border border-[#647C90] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#647C90]">
                                                                        {badge}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}

                                    <div className="rounded-[20px] bg-[#647C90] px-4 py-4 text-center shadow-[0_14px_28px_rgba(100,124,144,0.22)]">
                                        <div className="font-serif text-[18px] leading-tight text-[#E2DED0]">Want Personalized Support?</div>
                                        <div className="mt-3 inline-flex items-center justify-center rounded-full border border-[#E2DED0]/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E2DED0]">
                                            Get Started
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#111827] text-white">
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
