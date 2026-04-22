import { Award, MessageSquare, Shield, Target } from 'lucide-react';
import {
    Checklist,
    InfoGrid,
    PageHero,
    SectionBlock,
    SiteChrome,
} from '../../components/site/MarketingPrimitives';

const bookMockInterviewUrl = 'https://tidycal.com/pivotfordancers/mock-interview';

export default function MockInterviewPage() {
    return (
        <SiteChrome>
            <PageHero
                eyebrow="INTERVIEW SUPPORT"
                title="Mock Interviews"
                description="Practice your interview skills, strengthen the way you talk about your dance background, and build confidence before the real conversation happens."
                primaryCta={{ label: 'Book a mock interview', href: bookMockInterviewUrl, external: true, dark: true }}
                secondaryCta={{ label: 'See all services', href: '/services' }}
                metrics={[
                    { value: '60', label: 'minutes of realistic practice' },
                    { value: '1', label: 'recorded session to review' },
                    { value: '3', label: 'main benefit areas' },
                    { value: '1', label: 'clearer interview narrative' },
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
                description="This page should frame the service like a confidence-building, conversion-focused offer rather than a generic coaching add-on."
                background="#FFFFFF"
            >
                <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
                    <Checklist
                        items={[
                            'A realistic 60-minute interview simulation over video.',
                            'Feedback on your performance, communication, and positioning.',
                            'A session recording for review and further practice.',
                            'Support translating dance experience into employer-friendly language.',
                        ]}
                    />
                    <InfoGrid
                        columns={1}
                        cards={[
                            {
                                title: 'Build confidence',
                                description: 'Reduce anxiety by practicing in a safe environment before the real interview.',
                                icon: Shield,
                            },
                            {
                                title: 'Highlight transferable skills',
                                description: 'Learn how to talk about discipline, teamwork, adaptability, and performance under pressure.',
                                icon: Award,
                            },
                            {
                                title: 'Prepare with purpose',
                                description: 'Get more intentional about how you answer and how you position your story.',
                                icon: Target,
                            },
                        ]}
                    />
                </div>
            </SectionBlock>

            <SectionBlock
                label="PROCESS"
                title="Simple, direct, and easy to act on"
                description="The service journey should feel cleaner and more premium than the old long-form landing page."
                background="#F7F2EA"
            >
                <InfoGrid
                    cards={[
                        {
                            title: 'Book your session',
                            description: 'Choose the session and share your target role or industry context.',
                            icon: MessageSquare,
                        },
                        {
                            title: 'Practice the interview',
                            description: 'Work through a realistic conversation with questions tailored to your goals.',
                            icon: Shield,
                        },
                        {
                            title: 'Review and improve',
                            description: 'Leave with feedback, a recording, and a clearer sense of how to show up next time.',
                            icon: Target,
                        },
                    ]}
                />
            </SectionBlock>
        </SiteChrome>
    );
}
