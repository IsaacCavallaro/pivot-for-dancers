import { useMemo, useState } from 'react';
import { BarChart3, Calendar, ExternalLink, Globe, Shield, TrendingUp, Users } from 'lucide-react';
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
import {
    InfoGrid,
    PageHero,
    SectionBlock,
    SiteChrome,
} from '../../components/site/MarketingPrimitives';

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

export default function ExpectationsVsRealityPage() {
    const [selectedCountry, setSelectedCountry] = useState<Country>('Australia');

    const selectedStats = useMemo(() => getAgeStats(selectedCountry), [selectedCountry]);

    return (
        <SiteChrome>
            <PageHero
                eyebrow="RESEARCH"
                title="Expectations vs Reality"
                description="Research-backed context for one of the hardest truths in dance: careers often end earlier than dancers expect. This page restores the original data view in a cleaner, more professional format."
                primaryCta={{ label: 'Explore the data', href: '#data', dark: true }}
                secondaryCta={{ label: 'Browse all resources', href: '/resources' }}
                metrics={[
                    { value: '9+', label: 'average years between expectation and reality' },
                    { value: '3', label: 'countries represented in the data' },
                    { value: '32.2', label: 'average retirement age in Australia' },
                    { value: 'Free', label: 'access to this research resource' },
                ]}
                media={
                    <div className="rounded-[40px] border border-[#E6DED2] bg-white p-5 shadow-[0_34px_80px_rgba(45,49,56,0.08)]">
                        <img src="/assets/data.png" alt="Expectations vs Reality data graphic" className="mx-auto h-[420px] w-auto object-contain" />
                    </div>
                }
            />

            <SectionBlock
                label="WHY THIS MATTERS"
                title="The data makes the emotional reality easier to name"
                description="When dancers see that the gap between expectation and reality is structural, not just personal, it becomes easier to plan earlier and carry less shame about the pivot."
                background="#FFFFFF"
            >
                <InfoGrid
                    cards={[
                        {
                            title: 'Earlier planning',
                            description: 'The findings point to the need for transition planning well before the end of a performance career feels imminent.',
                            icon: Calendar,
                        },
                        {
                            title: 'A global pattern',
                            description: 'The gap appears across multiple countries, which helps frame the issue as an industry-wide reality rather than a personal failure.',
                            icon: Globe,
                        },
                        {
                            title: 'Less isolation',
                            description: 'Research helps dancers see that uncertainty, grief, and surprise around retirement timing are shared experiences.',
                            icon: Shield,
                        },
                    ]}
                />
            </SectionBlock>

            <SectionBlock
                label="INTERACTIVE DATA"
                title="Compare what dancers expected with what actually happened"
                description="Use the selector to move between countries, then review the chart, summary cards, and comparison table below."
                background="#F7F2EA"
            >
                <div id="data" className="space-y-8">
                    <div className="flex justify-center">
                        <div className="inline-flex flex-wrap justify-center gap-2 rounded-full border border-black/8 bg-white p-2 shadow-[0_18px_40px_rgba(45,49,56,0.06)]">
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

                    <div className="rounded-[40px] border border-[#E5DDCF] bg-white shadow-[0_32px_76px_rgba(45,49,56,0.08)]">
                        <div className="border-b border-black/8 bg-[#647C90] px-6 py-6 text-white md:px-8">
                            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h3 className="text-[26px] font-bold tracking-[-0.02em]">
                                        Average retirement age for {countryLabels[selectedCountry]} dancers
                                    </h3>
                                    <p className="mt-2 text-[15px] leading-7 text-white/80">
                                        Expectations show when dancers thought they would retire. Reality shows when they actually did.
                                    </p>
                                </div>
                                <a
                                    href={sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-white/90"
                                >
                                    View source
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            </div>
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

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {selectedStats.map((stat) => (
                            <div key={stat.label} className="rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_18px_40px_rgba(45,49,56,0.05)]">
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

                    <div className="overflow-hidden rounded-[36px] border border-[#E5DDCF] bg-white shadow-[0_28px_64px_rgba(45,49,56,0.06)]">
                        <div className="border-b border-black/8 px-6 py-5 md:px-8">
                            <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#7A7D86]">
                                <BarChart3 className="h-4 w-4 text-[#647C90]" />
                                Country comparison table
                            </div>
                            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#60636B]">
                                A direct comparison of expected retirement age, actual retirement age, and the average gap for each country represented in the research.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#F5F6F2]">
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
                                                backgroundColor: row.country === selectedCountry ? 'rgba(100,124,144,0.06)' : '#FFFFFF',
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
            </SectionBlock>

            <SectionBlock
                label="HOW TO USE THIS"
                title="What this research helps dancers do"
                description="The value of the page is not just the data itself, but how it reframes planning, expectations, and the emotional story dancers tell themselves about transition."
                background="#FFFFFF"
            >
                <InfoGrid
                    cards={[
                        {
                            title: 'Understand the gap',
                            description: 'The difference between expectation and reality helps explain why the pivot can feel abrupt even when dancers know careers are short.',
                            icon: TrendingUp,
                        },
                        {
                            title: 'Compare contexts',
                            description: 'The country selector gives dancers a broader frame for how retirement timing varies, while still showing a consistent pattern overall.',
                            icon: Globe,
                        },
                        {
                            title: 'Plan with more honesty',
                            description: 'The findings support earlier conversations about skill-building, money, identity, and what comes next beyond the stage.',
                            icon: Users,
                        },
                    ]}
                />
            </SectionBlock>
        </SiteChrome>
    );
}
