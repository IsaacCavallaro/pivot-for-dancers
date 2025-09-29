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
                <div className="bg-purple-gray rounded-2xl shadow-2xl overflow-hidden relative">
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
                        <a
                            href="https://g.page/r/CfHdX47gLCCXEAI/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 text-base font-semibold text-white bg-light-gray rounded-full hover:bg-gray-600 transition-all duration-300"
                        >
                            Add Review
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;