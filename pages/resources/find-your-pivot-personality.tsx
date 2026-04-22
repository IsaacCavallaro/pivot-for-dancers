import { Compass, Flame, Heart, Lightbulb } from 'lucide-react';
import Quiz from '../../components/Quiz';
import {
    InfoGrid,
    PageHero,
    SectionBlock,
    SiteChrome,
} from '../../components/site/MarketingPrimitives';

const personalityTypes = [
    {
        title: 'The Explorer',
        description: 'You are energised by possibilities and need permission to test paths before locking one in.',
        icon: Compass,
    },
    {
        title: 'The Rebuilder',
        description: 'You are trying to create stability after burnout, uncertainty, or the pressure of performance life.',
        icon: Heart,
    },
    {
        title: 'The Strategist',
        description: 'You want a more deliberate plan, clearer decisions, and a roadmap that makes the pivot feel less vague.',
        icon: Lightbulb,
    },
    {
        title: 'The Spark',
        description: 'You want to reconnect with excitement and possibility instead of only thinking about escape.',
        icon: Flame,
    },
];

export default function FindYourPivotPersonalityPage() {
    return (
        <SiteChrome>
            <PageHero
                eyebrow="QUIZ"
                title="Find Your Pivot Personality"
                description="A short quiz that helps dancers understand how they naturally approach career change, giving them a more personal starting point for the next step."
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
                title="Different dancers need different kinds of support"
                description="The quiz becomes more valuable when it is framed as a way to personalise the entry into the ecosystem."
                background="#FFFFFF"
            >
                <InfoGrid cards={personalityTypes} columns={4} />
            </SectionBlock>

            <SectionBlock
                label="TAKE THE QUIZ"
                title="Get a clearer read on how you approach the pivot"
                description="Keep the actual quiz interaction, but place it within the cleaner new system."
                background="#F7F2EA"
            >
                <div id="quiz-section" className="rounded-[40px] border border-[#E5DDCF] bg-white p-5 shadow-[0_32px_76px_rgba(45,49,56,0.08)] md:p-8">
                    <Quiz />
                </div>
            </SectionBlock>

            <SectionBlock
                label="NEXT STEP"
                title="Use the result to choose what kind of support fits best"
                description="The quiz should not end in isolation. It should direct users onward into the right next offer."
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
