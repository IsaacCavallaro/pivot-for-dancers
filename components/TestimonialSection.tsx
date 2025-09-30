import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

// ScrollAnimation component to match Home.tsx design
const ScrollAnimation = ({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.6,
    threshold = 0.1,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true)
                    }, delay)
                    observer.unobserve(entry.target)
                }
            },
            { threshold }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [delay, threshold])

    const getTransform = () => {
        if (!isVisible) {
            switch (direction) {
                case 'up': return 'translateY(60px)'
                case 'down': return 'translateY(-60px)'
                case 'left': return 'translateX(60px)'
                case 'right': return 'translateX(-60px)'
                case 'scale': return 'scale(0.8)'
                default: return 'translateY(60px)'
            }
        }
        return 'translateY(0) translateX(0) scale(1)'
    }

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: getTransform(),
                transition: `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
                ...props.style
            }}
            {...props}
        >
            {children}
        </div>
    )
}

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
                className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 z-20 cursor-pointer rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#928490' }}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faChevronRight} className="text-white text-xl sm:text-2xl" />
            </div>
        );
    }

    function PrevArrow(props: any) {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 z-20 cursor-pointer rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#928490' }}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faChevronLeft} className="text-white text-xl sm:text-2xl" />
            </div>
        );
    }

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#E2DED0' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Enhanced Heading with ScrollAnimation */}
                <ScrollAnimation
                    className="text-center mb-20"
                    direction="up"
                    duration={0.8}
                >
                    <ScrollAnimation
                        delay={200}
                        direction="scale"
                        duration={0.6}
                    >
                        <div className="inline-flex items-center justify-center px-6 py-3 rounded-full mb-8 border backdrop-blur-xl shadow-xl" style={{ borderColor: 'rgba(100, 124, 144, 0.3)', backgroundColor: 'rgba(100, 124, 144, 0.1)' }}>
                            <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#647C90' }}></div>
                            <span className="text-sm font-bold tracking-widest" style={{ color: '#647C90' }}>TESTIMONIALS</span>
                            <div className="w-2 h-2 rounded-full ml-3 animate-pulse delay-300" style={{ backgroundColor: '#647C90' }}></div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation
                        delay={400}
                        direction="up"
                        duration={0.8}
                    >
                        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight" style={{ color: '#647C90' }}>
                            What others are saying
                        </h2>
                    </ScrollAnimation>

                    <ScrollAnimation
                        delay={600}
                        direction="up"
                        duration={0.8}
                    >
                        <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: 'rgba(116, 108, 112, 0.9)' }}>
                            Real stories from dancers who have successfully navigated their career transitions with our support
                        </p>
                    </ScrollAnimation>
                </ScrollAnimation>

                {/* Enhanced Testimonial Slider */}
                <ScrollAnimation
                    delay={800}
                    direction="up"
                    duration={1.0}
                    threshold={0.1}
                >
                    {/* Main container with relative positioning for arrows */}
                    <div className="relative">
                        <div
                            className="backdrop-blur-xl rounded-3xl shadow-2xl overflow-visible relative border transition-all duration-1000 hover:shadow-3xl"
                            style={{
                                backgroundColor: 'rgba(100, 124, 144, 0.95)',
                                borderColor: 'rgba(255, 255, 255, 0.2)',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                            }}
                        >
                            <Slider {...settings}>
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="px-6 py-12 sm:p-12 lg:p-16">
                                        <div className="text-center">
                                            <div className="flex justify-center items-center mb-8">
                                                <div className="relative">
                                                    <div
                                                        className="absolute inset-0 opacity-20 rounded-full blur-xl"
                                                        style={{ backgroundColor: '#E2DED0' }}
                                                    ></div>
                                                    <Image
                                                        src={testimonial.imageSrc}
                                                        alt={testimonial.author}
                                                        width={100}
                                                        height={100}
                                                        className="relative rounded-full shadow-2xl border-4 border-white/20 transition-all duration-300 hover:scale-105"
                                                    />
                                                </div>
                                            </div>
                                            <p className="font-medium text-xl text-white leading-relaxed max-w-3xl mx-auto mb-8 opacity-95">
                                                {testimonial.content}
                                            </p>
                                            <div className="mb-6">
                                                <h3 className="text-2xl font-bold text-white mb-2">{testimonial.author}</h3>
                                                <p className="text-lg font-medium" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{testimonial.role}</p>
                                            </div>
                                            <div className="flex justify-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar key={i} className="text-yellow-400 text-2xl transition-all duration-300 hover:scale-110" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                            {/* Enhanced Bottom CTA */}
                            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 pb-12">
                                <a
                                    href="https://g.page/r/CfHdX47gLCCXEAI/review"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-flex items-center justify-center font-bold py-4 px-8 rounded-2xl transition-all duration-1000 hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden group/button text-white"
                                    style={{ backgroundColor: '#928490' }}
                                >
                                    {/* Button background glow effect */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover/button:opacity-30 transition-opacity duration-1000 rounded-2xl"
                                        style={{ backgroundColor: '#E2DED0' }}
                                    ></div>

                                    {/* Button content */}
                                    <span className="relative mr-3 tracking-wider">ADD REVIEW</span>
                                    <svg
                                        className="relative w-5 h-5 transition-transform duration-1000 group-hover/button:translate-x-2 group-hover/button:scale-110"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default TestimonialsSection;