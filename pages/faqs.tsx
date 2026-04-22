import { FAQAccordion, PageHero, SectionBlock, SiteChrome } from '../components/site/MarketingPrimitives';

const faqItems = [
    {
        question: 'What is Pivot for Dancers?',
        answer: (
            <>
                Pivot for Dancers offers career change resources for professional dancers. The goal is to help dancers find meaningful work off the stage through free tools, products, services, and community support.
            </>
        ),
    },
    {
        question: 'What is Pivot Paths?',
        answer: (
            <>
                Pivot Paths is the free guided app built for dancers exploring career, mindset, and financial next steps. It is designed to be the easiest way into the wider Pivot for Dancers ecosystem.
            </>
        ),
    },
    {
        question: 'What are Pivot Conversations?',
        answer: (
            <>
                Pivot Conversations are free virtual meetups for dancers to talk honestly about career change, feel less alone, and hear from others navigating similar questions.
            </>
        ),
    },
    {
        question: 'What is the How to Pivot ebook?',
        answer: (
            <>
                It is an actionable, dancer-specific guide written by founder Kaylee Randall. It combines mindset work, transition reflection, and practical exercises to help dancers move toward their next chapter.
            </>
        ),
    },
    {
        question: 'What is the Happy Trails course?',
        answer: (
            <>
                Happy Trails is a digital course that lays out a longer-term roadmap for career change, helping dancers make a clearer plan for before, during, and after the pivot.
            </>
        ),
    },
    {
        question: 'What is the mentorship service?',
        answer: (
            <>
                The mentorship offer is one-to-one support for dancers who want direct guidance, reflection, and accountability as they work toward more meaningful work off the stage.
            </>
        ),
    },
];

export default function FaqsPage() {
    return (
        <SiteChrome>
            <PageHero
                eyebrow="FAQS"
                title="Answers for dancers figuring out their next chapter"
                description="Use this page as a cleaner trust layer: explain what each part of the ecosystem is, how the free and paid offers connect, and where someone should start."
                primaryCta={{ label: 'Start with Pivot Paths', href: '/resources/pivot-paths', dark: true }}
                secondaryCta={{ label: 'Join the community', href: 'https://stats.sender.net/forms/aKrmkz/view', external: true }}
                media={
                    <div className="rounded-[40px] bg-[#111827] p-6 text-white shadow-[0_36px_84px_rgba(17,24,39,0.24)]">
                        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                            Best place to begin
                        </div>
                        <div className="mt-4 text-3xl font-bold">Start free, then go deeper</div>
                        <p className="mt-4 text-sm leading-8 text-white/76">
                            Users do not need to decide everything on day one. Start with Pivot Paths or the free resources, then move into products or services when the fit becomes clearer.
                        </p>
                    </div>
                }
            />

            <SectionBlock
                label="COMMON QUESTIONS"
                title="Make the ecosystem easy to understand"
                description="This should feel clearer, calmer, and more premium than a standard FAQ page."
                background="#F7F2EA"
            >
                <FAQAccordion items={faqItems} />
            </SectionBlock>
        </SiteChrome>
    );
}
