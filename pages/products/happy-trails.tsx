import Image from 'next/image';
import { Product, coursePaymentUrl } from '../../data/products';
import { Star, Clock, ArrowLeft, CheckCircle, Users, Globe, Award, Target, Heart, Shield, TrendingUp, Calendar, MapPin, Play } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

const product: Product = {
    id: 3,
    name: "Happy Trails",
    subtitle: "DIGITAL COURSE",
    description:
        `What is Happy Trails?\n\nHappy Trails is a self-paced, 4-part\nmini course named after the famous\nBroadway send-off\n\n\nIt's an in-depth 5-year career change\nroadmap guided by former pro\ndancer and founder of Pivot for\nDancers, Kaylee Randall\n\n\nYou'll get a detailed, step-by-step plan\nfor your career transition, tailored to\nyour dance experience\n\n\nPlus, the course gives you access to\nexclusive resources including:\n50 Non-Dance Job Ideas\nEditable Canva Resume Template\nDancer-Specific Interview Script\n5-Year Career Change Roadmap\n\nHappy Trails takes you through\nsteps you can take while you're\nstill working as a professional\ndancer for the first year of your\npivot journey.\n\nWhile Dancing\n\nWhen you're able to start\nspecializing in your new career,\nwe'll guide you through\nmindsets, practicality, and how\nto rediscover your love of\ndance.\n\nSpecialize\n\nOnce you land an entry-level\nrole in your new career, we'll\nguide through how to cope\nand continue to grow in your\njob and in your life.\n\nEntry-Level\n\nHappy Trails guides you through a dancer-focused roadmap to help you pivot with\nconfidence.\n\nTake your next step with confidence.\n\nHappy Trails is the roadmap you've been waiting for.`,
    price: 75,
    originalPrice: 199,
    url: coursePaymentUrl,
    img: "/assets/happy-trails-mini-course.png",
    category: "Online Course",
    duration: "Self-Paced",
    rating: 5.0,
    reviews: 16,
    features: [
        "50 Non-Dance Job Ideas",
        "Editable Canva Resume Template",
        "Dancer-Specific Interview Script",
        "5-Year Career Change Roadmap"
    ],
    icon: Clock,
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

const HappyTrailsPage = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const BASE_PATH = process.env.PUBLIC_URL || "";

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        { number: "4", label: "Comprehensive Modules", icon: Award },
        { number: "50+", label: "Job Ideas", icon: Target },
        { number: "5", label: "Year Roadmap", icon: MapPin },
        { number: "16+", label: "5-Star Reviews", icon: Star }
    ];

    const testimonials = [
        {
            name: "Alexa Schmidt",
            title: "Dancer & Educator",
            avatar: "/assets/alexa-schmidt.jpeg",
            text: "I cannot recommend this course enough to any dancer who is looking to make a career change but isn't sure where to start. Kaylee has created a resource that is not only incredibly informative but also encouraging and inspiring. I feel so much more prepared and confident in myself as I take this next step in my career!"
        },
        {
            name: "Kelsey Glennon",
            title: "Dancer & Choreographer",
            avatar: "/assets/kelsey-glennon.jpeg",
            text: "This course is a must for any dancer who is starting to think about what's next. The resources and guidance are invaluable, and Kaylee's approach is so understanding and supportive. I finally feel like I have a clear path forward."
        },
        {
            name: "Alex Perry",
            title: "Dancer & Entrepreneur",
            avatar: "/assets/alex-perry.jpeg",
            text: "Kaylee has created an incredible resource for the dance community. This course is comprehensive, actionable, and tailored to the unique challenges and opportunities that dancers face when transitioning to a new career. It's a game-changer."
        }
    ];

    const timelineItems = [
        {
            title: "While Dancing",
            description: (
                <>
                    Happy Trails takes you through steps <span className="font-bold" style={{ color: "#928490" }}>
                        you can take
                    </span> while you're still working as a professional dancer for the first year of{" "}
                    <span className="font-bold" style={{ color: "#928490" }}>
                        your pivot journey
                    </span>
                    .
                </>
            ),
            icon: Heart
        },
        {
            title: "Entry-Level",
            description: (
                <>
                    Once you land an entry-level role in your new career,{" "}
                    <span className="font-bold" style={{ color: "#928490" }}>
                        we'll guide you
                    </span>{" "}
                    through how to cope and{" "}
                    <span className="font-bold" style={{ color: "#928490" }}>
                        continue to grow
                    </span>{" "}
                    in your job and in your life.
                </>
            ),
            icon: Target
        },
        {
            title: "Specialize",
            description: (
                <>
                    When you're able to start specializing in your new career,{" "}
                    <span className="font-bold" style={{ color: "#928490" }}>
                        we'll guide you
                    </span>{" "}
                    through mindsets, practicality, and how to{" "}
                    <span className="font-bold" style={{ color: "#928490" }}>
                        rediscover your love of dance
                    </span>
                    .
                </>
            ),
            icon: TrendingUp
        }
    ];

    const features = [
        {
            title: "Mindset Shifts",
            description: "A huge part of your career change will be changing your mindset. We help you prepare for the mental shifts required to successfully pivot.",
            icon: Heart,
            image: "/assets/ballet-female-no-bg.jpeg"
        },
        {
            title: "Practical Knowledge",
            description: "From the job search to finances, we offer the practical knowledge that no one likes to talk about in the arts and entertainment industries.",
            icon: Shield,
            image: "/assets/contemporary-female-no-bg.jpeg"
        },
        {
            title: "Tailored Resources",
            description: "More than your average career change course, Happy Trails is dancer-specific and tailored to the career needs of professional dancers.",
            icon: Award,
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
                                        <span className="text-sm font-semibold text-white tracking-wider uppercase">DIGITAL COURSE</span>
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-bold text-black">
                                        Happy Trails
                                    </h1>
                                </ScrollAnimation>
                                <ScrollAnimation delay={300}>
                                    <br></br>
                                    <p className="font-montserrat text-xl text-black max-w-3xl mx-auto mb-8 px-4 md:px-0">
                                        A course to plan your pivot, brought to you by Pivot for Dancers
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

                {/* What is Happy trails sections */}
                <div className="py-16 bg-light-gray">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-4">
                            <h2 className="text-bold text-center text-5xl font-bold text-white">What is Happy Trails?</h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Column */}
                            <div>
                                <div className="space-y-6">
                                    <ScrollAnimation delay={0}>
                                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-gray/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                            <div className="flex items-start">
                                                <div className="w-6 h-6 rounded-full bg-purple-gray flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <p className="font-montserrat text-black leading-relaxed">
                                                    Pivot for Dancers offers <span className="font-bold" style={{ color: "#647C90" }}>career change resources</span> for professional dancers. Our mission is to help you find meaningful work off the stage. Run by former <span className="font-bold" style={{ color: "#647C90" }}>professional dancers</span> who have successfully changed careers.
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
                                                    We're here to share what we've learned about making a pivot with our growing community of <span className="font-bold" style={{ color: "#647C90" }}>thousands of fellow dancers</span> just like you.
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
                                                    Whether you've suffered an injury, been diagnosed with an illness, or simply found new dreams to pursue, you're <span className="font-bold" style={{ color: "#647C90" }}>not alone</span> in wanting to change careers as a professional dancer.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>

                            {/* Right Column - Updated to use Image instead of Video */}
                            <div className="relative w-full max-w-md mx-auto">
                                <div className="relative w-full rounded-3xl shadow-2xl overflow-hidden">
                                    <Image
                                        src="/assets/happy-trails-mini-course.png"
                                        alt="Happy Trails Mini Course"
                                        width={500}
                                        height={600}
                                        className="w-full h-auto object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* The Pivot Journey Section */}
                <div className="py-16 bg-beige">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollAnimation>
                            <div className="text-center mb-16">
                                <div className="flex items-center justify-center mb-4">
                                    <h2 className="text-bold text-5xl font-bold text-black">5-Year Career Change Roadmap</h2>
                                </div>
                                <p className="font-montserrat text-lg text-brown-gray mt-2">Happy Trails guides you through a dancer-focused roadmap to help you pivot with confidence.</p>
                            </div>
                        </ScrollAnimation>
                        {/* Timeline */}
                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute w-0.5 h-full bg-white/40 top-0 left-1/2 transform -translate-x-1/2"></div>

                            {timelineItems.map((item, index) => (
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
                                                    className={`hidden md:block absolute h-0.5 bg-white/40 z-10 top-1/2 ${index % 2 === 0 ? 'left-full' : 'right-full'
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
                                    Take Your Next Step with Confidence
                                </h2>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation delay={300}>
                            <p className="font-montserrat text-lg text-brown-gray max-w-2xl mx-auto mb-8">
                                Happy Trails is the roadmap you've been waiting for. Get instant access to the course and all the resources for a one-time payment.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation delay={500}>
                            <div className="flex justify-center items-center gap-4 mb-8">
                                <span className="font-merriweather text-5xl font-bold text-dark-gray">$75</span>
                                <span className="font-merriweather text-2xl text-brown-gray line-through">$199</span>
                                <span className="bg-purple-gray text-white text-sm font-semibold px-3 py-1 rounded-full">
                                    62% OFF
                                </span>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation delay={700}>
                            <button
                                onClick={() => window.open(product.url, '_blank', 'noopener,noreferrer')}
                                className="bg-light-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-4 px-10 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                            >
                                <span className="relative z-10">START NOW</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-gray/20 to-light-gray/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </ScrollAnimation>
                    </div>
                </div>

                {/* What's inside Section */}
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
                                    Happy Trails guides you through a dancer-focused roadmap to help you pivot with confidence.
                                </p>
                            </div>
                        </ScrollAnimation>
                        <div className="grid md:grid-cols-3 gap-10">
                            {features.map((feature, index) => (
                                <ScrollAnimation key={index} delay={index * 300}>
                                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden text-center border-2 border-purple-gray transition-all duration-500 hover:shadow-xl hover:-translate-y-3 min-h-[360px] flex flex-col relative">


                                        {/* Icon with elegant background */}
                                        <div className="relative pt-12 pb-6 z-20">
                                            <div className="w-20 h-20 rounded-full bg-purple-gray flex items-center justify-center mx-auto shadow-md border-4 border-white transition-transform duration-500 group-hover:scale-110">
                                                <feature.icon className="w-9 h-9 text-white" />
                                            </div>
                                        </div>

                                        <div className="px-7 pb-10 flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-bold text-2xl text-black mb-7 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-14 after:h-1.5 after:bg-purple-gray after:rounded-full after:transition-all after:duration-500 group-hover:after:w-20">
                                                    {feature.title}
                                                </h3>

                                                <p className="font-montserrat text-black text-center leading-relaxed text-lg">
                                                    {feature.title === "Mindset Shifts" ? (
                                                        <>
                                                            A <span className="font-semibold">huge part</span> of your career change will be changing your mindset. We help you prepare for the mental shifts required to successfully pivot.
                                                        </>
                                                    ) : feature.title === "Practical Knowledge" ? (
                                                        <>
                                                            From the <span className="font-semibold">job search to finances</span>, we offer the practical knowledge that no one likes to talk about in the arts and entertainment industries.
                                                        </>
                                                    ) : feature.title === "Tailored Resources" ? (
                                                        <>
                                                            More than your average career change course, Happy Trails is <span className="font-semibold">dancer-specific</span> and tailored to the career needs of professional dancers.
                                                        </>
                                                    ) : (
                                                        feature.description
                                                    )}
                                                </p>
                                            </div>

                                            {/* Subtle badge at bottom of card */}
                                            <div className="mt-6 pt-4 border-t border-light-gray border-opacity-30">
                                                <span className="inline-block text-xs font-montserrat text-white bg-light-gray px-3 py-1 rounded-full">
                                                    Dancer-Focused
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Final CTA */}
                <div className="relative overflow-hidden bg-light-gray py-20 px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl rounded-3xl border-2 border-beige bg-white shadow-2xl overflow-hidden">
                        <div className="flex flex-col items-center px-6 py-12 md:px-12">

                            {/* Heading */}
                            <ScrollAnimation delay={0}>
                                <h2 className="mx-auto mb-8 max-w-2xl text-center text-4xl font-extrabold leading-tight text-black md:text-5xl">
                                    Sing Happy Trails and move on with confidence
                                </h2>
                            </ScrollAnimation>

                            {/* Offer Image + Pricing */}
                            <ScrollAnimation delay={300}>
                                <div className="flex flex-col items-center text-center">
                                    <h3 className="mb-2 text-2xl font-bold text-gray-800">Special Offer</h3>
                                    <div className="flex items-center justify-center gap-4 mb-4">
                                        <span className="text-4xl font-bold text-purple-gray">$75</span>
                                        <span className="text-lg text-gray-500 line-through">$199</span>
                                        <span className="bg-purple-gray text-white text-sm font-semibold px-3 py-1 rounded-full">
                                            62% OFF
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
                                        Self-Paced Online Course
                                    </p>
                                    <p className="flex items-start text-lg">
                                        <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-purple-gray" />
                                        5-Year Career Change Roadmap
                                    </p>
                                    <p className="flex items-start text-lg">
                                        <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-purple-gray" />
                                        50 Non-Dance Job Ideas
                                    </p>
                                    <p className="flex items-start text-lg">
                                        <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-purple-gray" />
                                        Canva Resume Template
                                    </p>
                                    <p className="flex items-start text-lg">
                                        <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-purple-gray" />
                                        Dancer-Specific Interview Script
                                    </p>
                                </div>
                            </ScrollAnimation>

                            {/* CTA Button */}
                            <ScrollAnimation delay={700}>
                                <button
                                    onClick={() => window.open(product.url, '_blank', 'noopener,noreferrer')}
                                    className="bg-light-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-4 px-10 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                                >
                                    <span className="relative z-10">GET STARTED NOW</span>
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

export default HappyTrailsPage;