import Image from 'next/image';
import { Product, coursePaymentUrl } from '../../data/products';
import { Star, Clock, ArrowLeft, CheckCircle, Users, Globe, Award, Target, Heart, Shield, TrendingUp, Calendar, MapPin, Play, Brain, Zap, UserCheck, Search } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import Quiz from '../../components/Quiz'; // Import the Quiz component

// Product data for the page
const product: Product = {
    id: 7,
    name: "Pivot Personality Quiz",
    subtitle: "DISCOVER YOUR TRANSITION STYLE",
    description: "Take our 2-minute quiz to uncover your unique approach to career transition and get personalized guidance",
    price: 0,
    url: "#",
    img: "/assets/pivot-quiz.png",
    category: "Assessment",
    duration: "2 Minutes",
    rating: 4.8,
    reviews: 156,
    features: [
        "Personalized Results",
        "Actionable Insights",
        "Career Recommendations",
        "Free Assessment",
        "Detailed PDF Report",
        "Expert Guidance"
    ],
    icon: Brain,
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
                            {number.includes("+") && "+"}
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

const FindYourPivotPersonalityPage = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const BASE_PATH = process.env.PUBLIC_URL || "";

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        { number: "2", label: "Minute Quiz", icon: Clock },
        { number: "4", label: "Personality Types", icon: Users },
        { number: "156+", label: "Dancers Tested", icon: Star },
        { number: "100", label: "Free Access", icon: Heart }
    ];

    const personalityTypes = [
        {
            title: "The Dreamer",
            description: "Thinking about life after dance feels like betraying a part of yourself. You're hesitant to explore the future because naming a 'Plan B' feels like giving up.",
            icon: Brain,
            color: "#647C90"
        },
        {
            title: "The Perfectionist",
            description: "You love a solid plan and want clarity, options, and a reliable timeline so you can move forward with confidence.",
            icon: Zap,
            color: "#928490"
        },
        {
            title: "The Realist",
            description: "You're thoughtful, careful, and value real-world stability. You want to build something stable and real without huge leaps.",
            icon: UserCheck,
            color: "#746C70"
        },
        {
            title: "The Seeker",
            description: "For you, it's not about a paycheck—you're pivoting for purpose. You crave connection, impact, and alignment.",
            icon: Search,
            color: "#647C90"
        }
    ];

    const benefits = [
        {
            title: "Personalized Guidance",
            description: "Get tailored recommendations based on your unique transition style and preferences",
            icon: Award
        },
        {
            title: "Clear Next Steps",
            description: "Receive actionable advice that matches your personality and approach to change",
            icon: Target
        },
        {
            title: "Deeper Self-Understanding",
            description: "Gain insights into your strengths and challenges during career transitions",
            icon: Shield
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
                                        <span className="text-sm font-semibold text-white tracking-wider uppercase">DISCOVER YOUR TRANSITION STYLE</span>
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-bold text-black">
                                        Pivot Personality Quiz
                                    </h1>
                                </ScrollAnimation>
                                <ScrollAnimation delay={300}>
                                    <br></br>
                                    <p className="font-montserrat text-xl text-black max-w-3xl mx-auto mb-8 px-4 md:px-0">
                                        Take our 2-minute quiz to uncover your unique approach to career transition and get personalized guidance
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
                                            onClick={() => {
                                                const quizSection = document.getElementById('quiz-section');
                                                if (quizSection) {
                                                    quizSection.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }}
                                            className="bg-purple-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                                        >
                                            <span className="relative z-10">START QUIZ</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-gray/20 to-light-gray/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </button>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Personality Types Section */}
                <div className="py-16 bg-light-gray">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollAnimation>
                            <div className="text-center mb-16">
                                <h2 className="text-bold text-5xl font-bold text-white mb-4">Discover Your Pivot Personality</h2>
                                <p className="font-montserrat text-xl text-white max-w-2xl mx-auto">
                                    Based on extensive research with dancers, we've identified four distinct approaches to career transition
                                </p>
                            </div>
                        </ScrollAnimation>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {personalityTypes.map((type, index) => (
                                <ScrollAnimation key={index} delay={index * 200}>
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-gray/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
                                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                                            style={{ backgroundColor: type.color }}>
                                            <type.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="font-merriweather text-xl font-bold text-black mb-4 text-center">{type.title}</h3>
                                        <p className="font-montserrat text-brown-gray leading-relaxed flex-grow text-center">{type.description}</p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quiz Section */}
                <div id="quiz-section" className="py-16 bg-beige">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollAnimation>
                            <div className="text-center mb-12">
                                <h2 className="text-bold text-5xl font-bold text-black mb-8">Ready to Discover Your Pivot Personality?</h2>
                                <p className="font-montserrat text-xl text-black max-w-2xl mx-auto">
                                    Take our quick 7-question quiz and receive personalized guidance for your career transition journey
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Quiz Component */}
                        <Quiz />
                    </div>
                </div>

                {/* Final CTA Section */}
                <div className="text-center py-16 bg-light-gray relative overflow-hidden">
                    <div className="bg-white rounded-2xl shadow-lg mx-auto max-w-4xl p-8 md:p-12 border-2 border-light-gray">
                        <ScrollAnimation delay={0}>
                            <div className="flex items-center justify-center mb-4">
                                <h2 className="text-bold text-4xl md:text-5xl font-bold text-black text-center">
                                    Start Your Transition Journey Today
                                </h2>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation delay={300}>
                            <p className="font-montserrat text-brown-gray text-lg mb-8 max-w-2xl mx-auto">
                                Join thousands of dancers who have discovered their pivot personality and found clarity in their career transition
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation delay={500}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-8">
                                {product.features.map((feature, index) => (
                                    <div key={index} className="flex items-center justify-center md:justify-start">
                                        <CheckCircle className="w-6 h-6 text-purple-gray mr-3 flex-shrink-0" />
                                        <span className="font-montserrat text-black">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation delay={700}>
                            <button
                                onClick={() => {
                                    const quizSection = document.getElementById('quiz-section');
                                    if (quizSection) {
                                        quizSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="bg-light-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-4 px-10 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                            >
                                <span className="relative z-10">TAKE THE QUIZ</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-gray/20 to-light-gray/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </ScrollAnimation>

                        {/* Questions Section */}
                        <ScrollAnimation delay={900}>
                            <div className="border-t border-gray-200 pt-8 mt-8">
                                <div className="text-center">
                                    <h4 className="font-merriweather text-lg font-bold text-black mb-2 flex items-center justify-center">
                                        <Users className="w-5 h-5 text-purple-gray mr-2" />
                                        Questions about the quiz?
                                    </h4>
                                    <p className="font-montserrat text-brown-gray">
                                        <a href="mailto:kaylee@pivotfordancers.com" className="text-purple-gray hover:underline">
                                            kaylee@pivotfordancers.com
                                        </a>
                                    </p>
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

export default FindYourPivotPersonalityPage;