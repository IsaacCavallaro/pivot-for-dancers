import Image from 'next/image';
import { ArrowRight, Brain, Compass, Heart, Shield, Star, Target } from 'lucide-react';
import DetailCardShell from '../../components/site/DetailCardShell';
import { ebookPaymentUrl } from '../../data/products';
import { SiteChrome } from '../../components/site/MarketingPrimitives';

const pathwayCards = [
    {
        title: 'Self-discovery',
        description: 'Explore the psychological concepts behind career transition and discover what truly drives you beyond the stage through deeper introspection.',
        icon: Brain,
    },
    {
        title: 'Future career paths',
        description: 'Unlock your curiosity, identify meaningful work off the stage, and start naming the kinds of roles that actually fit your strengths.',
        icon: Target,
    },
    {
        title: 'Action planning',
        description: 'Move from reflection into motion with practical next steps, clearer language, and a plan that feels realistic to begin.',
        icon: Compass,
    },
];

const whyReadersConnect = [
    {
        title: 'Taboo topics',
        description: 'It names the financial, emotional, and identity questions dancers often carry quietly through the transition.',
        icon: Heart,
    },
    {
        title: 'Mindset shifts',
        description: 'It helps dancers notice the patterns that keep them stuck so the pivot becomes emotionally possible, not just strategically possible.',
        icon: Brain,
    },
    {
        title: 'Practical tools',
        description: 'It translates dance experience into language, transferable skills, and a resume story employers can understand.',
        icon: Shield,
    },
];

export default function HowToPivotPage() {
    return (
        <SiteChrome>
            <section className="px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-12 lg:pt-32">
                <div className="mx-auto max-w-[1280px]">
                    <div className="max-w-3xl text-center lg:text-left">
                        <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#7A7D86]">
                            DIGITAL GUIDE
                        </div>
                        <h1 className="mt-5 text-[48px] font-bold leading-[0.95] tracking-[-0.04em] text-[#111827] md:text-[64px] lg:text-[76px]">
                            How to Pivot
                        </h1>
                        <p className="mt-5 max-w-2xl text-[18px] leading-8 text-[#60636B]">
                            Feeling stuck in your dance career or unsure what else is out there beyond the stage? How to Pivot is an actionable, dancer-specific guide to help you find meaningful work off the stage.
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
                                        Digital guide
                                    </div>
                                    <div className="rounded-full border border-[#E5DDCF] bg-[#FCFAF6] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5E6167]">
                                        24+ reviews
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-1 flex-col gap-4">
                                    <div className="rounded-[26px] border border-black/8 bg-white px-5 py-6 md:px-6">
                                        <div className="mt-5 text-center md:text-left">
                                            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                                What it is
                                            </p>
                                            <h2 className="mt-3 text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827] md:text-[36px]">
                                                A guide dancers can actually see themselves in
                                            </h2>
                                            <p className="mt-4 text-[15px] leading-8 text-[#60636B]">
                                                Part self-help book and part action-focused career resource, this guide helps dancers make sense of the identity shift, the practical decisions, and the possibilities beyond performance.
                                            </p>
                                        </div>
                                        <div className="mt-6 flex min-h-[300px] items-center justify-center rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] p-6">
                                            <Image
                                                src="/assets/how-to-pivot-ebook.png"
                                                alt="How to Pivot ebook"
                                                width={720}
                                                height={960}
                                                className="h-[280px] w-auto object-contain md:h-[340px]"
                                            />
                                        </div>
                                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                            <a
                                                href={ebookPaymentUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#647C90] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#556c7f]"
                                            >
                                                Buy the ebook
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
                        </DetailCardShell>

                        <div className="grid gap-8">
                            <DetailCardShell>
                                <div className="p-5 md:p-6">
                                    <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                        The pathway
                                    </div>
                                    <h2 className="mt-3 text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827]">
                                        From reflection to action
                                    </h2>
                                    <div className="mt-5 grid gap-4">
                                        {pathwayCards.map((item) => (
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
                                            “Finally a platform that says what we’re all thinking and helps dancers understand they deserve joy in all aspects of life.”
                                        </p>
                                        <div className="mt-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#928490]">
                                            Christie Bellish
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </DetailCardShell>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-8 lg:grid-cols-3">
                        {whyReadersConnect.map((item) => (
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
