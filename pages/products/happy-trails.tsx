import { Award, Heart, Shield, TrendingUp } from 'lucide-react';
import { coursePaymentUrl } from '../../data/products';
import {
    Checklist,
    InfoGrid,
    PageHero,
    QuotePanel,
    SectionBlock,
    SiteChrome,
} from '../../components/site/MarketingPrimitives';

const roadmapChecklist = [
    'A self-paced, four-part mini course named after the famous Broadway send-off.',
    'An in-depth 5-year career change roadmap guided by former professional dancer Kaylee Randall.',
    'A detailed, step-by-step plan tailored to the realities of dance experience.',
    'Bonus resources including 50 non-dance job ideas, an editable Canva resume template, and a dancer-specific interview script.',
];

const roadmapStages = [
    {
        title: 'While dancing',
        description: 'Take practical steps while you are still working as a professional dancer and use the first year of your pivot journey more intentionally.',
        icon: Heart,
    },
    {
        title: 'Specialize',
        description: 'Start focusing your direction with support around mindset, practical decisions, and how to rediscover your love of dance.',
        icon: TrendingUp,
    },
    {
        title: 'Entry-level',
        description: 'Once you land the first role in your new career, keep building with guidance on how to cope, grow, and settle into the next chapter.',
        icon: Award,
    },
];

const supportAreas = [
    {
        title: 'Mindset shifts',
        description: 'A huge part of career change is changing your mindset. The course helps you prepare for the internal shifts required to successfully pivot.',
        icon: Heart,
    },
    {
        title: 'Practical knowledge',
        description: 'From the job search to finances, it covers the practical knowledge that no one likes to talk about in the arts and entertainment industries.',
        icon: Shield,
    },
    {
        title: 'Dancer-specific resources',
        description: 'Everything is tailored to the unique challenges and opportunities dancers face when building a career beyond the stage.',
        icon: Award,
    },
];

export default function HappyTrailsPage() {
    return (
        <SiteChrome>
            <PageHero
                eyebrow="DIGITAL COURSE"
                title="Happy Trails"
                description="Happy Trails is a self-paced, four-part mini course and 5-year career change roadmap designed to help dancers plan for before, during, and after the pivot."
                primaryCta={{ label: 'Buy the course', href: coursePaymentUrl, external: true, dark: true }}
                secondaryCta={{ label: 'See all products', href: '/products' }}
                metrics={[
                    { value: '4', label: 'guided parts in the course' },
                    { value: '5', label: 'years in the roadmap' },
                    { value: '50+', label: 'non-dance job ideas included' },
                    { value: '3', label: 'bonus career resources included' },
                ]}
                media={
                    <div className="rounded-[40px] border border-[#E6DED2] bg-white p-5 shadow-[0_34px_80px_rgba(45,49,56,0.08)]">
                        <img src="/assets/happy-trails-mini-course.png" alt="Happy Trails course" className="mx-auto h-[420px] w-auto object-contain" />
                    </div>
                }
            />

            <SectionBlock
                label="COURSE ROADMAP"
                title="A dancer-focused roadmap for before, during, and after the pivot"
                description="If you know you want to make a plan but have no idea where to start, Happy Trails lays it out clearly and helps you think longer-term."
                background="#FFFFFF"
                aside={
                    <a
                        href={coursePaymentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white"
                    >
                        Order now
                    </a>
                }
            >
                <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
                    <Checklist items={roadmapChecklist} />
                    <InfoGrid columns={1} cards={roadmapStages} />
                </div>
            </SectionBlock>

            <SectionBlock
                label="WHY IT WORKS"
                title="More confidence, more clarity, and less guesswork"
                description="The course works because it combines the mindset work with the practical side of transition, instead of pretending dancers only need one or the other."
                background="#F7F2EA"
            >
                <InfoGrid cards={supportAreas} />
            </SectionBlock>

            <SectionBlock
                label="SOCIAL PROOF"
                title="For dancers who want to feel more prepared before they leap"
                description="Supportive feedback from dancers who felt more prepared and more confident after working through the course."
                background="#FFFFFF"
            >
                <QuotePanel
                    quote="I cannot recommend this course enough. It is incredibly informative, encouraging, and inspiring. I feel so much more prepared and confident in myself as I take this next step in my career."
                    author="Alexa Schmidt"
                    role="Dancer & Educator"
                    image="/assets/alexa-schmidt.jpeg"
                />
            </SectionBlock>
        </SiteChrome>
    );
}
