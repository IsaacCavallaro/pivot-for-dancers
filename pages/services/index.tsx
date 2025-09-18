import { useState, useRef, useEffect } from "react";
import { Star, Clock } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { services, Service } from "../../data/services";

const servicesTitle = "Services";
const servicesSubtitle = "Expert Guidance for Your Career Pivot";

const ServicesSection: React.FC = () => {
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

    const handleServiceClick = (url: string, event: React.MouseEvent) => {
        event.preventDefault();
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleLearnMoreClick = (service: Service, event: React.MouseEvent) => {
        event.preventDefault();
        router.push(`/services/${service.name.toLowerCase().replace(/ /g, '-')}`);
    };

    return (
        <section id="services" className="bg-beige min-h-screen py-12 md:py-20 px-4 sm:px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div
                    ref={titleRef}
                    className="text-center md:py-4"
                >
                    <h1
                        className={`font-merriweather text-center text-5xl md:text-6xl lg:text-6xl font-bold text-black mb-6 leading-tight transition-all duration-1000 ${isVisible.title
                            ? 'opacity-100 transform translate-y-0'
                            : 'opacity-0 transform -translate-y-10'
                            }`}
                    >
                        {servicesTitle}
                    </h1>
                    <span
                        className={`text-md text-center uppercase dark:text-gray-500 transition-all duration-1000 delay-300 ${isVisible.title
                            ? 'opacity-100 transform translate-y-0'
                            : 'opacity-0 transform translate-y-10'
                            }`}
                    >
                        {servicesSubtitle}
                    </span>
                </div>

                <div
                    ref={productsRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-5"
                >
                    {services.map((service, index) => {
                        if (!service) return null;
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={service.id}
                                className={`group relative bg-white rounded-2xl shadow-lg transition-all duration-500 overflow-hidden border border-light-gray hover:opacity-90 ${isVisible.products
                                    ? 'opacity-100 transform translate-y-0'
                                    : 'opacity-0 transform translate-y-16'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                                onMouseEnter={() => setHoveredProduct(service.id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                {service.id === 4 && (
                                    <div className="absolute -right-8 top-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-dark-gray font-bold font-montserrat text-xs py-1 px-8 transform rotate-45 z-10 shadow-md">
                                        Most Popular
                                    </div>
                                )}

                                <div className={`absolute inset-0 bg-gradient-to-br from-purple-100 to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="relative overflow-hidden aspect-[4/3] bg-white flex items-center justify-center">
                                    <Image
                                        src={service.img}
                                        alt={service.name}
                                        width={400}
                                        height={300}
                                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                        priority={index < 2}
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 transition-transform duration-300 group-hover:rotate-12">
                                        <IconComponent className="w-5 h-5 text-dark-gray" />
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 transition-all duration-300 ${i < Math.floor(service.rating)
                                                        ? "text-yellow-400 fill-current"
                                                        : "text-gray-300"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="font-montserrat text-sm text-brown-gray">
                                            {service.rating} ({service.reviews})
                                        </span>
                                    </div>

                                    <h3 className="font-merriweather text-xl font-bold text-dark-gray mb-1">{service.name}</h3>
                                    <p className="font-montserrat text-sm text-purple-gray mb-3">{service.subtitle}</p>

                                    <p className="font-montserrat text-sm text-brown-gray mb-4 line-clamp-3">{service.description}</p>

                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-1">
                                            {service.features.slice(0, 2).map((feature, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block bg-purple-gray text-white text-xs px-2 py-1 rounded-full"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                            {service.features.length > 2 && (
                                                <span className="inline-block bg-purple-gray text-white text-xs font-montserrat px-2 py-1 rounded-full">
                                                    +{service.features.length - 2} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mb-4">
                                        <Clock className="w-4 h-4 text-light-gray" />
                                        <span className="font-montserrat text-sm text-brown-gray">{service.duration}</span>
                                    </div>

                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="font-merriweather text-2xl font-bold text-dark-gray">
                                            ${service.price}
                                        </span>
                                        {service.originalPrice > 0 && (
                                            <>
                                                <span className="font-montserrat text-sm text-brown-gray line-through">
                                                    ${service.originalPrice}
                                                </span>
                                                <div className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-montserrat">
                                                    Save ${service.originalPrice - service.price}
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <button
                                            onClick={(e) => handleServiceClick(service.url, e)}
                                            className={`block w-full py-2 px-4 text-center font-montserrat font-semibold rounded-md transition-all duration-300 cursor-pointer ${hoveredProduct === service.id
                                                ? "bg-light-gray hover:bg-purple-gray text-white transform scale-105"
                                                : "bg-light-gray hover:bg-purple-gray text-white"
                                                }`}
                                        >
                                            BOOK NOW
                                        </button>
                                        <button
                                            onClick={(e) => handleLearnMoreClick(service, e)}
                                            className={`block w-full py-2 px-4 text-center font-montserrat font-semibold rounded-md transition-all duration-300 cursor-pointer ${hoveredProduct === service.id
                                                ? "bg-light-gray hover:bg-purple-gray text-white transform scale-105"
                                                : "bg-light-gray hover:bg-purple-gray text-white"
                                                }`}
                                        >
                                            Learn More
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

export default function ServicesPage() {
    return (
        <div>
            <Navigation />
            <ServicesSection />
            <Footer />
        </div>
    );
}
