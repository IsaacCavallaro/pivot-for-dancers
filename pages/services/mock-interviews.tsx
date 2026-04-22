import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Briefcase, Heart, Shield, Star, Target, TrendingUp } from 'lucide-react';
import DetailCardShell from '../../components/site/DetailCardShell';
import { SiteChrome } from '../../components/site/MarketingPrimitives';

const bookMockInterviewUrl = 'https://tidycal.com/pivotfordancers/mock-interview';

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
            <section className="px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-12 lg:pt-32">
                <div className="mx-auto max-w-[1280px]">
                    <div className="max-w-3xl text-center lg:text-left">
                        <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#7A7D86]">
                            INTERVIEW SUPPORT
                        </div>
                        <h1 className="mt-5 text-[48px] font-bold leading-[0.95] tracking-[-0.04em] text-[#111827] md:text-[64px] lg:text-[76px]">
                            Mock Interviews
                        </h1>
                        <p className="mt-5 max-w-2xl text-[18px] leading-8 text-[#60636B]">
                            Professional interview practice sessions designed specifically for dancers transitioning to new careers.
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
                                        Interview support
                                    </div>
                                    <div className="rounded-full border border-[#E5DDCF] bg-[#FCFAF6] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5E6167]">
                                        60-minute practice
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-1 flex-col gap-4">
                                    <div className="rounded-[26px] border border-black/8 bg-white px-5 py-6 md:px-6">
                                        <div className="mt-5 text-center md:text-left">
                                            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                                What it is
                                            </p>
                                            <h2 className="mt-3 text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827] md:text-[36px]">
                                                A dress rehearsal for the moments that matter
                                            </h2>
                                            <p className="mt-4 text-[15px] leading-8 text-[#60636B]">
                                                Mock Interviews help dancers practice the exact part of transition that can feel hardest: talking about themselves clearly in a new professional context.
                                            </p>
                                        </div>
                                        <div className="mt-6 flex min-h-[300px] items-center justify-center rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] p-6">
                                            <Image
                                                src="/assets/mock-interview.png"
                                                alt="Mock interview support"
                                                width={720}
                                                height={960}
                                                className="h-[280px] w-auto object-contain md:h-[340px]"
                                            />
                                        </div>
                                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                            <a
                                                href={bookMockInterviewUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#647C90] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#556c7f]"
                                            >
                                                Book a mock interview
                                                <ArrowRight className="h-4 w-4" />
                                            </a>
                                            <Link
                                                href="/services"
                                                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-[#FCFAF6] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#111827]"
                                            >
                                                See all services
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DetailCardShell>

                        <div className="grid gap-8">
                            <DetailCardShell>
                                <div className="p-5 md:p-6">
                                    <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                        Interview types
                                    </div>
                                    <h2 className="mt-3 text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827]">
                                        Practice for the conversations you are actually preparing for
                                    </h2>
                                    <div className="mt-5 grid gap-4">
                                        {interviewTypes.map((item) => (
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
                                            Dancer review
                                        </div>
                                        <div className="rounded-[22px] border border-black/8 bg-white px-5 py-5">
                                            <div className="flex items-center justify-center gap-1 md:justify-start">
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <Star key={index} className="h-4 w-4 fill-[#F4B740] text-[#F4B740]" />
                                                ))}
                                            </div>
                                            <p className="mt-4 text-[18px] font-medium leading-8 text-[#4E4F50] md:text-[20px] md:leading-9">
                                                “Professional interview practice that helps dancers feel clearer, calmer, and more prepared for the real conversation.”
                                            </p>
                                            <div className="mt-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#928490]">
                                                Pivot for Dancers Community
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DetailCardShell>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-8 lg:grid-cols-3">
                        {benefitCards.map((item) => (
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
