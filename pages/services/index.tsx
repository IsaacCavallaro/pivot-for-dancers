import { ArrowRight, Calendar, MessageSquare, Star } from 'lucide-react';
import { services } from '../../data/services';
import { SiteChrome } from '../../components/site/MarketingPrimitives';
import { CatalogueCard, CataloguePageSection, catalogueSlug, formatMoney } from '../../components/site/CataloguePrimitives';

export default function ServicesPage() {
    return (
        <SiteChrome>
            <CataloguePageSection
                eyebrow="ONE-TO-ONE SUPPORT"
                title="Services"
                description="Bespoke career change services tailored to your unique experience and goals."
                gridId="catalogue"
            >
                {services.map((service) => (
                    <CatalogueCard
                        key={service.id}
                        image={{ src: service.img, alt: service.name }}
                        badge={service.subtitle}
                        title={service.name}
                        description={service.description}
                        summary={(
                            <div className="mt-5 rounded-[24px] border border-[#E8E0D4] bg-[#FCFAF6] px-5 py-4">
                                <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                    Investment
                                </div>
                                <div className="mt-2 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 lg:justify-start">
                                    <div className="text-[28px] font-bold leading-none tracking-[-0.03em] text-[#111827]">
                                        ${formatMoney(service.price)}
                                    </div>
                                    {service.originalPrice > 0 && (
                                        <>
                                            <div className="text-[13px] leading-6 text-[#60636B]">
                                                <span className="line-through">${formatMoney(service.originalPrice)}</span>
                                                {' '}before
                                            </div>
                                            <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#647C90]">
                                                Save ${formatMoney(service.originalPrice - service.price)}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                        metrics={[
                            { icon: MessageSquare, label: 'Format', value: '1:1 support' },
                            { icon: Calendar, label: 'Length', value: service.duration },
                            { icon: Star, label: 'Reviews', value: `${service.rating.toFixed(1)} (${service.reviews})` },
                        ]}
                        features={service.features.slice(0, 3)}
                        primaryAction={{
                            href: catalogueSlug('services', service.name),
                            label: (
                                <>
                                    View service
                                    <ArrowRight className="h-4 w-4" />
                                </>
                            ),
                        }}
                        secondaryAction={{
                            href: service.url,
                            label: 'Book now',
                            external: true,
                        }}
                        responsiveCenter
                    />
                ))}
            </CataloguePageSection>
        </SiteChrome>
    );
}
