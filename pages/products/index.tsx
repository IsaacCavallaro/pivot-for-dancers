import { BookOpen, Clock, Target } from 'lucide-react';
import { products } from '../../data/products';
import {
    InfoGrid,
    PageHero,
    SectionBlock,
    ShowcaseGrid,
    SiteChrome,
} from '../../components/site/MarketingPrimitives';

export default function ProductsPage() {
    return (
        <SiteChrome>
            <PageHero
                eyebrow="PRODUCTS"
                title="Self-paced support for the dancer pivot"
                description="Digital guides and courses for dancers who want more depth, more structure, and a clear way to keep moving even when they are figuring it out alone."
                primaryCta={{ label: 'Browse the products', href: '#catalogue', dark: true }}
                secondaryCta={{ label: 'Book support instead', href: '/services' }}
                media={
                    <div className="rounded-[40px] border border-[#E6DED2] bg-white p-5 shadow-[0_34px_80px_rgba(45,49,56,0.08)]">
                        <div className="grid gap-5 md:grid-cols-2">
                            {products.map((product) => (
                                <div key={product.id} className="rounded-[28px] border border-[#E8E0D4] bg-[#FCFAF6] p-5">
                                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#928490]">
                                        {product.subtitle}
                                    </div>
                                    <div className="mt-3 text-2xl font-bold text-[#111827]">{product.name}</div>
                                    <p className="mt-3 text-sm leading-7 text-[#5E6167]">{product.description}</p>
                                    <div className="mt-5 text-lg font-semibold text-[#111827]">${product.price}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            />

            <SectionBlock
                label="WHY PRODUCTS"
                title="Built for dancers who want a framework they can return to"
                description="These products should feel like a premium next step after the free app: practical, dancer-specific, and strong enough to stand on their own."
                background="#FFFFFF"
            >
                <InfoGrid
                    cards={[
                        {
                            title: 'Immediate clarity',
                            description: 'Get out of open-ended scrolling and into a more structured next step.',
                            icon: Target,
                        },
                        {
                            title: 'Self-paced depth',
                            description: 'Work through the material on your own schedule without losing the sense of guidance.',
                            icon: BookOpen,
                        },
                        {
                            title: 'Actionable support',
                            description: 'Products should move people from reflection into real career decisions and preparation.',
                            icon: Clock,
                        },
                    ]}
                />
            </SectionBlock>

            <SectionBlock
                label="CATALOGUE"
                title="Choose the level of structure you need"
                description="The presentation should feel more like a premium product company than a simple listing page."
                background="#F7F2EA"
            >
                <div id="catalogue">
                    <ShowcaseGrid
                        cards={products.map((product) => ({
                            title: product.name,
                            description: product.description,
                            href: `/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`,
                            ctaLabel: `Learn about ${product.name}`,
                            image: product.img,
                            tone: product.subtitle === 'DIGITAL COURSE' ? 'dark' : 'light',
                        }))}
                    />
                </div>
            </SectionBlock>
        </SiteChrome>
    );
}
