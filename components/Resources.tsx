import React, { useState, useEffect } from 'react';

const STYLES = {
    section: 'bg-beige pt-24 pb-12',
    headingContainer: "px-4 mb-6 text-center",
    headingTitle: "font-merriweather text-center text-5xl md:text-6xl lg:text-6xl font-bold text-black mb-6 leading-tight",
    headingSpan: "text-md uppercase dark:text-gray-500 transition-all duration-1000 delay-300",
    button: "inline-block font-montserrat px-10 py-2 text-sm text-white bg-purple-gray rounded-full hover:bg-purple-gray opacity-80 hover:opacity-100",
};

const resources = [
    {
        title: 'Discover Your Pivot Personality',
        description: 'A comprehensive guide for dancers transitioning into new careers.',
        image: '/assets/how-to-pivot-ebook.png',
        link: '/pivot-quiz'
    },
    {
        title: 'Expectations vs Reality',
        description: 'A realistic look at career transitions for dancers.',
        image: '/assets/happy-trails-mini-course.png',
        link: '/resources/data'
    },
    {
        title: 'Pivot Mentorship',
        description: 'One-on-one mentorship for dancers in career transition.',
        image: '/assets/pivot-mentorship.png',
        link: '#'
    },
    {
        title: 'Pivot Panels',
        description: 'Panel discussions with former dancers who have successfully pivoted.',
        image: '/assets/pivot-panels.png',
        link: '#'
    }
];

type ResourceCardProps = {
    title: string;
    description: string;
    image: string;
    link: string;
};

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, image, link }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
                <h3 className="font-bold text-xl mb-2 text-dark-gray">{title}</h3>
                <p className="text-brown-gray text-base mb-4">{description}</p>
                <a href={link} className={STYLES.button}>Learn More</a>
            </div>
        </div>
    );
};


const Resources = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="resources" className={STYLES.section}>
            <div className="container mx-auto px-4">
                <div className={STYLES.headingContainer}>
                    <h2 className={`${STYLES.headingTitle} transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'}`}>Resources</h2>
                    <span className={`${STYLES.headingSpan} ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Tools and guides to help you pivot</span>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                    {resources.map((resource, index) => (
                        <ResourceCard key={index} {...resource} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resources;
