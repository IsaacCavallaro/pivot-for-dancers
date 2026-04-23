import { ArrowRight, BookOpen, Clock3, Star } from 'lucide-react';
import { products } from '../../data/products';
import { SiteChrome } from '../../components/site/MarketingPrimitives';
import { CatalogueCard, CataloguePageSection, catalogueSlug } from '../../components/site/CataloguePrimitives';

export default function ProductsPage() {
    return (
        <SiteChrome>
            <CataloguePageSection
                eyebrow="DIGITAL GUIDES"
                title="Products"
                description="Dancer-focused digital products to guide you through your career transition."
                gridId="catalogue"
            >
                {products.map((product) => {
                    const detailHref = catalogueSlug('products', product.name);
                    const isCourse = product.subtitle === 'DIGITAL COURSE';

                    return (
                        <CatalogueCard
                            key={product.id}
                            image={{ src: product.img, alt: product.name }}
                            badge={product.subtitle}
                            title={product.name}
                            description={product.description}
                            summary={(
                                <div className="mt-5 rounded-[24px] border border-[#E8E0D4] bg-[#FCFAF6] px-5 py-4">
                                    <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                        Investment
                                    </div>
                                    <div className="mt-2 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 lg:justify-start">
                                        <div className="text-[28px] font-bold leading-none tracking-[-0.03em] text-[#111827]">
                                            ${product.price}
                                        </div>
                                        {product.originalPrice > 0 && (
                                            <>
                                                <div className="text-[13px] leading-6 text-[#60636B]">
                                                    <span className="line-through">${product.originalPrice}</span>
                                                    {' '}before
                                                </div>
                                                <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#647C90]">
                                                    Save ${product.originalPrice - product.price}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                            metrics={[
                                { icon: BookOpen, label: 'Format', value: product.category },
                                { icon: Clock3, label: 'Pace', value: product.duration },
                                { icon: Star, label: 'Reviews', value: `${product.rating.toFixed(1)} (${product.reviews})` },
                            ]}
                            features={product.features.slice(0, 3)}
                            primaryAction={{
                                href: detailHref,
                                label: (
                                    <>
                                        View product
                                        <ArrowRight className="h-4 w-4" />
                                    </>
                                ),
                            }}
                            secondaryAction={{
                                href: product.url,
                                label: isCourse ? 'Buy course' : 'Buy ebook',
                                external: true,
                            }}
                            responsiveCenter
                        />
                    );
                })}
            </CataloguePageSection>
        </SiteChrome>
    );
}
