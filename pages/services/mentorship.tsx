import { MessageCircle, Target, User, Users } from 'lucide-react';
import {
    Checklist,
    InfoGrid,
    PageHero,
    QuotePanel,
    SectionBlock,
    SiteChrome,
} from '../../components/site/MarketingPrimitives';

const bookMentorshipUrl = 'https://tidycal.com/pivotfordancers/mentorship-1';

export default function MentorshipPage() {
    return (
        <SiteChrome>
            <PageHero
                eyebrow="ONE-TO-ONE SUPPORT"
                title="Mentorship Program"
                description="Private support for dancers who want meaningful work off the stage and need guidance, reflection, and accountability from someone who understands the transition."
                primaryCta={{ label: 'Book mentorship', href: bookMentorshipUrl, external: true, dark: true }}
                secondaryCta={{ label: 'See all services', href: '/services' }}
                metrics={[
                    { value: '3', label: 'virtual sessions included' },
                    { value: '180', label: 'minutes of direct support' },
                    { value: '6', label: 'focus areas across the program' },
                    { value: '1', label: 'dedicated mentor in your corner' },
                ]}
                media={
                    <div className="rounded-[40px] border border-[#E6DED2] bg-white p-5 shadow-[0_34px_80px_rgba(45,49,56,0.08)]">
                        <img src="/assets/pivot-mentorship.png" alt="Pivot mentorship" className="mx-auto h-[420px] w-auto object-contain" />
                    </div>
                }
            />

            <SectionBlock
                label="WHAT IT IS"
                title="Support that is personal, dancer-specific, and action-oriented"
                description="The offer should feel closer to a premium coaching product, but still warm and brand-specific."
                background="#FFFFFF"
            >
                <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
                    <Checklist
                        items={[
                            'Three one-hour virtual sessions with an experienced former professional dancer.',
                            'Private and confidential conversations shaped around your real goals.',
                            'Guided reflection, tailored resources, and momentum between sessions.',
                            'Action plans and networking support so the work continues after the calls.',
                        ]}
                    />
                    <InfoGrid
                        columns={1}
                        cards={[
                            {
                                title: 'Pre-pro dancers',
                                description: 'Build a longer-view plan before the career on stage becomes the only identity available.',
                                icon: Users,
                            },
                            {
                                title: 'Current professionals',
                                description: 'Create direction, accountability, and courage while you are still in the thick of dance work.',
                                icon: Target,
                            },
                            {
                                title: 'Former professionals',
                                description: 'Keep building after the first pivot if the new career still does not feel fully right.',
                                icon: User,
                            },
                        ]}
                    />
                </div>
            </SectionBlock>

            <SectionBlock
                label="PROCESS"
                title="A cleaner, simpler service journey"
                description="The steps should feel obvious and low-friction: book, reflect, attend, act."
                background="#F7F2EA"
            >
                <InfoGrid
                    cards={[
                        {
                            title: 'Book your first session',
                            description: 'Receive a welcome guide, meet your mentor pairing, and begin goal-setting before the first call.',
                            icon: MessageCircle,
                        },
                        {
                            title: 'Show up for yourself',
                            description: 'Attend the three sessions and work through reflection questions and action plans between them.',
                            icon: Users,
                        },
                        {
                            title: 'Leave with momentum',
                            description: 'Finish with a clearer plan, stronger perspective, and a new person in your network.',
                            icon: Target,
                        },
                    ]}
                />
            </SectionBlock>

            <SectionBlock
                label="SOCIAL PROOF"
                title="The service should feel high-trust from the first screen"
                description="This is where the Future influence matters most: cleaner framing, less clutter, more confidence."
                background="#FFFFFF"
            >
                <QuotePanel
                    quote="Support, guidance, and self-exploration exercises all in one place."
                    author="Kelsey Glennon"
                    role="Former Dancer & Travel Journalist"
                    image="/assets/kelsey-glennon.jpeg"
                />
            </SectionBlock>
        </SiteChrome>
    );
}
