import { useState, useEffect, useRef } from 'react';
import { Star, CheckCircle, Users, Globe } from 'lucide-react';

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

const AboutUsSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        { number: '25+', label: 'years of dance experience', icon: Star },
        { number: '1309+', label: 'dancers in our community', icon: Users },
        { number: '17+', label: 'countries participating', icon: Globe },
        { number: '20+', label: 'successful workshops', icon: CheckCircle }
    ];

    return (
        <section id="about" className="relative overflow-hidden" style={{ backgroundColor: "#647C90" }}>
            {/* Main About Section */}
            <div className="pt-24 pb-16">
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation>
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                About Us
                            </h1>
                            <span className="text-md uppercase text-white opacity-90 tracking-wider">
                                Who We Are & What We Do
                            </span>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column */}
                        <ScrollAnimation delay={200}>
                            <div className="text-center lg:text-left">
                                <p className="text-xl text-white leading-relaxed mb-6">
                                    Pivot for Dancers offers{" "}
                                    <span
                                        className="px-2 py-1 rounded-lg font-semibold"
                                        style={{ backgroundColor: "#E2DED0", color: "#647C90", border: "2px solid #647C90" }}
                                    >
                                        career change
                                    </span>{" "}
                                    resources for professional dancers. Our mission is to help you find meaningful work off the stage. Run by former{" "}
                                    <span
                                        className="px-2 py-1 rounded-lg font-semibold"
                                        style={{ backgroundColor: "#E2DED0", color: "#647C90", border: "2px solid #647C90" }}
                                    >
                                        professional dancers
                                    </span>{" "}
                                    who have successfully changed careers, we're here to share what we've learned about making a pivot with our growing community of fellow dancers.
                                </p>
                                <p className="text-xl text-white leading-relaxed">
                                    There are thousands of other dancers{" "}
                                    <span
                                        className="px-2 py-1 rounded-lg font-semibold"
                                        style={{ backgroundColor: "#E2DED0", color: "#647C90", border: "2px solid #647C90" }}
                                    >
                                        just like you
                                    </span>{" "}
                                    in our community. Whether you've suffered an injury, been diagnosed with an illness, or simply found new dreams to pursue, you're not alone in wanting to change careers as a professional dancer.
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Right Column */}
                        <ScrollAnimation delay={400}>
                            <div className="relative">
                                <div className="relative aspect-video w-full mb-8">
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

                                {/* Stats Section */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {stats.map((stat, index) => (
                                        <StatCard key={index} {...stat} index={index} />
                                    ))}
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>

            {/* Mission & Values Section */}
            <div className="py-16" style={{ backgroundColor: "#E2DED0" }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation>
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-bold text-black mb-4">Our Mission & Values</h2>
                            <p className="text-lg" style={{ color: "#928490" }}>
                                What drives us to support dancers through their career transitions
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Empowerment",
                                description: "We believe every dancer has valuable skills that translate beyond the stage. Our mission is to help you recognize and leverage these talents in your new career path.",
                                icon: Star
                            },
                            {
                                title: "Community",
                                description: "No dancer should navigate career change alone. We foster a supportive community where dancers share experiences, advice, and encouragement throughout their transitions.",
                                icon: Users
                            },
                            {
                                title: "Authenticity",
                                description: "Our guidance comes from real experience. As former professional dancers ourselves, we understand the unique challenges and opportunities that come with career pivoting.",
                                icon: CheckCircle
                            }
                        ].map((value, index) => (
                            <ScrollAnimation key={index} delay={index * 200}>
                                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center" style={{ borderColor: "#647C90" }}>
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "#647C90" }}>
                                        <value.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-black mb-4">{value.title}</h3>
                                    <p className="leading-relaxed" style={{ color: "#928490" }}>{value.description}</p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </div>

            {/* Founder Section */}
            <div className="py-16" style={{ backgroundColor: "#647C90" }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Founder Image */}
                        <ScrollAnimation>
                            <div className="relative aspect-square w-full max-w-md mx-auto">
                                <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden bg-white border-4 border-white">
                                    <img
                                        src="/assets/kr-head-shot.jpg"
                                        alt="Kaylee Randall"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Right Column - Founder Story */}
                        <ScrollAnimation delay={300}>
                            <div className="text-center lg:text-left">
                                <h2 className="text-5xl font-bold text-white mb-6">Meet Our Founder</h2>
                                <h3 className="text-2xl font-semibold text-white mb-6">Kaylee Randall</h3>
                                <p className="text-lg text-white leading-relaxed mb-6">
                                    Kaylee Randall started dancing at age 3 in Florida, training on the competition circuit.
                                    Her professional dance career spanned almost a decade, performing full time with companies
                                    such as Universal Studios and Royal Caribbean. In 2018, when burnout set in and her
                                    priorities started to shift, she knew she was ready to take her last bow.
                                </p>
                                <p className="text-lg text-white leading-relaxed mb-6">
                                    Since then, Kaylee has started a freelance business, moved overseas to Australia, and now works
                                    full-time in the corporate tech world. But the transition didn't come without struggles,
                                    which is why Kaylee founded Pivot for Dancers in 2020 to help other dancers on their
                                    career change journey.
                                </p>
                                <p className="text-lg text-white leading-relaxed">
                                    Kaylee is a dancer who <em>actually</em> performed full time for many
                                    years and who still managed to build a fulfilling life beyond dance. She's here to share
                                    how you can too.
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>

            {/* Community Impact Section */}
            <div className="py-16" style={{ backgroundColor: "#E2DED0" }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation>
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-bold text-black mb-4">Our Growing Impact</h2>
                            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#928490" }}>
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
                                icon: CheckCircle
                            },
                            {
                                title: "Global Reach",
                                description: "Countries where our community members are located, creating a worldwide support network",
                                number: "25+",
                                icon: Globe
                            },
                            {
                                title: "Career Paths",
                                description: "Different industries our dancers have successfully transitioned into",
                                number: "40+",
                                icon: Star
                            },
                            {
                                title: "Community Growth",
                                description: "Monthly increase in new dancers joining our supportive community",
                                number: "15%",
                                icon: Users
                            }
                        ].map((impact, index) => (
                            <ScrollAnimation key={index} delay={index * 150}>
                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center border border-white/20">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "#647C90" }}>
                                        <impact.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-3xl font-bold mb-2" style={{ color: "#647C90" }}>
                                        {impact.number}
                                    </div>
                                    <h3 className="text-lg font-bold text-black mb-3">{impact.title}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: "#928490" }}>{impact.description}</p>
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