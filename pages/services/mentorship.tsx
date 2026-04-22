import { Heart, MessageCircle, Target, TrendingUp, Users } from 'lucide-react';
import {
    Checklist,
    InfoGrid,
    PageHero,
    QuotePanel,
    SectionBlock,
    SiteChrome,
} from '../../components/site/MarketingPrimitives';

const bookMentorshipUrl = 'https://tidycal.com/pivotfordancers/mentorship-1';

const mentorshipFeatures = [
    '3 virtual sessions with an experienced, former professional dancer.',
    'Private and confidential conversations focused on your goals and current season of change.',
    'Guided goal-setting, reflection exercises, and actionable next steps between sessions.',
    'Tailored resources and networking opportunities to support your unique journey.',
];

const dancerStages = [
    {
        title: 'Pre-pro dancers',
        description: 'Prepare for the long term before you pursue your career on the stage and build a wider sense of what your future can hold.',
        icon: Heart,
    },
    {
        title: 'Current pro dancers',
        description: 'Take the leap with clearer goal-setting, action plans, and accountability while you are still navigating dance professionally.',
        icon: Target,
    },
    {
        title: 'Former pro dancers',
        description: 'Even after the first pivot, it does not always mean everything is figured out. Mentorship can help with what comes after that too.',
        icon: TrendingUp,
    },
];

const processCards = [
    {
        title: 'Book your first session',
        description: 'You will receive a welcome guide, get paired with your mentor, and begin with goal-setting exercises before the first call.',
        icon: MessageCircle,
    },
    {
        title: 'Show up for yourself',
        description: 'Attend 3 sessions across the program, then use the reflection questions and action plans to keep momentum between meetings.',
        icon: Users,
    },
    {
        title: 'Take action',
        description: 'Finish with a clearer plan, dancer-specific resources, and a new contact in your corner as you keep moving forward.',
        icon: Target,
    },
];

export default function MentorshipPage() {
    return (
        <SiteChrome>
            <PageHero
                eyebrow="ONE-TO-ONE SUPPORT"
                title="Mentorship Program"
                description="Private, one-on-one support to help you find meaningful work off the stage with guidance from someone who understands the transition firsthand."
                primaryCta={{ label: 'Book mentorship', href: bookMentorshipUrl, external: true, dark: true }}
                secondaryCta={{ label: 'See all services', href: '/services' }}
                metrics={[
                    { value: '3', label: 'virtual sessions included' },
                    { value: '1:1', label: 'private support throughout' },
                    { value: 'Tailored', label: 'resources for your journey' },
                    { value: 'Direct', label: 'goal-setting and accountability' },
                ]}
                media={
                    <div className="rounded-[40px] border border-[#E6DED2] bg-white p-5 shadow-[0_34px_80px_rgba(45,49,56,0.08)]">
                        <img src="/assets/pivot-mentorship.png" alt="Pivot mentorship" className="mx-auto h-[420px] w-auto object-contain" />
                    </div>
                }
            />

            <SectionBlock
                label="WHAT IT IS"
                title="Private support that keeps the emotional and practical sides together"
                description="The mentorship is structured to offer actionable results while still giving dancers space for the harder identity, confidence, and decision-making parts of the pivot."
                background="#FFFFFF"
                aside={
                    <a
                        href={bookMentorshipUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white"
                    >
                        Book now
                    </a>
                }
            >
                <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
                    <Checklist items={mentorshipFeatures} />
                    <InfoGrid columns={1} cards={dancerStages} />
                </div>
            </SectionBlock>

            <SectionBlock
                label="PROCESS"
                title="How the mentorship works"
                description="The process is simple on purpose so the focus stays on the conversations, the reflection, and the follow-through."
                background="#F7F2EA"
            >
                <InfoGrid cards={processCards} />
            </SectionBlock>

            <SectionBlock
                label="SOCIAL PROOF"
                title="Support that feels honest, specific, and useful"
                description="Guidance, support, and self-exploration all in one place."
                background="#FFFFFF"
            >
                <QuotePanel
                    quote="Support, guidance, and self-exploration exercises all in one place."
                    author="Kelsey Glennon"
                    role="Former Dancer & Travel Journalist"
                    image="/assets/kelsey-glennon.jpeg"
                />
            </SectionBlock>
        </SiteChrome>
    );
}
