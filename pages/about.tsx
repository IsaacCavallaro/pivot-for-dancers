import Image from 'next/image';
import { Globe, Heart, Briefcase, Users } from 'lucide-react';
import {
    InfoGrid,
    PageHero,
    QuotePanel,
    SectionBlock,
    SiteChrome,
} from '../components/site/MarketingPrimitives';

export default function AboutPage() {
    return (
        <SiteChrome>
            <PageHero
                eyebrow="ABOUT"
                title="A dancer-built brand for the life that comes after dance"
                description="Pivot for Dancers exists to help professional dancers navigate the emotional, practical, and identity-level reality of career change with more clarity and less isolation."
                primaryCta={{ label: 'Join the community', href: 'https://stats.sender.net/forms/aKrmkz/view', external: true, dark: true }}
                secondaryCta={{ label: 'Explore Pivot Paths', href: '/resources/pivot-paths' }}
                media={
                    <div className="grid gap-5 md:grid-cols-[0.84fr_1.16fr]">
                        <div className="rounded-[34px] border border-[#E6DED2] bg-white p-5 shadow-[0_30px_70px_rgba(45,49,56,0.08)]">
                            <div className="overflow-hidden rounded-[26px]">
                                <Image
                                    src="/assets/kr-head-shot.jpg"
                                    alt="Kaylee Randall"
                                    width={616}
                                    height={816}
                                    className="h-[340px] w-full object-cover"
                                />
                            </div>
                            <div className="mt-4 text-xl font-bold text-[#111827]">Kaylee Randall</div>
                            <p className="mt-2 text-sm leading-7 text-[#5E6167]">
                                Founder of Pivot for Dancers and a former professional dancer who has already lived the pivot herself.
                            </p>
                        </div>
                        <div className="space-y-5">
                            <div className="rounded-[30px] bg-[#111827] p-6 text-white shadow-[0_28px_70px_rgba(17,24,39,0.26)]">
                                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                                    The mission
                                </div>
                                <p className="mt-4 text-xl font-semibold leading-9">
                                    Help dancers find meaningful work off the stage without losing the part of themselves that dance shaped.
                                </p>
                            </div>
                            <div className="rounded-[30px] border border-[#E8E0D4] bg-white p-6 shadow-[0_24px_48px_rgba(45,49,56,0.06)]">
                                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#928490]">
                                    The difference
                                </div>
                                <p className="mt-4 text-sm leading-7 text-[#5E6167]">
                                    This is not generic career advice. It is dancer-specific support shaped by the psychology, finances, and identity shifts that come with transition.
                                </p>
                            </div>
                        </div>
                    </div>
                }
            />

            <SectionBlock
                label="WHY IT EXISTS"
                title="The transition usually starts long before the dancer says it out loud"
                description="There is often a long period of friction between still living the dream and quietly knowing something needs to change. Pivot for Dancers is built for that exact moment."
                background="#FFFFFF"
            >
                <InfoGrid
                    cards={[
                        {
                            title: 'The dream is real',
                            description: 'Dance careers can be fulfilling, identity-shaping, and deeply meaningful.',
                            icon: Heart,
                        },
                        {
                            title: 'The pressure is real too',
                            description: 'Instability, burnout, physical strain, and money worries often live beside the dream.',
                            icon: Briefcase,
                        },
                        {
                            title: 'The next chapter needs better support',
                            description: 'Dancers deserve guidance that understands both what they are leaving and what they are building.',
                            icon: Users,
                        },
                    ]}
                />
            </SectionBlock>

            <SectionBlock
                label="FOUNDER POV"
                title="A former dancer building the kind of support she wished existed earlier"
                description="The brand works because it is emotionally literate without losing practical value."
                background="#F7F2EA"
            >
                <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
                    <QuotePanel
                        quote="Pivot for Dancers came to me at the perfect time and helped me realise that I was not alone."
                        author="Mallory Gladman"
                        role="Former Dancer & Event Business Owner"
                        image="/assets/mallory-gladman.jpg"
                    />
                    <InfoGrid
                        columns={2}
                        cards={[
                            {
                                title: 'Global community',
                                description: 'The work now reaches dancers across multiple countries and stages of transition.',
                                icon: Globe,
                            },
                            {
                                title: 'Real conversations',
                                description: 'Founder credibility is strongest when paired with stories, workshops, and honest community dialogue.',
                                icon: Users,
                            },
                        ]}
                    />
                </div>
            </SectionBlock>
        </SiteChrome>
    );
}
