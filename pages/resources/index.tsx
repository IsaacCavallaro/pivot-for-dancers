import { ArrowRight, BookOpen, Clock3, Sparkles } from 'lucide-react';
import { resources } from '../../data/resources';
import { SiteChrome } from '../../components/site/MarketingPrimitives';
import { CatalogueCard, CataloguePageSection } from '../../components/site/CataloguePrimitives';

export default function ResourcesPage() {
    return (
        <SiteChrome>
            <CataloguePageSection
                eyebrow="FREE TOOLS"
                title="Resources"
                description="Countless hours of free, accessible content to help you feel less alone on your pivot journey."
                gridId="resources"
            >
                {resources.map((resource) => (
                    <CatalogueCard
                        key={resource.id}
                        image={{ src: resource.image, alt: resource.title }}
                        badge={resource.duration}
                        title={resource.title}
                        description={resource.description}
                        summary={(
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
                        )}
                        metrics={[
                            { icon: BookOpen, label: 'Format', value: resource.type },
                            { icon: Clock3, label: 'Category', value: resource.duration },
                            { icon: Sparkles, label: 'Access', value: 'Open now' },
                        ]}
                        features={resource.features}
                        primaryAction={{
                            href: resource.url,
                            label: (
                                <>
                                    Open resource
                                    <ArrowRight className="h-4 w-4" />
                                </>
                            ),
                        }}
                        featuresMinHeightClass="min-h-[92px] content-start"
                    />
                ))}
            </CataloguePageSection>
        </SiteChrome>
    );
}
