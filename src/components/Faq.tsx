import React, { useState, FC } from 'react';

const FAQ: FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default to the first FAQ being open

    const PlusIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
        </svg>
    );

    const MinusIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
        </svg>
    );

    const containerClasses = "flex flex-col w-full py-4 px-4 mb-3 bg-white rounded shadow dark:bg-gray-700";
    const buttonClasses = "p-2 bg-purple-gray rounded";
    const answerClasses = "mt-1 text-sm text-white transition-all duration-500 ease-in-out";
    const hiddenClasses = "opacity-0 max-h-0 overflow-hidden";
    const visibleClasses = "opacity-100 max-h-120";

    const faqItems = [
        {
            question: "What is Pivot for Dancers?",
            answer: (
                <>
                    <p>Pivot for Dancers offers resources for professional dancers who are making a career change.</p>
                    <br />
                    <p>We're a community of hundreds of dancers holding events and workshops to connect those going through similar transitions.</p>
                    <br />
                    <p>The best way to get involved is to join our email list where we share exclusive content and invitations.</p>
                </>
            ),
        },
        {
            question: "Who runs Pivot for Dancers?",
            answer: (
                <>
                    <p>Pivot for Dancers is run by former professional dancers who have made their own career transitions.</p>
                    <br />
                    <p>Founded by Kaylee Randall in 2020, our team is passionate about helping dancers thrive long after their final bow.</p>
                </>
            ),
        },
        {
            question: "What are Pivot Panels?",
            answer: (
                <>
                    <p>Pivot Panels are panel-style interviews with professional dancers who have successfully changed careers.</p>
                    <br></br>
                    <p>These valuable resources are available to help inspire you to take a leap of faith and
                        may give you some ideas of how you may want to pivot your career.</p>
                </>
            ),
        },
        {
            question: "What is the 'How to Pivot' ebook?",
            answer: (
                <>
                    <p>Written by our founder, Kaylee Randall, 'How to Pivot' is an <strong>actionable, dancer-specific</strong> guide to help
                        you find meaningful work of the stage.</p>
                    <br></br>
                    <p>In 10 chapters, Kaylee dives deep into psychological patterns that might
                        be holding you back and step-by-step activities to help you actually move on to your next stage.</p>
                    <br></br>
                    <p>With real-life examples from Kaylee's own career transition, 'How to Pivot' is essential reading for any dancer struggling with their next steps.</p>
                </>
            ),
        },
        {
            question: "What is the 'Happy Trails' Mini Course?",
            answer: (
                <>
                    <p>
                        If you're a professional dancer, you probably don't have a ton of time.
                        That's why we developed a quick but effective mini course to help you plan your pivot with an
                        <strong> in-depth, career change roadmap</strong>.
                    </p>
                    <br></br>
                    <p>
                        We lay it all out for you and take the guesswork out of changing careers. Our 5-year career roadmap
                        can help you stay on track and finally feel confident about your next steps.
                    </p>
                    <br></br>
                    <p>
                        <strong>Tailored to professional dancers</strong>, the 'Happy Trails' mini course offers:
                    </p>
                    <br></br>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>A clear, step-by-step career change plan</li>
                        <li>50+ non-dancer job ideas</li>
                        <li>Resume templates & interview script</li>
                    </ul>
                    <br></br>
                    <p>
                        For the dancers who want to make a plan for what's next but have no idea where to start, 'Happy Trails' is for you.
                    </p>
                </>
            ),
        },
        {
            question: "What is the Pivot for Dancers Mentorship Program?",
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
                    <br></br>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>3x one-hour virtual sessions with an experienced, former professional dancer</li>
                        <li>Private and confidential conversations</li>
                        <li>Tailored resources for your unique journey</li>
                        <li>Networking opportunities</li>
                    </ul>
                    <br />
                    <p>
                        Whether you're just starting to plan your pivot or you're already retired but still feel a little lost, the Pivot for Dancers Mentorship Program is exactly what you've been looking for.
                    </p>
                </>
            ),
        },
    ];

    return (
        <section id="faq-section" className="bg-beige">
            <div className="max-w-6xl py-4 px-4 mx-auto md:px-6">
                <header className="mb-6">
                    <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Feeling Curious?</span>
                    <h1 className="mt-2 text-3xl font-merriweather text-black md:text-5xl">FAQs</h1>
                </header>
                <div className="faq-items space-y-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className={containerClasses}>
                            <div className="flex items-center justify-between">
                                <span className="font-bold dark:text-white">{item.question}</span>
                                <button
                                    className={buttonClasses}
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                >
                                    {activeIndex === index ? <MinusIcon /> : <PlusIcon />}
                                </button>
                            </div>
                            <div
                                className={`${answerClasses} ${activeIndex === index ? visibleClasses : hiddenClasses}`}
                            >
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
