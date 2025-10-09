import { useState, useEffect, useRef } from 'react';
import { Star, CheckCircle, Users, Globe, MessageCircle, Award, Briefcase, TrendingUp } from 'lucide-react';

interface CounterProps {
    end: number;
    duration: number;
}
const Counter = ({ end, duration }: CounterProps) => {
    const [count, setCount] = useState(0);
    const ref = useRef<number>(0);
    useEffect(() => {
        let start = 0;
        const increment = end / (duration / 16);
        const step = () => {
            start += increment;
            if (start < end) {
                setCount(Math.floor(start));
                ref.current = requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };
        ref.current = requestAnimationFrame(step);
        return () => cancelAnimationFrame(ref.current);
    }, [end, duration]);
    return <span>{count.toLocaleString()}</span>;
};

interface StatCardProps {
    number: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    index: number;
}
const StatCard = ({ number, label, icon: IconComponent, index }: StatCardProps) => {
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
    const backgroundColor = "#E2DED0"; // Changed from "#fff" to "#E2DED0"
    const borderColor = index % 2 === 0 ? "#647C90" : "#928490";
    const iconColor = index % 2 === 0 ? "#647C90" : "#928490";
    const textColor = "#647C90";
    const numericValue = Number.parseInt(number.replace(/\D/g, ""));
    return (
        <div ref={ref} className="text-center h-full">
            <div
                className="rounded-2xl p-4 md:p-3 shadow-lg flex flex-col items-center justify-center h-full relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group min-h-[140px]"
                style={{
                    backgroundColor: backgroundColor,
                    border: `2px solid ${borderColor}`,
                }}
            >
                <div
                    className="w-8 h-8 md:w-7 md:h-7 rounded-full flex items-center justify-center mb-2 md:mb-1 relative z-10 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: iconColor }}
                >
                    <IconComponent className="w-5 h-5 md:w-4 md:h-4 text-white" />
                </div>
                <div className="text-xl md:text-lg font-bold mb-1 relative z-10" style={{ color: textColor }}>
                    {isVisible ? (
                        <>
                            <Counter end={numericValue} duration={2000} />
                            {number.includes("x") && "x"}
                            {number.includes("$") && "$"}
                            {number.includes("%") && "%"}
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
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [delay]);
    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'} ${className}`}
        >
            {children}
        </div>
    );
};

const AboutUsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        if (submitStatus !== 'idle') {
            setSubmitStatus('idle');
        }
        if (error) {
            setError(null);
        }
    };
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleSubmit = async () => {
        const trimmedEmail = email.trim();
        if (!trimmedEmail) {
            setError("Please provide your email to join us.");
            setSubmitStatus('error');
            return;
        }
        if (!validateEmail(trimmedEmail)) {
            setError("Please enter a valid email address.");
            setSubmitStatus('error');
            return;
        }
        setIsSubmitting(true);
        setError(null);
        setSubmitStatus('idle');
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitStatus('success');
            setEmail('');
        } catch {
            setSubmitStatus('error');
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };
    const getButtonText = () => {
        if (isSubmitting) return 'JOINING...';
        if (submitStatus === 'success') return 'JOINED!';
        return 'JOIN COMMUNITY';
    };

    const stats = [
        { number: "500+", label: "Success Stories", icon: CheckCircle },
        { number: "25+", label: "Countries", icon: Globe },
        { number: "40+", label: "Career Paths", icon: Briefcase },
        { number: "15%", label: "Monthly Growth", icon: TrendingUp }
    ];

    const journeyTimeline = [
        {
            title: "The Dream",
            description: "You've trained to be a dancer since you were tiny. You graduate and finally book your first job. You're buzzing and motivated, hungry for the next audition, ready for the next challenge. You work consistently as a professional dancer and you feel like you're truly living the dream.",
            icon: Star
        },
        {
            title: "The Grit",
            description: "You're still dancing professionally and loving it. You also teach four nights a week,take any extra gig you can get, but still struggle to make ends meet.You work nights and most holidays and sometimes feel like you're missing out on other aspects of life. But you're living the dream, so who cares?",
            icon: Award
        },
        {
            title: "The Reality",
            description: "You're older, achy, and unsure of where to go. You're no longer challenged and feel bored doing the same choreography day after day. You're also broke and have no idea how to get ahead financially. Plus, you crave stability but keep these thoughts to yourself because you're living the dream, right?",
            icon: TrendingUp
        },
        {
            title: "The Unknown",
            description: "You take a step back and reassess your goals and what you want for the future. Maybe you start to explore different career options, find ways to balance your life and finances, and look for new ways to reignite your passion. This is the stage where you rethink and start to pivot, seeking a new direction",
            icon: Briefcase
        }
    ];

    return (
        <section id="about" className="relative overflow-hidden" style={{ backgroundColor: "#647C90" }}>
            {/* Hero Section - Updated to match Home.tsx styling */}
            <div className="relative pt-32 pb-16 md:py-24 overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 overflow-hidden">
                        <div className="relative z-10 text-center">
                            <ScrollAnimation delay={200}>
                                <div className="inline-flex items-center justify-center px-6 py-3 rounded-full mb-6 border backdrop-blur-xl shadow-xl"
                                    style={{ borderColor: 'rgba(100, 124, 144,0.3)', backgroundColor: 'rgba(100, 124, 144, 0.7)' }}>
                                    <div className="w-2 h-2 rounded-full mr-3 " style={{ backgroundColor: '#E2DED0' }}></div>
                                    <span className="text-sm font-bold tracking-widest text-white">WHO WE ARE & WHAT WE DO</span>
                                    <div className="w-2 h-2 rounded-full ml-3" style={{ backgroundColor: '#E2DED0' }}></div>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
                                    About Us
                                </h1>
                                <p className="text-xl leading-relaxed max-w-3xl mx-auto font-medium mb-8 text-brown-gray">
                                    Career transition resources for professional dancers, run by former dancers who have successfully changed careers
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
                                    <a
                                        href="https://stats.sender.net/forms/aKrmkz/view"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-8 py-4 rounded-full backdrop-blur-xl border shadow-2xl transition-all duration-500 group hover:scale-105 text-white font-bold text-lg"
                                        style={{ backgroundColor: "#928490", borderColor: 'rgba(100, 124, 144, 0.3)' }}
                                    >
                                        <span className="mr-3">JOIN OUR COMMUNITY</span>
                                        <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    </a>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Content Section */}
            <div className="py-20 relative overflow-hidden" style={{ backgroundColor: "#E2DED0" }}>
                <div className="absolute inset-0 bg-[radial-gradient(#d5d1c5_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center justify-center px-6 py-3 rounded-full mb-6 border backdrop-blur-xl shadow-xl"
                            style={{ borderColor: 'rgba(100, 124, 144, c)', backgroundColor: 'rgba(100, 124, 144, 0.7)' }}>
                            <div className="w-2 h-2 rounded-full mr-3 " style={{ backgroundColor: '#E2DED0' }}></div>
                            <span className="text-sm font-bold tracking-widest text-white">OUR STORY</span>
                            <div className="w-2 h-2 rounded-full ml-3" style={{ backgroundColor: '#E2DED0' }}></div>
                        </div>
                    </div>
                    <ScrollAnimation>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Column - Updated to match Home.tsx design */}
                            <div>
                                <div className="space-y-6">
                                    <ScrollAnimation delay={0}>
                                        <div className="bg-white rounded-2xl p-6 shadow-2xl border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                                            style={{ borderColor: "#647C90" }}>
                                            <div className="flex items-start">
                                                <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                                                    style={{ backgroundColor: "#647C90" }}>
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <p className="text-lg leading-relaxed font-medium" style={{ color: "#647C90" }}>
                                                    Career change resources for professional dancers
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollAnimation>

                                    <ScrollAnimation delay={200}>
                                        <div className="bg-white rounded-2xl p-6 shadow-2xl border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                                            style={{ borderColor: "#647C90" }}>
                                            <div className="flex items-start">
                                                <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                                                    style={{ backgroundColor: "#647C90" }}>
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <p className="text-lg leading-relaxed font-medium" style={{ color: "#647C90" }}>
                                                    We help dancers find meaning off the stage
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollAnimation>


                                    <ScrollAnimation delay={200}>
                                        <div className="bg-white rounded-2xl p-6 shadow-2xl border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                                            style={{ borderColor: "#647C90" }}>
                                            <div className="flex items-start">
                                                <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                                                    style={{ backgroundColor: "#647C90" }}>
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <p className="text-lg leading-relaxed font-medium" style={{ color: "#647C90" }}>
                                                    Run by a former professional dancer
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollAnimation>


                                    <ScrollAnimation delay={200}>
                                        <div className="bg-white rounded-2xl p-6 shadow-2xl border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                                            style={{ borderColor: "#647C90" }}>
                                            <div className="flex items-start">
                                                <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                                                    style={{ backgroundColor: "#647C90" }}>
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <p className="text-lg leading-relaxed font-medium" style={{ color: "#647C90" }}>
                                                    Structured tools, mindset shifts, and taboo conversations
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollAnimation>


                                    <ScrollAnimation delay={200}>
                                        <div className="bg-white rounded-2xl p-6 shadow-2xl border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                                            style={{ borderColor: "#647C90" }}>
                                            <div className="flex items-start">
                                                <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                                                    style={{ backgroundColor: "#647C90" }}>
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <p className="text-lg leading-relaxed font-medium" style={{ color: "#647C90" }}>
                                                    What to do next whether you’re injured, unwell, or your priorities have changed
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollAnimation>

                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="relative">
                                <div className="relative aspect-video w-full mb-8">
                                    <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden border-2" style={{ borderColor: "#647C90" }}>
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

                                {/* Email Signup Form */}
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="flex flex-col space-y-4 w-full">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={handleEmailChange}
                                            onKeyPress={handleKeyPress}
                                            disabled={isSubmitting}
                                            className="w-full px-6 py-4 rounded-2xl border-2 text-white placeholder-white focus:outline-none focus:ring-2 transition-all duration-300 shadow-lg text-sm"
                                            style={{
                                                backgroundColor: '#647C90',
                                                borderColor: '#647C90',
                                            }}
                                        />
                                        <button
                                            type="button"
                                            onClick={handleSubmit}
                                            disabled={isSubmitting || !email.trim()}
                                            className="w-full px-6 py-4 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-xl hover:shadow-2xl tracking-wider text-white"
                                            style={{ backgroundColor: "#928490" }}
                                        >
                                            {getButtonText()}
                                        </button>
                                    </div>
                                    {submitStatus === 'success' && (
                                        <p className="text-green-600 text-sm font-medium">
                                            Thank you! You should receive a confirmation shortly.
                                        </p>
                                    )}
                                    {error && (
                                        <p className="text-red-600 text-sm font-medium">
                                            {error}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Founder Section - Timeline */}
            <div className="py-20 relative overflow-hidden" style={{ backgroundColor: "#647C90" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollAnimation>
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full mb-6 border backdrop-blur-xl shadow-xl"
                                style={{ borderColor: 'rgba(255, 255, 255, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                                <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#E2DED0' }}></div>
                                <span className="text-sm font-bold tracking-widest text-white">Your Journey</span>
                                <div className="w-2 h-2 rounded-full ml-3 animate-pulse delay-300" style={{ backgroundColor: '#E2DED0' }}></div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute w-0.5 h-full bg-white/40 top-0 left-1/2 transform -translate-x-1/2"></div>

                        {journeyTimeline.map((item, index) => (
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
                                                className="bg-white p-6 rounded-3xl shadow-2xl border text-center hover:shadow-xl transition-all duration-500 group relative z-10 w-full hover:-translate-y-2"
                                                style={{ borderColor: "#647C90" }}
                                            >
                                                <div className="flex flex-col items-center mb-3">
                                                    <div
                                                        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500 shadow-2xl"
                                                        style={{ backgroundColor: "#928490" }}
                                                    >
                                                        <item.icon className="w-6 h-6 text-white" />
                                                    </div>
                                                    <h3
                                                        className="text-xl font-black"
                                                        style={{ color: "#647C90" }}
                                                    >
                                                        {item.title}
                                                    </h3>
                                                </div>
                                                <p className="text-sm font-medium" style={{ color: "#746C70" }}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                        {/* Timeline Dot and Connector */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
                                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-500 z-20 shadow-lg">
                                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#647C90" }}></div>
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

                    {/* Contact CTA */}
                    <ScrollAnimation delay={800}>
                        <div
                            className="mt-16 p-8 rounded-3xl border-2 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-xl group max-w-xl mx-auto text-center"
                            style={{
                                backgroundColor: "rgba(226, 222, 208, 0.1)",
                                borderColor: "rgba(255, 255, 255, 0.3)",
                            }}
                        >
                            <h3 className="text-xl font-bold mb-4 text-white leading-tight">
                                Have questions about your transition?
                            </h3>
                            <button
                                className="w-full py-4 px-8 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl tracking-wider text-white"
                                style={{ backgroundColor: "#928490" }}
                            >
                                SCHEDULE A CONSULTATION <MessageCircle className="w-5 h-5" />
                            </button>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Mission & Values Section */}
            <div className="py-20 relative overflow-hidden" style={{ backgroundColor: "#E2DED0" }}>
                <div className="absolute inset-0 bg-[radial-gradient(#d5d1c5_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollAnimation>
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full mb-6 border backdrop-blur-xl shadow-xl"
                                style={{ borderColor: 'rgba(100, 124, 144, 0.3)', backgroundColor: 'rgba(100, 124, 144, 0.1)' }}>
                                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#647C90' }}></div>
                                <span className="text-sm font-bold tracking-widest" style={{ color: '#647C90' }}>OUR MISSION & VALUES</span>
                                <div className="w-2 h-2 rounded-full ml-3" style={{ backgroundColor: '#647C90' }}></div>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-extrabold mb-2 leading-tight" style={{ color: "#647C90" }}>
                                What Drives Us
                            </h2>
                            <p className="text-xl font-light leading-relaxed" style={{ color: "#647C90" }}>
                                Our mission is to foster empowerment, community, and authenticity within the dance industry to support dancers as they step onto their next stage of life.
                            </p>
                        </div>
                    </ScrollAnimation>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Empowerment",
                                description: "We believe every dancer has valuable skills that translate beyond the stage. Our mission is to help you recognize and leverage these talents in your new career path.",
                                icon: Star,
                                badge: "Permission"
                            },
                            {
                                title: "Community",
                                description: "No dancer should navigate career change alone. We foster a supportive community where dancers share experiences, advice, and encouragement throughout their transitions.",
                                icon: Users,
                                badge: "Belonging"
                            },
                            {
                                title: "Authenticity",
                                description: "Our guidance comes from real experience. As former professional dancers ourselves, we understand the unique challenges and opportunities that come with career pivoting.",
                                icon: CheckCircle,
                                badge: "Real"
                            }
                        ].map((value, index) => (
                            <ScrollAnimation key={index} delay={index * 200}>
                                <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-4 group text-center h-full flex flex-col" style={{ borderColor: "#647C90" }}>
                                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-2xl" style={{ backgroundColor: "#647C90" }}>
                                        <value.icon className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-black mb-4" style={{ color: "#647C90" }}>{value.title}</h3>
                                    <p className="text-sm leading-relaxed flex-grow font-medium" style={{ color: "#928490" }}>{value.description}</p>
                                    <div className="mt-6">
                                        <span className="inline-block px-4 py-2 text-xs font-bold rounded-full shadow-lg" style={{ backgroundColor: "#928490", color: "#fff" }}>
                                            {value.badge}
                                        </span>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </div>

            {/* Community Impact Section */}
            <div className="py-20" style={{ backgroundColor: "#647C90" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation>
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full mb-6 border backdrop-blur-xl shadow-xl"
                                style={{ borderColor: 'rgba(255, 255, 255, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                                <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#E2DED0' }}></div>
                                <span className="text-sm font-bold tracking-widest text-white">OUR GROWING IMPACT</span>
                                <div className="w-2 h-2 rounded-full ml-3 animate-pulse delay-300" style={{ backgroundColor: '#E2DED0' }}></div>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight" style={{ color: "#fff" }}>
                                Making a Difference
                            </h2>
                            <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: "#fff" }}>
                                See how we're making a difference in the lives of dancers worldwide
                            </p>
                        </div>
                    </ScrollAnimation>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Success Stories",
                                description: "Dancers who have successfully transitioned to fulfilling careers in tech, education, business, and more",
                                icon: CheckCircle,
                                href: "https://www.youtube.com/playlist?list=PLjTsov7LqGgJ1XUG3vPMIFA6KOojU4_mm"
                            },
                            {
                                title: "Global Reach",
                                description: "No need to be in New York or London to take advantage of our career change resources",
                                icon: Globe,
                                href: "/products"
                            },
                            {
                                title: "Career Paths",
                                description: "Dancers can be successful in so many other industries when you give yourself permission to step onto your next stage",
                                icon: Star,
                                href: "/products/happy-trails"
                            },
                            {
                                title: "Community Growth",
                                description: "We talk about all the things no one told you about life after dance, including the hard truths you'd probably rather ignore",
                                icon: Users,
                                href: "https://www.youtube.com/playlist?list=PLjTsov7LqGgKSPEHwyLlToRdNi2tQvPvH"
                            }
                        ].map((impact, index) => (
                            <ScrollAnimation key={index} delay={index * 150}>
                                <div className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-4 group text-center border-2 h-full flex flex-col" style={{ borderColor: "#647C90" }}>
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500 shadow-2xl" style={{ backgroundColor: "#647C90" }}>
                                        <impact.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-black mb-3" style={{ color: "#647C90" }}>{impact.title}</h3>
                                    <p className="text-sm leading-relaxed flex-grow font-medium mb-5" style={{ color: "#928490" }}>{impact.description}</p>

                                    {/* LEARN MORE Button */}
                                    <a
                                        href={impact.href}
                                        target={impact.href.startsWith('http') ? "_blank" : "_self"}
                                        rel={impact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                        className="inline-flex items-center justify-center px-6 py-3 rounded-full backdrop-blur-xl border shadow-lg transition-all duration-500 group-hover:scale-105 text-white font-bold text-sm mt-auto"
                                        style={{ backgroundColor: "#928490", borderColor: 'rgba(100, 124, 144, 0.3)' }}
                                    >
                                        LEARN MORE
                                    </a>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default AboutUsSection;