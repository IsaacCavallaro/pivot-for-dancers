import { Brain, Briefcase, DollarSign, Lock, Smartphone } from 'lucide-react';
import {
    Checklist,
    DeviceMockup,
    InfoGrid,
    PageHero,
    SectionBlock,
    SiteChrome,
} from '../../components/site/MarketingPrimitives';

const pivotPathsSignupUrl = 'https://stats.sender.net/forms/bkRKWX/view';

const screens = [
    {
        variant: 'welcome' as const,
        eyebrow: 'Day 1 of 7',
        title: 'Welcome Back John',
        lines: [
            'See what you will learn today before beginning.',
            'Settle in with a journal prompt and reflection.',
            'Move into a guided roleplay or structured choice flow.',
        ],
        ctaLabel: 'Save Entry',
    },
    {
        variant: 'paths' as const,
        eyebrow: 'Continue where you left off',
        title: 'Choose a path',
        lines: [
            'Career transition direction.',
            'Mindset and identity support.',
            'Finance prompts and planning.',
        ],
        ctaLabel: 'Continue Path',
    },
    {
        variant: 'journal' as const,
        eyebrow: 'Private by design',
        title: 'Your personal journal',
        lines: [
            'Private reflection and journaling.',
            'No pressure to perform your transition publicly.',
            'A tool you can return to whenever you need it.',
        ],
        ctaLabel: 'Explore the app',
    },
];

export default function PivotPathsPage() {
    return (
        <SiteChrome>
            <PageHero
                eyebrow="FREE APP"
                title="Pivot Paths"
                description="A free guided app for dancers exploring career, mindset, and financial next steps, designed to feel warm, supportive, and mobile-first from the very first screen."
                primaryCta={{ label: 'Get Pivot Paths', href: pivotPathsSignupUrl, external: true, dark: true }}
                secondaryCta={{ label: 'Browse all resources', href: '/resources' }}
                metrics={[
                    { value: '3', label: 'core pivot categories' },
                    { value: '9', label: 'weeks of content' },
                    { value: '100%', label: 'private and user-controlled' },
                    { value: '$0', label: 'cost to start' },
                ]}
                media={<DeviceMockup screens={screens} />}
            />

            <SectionBlock
                label="WHY IT MATTERS"
                title="The easiest way into the Pivot for Dancers ecosystem"
                description="This should feel like the flagship free product, not a side resource. It is the trust-building, brand-entry point for the wider ecosystem."
                background="#FFFFFF"
            >
                <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
                    <Checklist
                        items={[
                            'Nine weeks of structured career change content for dancers.',
                            'Daily prompts, exercises, and reflective games.',
                            'Mindset, career, and finance support in one tool.',
                            'Free, private, and designed to be easy to come back to.',
                        ]}
                    />
                    <InfoGrid
                        columns={1}
                        cards={[
                            {
                                title: 'Mindset wellness',
                                description: 'Support the emotional and identity side of the pivot with tools for growth, reflection, and daily perspective shifts.',
                                icon: Brain,
                            },
                            {
                                title: 'Career transition',
                                description: 'Use skills assessments, roleplays, and guided prompts to get clearer about the work beyond the stage.',
                                icon: Briefcase,
                            },
                            {
                                title: 'Finance',
                                description: 'Build confidence around money, planning, and the practical questions that come with change.',
                                icon: DollarSign,
                            },
                        ]}
                    />
                </div>
            </SectionBlock>

            <SectionBlock
                label="PRODUCT POSITIONING"
                title="Free, private, and made to feel safe"
                description="The page should sell the emotional value of privacy and low-pressure exploration, not just the feature list."
                background="#F7F2EA"
            >
                <InfoGrid
                    cards={[
                        {
                            title: 'Private by design',
                            description: 'Users should feel that the app belongs to them and that reflection can stay personal.',
                            icon: Lock,
                        },
                        {
                            title: 'Mobile-first',
                            description: 'The device-led presentation makes the product feel real and closer to how people will actually use it.',
                            icon: Smartphone,
                        },
                        {
                            title: 'Built for dancers',
                            description: 'Everything from tone to examples should feel specifically shaped around the dancer transition.',
                            icon: Brain,
                        },
                    ]}
                />
            </SectionBlock>
        </SiteChrome>
    );
}
