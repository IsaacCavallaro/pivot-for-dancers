import { ArrowRight, BookOpen, Clock3, Star } from 'lucide-react';
import { products } from '../../data/products';
import { SiteChrome } from '../../components/site/MarketingPrimitives';

const productPageHref = (name: string) => `/products/${name.toLowerCase().replace(/\s+/g, '-')}`;

export default function ProductsPage() {
    return (
        <SiteChrome>
            <section className="px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-12 lg:pt-32">
                <div className="mx-auto max-w-[1280px]">
                    <div className="max-w-3xl">
                        <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#7A7D86]">
                            DIGITAL GUIDES
                        </div>
                        <h1 className="mt-5 text-[48px] font-bold leading-[0.95] tracking-[-0.04em] text-[#111827] md:text-[64px] lg:text-[76px]">
                            Products
                        </h1>
                        <p className="mt-5 max-w-2xl text-[18px] leading-8 text-[#60636B]">
                            Dancer-focused digital products to guide you through your career transition.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#F7F2EA] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-[1280px]">
                    <div id="catalogue" className="grid gap-6 lg:grid-cols-2">
                    {products.map((product) => {
                        const detailHref = productPageHref(product.name);
                        const isCourse = product.subtitle === 'DIGITAL COURSE';

                        return (
                            <div
                                key={product.id}
                                className="flex h-full rounded-[34px] border border-[#E8E0D4] bg-[#F5F6F2] p-4 shadow-[0_30px_70px_rgba(45,49,56,0.08)]"
                            >
                                <div className="flex h-full w-full flex-col rounded-[28px] border border-black/8 bg-white p-6">
                                    <div className="mb-6 flex min-h-[280px] items-center justify-center rounded-[24px] border border-black/6 bg-white p-6">
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className="h-[220px] w-full object-contain"
                                        />
                                    </div>

                                <div className="flex flex-1 flex-col">
                                    <div className="min-h-[170px]">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="rounded-full border border-[#DCE4EB] bg-[#EEF2F5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#647C90]">
                                                {product.subtitle}
                                            </span>
                                        </div>
                                        <h2 className="mt-4 text-[34px] font-bold leading-[0.98] tracking-[-0.03em] text-[#111827]">
                                            {product.name}
                                        </h2>
                                        <p className="mt-4 max-w-[26rem] text-[15px] leading-8 text-[#60636B]">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="mt-5 rounded-[24px] border border-[#E8E0D4] bg-[#FCFAF6] px-5 py-4">
                                        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                            Investment
                                        </div>
                                        <div className="mt-2 text-[28px] font-bold leading-none tracking-[-0.03em] text-[#111827]">
                                            ${product.price}
                                        </div>
                                        {product.originalPrice > 0 && (
                                            <div className="mt-3 text-[13px] leading-6 text-[#60636B]">
                                                <span className="line-through">${product.originalPrice}</span>
                                                {' '}before
                                            </div>
                                        )}
                                        {product.originalPrice > 0 && (
                                            <div className="mt-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#647C90]">
                                                Save ${product.originalPrice - product.price}
                                            </div>
                                        )}
                                    </div>

                                        <div className="mt-6 grid gap-4 sm:grid-cols-3">
                                            <div className="rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] px-4 py-4">
                                                <div className="flex items-center gap-2 text-[#647C90]">
                                                    <BookOpen className="h-4 w-4" />
                                                    <span className="text-[11px] font-bold uppercase tracking-[0.16em]">Format</span>
                                                </div>
                                                <div className="mt-3 text-[17px] font-semibold leading-tight text-[#111827]">
                                                    {product.category}
                                                </div>
                                            </div>
                                            <div className="rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] px-4 py-4">
                                                <div className="flex items-center gap-2 text-[#647C90]">
                                                    <Clock3 className="h-4 w-4" />
                                                    <span className="text-[11px] font-bold uppercase tracking-[0.16em]">Pace</span>
                                                </div>
                                                <div className="mt-3 text-[17px] font-semibold leading-tight text-[#111827]">
                                                    {product.duration}
                                                </div>
                                            </div>
                                            <div className="rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] px-4 py-4">
                                                <div className="flex items-center gap-2 text-[#647C90]">
                                                    <Star className="h-4 w-4" />
                                                    <span className="text-[11px] font-bold uppercase tracking-[0.16em]">Reviews</span>
                                                </div>
                                                <div className="mt-3 text-[17px] font-semibold leading-tight text-[#111827]">
                                                    {product.rating.toFixed(1)} ({product.reviews})
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex-1">
                                            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                                What you get
                                            </div>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {product.features.map((feature) => (
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
                                                href={detailHref}
                                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111827] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white"
                                            >
                                                View product
                                                <ArrowRight className="h-4 w-4" />
                                            </a>
                                            <a
                                                href={product.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#111827]"
                                            >
                                                {isCourse ? 'Buy course' : 'Buy ebook'}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    </div>
                </div>
            </section>
        </SiteChrome>
    );
}
