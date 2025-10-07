import Image from 'next/image';
import { Product, coursePaymentUrl } from '../../data/products';
import { Star, Apple, Clock, ArrowLeft, CheckCircle, Users, Globe, Award, Target, Heart, Shield, TrendingUp, Calendar, MapPin, Play, MessageCircle, User, BookOpen, Smartphone, Lock, Brain, DollarSign, Briefcase } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

// Pivot Paths app data
const product: Product = {
    id: 4,
    name: "Pivot Paths App",
    subtitle: "MOBILE APP FOR DANCERS",
    description: "Your private toolkit for career transition, mindset wellness, and financial planning",
    url: "#", // Replace with actual app store URL
    img: "/assets/pivot-paths-app.png",
    category: "Mobile App",
    duration: "Lifetime Access",
    rating: 5.0,
    reviews: 0,
    features: [
        "Career Transition Resources",
        "Mindset Wellness Tools",
        "Financial Planning Guides",
        "100% Local Data Storage",
        "Skills Assessments",
        "Personal Growth Games"
    ],
    icon: Smartphone,
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
                            {number.includes("x") && "x"}
                            {number.includes("$") && "$"}
                            {number.includes("%") && "%"}
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

const PivotPathsPage = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [currentScreen, setCurrentScreen] = useState(0);
    const BASE_PATH = process.env.PUBLIC_URL || "";

    useEffect(() => {
        setIsVisible(true);

        const interval = setInterval(() => {
            setCurrentScreen((prev) => (prev + 1) % 5);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const stats = [
        { number: "3", label: "Main Categories", icon: Briefcase },
        { number: "100", label: "Privacy Focused", icon: Lock },
        { number: "0", label: "Data Shared", icon: Shield },
        { number: "1", label: "Device Storage", icon: Smartphone }
    ];

    const appFeatures = [
        "Career Transition: Skills assessments and development resources",
        "Mindset Wellness: Tools and games for personal growth",
        "Finance: Financial literacy and planning resources",
        "All data stored locally on your device",
        "No cloud storage or external servers",
        "Completely private and secure"
    ];

    const appCategories = [
        {
            title: "Career Transition",
            description: (
                <>
                    Move beyond performance with <span className="font-bold" style={{ color: "#928490" }}>
                        skills assessments and resources
                    </span> for career development beyond the stage.
                </>
            ),
            icon: Briefcase
        },
        {
            title: "Mindset Wellness",
            description: (
                <>
                    Nurture your mental health with{" "}
                    <span className="font-bold" style={{ color: "#928490" }}>
                        tools and games for personal growth
                    </span> and discovering your dream life.
                </>
            ),
            icon: Brain
        },
        {
            title: "Finance",
            description: (
                <>
                    Build financial stability with{" "}
                    <span className="font-bold" style={{ color: "#928490" }}>
                        resources and tools for financial literacy
                    </span> tailored to dancers' unique needs.
                </>
            ),
            icon: DollarSign
        }
    ];

    const privacyFeatures = [
        {
            icon: Lock,
            title: "Local Storage Only",
            description: "All your data stays on your device using AsyncStorage technology"
        },
        {
            icon: Shield,
            title: "No Cloud Storage",
            description: "We don't use external servers or cloud storage for your personal information"
        },
        {
            icon: User,
            title: "Complete Control",
            description: "You own your data - if you delete the app, your information is completely gone"
        }
    ];

    const screens = [
        {
            title: "Pivot Paths",
            subtitle: "Your Dance Career Companion",
            content: (
                <div className="flex-1 px-4 space-y-4">
                    <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#fff" }}>
                        <div className="flex items-center mb-2">
                            <MapPin className="w-5 h-5 mr-2" style={{ color: "#647C90" }} />
                            <span style={{ color: "#647C90" }} className="font-semibold">
                                Career Transition
                            </span>
                        </div>
                        <div className="w-full rounded-full h-2" style={{ backgroundColor: "rgba(100, 124, 144, 0.3)" }}>
                            <div style={{ backgroundColor: "#647C90" }} className="rounded-full h-2 w-3/4"></div>
                        </div>
                    </div>

                    <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#fff" }}>
                        <div className="flex items-center mb-2">
                            <Heart className="w-5 h-5 mr-2" style={{ color: "#647C90" }} />
                            <span style={{ color: "#647C90" }} className="font-semibold">
                                Mindset Wellness
                            </span>
                        </div>
                        <div className="w-full rounded-full h-2" style={{ backgroundColor: "rgaws(100, 124, 144, 0.3)" }}>
                            <div style={{ backgroundColor: "#647C90" }} className="rounded-full h-2 w-1/2"></div>
                        </div>
                    </div>

                    <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#fff" }}>
                        <div className="flex items-center mb-2">
                            <CheckCircle className="w-5 h-5 mr-2" style={{ color: "#647C90" }} />
                            <span style={{ color: "#647C90" }} className="font-semibold">
                                Financial Planning
                            </span>
                        </div>
                        <div className="w-full rounded-full h-2" style={{ backgroundColor: "rgba(100, 124, 144, 0.3)" }}>
                            <div style={{ backgroundColor: "#647C90" }} className="rounded-full h-2 w-1/4"></div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Career Transition",
            subtitle: "Navigate Your Next Chapter",
            content: (
                <div className="flex-1 px-4 space-y-4">
                    <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#fff" }}>
                        <div className="flex items-center justify-between mb-3">
                            <span style={{ color: "#647C90" }} className="font-semibold">
                                Skills Assessment
                            </span>
                            <Target className="w-5 h-5" style={{ color: "#647C90" }} />
                        </div>
                        <p style={{ color: "#647C90" }} className="text-sm opacity-90">
                            Identify transferable skills from your dance background
                        </p>
                    </div>

                    <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#fff" }}>
                        <div className="flex items-center justify-between mb-3">
                            <span style={{ color: "#647C90" }} className="font-semibold">
                                Industry Exploration
                            </span>
                            <Shield className="w-5 h-5" style={{ color: "#647C90" }} />
                        </div>
                        <p style={{ color: "#647C90" }} className="text-sm opacity-90">
                            Discover career paths that value your unique experience
                        </p>
                    </div>

                    <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#fff" }}>
                        <div className="flex items-center justify-between mb-3">
                            <span style={{ color: "#647C90" }} className="font-semibold">
                                Network Building
                            </span>
                            <Award className="w-5 h-5" style={{ color: "#647C90" }} />
                        </div>
                        <p style={{ color: "#647C90" }} className="text-sm opacity-90">
                            Connect with professionals in your target industry
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: "Identify Transferable Skills",
            subtitle: "Unlock Your Potential",
            content: (
                <div className="flex-1 px-4 space-y-4">
                    <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#fff" }}>
                        <div className="flex items-center justify-between mb-3">
                            <span style={{ color: "#647C90" }} className="font-semibold">
                                Skill Mapping
                            </span>
                            <Users className="w-5 h-5" style={{ color: "#647C90" }} />
                        </div>
                        <p style={{ color: "#647C90" }} className="text-sm opacity-90">
                            Identify transferable skills from your dance background
                        </p>
                    </div>

                    <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#fff" }}>
                        <div className="flex items-center justify-between mb-3">
                            <span style={{ color: "#647C90" }} className="font-semibold">
                                Industry Exploration
                            </span>
                            <TrendingUp className="w-5 h-5" style={{ color: "#647C90" }} />
                        </div>
                        <p style={{ color: "#647C90" }} className="text-sm opacity-90">
                            Discover career paths that value your unique experience
                        </p>
                    </div>

                    <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#fff" }}>
                        <div className="flex items-center justify-between mb-3">
                            <span style={{ color: "#647C90" }} className="font-semibold">
                                Action Planning
                            </span>
                            <Calendar className="w-5 h-5" style={{ color: "#647C90" }} />
                        </div>
                        <p style={{ color: "#647C90" }} className="text-sm opacity-90">
                            Create step-by-step transition roadmap
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: "Mindset Wellness",
            subtitle: "Mental Health & Confidence",
            content: (
                <div className="flex-1 px-4 space-y-4">
                    <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#fff" }}>
                        <div className="flex items-center justify-between mb-3">
                            <span style={{ color: "#647C90" }} className="font-semibold">
                                Daily Affirmations
                            </span>
                            <Heart className="w-5 h-5" style={{ color: "#647C90" }} />
                        </div>
                        <p style={{ color: "#647C90" }} className="text-sm opacity-90">
                            Build confidence with personalized positive messaging
                        </p>
                    </div>

                    <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#fff" }}>
                        <div className="flex items-center justify-between mb-3">
                            <span style={{ color: "#647C90" }} className="font-semibold">
                                Stress Management
                            </span>
                            <Shield className="w-5 h-5" style={{ color: "#647C90" }} />
                        </div>
                        <p style={{ color: "#647C90" }} className="text-sm opacity-90">
                            Techniques to handle transition anxiety and uncertainty
                        </p>
                    </div>

                    <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#fff" }}>
                        <div className="flex items-center justify-between mb-3">
                            <span style={{ color: "#647C90" }} className="font-semibold">
                                Community Support
                            </span>
                            <Users className="w-5 h-5" style={{ color: "#647C90" }} />
                        </div>
                        <p style={{ color: "#647C90" }} className="text-sm opacity-90">
                            Connect with other dancers on similar journeys
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: "Financial Planning",
            subtitle: "Secure Your Future",
            content: (
                <div className="flex-1 px-4 space-y-4">
                    <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#fff" }}>
                        <div className="flex items-center justify-between mb-3">
                            <span style={{ color: "#647C90" }} className="font-semibold">
                                Budget Planning
                            </span>
                            <TrendingUp className="w-5 h-5" style={{ color: "#647C90" }} />
                        </div>
                        <p style={{ color: "#647C90" }} className="text-sm opacity-90">
                            Manage finances during career transition periods
                        </p>
                    </div>

                    <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#fff" }}>
                        <div className="flex items-center justify-between mb-3">
                            <span style={{ color: "#647C90" }} className="font-semibold">
                                Emergency Fund
                            </span>
                            <Shield className="w-5 h-5" style={{ color: "#647C90" }} />
                        </div>
                        <p style={{ color: "#647C90" }} className="text-sm opacity-90">
                            Build financial security for unexpected changes
                        </p>
                    </div>

                    <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#fff" }}>
                        <div className="flex items-center justify-between mb-3">
                            <span style={{ color: "#647C90" }} className="font-semibold">
                                Investment Basics
                            </span>
                            <Award className="w-5 h-5" style={{ color: "#647C90" }} />
                        </div>
                        <p style={{ color: "#647C90" }} className="text-sm opacity-90">
                            Learn to grow wealth beyond your dance career
                        </p>
                    </div>
                </div>
            ),
        },
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
                                        <span className="text-sm font-bold tracking-widest text-white">MOBILE APP</span>
                                        <div className="w-2 h-2 rounded-full ml-3" style={{ backgroundColor: '#E2DED0' }}></div>
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-bold text-black">
                                        Pivot Paths
                                    </h1>
                                </ScrollAnimation>
                                <ScrollAnimation delay={300}>
                                    <br></br>
                                    <p className="font-montserrat text-xl text-brown-gray max-w-3xl mx-auto mb-8 px-4 md:px-0">
                                        Your private toolkit for career transition, mindset wellness, and financial planning
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
                                            <span className="relative z-10">JOIN THE WAITING LIST</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-gray/20 to-light-gray/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </button>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What is the pivot paths app section */}
                <div className="py-16 bg-light-gray">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollAnimation>
                            <div className="text-center mb-12">
                                <h2 className="text-bold text-5xl font-bold text-white mb-8">What is the Pivot Paths App?</h2>
                                <p className="font-montserrat text-xl text-white max-w-3xl mx-auto">
                                    Your life, beyond the stage. Curated just for dancers. Navigate your next act with confidence with our all-in-one toolkit for career, mindset, and financial wellness.
                                </p>
                            </div>
                        </ScrollAnimation>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Left Column - Features */}
                            <div className="space-y-6">
                                {appFeatures.map((feature, index) => (
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

                            {/* Right Column - Mobile Mockup */}
                            <div
                                className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                    } flex justify-center`}
                            >
                                <div className="relative flex flex-col mt-[-1px]">
                                    <div className="relative">
                                        {/* Phone Frame */}
                                        <div className="relative w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl overflow-hidden">

                                            {/* COMING SOON Ribbon - sits on top of the entire phone */}
                                            <div className="absolute -right-10 top-9 bg-gradient-to-r from-yellow-400 to-yellow-500 text-dark-gray font-bold text-xs md:text-sm py-1 px-10 transform rotate-45 z-40 shadow-lg">
                                                COMING SOON
                                            </div>

                                            {/* Status Bar */}
                                            <div className="bg-gray-50 h-8 flex items-center justify-between px-6 text-xs font-medium text-gray-900 rounded-t-[2.5rem] relative z-10">
                                                <span>9:41</span>
                                                <div className="flex items-center space-x-1">
                                                    <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                                                    <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                                                    <div className="w-6 h-3 bg-green-500 rounded-sm"></div>
                                                </div>
                                            </div>

                                            {/* Screen Container */}
                                            <div
                                                className="relative w-full overflow-hidden rounded-b-[2.5rem] bg-slate-600"
                                                style={{ height: "calc(100% - 2rem)", backgroundColor: "#647C90" }}
                                            >
                                                <div className="relative w-full h-full">
                                                    {screens.map((screen, index) => (
                                                        <div
                                                            key={index}
                                                            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out bg-slate-600 ${index === currentScreen
                                                                ? "translate-x-0 opacity-100"
                                                                : index < currentScreen
                                                                    ? "-translate-x-full opacity-0"
                                                                    : "translate-x-full opacity-0"
                                                                }`}
                                                            style={{ backgroundColor: "#647C90" }}
                                                        >
                                                            <div className="flex flex-col h-full w-full">
                                                                <div className="p-6 text-center flex-shrink-0" style={{ backgroundColor: "#647C90" }}>
                                                                    <h2 className="text-2xl font-bold text-white mb-2">{screen.title}</h2>
                                                                    <p className="text-white text-sm opacity-90">{screen.subtitle}</p>
                                                                </div>

                                                                {/* Screen Content */}
                                                                <div className="flex-1 overflow-hidden">{screen.content}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Home Indicator */}
                                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* App Categories Section */}
                <div className="py-16 bg-beige">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollAnimation>
                            <div className="text-center mb-16">
                                <div className="flex items-center justify-center mb-4">
                                    <h2 className="text-bold text-5xl font-bold text-black">Your Personalized Roadmap</h2>
                                </div>
                                <p className="font-montserrat text-lg text-brown-gray mt-2">
                                    Explore curated "paths" designed to build your skills, confidence, and future—all in one place.
                                </p>
                            </div>
                        </ScrollAnimation>
                        {/* Timeline */}
                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute w-0.5 h-full bg-[#928490] top-0 left-1/2 transform -translate-x-1/2"></div>

                            {appCategories.map((item, index) => (
                                <ScrollAnimation key={index} delay={index * 200}>
                                    <div className="relative mb-12 md:mb-16">
                                        {/* Timeline Card */}
                                        <div
                                            className={`relative flex items-center ${index % 2 === 0
                                                ? 'flex-row md:justify-start'
                                                : 'flex-row-reverse md:justify-end'
                                                }`}
                                        >
                                            <div className="w-full md:w-1/2 px-4 md:px-8 flex items-center">
                                                <div
                                                    className="bg-white p-6 rounded-2xl shadow-lg border text-center hover:shadow-xl transition-all duration-300 group relative z-10 w-full"
                                                    style={{ borderColor: "#E2DED0" }}
                                                >
                                                    <div className="flex flex-col items-center mb-3">
                                                        <div
                                                            className="w-12 h-12 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                                                            style={{ backgroundColor: "#928490" }}
                                                        >
                                                            <item.icon className="w-6 h-6 text-white" />
                                                        </div>
                                                        <h3
                                                            className="text-xl font-bold"
                                                            style={{ color: "#647C90" }}
                                                        >
                                                            {item.title}
                                                        </h3>
                                                    </div>
                                                    <p className="text-sm" style={{ color: "#647C90" }}>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Timeline Dot and Connector */}
                                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
                                                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300 z-20">
                                                    <div className="w-2 h-2 bg-[#647C90] rounded-full"></div>
                                                </div>
                                                {/* Connector Line */}
                                                <div
                                                    className={`hidden md:block absolute h-0.5 bg-[#928490] z-10 top-1/2 ${index % 2 === 0 ? 'left-full' : 'right-full'
                                                        } w-[calc(50%-2rem)]`}
                                                ></div>
                                            </div>
                                            {/* Empty Space for Desktop Alternating Layout */}
                                            <div className="hidden md:block w-1/2"></div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Privacy Section */}
                <div className="py-16 bg-light-gray">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollAnimation>
                            <div className="text-center mb-16">
                                <h2 className="text-bold text-5xl font-bold text-white mb-4">Your Journey. Your Data. Absolutely Private.</h2>
                                <p className="font-montserrat text-xl text-white max-w-3xl mx-auto">
                                    In a world where everything is tracked and sold, we built a sanctuary for your personal growth.
                                </p>
                            </div>
                        </ScrollAnimation>

                        <div className="grid md:grid-cols-3 gap-8">
                            {privacyFeatures.map((feature, index) => (
                                <ScrollAnimation key={index} delay={index * 300}>
                                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-gray text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
                                        <div className="w-16 h-16 rounded-full bg-beige border-2 border-purple-gray flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <feature.icon className="w-8 h-8 text-purple-gray" />
                                        </div>
                                        <h3 className="font-merriweather text-2xl font-bold text-black mb-4">{feature.title}</h3>
                                        <p className="font-montserrat text-brown-gray leading-relaxed flex-grow">{feature.description}</p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>

                        <ScrollAnimation delay={600}>
                            <div className="bg-white rounded-2xl p-8 mt-12 text-center border border-purple-gray">
                                <p className="font-montserrat text-brown-gray italic">
                                    "No data is saved to the cloud or transmitted to any external servers. This means you have complete control over your information, and your privacy is fully protected. Your progress is only accessible on your device."
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>

                {/* Final CTA Section */}
                <div className="text-center py-16 bg-beige relative overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-2xl shadow-lg mx-auto max-w-4xl p-8 md:p-12 border-2 border-light-gray">
                            <ScrollAnimation delay={0}>
                                <div className="flex items-center justify-center mb-4">
                                    <h2 className="text-bold text-4xl md:text-5xl font-bold text-black text-center">
                                        Take the first step on your new path
                                    </h2>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation delay={300}>
                                <p className="font-montserrat text-brown-gray text-lg mb-8 max-w-2xl mx-auto">
                                    Download Pivot Paths and start building your future today—with complete privacy and purpose.
                                </p>
                            </ScrollAnimation>

                            <ScrollAnimation delay={500}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-8">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="flex items-center justify-start">
                                            <CheckCircle className="w-6 h-6 text-purple-gray mr-3 flex-shrink-0" />
                                            <span className="font-montserrat text-black">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation delay={700}>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                                    <button
                                        onClick={() => window.open('#', '_blank', 'noopener,noreferrer')}
                                        className="bg-light-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-4 px-10 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                                    >
                                        <span className="relative z-10">JOIN THE WAITING LIST</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-gray/20 to-light-gray/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </button>
                                </div>
                            </ScrollAnimation>

                            {/* Questions Section */}
                            <ScrollAnimation delay={900}>
                                <div className="border-t border-gray-200 pt-8 mt-8">
                                    <div className="text-center">
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
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PivotPathsPage;