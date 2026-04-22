import { ArrowRight, BookOpen, Clock3, Sparkles } from 'lucide-react';
import { resources } from '../../data/resources';
import { SectionBlock, SiteChrome } from '../../components/site/MarketingPrimitives';

export default function ResourcesPage() {
    return (
        <SiteChrome>
            <section className="px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-12 lg:pt-32">
                <div className="mx-auto max-w-[1280px]">
                    <div className="max-w-3xl">
                        <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#7A7D86]">
                            RESOURCES
                        </div>
                        <h1 className="mt-5 text-[48px] font-bold leading-[0.95] tracking-[-0.04em] text-[#111827] md:text-[64px] lg:text-[76px]">
                            Resource Library
                        </h1>
                        <p className="mt-5 max-w-2xl text-[18px] leading-8 text-[#60636B]">
                            Browse the free resources designed to help dancers feel less stuck, more informed, and more supported through the pivot.
                        </p>
                    </div>
                </div>
            </section>

            <SectionBlock
                label="CATALOGUE"
                title="See what is available at a glance"
                description="Each resource offers a different entry point into the Pivot for Dancers ecosystem, depending on what kind of support feels most useful right now."
                background="#F7F2EA"
            >
                <div id="resources" className="grid gap-6 lg:grid-cols-2">
                    {resources.map((resource) => (
                        <div
                            key={resource.id}
                            className="flex h-full rounded-[34px] border border-[#E8E0D4] bg-[#F5F6F2] p-4 shadow-[0_30px_70px_rgba(45,49,56,0.08)]"
                        >
                            <div className="flex h-full w-full flex-col rounded-[28px] border border-black/8 bg-white p-6">
                                <div className="mb-6 flex min-h-[280px] items-center justify-center rounded-[24px] border border-[#E8E0D4] bg-[#FCFAF6] p-6">
                                    <img
                                        src={resource.image}
                                        alt={resource.title}
                                        className="h-[220px] w-full object-contain"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col">
                                    <div className="min-h-[170px]">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="rounded-full border border-[#DCE4EB] bg-[#EEF2F5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#647C90]">
                                                {resource.duration}
                                            </span>
                                        </div>
                                        <h2 className="mt-4 text-[34px] font-bold leading-[0.98] tracking-[-0.03em] text-[#111827]">
                                            {resource.title}
                                        </h2>
                                        <p className="mt-4 max-w-[26rem] text-[15px] leading-8 text-[#60636B]">
                                            {resource.description}
                                        </p>
                                    </div>

                                    <div className="mt-5 rounded-[24px] border border-[#E8E0D4] bg-[#FCFAF6] px-5 py-4">
                                        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                            Access
                                        </div>
                                        <div className="mt-2 text-[28px] font-bold leading-none tracking-[-0.03em] text-[#111827]">
                                            Free
                                        </div>
                                        <div className="mt-3 text-[13px] leading-6 text-[#60636B]">
                                            {resource.type}
                                        </div>
                                    </div>

                                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                                        <div className="rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] px-4 py-4">
                                            <div className="flex items-center gap-2 text-[#647C90]">
                                                <BookOpen className="h-4 w-4" />
                                                <span className="text-[11px] font-bold uppercase tracking-[0.16em]">Format</span>
                                            </div>
                                            <div className="mt-3 text-[17px] font-semibold leading-tight text-[#111827]">
                                                {resource.type}
                                            </div>
                                        </div>
                                        <div className="rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] px-4 py-4">
                                            <div className="flex items-center gap-2 text-[#647C90]">
                                                <Clock3 className="h-4 w-4" />
                                                <span className="text-[11px] font-bold uppercase tracking-[0.16em]">Category</span>
                                            </div>
                                            <div className="mt-3 text-[17px] font-semibold leading-tight text-[#111827]">
                                                {resource.duration}
                                            </div>
                                        </div>
                                        <div className="rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] px-4 py-4">
                                            <div className="flex items-center gap-2 text-[#647C90]">
                                                <Sparkles className="h-4 w-4" />
                                                <span className="text-[11px] font-bold uppercase tracking-[0.16em]">Access</span>
                                            </div>
                                            <div className="mt-3 text-[17px] font-semibold leading-tight text-[#111827]">
                                                Open now
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex-1">
                                        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                            What you get
                                        </div>
                                        <div className="mt-3 flex min-h-[92px] flex-wrap content-start gap-2">
                                            {resource.features.map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="rounded-full border border-[#DCE4EB] bg-[#EEF2F5] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#647C90]"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                        <a
                                            href={resource.url}
                                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111827] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white"
                                        >
                                            Open resource
                                            <ArrowRight className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionBlock>
        </SiteChrome>
    );
}
