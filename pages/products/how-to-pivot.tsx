import Image from 'next/image';
import { Product, ebookPaymentUrl } from '../../data/products';
import { Star, Clock, ArrowLeft, CheckCircle, Users, Globe, Award, Target, Heart, Shield, TrendingUp, Calendar, MapPin, Play, Book, Brain, Compass } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

const product: Product = {
    id: 4,
    name: "How to Pivot",
    subtitle: "EBOOK",
    description:
        `Feeling stuck in your dance career?\n\nNot sure what else is out there for you beyond the stage?\n\nReady to take the leap but unsure where to start?\n\nIntroducing "How to Pivot: Navigating Career Change for Professional Dancers".\n\nPart self-help book and part action-focused career resource, this ebook takes you through all the things you wish someone would've told you before you started your career as a professional dancer.\n\nIf you already lived your dream and find yourself wondering "what now?", this dancer-specific guide is for you.\n\nBrought to you by the founder of Pivot for Dancers, "How to Pivot" is an actionable career change guide tailored specifically for professional dancers.\n\nKaylee Randall brings together concepts from psychology and philosophy, merging them with her own experience as a professional dancer who successfully changed careers.\n\nInside, you'll find:\n* 10 chapters of taboo, dancer-specific topics no one else is talking about\n* Deep dive into the psychological and philosophical concepts that can guide you through a career change\n* Mindset shifts and taboo topics to connect to what you truly want in your next adventure\n* Tools and resources to help you understand your transferable skills and build a muggle resume\n* A clear, focused action plan to help you step onto your next stage\n\nYou'll always be a dancer. No one can take that away. But if you're feeling pulled to something more, you're not alone. Get prepared for all the exciting things to come and reach your full potential with the help of "How to Pivot".`,
    price: 50,
    originalPrice: 125,
    url: ebookPaymentUrl,
    img: "/assets/how-to-pivot-ebook.png",
    category: "Ebook",
    duration: "Self-Paced",
    rating: 5.0,
    reviews: 24,
    features: [
        "10 Comprehensive Chapters",
        "Psychology & Philosophy Concepts",
        "Transferable Skills Assessment",
        "Clear Action Plan"
    ],
    icon: Book,
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

    // Extract numeric value from the number string (e.g., "50+" becomes 50)
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

const HowToPivotPage = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const BASE_PATH = process.env.PUBLIC_URL || "";

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        { number: "10", label: "Comprehensive Chapters", icon: Book },
        { number: "24+", label: "5-Star Reviews", icon: Star },
        { number: "100+", label: "Action Steps", icon: Target },
        { number: "15+", label: "Tools & Resources", icon: Award }
    ];

    const testimonials = [
        {
            name: "Sarah Martinez",
            title: "Former Principal Dancer",
            avatar: "/assets/sarah-martinez.jpeg",
            text: "This book gave me the clarity I needed to transition from principal dancer to arts administration. Kaylee's insights into the psychological aspects of career change were eye-opening and incredibly helpful."
        },
        {
            name: "Marcus Chen",
            title: "Ex-Broadway Performer",
            avatar: "/assets/marcus-chen.jpeg",
            text: "How to Pivot addresses all the taboo topics that dancers face but no one talks about. It's honest, practical, and gave me the confidence to pursue a career in tech. Highly recommend!"
        },
        {
            name: "Emma Rodriguez",
            title: "Dance Company Alum",
            avatar: "/assets/emma-rodriguez.jpeg",
            text: "The transferable skills section was a game-changer for me. I never realized how valuable my dance background was until I read this book. It helped me land my dream job in project management."
        }
    ];

    const journeyItems = [
        {
            title: "Early Dance Career",
            description: "Started dancing at age 3 in Florida, training on the competition circuit",
            icon: Star
        },
        {
            title: "Professional Dancer",
            description: "Almost a decade performing full time with Universal Studios and Royal Caribbean",
            icon: Award
        },
        {
            title: "The Pivot",
            description: "In 2018, when burnout set in and priorities shifted, took the last bow",
            icon: TrendingUp
        },
        {
            title: "New Beginnings",
            description: "Started freelance business, moved to Australia, and transitioned to corporate tech",
            icon: TrendingUp
        },
        {
            title: "Founded Pivot for Dancers",
            description: "Launched in 2020 to help other dancers navigate their career transitions",
            icon: Users
        }
    ];

    const newJourney = [
        {
            title: "Self-Discovery",
            description: (
                <>
                    Explore the <span className="font-bold" style={{ color: "#928490" }}>
                        psychological concepts
                    </span> that guide career transitions and discover what truly drives you beyond the stage through{" "}
                    <span className="font-bold" style={{ color: "#928490" }}>
                        deep introspection
                    </span>
                    .
                </>
            ),
            icon: Brain
        },
        {
            title: "Skills Translation",
            description: (
                <>
                    Learn how to{" "}
                    <span className="font-bold" style={{ color: "#928490" }}>
                        identify and articulate
                    </span>{" "}
                    your transferable skills and{" "}
                    <span className="font-bold" style={{ color: "#928490" }}>
                        build a compelling resume
                    </span>{" "}
                    that speaks to non-dance employers.
                </>
            ),
            icon: Target
        },
        {
            title: "Action Planning",
            description: (
                <>
                    Get a{" "}
                    <span className="font-bold" style={{ color: "#928490" }}>
                        clear, focused action plan
                    </span>{" "}
                    with practical steps to help you transition confidently and{" "}
                    <span className="font-bold" style={{ color: "#928490" }}>
                        reach your full potential
                    </span>{" "}
                    in your next career.
                </>
            ),
            icon: Compass
        }
    ];

    const features = [
        {
            title: "Taboo Topics",
            description: "10 chapters covering the dancer-specific topics no one else is talking about, including financial realities, identity beyond dance, and career transition fears.",
            icon: Heart,
            image: "/assets/ballet-female-no-bg.jpeg"
        },
        {
            title: "Psychology & Philosophy",
            description: "Deep dive into psychological and philosophical concepts that can guide you through a career change, merging academic insights with real-world experience.",
            icon: Brain,
            image: "/assets/contemporary-female-no-bg.jpeg"
        },
        {
            title: "Practical Tools",
            description: "Actionable tools and resources to help you understand your transferable skills, build a professional resume, and create a clear action plan.",
            icon: Target,
            image: "/assets/commercial-male-no-bg.jpeg"
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
                                    <div className="inline-flex items-center justify-center mb-4 px-4 py-2 bg-light-gray rounded-full border border-purple-gray/20">
                                        <span className="text-sm font-semibold text-white tracking-wider uppercase">EBOOK</span>
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-bold text-black">
                                        How to Pivot
                                    </h1>
                                </ScrollAnimation>
                                <ScrollAnimation delay={300}>
                                    <br></br>
                                    <p className="font-montserrat text-xl text-brown-gray max-w-3xl mx-auto mb-8 px-4 md:px-0">
                                        Navigating Career Change for Professional Dancers
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

                {/* What is How to Pivot section */}
                <div className="py-16 bg-light-gray">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollAnimation>
                            <div className="text-center mb-12">
                                <h2 className="text-bold text-5xl font-bold text-white mb-8">What is How to Pivot?</h2>
                                <p className="font-montserrat text-xl text-white max-w-3xl mx-auto">
                                    A comprehensive career change guide tailored specifically for professional dancers navigating their next chapter.
                                </p>
                            </div>
                        </ScrollAnimation>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Text Content - Left Column */}
                            <div>
                                <div className="space-y-6">
                                    <ScrollAnimation delay={0}>
                                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-gray/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                            <div className="flex items-start">
                                                <div className="w-6 h-6 rounded-full bg-purple-gray flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <p className="font-montserrat text-black leading-relaxed">
                                                    Part <span className="font-bold" style={{ color: "#647C90" }}>self-help book</span> and part <span className="font-bold" style={{ color: "#647C90" }}>action-focused career resource</span>, this ebook takes you through all the things you wish someone would've told you before you started your career as a professional dancer.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollAnimation>

                                    <ScrollAnimation delay={200}>
                                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-gray/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                            <div className="flex items-start">
                                                <div className="w-6 h-6 rounded-full bg-purple-gray flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <p className="font-montserrat text-black leading-relaxed">
                                                    If you already lived your dream and find yourself wondering "what now?", this <span className="font-bold" style={{ color: "#647C90" }}>dancer-specific guide</span> is for you.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollAnimation>

                                    <ScrollAnimation delay={400}>
                                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-gray/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                            <div className="flex items-start">
                                                <div className="w-6 h-6 rounded-full bg-purple-gray flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <p className="font-montserrat text-black leading-relaxed">
                                                    Brought to you by the founder of Pivot for Dancers, "How to Pivot" is an <span className="font-bold" style={{ color: "#647C90" }}>actionable career change guide</span> tailored specifically for professional dancers.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>

                            { /* Right Column */}
                            <div
                                className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                    }`}
                            >
                                <div className="relative w-full h-[500px] rounded-3xl shadow-2xl overflow-hidden bg-white">
                                    <Image
                                        src="/assets/how-to-pivot-ebook.png"
                                        alt="How to Pivot eBook"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Journey Section */}
                <div className="py-16 bg-beige">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollAnimation>
                            <div className="text-center mb-16">
                                <div className="flex items-center justify-center mb-4">
                                    <h2 className="text-bold text-5xl font-bold text-black">Your Career Change Journey</h2>
                                </div>
                                <p className="font-montserrat text-lg text-brown-gray mt-2">A comprehensive guide that takes you from feeling stuck to stepping confidently onto your next stage.</p>
                            </div>
                        </ScrollAnimation>
                        {/* Timeline */}
                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute w-0.5 h-full bg-[#928490] top-0 left-1/2 transform -translate-x-1/2"></div>

                            {newJourney.map((item, index) => (
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
                                                    <p className="text-sm" style={{ color: "#746C70" }}>
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

                {/* First CTA Section */}
                <div className="text-center py-16 bg-light-gray relative overflow-hidden px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-lg mx-auto max-w-4xl p-8 md:p-12 border-2 border-beige">
                        <ScrollAnimation delay={0}>
                            <div className="flex items-center justify-center mb-4">
                                <h2 className="text-bold text-5xl font-bold text-black">
                                    Ready to Step Onto Your Next Stage?
                                </h2>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation delay={300}>
                            <p className="font-montserrat text-lg text-brown-gray max-w-2xl mx-auto mb-8">
                                Get instant access to this comprehensive ebook and start your career transformation today. You'll always be a dancer, but you can be so much more.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation delay={500}>
                            <div className="flex justify-center items-center gap-4 mb-8">
                                <span className="font-merriweather text-5xl font-bold text-dark-gray">$6.99</span>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation delay={700}>
                            <button
                                onClick={() => window.open(product.url, '_blank', 'noopener,noreferrer')}
                                className="bg-light-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-4 px-10 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                            >
                                <span className="relative z-10">GET THE EBOOK</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-gray/20 to-light-gray/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </ScrollAnimation>
                    </div>
                </div>

                <div className="bg-beige py-20 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <ScrollAnimation>
                            <div className="text-center mb-16">
                                <div className="flex items-center justify-center mb-6 relative">
                                    <h2 className="text-bold text-5xl font-bold text-black tracking-tight relative inline-block">
                                        What's Inside?
                                    </h2>
                                </div>
                                <p className="font-montserrat text-xl text-brown-gray mt-4 max-w-3xl mx-auto leading-relaxed">
                                    Part self-help book and part, action-focused career resource tailored specifically for professional dancers.
                                </p>
                            </div>
                        </ScrollAnimation>
                        <div className="grid md:grid-cols-3 gap-10">
                            {features.map((feature, index) => (
                                <ScrollAnimation key={index} delay={index * 300}>
                                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden text-center border-2 border-purple-gray transition-all duration-500 hover:shadow-xl hover:-translate-y-3 flex flex-col h-full">

                                        {/* Icon with elegant background */}
                                        <div className="relative pt-12 pb-6 z-20">
                                            <div className="w-20 h-20 rounded-full bg-purple-gray flex items-center justify-center mx-auto shadow-md border-4 border-white transition-transform duration-500 group-hover:scale-110">
                                                <feature.icon className="w-9 h-9 text-white" />
                                            </div>
                                        </div>

                                        <div className="px-7 pb-10 flex-1 flex flex-col">
                                            <div className="flex-1">
                                                <h3 className="font-bold text-2xl text-black mb-7 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-14 after:h-1.5 after:bg-purple-gray after:rounded-full after:transition-all after:duration-500 group-hover:after:w-20">
                                                    {feature.title}
                                                </h3>

                                                <p className="font-montserrat text-black text-center leading-relaxed text-lg mb-6">
                                                    {feature.description}
                                                </p>
                                            </div>

                                            {/* Subtle badge at bottom of card */}
                                            <div className="mt-auto pt-4 border-t border-light-gray border-opacity-30">
                                                <span className="inline-block text-xs font-montserrat text-white bg-light-gray px-3 py-1 rounded-full">
                                                    Dancer-Specific
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Final CTA Section */}
                <div className="relative overflow-hidden bg-light-gray py-20 px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl rounded-3xl border-2 border-beige bg-white shadow-2xl overflow-hidden">
                        <div className="flex flex-col items-center px-6 py-12 md:px-12">

                            {/* Heading */}
                            <ScrollAnimation delay={0}>
                                <h2 className="mx-auto mb-8 max-w-2xl text-center text-4xl font-extrabold leading-tight text-black md:text-5xl">
                                    You'll Always Be a Dancer
                                </h2>
                            </ScrollAnimation>

                            {/* Offer Block */}
                            <ScrollAnimation delay={300}>
                                <div className="flex flex-col items-center text-center">
                                    <h3 className="mb-2 text-2xl font-bold text-gray-800">Special Offer</h3>
                                    <div className="flex items-center justify-center gap-4 mb-4">
                                        <span className="text-4xl font-bold text-purple-gray">$6.00</span>
                                        <span className="text-lg text-gray-500 line-through">$10.99</span>
                                        <span className="bg-purple-gray text-white text-sm font-semibold px-3 py-1 rounded-full">
                                            45% OFF
                                        </span>
                                    </div>
                                    <p className="mb-8 text-gray-600">One-time payment, lifetime access</p>
                                </div>
                            </ScrollAnimation>

                            {/* Checklist */}
                            <ScrollAnimation delay={500}>
                                <div className="mx-auto mb-10 max-w-xl space-y-4 text-left">
                                    <p className="flex items-start text-lg">
                                        <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-purple-gray" />
                                        10 Taboo Topics No One Talks About
                                    </p>
                                    <p className="flex items-start text-lg">
                                        <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-purple-gray" />
                                        Psychology & Philosophy Concepts
                                    </p>
                                    <p className="flex items-start text-lg">
                                        <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-purple-gray" />
                                        Transferable Skills Assessment
                                    </p>
                                    <p className="flex items-start text-lg">
                                        <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-purple-gray" />
                                        Professional Resume Building
                                    </p>
                                    <p className="flex items-start text-lg">
                                        <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-purple-gray" />
                                        Clear, Focused Action Plan
                                    </p>
                                </div>
                            </ScrollAnimation>

                            {/* CTA Button */}
                            <ScrollAnimation delay={700}>
                                <button
                                    onClick={() =>
                                        window.open(product.url, "_blank", "noopener,noreferrer")
                                    }
                                    className="bg-light-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-4 px-10 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                                >
                                    <span className="relative z-10">GET THE EBOOK</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-gray/20 to-light-gray/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HowToPivotPage;