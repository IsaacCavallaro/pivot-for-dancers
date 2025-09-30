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
    const backgroundColor = "#fff";
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

    const founderTimeline = [
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
            icon: Briefcase
        },
        {
            title: "Founded Pivot for Dancers",
            description: "Launched in 2020 to help other dancers navigate their career transitions",
            icon: Users
        }
    ];

    return (
        <section id="about" className="relative overflow-hidden" style={{ backgroundColor: "#647C90" }}>
            {/* Hero Section */}
            <div className="relative pt-24 pb-16 md:py-24 overflow-hidden">
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 overflow-hidden">
                        <div className="relative z-10 text-center">
                            <ScrollAnimation delay={200}>
                                <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full border" style={{ backgroundColor: "#647C90", borderColor: "#647C90" }}>
                                    <span className="text-sm font-semibold text-white tracking-wider uppercase">Who We Are & What We Do</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
                                    About Us
                                </h1>
                                <p className="text-xl leading-relaxed max-w-3xl mx-auto font-medium mb-8" style={{ color: "#647C90" }}>
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
                                    <button
                                        onClick={handleSubmit}
                                        className="bg-purple-gray hover:bg-purple-gray text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                                        style={{ backgroundColor: "#928490" }}
                                    >
                                        <span className="relative z-10">JOIN OUR COMMUNITY</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-gray/20 to-light-gray/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </button>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Content Section */}
            <div className="py-20" style={{ backgroundColor: "#E2DED0" }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Column */}
                            <div className="text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: "#647C90" }}>
                                    Our Story
                                </h2>
                                <p className="text-xl leading-relaxed mb-6 font-medium" style={{ color: "#647C90" }}>
                                    Pivot for Dancers offers{" "}
                                    <span
                                        className="px-3 py-1 rounded-lg font-bold shadow-sm"
                                        style={{ backgroundColor: "#fff", color: "#647C90" }}
                                    >
                                        career change
                                    </span>{" "}
                                    resources for professional dancers. Our mission is to help you find meaningful work off the stage. Run by former professional{" "}
                                    <span
                                        className="px-3 py-1 rounded-lg font-bold shadow-sm"
                                        style={{ backgroundColor: "#fff", color: "#647C90" }}
                                    >
                                        dancers
                                    </span>{" "}
                                    who have successfully changed careers, we're here to share what we've learned about making a pivot with our growing community of fellow dancers.
                                </p>
                                <p className="text-xl leading-relaxed font-medium" style={{ color: "#647C90" }}>
                                    There are thousands of other dancers{" "}
                                    <span
                                        className="px-3 py-1 rounded-lg font-bold shadow-sm"
                                        style={{ backgroundColor: "#fff", color: "#647C90" }}
                                    >
                                        just like you
                                    </span>{" "}
                                    in our community. Whether you've suffered an injury, been diagnosed with an illness, or simply found new dreams to pursue, you're not alone in wanting to change careers as a professional dancer.
                                </p>
                            </div>
                            {/* Right Column */}
                            <div className="relative">
                                <div className="relative aspect-video w-full mb-8">
                                    <div className="relative w-full h-full rounded-2xl shadow-xl overflow-hidden border-2" style={{ borderColor: "#928490" }}>
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
                                            className="w-full px-4 py-4 rounded-2xl border-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-300 shadow-sm"
                                            style={{
                                                backgroundColor: '#fff',
                                                borderColor: '#647C90',
                                                focusRingColor: '#928490'
                                            }}
                                        />
                                        <button
                                            type="button"
                                            onClick={handleSubmit}
                                            disabled={isSubmitting || !email.trim()}
                                            className="w-full px-6 py-4 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl tracking-wider text-white"
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
            <div className="py-20" style={{ backgroundColor: "#647C90" }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation>
                        <div className="text-center mb-16">
                            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                                Meet Our Founder
                            </h2>
                            <h3 className="text-3xl font-black text-white mb-6">Kaylee Randall</h3>
                            <div className="relative w-40 h-40 mx-auto mb-8">
                                <img
                                    src="/assets/kr-head-shot.jpg"
                                    alt="Kaylee Randall"
                                    className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white"
                                />
                            </div>
                            <p className="text-lg text-white max-w-3xl mx-auto">
                                Kaylee is a dancer who <em>actually</em> performed full time for many
                                years and who still managed to build a fulfilling life beyond dance.
                                She's here to share how you can too.
                            </p>
                        </div>
                    </ScrollAnimation>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute w-0.5 h-full bg-white/40 top-0 left-1/2 transform -translate-x-1/2"></div>

                        {founderTimeline.map((item, index) => (
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

                    {/* Contact CTA */}
                    <ScrollAnimation delay={800}>
                        <div
                            className="mt-16 p-6 rounded-3xl border-2 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-xl group max-w-xl mx-auto text-center"
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
            <div className="py-20" style={{ backgroundColor: "#E2DED0" }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation>
                        <div className="text-center mb-10">
                            <h2 className="text-5xl md:text-6xl font-extrabold mb-2 leading-tight" style={{ color: "#647C90" }}>
                                Our Mission & Values
                            </h2>
                            <p className="text-xl font-light leading-relaxed" style={{ color: "#647C90" }}>
                                What drives us to support dancers through their career transitions
                            </p>
                        </div>
                    </ScrollAnimation>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Empowerment",
                                description: "We believe every dancer has valuable skills that translate beyond the stage. Our mission is to help you recognize and leverage these talents in your new career path.",
                                icon: Star,
                                badge: "Core Value"
                            },
                            {
                                title: "Community",
                                description: "No dancer should navigate career change alone. We foster a supportive community where dancers share experiences, advice, and encouragement throughout their transitions.",
                                icon: Users,
                                badge: "Core Value"
                            },
                            {
                                title: "Authenticity",
                                description: "Our guidance comes from real experience. As former professional dancers ourselves, we understand the unique challenges and opportunities that come with career pivoting.",
                                icon: CheckCircle,
                                badge: "Core Value"
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
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation>
                        <div className="text-center mb-16">
                            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight" style={{ color: "#fff" }}>
                                Our Growing Impact
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
                                number: "500+",
                                icon: CheckCircle,
                                badge: "Verified"
                            },
                            {
                                title: "Global Reach",
                                description: "Countries where our community members are located, creating a worldwide support network",
                                number: "25+",
                                icon: Globe,
                                badge: "Worldwide"
                            },
                            {
                                title: "Career Paths",
                                description: "Different industries our dancers have successfully transitioned into",
                                number: "40+",
                                icon: Star,
                                badge: "Diverse"
                            },
                            {
                                title: "Community Growth",
                                description: "Monthly increase in new dancers joining our supportive community",
                                number: "15%",
                                icon: Users,
                                badge: "Growing"
                            }
                        ].map((impact, index) => (
                            <ScrollAnimation key={index} delay={index * 150}>
                                <div className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-4 group text-center border-2 h-full flex flex-col" style={{ borderColor: "#647C90" }}>
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500 shadow-2xl" style={{ backgroundColor: "#647C90" }}>
                                        <impact.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-4xl font-black mb-3" style={{ color: "#647C90" }}>
                                        {impact.number}
                                    </div>
                                    <h3 className="text-lg font-black mb-3" style={{ color: "#647C90" }}>{impact.title}</h3>
                                    <p className="text-sm leading-relaxed flex-grow font-medium" style={{ color: "#928490" }}>{impact.description}</p>
                                    <div className="mt-4">
                                        <span className="inline-block px-4 py-2 text-xs font-bold rounded-full shadow-lg" style={{ backgroundColor: "#928490", color: "#fff" }}>
                                            {impact.badge}
                                        </span>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;