import { useMemo, useState } from 'react';
import {
    ArrowRight,
    BarChart3,
    Calendar,
    ExternalLink,
    Globe,
    Shield,
    TrendingUp,
    Users,
} from 'lucide-react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    LabelList,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { SiteChrome } from '../../components/site/MarketingPrimitives';

type Country = 'Australia' | 'UnitedStates' | 'Switzerland';

type AgeDatum = {
    category: string;
    value: number;
};

const sourceUrl = 'http://neumann.hec.ca/aimac2005/PDF_Text/JeffriJ_ThrosbyD.pdf';

const ageData: Record<Country, AgeDatum[]> = {
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

const countryLabels: Record<Country, string> = {
    Australia: 'Australia',
    UnitedStates: 'United States',
    Switzerland: 'Switzerland',
};

const impactCards = [
    {
        title: 'Earlier planning',
        description:
            'The findings point to the need for transition planning well before the end of a performance career feels imminent.',
        icon: Calendar,
    },
    {
        title: 'A global pattern',
        description:
            'The gap appears across multiple countries, which helps frame the issue as an industry-wide reality rather than a personal failure.',
        icon: Globe,
    },
    {
        title: 'Less isolation',
        description:
            'Research helps dancers see that uncertainty, grief, and surprise around retirement timing are shared experiences.',
        icon: Shield,
    },
];

const usageCards = [
    {
        title: 'Understand the gap',
        description:
            'The chart shows the difference between when dancers expect to retire and when they actually do, making the gap much easier to understand.',
        icon: TrendingUp,
    },
    {
        title: 'Compare contexts',
        description:
            'Use the country selector to see how retirement patterns vary across regions while still revealing a broader global pattern.',
        icon: Globe,
    },
    {
        title: 'Plan your timeline',
        description:
            'If the data shows dancers retire years earlier than expected, it becomes much easier to see why planning sooner matters.',
        icon: Users,
    },
];

const countryTableRows = (Object.keys(ageData) as Country[]).map((country) => {
    const [expected, actual] = ageData[country];
    const gap = Number((expected.value - actual.value).toFixed(1));

    return {
        country,
        label: countryLabels[country],
        expected: expected.value,
        actual: actual.value,
        gap,
    };
});

const getAgeStats = (country: Country) => {
    const [expected, actual] = ageData[country];
    const gap = Number((expected.value - actual.value).toFixed(1));

    return [
        {
            label: 'Expected retirement age',
            value: `${expected.value}`,
            caption: 'What dancers thought their career length would be',
        },
        {
            label: 'Actual retirement age',
            value: `${actual.value}`,
            caption: 'What happened in practice',
        },
        {
            label: 'Expectation gap',
            value: `${gap} yrs`,
            caption: 'How much earlier careers ended on average',
        },
        {
            label: 'Core insight',
            value: 'Plan earlier',
            caption: 'Transition preparation needs to start sooner than most expect',
        },
    ];
};

const CardShell = ({
    children,
    className = '',
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <div className={`rounded-[34px] border border-[#E8E0D4] bg-[#F5F6F2] p-4 shadow-[0_30px_70px_rgba(45,49,56,0.08)] ${className}`}>
        <div className="h-full rounded-[28px] border border-black/8 bg-white">{children}</div>
    </div>
);

export default function ExpectationsVsRealityPage() {
    const [selectedCountry, setSelectedCountry] = useState<Country>('Australia');
    const selectedStats = useMemo(() => getAgeStats(selectedCountry), [selectedCountry]);

    return (
        <SiteChrome>
            <section className="px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-12 lg:pt-32">
                <div className="mx-auto max-w-[1280px]">
                    <div className="max-w-3xl text-center lg:text-left">
                        <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#7A7D86]">
                            RESEARCH
                        </div>
                        <h1 className="mt-5 text-[48px] font-bold leading-[0.95] tracking-[-0.04em] text-[#111827] md:text-[64px] lg:text-[76px]">
                            Expectations vs Reality
                        </h1>
                        <p className="mt-5 max-w-2xl text-[18px] leading-8 text-[#60636B]">
                            Research shows a significant gap between when dancers expect to retire and when they actually do.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#F7F2EA] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-[1280px]">
                    <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
                        <CardShell className="h-full">
                            <div className="flex h-full flex-col p-5 md:p-6">
                                <div className="flex flex-col items-center justify-between gap-3 rounded-[24px] border border-black/8 bg-white px-5 py-4 text-center sm:flex-row sm:text-left">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF2F5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#647C90]">
                                        Free resource
                                    </div>
                                    <div className="rounded-full border border-[#E5DDCF] bg-[#FCFAF6] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5E6167]">
                                        Practical context
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-1 flex-col gap-4">
                                    <div className="rounded-[26px] border border-black/8 bg-white px-5 py-6 md:px-6">
                                        <div className="mt-5 text-center md:text-left">
                                            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                                How to use this
                                            </p>
                                            <h2 className="mt-3 text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827] md:text-[36px]">
                                                How to read and use the research
                                            </h2>
                                            <p className="mt-4 text-[15px] leading-8 text-[#60636B]">
                                                The point of the data is not just to inform. It is to help dancers plan earlier, interpret their own timeline more honestly, and make stronger transition decisions.
                                            </p>
                                        </div>

                                        <div className="mt-6 grid gap-4">
                                            {usageCards.map((item) => (
                                                <div
                                                    key={item.title}
                                                    className="rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] px-5 py-5"
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#647C90] text-white">
                                                            <item.icon className="h-5 w-5" />
                                                        </div>
                                                        <div>
                                                            <div className="text-[22px] font-bold leading-tight text-[#111827]">
                                                                {item.title}
                                                            </div>
                                                            <p className="mt-3 text-[14px] leading-7 text-[#60636B]">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                            <a
                                                href="#data"
                                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#647C90] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#556c7f]"
                                            >
                                                Explore the data
                                                <ArrowRight className="h-4 w-4" />
                                            </a>
                                            <a
                                                href="/resources"
                                                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-[#FCFAF6] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#111827]"
                                            >
                                                Browse all resources
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardShell>

                        <div className="grid gap-8">
                            <CardShell>
                                <div className="p-5 md:p-6">
                                    <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                        Why this matters
                                    </div>
                                    <h2 className="mt-3 text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827]">
                                        The data makes the emotional reality easier to name
                                    </h2>

                                    <div className="mt-5 grid gap-4">
                                        {impactCards.map((item) => (
                                            <div
                                                key={item.title}
                                                className="rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] px-5 py-5"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#647C90] text-white">
                                                        <item.icon className="h-5 w-5" />
                                                    </div>
                                                    <div>
                                                        <div className="text-[22px] font-bold leading-tight text-[#111827]">
                                                            {item.title}
                                                        </div>
                                                        <p className="mt-3 text-[14px] leading-7 text-[#60636B]">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-5 border-t border-[#E8E0D4] pt-5">
                                        <div className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                            Research insight
                                        </div>
                                        <div className="rounded-[22px] border border-black/8 bg-white px-5 py-5">
                                            <p className="text-[18px] font-medium leading-8 text-[#4E4F50] md:text-[20px] md:leading-9">
                                                “When dancers see the expectation gap in the research, it becomes easier to understand that early retirement is a structural part of the profession rather than a personal failure.”
                                            </p>
                                            <a
                                                href={sourceUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[#647C90]"
                                            >
                                                View source
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardShell>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-8">
                        <CardShell>
                            <div id="data" className="p-5 md:p-6">
                                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                                    <div>
                                        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                            Interactive data
                                        </div>
                                        <h2 className="mt-3 text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827] md:text-[36px]">
                                            Compare what dancers expected with what actually happened
                                        </h2>
                                        <p className="mt-4 max-w-3xl text-[15px] leading-8 text-[#60636B]">
                                            Use the selector to move between countries, then review the chart, summary cards, and comparison table below.
                                        </p>
                                    </div>
                                    <a
                                        href={sourceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[#647C90]"
                                    >
                                        View source
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                </div>

                                <div className="mt-6 flex justify-center lg:justify-start">
                                    <div className="inline-flex flex-wrap justify-center gap-2 rounded-full border border-black/8 bg-[#FCFAF6] p-2 shadow-[0_18px_40px_rgba(45,49,56,0.06)]">
                                        {(Object.keys(countryLabels) as Country[]).map((country) => (
                                            <button
                                                key={country}
                                                type="button"
                                                onClick={() => setSelectedCountry(country)}
                                                className="rounded-full px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.14em] transition"
                                                style={{
                                                    backgroundColor: selectedCountry === country ? '#647C90' : 'transparent',
                                                    color: selectedCountry === country ? '#FFFFFF' : '#60636B',
                                                }}
                                            >
                                                {country === 'UnitedStates' ? 'USA' : country}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 rounded-[26px] border border-[#E8E0D4] bg-[#FCFAF6]">
                                    <div className="border-b border-black/8 bg-[#647C90] px-6 py-6 text-white md:px-8">
                                        <h3 className="text-[26px] font-bold tracking-[-0.02em]">
                                            Average retirement age for {countryLabels[selectedCountry]} dancers
                                        </h3>
                                        <p className="mt-2 text-[15px] leading-7 text-white/80">
                                            Expectations show when dancers thought they would retire. Reality shows when they actually did.
                                        </p>
                                    </div>

                                    <div className="p-5 md:p-8">
                                        <div className="h-[320px] md:h-[420px]">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart
                                                    data={ageData[selectedCountry]}
                                                    margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
                                                >
                                                    <CartesianGrid strokeDasharray="3 3" stroke="#D7D0C4" />
                                                    <XAxis
                                                        dataKey="category"
                                                        stroke="#4E4F50"
                                                        tick={{ fontSize: 12, fontFamily: 'Montserrat, sans-serif' }}
                                                    />
                                                    <YAxis
                                                        stroke="#4E4F50"
                                                        tick={{ fontSize: 12, fontFamily: 'Montserrat, sans-serif' }}
                                                        label={{
                                                            value: 'Age (years)',
                                                            angle: -90,
                                                            position: 'insideLeft',
                                                            style: {
                                                                textAnchor: 'middle',
                                                                fill: '#4E4F50',
                                                                fontFamily: 'Montserrat, sans-serif',
                                                                fontSize: 12,
                                                            },
                                                        }}
                                                    />
                                                    <Tooltip
                                                        formatter={(value) => [`${value} years`, '']}
                                                        contentStyle={{
                                                            backgroundColor: '#F5F6F2',
                                                            borderColor: '#D7D0C4',
                                                            borderRadius: '12px',
                                                            fontFamily: 'Montserrat, sans-serif',
                                                            fontSize: '12px',
                                                        }}
                                                        labelStyle={{
                                                            color: '#111827',
                                                            fontFamily: 'Merriweather, serif',
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
                                                        name="Dance career retirement age"
                                                        fill="#928490"
                                                        radius={[8, 8, 0, 0]}
                                                    >
                                                        <LabelList
                                                            dataKey="value"
                                                            position="top"
                                                            style={{
                                                                fill: '#4E4F50',
                                                                fontFamily: 'Montserrat, sans-serif',
                                                                fontSize: '12px',
                                                                fontWeight: 600,
                                                            }}
                                                        />
                                                    </Bar>
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                                    {selectedStats.map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] px-5 py-5"
                                        >
                                            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                                {stat.label}
                                            </div>
                                            <div className="mt-3 text-[34px] font-bold leading-none tracking-[-0.03em] text-[#111827]">
                                                {stat.value}
                                            </div>
                                            <p className="mt-4 text-[14px] leading-7 text-[#60636B]">
                                                {stat.caption}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardShell>

                        <div className="grid gap-8">
                            <CardShell>
                                <div className="p-5 md:p-6">
                                    <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#7A7D86]">
                                        <BarChart3 className="h-4 w-4 text-[#647C90]" />
                                        Country comparison table
                                    </div>
                                    <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#60636B]">
                                        A direct comparison of expected retirement age, actual retirement age, and the average gap for each country represented in the research.
                                    </p>

                                    <div className="mt-5 overflow-hidden rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6]">
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full border-collapse">
                                                <thead>
                                                    <tr className="bg-white">
                                                        <th className="px-6 py-4 text-left text-[12px] font-bold uppercase tracking-[0.16em] text-[#7A7D86] md:px-8">
                                                            Country
                                                        </th>
                                                        <th className="px-6 py-4 text-left text-[12px] font-bold uppercase tracking-[0.16em] text-[#7A7D86] md:px-8">
                                                            Expected age
                                                        </th>
                                                        <th className="px-6 py-4 text-left text-[12px] font-bold uppercase tracking-[0.16em] text-[#7A7D86] md:px-8">
                                                            Actual age
                                                        </th>
                                                        <th className="px-6 py-4 text-left text-[12px] font-bold uppercase tracking-[0.16em] text-[#7A7D86] md:px-8">
                                                            Gap
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {countryTableRows.map((row) => (
                                                        <tr
                                                            key={row.country}
                                                            className="border-t border-black/8"
                                                            style={{
                                                                backgroundColor:
                                                                    row.country === selectedCountry
                                                                        ? 'rgba(100,124,144,0.06)'
                                                                        : '#FCFAF6',
                                                            }}
                                                        >
                                                            <td className="px-6 py-5 text-[16px] font-semibold text-[#111827] md:px-8">
                                                                {row.label}
                                                            </td>
                                                            <td className="px-6 py-5 text-[15px] text-[#60636B] md:px-8">
                                                                {row.expected}
                                                            </td>
                                                            <td className="px-6 py-5 text-[15px] text-[#60636B] md:px-8">
                                                                {row.actual}
                                                            </td>
                                                            <td className="px-6 py-5 md:px-8">
                                                                <span className="rounded-full bg-[#647C90] px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white">
                                                                    {row.gap} yrs
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </CardShell>
                        </div>
                    </div>
                </div>
            </section>
        </SiteChrome>
    );
}
