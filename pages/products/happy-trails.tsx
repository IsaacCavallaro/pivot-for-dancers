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

export default function HappyTrailsPage() {
    return (
        <SiteChrome>
            <PageHero
                eyebrow="DIGITAL COURSE"
                title="Happy Trails"
                description="A self-paced course that helps dancers make a real plan for before, during, and after the pivot, with a longer-term roadmap instead of vague encouragement."
                primaryCta={{ label: 'Buy the course', href: coursePaymentUrl, external: true, dark: true }}
                secondaryCta={{ label: 'See all products', href: '/products' }}
                metrics={[
                    { value: '4', label: 'course parts in the roadmap' },
                    { value: '5', label: 'years of planning perspective' },
                    { value: '50+', label: 'non-dance job ideas included' },
                    { value: '1', label: 'dancer-specific plan for what comes next' },
                ]}
                media={
                    <div className="rounded-[40px] border border-[#E6DED2] bg-white p-5 shadow-[0_34px_80px_rgba(45,49,56,0.08)]">
                        <img src="/assets/happy-trails-mini-course.png" alt="Happy Trails course" className="mx-auto h-[420px] w-auto object-contain" />
                    </div>
                }
            />

            <SectionBlock
                label="COURSE ROADMAP"
                title="A longer-view plan for dancers who want to stop improvising their pivot"
                description="Happy Trails works best when it is framed as the strategic roadmap product in the ecosystem."
                background="#FFFFFF"
            >
                <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
                    <Checklist
                        items={[
                            'A self-paced, four-part course named after the Broadway send-off.',
                            'A five-year roadmap to help dancers think beyond the immediate exit moment.',
                            'Bonus resources including non-dance job ideas, resume templates, and interview scripts.',
                            'Guidance for the while-dancing, specialization, and entry-level phases of the pivot.',
                        ]}
                    />
                    <InfoGrid
                        columns={1}
                        cards={[
                            {
                                title: 'While dancing',
                                description: 'Make early moves before you leave the stage completely.',
                                icon: Heart,
                            },
                            {
                                title: 'Specialize',
                                description: 'Start focusing your direction while navigating mindset and practical change.',
                                icon: TrendingUp,
                            },
                            {
                                title: 'Entry-level growth',
                                description: 'Learn how to settle into the first chapter of the new career and keep growing there.',
                                icon: Award,
                            },
                        ]}
                    />
                </div>
            </SectionBlock>

            <SectionBlock
                label="WHY IT WORKS"
                title="A roadmap product with more emotional intelligence"
                description="The course should feel both strategic and dancer-specific, not like a generic online program with dance visuals added later."
                background="#F7F2EA"
            >
                <InfoGrid
                    cards={[
                        {
                            title: 'Mindset shifts',
                            description: 'Prepare for the internal change required to let the pivot actually happen.',
                            icon: Heart,
                        },
                        {
                            title: 'Practical knowledge',
                            description: 'Covers the job search, finances, and grounded logistics nobody likes to talk about in the arts.',
                            icon: Shield,
                        },
                        {
                            title: 'Tailored resources',
                            description: 'Designed around the real questions and constraints of professional dancers.',
                            icon: Award,
                        },
                    ]}
                />
            </SectionBlock>

            <SectionBlock
                label="SOCIAL PROOF"
                title="For dancers who want more confidence before they leap"
                description="This page should feel like a premium detail page, not a long legacy landing page."
                background="#FFFFFF"
            >
                <QuotePanel
                    quote="I feel so much more prepared and confident in myself as I take this next step in my career."
                    author="Pivot for Dancers Customer"
                    role="Former Professional Dancer"
                    image="/assets/kelsey-glennon.jpeg"
                />
            </SectionBlock>
        </SiteChrome>
    );
}
