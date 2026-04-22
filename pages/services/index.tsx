import { ArrowRight, Calendar, MessageSquare, Star } from 'lucide-react';
import { services } from '../../data/services';
import { SectionBlock, SiteChrome } from '../../components/site/MarketingPrimitives';

const servicePageHref = (name: string) => `/services/${name.toLowerCase().replace(/\s+/g, '-')}`;
const formatMoney = (value: number) =>
    new Intl.NumberFormat('en-US', {
        minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
        maximumFractionDigits: 2,
    }).format(value);

export default function ServicesPage() {
    return (
        <SiteChrome>
            <section className="px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-12 lg:pt-32">
                <div className="mx-auto max-w-[1280px]">
                    <div className="max-w-3xl">
                        <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#7A7D86]">
                            SERVICES
                        </div>
                        <h1 className="mt-5 text-[48px] font-bold leading-[0.95] tracking-[-0.04em] text-[#111827] md:text-[64px] lg:text-[76px]">
                            Services Catalogue
                        </h1>
                        <p className="mt-5 max-w-2xl text-[18px] leading-8 text-[#60636B]">
                            Browse the current services available for dancers who want direct guidance, feedback, and more personalised support.
                        </p>
                    </div>
                </div>
            </section>

            <SectionBlock
                label="CATALOGUE"
                title="See what support is available"
                description="Each service offers direct support for a different part of the transition, from broader career guidance to targeted interview preparation."
                background="#F7F2EA"
            >
                <div id="services" className="grid gap-6 lg:grid-cols-2">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex h-full rounded-[34px] border border-[#E8E0D4] bg-[#F5F6F2] p-4 shadow-[0_30px_70px_rgba(45,49,56,0.08)]"
                        >
                            <div className="flex h-full w-full flex-col rounded-[28px] border border-black/8 bg-white p-6">
                                <div className="mb-6 flex min-h-[280px] items-center justify-center rounded-[24px] border border-[#E8E0D4] bg-[#FCFAF6] p-6">
                                    <img
                                        src={service.img}
                                        alt={service.name}
                                        className="h-[220px] w-full object-contain"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col">
                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                        <div className="max-w-[26rem]">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="rounded-full border border-[#DCE4EB] bg-[#EEF2F5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#647C90]">
                                                    {service.subtitle}
                                                </span>
                                            </div>
                                            <h2 className="mt-4 text-[34px] font-bold leading-[0.98] tracking-[-0.03em] text-[#111827]">
                                                {service.name}
                                            </h2>
                                            <p className="mt-4 text-[15px] leading-8 text-[#60636B]">
                                                {service.description}
                                            </p>
                                        </div>

                                        <div className="min-w-[170px] rounded-[24px] border border-[#E8E0D4] bg-[#FCFAF6] px-5 py-4">
                                            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                                Investment
                                            </div>
                                            <div className="mt-2 text-[32px] font-bold leading-none tracking-[-0.03em] text-[#111827]">
                                                ${formatMoney(service.price)}
                                            </div>
                                            {service.originalPrice > 0 && (
                                                <div className="mt-3 text-[13px] leading-none text-[#60636B]">
                                                    <span className="line-through">${formatMoney(service.originalPrice)}</span>
                                                    {' '}before
                                                </div>
                                            )}
                                            {service.originalPrice > 0 && (
                                                <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#647C90]">
                                                    Save ${formatMoney(service.originalPrice - service.price)}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                                        <div className="rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] px-4 py-4">
                                            <div className="flex items-center gap-2 text-[#647C90]">
                                                <MessageSquare className="h-4 w-4" />
                                                <span className="text-[11px] font-bold uppercase tracking-[0.16em]">Format</span>
                                            </div>
                                            <div className="mt-3 text-[17px] font-semibold leading-tight text-[#111827]">
                                                1:1 support
                                            </div>
                                        </div>
                                        <div className="rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] px-4 py-4">
                                            <div className="flex items-center gap-2 text-[#647C90]">
                                                <Calendar className="h-4 w-4" />
                                                <span className="text-[11px] font-bold uppercase tracking-[0.16em]">Length</span>
                                            </div>
                                            <div className="mt-3 text-[17px] font-semibold leading-tight text-[#111827]">
                                                {service.duration}
                                            </div>
                                        </div>
                                        <div className="rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] px-4 py-4">
                                            <div className="flex items-center gap-2 text-[#647C90]">
                                                <Star className="h-4 w-4" />
                                                <span className="text-[11px] font-bold uppercase tracking-[0.16em]">Reviews</span>
                                            </div>
                                            <div className="mt-3 text-[17px] font-semibold leading-tight text-[#111827]">
                                                {service.rating.toFixed(1)} ({service.reviews})
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex-1">
                                        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                            What you get
                                        </div>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {service.features.map((feature) => (
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
                                            href={servicePageHref(service.name)}
                                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111827] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white"
                                        >
                                            View service
                                            <ArrowRight className="h-4 w-4" />
                                        </a>
                                        <a
                                            href={service.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#111827]"
                                        >
                                            Book now
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
