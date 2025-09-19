import Image from 'next/image';
import { Product, coursePaymentUrl } from '../../data/products';
import { Star, Clock, ArrowLeft, CheckCircle, Users, Globe, Award, Target, Heart, Shield, TrendingUp, Calendar, MapPin, Play, MessageCircle, User, BookOpen } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

// Mentorship program data
const product: Product = {
    id: 4,
    name: "Mentorship Program",
    subtitle: "ONE-ON-ONE SUPPORT",
    description: "Private, one-on-one support to help you find meaningful work off the stage",
    price: 150,
    originalPrice: null,
    url: coursePaymentUrl, // Replace with actual mentorship payment URL
    img: "/assets/mentorship-program.png",
    category: "Mentorship",
    duration: "3 Sessions",
    rating: 5.0,
    reviews: 0,
    features: [
        "3x One-Hour Virtual Sessions",
        "Goal-Setting Activities",
        "Guided Reflection",
        "Tailored Resources",
        "Action Plans",
        "Networking Opportunities"
    ],
    icon: Users,
    gradient: "from-beige to-brown-gray",
};

// Counter component from reference code
const Counter = ({ end, duration }: { end: number; duration: number }) => {
    const [count, setCount] = useState(0)
    const ref = useRef<number>(0)

    useEffect(() => {
        let start = 0
        const increment = end / (duration / 16)
        const step = () => {
            start += increment
            if (start < end) {
                setCount(Math.floor(start))
                ref.current = requestAnimationFrame(step)
            } else {
                setCount(end)
            }
        }
        ref.current = requestAnimationFrame(step)
        return () => cancelAnimationFrame(ref.current)
    }, [end, duration])

    return <span>{count.toLocaleString()}</span>
}

interface ScrollAnimationProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

const ScrollAnimation = ({ children, delay = 0, className = '' }: ScrollAnimationProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'} ${className}`}
            style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
        >
            {children}
        </div>
    );
};

const StatCard = ({ number, label, icon: IconComponent, index }: { number: string; label: string; icon: React.ComponentType<any>; index: number }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    const backgroundColor = "#E2DED0";
    const borderColor = index % 2 === 0 ? "#647C90" : "#928490";
    const iconColor = index % 2 === 0 ? "#647C90" : "#928490";
    const textColor = "#647C90";

    // Extract numeric value from the number string (e.g., "3x" becomes 3)
    const numericValue = Number.parseInt(number.replace(/\D/g, ""));

    return (
        <div ref={ref} className="text-center">
            <div
                className="rounded-2xl p-4 md:p-3 shadow-lg flex flex-col items-center justify-center h-full relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                style={{
                    backgroundColor: backgroundColor,
                    border: `2px solid ${borderColor}`,
                }}
            >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                <div
                    className="w-8 h-8 md:w-7 md:h-7 rounded-full flex items-center justify-center mb-2 md:mb-1 relative z-10 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: iconColor }}
                >
                    <IconComponent className="w-5 h-5 md:w-4 md:h-4 text-white" />
                </div>

                <div className="text-xl md:text-lg font-bold mb-1 relative z-10 font-merriweather" style={{ color: textColor }}>
                    {isVisible ? (
                        <>
                            <Counter end={numericValue} duration={2000} />
                            {number.includes("x") && "x"}
                            {number.includes("$") && "$"}
                        </>
                    ) : (
                        "0"
                    )}
                </div>
                <div className="text-xs leading-tight relative z-10 font-montserrat" style={{ color: textColor }}>
                    {label}
                </div>
            </div>
        </div>
    );
};

const MentorshipPage = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const BASE_PATH = process.env.PUBLIC_URL || "";

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        { number: "3x", label: "Virtual Sessions", icon: MessageCircle },
        { number: "1", label: "Hour Each", icon: Clock },
        { number: "$150", label: "Total Investment", icon: Target },
        { number: "1", label: "Dedicated Mentor", icon: User }
    ];

    const mentorshipFeatures = [
        "3x one-hour virtual sessions with an experienced former professional dancer",
        "Private and confidential conversations",
        "Guided goal-setting and reflection",
        "Actionable resources",
        "Networking opportunities",
        "Investment in your future career"
    ];

    const dancerStages = [
        {
            title: "Pre-Pro Dancers",
            description: (
                <>
                    Dance careers are notoriously short. <span className="font-bold" style={{ color: "#928490" }}>
                        Prepare for the long term
                    </span> before you pursue your career on the stage.
                </>
            ),
            icon: Heart
        },
        {
            title: "Current Pro Dancers",
            description: (
                <>
                    Lived the dream and ready for a change? Take the leap with clear{" "}
                    <span className="font-bold" style={{ color: "#928490" }}>
                        goal-setting, action plans, and accountability
                    </span>.
                </>
            ),
            icon: Target
        },
        {
            title: "Former Pro Dancers",
            description: (
                <>
                    Even if you've already pivoted into a new career, it doesn't always mean you have it all figured out.{" "}
                    <span className="font-bold" style={{ color: "#928490" }}>
                        We can help
                    </span>.
                </>
            ),
            icon: TrendingUp
        }
    ];

    const processSteps = [
        {
            number: "1",
            title: "Book Your 1st Session",
            description: "When you book your 1st session, you'll receive an email with your Welcome Guide. We'll pair you with your mentor and guide you through some goal-setting exercises.",
            icon: Calendar
        },
        {
            number: "2",
            title: "Show Up for Yourself",
            description: "You'll attend 3 sessions over the course of your mentorship. After each session, you'll receive reflection questions and action plans to make the most of your program.",
            icon: Users
        },
        {
            number: "3",
            title: "Take Action",
            description: "After the mentorship program, you'll have a clear plan of action, dancer-specific resources, and a new contact to add to your network. From now on, your mentor will always be in your corner.",
            icon: Target
        }
    ];

    return (
        <div className="bg-beige min-h-screen">
            <Navigation />
            <div className="bg-beige">
                {/* Hero Section */}
                <div className="relative py-16 md:py-24 overflow-hidden">
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 overflow-hidden">
                            <div className="relative z-10 text-center">
                                <ScrollAnimation delay={200}>
                                    <div className="inline-flex items-center justify-center mb-4 px-4 py-2 bg-light-gray rounded-full border border-purple-gray/20">
                                        <span className="text-sm font-semibold text-white tracking-wider uppercase">ONE-ON-ONE SUPPORT</span>
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-bold text-black">
                                        Mentorship Program
                                    </h1>
                                </ScrollAnimation>
                                <ScrollAnimation delay={300}>
                                    <br></br>
                                    <p className="font-montserrat text-xl text-black max-w-3xl mx-auto mb-8 px-4 md:px-0">
                                        Private, one-on-one support to help you find meaningful work off the stage
                                    </p>
                                </ScrollAnimation>

                                {/* Stats Section */}
                                <ScrollAnimation delay={400}>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
                                        {stats.map((stat, index) => (
                                            <StatCard key={index} {...stat} index={index} />
                                        ))}
                                    </div>
                                </ScrollAnimation>

                                <ScrollAnimation delay={500}>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                                        <button
                                            onClick={() => window.open(product.url, '_blank', 'noopener,noreferrer')}
                                            className="bg-purple-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                                        >
                                            <span className="relative z-10">BUY NOW</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-gray/20 to-light-gray/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </button>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What is the mentorship program section */}
                <div className="py-16 bg-light-gray">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollAnimation>
                            <div className="text-center mb-12">
                                <h2 className="text-bold text-5xl font-bold text-white mb-8">What is the mentorship program?</h2>
                            </div>
                        </ScrollAnimation>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {mentorshipFeatures.map((feature, index) => (
                                <ScrollAnimation key={index} delay={index * 200}>
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-gray/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
                                        <div className="flex items-start flex-grow">
                                            <div className="w-6 h-6 rounded-full bg-purple-gray flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle className="w-4 h-4 text-white" />
                                            </div>
                                            <p className="font-montserrat text-black leading-relaxed">
                                                {feature}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Support for Dancers at Any Stage Section */}
                <div className="py-16 bg-beige">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollAnimation>
                            <div className="text-center mb-16">
                                <h2 className="text-bold text-5xl font-bold text-black mb-4">Support for Dancers at Any Stage</h2>
                                <p className="font-montserrat text-xl text-brown-gray max-w-2xl mx-auto">
                                    Step onto the next stage of your career. We'll help guide the way.
                                </p>
                            </div>
                        </ScrollAnimation>

                        <div className="grid md:grid-cols-3 gap-8">
                            {dancerStages.map((stage, index) => (
                                <ScrollAnimation key={index} delay={index * 300}>
                                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-gray text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full">
                                        <div className="w-16 h-16 rounded-full bg-purple-gray flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <stage.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="font-merriweather text-2xl font-bold text-black mb-4">{stage.title}</h3>
                                        <p className="font-montserrat text-brown-gray leading-relaxed flex-grow">{stage.description}</p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="py-16 bg-light-gray">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollAnimation>
                            <div className="text-center mb-16">
                                <h2 className="text-bold text-5xl font-bold text-white mb-4">How It Works</h2>
                            </div>
                        </ScrollAnimation>

                        <div className="grid md:grid-cols-3 gap-8">
                            {processSteps.map((step, index) => (
                                <ScrollAnimation key={index} delay={index * 300}>
                                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-gray text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
                                        {/* Step number */}
                                        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-purple-gray flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-white font-bold text-xl">{step.number}</span>
                                        </div>

                                        <div className="w-16 h-16 rounded-full bg-beige border-2 border-purple-gray flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <step.icon className="w-8 h-8 text-purple-gray" />
                                        </div>
                                        <h3 className="font-merriweather text-2xl font-bold text-black mb-4">{step.title}</h3>
                                        <p className="font-montserrat text-brown-gray leading-relaxed flex-grow">{step.description}</p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final CTA Section */}
                <div className="text-center py-16 bg-beige relative overflow-hidden">
                    <div className="bg-white rounded-2xl shadow-lg mx-auto max-w-4xl p-8 md:p-12 border-2 border-light-gray">
                        <ScrollAnimation delay={0}>
                            <div className="flex items-center justify-center mb-4">
                                <h2 className="text-bold text-4xl md:text-5xl font-bold text-black text-center">
                                    Take the leap and explore your career beyond the stage
                                </h2>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation delay={300}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-8">
                                {product.features.map((feature, index) => (
                                    <div key={index} className="flex items-center justify-center md:justify-start">
                                        <CheckCircle className="w-6 h-6 text-purple-gray mr-3 flex-shrink-0" />
                                        <span className="font-montserrat text-black">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation delay={500}>
                            <div className="flex justify-center items-center gap-4 mb-8">
                                <span className="font-merriweather text-5xl font-bold text-dark-gray">${product.price}</span>
                                <span className="font-montserrat text-lg text-brown-gray">USD</span>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation delay={700}>
                            <button
                                onClick={() => window.open(product.url, '_blank', 'noopener,noreferrer')}
                                className="bg-light-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-4 px-10 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group mb-8"
                            >
                                <span className="relative z-10">BUY NOW</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-gray/20 to-light-gray/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </ScrollAnimation>

                        {/* Questions and Cancellation Policy */}
                        <ScrollAnimation delay={900}>
                            <div className="border-t border-gray-200 pt-8 mt-8">
                                <div className="grid md:grid-cols-2 gap-8 text-left">
                                    <div>
                                        <h4 className="font-merriweather text-lg font-bold text-black mb-2 flex items-center">
                                            <MessageCircle className="w-5 h-5 text-purple-gray mr-2" />
                                            Questions?
                                        </h4>
                                        <p className="font-montserrat text-brown-gray">
                                            <a href="mailto:kaylee@pivotfordancers.com" className="text-purple-gray hover:underline">
                                                kaylee@pivotfordancers.com
                                            </a>
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-merriweather text-lg font-bold text-black mb-2 flex items-center">
                                            <Shield className="w-5 h-5 text-purple-gray mr-2" />
                                            Cancellation Policy
                                        </h4>
                                        <p className="font-montserrat text-brown-gray text-sm">
                                            24 hours notice is required for cancellations. No refunds.
                                        </p>
                                        <p className="font-montserrat text-brown-gray text-sm mt-1">
                                            Terms and Conditions
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MentorshipPage;