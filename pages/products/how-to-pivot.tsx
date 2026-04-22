import { Brain, Compass, Heart, Shield, Target } from 'lucide-react';
import { ebookPaymentUrl } from '../../data/products';
import {
    Checklist,
    InfoGrid,
    PageHero,
    QuotePanel,
    SectionBlock,
    SiteChrome,
} from '../../components/site/MarketingPrimitives';

const insideTheEbook = [
    '10 chapters of taboo, dancer-specific topics no one else is talking about.',
    'Psychology and philosophy concepts that help guide career change with more self-understanding.',
    'Mindset shifts to reconnect with what you truly want in your next chapter.',
    'Tools to understand your transferable skills and build a stronger muggle resume.',
    'A clear, focused action plan to help you step onto your next stage.',
];

const pathwayCards = [
    {
        title: 'Self-discovery',
        description: 'Explore the psychological concepts behind career transition and discover what truly drives you beyond the stage through deeper introspection.',
        icon: Brain,
    },
    {
        title: 'Future career paths',
        description: 'Unlock your curiosity, identify meaningful work off the stage, and start naming the kinds of roles that actually fit your strengths.',
        icon: Target,
    },
    {
        title: 'Action planning',
        description: 'Move from reflection into motion with practical next steps, clearer language, and a plan that feels realistic to begin.',
        icon: Compass,
    },
];

const whyReadersConnect = [
    {
        title: 'Taboo topics',
        description: 'It names the financial, emotional, and identity questions dancers often carry quietly through the transition.',
        icon: Heart,
    },
    {
        title: 'Mindset shifts',
        description: 'It helps dancers notice the patterns that keep them stuck so the pivot becomes emotionally possible, not just strategically possible.',
        icon: Brain,
    },
    {
        title: 'Practical tools',
        description: 'It translates dance experience into language, transferable skills, and a resume story employers can understand.',
        icon: Shield,
    },
];

export default function HowToPivotPage() {
    return (
        <SiteChrome>
            <PageHero
                eyebrow="EBOOK"
                title="How to Pivot"
                description="Feeling stuck in your dance career or unsure what else is out there beyond the stage? How to Pivot is an actionable, dancer-specific guide to help you find meaningful work off the stage."
                primaryCta={{ label: 'Buy the ebook', href: ebookPaymentUrl, external: true, dark: true }}
                secondaryCta={{ label: 'See all products', href: '/products' }}
                metrics={[
                    { value: '10', label: 'chapters of dancer-specific guidance' },
                    { value: '24+', label: 'five-star reviews' },
                    { value: '15', label: 'activities and prompts' },
                    { value: '1', label: 'clear action plan for what comes next' },
                ]}
                media={
                    <div className="rounded-[40px] border border-[#E6DED2] bg-white p-5 shadow-[0_34px_80px_rgba(45,49,56,0.08)]">
                        <img src="/assets/how-to-pivot-ebook.png" alt="How to Pivot ebook" className="mx-auto h-[420px] w-auto object-contain" />
                    </div>
                }
            />

            <SectionBlock
                label="WHAT'S INSIDE"
                title="Everything you wish someone had told you before the pivot"
                description="Part self-help book and part action-focused career resource, this guide helps dancers make sense of the identity shift, the practical decisions, and the possibilities beyond performance."
                background="#FFFFFF"
                aside={
                    <a
                        href={ebookPaymentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white"
                    >
                        Order now
                    </a>
                }
            >
                <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
                    <Checklist items={insideTheEbook} />
                    <InfoGrid columns={1} cards={pathwayCards} />
                </div>
            </SectionBlock>

            <SectionBlock
                label="WHY IT MATTERS"
                title="Written for the real questions dancers ask in private"
                description="Kaylee Randall brings together her own pivot story with concepts from psychology and philosophy, so the guidance feels both grounded and specific to a dancer’s life."
                background="#F7F2EA"
            >
                <InfoGrid cards={whyReadersConnect} />
            </SectionBlock>

            <SectionBlock
                label="SOCIAL PROOF"
                title="A guide dancers can actually see themselves in"
                description="Real feedback from dancers who felt seen, supported, and more prepared for what comes next."
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
