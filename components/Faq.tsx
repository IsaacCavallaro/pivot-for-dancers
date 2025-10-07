import React, { useState, FC } from 'react';
import Link from 'next/link';

const FAQ: FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faqItems = [
        {
            question: "What is Pivot for Dancers?",
            answer: (
                <>
                    <p>
                        Pivot for Dancers offers career change resources for professional dancers. Our mission is to help you find meaningful work off the stage.
                        Run by former professional dancers who have successfully changed careers, we're here to share what we've learned about making a pivot with
                        our growing community of fellow dancers.
                    </p>
                    <br />
                    <a
                        href='https://stats.sender.net/forms/aKrmkz/view'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full max-w-xs px-6 py-3 text-white rounded-2xl hover:opacity-90 text-center font-bold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                        style={{ backgroundColor: "#928490" }}
                    >
                        JOIN US
                    </a>
                </>
            ),
        },
        {
            question: "What are Pivot Conversations?",
            answer: (
                <>
                    <p>Pivot Conversations are free virtual meetups for dancers to have conversations about career change. </p>
                    <br />
                    <p>
                        Connect with other dancers going through similar experiences and feel less alone on your career change journey.
                    </p>
                    <br />
                    <a
                        href="https://stats.sender.net/forms/bmZM4r/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full max-w-xs px-6 py-3 text-white rounded-2xl hover:opacity-90 text-center font-bold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                        style={{ backgroundColor: "#928490" }}
                    >
                        SIGN UP
                    </a>
                </>
            ),
        },
        {
            question: "What is the How to Pivot ebook?",
            answer: (
                <>
                    <p>Written by our founder, Kaylee Randall, 'How to Pivot' is an <strong>actionable, dancer-specific</strong> guide to help
                        you find meaningful work off the stage.</p>
                    <br />
                    <p>In 10 chapters, Kaylee dives deep into psychological patterns that might
                        be holding you back and step-by-step activities to help you actually move on to your next stage.</p>
                    <br />
                    <p>With real-life examples from Kaylee's own career transition, 'How to Pivot' is essential reading for any dancer struggling with their next steps.</p>
                    <br />
                    <div className="mt-4 flex justify-center md:justify-start">
                        <a
                            href="https://buy.stripe.com/14k6oG8rQexsgCI147"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full max-w-xs px-6 py-3 text-white rounded-2xl hover:opacity-90 text-center font-bold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                            style={{ backgroundColor: "#928490" }}
                        >
                            ORDER NOW
                        </a>
                    </div>
                </>
            ),
        },
        {
            question: "What is the Happy Trails Mini Course?",
            answer: (
                <>
                    <p>
                        If you're a professional dancer, you probably don't have a ton of time.
                        That's why we developed a quick but effective mini course to help you plan your pivot with an
                        <strong> in-depth, career change roadmap</strong>.
                    </p>
                    <br />
                    <p>
                        We lay it all out for you and take the guesswork out of changing careers. Our 5-year career roadmap
                        can help you stay on track and finally feel confident about your next steps.
                    </p>
                    <br />
                    <p>
                        <strong>Tailored to professional dancers</strong>, the 'Happy Trails' mini course offers:
                    </p>
                    <br />
                    <ul className="list-disc pl-5 space-y-1">
                        <li>A clear, step-by-step career change plan</li>
                        <li>50+ non-dancer job ideas</li>
                        <li>Resume templates & interview script</li>
                    </ul>
                    <br />
                    <p>
                        For the dancers who want to make a plan for what's next but have no idea where to start, 'Happy Trails' is for you.
                    </p>
                    <br />
                    <a
                        href="https://buy.stripe.com/dR628qgYm750aek6oq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full max-w-xs px-6 py-3 text-white rounded-2xl hover:opacity-90 text-center font-bold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                        style={{ backgroundColor: "#928490" }}
                    >
                        ORDER NOW
                    </a>
                </>
            ),
        },
        {
            question: "What is the Pivot Mentorship Program?",
            answer: (
                <>
                    <p>
                        The Pivot for Dancers Mentorship Program is private, one-on-one support for professional dancers to help you find meaningful work off the stage.
                    </p>
                    <br />
                    <p>
                        Structured with clear goal-setting and targeted reflection, our Mentorship Program is designed to offer actionable results.
                    </p>
                    <br />
                    <p>
                        You'll be paired with an experienced, former professional dancer to guide you through these challenging times.
                        As part of the program, you'll receive:
                    </p>
                    <br />
                    <ul className="list-disc pl-5 space-y-1">
                        <li>3x one-hour virtual sessions with an experienced, former professional dancer</li>
                        <li>Private and confidential conversations</li>
                        <li>Tailored resources for your unique journey</li>
                        <li>Networking opportunities</li>
                    </ul>
                    <br />
                    <a
                        href="https://tidycal.com/pivotfordancers/mentorship-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full max-w-xs px-6 py-3 text-white rounded-2xl hover:opacity-90 text-center font-bold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                        style={{ backgroundColor: "#928490" }}
                    >
                        BOOK NOW
                    </a>
                </>
            ),
        },
    ];

    return (
        <section id="faq-section" className="relative overflow-hidden" style={{ backgroundColor: "#E2DED0" }}>
            <div className="absolute inset-0 bg-[radial-gradient(#d5d1c5_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

            <div className="relative py-20 pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <header className="mb-4 text-center">
                        <div className="inline-flex items-center justify-center px-6 py-3 rounded-full mb-6 border backdrop-blur-xl shadow-xl"
                            style={{ borderColor: 'rgba(100, 124, 144, 0.3)', backgroundColor: 'rgba(100, 124, 144, 0.7)' }}>
                            <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#E2DED0' }}></div>
                            <span className="text-sm font-bold tracking-widest text-white">FAQS</span>
                            <div className="w-2 h-2 rounded-full ml-3" style={{ backgroundColor: '#E2DED0' }}></div>
                        </div>
                    </header>

                    <div className="faq-items space-y-6 max-w-4xl mx-auto">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl shadow-2xl border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
                                style={{ borderColor: "#647C90" }}
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <div className="flex items-center justify-between p-6">
                                    <span className="font-bold text-xl pr-4" style={{ color: "#647C90" }}>
                                        {item.question}
                                    </span>
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 shadow-lg transition-all duration-300"
                                        style={{ backgroundColor: activeIndex === index ? "#928490" : "#647C90" }}>
                                        {activeIndex === index ? (
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                <div
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-6 pb-6 text-base leading-relaxed font-medium" style={{ color: "#746C70" }}>
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;