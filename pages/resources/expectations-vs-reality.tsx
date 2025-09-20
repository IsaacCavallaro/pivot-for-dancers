import Image from 'next/image';
import { Product, coursePaymentUrl } from '../../data/products';
import { Star, Clock, ArrowLeft, CheckCircle, Users, Globe, Award, Target, Heart, Shield, TrendingUp, Calendar, MapPin, Play, ExternalLink } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList,
} from 'recharts';

// Product data for the page
const product: Product = {
    id: 6,
    name: "Career Transition Insights",
    subtitle: "DATA-DRIVEN GUIDANCE",
    description: "Research shows a significant gap between when dancers expect to retire and when they actually do",
    price: 0,
    url: "#",
    img: "/assets/career-insights.png",
    category: "Research",
    duration: "Lifetime Access",
    rating: 4.9,
    reviews: 28,
    features: [
        "Data-Driven Career Insights",
        "Retirement Age Statistics",
        "Country-Specific Analysis",
        "Actionable Transition Planning",
        "Expert Research Findings",
        "Free Access"
    ],
    icon: TrendingUp,
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

// Data Section Component
type Country = 'Australia' | 'UnitedStates' | 'Switzerland';
type AgeData = {
    category: string;
    value: number;
};

const ageData = {
    UnitedStates: [
        { category: 'Expectations', value: 40.9 },
        { category: 'Reality', value: 33.9 },
    ],
    Australia: [
        { category: 'Expectations', value: 46.6 },
        { category: 'Reality', value: 32.2 },
    ],
    Switzerland: [
        { category: 'Expectations', value: 40.9 },
        { category: 'Reality', value: 34.6 },
    ],
};

const countryDisplayNames = {
    UnitedStates: 'United States',
    Australia: 'Australia',
    Switzerland: 'Switzerland',
};

const getAgeStats = (countryAgeData: AgeData[]) => {
    const expectedAge = countryAgeData[0].value;
    const actualAge = countryAgeData[1].value;
    const meanGap = expectedAge - actualAge;

    return [
        { label: `Dancers retired ${meanGap.toFixed(1)} years earlier than expected`, value: `${meanGap.toFixed(1)} Years` },
        { label: `The average age dancers expected to retire was ${expectedAge}`, value: `Age ${expectedAge}` },
        { label: `The average age dancers actually retired was ${actualAge}`, value: `Age ${actualAge}` },
        { label: 'Dance careers are much shorter than you expect', value: 'Reality' },
    ];
};

const DataSection = () => {
    const [ageCountry, setAgeCountry] = useState<Country>('Australia');

    return (
        <section className="py-12 md:py-20 bg-beige">
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile Layout (Stacked) */}
                <div className="block md:hidden space-y-8">
                    {/* Title and Content */}
                    <div className="space-y-6">
                        <h2 className="text-bold text-center text-5xl md:text-6xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                            Expectations vs Reality
                        </h2>
                    </div>

                    {/* Chart */}
                    <div>
                        <div className="border-none shadow-lg bg-off-white/80 backdrop-blur-sm overflow-hidden rounded-lg">
                            <div className="bg-light-gray p-4">
                                <h3 className="text-white font-merriweather text-lg">Mean Ages of Transition</h3>
                                <p className="text-white/80 font-montserrat text-xs">
                                    <a
                                        href="http://neumann.hec.ca/aimac2005/PDF_Text/JeffriJ_ThrosbyD.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:text-white inline-flex items-center"
                                    >
                                        Source: Making Changes: Facilitating the Transition of Dancers
                                        <ExternalLink className="h-3 w-3 ml-1" />
                                    </a>
                                </p>
                            </div>
                            <div className="p-4">
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {(['Australia', 'UnitedStates', 'Switzerland'] as const).map((c) => (
                                        <button
                                            key={c}
                                            className={`rounded-full px-3 py-1 text-sm font-montserrat ${ageCountry === c ? 'bg-purple-gray text-white' : 'bg-off-white border border-light-gray'}`}
                                            onClick={() => setAgeCountry(c)}
                                        >
                                            {c === 'UnitedStates' ? 'USA' : c}
                                        </button>
                                    ))}
                                </div>
                                <div className="mb-4">
                                    <h3 className="text-dark-gray font-merriweather text-base mb-1">
                                        {countryDisplayNames[ageCountry]} Dancers
                                    </h3>
                                    <p className="text-xs text-dark-gray mb-2 font-montserrat">
                                        When dancers expect to retire vs. when they actually do
                                    </p>
                                </div>
                                <div className="h-[300px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            data={ageData[ageCountry]}
                                            margin={{
                                                top: 20,
                                                right: 30,
                                                left: 10,
                                                bottom: 30,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" stroke="#647C90" />
                                            <XAxis
                                                dataKey="category"
                                                stroke="#4E4F50"
                                                tick={{ fontSize: 10, fontFamily: 'Montserrat, sans-serif' }}
                                            />
                                            <YAxis
                                                stroke="#4E4F50"
                                                tick={{ fontSize: 10, fontFamily: 'Montserrat, sans-serif' }}
                                                label={{
                                                    value: 'Age (years)',
                                                    angle: -90,
                                                    position: 'insideLeft',
                                                    style: {
                                                        textAnchor: 'middle',
                                                        fontSize: 10,
                                                        fontFamily: 'Montserrat, sans-serif',
                                                        fill: '#4E4F50'
                                                    },
                                                }}
                                            />
                                            <Tooltip
                                                formatter={(value) => [`${value} years`, '']}
                                                contentStyle={{
                                                    backgroundColor: '#E2DED0',
                                                    borderColor: '#746C70',
                                                    borderRadius: '8px',
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    fontSize: '12px',
                                                }}
                                                labelStyle={{
                                                    color: '#4E4F50',
                                                    fontFamily: 'Merriweather, serif',
                                                    fontSize: '12px',
                                                }}
                                            />
                                            <Legend
                                                verticalAlign="bottom"
                                                height={36}
                                                wrapperStyle={{
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    fontSize: '10px',
                                                }}
                                            />
                                            <Bar
                                                dataKey="value"
                                                name="Dance Career Retirement Age"
                                                fill="#928490"
                                                radius={[4, 4, 0, 0]}
                                            >
                                                <LabelList
                                                    dataKey="value"
                                                    position="top"
                                                    style={{
                                                        fill: '#4E4F50',
                                                        fontFamily: 'Montserrat, sans-serif',
                                                        fontWeight: '500',
                                                        fontSize: '10px',
                                                    }}
                                                />
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Statistics Cards */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {getAgeStats(ageData[ageCountry]).map((stat, i) => (
                                <div key={i} className="bg-off-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
                                    <div className="text-2xl text-center font-bold text-brown-gray font-merriweather">{stat.value}</div>
                                    <p className="text-dark-gray text-center text-xs mt-1 font-montserrat">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop Layout - Vertical Flow */}
                <div className="hidden md:block space-y-12">
                    {/* Header Section */}
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-bold text-center text-5xl md:text-6xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                            Expectations vs Reality
                        </h2>
                    </div>

                    {/* Country Selector */}
                    <div className="flex justify-center">
                        <div className="inline-flex rounded-full bg-off-white p-1 shadow-inner">
                            {(['Australia', 'UnitedStates', 'Switzerland'] as const).map((c) => (
                                <button
                                    key={c}
                                    className={`px-6 py-2 rounded-full font-montserrat transition-all ${ageCountry === c
                                        ? 'bg-purple-gray text-white shadow-md'
                                        : 'text-dark-gray hover:bg-beige'}`}
                                    onClick={() => setAgeCountry(c)}
                                >
                                    {c === 'UnitedStates' ? 'USA' : c}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Chart Section */}
                    <div className="border-none shadow-lg bg-off-white/80 backdrop-blur-sm overflow-hidden rounded-lg">
                        <div className="bg-light-gray p-6">
                            <h3 className="text-white font-merriweather text-xl text-center">
                                Average Retirement Age for {countryDisplayNames[ageCountry]} Dancers
                            </h3>
                            <p className="text-white/80 font-montserrat text-sm text-center mt-2">
                                <a
                                    href="http://neumann.hec.ca/aimac2005/PDF_Text/JeffriJ_ThrosbyD.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-white inline-flex items-center"
                                >
                                    Source: Making Changes: Facilitating the Transition of Dancers
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                            </p>
                        </div>
                        <div className="p-6">
                            <div className="h-[400px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={ageData[ageCountry]}
                                        margin={{
                                            top: 20,
                                            right: 30,
                                            left: 20,
                                            bottom: 30,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" stroke="#647C90" />
                                        <XAxis
                                            dataKey="category"
                                            stroke="#4E4F50"
                                            tick={{
                                                fontSize: 12,
                                                fontFamily: 'Montserrat, sans-serif'
                                            }}
                                        />
                                        <YAxis
                                            stroke="#4E4F50"
                                            tick={{
                                                fontSize: 12,
                                                fontFamily: 'Montserrat, sans-serif'
                                            }}
                                            label={{
                                                value: 'Age (years)',
                                                angle: -90,
                                                position: 'insideLeft',
                                                style: {
                                                    textAnchor: 'middle',
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    fill: '#4E4F50'
                                                },
                                            }}
                                        />
                                        <Tooltip
                                            formatter={(value) => [`${value} years`, '']}
                                            contentStyle={{
                                                backgroundColor: '#E2DED0',
                                                borderColor: '#746C70',
                                                borderRadius: '8px',
                                                fontFamily: 'Montserrat, sans-serif',
                                                fontSize: '14px',
                                            }}
                                            labelStyle={{
                                                color: '#4E4F50',
                                                fontFamily: 'Merriweather, serif',
                                                fontSize: '14px',
                                            }}
                                        />
                                        <Legend
                                            verticalAlign="bottom"
                                            height={36}
                                            wrapperStyle={{
                                                fontFamily: 'Montserrat, sans-serif',
                                                fontSize: '12px',
                                            }}
                                        />
                                        <Bar
                                            dataKey="value"
                                            name="Dance Career Retirement Age"
                                            fill="#928490"
                                            radius={[4, 4, 0, 0]}
                                        >
                                            <LabelList
                                                dataKey="value"
                                                position="top"
                                                style={{
                                                    fill: '#4E4F50',
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    fontWeight: '500',
                                                    fontSize: '12px',
                                                }}
                                            />
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        {getAgeStats(ageData[ageCountry]).map((stat, i) => (
                            <div key={i} className="bg-off-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                                <div className="text-3xl font-bold text-brown-gray font-merriweather text-center">{stat.value}</div>
                                <p className="text-dark-gray text-sm mt-3 font-montserrat text-center">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ExpectationsVsRealityPage = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const BASE_PATH = process.env.PUBLIC_URL || "";

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        { number: "7.4", label: "Year Gap Average", icon: TrendingUp },
        { number: "3", label: "Countries Studied", icon: Globe },
        { number: "28+", label: "Research Studies", icon: Award },
        { number: "100", label: "Free Access", icon: Heart }
    ];

    const insights = [
        {
            title: "Early Planning Matters",
            description: "Dancers who plan their transition 3-5 years before expected retirement have significantly better outcomes in their new careers.",
            icon: Calendar
        },
        {
            title: "Financial Preparedness",
            description: "Those who save specifically for career transition have 60% less financial stress during their pivot period.",
            icon: Shield
        },
        {
            title: "Community Support",
            description: "Dancers with strong support networks transition more successfully and report higher satisfaction in new careers.",
            icon: Users
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
                                        <span className="text-sm font-semibold text-white tracking-wider uppercase">DATA-DRIVEN GUIDANCE</span>
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-bold text-black">
                                        Career Transition Insights
                                    </h1>
                                </ScrollAnimation>
                                <ScrollAnimation delay={300}>
                                    <br></br>
                                    <p className="font-montserrat text-xl text-black max-w-3xl mx-auto mb-8 px-4 md:px-0">
                                        Research shows a significant gap between when dancers expect to retire and when they actually do
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
                                            onClick={() => window.open('#', '_blank', 'noopener,noreferrer')}
                                            className="bg-purple-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                                        >
                                            <span className="relative z-10">EXPLORE DATA</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-gray/20 to-light-gray/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </button>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Data Visualization Section */}
                <DataSection />

                {/* Key Insights Section */}
                <div className="py-16 bg-light-gray">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollAnimation>
                            <div className="text-center mb-16">
                                <h2 className="text-bold text-5xl font-bold text-white mb-4">Key Insights from Research</h2>
                                <p className="font-montserrat text-xl text-white max-w-2xl mx-auto">
                                    Understanding the data can help you make better decisions about your career transition
                                </p>
                            </div>
                        </ScrollAnimation>

                        <div className="grid md:grid-cols-3 gap-8">
                            {insights.map((insight, index) => (
                                <ScrollAnimation key={index} delay={index * 300}>
                                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-gray text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full">
                                        <div className="w-16 h-16 rounded-full bg-purple-gray flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <insight.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="font-merriweather text-2xl font-bold text-black mb-4">{insight.title}</h3>
                                        <p className="font-montserrat text-brown-gray leading-relaxed flex-grow">{insight.description}</p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final CTA Section */}
                <div className="text-center py-16 bg-beige relative overflow-hidden">
                    <div className="bg-white rounded-2xl shadow-lg mx-auto max-w-4xl p-8 md:p-12 border-2 border-light-gray">
                        <ScrollAnimation delay={0}>
                            <div className="flex items-center justify-center mb-4">
                                <h2 className="text-bold text-4xl md:text-5xl font-bold text-black text-center">
                                    Plan Your Transition with Confidence
                                </h2>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation delay={300}>
                            <p className="font-montserrat text-brown-gray text-lg mb-8 max-w-2xl mx-auto">
                                Use data-driven insights to make informed decisions about your career transition journey
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
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                                <button
                                    onClick={() => window.open('#', '_blank', 'noopener,noreferrer')}
                                    className="bg-light-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-4 px-10 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                                >
                                    <span className="relative z-10">GET STARTED</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-gray/20 to-light-gray/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </div>
                        </ScrollAnimation>

                        {/* Questions Section */}
                        <ScrollAnimation delay={900}>
                            <div className="border-t border-gray-200 pt-8 mt-8">
                                <div className="text-center">
                                    <h4 className="font-merriweather text-lg font-bold text-black mb-2 flex items-center justify-center">
                                        <Users className="w-5 h-5 text-purple-gray mr-2" />
                                        Questions about the data?
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

export default ExpectationsVsRealityPage;