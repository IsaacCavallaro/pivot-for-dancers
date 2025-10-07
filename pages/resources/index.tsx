import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { resources, Resource } from '../../data/resources';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

type ResourceCardProps = {
    resource: Resource;
    isVisible: boolean;
    index: number;
};

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, isVisible, index }) => {
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
    const IconComponent = resource.icon;
    const router = useRouter();

    const handleLearnMoreClick = (resource: Resource, event: React.MouseEvent) => {
        event.preventDefault();
        router.push(`/resources/${resource.title.toLowerCase().replace(/ /g, '-')}`);
    };

    return (
        <div
            className={`group relative bg-white rounded-3xl shadow-2xl transition-all duration-500 overflow-hidden border-2 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full ${isVisible
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-16'
                }`}
            style={{
                transitionDelay: `${index * 150}ms`,
                borderColor: "#647C90"
            }}
            onMouseEnter={() => setHoveredProduct(resource.id)}
            onMouseLeave={() => setHoveredProduct(null)}
        >
            {/* Most Popular Ribbon */}
            {resource.id === 1 && (
                <div className="absolute -right-10 top-9 bg-gradient-to-r from-yellow-400 to-yellow-500 text-dark-gray font-bold text-xs md:text-sm py-1 px-10 transform rotate-45 z-40 shadow-lg">
                    Coming Soon
                </div>
            )}

            {/* Product Image */}
            <div className="relative overflow-hidden aspect-[4/3] bg-white flex items-center justify-center flex-shrink-0">
                <Image
                    src={resource.image}
                    alt={resource.title}
                    width={400}
                    height={300}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    priority={index < 2}
                />
                <div className="absolute top-4 left-4 backdrop-blur-sm rounded-full p-3 transition-transform duration-300 group-hover:rotate-12 shadow-lg" style={{ backgroundColor: "#647C90" }}>
                    <IconComponent className="w-5 h-5 text-white" />
                </div>
            </div>

            {/* Product Content */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black mb-2" style={{ color: "#647C90" }}>
                    {resource.title}
                </h3>

                <p className="text-sm font-medium mb-4 line-clamp-2 md:line-clamp-3 flex-grow" style={{ color: "#647C90" }}>
                    {resource.description}
                </p>

                <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                        {resource.features.slice(0, 2).map((feature, idx) => (
                            <span
                                key={idx}
                                className="inline-block text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                                style={{ backgroundColor: "#928490" }}
                            >
                                {feature}
                            </span>
                        ))}
                        {resource.features.length > 2 && (
                            <span className="inline-block text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg" style={{ backgroundColor: "#928490" }}>
                                +{resource.features.length - 2} more
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4" style={{ color: "#647C90" }} />
                    <span className="text-sm font-medium" style={{ color: "#647C90" }}>
                        {resource.duration}
                    </span>
                </div>

                <div className="space-y-3 mt-auto">
                    <button
                        onClick={(e) => handleLearnMoreClick(resource, e)}
                        className={`block w-full py-4 px-6 text-center font-bold rounded-2xl transition-all duration-500 cursor-pointer text-white shadow-xl hover:shadow-2xl tracking-wider ${hoveredProduct === resource.id
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
};


const ResourcesPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div>
            <Navigation />
            <section id="resources" className="relative overflow-hidden">
                <div className="py-20 relative overflow-hidden" style={{ backgroundColor: "#E2DED0" }}>
                    <div className="absolute inset-0 bg-[radial-gradient(#d5d1c5_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

                    {/* Centered RESOURCES Badge */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center justify-center px-6 py-3 rounded-full mb-6 border backdrop-blur-xl shadow-xl"
                            style={{ borderColor: 'rgba(100, 124, 144, 0.3)', backgroundColor: 'rgba(100, 124, 144, 0.7)' }}>
                            <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#E2DED0' }}></div>
                            <h1 className="text-sm font-bold tracking-widest text-white">RESOURCES</h1>
                            <div className="w-2 h-2 rounded-full ml-3" style={{ backgroundColor: '#E2DED0' }}></div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                            {resources.map((resource, index) => (
                                <ResourceCard key={index} resource={resource} isVisible={isVisible} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ResourcesPage;