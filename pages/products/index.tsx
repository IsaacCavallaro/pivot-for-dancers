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
        <section id="products" className="relative overflow-hidden" style={{ backgroundColor: "#647C90" }}>
            {/* Products Grid Section */}
            <div className="py-20 relative overflow-hidden" style={{ backgroundColor: "#E2DED0" }}>
                <div className="absolute inset-0 bg-[radial-gradient(#d5d1c5_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

                {/* Centered PRODUCTS Badge */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center justify-center px-6 py-3 rounded-full border backdrop-blur-xl shadow-xl" style={{ borderColor: 'rgba(255, 255, 255, 0.3)', backgroundColor: '#647C90' }}>
                        <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#E2DED0' }}></div>
                        <span className="text-sm font-bold text-white tracking-widest">PRODUCTS</span>
                        <div className="w-2 h-2 rounded-full ml-3 animate-pulse delay-300" style={{ backgroundColor: '#E2DED0' }}></div>
                    </div>
                </div>

                <div
                    ref={productsRef}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {products.map((product, index) => {
                            if (!product) return null;
                            const IconComponent = product.icon;
                            return (
                                <div
                                    key={product.id}
                                    className={`group relative bg-white rounded-3xl shadow-2xl transition-all duration-500 overflow-hidden border-2 hover:shadow-xl hover:-translate-y-2 ${isVisible.products
                                        ? 'opacity-100 transform translate-y-0'
                                        : 'opacity-0 transform translate-y-16'
                                        }`}
                                    style={{
                                        transitionDelay: `${index * 150}ms`,
                                        borderColor: "#647C90"
                                    }}
                                    onMouseEnter={() => setHoveredProduct(product.id)}
                                    onMouseLeave={() => setHoveredProduct(null)}
                                >
                                    {product.id === 3 && (
                                        <div className="absolute -right-10 top-9 bg-gradient-to-r from-yellow-400 to-yellow-500 text-dark-gray font-bold text-xs md:text-sm py-1 px-10 transform rotate-45 z-40 shadow-lg">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="relative overflow-hidden aspect-[5/3] md:aspect-[16/9] lg:aspect-[2/1] bg-white flex items-center justify-center">
                                        <Image
                                            src={product.img}
                                            alt={product.name}
                                            width={400}
                                            height={300}
                                            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                            priority={index < 2}
                                        />
                                        <div
                                            className="absolute top-4 left-4 backdrop-blur-sm rounded-full p-3 transition-transform duration-300 group-hover:rotate-12 shadow-lg"
                                            style={{ backgroundColor: "#647C90" }}
                                        >
                                            <IconComponent className="w-5 h-5 text-white" />
                                        </div>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 transition-all duration-300 ${i < Math.floor(product.rating)
                                                            ? "fill-current"
                                                            : ""
                                                            }`}
                                                        style={{ color: i < Math.floor(product.rating) ? "#928490" : "#d1d5db" }}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm font-medium" style={{ color: "#647C90" }}>
                                                {product.rating} ({product.reviews})
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-black mb-2" style={{ color: "#647C90" }}>
                                            {product.name}
                                        </h3>
                                        <p className="text-sm font-bold mb-3" style={{ color: "#928490" }}>
                                            {product.subtitle}
                                        </p>

                                        <p className="text-sm font-medium mb-4 line-clamp-2 md:line-clamp-3" style={{ color: "#647C90" }}>
                                            {product.description}
                                        </p>

                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-2">
                                                {product.features.slice(0, 2).map((feature, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="inline-block text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                                                        style={{ backgroundColor: "#928490" }}
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                                {product.features.length > 2 && (
                                                    <span className="inline-block text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg" style={{ backgroundColor: "#928490" }}>
                                                        +{product.features.length - 2} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 mb-4">
                                            <Clock className="w-4 h-4" style={{ color: "#647C90" }} />
                                            <span className="text-sm font-medium" style={{ color: "#647C90" }}>
                                                {product.duration}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="text-3xl font-black" style={{ color: "#647C90" }}>
                                                ${product.price}
                                            </span>
                                            {product.originalPrice > 0 && (
                                                <>
                                                    <span className="text-sm line-through font-medium" style={{ color: "#928490" }}>
                                                        ${product.originalPrice}
                                                    </span>
                                                    <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                                                        Save ${product.originalPrice - product.price}
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        <div className="space-y-3">
                                            <button
                                                onClick={(e) => handleProductClick(product.url, e)}
                                                className={`block w-full py-4 px-6 text-center font-bold rounded-2xl transition-all duration-500 cursor-pointer text-white shadow-xl hover:shadow-2xl tracking-wider ${hoveredProduct === product.id
                                                    ? "transform scale-105"
                                                    : ""
                                                    }`}
                                                style={{ backgroundColor: "#647C90" }}
                                            >
                                                BUY NOW
                                            </button>
                                            <button
                                                onClick={(e) => handleLearnMoreClick(product, e)}
                                                className={`block w-full py-4 px-6 text-center font-bold rounded-2xl transition-all duration-500 cursor-pointer text-white shadow-xl hover:shadow-2xl tracking-wider ${hoveredProduct === product.id
                                                    ? "transform scale-105"
                                                    : ""
                                                    }`}
                                                style={{ backgroundColor: "#928490" }}
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