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
        <section className="bg-[#F7F2EA] px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#928490]">
                            TESTIMONIALS
                        </span>
                        <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111827] md:text-5xl">
                            What dancers say after finding Pivot for Dancers
                        </h2>
                        <p className="mt-5 max-w-md text-lg leading-8 text-[#5E6167]">
                            The proof should feel calm and confident: strong stories, clear outcomes, and emotional resonance.
                        </p>
                    </div>

                    <div
                        className="rounded-[40px] border border-[#E5DDCF] bg-white p-6 shadow-[0_32px_76px_rgba(45,49,56,0.08)] md:p-8"
                    >
                        <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                <Star key={starIndex} className="h-4 w-4 fill-[#F4B740] text-[#F4B740]" />
                            ))}
                        </div>

                        <p className="mt-6 text-2xl font-semibold leading-[1.7] text-[#111827] md:text-[30px]">
                            “{active.content}”
                        </p>

                        <div className="mt-8 flex flex-col gap-6 border-t border-[#EEE5DA] pt-6 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-4">
                                <Image
                                    src={active.imageSrc}
                                    alt={active.author}
                                    width={96}
                                    height={96}
                                    className="h-16 w-16 rounded-full object-cover"
                                />
                                <div>
                                    <div className="text-lg font-bold text-[#111827]">{active.author}</div>
                                    <div className="text-sm text-[#5E6167]">{active.role}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
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
        </section>
    );
};

export default TestimonialsSection;
