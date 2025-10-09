import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
    duration?: number;
    threshold?: number;
    style?: React.CSSProperties;
    [key: string]: any;
}

const ScrollAnimation = ({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.6,
    threshold = 0.1,
    ...props
}: ScrollAnimationProps) => {
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
                className="
                    absolute top-1/2 -translate-y-1/2 
                    -right-2 md:right-4 lg:right-8
                    z-20 cursor-pointer 
                    rounded-full p-2 sm:p-3 md:p-4 
                    backdrop-blur-xl border shadow-xl 
                    transition-all duration-500 
                    hover:scale-110 hover:shadow-2xl
                "
                style={{
                    backgroundColor: '#fff',
                    borderColor: 'rgba(100, 124, 144, 0.3)',
                }}
                onClick={onClick}
            >
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-[#647C90] text-base sm:text-lg md:text-xl"
                />
            </div>
        );
    }

    function PrevArrow(props: any) {
        const { onClick } = props;
        return (
            <div
                className="
                    absolute top-1/2 -translate-y-1/2 
                    -left-2 md:left-4 lg:left-8
                    z-20 cursor-pointer 
                    rounded-full p-2 sm:p-3 md:p-4 
                    backdrop-blur-xl border shadow-xl 
                    transition-all duration-500 
                    hover:scale-110 hover:shadow-2xl
                "
                style={{
                    backgroundColor: '#fff',
                    borderColor: 'rgba(100, 124, 144, 0.3)',
                }}
                onClick={onClick}
            >
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="text-[#647C90] text-base sm:text-lg md:text-xl"
                />
            </div>
        );
    }

    return (
        <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#647C90' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Heading */}
                <ScrollAnimation
                    className="text-center mb-20"
                    direction="up"
                    duration={0.8}
                >
                    <ScrollAnimation delay={200} direction="scale" duration={0.6}>
                        <div className="inline-flex items-center justify-center px-6 py-3 rounded-full mb-8 border backdrop-blur-xl shadow-xl" style={{ borderColor: 'rgba(255, 255, 255, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                            <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#E2DED0' }}></div>
                            <span className="text-sm font-bold text-white tracking-widest">TESTIMONIALS</span>
                            <div className="w-2 h-2 rounded-full ml-3 animate-pulse delay-300" style={{ backgroundColor: '#E2DED0' }}></div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation delay={400} direction="up" duration={0.8}>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            What Others Are Saying
                        </h2>
                    </ScrollAnimation>

                    <ScrollAnimation delay={600} direction="up" duration={0.8}>
                        <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                            Real stories from dancers who have successfully navigated their career transitions with our support
                        </p>
                    </ScrollAnimation>
                </ScrollAnimation>

                {/* Testimonial Slider */}
                <ScrollAnimation delay={800} direction="up" duration={1.2} threshold={0.1}>
                    <div className="relative group">
                        <div
                            className="backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border transition-all duration-1000 hover:-translate-y-4 hover:shadow-3xl"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                borderColor: 'rgba(255, 255, 255, 0.2)',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                            }}
                        >
                            {/* Animated background gradient on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 rounded-3xl" style={{ backgroundColor: 'rgba(226, 222, 208, 0.1)' }}></div>

                            <Slider {...settings}>
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="px-6 py-12 sm:p-12 lg:p-16">
                                        <div className="text-center relative z-10">
                                            {/* Avatar */}
                                            <div className="flex justify-center items-center mb-8">
                                                <div className="relative">
                                                    <div
                                                        className="absolute inset-0 opacity-20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-1000"
                                                        style={{ backgroundColor: '#647C90' }}
                                                    ></div>
                                                    <Image
                                                        src={testimonial.imageSrc}
                                                        alt={testimonial.author}
                                                        width={100}
                                                        height={100}
                                                        className="relative rounded-full shadow-2xl border transition-all duration-1000 group-hover:scale-110"
                                                        style={{ borderColor: 'rgba(100, 124, 144, 0.3)' }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Quote */}
                                            <p className="font-light italic text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-8 transition-colors duration-700 group-hover:text-[#647C90]" style={{ color: '#647C90' }}>
                                                {testimonial.content}
                                            </p>

                                            {/* Author */}
                                            <div className="mb-6">
                                                <h3 className="text-2xl font-black transition-colors duration-700 group-hover:text-[#647C90]" style={{ color: '#647C90' }}>
                                                    {testimonial.author}
                                                </h3>
                                                <p className="text-lg font-medium transition-colors duration-700 group-hover:text-[#647C90]" style={{ color: '#928490' }}>
                                                    {testimonial.role}
                                                </p>
                                            </div>

                                            {/* Stars */}
                                            <div className="flex justify-center gap-1.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar key={i} className="text-yellow-400 text-xl transition-all duration-500 group-hover:scale-110" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                            {/* Bottom CTA */}
                            <div className="flex justify-center items-center pb-12">
                                <a
                                    href="https://g.page/r/CfHdX47gLCCXEAI/review"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-flex items-center justify-center font-bold py-4 px-8 rounded-2xl transition-all duration-1000 group-hover:scale-105 shadow-xl group-hover:shadow-2xl overflow-hidden group/button text-white"
                                    style={{ backgroundColor: '#647C90' }}
                                >
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover/button:opacity-30 transition-opacity duration-1000 rounded-2xl"
                                        style={{ backgroundColor: '#E2DED0' }}
                                    ></div>
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