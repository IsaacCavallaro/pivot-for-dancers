import Image from 'next/image';
import { ArrowRight, Brain, Search, UserCheck, Zap } from 'lucide-react';
import Quiz from '../../components/Quiz';
import { SiteChrome } from '../../components/site/MarketingPrimitives';

const personalityTypes = [
    {
        title: 'The Dreamer',
        description:
            'Thinking about life after dance feels like betraying a part of yourself. Naming a plan B can feel like giving up.',
        icon: Brain,
    },
    {
        title: 'The Perfectionist',
        description:
            'You love a solid plan and want clarity, options, and a reliable timeline so you can move forward with confidence.',
        icon: Zap,
    },
    {
        title: 'The Realist',
        description:
            'You are thoughtful, careful, and grounded in real-world stability. You want to build something solid without huge leaps.',
        icon: UserCheck,
    },
    {
        title: 'The Seeker',
        description:
            'For you, the pivot is about purpose. You want work that feels aligned, connected, and meaningful beyond the paycheck.',
        icon: Search,
    },
];

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

export default function FindYourPivotPersonalityPage() {
    return (
        <SiteChrome>
            <section className="px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-12 lg:pt-32">
                <div className="mx-auto max-w-[1280px]">
                    <div className="max-w-3xl text-center lg:text-left">
                        <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#7A7D86]">
                            QUIZ
                        </div>
                        <h1 className="mt-5 text-[48px] font-bold leading-[0.95] tracking-[-0.04em] text-[#111827] md:text-[64px] lg:text-[76px]">
                            Find Your Pivot Personality
                        </h1>
                        <p className="mt-5 max-w-2xl text-[18px] leading-8 text-[#60636B]">
                            Take our 2-minute quiz to uncover your unique approach to career transition and get personalized guidance.
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
                                        2-minute quiz
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-1 flex-col gap-4">
                                    <div className="rounded-[26px] border border-black/8 bg-white px-5 py-6 md:px-6">
                                        <div className="mt-5 text-center md:text-left">
                                            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                                What it is
                                            </p>
                                            <h2 className="mt-3 text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827] md:text-[36px]">
                                                A quick way to understand how you naturally approach the pivot
                                            </h2>
                                            <p className="mt-4 text-[15px] leading-8 text-[#60636B]">
                                                The quiz helps you recognise your starting point so the next step can feel more personal, more specific, and more useful.
                                            </p>
                                        </div>
                                        <div className="mt-6 overflow-hidden rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6]">
                                            <div className="relative aspect-[1/1] w-full">
                                                <Image
                                                    src="/assets/quiz.png"
                                                    alt="Pivot personality quiz"
                                                    fill
                                                    className="object-contain p-4"
                                                    sizes="(max-width: 768px) 100vw, 560px"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                            <a
                                                href="#quiz-section"
                                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#647C90] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#556c7f]"
                                            >
                                                Take the quiz
                                                <ArrowRight className="h-4 w-4" />
                                            </a>
                                            <a
                                                href="/resources"
                                                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-[#FCFAF6] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#111827]"
                                            >
                                                See all resources
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
                                        Personality types
                                    </div>
                                    <h2 className="mt-3 text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827]">
                                        Four common ways dancers approach the pivot
                                    </h2>
                                    <div className="mt-5 grid gap-4">
                                        {personalityTypes.map((item) => (
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
                                            Why it helps
                                        </div>
                                        <div className="rounded-[22px] border border-black/8 bg-white px-5 py-5">
                                            <p className="text-[18px] font-medium leading-8 text-[#4E4F50] md:text-[20px] md:leading-9">
                                                Your result is a starting point, not a label. Use it to decide whether you need deeper reflection, more structure, or direct support.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardShell>
                        </div>
                    </div>

                    <div className="mt-8">
                        <CardShell>
                            <div className="p-5 md:p-6">
                                <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                    Take the quiz
                                </div>
                                <h2 className="mt-3 text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827] md:text-[36px]">
                                    Ready to discover your pivot personality?
                                </h2>
                                <p className="mt-4 max-w-3xl text-[15px] leading-8 text-[#60636B]">
                                    Take the quick 7-question quiz and get a clearer read on how you naturally approach career change.
                                </p>
                                <div
                                    id="quiz-section"
                                    className="mt-6 overflow-hidden rounded-[26px] border border-[#E8E0D4] bg-[#FCFAF6] p-4 md:p-6"
                                >
                                    <Quiz />
                                </div>
                            </div>
                        </CardShell>
                    </div>

                    <div className="mt-8">
                        <CardShell>
                            <div className="p-5 md:p-6">
                                <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                    Next step
                                </div>
                                <div className="mt-3 grid gap-6 md:grid-cols-[1.08fr_0.92fr] md:items-center">
                                    <div>
                                        <h2 className="text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827] md:text-[36px]">
                                            Use your result to choose what support fits best
                                        </h2>
                                        <p className="mt-4 text-[15px] leading-8 text-[#60636B]">
                                            Your result is a starting point, not a label. Use it to decide whether you need deeper reflection, more structure, or direct support.
                                        </p>
                                    </div>
                                    <div className="rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] px-5 py-5">
                                        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                            Best next step
                                        </div>
                                        <p className="mt-3 text-[14px] leading-7 text-[#60636B]">
                                            If you want more tailored guidance after the quiz, mentorship can help you translate your result into clearer action and support.
                                        </p>
                                        <a
                                            href="/services/mentorship"
                                            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#647C90] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#556c7f]"
                                        >
                                            Book mentorship
                                            <ArrowRight className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </CardShell>
                    </div>
                </div>
            </section>
        </SiteChrome>
    );
}
