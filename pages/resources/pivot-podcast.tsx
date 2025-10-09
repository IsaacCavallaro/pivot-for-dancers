import Image from 'next/image';
import { Product } from '../../data/products';
import { Star, CheckCircle, Users, Award, Heart, TrendingUp, Calendar, Play, Mic, Podcast, DollarSign } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

const product: Product = {
    id: 5,
    name: "Pivot Podcast",
    subtitle: "FOR DANCERS IN TRANSITION",
    description: "Weekly conversations about career transition, mindset, and finding purpose beyond the stage",
    price: 0,
    originalPrice: 0,
    url: "#", // Replace with actual podcast URL
    img: "/assets/pivot-podcast.png",
    category: "Podcast",
    duration: "Weekly Episodes",
    rating: 4.9,
    reviews: 47,
    features: [
        "Career Transition Stories",
        "Taboo Topics",
        "Interviews with Real Dancers",
        "Dancer Community Insights",
        "Relatable Conversations"
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

const PivotPodcastPage = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const BASE_PATH = process.env.PUBLIC_URL || "";

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        { number: "500+", label: "Listens", icon: Podcast },
        { number: "5", label: "Podcast Platforms", icon: Star },
        { number: "1", label: "Weekly Episode", icon: Users },
        { number: "100", label: "Free Access", icon: Heart }
    ];

    const testimonials = [
        {
            name: "Sarah Jenkins",
            title: "Former Ballet Dancer",
            avatar: "/assets/sarah-jenkins.jpeg",
            text: "This podcast has been a lifeline during my transition. Hearing other dancers' stories made me feel less alone and gave me the courage to pursue my new path."
        },
        {
            name: "Marcus Chen",
            title: "Broadway Performer",
            avatar: "/assets/marcus-chen.jpeg",
            text: "The practical advice and real stories on Pivot Podcast helped me navigate my career change with confidence. It's like having a supportive friend guiding you through the process."
        },
        {
            name: "Elena Rodriguez",
            title: "Contemporary Dancer",
            avatar: "/assets/elena-rodriguez.jpeg",
            text: "I've listened to every episode! The insights from industry experts and fellow dancers have been invaluable in helping me find my purpose beyond performance."
        }
    ];

    const episodeCategories = [
        {
            title: "Career Transition Stories",
            description: (
                <>
                    Real conversations with dancers who've successfully{" "}
                    <span className="font-bold" style={{ color: "#928490" }}>
                        navigated career changes
                    </span> and found fulfilling work beyond the stage.
                </>
            ),
            icon: TrendingUp
        },
        {
            title: "Honest Conversations",
            description: (
                <>
                    Our guests open up about all the things {" "}
                    <span className="font-bold" style={{ color: "#928490" }}>
                        no one tells you
                    </span> when changing careers after dance. We’re getting real and raw!
                </>
            ),
            icon: Heart
        },
        {
            title: "Community & Inspiration",
            description: (
                <>
                    As a dancer changing careers,{" "}
                    <span className="font-bold" style={{ color: "#928490" }}>
                        you’re in good company.
                    </span> When you listen to these stories, you’ll get inspiration for what’s possible in your life after dance.
                </>
            ),
            icon: DollarSign
        }
    ];

    const features = [
        {
            title: "Weekly Episodes",
            description: "Fresh content every week featuring inspiring stories, expert interviews, and practical advice for dancers in transition.",
            icon: Calendar,
            image: "/assets/podcast-recording.jpeg",
            badge: "Free Access",
        },
        {
            title: "Dancer Interviews",
            description: "Our guests are real dancer who performed full-time and successfully changed careers and have found meaning off the stage.",
            icon: Users,
            image: "/assets/expert-interview.jpeg",
            badge: "Real Stories",
        },
        {
            title: "Real Conversations",
            description: "No one wants to talk about changing careers after dance, so we’re starting the conversation. These are honest chats about the realities of life beyond dance.",
            icon: Award,
            image: "/assets/community-support.jpeg",
            badge: "Taboo Topics",
        }
    ];

    const popularEpisodes = [
        {
            title: "How Demi’s roller skating hobby turned into 500K followers on Instagram",
            guest: "Demi Jenkins",
            duration: "23 min",
            episode: "EP 04",
            url: "https://open.spotify.com/episode/5fdb0koSHkDYXFzP8rFjNH?si=aec61c7441064528&nd=1&dlsi=d8c9432002594cc8"
        },
        {
            title: "Missing the magic of the stage? Here's how Ali is finding meaning beyond her ballet career ",
            guest: "Ali Block",
            duration: "28 min",
            episode: "EP 03",
            url: "https://open.spotify.com/episode/1dpY9nKHk6oBVcpOieodSA?si=98326958322e40f0"
        },
        {
            title: "How a ski mountain helped Elise let go of her dance career",
            guest: "Elise MacDonald",
            duration: "33 min",
            episode: "EP 05",
            url: "https://open.spotify.com/episode/7eW8KrFIGM2B94vJEbdq07?si=fXQEDUUVTYu2FRUOGlAcvQ"
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
                                        <span className="text-sm font-bold tracking-widest text-white">REAL STORIES</span>
                                        <div className="w-2 h-2 rounded-full ml-3" style={{ backgroundColor: '#E2DED0' }}></div>
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-bold text-black">
                                        Pivot Podcast
                                    </h1>
                                </ScrollAnimation>
                                <ScrollAnimation delay={300}>
                                    <br></br>
                                    <p className="font-montserrat text-xl text-brown-gray max-w-3xl mx-auto mb-8 px-4 md:px-0">
                                        Weekly conversations about career transition, mindset, and finding purpose beyond the stage
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
                                            onClick={() => window.open('https://www.youtube.com/watch?v=16JMiSPzlBE&list=PLjTsov7LqGgJ1XUG3vPMIFA6KOojU4_mm', '_blank', 'noopener,noreferrer')}
                                            className="bg-purple-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                                        >
                                            <span className="relative z-10">LISTEN NOW</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-gray/20 to-light-gray/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </button>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What is Pivot Podcast section */}
                <div className="py-16 bg-light-gray">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-4">
                            <h2 className="text-bold text-center text-5xl font-bold text-white">What is the Pivot Podcast?</h2>
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
                                                    Weekly interviews with former professional dancers
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollAnimation>

                                    <ScrollAnimation delay={0}>
                                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-gray/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                            <div className="flex items-start">
                                                <div className="w-6 h-6 rounded-full bg-purple-gray flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <p className="font-montserrat text-black leading-relaxed">
                                                    Mindset shifts, taboo conversations, and career change journeys
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollAnimation>

                                    <ScrollAnimation delay={0}>
                                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-gray/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                            <div className="flex items-start">
                                                <div className="w-6 h-6 rounded-full bg-purple-gray flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <p className="font-montserrat text-black leading-relaxed">
                                                    Relatable stories and inspirational transitions
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollAnimation>

                                    <ScrollAnimation delay={0}>
                                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-gray/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                            <div className="flex items-start">
                                                <div className="w-6 h-6 rounded-full bg-purple-gray flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <p className="font-montserrat text-black leading-relaxed">
                                                    Honest chats with dancers who’ve done it
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
                                        src="/assets/pivot-podcast.png"
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

                {/* Episode Categories Section */}
                <div className="py-16 bg-beige">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollAnimation>
                            <div className="text-center mb-16">
                                <div className="flex items-center justify-center mb-4">
                                    <h2 className="text-bold text-5xl font-bold text-black">What's Inside?</h2>
                                </div>
                                <p className="font-montserrat text-lg text-brown-gray mt-2">You’re not alone. Every professional dancer goes through this transition… and it’s tough. Listen to real stories, from real dancers and what they did next.</p>
                            </div>
                        </ScrollAnimation>
                        {/* Timeline */}
                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute w-0.5 h-full bg-purple-gray top-0 left-1/2 transform -translate-x-1/2"></div>

                            {episodeCategories.map((item, index) => (
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
                                                <div className="w-6 h-6 bg-purple-gray rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300 z-20">
                                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                                </div>
                                                {/* Connector Line */}
                                                <div
                                                    className={`hidden md:block absolute h-0.5 bg-purple-gray z-10 top-1/2 ${index % 2 === 0 ? 'left-full' : 'right-full'
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
                {/* Popular Episodes Section */}
                <div className="py-16 bg-light-gray">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollAnimation>
                            <div className="text-center mb-16">
                                <h2 className="text-bold text-5xl font-bold text-white mb-4">Popular Episodes</h2>
                                <p className="font-montserrat text-xl text-white max-w-2xl mx-auto">
                                    Start with these listener favorites that have helped countless dancers navigate their transitions
                                </p>
                            </div>
                        </ScrollAnimation>

                        <div className="grid md:grid-cols-3 gap-8">
                            {popularEpisodes.map((episode, index) => (
                                <ScrollAnimation key={index} delay={index * 200}>
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-gray/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-sm font-semibold text-purple-gray">{episode.episode}</span>
                                            <span className="text-sm text-brown-gray">{episode.duration}</span>
                                        </div>
                                        <h3 className="font-merriweather text-xl font-bold text-black mb-2">{episode.title}</h3>
                                        <p className="text-sm text-brown-gray mb-3">with {episode.guest}</p>
                                        <div className="mt-auto">
                                            <button
                                                onClick={() => window.open(episode.url, '_blank', 'noopener,noreferrer')}
                                                className="w-full bg-purple-gray text-white py-2 rounded-lg hover:bg-light-gray transition-colors duration-300 flex items-center justify-center"
                                            >
                                                <Play className="w-4 h-4 mr-2" />
                                                Listen Now
                                            </button>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="bg-beige py-20 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <ScrollAnimation>
                            <div className="text-center mb-16">
                                <div className="flex items-center justify-center mb-6 relative">
                                    <h2 className="text-bold text-5xl font-bold text-black tracking-tight relative inline-block">
                                        Listen to the Pivot Podcast
                                    </h2>
                                </div>
                                <p className="font-montserrat text-xl text-brown-gray mt-4 max-w-3xl mx-auto leading-relaxed">
                                    Hear from real dancers who have successfully pivoted away from dance
                                </p>
                            </div>
                        </ScrollAnimation>
                        <div className="grid md:grid-cols-3 gap-10">
                            {features.map((feature, index) => (
                                <ScrollAnimation key={index} delay={index * 300}>
                                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden text-center border-2 border-purple-gray transition-all duration-500 hover:shadow-xl hover:-translate-y-3 min-h-[360px] flex flex-col relative h-full">
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
                                                    {feature.description}
                                                </p>
                                            </div>

                                            {/* Subtle badge at bottom of card */}
                                            <div className="mt-auto pt-6 border-t border-light-gray border-opacity-30">
                                                <span className="inline-block text-xs font-montserrat text-white bg-light-gray px-3 py-1 rounded-full">
                                                    {feature.badge}
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
                <div className="text-center py-16 bg-light-gray relative overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-2xl shadow-lg mx-auto max-w-4xl p-8 md:p-12 border-2 border-beige">
                            <ScrollAnimation delay={0}>
                                <div className="flex items-center justify-center mb-4">
                                    <h2 className="text-bold text-4xl md:text-5xl font-bold text-black text-center">
                                        Start Listening Today
                                    </h2>
                                </div>
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
                                        onClick={() => window.open('https://www.youtube.com/playlist?list=PLjTsov7LqGgJ1XUG3vPMIFA6KOojU4_mm', '_blank', 'noopener,noreferrer')}
                                        className="bg-purple-gray hover:bg-light-gray text-white font-montserrat font-semibold py-4 px-10 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                                    >
                                        <span className="relative z-10">LISTEN ON YOUTUBE</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-gray/20 to-light-gray/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </button>
                                    <button
                                        onClick={() => window.open('https://open.spotify.com/show/4PfCp7OJWQCaqfGsbjbDZW?si=731ca82e254c43bd ', '_blank', 'noopener,noreferrer')}
                                        className="bg-purple-gray hover:bg-light-gray text-white font-montserrat font-semibold py-4 px-10 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                                    >
                                        <span className="relative z-10">LISTEN ON SPOTIFY</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-gray/20 to-light-gray/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </button>
                                </div>
                            </ScrollAnimation>

                            {/* Questions Section */}
                            <ScrollAnimation delay={900}>
                                <div className="border-t border-gray-200 pt-8 mt-8">
                                    <div className="text-center">
                                        <h4 className="font-merriweather text-lg font-bold text-black mb-2 flex items-center justify-center">
                                            <Mic className="w-5 h-5 text-purple-gray mr-2" />
                                            Have a story to share?
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

export default PivotPodcastPage;