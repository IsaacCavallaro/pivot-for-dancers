import { Calendar, MessageSquare, Users } from 'lucide-react';
import { services } from '../../data/services';
import {
    InfoGrid,
    PageHero,
    SectionBlock,
    ShowcaseGrid,
    SiteChrome,
} from '../../components/site/MarketingPrimitives';

export default function ServicesPage() {
    return (
        <SiteChrome>
            <PageHero
                eyebrow="SERVICES"
                title="Direct support for dancers who want guidance, not guesswork"
                description="When someone is ready for personalised help, the service experience should feel clear, premium, and grounded in former-dancer understanding from the first screen."
                primaryCta={{ label: 'See the services', href: '#services', dark: true }}
                secondaryCta={{ label: 'Start free first', href: '/resources/pivot-paths' }}
                media={
                    <div className="rounded-[40px] bg-[#111827] p-6 text-white shadow-[0_36px_84px_rgba(17,24,39,0.24)]">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-[28px] bg-white/8 p-5">
                                <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                                    1:1 guidance
                                </div>
                                <div className="mt-3 text-2xl font-bold">Mentorship</div>
                                <p className="mt-3 text-sm leading-7 text-white/74">
                                    Goal-setting, reflection, and momentum for dancers navigating their next chapter.
                                </p>
                            </div>
                            <div className="rounded-[28px] bg-white/8 p-5">
                                <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                                    Confidence builder
                                </div>
                                <div className="mt-3 text-2xl font-bold">Mock Interviews</div>
                                <p className="mt-3 text-sm leading-7 text-white/74">
                                    Practice talking about your dance background in a way employers actually understand.
                                </p>
                            </div>
                        </div>
                    </div>
                }
            />

            <SectionBlock
                label="WHY SERVICES"
                title="High-trust support for moments when free tools are not enough"
                description="These pages should feel close to Future’s confidence level: stronger hierarchy, cleaner offer framing, and obvious trust signals."
                background="#FFFFFF"
            >
                <InfoGrid
                    cards={[
                        {
                            title: 'Former-dancer context',
                            description: 'Support from someone who understands both the dance world and the pivot out of it.',
                            icon: Users,
                        },
                        {
                            title: 'Practical momentum',
                            description: 'Sessions should lead to decisions, clearer narratives, and concrete next actions.',
                            icon: Calendar,
                        },
                        {
                            title: 'Confidence under pressure',
                            description: 'Especially for interviews, the goal is to help dancers sound strong and legible beyond the stage.',
                            icon: MessageSquare,
                        },
                    ]}
                />
            </SectionBlock>

            <SectionBlock
                label="SERVICES"
                title="Pick the kind of direct help you need"
                description="Keep the offers concise and premium, with a cleaner path into booking."
                background="#F7F2EA"
            >
                <div id="services">
                    <ShowcaseGrid
                        cards={services.map((service, index) => ({
                            title: service.name,
                            description: service.description,
                            href: `/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`,
                            ctaLabel: index === 0 ? 'Explore mentorship' : 'Explore interview support',
                            image: service.img,
                            tone: index === 0 ? 'brand' : 'light',
                        }))}
                    />
                </div>
            </SectionBlock>
        </SiteChrome>
    );
}
