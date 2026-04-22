import Image from 'next/image';
import { ArrowRight, Award, Heart, Shield, Star, TrendingUp } from 'lucide-react';
import { coursePaymentUrl } from '../../data/products';
import { SiteChrome } from '../../components/site/MarketingPrimitives';

const roadmapStages = [
    {
        title: 'While dancing',
        description: 'Take practical steps while you are still working as a professional dancer and use the first year of your pivot journey more intentionally.',
        icon: Heart,
    },
    {
        title: 'Entry-level',
        description: 'Once you land the first role in your new career, keep building with guidance on how to cope, grow, and settle into the next chapter.',
        icon: Award,
    },
    {
        title: 'Specialize',
        description: 'Start focusing your direction with support around mindset, practical decisions, and how to rediscover your love of dance.',
        icon: TrendingUp,
    },
];

const supportAreas = [
    {
        title: 'Mindset shifts',
        description: 'A huge part of career change is changing your mindset. The course helps you prepare for the internal shifts required to successfully pivot.',
        icon: Heart,
    },
    {
        title: 'Practical knowledge',
        description: 'From the job search to finances, it covers the practical knowledge that no one likes to talk about in the arts and entertainment industries.',
        icon: Shield,
    },
    {
        title: 'Tailored resources',
        description: 'Everything is tailored to the unique challenges and opportunities dancers face when building a career beyond the stage.',
        icon: Award,
    },
];

const CardShell = ({
    children,
    className = '',
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <div className={`rounded-[34px] border border-[#E8E0D4] bg-[#F5F6F2] p-4 shadow-[0_30px_70px_rgba(45,49,56,0.08)] ${className}`}>
        <div className="h-full rounded-[28px] border border-black/8 bg-white">{children}</div>
    </div>
);

export default function HappyTrailsPage() {
    return (
        <SiteChrome>
            <section className="px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-12 lg:pt-32">
                <div className="mx-auto max-w-[1280px]">
                    <div className="max-w-3xl text-center lg:text-left">
                        <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#7A7D86]">
                            DIGITAL COURSE
                        </div>
                        <h1 className="mt-5 text-[48px] font-bold leading-[0.95] tracking-[-0.04em] text-[#111827] md:text-[64px] lg:text-[76px]">
                            Happy Trails
                        </h1>
                        <p className="mt-5 max-w-2xl text-[18px] leading-8 text-[#60636B]">
                            Happy Trails is a self-paced, four-part mini course and 5-year career change roadmap designed to help dancers plan for before, during, and after the pivot.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#F7F2EA] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-[1280px]">
                    <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
                        <CardShell className="h-full">
                            <div className="flex h-full flex-col p-5 md:p-6">
                                <div className="flex flex-col items-center justify-between gap-3 rounded-[24px] border border-black/8 bg-white px-5 py-4 text-center sm:flex-row sm:text-left">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF2F5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#647C90]">
                                        Digital course
                                    </div>
                                    <div className="rounded-full border border-[#E5DDCF] bg-[#FCFAF6] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5E6167]">
                                        4-part roadmap
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-1 flex-col gap-4">
                                    <div className="rounded-[26px] border border-black/8 bg-white px-5 py-6 md:px-6">
                                        <div className="mt-5 text-center md:text-left">
                                            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                                What it is
                                            </p>
                                            <h2 className="mt-3 text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827] md:text-[36px]">
                                                A long-view roadmap for the pivot ahead
                                            </h2>
                                            <p className="mt-4 text-[15px] leading-8 text-[#60636B]">
                                                Happy Trails gives dancers a structured way to think about before, during, and after career transition, so the pivot feels less reactive and more intentional over time.
                                            </p>
                                        </div>
                                        <div className="mt-6 flex min-h-[300px] items-center justify-center rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] p-6">
                                            <Image
                                                src="/assets/happy-trails-mini-course.png"
                                                alt="Happy Trails course"
                                                width={720}
                                                height={960}
                                                className="h-[280px] w-auto object-contain md:h-[340px]"
                                            />
                                        </div>
                                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                            <a
                                                href={coursePaymentUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#647C90] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#556c7f]"
                                            >
                                                Buy the course
                                                <ArrowRight className="h-4 w-4" />
                                            </a>
                                            <a
                                                href="/products"
                                                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-[#FCFAF6] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#111827]"
                                            >
                                                See all products
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardShell>

                        <div className="grid gap-8">
                            <CardShell>
                                <div className="p-5 md:p-6">
                                    <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                        The pathway
                                    </div>
                                    <h2 className="mt-3 text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827]">
                                        A roadmap for before, during, and after the pivot
                                    </h2>
                                    <div className="mt-5 grid gap-4">
                                        {roadmapStages.map((item) => (
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
                                                “I cannot recommend this course enough. It is incredibly informative, encouraging, and inspiring. I feel so much more prepared and confident in myself as I take this next step in my career.”
                                            </p>
                                            <div className="mt-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#928490]">
                                                Alexa Schmidt
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardShell>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-8 lg:grid-cols-3">
                        {supportAreas.map((item) => (
                            <CardShell key={item.title}>
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
                            </CardShell>
                        ))}
                    </div>
                </div>
            </section>
        </SiteChrome>
    );
}
