import { Brain, Briefcase, DollarSign, Lock, Shield, Smartphone, User } from 'lucide-react';
import {
    Checklist,
    DeviceMockup,
    InfoGrid,
    PageHero,
    SectionBlock,
    SiteChrome,
} from '../../components/site/MarketingPrimitives';

const pivotPathsSignupUrl = 'https://stats.sender.net/forms/bkRKWX/view';

const appFeatures = [
    '9 weeks of structured career change content for dancers.',
    'Daily prompts, exercises, and reflective games.',
    'Mindset tools and wellness experiments.',
    'Career transition assessments and development resources.',
    'Financial literacy exercises and money planning.',
    '100% free, private, and secure.',
];

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
        description: 'We’ll never sell your data and you can complete each path as many times as you’d like, completely free of charge. There’s nothing holding you back from exploring!',
        icon: Shield,
    },
    {
        title: 'Complete control',
        description: 'You own your data and if you delete the app, your information isn’t stored on our end. Learn more about yourself without anyone over your shoulder.',
        icon: User,
    },
];

const launchFeatures = [
    'Career Transition Resources',
    'Mindset & Wellness Tools',
    'Financial Planning Guides',
    '100% Local Data Storage',
    'Personal Growth Games',
    'Free Forever',
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
            <PageHero
                eyebrow="FREE APP"
                title="Pivot Paths"
                description="Your private dancer-focused toolkit for mindset shifts, career transitions, and financial planning."
                primaryCta={{ label: 'Join the waitlist', href: pivotPathsSignupUrl, external: true, dark: true }}
                secondaryCta={{ label: 'Browse all resources', href: '/resources' }}
                metrics={[
                    { value: '3', label: 'pivot categories' },
                    { value: '100%', label: 'anonymous' },
                    { value: '$0', label: 'download costs' },
                    { value: '9', label: 'weeks of content' },
                ]}
                media={
                    <div className="mx-auto w-full max-w-[380px] lg:mr-0">
                        <DeviceMockup screens={screens} />
                    </div>
                }
            />

            <SectionBlock
                label="INSIDE THE APP"
                title="What is the Pivot Paths App?"
                description="Your life, beyond the stage. Curated just for dancers. Navigate your next act with confidence with our all-in-one toolkit for career, mindset, and financial wellness."
                background="#FFFFFF"
                aside={
                    <a
                        href={pivotPathsSignupUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white"
                    >
                        Get updates
                    </a>
                }
            >
                <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-stretch">
                    <div className="h-full">
                        <Checklist items={appFeatures} />
                    </div>
                    <div className="h-full">
                        <InfoGrid columns={1} cards={appCategories} />
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                label="PRIVATE BY DESIGN"
                title="Built to feel safe, low-pressure, and easy to explore"
                description="The app is meant to support honest reflection. That only works if dancers feel they have space to think without needing to perform the transition for anyone else."
                background="#F7F2EA"
            >
                <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
                    <div className="h-full">
                        <InfoGrid cards={privacyCards} columns={1} />
                    </div>
                    <div className="h-full">
                        <div className="flex h-full flex-col rounded-[32px] border border-black/8 bg-white p-7 shadow-[0_24px_56px_rgba(45,49,56,0.06)]">
                            <div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#111827] text-white">
                                    <Smartphone className="h-5 w-5" />
                                </div>
                                <h3 className="mt-5 text-[28px] font-bold leading-tight tracking-[-0.02em] text-[#111827]">
                                    Mobile-first and easy to come back to
                                </h3>
                                <p className="mt-4 text-[15px] leading-8 text-[#60636B]">
                                    The app is designed for short moments of reflection, not long stretches of concentration. That makes it easier to return whenever you need guidance.
                                </p>
                            </div>

                            <div className="mt-8 rounded-[24px] border border-[#E8E0D4] bg-[#FCFAF6] px-5 py-5">
                                <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                    Status
                                </div>
                                <div className="mt-3 text-[28px] font-bold leading-none tracking-[-0.03em] text-[#111827]">
                                    Coming soon
                                </div>
                                <p className="mt-4 text-[14px] leading-7 text-[#60636B]">
                                    Join the waiting list to hear when the app is ready to download and when new guided paths are released.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionBlock>

            <SectionBlock
                label="TAKE THE FIRST STEP"
                title="Take the First Step on Your New Path"
                description="Explore curated paths designed to build your skills, confidence, and future, all in one place."
                background="#FFFFFF"
                aside={
                    <a
                        href={pivotPathsSignupUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white"
                    >
                        Join the waiting list
                    </a>
                }
            >
                <div className="rounded-[32px] border border-black/8 bg-[#F5F6F2] p-7 shadow-[0_24px_56px_rgba(45,49,56,0.06)] md:p-8">
                    <div className="flex flex-wrap gap-3">
                        {launchFeatures.map((feature) => (
                            <span
                                key={feature}
                                className="rounded-full border border-[#DCE4EB] bg-white px-4 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-[#647C90]"
                            >
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>
            </SectionBlock>
        </SiteChrome>
    );
}
