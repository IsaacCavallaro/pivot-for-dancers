import Image from 'next/image';
import { Service } from '../../data/services';
import { Star, Clock, ArrowLeft, CheckCircle, Users, Globe, Award, Target, Heart, Shield, TrendingUp, Calendar, MapPin, Play, MessageCircle, User, BookOpen, Mic, Video, FileText, Briefcase } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

// Mock Interview service data
const product: Service = {
    id: 5,
    name: "Mock Interviews",
    subtitle: "INTERVIEW PREPARATION",
    description: "Professional interview practice sessions designed specifically for dancers transitioning to new careers",
    price: 29.99,
    originalPrice: 75,
    url: 'https://tidycal.com/pivotfordancers/mock-interview',
    img: "/assets/mock-interview.png",
    category: "Interview Prep",
    duration: "60 Minutes",
    rating: 5.0,
    reviews: 0,
    features: [
        "60-Minute Practice Session",
        "Industry-Specific Questions",
        "Personalized Feedback",
        "Confidence Building Techniques",
        "Follow-Up Resources",
        "Recording Available"
    ],
    icon: Mic,
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

    // Extract numeric value from the number string
    const numericValue = Number.parseInt(number.replace(/\D/g, "")) || 0;

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
                    {isVisible && numericValue > 0 ? (
                        <>
                            <Counter end={numericValue} duration={2000} />
                            {number.includes("min") && " min"}
                            {number.includes("$") && "$"}
                        </>
                    ) : (
                        number.includes("$") ? "$0" : number.replace(/\d+/g, "0")
                    )}
                </div>
                <div className="text-xs leading-tight relative z-10 font-montserrat" style={{ color: textColor }}>
                    {label}
                </div>
            </div>
        </div>
    );
};

const MockInterviewPage = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const BASE_PATH = process.env.PUBLIC_URL || "";

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        { number: "60", label: "Minute Sessions", icon: Clock },
        { number: "1", label: "Dedicated Mentor", icon: User },
        { number: "9", label: "Structured Questions", icon: Target },
        { number: "100%", label: "Dancer-Focused", icon: Heart }
    ];

    const mockInterviewFeatures = [
        "Realistic interview simulation with industry-relevant questions",
        "Personalized feedback on your responses and presentation",
        "Confidence-building techniques tailored for career-changing dancers",
        "Body language and communication coaching",
        "Industry-specific preparation for your target field",
    ];

    const interviewTypes = [
        {
            title: "Corporate Interviews",
            description: (
                <>
                    Prepare for <span className="font-bold" style={{ color: "#928490" }}>
                        corporate environments
                    </span> with behavioral questions, case studies, and professional presentation skills.
                </>
            ),
            icon: Briefcase
        },
        {
            title: "Creative Industry Interviews",
            description: (
                <>
                    Navigate interviews in <span className="font-bold" style={{ color: "#928490" }}>
                        creative fields
                    </span> where your artistic background is an asset, not a barrier.
                </>
            ),
            icon: Heart
        },
        {
            title: "Career Change Interviews",
            description: (
                <>
                    Master the art of explaining your <span className="font-bold" style={{ color: "#928490" }}>
                        career transition
                    </span> and highlighting transferable skills from dance.
                </>
            ),
            icon: TrendingUp
        }
    ];

    const processSteps = [
        {
            number: "1",
            title: "Book Your Session",
            description: "Schedule your mock interview and receive a pre-session questionnaire to help us understand your target role and industry. We'll customize the experience to match your specific needs.",
            icon: Calendar
        },
        {
            number: "2",
            title: "Practice Interview",
            description: "Participate in a realistic 60-minute interview simulation via video call. Experience authentic questions, practice your responses, and receive real-time guidance from an experienced interviewer.",
            icon: Video
        },
        {
            number: "3",
            title: "Review & Improve",
            description: "Receive detailed feedback on your performance, a recording of the session for review, and actionable tips to improve your interview skills for future opportunities.",
            icon: FileText
        }
    ];

    const benefits = [
        {
            title: "Build Confidence",
            description: "Practice in a safe environment before the real thing. Reduce interview anxiety and increase your confidence through realistic simulation and expert guidance.",
            icon: Shield,
        },
        {
            title: "Highlight Transferable Skills",
            description: "Learn how to effectively communicate the valuable skills you've gained as a dancer - discipline, teamwork, adaptability, and performance under pressure.",
            icon: Award,
        },
        {
            title: "Industry-Specific Prep",
            description: "Get tailored preparation for your target industry, whether it's corporate, nonprofit, education, healthcare, or any other field you're considering.",
            icon: Target,
        }
    ];

    return (
        <div className="bg-beige min-h-screen">
            <Navigation />
            <div className="bg-beige">
                {/* Hero Section */}
                <div className="relative pt-24 pb-16 md:py-24 overflow-hidden">
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 overflow-hidden">
                            <div className="relative z-10 text-center">
                                <ScrollAnimation delay={200}>
                                    <div className="inline-flex items-center justify-center px-6 py-3 rounded-full mb-6 border backdrop-blur-xl shadow-xl"
                                        style={{ borderColor: 'rgba(100, 124, 144,0.3)', backgroundColor: 'rgba(100, 124, 144, 0.7)' }}>
                                        <div className="w-2 h-2 rounded-full mr-3 " style={{ backgroundColor: '#E2DED0' }}></div>
                                        <span className="text-sm font-bold tracking-widest text-white">PREPARATION</span>
                                        <div className="w-2 h-2 rounded-full ml-3" style={{ backgroundColor: '#E2DED0' }}></div>
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-bold text-black">
                                        Mock Interviews
                                    </h1>
                                </ScrollAnimation>
                                <ScrollAnimation delay={300}>
                                    <br></br>
                                    <p className="font-montserrat text-xl text-brown-gray max-w-3xl mx-auto mb-8 px-4 md:px-0">
                                        Professional interview practice sessions designed specifically for dancers transitioning to new careers
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
                                            <span className="relative z-10">BOOK NOW</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-gray/20 to-light-gray/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </button>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What's Included section */}
                <div className="py-16 bg-light-gray">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollAnimation>
                            <div className="text-center mb-12">
                                <h2 className="text-bold text-5xl font-bold text-white mb-8">What's Included?</h2>
                                <p className="font-montserrat text-xl text-white max-w-3xl mx-auto">
                                    Our mock interview service provides comprehensive preparation to help you ace your next job interview with confidence.
                                </p>
                            </div>
                        </ScrollAnimation>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Text Content - Left Column */}
                            <div>
                                <div className="space-y-6">
                                    {mockInterviewFeatures.map((feature, index) => (
                                        <ScrollAnimation key={index} delay={index * 200}>
                                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-gray/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                                <div className="flex items-start">
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

                            {/* Image - Right Column */}
                            <ScrollAnimation>
                                <div className="flex justify-center">
                                    <div className="relative">
                                        <img
                                            src="/assets/mock-interview.png"
                                            alt="Mock Interview Session"
                                            className="rounded-2xl shadow-lg max-w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="bg-beige py-20 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <ScrollAnimation>
                            <div className="text-center mb-16">
                                <div className="flex items-center justify-center mb-6 relative">
                                    <h2 className="text-bold text-5xl font-bold text-black tracking-tight relative inline-block">
                                        Why Mock Interviews Work
                                    </h2>
                                </div>
                                <p className="font-montserrat text-xl text-brown-gray mt-4 max-w-3xl mx-auto leading-relaxed">
                                    Practice makes perfect. Our mock interviews help you build confidence and master the skills needed to land your dream job.
                                </p>
                            </div>
                        </ScrollAnimation>
                        <div className="grid md:grid-cols-3 gap-10">
                            {benefits.map((benefit, index) => (
                                <ScrollAnimation key={index} delay={index * 300}>
                                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden text-center border-2 border-purple-gray transition-all duration-500 hover:shadow-xl hover:-translate-y-3 flex flex-col h-full">
                                        {/* Icon with elegant background */}
                                        <div className="relative pt-12 pb-6 z-20">
                                            <div className="w-20 h-20 rounded-full bg-purple-gray flex items-center justify-center mx-auto shadow-md border-4 border-white transition-transform duration-500 group-hover:scale-110">
                                                <benefit.icon className="w-9 h-9 text-white" />
                                            </div>
                                        </div>

                                        <div className="px-7 pb-10 flex-1 flex flex-col">
                                            <div className="flex-1">
                                                <h3 className="font-bold text-2xl text-black mb-7 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-14 after:h-1.5 after:bg-purple-gray after:rounded-full after:transition-all after:duration-500 group-hover:after:w-20">
                                                    {benefit.title}
                                                </h3>

                                                <p className="font-montserrat text-black text-center leading-relaxed text-lg">
                                                    {benefit.description}
                                                </p>
                                            </div>

                                            {/* Subtle badge at bottom of card */}
                                            <div className="mt-6 pt-4 border-t border-light-gray border-opacity-30">
                                                <span className="inline-block text-xs font-montserrat text-white bg-light-gray px-3 py-1 rounded-full">
                                                    Professional Preparation
                                                </span>
                                            </div>
                                        </div>
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

                                        <div className="w-16 h-16 rounded-full bg-beige border-2 border-purple-gray flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-purple-gray font-bold text-2xl">{index + 1}</span>
                                        </div>
                                        <h3 className="font-merriweather text-2xl font-bold text-black mb-4">{step.title}</h3>
                                        <p className="font-montserrat text-brown-gray leading-relaxed flex-grow mb-6">{step.description}</p>

                                        {/* Badge added here */}
                                        <div className="mt-auto pt-4 border-t border-light-gray border-opacity-30">
                                            <span className="inline-block text-xs font-montserrat text-white bg-purple-gray px-3 py-1 rounded-full">
                                                Step {index + 1}
                                            </span>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final CTA Section */}
                <div className="text-center py-16 bg-beige relative overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-2xl shadow-lg mx-auto max-w-4xl p-8 md:p-12 border-2 border-light-gray">
                            <ScrollAnimation delay={0}>
                                <div className="flex items-center justify-center mb-4">
                                    <h2 className="text-bold text-4xl md:text-5xl font-bold text-black text-center">
                                        Ready to Ace Your Next Interview?
                                    </h2>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation delay={300}>
                                <p className="font-montserrat text-lg text-brown-gray max-w-2xl mx-auto mb-8">
                                    Don't let interview nerves hold you back from your dream career. Practice with confidence and land the job you want.
                                </p>
                            </ScrollAnimation>

                            <ScrollAnimation delay={400}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-8">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="flex items-center justify-start">
                                            <CheckCircle className="w-6 h-6 text-purple-gray mr-3 flex-shrink-0" />
                                            <span className="font-montserrat text-black">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation delay={500}>
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <span className="font-merriweather text-5xl font-bold text-dark-gray">${product.price}</span>
                                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                                    <span className="bg-purple-gray text-white text-sm font-semibold px-3 py-1 rounded-full">
                                        Save $40
                                    </span>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation delay={700}>
                                <button
                                    onClick={() => window.open(product.url, '_blank', 'noopener,noreferrer')}
                                    className="bg-light-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-4 px-10 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group mb-8"
                                >
                                    <span className="relative z-10">BOOK NOW</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-gray/20 to-light-gray/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </ScrollAnimation>

                            {/* Questions and Cancellation Policy */}
                            <ScrollAnimation delay={900}>
                                <div className="border-t border-gray-200 pt-8 mt-8">
                                    <div className="flex justify-center">
                                        <div className="text-center max-w-md">
                                            <div>
                                                <h4 className="font-merriweather text-lg font-bold text-black mb-2 flex items-center justify-center">
                                                    <MessageCircle className="w-5 h-5 text-purple-gray mr-2" />
                                                    Questions?
                                                </h4>
                                                <p className="font-montserrat text-brown-gray">
                                                    <a href="mailto:kaylee@pivotfordancers.com" className="text-purple-gray hover:underline">
                                                        kaylee@pivotfordancers.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MockInterviewPage;