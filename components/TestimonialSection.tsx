import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
    {
        content:
            'Finally a platform that says what we are all thinking. Kaylee offers a supportive space and helps dancers understand they deserve joy in all aspects of life.',
        author: 'Christie Bellish',
        role: 'Former Dancer',
        imageSrc: '/assets/christie-bellish.jpeg',
    },
    {
        content:
            'A great community for dancers going through the difficult transition out of a full-time career in the performing arts into a new career. Support, guidance, and self-exploration all in one place.',
        author: 'Kelsey Glennon',
        role: 'Former Dancer & Travel Journalist',
        imageSrc: '/assets/kelsey-glennon.jpeg',
    },
    {
        content:
            'Pivot for Dancers came to me at the perfect time when I was ending my performing career due to injury and burnout and helped me realize that I was not alone.',
        author: 'Mallory Gladman',
        role: 'Former Dancer & Event Business Owner',
        imageSrc: '/assets/mallory-gladman.jpg',
    },
];

const reviewUrl = 'https://g.page/r/CfHdX47gLCCXEAI/review';

const TestimonialsSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setIndex((value) => (value + 1) % testimonials.length);
        }, 5000);

        return () => window.clearInterval(timer);
    }, []);

    const active = testimonials[index];

    return (
        <section className="relative overflow-hidden bg-[#F7F2EA] px-4 py-16 sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-0 opacity-55">
                <div className="absolute inset-y-0 left-0 w-[30rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),transparent_72%)]" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(0deg,rgba(247,242,234,0.9),rgba(247,242,234,0))]" />
            </div>
            <div className="relative mx-auto max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch lg:gap-10">
                    <div className="flex h-full flex-col gap-6 pt-2">
                        <div className="max-w-xl">
                            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#928490]">
                                TESTIMONIALS
                            </span>
                            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111827] md:text-5xl">
                                Real Stories from Dancers
                            </h2>
                            <p className="mt-4 max-w-md text-lg leading-8 text-[#5E6167]">
                                Honest feedback from dancers finding clarity, confidence, and a stronger sense of what comes next.
                            </p>
                        </div>

                        <div className="flex flex-1 flex-col rounded-[34px] border border-[#E8E0D4] bg-[#F5F6F2] p-4 shadow-[0_30px_70px_rgba(45,49,56,0.08)]">
                            <div className="flex items-center justify-between gap-4 rounded-[24px] border border-black/8 bg-white px-5 py-4">
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: 5 }).map((_, starIndex) => (
                                        <Star key={starIndex} className="h-4 w-4 fill-[#F4B740] text-[#F4B740]" />
                                    ))}
                                </div>
                                <div className="rounded-full bg-[#EEF2F5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#647C90]">
                                    Google review
                                </div>
                            </div>

                            <div className="mt-4 flex flex-1 flex-col justify-between rounded-[26px] border border-black/8 bg-white px-5 py-5 md:px-6">
                                <div>
                                    <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                        Share your experience
                                    </p>
                                    <h3 className="mt-3 max-w-[15ch] text-[24px] font-bold leading-[1.08] tracking-[-0.03em] text-[#111827] md:text-[26px]">
                                        Help another dancer feel less alone
                                    </h3>
                                    <p className="mt-3 max-w-sm text-[14px] leading-6 text-[#5E6167]">
                                        A short review can help the next dancer trust their next step.
                                    </p>
                                </div>

                                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="rounded-full border border-black/8 bg-[#F8F6F0] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#5E6167]">
                                        2 minutes or less
                                    </div>
                                    <a
                                        href={reviewUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-3 rounded-full bg-[#647C90] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[#556c7f]"
                                    >
                                        Add review
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex h-full flex-col rounded-[34px] border border-[#E8E0D4] bg-[#F5F6F2] p-4 shadow-[0_30px_70px_rgba(45,49,56,0.08)]"
                    >
                        <div className="flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-black/8 bg-white px-5 py-4">
                            <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, starIndex) => (
                                    <Star key={starIndex} className="h-4 w-4 fill-[#F4B740] text-[#F4B740]" />
                                ))}
                            </div>
                            <div className="rounded-full border border-[#E5DDCF] bg-[#FCFAF6] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5E6167]">
                                {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                            </div>
                        </div>

                        <div className="mt-4 flex flex-1 flex-col gap-4">
                            <div className="flex flex-1 items-center rounded-[26px] border border-black/8 bg-white px-5 py-6 md:px-6">
                                <p className="text-[22px] font-semibold leading-[1.55] text-[#111827] md:text-[28px]">
                                    “{active.content}”
                                </p>
                            </div>

                            <div className="flex flex-col gap-5 rounded-[26px] border border-black/8 bg-white px-5 py-5 xl:flex-row xl:items-center xl:justify-between">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={active.imageSrc}
                                        alt={active.author}
                                        width={96}
                                        height={96}
                                        className="h-16 w-16 rounded-full border border-black/8 object-cover"
                                    />
                                    <div>
                                        <div className="text-lg font-bold text-[#111827]">{active.author}</div>
                                        <div className="text-sm text-[#5E6167]">{active.role}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 xl:ml-auto">
                                    {testimonials.map((item, dotIndex) => (
                                        <button
                                            key={item.author}
                                            type="button"
                                            onClick={() => setIndex(dotIndex)}
                                            aria-label={`Show testimonial from ${item.author}`}
                                            className="h-2.5 rounded-full transition-all"
                                            style={{
                                                width: index === dotIndex ? 30 : 10,
                                                backgroundColor: index === dotIndex ? '#111827' : '#D6CDC1',
                                            }}
                                        />
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)}
                                        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5DDCF] bg-[#FCFAF6] text-[#111827]"
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIndex((value) => (value + 1) % testimonials.length)}
                                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111827] text-white"
                                    >
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
