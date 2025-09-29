import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { resources, Resource } from '../../data/resources';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const STYLES = {
    section: 'bg-beige pt-24 pb-12',
    headingContainer: "px-4 mb-6 text-center",
    headingTitle: "text-center text-5xl md:text-6xl lg:text-6xl font-bold text-black mb-4 leading-tight",
    headingSpan: "text-md uppercase dark:text-gray-500 transition-all duration-1000 delay-300",
    button: "inline-block font-montserrat px-10 py-2 text-sm text-white bg-purple-gray rounded-full hover:bg-purple-gray opacity-80 hover:opacity-100",
};

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
            className={`group relative bg-white rounded-2xl shadow-lg transition-all duration-500 overflow-hidden border border-light-gray hover:opacity-90 flex flex-col h-full ${isVisible
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-16'
                }`}
            style={{ transitionDelay: `${index * 150}ms` }}
            onMouseEnter={() => setHoveredProduct(resource.id)}
            onMouseLeave={() => setHoveredProduct(null)}
        >
            {/* Most Popular Ribbon */}
            {resource.id === 1 && (
                <div className="absolute -right-8 top-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-dark-gray font-bold font-montserrat text-xs py-1 px-8 transform rotate-45 z-10 shadow-md">
                    Coming Soon
                </div>
            )}

            {/* Gradient Overlay */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            />

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
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 transition-transform duration-300 group-hover:rotate-12">
                    <IconComponent className="w-5 h-5 text-dark-gray" />
                </div>
            </div>

            {/* Product Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-merriweather text-xl font-bold text-dark-gray mb-2">{resource.title}</h3>

                <p className="font-montserrat text-sm text-brown-gray mb-4 line-clamp-3 flex-grow">{resource.description}</p>

                <div className="mb-4">
                    <div className="flex flex-wrap gap-2 min-h-[2.5rem] items-start">
                        {resource.features.slice(0, 2).map((feature, index) => (
                            <span
                                key={index}
                                className="inline-block bg-purple-gray text-white text-xs px-3 py-1 rounded-full whitespace-nowrap"
                            >
                                {feature}
                            </span>
                        ))}
                        {resource.features.length > 2 && (
                            <span className="inline-block bg-purple-gray text-white text-xs font-montserrat px-3 py-1 rounded-full whitespace-nowrap">
                                +{resource.features.length - 2} more
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-light-gray" />
                    <span className="font-montserrat text-sm text-brown-gray">{resource.duration}</span>
                </div>

                <div className="space-y-2 mt-auto">
                    <button
                        onClick={(e) => handleLearnMoreClick(resource, e)}
                        className={`block w-full py-2 px-4 text-center font-montserrat font-semibold rounded-md transition-all duration-300 cursor-pointer ${hoveredProduct === resource.id
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
};


const ResourcesPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div>
            <Navigation />
            <section id="resources" className={STYLES.section}>
                <div className="container mx-auto px-4">
                    <div className={STYLES.headingContainer}>
                        <h2 className={`${STYLES.headingTitle} transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'}`}>Resources</h2>
                        <span className={`${STYLES.headingSpan} ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Free tools and guides to help you pivot</span>
                    </div>
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                        {resources.map((resource, index) => (
                            <ResourceCard key={index} resource={resource} isVisible={isVisible} index={index} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ResourcesPage;