import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
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

// Define types
type Country = 'Australia' | 'UnitedStates' | 'Switzerland';
type AgeData = {
    category: string;
    value: number;
};

// Data
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

// Function to get age-related statistics for cards
const getAgeStats = (countryAgeData: AgeData[]) => {
    const expectedAge = countryAgeData[0].value;
    const actualAge = countryAgeData[1].value;
    const meanGap = expectedAge - actualAge;

    return [
        { label: `Dancers retired ${meanGap.toFixed(1)} years earlier than expected`, value: `${meanGap.toFixed(1)} years` },
        { label: `The average age dancers expected to retire was ${expectedAge}`, value: `${expectedAge}` },
        { label: `The average age dancers actually retired was ${actualAge}`, value: `${actualAge} years` },
        { label: 'Dance careers are much shorter than you expect', value: 'Reality' },
    ];
};

const DataSection = () => {
    const [ageCountry, setAgeCountry] = useState<Country>('Australia');

    return (
        <section className="py-12 md:py-20 bg-beige animate-on-scroll">
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile Layout (Stacked) - Unchanged */}
                <div className="block md:hidden space-y-8">
                    {/* Title and Content */}
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-merriweather text-dark-gray">
                            How long are you expecting to dance professionally?
                        </h2>
                        <p className="text-black text-base md:text-lg">
                            The impending end of a dance career brings with it a series of concerns about the future. Research shows
                            a significant gap between when dancers expect to retire and when they actually do.
                        </p>
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
                                            className={`rounded-full px-3 py-1 text-sm font-montserrat ${ageCountry === c ? 'bg-purple-gray text-white' : 'bg-off-white border border-light-gray'
                                                }`}
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
                                    <div className="text-2xl font-bold text-brown-gray font-merriweather">{stat.value}</div>
                                    <p className="text-dark-gray text-xs mt-1 font-montserrat">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* New Desktop Layout - Vertical Flow */}
                <div className="hidden md:block space-y-12">
                    {/* Header Section */}
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold font-merriweather text-black mt-4">
                            Expectations vs Reality
                        </h2>
                        <p className="text-dark-gray text-lg font-montserrat mt-4">
                            Research shows a significant gap between when dancers expect to retire and when they actually do
                        </p>
                    </div>

                    {/* Country Selector */}
                    <div className="flex justify-center">
                        <div className="inline-flex rounded-full bg-off-white p-1 shadow-inner">
                            {(['Australia', 'UnitedStates', 'Switzerland'] as const).map((c) => (
                                <button
                                    key={c}
                                    className={`px-6 py-2 rounded-full font-montserrat transition-all ${ageCountry === c
                                        ? 'bg-purple-gray text-white shadow-md'
                                        : 'text-dark-gray hover:bg-beige'
                                        }`}
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
                                    className="underline hover:text-white inline-flex items-center justify-center"
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

export default DataSection;