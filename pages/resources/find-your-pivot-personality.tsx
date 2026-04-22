import { Brain, Search, UserCheck, Zap } from 'lucide-react';
import Quiz from '../../components/Quiz';
import {
    InfoGrid,
    PageHero,
    SectionBlock,
    SiteChrome,
} from '../../components/site/MarketingPrimitives';

const personalityTypes = [
    {
        title: 'The Dreamer',
        description: 'Thinking about life after dance feels like betraying a part of yourself. Naming a plan B can feel like giving up.',
        icon: Brain,
    },
    {
        title: 'The Perfectionist',
        description: 'You love a solid plan and want clarity, options, and a reliable timeline so you can move forward with confidence.',
        icon: Zap,
    },
    {
        title: 'The Realist',
        description: 'You are thoughtful, careful, and grounded in real-world stability. You want to build something solid without huge leaps.',
        icon: UserCheck,
    },
    {
        title: 'The Seeker',
        description: 'For you, the pivot is about purpose. You want work that feels aligned, connected, and meaningful beyond the paycheck.',
        icon: Search,
    },
];

export default function FindYourPivotPersonalityPage() {
    return (
        <SiteChrome>
            <PageHero
                eyebrow="QUIZ"
                title="Find Your Pivot Personality"
                description="Take our 2-minute quiz to uncover your unique approach to career transition and get personalized guidance."
                primaryCta={{ label: 'Take the quiz', href: '#quiz-section', dark: true }}
                secondaryCta={{ label: 'See all resources', href: '/resources' }}
                media={
                    <div className="rounded-[40px] border border-[#E6DED2] bg-white p-5 shadow-[0_34px_80px_rgba(45,49,56,0.08)]">
                        <img src="/assets/quiz.png" alt="Pivot personality quiz" className="mx-auto h-[420px] w-auto object-contain" />
                    </div>
                }
            />

            <SectionBlock
                label="PERSONALITY TYPES"
                title="Four common ways dancers approach the pivot"
                description="The quiz helps you recognise your starting point so the next step can feel more personal, more specific, and more useful."
                background="#FFFFFF"
            >
                <InfoGrid cards={personalityTypes} columns={4} />
            </SectionBlock>

            <SectionBlock
                label="TAKE THE QUIZ"
                title="Ready to discover your pivot personality?"
                description="Take the quick 7-question quiz and get a clearer read on how you naturally approach career change."
                background="#F7F2EA"
            >
                <div id="quiz-section" className="rounded-[40px] border border-[#E5DDCF] bg-white p-5 shadow-[0_32px_76px_rgba(45,49,56,0.08)] md:p-8">
                    <Quiz />
                </div>
            </SectionBlock>

            <SectionBlock
                label="NEXT STEP"
                title="Use your result to choose what support fits best"
                description="Your result is a starting point, not a label. Use it to decide whether you need deeper reflection, more structure, or direct support."
                background="#FFFFFF"
                aside={
                    <a
                        href="/services/mentorship"
                        className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white"
                    >
                        Book mentorship
                    </a>
                }
            />
        </SiteChrome>
    );
}
