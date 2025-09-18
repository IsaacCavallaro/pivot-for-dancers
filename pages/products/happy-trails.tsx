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
                className="rounded-2xl p-4 md:p-3 shadow-lg flex flex-col items-center justify-center h-full relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{
                    backgroundColor: backgroundColor,
                    border: `2px solid ${borderColor}`,
                }}
            >
                <div
                    className="w-8 h-8 md:w-7 md:h-7 rounded-full flex items-center justify-center mb-2 md:mb-1 relative z-10"
                    style={{ backgroundColor: iconColor }}
                >
                    <IconComponent className="w-5 h-5 md:w-4 md:h-4 text-white" />
                </div>

                <div className="text-xl md:text-lg font-bold mb-1 relative z-10" style={{ color: textColor }}>
                    {isVisible ? (
                        <>
                            <Counter end={numericValue} duration={2000} />
                            {number.includes("+") && "+"}
                        </>
                    ) : (
                        "0"
                    )}
                </div>
                <div className="text-xs leading-tight relative z-10" style={{ color: textColor }}>
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
            description: "Happy Trails takes you through steps you can take while you're still working as a professional dancer for the first year of your pivot journey.",
            icon: Heart
        },
        {
            title: "Entry-Level",
            description: "Once you land an entry-level role in your new career, we'll guide through how to cope and continue to grow in your job and in your life.",
            icon: Target
        },
        {
            title: "Specialize",
            description: "When you're able to start specializing in your new career, we'll guide you through mindsets, practicality, and how to rediscover your love of dance.",
            icon: TrendingUp
        }
    ];

    const features = [
        {
            title: "Mindset Shifts",
            description: "A huge part of your career change will be changing your mindset. We help you prepare for the mental shifts required to successfully pivot.",
            icon: Heart,
            image: "/assets/ballet-female.jpeg"
        },
        {
            title: "Practical Knowledge",
            description: "From the job search to finances, we offer the practical knowledge that no one likes to talk about in the arts and entertainment industries.",
            icon: Shield,
            image: "/assets/contemporary-female.jpeg"
        },
        {
            title: "Tailored Resources",
            description: "More than your average career change course, Happy Trails is dancer-specific and tailored to the career needs of professional dancers.",
            icon: Award,
            image: "/assets/commercial-male.jpeg"
        }
    ];

    return (
        <div className="bg-beige min-h-screen">
            <Navigation />
            <div className="bg-beige">
                {/* Hero Section */}
                <div className="text-center py-16 md:py-24 bg-beige">
                    <ScrollAnimation delay={0}>
                        <div className="flex justify-center mb-6">
                            <Image
                                src={`${BASE_PATH}/assets/logo.png`}
                                alt="Pivot for Dancers Logo"
                                width={120}
                                height={120}
                                className="w-24 h-24 md:w-32 md:h-32"
                            />
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation delay={200}>
                        <h1 className="font-merriweather text-5xl md:text-7xl font-bold text-dark-gray mb-4">
                            Happy Trails
                        </h1>
                    </ScrollAnimation>
                    <ScrollAnimation delay={300}>
                        <p className="font-montserrat text-lg md:text-xl text-brown-gray max-w-3xl mx-auto mb-8">
                            A course to plan your pivot, brought to you by Pivot for Dancers
                        </p>
                    </ScrollAnimation>

                    {/* Stats Section */}
                    <ScrollAnimation delay={400}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
                            {stats.map((stat, index) => (
                                <StatCard key={index} {...stat} index={index} />
                            ))}
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation delay={500}>
                        <button
                            onClick={() => window.open(product.url, '_blank', 'noopener,noreferrer')}
                            className="bg-light-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-4 px-10 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            START NOW FOR $75
                        </button>
                    </ScrollAnimation>
                </div>

                {/* Intro Section */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10" style={{ backgroundColor: '#E2DED0' }}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <ScrollAnimation delay={300}>
                            <div>
                                <div className="flex items-center mb-4">
                                    <h2 className="font-merriweather text-5xl font-bold text-dark-gray">What is Happy Trails?</h2>
                                </div>
                                <ul className="font-montserrat text-xl text-brown-gray mb-4 list-disc pl-5 space-y-2">
                                    <li>Happy Trails is a <span className="font-bold">self-paced, 4-part</span> mini course named after the famous Broadway send-off</li>
                                    <li>It's an in-depth <span className="font-bold">5-year career change</span> roadmap guided by former pro dancer and founder of Pivot for Dancers, Kaylee Randall</li>
                                    <li>You'll get a detailed, step-by-step plan for your career transition, <span className="font-bold">tailored to your dance experience</span></li>
                                    <li>Plus, the course gives you access to <span className="font-bold">exclusive resources</span> including:
                                        <ul className="list-disc pl-5 space-y-2 mt-2">
                                            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />50 Non-Dance Job Ideas</li>
                                            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Editable Canva Resume Template</li>
                                            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Dancer-Specific Interview Script</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation delay={500}>
                            <div className="relative aspect-video w-full">
                                <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/I6wSSAMR3FY?si=rRy0U55jnBeqyRz1"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    ></iframe>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>

                {/* What's Inside Section */}
                <div className="bg-beige py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollAnimation>
                            <div className="text-center mb-12">
                                <div className="flex items-center justify-center mb-4">
                                    <h2 className="font-merriweather text-5xl font-bold text-dark-gray">What's Inside?</h2>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <div className="grid md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <ScrollAnimation key={index} delay={index * 300}>
                                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden text-center border-2 border-beige hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <div className="relative">
                                            <Image src={feature.image} alt={feature.title} width={400} height={300} className="w-full h-48 object-cover" />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="font-merriweather text-2xl font-bold text-dark-gray mb-3">{feature.title}</h3>
                                            <p className="font-montserrat text-brown-gray text-center mb-4">
                                                {feature.title === "Mindset Shifts" ? (
                                                    <>
                                                        A <span
                                                            className="py-1 rounded-lg font-semibold"
                                                            style={{ color: "#647C90" }}
                                                        >huge part</span> of your career change will be changing your mindset. We help you prepare for the mental shifts required to successfully pivot.
                                                    </>
                                                ) : feature.title === "Practical Knowledge" ? (
                                                    <>
                                                        From the <span
                                                            className="py-1 rounded-lg font-semibold"
                                                            style={{ color: "#647C90" }}
                                                        >job search to finances</span>, we offer the practical knowledge that no one likes to talk about in the arts and entertainment industries.
                                                    </>
                                                ) : feature.title === "Tailored Resources" ? (
                                                    <>
                                                        More than your average career change course, Happy Trails is <span
                                                            className="py-1 rounded-lg font-semibold"
                                                            style={{ color: "#647C90" }}
                                                        >dancer-specific</span> and tailored to the career needs of professional dancers.
                                                    </>
                                                ) : (
                                                    feature.description
                                                )}
                                            </p>
                                            <div className="flex justify-center">
                                                <div className="w-8 h-8 rounded-full bg-light-gray flex items-center justify-center">
                                                    <feature.icon className="w-4 h-4 text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>

                {/* The Pivot Journey Section */}
                <div className="py-16 bg-beige">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollAnimation>
                            <div className="text-center mb-16">
                                <div className="flex items-center justify-center mb-4">
                                    <h2 className="font-merriweather text-5xl font-bold text-dark-gray">5-Year Career Change Roadmap</h2>
                                </div>
                                <p className="font-montserrat text-lg text-brown-gray mt-2">Happy Trails guides you through a dancer-focused roadmap to help you pivot with confidence.</p>
                            </div>
                        </ScrollAnimation>
                        <div className="relative">
                            <div className="hidden md:block absolute w-0.5 h-full bg-purple-gray top-0 left-1/2 transform -translate-x-1/2"></div>
                            {timelineItems.map((item, index) => (
                                <ScrollAnimation key={index} delay={index * 300}>
                                    <div className="mt-8 md:mt-0 md:flex md:items-center">
                                        {index % 2 === 0 ? (
                                            <>
                                                <div className="md:w-1/2 md:pr-8">
                                                    <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-beige text-center">
                                                        <div className="flex items-center justify-center mb-3">
                                                            <item.icon className="w-6 h-6 text-purple-gray mr-2" />
                                                            <h3 className="font-merriweather text-2xl font-bold text-dark-gray">{item.title}</h3>
                                                        </div>
                                                        <p className="font-montserrat text-brown-gray">{item.description}</p>
                                                    </div>
                                                </div>
                                                <div className="hidden md:flex justify-center items-center w-16">
                                                    <div className="w-6 h-6 bg-purple-gray rounded-full flex items-center justify-center">
                                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                                    </div>
                                                </div>
                                                <div className="md:w-1/2"></div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="md:w-1/2"></div>
                                                <div className="hidden md:flex justify-center items-center w-16">
                                                    <div className="w-6 h-6 bg-purple-gray rounded-full flex items-center justify-center">
                                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                                    </div>
                                                </div>
                                                <div className="md:w-1/2 md:pl-8">
                                                    <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-beige text-center">
                                                        <div className="flex items-center justify-center mb-3">
                                                            <item.icon className="w-6 h-6 text-purple-gray mr-2" />
                                                            <h3 className="font-merriweather text-2xl font-bold text-dark-gray">{item.title}</h3>
                                                        </div>
                                                        <p className="font-montserrat text-brown-gray">{item.description}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final CTA Section */}
                <div className="text-center py-16 bg-beige">
                    <ScrollAnimation delay={0}>
                        <div className="flex items-center justify-center mb-4">
                            <h2 className="font-merriweather text-5xl font-bold text-dark-gray">
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
                        <div className="extremely justify-center items-center gap-4 mb-8">
                            <span className="font-merriweather text-5xl font-bold text-dark-gray">$75</span>
                            <span className="font-merriweather text-2xl text-brown-gray line-through">$199</span>
                            <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                                62% OFF
                            </span>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation delay={700}>
                        <button
                            onClick={() => window.open(product.url, '_blank', 'noopener,noreferrer')}
                            className="bg-light-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-4 px-10 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            START NOW
                        </button>
                    </ScrollAnimation>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HappyTrailsPage;