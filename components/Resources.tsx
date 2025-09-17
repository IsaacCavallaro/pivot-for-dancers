import React from 'react';

const Resources = () => {
    const resources = [
        {
            title: 'How to Pivot E-Book',
            description: 'A comprehensive guide for dancers transitioning into new careers.',
            image: '/assets/how-to-pivot-ebook.png',
            link: '#'
        },
        {
            title: 'Happy Trails Mini-Course',
            description: 'A mini-course to help you find your path after dance.',
            image: '/assets/happy-trails-mini-course.png',
            link: '#'
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

    return (
        <div className="bg-beige py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-dark-gray mb-8">Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {resources.map((resource, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={resource.image} alt={resource.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2 text-dark-gray">{resource.title}</h3>
                                <p className="text-brown-gray text-base mb-4">{resource.description}</p>
                                <a href={resource.link} className="text-light-gray font-bold hover:underline">Learn More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resources;
