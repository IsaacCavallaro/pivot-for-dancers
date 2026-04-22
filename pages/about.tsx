import Image from 'next/image';
import { Globe, Heart, Briefcase, Users } from 'lucide-react';
import {
    InfoGrid,
    SectionBlock,
    SiteChrome,
} from '../components/site/MarketingPrimitives';

export default function AboutPage() {
    return (
        <SiteChrome>
            <section className="px-4 pb-18 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
                <div className="mx-auto max-w-[1280px]">
                    <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                        <div>
                            <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#7A7D86]">
                                WHO WE ARE &amp; WHAT WE DO
                            </div>
                            <h1 className="mt-5 max-w-xl text-[48px] font-bold leading-[0.94] tracking-[-0.04em] text-[#111827] md:text-[66px] lg:text-[82px]">
                                About Us
                            </h1>
                            <p className="mt-6 max-w-xl text-[18px] leading-8 text-[#60636B] md:text-[20px]">
                                Career transition resources for professional dancers, run by former dancers who have successfully changed careers.
                            </p>
                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <a
                                    href="https://stats.sender.net/forms/aKrmkz/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111827] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white"
                                >
                                    Join our community
                                </a>
                                <a
                                    href="https://tidycal.com/pivotfordancers/mentorship-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#111827]"
                                >
                                    Schedule consultation
                                </a>
                            </div>
                        </div>

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
                                    Founder of Pivot for Dancers.
                                </p>
                            </div>
                            <div className="space-y-5">
                                <div className="rounded-[30px] bg-[#111827] p-6 text-white shadow-[0_28px_70px_rgba(17,24,39,0.26)]">
                                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                                        Our story
                                    </div>
                                    <p className="mt-4 text-xl font-semibold leading-9">
                                        We help dancers find meaning off the stage.
                                    </p>
                                </div>
                                <div className="rounded-[30px] border border-[#E8E0D4] bg-white p-6 shadow-[0_24px_48px_rgba(45,49,56,0.06)]">
                                    <p className="text-sm leading-7 text-[#5E6167]">
                                        Run by a former professional dancer with structured tools, mindset shifts, and taboo conversations for what to do next whether you&apos;re injured, unwell, or your priorities have changed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SectionBlock
                label="YOUR JOURNEY"
                title="The Dream, The Grit, and The Reality"
                description="The pivot usually starts long before a dancer says it out loud. These stages are part of what so many dancers move through."
                background="#FFFFFF"
            >
                <InfoGrid
                    cards={[
                        {
                            title: 'The Dream',
                            description: 'You train for years, book your first job, and finally feel like you are truly living the dream.',
                            icon: Heart,
                        },
                        {
                            title: 'The Grit',
                            description: 'You keep dancing, teaching, and taking every extra gig you can get, but still struggle to make ends meet.',
                            icon: Briefcase,
                        },
                        {
                            title: 'The Reality',
                            description: 'You feel older, achy, and unsure where to go next. Stability starts to matter, even if you keep those thoughts to yourself.',
                            icon: Users,
                        },
                        {
                            title: 'The Unknown',
                            description: 'You start to reassess your goals, explore different options, and look for a new direction beyond dance.',
                            icon: Globe,
                        },
                    ]}
                    columns={4}
                />
            </SectionBlock>

            <SectionBlock
                label="OUR MISSION & VALUES"
                title="What Drives Us"
                description="Our mission is to foster empowerment, community, and authenticity within the dance industry to support dancers as they step onto their next stage of life."
                background="#F7F2EA"
            >
                <InfoGrid
                    cards={[
                        {
                            title: 'Empowerment',
                            description: 'We believe every dancer has valuable skills that translate beyond the stage. Our mission is to help you recognise and leverage these talents in your new career path.',
                            icon: Heart,
                        },
                        {
                            title: 'Community',
                            description: 'No dancer should navigate career change alone. We foster a supportive community where dancers share experiences, advice, and encouragement throughout their transitions.',
                            icon: Users,
                        },
                        {
                            title: 'Authenticity',
                            description: 'Our guidance comes from real experience. As former professional dancers ourselves, we understand the unique challenges and opportunities that come with career pivoting.',
                            icon: Briefcase,
                        },
                    ]}
                />
            </SectionBlock>

            <SectionBlock
                label="OUR GROWING IMPACT"
                title="Making a Difference"
                description="See how we&apos;re making a difference in the lives of dancers worldwide."
                background="#FFFFFF"
            >
                <InfoGrid
                    cards={[
                        {
                            title: 'Success Stories',
                            description: 'Dancers who have successfully transitioned to fulfilling careers in tech, education, business, and more.',
                            icon: Users,
                        },
                        {
                            title: 'Global Reach',
                            description: 'No need to be in New York or London to take advantage of our career change resources.',
                            icon: Globe,
                        },
                        {
                            title: 'Career Paths',
                            description: 'Dancers can be successful in so many other industries when you give yourself permission to step onto your next stage.',
                            icon: Heart,
                        },
                    ]}
                />
            </SectionBlock>
        </SiteChrome>
    );
}
