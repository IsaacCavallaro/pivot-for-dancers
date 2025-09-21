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
}

const StatCard = ({ number, label, icon: IconComponent }: StatCardProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const splitLabel = (text: string) => {
        const words = text.split(' ');
        const midPoint = Math.ceil(words.length / 2);
        return {
            line1: words.slice(0, midPoint).join(' '),
            line2: words.slice(midPoint).join(' ')
        };
    };

    const { line1, line2 } = splitLabel(label);
    const numericValue = parseInt(number.replace(/\D/g, ''));

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
        <div ref={ref} className="text-center">
            <div className="bg-white rounded-2xl p-4 md:p-3 shadow-lg flex flex-col items-center justify-center h-full">
                <IconComponent className="w-5 h-5 md:w-4 md:h-4 text-light-gray mb-2 md:mb-1" />
                <div className="font-merriweather text-xl md:text-lg font-bold text-dark-gray mb-1">
                    {isVisible ? (
                        <>
                            <Counter end={numericValue} duration={2000} />
                            {number.includes('+') && '+'}
                        </>
                    ) : (
                        '0'
                    )}
                </div>
                <div className="font-montserrat text-xs text-brown-gray leading-tight">
                    <div>{line1}</div>
                    <div>{line2}</div>
                </div>
            </div>
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
        <section id="about" className="relative overflow-hidden bg-light-gray pt-24 pb-10">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
                <div
                    className="text-center md:py-4"
                >
                    <h1
                        className={`font-bold text-center text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${isVisible
                            ? 'opacity-100 transform translate-y-0'
                            : 'opacity-0 transform -translate-y-10'
                            }`}
                    >
                        About Us
                    </h1>
                    <span className="text-md text-center uppercase text-white transition-all duration-1000 delay-300">Who We Are & What We Do</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} text-center md:text-left`}>
                        <p className="font-montserrat text-xl text-white leading-relaxed max-w-xl">
                            Pivot for Dancers offers <span
                                className="px-2 py-1 rounded-lg font-semibold"
                                style={{ backgroundColor: "#E2DED0", color: "#647C90", border: "2px solid #647C90" }}
                            >
                                career change
                            </span> resources for professional dancers. Our mission is to help you find meaningful work off the stage. Run by former <span
                                className="px-2 py-1 rounded-lg font-semibold"
                                style={{ backgroundColor: "#E2DED0", color: "#647C90", border: "2px solid #647C90" }}
                            >
                                professional dancers
                            </span> who have successfully changed careers, we're here to share what we've learned about making a pivot with our growing community of fellow dancers.
                        </p>
                        <p className="font-montserrat text-xl text-white mb-8 leading-relaxed max-w-xl">
                            There are thousands of other dancers <span
                                className="px-2 py-1 rounded-lg font-semibold"
                                style={{ backgroundColor: "#E2DED0", color: "#647C90", border: "2px solid #647C90" }}
                            >
                                just like you
                            </span> in our community. Whether you've suffered
                            an injury, been diagnosed with an illness, or simply found new dreams to pursue, you're not
                            alone in wanting to change careers as a professional dancer.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className={`relative transition-all duration-1000 delay-300 pb-px-5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
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

                        <br />

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {stats.map((stat, index) => (
                                <StatCard key={index} {...stat} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;