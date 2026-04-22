import Image from 'next/image';
import type { ComponentType, ReactNode } from 'react';
import DetailCardShell from './DetailCardShell';

type IconComponent = ComponentType<{ className?: string }>;

export function catalogueSlug(prefix: string, name: string) {
    return `/${prefix}/${name.toLowerCase().replace(/\s+/g, '-')}`;
}

export function formatMoney(value: number) {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
        maximumFractionDigits: 2,
    }).format(value);
}

export function CataloguePageSection({
    eyebrow,
    title,
    description,
    gridId,
    children,
}: {
    eyebrow: string;
    title: string;
    description: string;
    gridId: string;
    children: ReactNode;
}) {
    return (
        <>
            <section className="px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-12 lg:pt-32">
                <div className="mx-auto max-w-[1280px]">
                    <div className="max-w-3xl text-center lg:text-left">
                        <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#7A7D86]">
                            {eyebrow}
                        </div>
                        <h1 className="mt-5 text-[48px] font-bold leading-[0.95] tracking-[-0.04em] text-[#111827] md:text-[64px] lg:text-[76px]">
                            {title}
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-[18px] leading-8 text-[#60636B] lg:mx-0">
                            {description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#F7F2EA] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-[1280px]">
                    <div id={gridId} className="grid gap-6 lg:grid-cols-2">
                        {children}
                    </div>
                </div>
            </section>
        </>
    );
}

export function CatalogueCard({
    image,
    badge,
    title,
    description,
    summary,
    metrics,
    features,
    primaryAction,
    secondaryAction,
    responsiveCenter = false,
    featuresMinHeightClass = '',
}: {
    image: {
        src: string;
        alt: string;
    };
    badge: string;
    title: string;
    description: string;
    summary: ReactNode;
    metrics: Array<{
        icon: IconComponent;
        label: string;
        value: ReactNode;
    }>;
    features: string[];
    primaryAction: {
        href: string;
        label: ReactNode;
    };
    secondaryAction?: {
        href: string;
        label: ReactNode;
        external?: boolean;
    };
    responsiveCenter?: boolean;
    featuresMinHeightClass?: string;
}) {
    const textAlignClass = responsiveCenter ? 'text-center lg:text-left' : 'text-left';
    const justifyClass = responsiveCenter ? 'justify-center lg:justify-start' : 'justify-start';
    const descriptionClass = responsiveCenter
        ? 'mx-auto mt-4 max-w-[26rem] text-[15px] leading-8 text-[#60636B] lg:mx-0'
        : 'mt-4 max-w-[26rem] text-[15px] leading-8 text-[#60636B]';
    const actionRowClass = responsiveCenter ? 'sm:justify-center lg:justify-start' : '';

    return (
        <DetailCardShell className="flex h-full">
            <div className={`flex h-full w-full flex-col rounded-[28px] border border-black/8 bg-white p-6 ${textAlignClass}`}>
                <div className="mb-6 flex min-h-[280px] items-center justify-center rounded-[24px] border border-black/6 bg-white p-6">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={720}
                        height={440}
                        sizes="(min-width: 1024px) 28rem, 100vw"
                        className="h-[220px] w-full object-contain"
                    />
                </div>

                <div className="flex flex-1 flex-col">
                    <div className="min-h-[170px]">
                        <div className={`flex flex-wrap items-center gap-2 ${justifyClass}`}>
                            <span className="rounded-full border border-[#DCE4EB] bg-[#EEF2F5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#647C90]">
                                {badge}
                            </span>
                        </div>
                        <h2 className="mt-4 text-[34px] font-bold leading-[0.98] tracking-[-0.03em] text-[#111827]">
                            {title}
                        </h2>
                        <p className={descriptionClass}>{description}</p>
                    </div>

                    {summary}

                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {metrics.map((metric) => {
                            const Icon = metric.icon;

                            return (
                                <div
                                    key={metric.label}
                                    className={`rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] px-4 py-4 ${textAlignClass}`}
                                >
                                    <div className={`flex items-center gap-2 text-[#647C90] ${justifyClass}`}>
                                        <Icon className="h-4 w-4" />
                                        <span className="text-[11px] font-bold uppercase tracking-[0.16em]">{metric.label}</span>
                                    </div>
                                    <div className="mt-3 text-[17px] font-semibold leading-tight text-[#111827]">
                                        {metric.value}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-6 flex-1">
                        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                            What you get
                        </div>
                        <div className={`mt-3 flex flex-wrap gap-2 ${justifyClass} ${featuresMinHeightClass}`.trim()}>
                            {features.map((feature) => (
                                <span
                                    key={feature}
                                    className="rounded-full border border-[#DCE4EB] bg-[#EEF2F5] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#647C90]"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className={`mt-8 flex flex-col gap-3 sm:flex-row ${actionRowClass}`.trim()}>
                        <a
                            href={primaryAction.href}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#647C90] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#556c7f]"
                        >
                            {primaryAction.label}
                        </a>
                        {secondaryAction && (
                            <a
                                href={secondaryAction.href}
                                target={secondaryAction.external ? '_blank' : undefined}
                                rel={secondaryAction.external ? 'noopener noreferrer' : undefined}
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#111827]"
                            >
                                {secondaryAction.label}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </DetailCardShell>
    );
}
