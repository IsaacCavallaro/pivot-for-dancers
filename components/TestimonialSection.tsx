
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faMasksTheater, faBriefcase, faDollarSign, faHeartBroken, faSadCry, faMagnifyingGlass, faDumbbell, faSeedling, faGraduationCap, faPause, faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const TestimonialsSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const testimonials = [
        {
            content: `"Finally a platform that says what we\'re all thinking! Offering a supportive space, Founder, Kaylee, is a kind and empathetic mentor that wants dancers to understand they deserve to have joy in all aspects of life!"`,
            author: "Christie Bellish",
            role: "Former Dancer",
            imageSrc: "/assets/christie-bellish.jpeg",
        },
        {
            content: `"A great community for dancers going through the difficult transition out of a full-time career in the performing arts, into a new career. Support, guidance, and self-exploration exercises—all in one place."`,
            author: "Kelsey Glennon",
            role: "Former Dancer & Travel Journalist",
            imageSrc: "/assets/kelsey-glennon.jpeg",
        },
        {
            content: `"Pivot for Dancers came to me at the perfect time when I was ending my performing career due to injury and burnout and helped me realize that I was not alone."`,
            author: "Mallory Gladman",
            role: "Former Dancer & Event Business Owner",
            imageSrc: "/assets/mallory-gladman.jpg",
        },
    ];

    const blocks = [
        {
            img: "/assets/ballet-female.jpeg",
            title: "Career Changes",
            description: "Pivot for Dancers offers practical resources to support professional dancers in making a career change.",
            icons: [
                { icon: faBook, text: "Community" },
                { icon: faMasksTheater, text: "Resources" },
                { icon: faBriefcase, text: "Planning" },
            ],
        },
        {
            img: "/assets/lyrical-female.jpeg",
            title: "Taboo Topics",
            description: "We\'re talking about the stuff no one tells you about stepping away from your professional dance career.",
            icons: [
                { icon: faDollarSign, text: "Finance" },
                { icon: faHeartBroken, text: "Grief" },
                { icon: faSadCry, text: "Shame" },
            ],
        },
        {
            img: "/assets/jazz-female.jpeg",
            title: "Meaningful Work",
            description: "Built by dancers who\'ve done it, Pivot for Dancers has everything you need to find meaningful work off the stage.",
            icons: [
                { icon: faMagnifyingGlass, text: "Curiosity" },
                { icon: faDumbbell, text: "Empowerment" },
                { icon: faSeedling, text: "Resilience" },
            ],
        },
        {
            img: "/assets/contemporary-female.jpeg",
            title: "Dancer-Focused",
            description: "We take a dancer-focused approach to career advice to help shift your mindset on what it means to pivot.",
            icons: [
                { icon: faGraduationCap, text: "Student" },
                { icon: faMasksTheater, text: "Professional" },
                { icon: faPause, text: "Retired" },
            ],
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    function NextArrow(props: any) {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 -translate-y-1/2 right-4 z-10 cursor-pointer rounded-full p-2"
                style={{ backgroundColor: '#928490' }}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faChevronRight} className="text-white text-2xl" />
            </div>
        );
    }

    function PrevArrow(props: any) {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 -translate-y-1/2 left-4 z-10 cursor-pointer rounded-full p-2"
                style={{ backgroundColor: '#928490' }}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faChevronLeft} className="text-white text-2xl" />
            </div>
        );
    }

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className="bg-beige py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden relative">
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="px-6 py-12 sm:p-12 lg:p-16">
                                <div className="text-center">
                                    <div className="flex justify-center items-center mb-6">
                                        <Image
                                            src={testimonial.imageSrc}
                                            alt={testimonial.author}
                                            width={80}
                                            height={80}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <p className="font-medium text-lg text-white leading-relaxed max-w-2xl mx-auto">
                                        {testimonial.content}
                                    </p>
                                    <div className="mt-6">
                                        <h3 className="text-xl font-bold text-white">{testimonial.author}</h3>
                                        <p className="text-base text-gray-400">{testimonial.role}</p>
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400 text-xl mx-1" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 pb-12">
                        <button
                            onClick={openModal}
                            className="px-6 py-3 text-base font-semibold text-white rounded-full transition-all duration-300"
                            style={{ backgroundColor: '#928490' }}
                        >
                            Our Values
                        </button>
                        <a
                            href="https://g.page/r/CfHdX47gLCCXEAI/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 text-base font-semibold text-white bg-gray-700 rounded-full hover:bg-gray-600 transition-all duration-300"
                        >
                            Add Review
                        </a>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={closeModal}>
                    <div className="bg-white rounded-xl max-w-4xl w-full mx-4 overflow-hidden max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center px-6 py-4 border-b">
                            <h2 className="text-2xl font-bold text-gray-800">Our Values</h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-800 transition-colors"
                                aria-label="Close modal"
                            >
                                <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto max-h-[calc(95vh-65px)]">
                            <div className="grid gap-8 md:grid-cols-2">
                                {blocks.map((block, index) => (
                                    <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                                        <Image
                                            src={block.img}
                                            alt={block.title}
                                            width={128}
                                            height={128}
                                            className="rounded-full border-4 border-purple-200"
                                        />
                                        <div className="text-center mt-4">
                                            <h3 className="text-2xl font-bold text-gray-800">{block.title}</h3>
                                            <p className="text-gray-600 mt-2">{block.description}</p>
                                        </div>
                                        <div className="grid grid-cols-3 gap-6 mt-6">
                                            {block.icons.map((icon, iconIndex) => (
                                                <div key={iconIndex} className="flex flex-col items-center text-center">
                                                    <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
                                                        <FontAwesomeIcon icon={icon.icon} className="text-xl" />
                                                    </div>
                                                    <p className="text-sm text-gray-600 mt-2">{icon.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TestimonialsSection;
