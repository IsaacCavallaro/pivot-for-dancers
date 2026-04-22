import Image from 'next/image';
import { ArrowRight, Briefcase, Globe, Heart, Users } from 'lucide-react';
import DetailCardShell from '../components/site/DetailCardShell';
import { SiteChrome } from '../components/site/MarketingPrimitives';

const journeyStages = [
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
];

const values = [
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
];

export default function AboutPage() {
    return (
        <SiteChrome>
            <section className="px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-12 lg:pt-32">
                <div className="mx-auto max-w-[1280px]">
                    <div className="max-w-3xl text-center lg:text-left">
                        <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#7A7D86]">
                            FORMER DANCER, FOUNDER-LED
                        </div>
                        <h1 className="mt-5 text-[48px] font-bold leading-[0.95] tracking-[-0.04em] text-[#111827] md:text-[64px] lg:text-[76px]">
                            About
                        </h1>
                        <p className="mt-5 max-w-2xl text-[18px] leading-8 text-[#60636B]">
                            Career transition resources for professional dancers, built by former dancers who understand what it means to step into a new chapter.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#F7F2EA] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-[1280px]">
                    <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
                        <DetailCardShell className="h-full">
                            <div className="flex h-full flex-col p-5 md:p-6">
                                <div className="flex flex-col items-center justify-between gap-3 rounded-[24px] border border-black/8 bg-white px-5 py-4 text-center sm:flex-row sm:text-left">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF2F5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#647C90]">
                                        Founder-led
                                    </div>
                                    <div className="rounded-full border border-[#E5DDCF] bg-[#FCFAF6] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5E6167]">
                                        Built for dancers
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-1 flex-col gap-4">
                                    <div className="rounded-[26px] border border-black/8 bg-white px-5 py-6 md:px-6">
                                        <div className="mt-5 text-center md:text-left">
                                            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                                What it is
                                            </p>
                                            <h2 className="mt-3 text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827] md:text-[36px]">
                                                Career transition support shaped by lived experience
                                            </h2>
                                            <p className="mt-4 text-[15px] leading-8 text-[#60636B]">
                                                Pivot for Dancers exists to help dancers find meaning off the stage with support that feels honest, specific, and grounded in lived experience.
                                            </p>
                                        </div>
                                        <div className="mt-6 flex min-h-[300px] items-center justify-center rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] p-6">
                                            <Image
                                                src="/assets/logo-badge.png"
                                                alt="Pivot for Dancers logo"
                                                width={520}
                                                height={520}
                                                className="h-[220px] w-auto object-contain md:h-[280px]"
                                            />
                                        </div>
                                        <div className="mt-6 rounded-[24px] border border-[#E8E0D4] bg-[#FCFAF6] px-5 py-5">
                                            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                                Our story
                                            </div>
                                            <p className="mt-3 text-[15px] leading-8 text-[#60636B]">
                                                Run by a former professional dancer with structured tools, mindset shifts, and taboo conversations for what to do next, whether you&apos;re injured, unwell, or your priorities have changed.
                                            </p>
                                        </div>
                                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                            <a
                                                href="https://stats.sender.net/forms/aKrmkz/view"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#647C90] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#556c7f]"
                                            >
                                                Join our community
                                                <ArrowRight className="h-4 w-4" />
                                            </a>
                                            <a
                                                href="https://tidycal.com/pivotfordancers/mentorship-1"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-[#FCFAF6] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#111827]"
                                            >
                                                Schedule consultation
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DetailCardShell>

                        <div className="grid gap-8">
                            <DetailCardShell>
                                <div className="p-5 md:p-6">
                                    <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                        The journey
                                    </div>
                                    <h2 className="mt-3 text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827]">
                                        The Dream, The Grit, and The Reality
                                    </h2>
                                    <div className="mt-5 grid gap-4">
                                        {journeyStages.map((item) => (
                                            <div
                                                key={item.title}
                                                className="rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] px-5 py-5"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#647C90] text-white">
                                                        <item.icon className="h-5 w-5" />
                                                    </div>
                                                    <div>
                                                        <div className="text-[22px] font-bold leading-tight text-[#111827]">
                                                            {item.title}
                                                        </div>
                                                        <p className="mt-3 text-[14px] leading-7 text-[#60636B]">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-5 border-t border-[#E8E0D4] pt-5">
                                        <div className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                            Founder note
                                        </div>
                                        <div className="rounded-[22px] border border-black/8 bg-white px-5 py-5">
                                            <p className="text-[18px] font-medium leading-8 text-[#4E4F50] md:text-[20px] md:leading-9">
                                                “Our mission is to foster empowerment, community, and authenticity within the dance industry so dancers feel supported as they step onto their next stage of life.”
                                            </p>
                                            <div className="mt-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#928490]">
                                                Pivot for Dancers
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DetailCardShell>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-8 lg:grid-cols-3">
                        {values.map((item) => (
                            <DetailCardShell key={item.title}>
                                <div className="p-5 md:p-6">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-[#647C90] text-white">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div className="mt-4 text-[28px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827]">
                                        {item.title}
                                    </div>
                                    <p className="mt-4 text-[15px] leading-8 text-[#60636B]">
                                        {item.description}
                                    </p>
                                </div>
                            </DetailCardShell>
                        ))}
                    </div>
                </div>
            </section>
        </SiteChrome>
    );
}
