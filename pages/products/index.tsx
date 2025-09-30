import { useState, useRef, useEffect } from "react";
import { Star, Clock, BookOpen, Users, Video, Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { products, Product } from "../../data/products";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const productsTitle = "Products";
const productsSubtitle = "Expert Guidance for Your Career Pivot";

const ProductsSection: React.FC = () => {
    const router = useRouter();
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
        title: false,
        products: false,
    });

    const titleRef = useRef<HTMLDivElement>(null);
    const productsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.target === titleRef.current) {
                    setIsVisible(prev => ({ ...prev, title: entry.isIntersecting }));
                } else if (entry.target === productsRef.current) {
                    setIsVisible(prev => ({ ...prev, products: entry.isIntersecting }));
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.1,
            rootMargin: '0px'
        });

        if (titleRef.current) observer.observe(titleRef.current);
        if (productsRef.current) observer.observe(productsRef.current);

        return () => observer.disconnect();
    }, []);

    const handleProductClick = (url: string, event: React.MouseEvent) => {
        event.preventDefault();
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleLearnMoreClick = (product: Product, event: React.MouseEvent) => {
        event.preventDefault();
        router.push(`/products/${product.name.toLowerCase().replace(/ /g, '-')}`);
    };

    return (
        <section id="products" className="bg-beige min-h-screen py-12 md:py-16 px-4 sm:px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div
                    ref={titleRef}
                    className="text-center md:py-4"
                >
                    <h1
                        className={`text-bold text-center text-5xl md:text-6xl lg:text-6xl font-bold text-black mt-8 mb-2 leading-tight transition-all duration-1000 ${isVisible.title
                            ? 'opacity-100 transform translate-y-0'
                            : 'opacity-0 transform -translate-y-10'
                            }`}
                    >
                        {productsTitle}
                    </h1>
                    <span
                        className={`text-md text-center uppercase dark:text-gray-500 transition-all duration-1000 delay-300 ${isVisible.title
                            ? 'opacity-100 transform translate-y-0'
                            : 'opacity-0 transform translate-y-10'
                            }`}
                    >
                        {productsSubtitle}
                    </span>
                </div>

                <div
                    ref={productsRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-5"
                >
                    {products.map((product, index) => {
                        if (!product) return null;
                        const IconComponent = product.icon;
                        return (
                            <div
                                key={product.id}
                                className={`group relative bg-white rounded-2xl shadow-lg transition-all duration-500 overflow-hidden border border-light-gray hover:opacity-90 ${isVisible.products
                                    ? 'opacity-100 transform translate-y-0'
                                    : 'opacity-0 transform translate-y-16'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                                onMouseEnter={() => setHoveredProduct(product.id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                {product.id === 4 && (
                                    <div className="absolute -right-8 top-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-dark-gray font-bold font-montserrat text-xs py-1 px-8 transform rotate-45 z-10 shadow-md">
                                        Most Popular
                                    </div>
                                )}

                                <div className={`absolute inset-0 bg-gradient-to-br from-purple-100 to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="relative overflow-hidden aspect-[5/3] md:aspect-[16/9] lg:aspect-[2/1] bg-white flex items-center justify-center">
                                    <Image
                                        src={product.img}
                                        alt={product.name}
                                        width={400}
                                        height={300}
                                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                        priority={index < 2}
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 transition-transform duration-300 group-hover:rotate-12">
                                        <IconComponent className="w-5 h-5 text-dark-gray" />
                                    </div>
                                </div>

                                <div className="p-4 md:p-5">
                                    <div className="flex items-center gap-2 mb-2 md:mb-3">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 transition-all duration-300 ${i < Math.floor(product.rating)
                                                        ? "text-yellow-400 fill-current"
                                                        : "text-gray-300"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="font-montserrat text-sm text-brown-gray">
                                            {product.rating} ({product.reviews})
                                        </span>
                                    </div>

                                    <h3 className="font-merriweather text-xl font-bold text-dark-gray mb-1">{product.name}</h3>
                                    <p className="font-montserrat text-sm text-purple-gray mb-2 md:mb-3">{product.subtitle}</p>

                                    <p className="font-montserrat text-sm text-brown-gray mb-3 md:mb-4 line-clamp-2 md:line-clamp-3">{product.description}</p>

                                    <div className="mb-3 md:mb-4">
                                        <div className="flex flex-wrap gap-1">
                                            {product.features.slice(0, 2).map((feature, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block bg-purple-gray text-white text-xs px-2 py-1 rounded-full"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                            {product.features.length > 2 && (
                                                <span className="inline-block bg-purple-gray text-white text-xs font-montserrat px-2 py-1 rounded-full">
                                                    +{product.features.length - 2} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                                        <Clock className="w-4 h-4 text-light-gray" />
                                        <span className="font-montserrat text-sm text-brown-gray">{product.duration}</span>
                                    </div>

                                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                                        <span className="font-merriweather text-2xl font-bold text-dark-gray">
                                            ${product.price}
                                        </span>
                                        {product.originalPrice > 0 && (
                                            <>
                                                <span className="font-montserrat text-sm text-brown-gray line-through">
                                                    ${product.originalPrice}
                                                </span>
                                                <div className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-montserrat">
                                                    Save ${product.originalPrice - product.price}
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <button
                                            onClick={(e) => handleProductClick(product.url, e)}
                                            className={`block w-full py-2 px-4 text-center font-montserrat font-semibold rounded-md transition-all duration-300 cursor-pointer ${hoveredProduct === product.id
                                                ? "bg-light-gray hover:bg-purple-gray text-white transform scale-105"
                                                : "bg-light-gray hover:bg-purple-gray text-white"
                                                }`}
                                        >
                                            BOOK NOW
                                        </button>
                                        <button
                                            onClick={(e) => handleLearnMoreClick(product, e)}
                                            className={`block w-full py-2 px-4 text-center font-montserrat font-semibold rounded-md transition-all duration-300 cursor-pointer ${hoveredProduct === product.id
                                                ? "bg-light-gray hover:bg-purple-gray text-white transform scale-105"
                                                : "bg-light-gray hover:bg-purple-gray text-white"
                                                }`}
                                        >
                                            LEARN MORE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default function productsPage() {
    return (
        <div>
            <Navigation />
            <ProductsSection />
            <Footer />
        </div>
    );
}