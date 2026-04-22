import { ArrowRight, Brain, Briefcase, DollarSign, Lock, Shield, Star, User } from 'lucide-react';
import DetailCardShell from '../../components/site/DetailCardShell';
import { DeviceMockup, SiteChrome } from '../../components/site/MarketingPrimitives';

const pivotPathsSignupUrl = 'https://stats.sender.net/forms/bkRKWX/view';

const appCategories = [
    {
        title: 'Mindset wellness',
        description: 'Nurture your mental health with tools and games for personal growth and discovering your dream life.',
        icon: Brain,
    },
    {
        title: 'Career transition',
        description: 'Move beyond performance with skills assessments and resources for career development beyond the stage.',
        icon: Briefcase,
    },
    {
        title: 'Finance',
        description: 'Build financial stability with resources and tools for financial literacy tailored to dancers’ unique needs.',
        icon: DollarSign,
    },
];

const privacyCards = [
    {
        title: 'No usernames',
        description: 'You don’t need to log in to use the Pivot Paths app. All your data stays on your device so you can explore each path privately.',
        icon: Lock,
    },
    {
        title: 'Totally free',
        description: 'We’ll never sell your data and you can complete each path as many times as you’d like, completely free of charge.',
        icon: Shield,
    },
    {
        title: 'Complete control',
        description: 'You own your data and if you delete the app, your information isn’t stored on our end. Learn more about yourself without anyone over your shoulder.',
        icon: User,
    },
];

const screens = [
    {
        variant: 'onboarding' as const,
        eyebrow: 'Pivot Paths',
        title: 'A calmer first step for dancers figuring out what comes next.',
        description: 'This app is designed to help you explore options, build confidence, and keep momentum without losing your place.',
        lines: [
            'Choose a direction',
            'Track your progress',
            'Learn from real stories',
        ],
        ctaLabel: 'Start With This Focus',
    },
    {
        variant: 'home' as const,
        eyebrow: 'By Pivot For Dancers',
        title: 'Pivot Paths',
        description: 'Resume your progress, explore guided paths, and learn from dancer stories in one place.',
        lines: [
            'Guided Paths',
            'Video Stories',
            'Personalized Support',
        ],
        ctaLabel: 'Continue Path',
    },
    {
        variant: 'welcome' as const,
        eyebrow: 'Discover Your Dream Life',
        title: 'Welcome Back Maya',
        description: 'You’re building real momentum. Each day you come back, you get clearer about what you want life beyond dance to feel like.',
        lines: [
            'How your current instincts shape your choices',
            'What this scenario reveals about your priorities',
            'What an alternative future could open up for you',
        ],
        ctaLabel: 'Save Entry',
    },
];

export default function PivotPathsPage() {
    return (
        <SiteChrome>
            <section className="px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-12 lg:pt-32">
                <div className="mx-auto max-w-[1280px]">
                    <div className="max-w-3xl text-center lg:text-left">
                        <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#7A7D86]">
                            FREE APP
                        </div>
                        <h1 className="mt-5 text-[48px] font-bold leading-[0.95] tracking-[-0.04em] text-[#111827] md:text-[64px] lg:text-[76px]">
                            Pivot Paths
                        </h1>
                        <p className="mt-5 max-w-2xl text-[18px] leading-8 text-[#60636B]">
                            Your private dancer-focused toolkit for mindset shifts, career transitions, and financial planning.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#F7F2EA] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-[1280px]">
                    <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
                        <DetailCardShell className="h-full">
                            <div className="flex h-full flex-col p-5 md:p-6">
                                <div className="flex flex-col items-center justify-between gap-3 rounded-[24px] border border-black/8 bg-white px-5 py-4 text-center sm:flex-row sm:text-left">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF2F5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#647C90]">
                                        Free app
                                    </div>
                                    <div className="rounded-full border border-[#E5DDCF] bg-[#FCFAF6] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5E6167]">
                                        Private by design
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-1 flex-col gap-4">
                                    <div className="rounded-[26px] border border-black/8 bg-white px-5 py-6 md:px-6">
                                        <div className="mt-5 text-center md:text-left">
                                            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                                What it is
                                            </p>
                                            <h2 className="mt-3 text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827] md:text-[36px]">
                                                Your life, beyond the stage
                                            </h2>
                                            <p className="mt-4 text-[15px] leading-8 text-[#60636B]">
                                                Curated just for dancers, Pivot Paths helps users navigate mindset, career, and money decisions with private tools, guided reflection, and mobile-first support.
                                            </p>
                                        </div>
                                        <div className="mt-6 flex min-h-[300px] items-center justify-center rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] p-6">
                                            <div className="mx-auto w-full max-w-[300px]">
                                                <DeviceMockup screens={screens} />
                                            </div>
                                        </div>
                                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                            <a
                                                href={pivotPathsSignupUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#647C90] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#556c7f]"
                                            >
                                                Join the waitlist
                                                <ArrowRight className="h-4 w-4" />
                                            </a>
                                            <a
                                                href="/resources"
                                                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-[#FCFAF6] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#111827]"
                                            >
                                                Browse all resources
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DetailCardShell>

                        <div className="grid gap-8">
                            <DetailCardShell>
                                <div className="p-5 md:p-6">
                                    <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                        Inside the app
                                    </div>
                                    <h2 className="mt-3 text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827]">
                                        Explore the categories designed for the pivot
                                    </h2>
                                    <div className="mt-5 grid gap-4">
                                        {appCategories.map((item) => (
                                            <div
                                                key={item.title}
                                                className="rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] px-5 py-5"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#647C90] text-white">
                                                        <item.icon className="h-5 w-5" />
                                                    </div>
                                                    <div>
                                                        <div className="text-[22px] font-bold leading-tight text-[#111827]">
                                                            {item.title}
                                                        </div>
                                                        <p className="mt-3 text-[14px] leading-7 text-[#60636B]">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-5 border-t border-[#E8E0D4] pt-5">
                                        <div className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                            Dancer review
                                        </div>
                                        <div className="rounded-[22px] border border-black/8 bg-white px-5 py-5">
                                            <div className="flex items-center justify-center gap-1 md:justify-start">
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <Star key={index} className="h-4 w-4 fill-[#F4B740] text-[#F4B740]" />
                                                ))}
                                            </div>
                                            <p className="mt-4 text-[18px] font-medium leading-8 text-[#4E4F50] md:text-[20px] md:leading-9">
                                                “A thoughtful first step for dancers who want private, practical support while they figure out what comes next.”
                                            </p>
                                            <div className="mt-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#928490]">
                                                Pivot for Dancers Community
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DetailCardShell>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-8 lg:grid-cols-3">
                        {privacyCards.map((item) => (
                            <DetailCardShell key={item.title}>
                                <div className="p-5 md:p-6">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-[#647C90] text-white">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div className="mt-4 text-[28px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827]">
                                        {item.title}
                                    </div>
                                    <p className="mt-4 text-[15px] leading-8 text-[#60636B]">
                                        {item.description}
                                    </p>
                                </div>
                            </DetailCardShell>
                        ))}
                    </div>
                </div>
            </section>
        </SiteChrome>
    );
}
