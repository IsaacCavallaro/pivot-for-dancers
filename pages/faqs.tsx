import { FAQAccordion, SectionBlock, SiteChrome } from '../components/site/MarketingPrimitives';

const answerCtaClassName =
    'mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#647C90] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[#556c7f] sm:w-auto';

const faqItems = [
    {
        question: 'What is Pivot for Dancers?',
        answer: (
            <>
                <p>
                    Pivot for Dancers offers career change resources for professional dancers. Our mission is to help you find meaningful work off the stage.
                    Run by former professional dancers who have successfully changed careers, we&apos;re here to share what we&apos;ve learned about making a pivot with
                    our growing community of fellow dancers.
                </p>
                <a
                    href="https://stats.sender.net/forms/aKrmkz/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={answerCtaClassName}
                >
                    Join us
                </a>
            </>
        ),
    },
    {
        question: 'What are Pivot Conversations?',
        answer: (
            <>
                <p>Pivot Conversations are free virtual meetups for dancers to have conversations about career change.</p>
                <p className="mt-4">
                    Connect with other dancers going through similar experiences and feel less alone on your career change journey.
                </p>
                <a
                    href="https://stats.sender.net/forms/bmZM4r/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={answerCtaClassName}
                >
                    Sign up
                </a>
            </>
        ),
    },
    {
        question: 'What is the How to Pivot ebook?',
        answer: (
            <>
                <p>
                    Written by our founder, Kaylee Randall, &apos;How to Pivot&apos; is an <strong>actionable, dancer-specific</strong> guide to help
                    you find meaningful work off the stage.
                </p>
                <p className="mt-4">
                    In 10 chapters, Kaylee dives deep into psychological patterns that might be holding you back and step-by-step activities to help you actually move on to your next stage.
                </p>
                <p className="mt-4">
                    With real-life examples from Kaylee&apos;s own career transition, &apos;How to Pivot&apos; is essential reading for any dancer struggling with their next steps.
                </p>
                <a
                    href="https://buy.stripe.com/14k6oG8rQexsgCI147"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={answerCtaClassName}
                >
                    Order now
                </a>
            </>
        ),
    },
    {
        question: 'What is the Happy Trails Mini Course?',
        answer: (
            <>
                <p>
                    If you&apos;re a professional dancer, you probably don&apos;t have a ton of time. That&apos;s why we developed a quick but effective mini course to help you plan your pivot with an
                    <strong> in-depth, career change roadmap</strong>.
                </p>
                <p className="mt-4">
                    We lay it all out for you and take the guesswork out of changing careers. Our 5-year career roadmap can help you stay on track and finally feel confident about your next steps.
                </p>
                <p className="mt-4">
                    <strong>Tailored to professional dancers</strong>, the &apos;Happy Trails&apos; mini course offers:
                </p>
                <ul className="mt-4 list-disc space-y-1 pl-5">
                    <li>A clear, step-by-step career change plan</li>
                    <li>50+ non-dancer job ideas</li>
                    <li>Resume templates &amp; interview script</li>
                </ul>
                <p className="mt-4">
                    For the dancers who want to make a plan for what&apos;s next but have no idea where to start, &apos;Happy Trails&apos; is for you.
                </p>
                <a
                    href="https://buy.stripe.com/dR628qgYm750aek6oq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={answerCtaClassName}
                >
                    Order now
                </a>
            </>
        ),
    },
    {
        question: 'What is the Pivot Mentorship Program?',
        answer: (
            <>
                <p>
                    The Pivot for Dancers Mentorship Program is private, one-on-one support for professional dancers to help you find meaningful work off the stage.
                </p>
                <p className="mt-4">
                    Structured with clear goal-setting and targeted reflection, our Mentorship Program is designed to offer actionable results.
                </p>
                <p className="mt-4">
                    You&apos;ll be paired with an experienced, former professional dancer to guide you through these challenging times. As part of the program, you&apos;ll receive:
                </p>
                <ul className="mt-4 list-disc space-y-1 pl-5">
                    <li>3x one-hour virtual sessions with an experienced, former professional dancer</li>
                    <li>Private and confidential conversations</li>
                    <li>Tailored resources for your unique journey</li>
                    <li>Networking opportunities</li>
                </ul>
                <a
                    href="https://tidycal.com/pivotfordancers/mentorship-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={answerCtaClassName}
                >
                    Book now
                </a>
            </>
        ),
    },
];

export default function FaqsPage() {
    return (
        <SiteChrome>
            <section className="px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-12 lg:pt-32">
                <div className="mx-auto max-w-[1280px]">
                    <div className="max-w-3xl text-center lg:text-left">
                        <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#7A7D86]">
                            FAQS
                        </div>
                        <h1 className="mt-5 text-[48px] font-bold leading-[0.95] tracking-[-0.04em] text-[#111827] md:text-[64px] lg:text-[76px]">
                            Frequently Asked Questions
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-[18px] leading-8 text-[#60636B] lg:mx-0">
                            Answers to common questions about Pivot for Dancers.
                        </p>
                    </div>
                </div>
            </section>

            <SectionBlock
                label="QUESTIONS"
                title="Answers at a glance"
                description="Find more information about our community, products, services, and support for dancers navigating career change."
                background="#F7F2EA"
            >
                <FAQAccordion items={faqItems} />
            </SectionBlock>
        </SiteChrome>
    );
}
