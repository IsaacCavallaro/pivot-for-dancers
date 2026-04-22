import { Award, Briefcase, Heart, MessageSquare, Shield, Target, TrendingUp } from 'lucide-react';
import {
    Checklist,
    InfoGrid,
    PageHero,
    SectionBlock,
    SiteChrome,
} from '../../components/site/MarketingPrimitives';

const bookMockInterviewUrl = 'https://tidycal.com/pivotfordancers/mock-interview';

const mockInterviewFeatures = [
    'A realistic 60-minute interview simulation with industry-relevant questions.',
    'Personalized feedback on your responses, presentation, and communication.',
    'Confidence-building support tailored for dancers changing careers.',
    'Body language coaching and help talking about your dance experience clearly.',
    'A recording of the session so you can review and keep improving afterward.',
];

const interviewTypes = [
    {
        title: 'Corporate interviews',
        description: 'Prepare for corporate environments with behavioural questions, case studies, and stronger professional presentation skills.',
        icon: Briefcase,
    },
    {
        title: 'Creative industry interviews',
        description: 'Navigate interviews in creative fields where your artistic background can be positioned as an asset, not a barrier.',
        icon: Heart,
    },
    {
        title: 'Career change interviews',
        description: 'Practice explaining your pivot story and learn how to highlight the transferable skills that came from dance.',
        icon: TrendingUp,
    },
];

const processCards = [
    {
        title: 'Book your session',
        description: 'Schedule the mock interview and share your target role or industry so the session can be tailored to your goals.',
        icon: MessageSquare,
    },
    {
        title: 'Practice the interview',
        description: 'Work through a realistic 60-minute conversation over video and practice answering the kinds of questions you are likely to hear.',
        icon: Shield,
    },
    {
        title: 'Review and improve',
        description: 'Leave with feedback, a recording, and actionable guidance to improve your next real interview.',
        icon: Target,
    },
];

const benefitCards = [
    {
        title: 'Build confidence',
        description: 'Practice in a safe environment before the real thing and reduce the anxiety that comes with being new to this kind of conversation.',
        icon: Shield,
    },
    {
        title: 'Highlight transferable skills',
        description: 'Learn how to talk about discipline, teamwork, adaptability, and performance under pressure in a way employers understand.',
        icon: Award,
    },
    {
        title: 'Prepare with purpose',
        description: 'Get more intentional about how you answer, what story you tell, and how you position your transition.',
        icon: Target,
    },
];

export default function MockInterviewPage() {
    return (
        <SiteChrome>
            <PageHero
                eyebrow="INTERVIEW SUPPORT"
                title="Mock Interviews"
                description="Professional interview practice sessions designed specifically for dancers transitioning to new careers."
                primaryCta={{ label: 'Book a mock interview', href: bookMockInterviewUrl, external: true, dark: true }}
                secondaryCta={{ label: 'See all services', href: '/services' }}
                metrics={[
                    { value: '60', label: 'minutes of realistic practice' },
                    { value: 'Tailored', label: 'questions for your target role' },
                    { value: '1', label: 'recorded session to review' },
                    { value: 'Dancer', label: 'career-change focused support' },
                ]}
                media={
                    <div className="rounded-[40px] border border-[#E6DED2] bg-white p-5 shadow-[0_34px_80px_rgba(45,49,56,0.08)]">
                        <img src="/assets/mock-interview.png" alt="Mock interview support" className="mx-auto h-[420px] w-auto object-contain" />
                    </div>
                }
            />

            <SectionBlock
                label="WHAT YOU GET"
                title="A dress rehearsal for the moments that matter"
                description="Mock Interviews help dancers practice the exact part of transition that can feel hardest: talking about themselves clearly in a new professional context."
                background="#FFFFFF"
                aside={
                    <a
                        href={bookMockInterviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white"
                    >
                        Book now
                    </a>
                }
            >
                <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
                    <Checklist items={mockInterviewFeatures} />
                    <InfoGrid columns={1} cards={interviewTypes} />
                </div>
            </SectionBlock>

            <SectionBlock
                label="PROCESS"
                title="Simple, direct, and easy to act on"
                description="The goal is to give dancers a realistic practice environment, useful feedback, and a stronger sense of how to show up next time."
                background="#F7F2EA"
            >
                <InfoGrid cards={processCards} />
            </SectionBlock>

            <SectionBlock
                label="WHY IT HELPS"
                title="Confidence and clarity before the real interview"
                description="The benefit is not just practice. It is learning how to position your dance background in a way employers can understand."
                background="#FFFFFF"
            >
                <InfoGrid cards={benefitCards} />
            </SectionBlock>
        </SiteChrome>
    );
}
