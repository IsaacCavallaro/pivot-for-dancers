import { Brain, Compass, Heart, Target } from 'lucide-react';
import { ebookPaymentUrl } from '../../data/products';
import {
    Checklist,
    InfoGrid,
    PageHero,
    QuotePanel,
    SectionBlock,
    SiteChrome,
} from '../../components/site/MarketingPrimitives';

export default function HowToPivotPage() {
    return (
        <SiteChrome>
            <PageHero
                eyebrow="EBOOK"
                title="How to Pivot"
                description="An actionable, dancer-specific guide for professional dancers who are ready to move beyond the stage but need clearer language, stronger mindset shifts, and a practical first plan."
                primaryCta={{ label: 'Buy the ebook', href: ebookPaymentUrl, external: true, dark: true }}
                secondaryCta={{ label: 'See all products', href: '/products' }}
                metrics={[
                    { value: '10', label: 'chapters of dancer-specific guidance' },
                    { value: '24+', label: 'five-star reviews' },
                    { value: '15', label: 'activities and prompts' },
                    { value: '1', label: 'clear action plan to begin with' },
                ]}
                media={
                    <div className="rounded-[40px] border border-[#E6DED2] bg-white p-5 shadow-[0_34px_80px_rgba(45,49,56,0.08)]">
                        <img src="/assets/how-to-pivot-ebook.png" alt="How to Pivot ebook" className="mx-auto h-[420px] w-auto object-contain" />
                    </div>
                }
            />

            <SectionBlock
                label="WHAT'S INSIDE"
                title="A deeper guide for the part of the transition nobody prepared you for"
                description="The value of this product is not generic career advice. It is the combination of self-understanding, dancer-specific context, and practical action."
                background="#FFFFFF"
            >
                <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
                    <Checklist
                        items={[
                            'Ten chapters on the taboo questions dancers ask quietly.',
                            'Psychology and philosophy concepts to help reframe the transition.',
                            'Tools for understanding transferable skills and building a stronger non-dance narrative.',
                            'A focused action plan to move from thought spirals into motion.',
                        ]}
                    />
                    <InfoGrid
                        columns={1}
                        cards={[
                            {
                                title: 'Self-discovery',
                                description: 'Explore the deeper emotional patterns shaping your pivot instead of only focusing on jobs and applications.',
                                icon: Brain,
                            },
                            {
                                title: 'Future career paths',
                                description: 'Use curiosity and reflection to identify options that actually fit your strengths and values beyond performance.',
                                icon: Target,
                            },
                            {
                                title: 'Action planning',
                                description: 'Turn insight into a clearer plan with realistic next steps for your next stage.',
                                icon: Compass,
                            },
                        ]}
                    />
                </div>
            </SectionBlock>

            <SectionBlock
                label="WHY IT WORKS"
                title="Made for dancers, not retrofitted for dancers"
                description="The product hits harder when it feels like a precise, premium answer to a very specific identity and career transition moment."
                background="#F7F2EA"
            >
                <InfoGrid
                    cards={[
                        {
                            title: 'Taboo topics',
                            description: 'Covers the financial, emotional, and identity questions that often get ignored in the arts.',
                            icon: Heart,
                        },
                        {
                            title: 'Psychology + philosophy',
                            description: 'Brings deeper reflection into the process so the pivot is not only tactical but also meaningful.',
                            icon: Brain,
                        },
                        {
                            title: 'Practical tools',
                            description: 'Helps dancers translate their experience into resumes, language, and real-world next steps.',
                            icon: Target,
                        },
                    ]}
                />
            </SectionBlock>

            <SectionBlock
                label="SOCIAL PROOF"
                title="A product dancers can actually see themselves in"
                description="The inner product pages should feel as polished as the homepage while keeping the offer simple."
                background="#FFFFFF"
            >
                <QuotePanel
                    quote="Finally a platform that says what we’re all thinking and helps dancers understand they deserve joy in all aspects of life."
                    author="Christie Bellish"
                    role="Former Dancer"
                    image="/assets/christie-bellish.jpeg"
                />
            </SectionBlock>
        </SiteChrome>
    );
}
