import React, { useState, FC } from 'react';

const FAQ: FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const containerClasses = "flex flex-col w-full py-4 px-4 mb-3 bg-white rounded shadow dark:bg-gray-700 cursor-pointer hover:shadow-md transition-shadow duration-300";
    const answerClasses = "mt-1 text-sm text-white transition-all duration-1000 ease-in-out overflow-hidden";
    const hiddenClasses = "max-h-0 opacity-0";
    const visibleClasses = "max-h-[500px] opacity-100";
    const toggleIconContainerClasses = "w-8 h-8 flex items-center justify-center border-2 border-purple-gray rounded-full";

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
                    <br></br>
                    <a href='https://mailchi.mp/2129c6018f7d/pivot-for-dancers-email-sign-up' target="_blank" rel="noopener noreferrer" className="block w-full max-w-xs md:max-w-xs px-4 py-2 text-white bg-purple-gray rounded-md hover:bg-purple-gray opacity-80 hover:opacity-100 text-center">
                        JOIN US
                    </a>
                </>
            ),
        },
        {
            question: "What are Pivot Panels?",
            answer: (
                <>
                    <p>Pivot Panels are panel-style interviews with professional dancers who have successfully changed careers.</p>
                    <br></br>
                    <p>
                        These valuable resources are available to help inspire you to take a leap of faith and
                        may give you some ideas of how you may want to pivot your career.
                    </p>
                    <br></br>
                    <a href="https://www.youtube.com/playlist?list=PLjTsov7LqGgI2Tc2tsi_aH-_ZF0MuFT6r" target="_blank" rel="noopener noreferrer" className="block w-full max-w-xs md:max-w-xs px-4 py-2 text-white bg-purple-gray rounded-md hover:bg-purple-gray opacity-80 hover:opacity-100 text-center">
                        WATCH NOW
                    </a>
                </>
            ),
        },
        {
            question: "What is the How to Pivot ebook?",
            answer: (
                <>
                    <p>Written by our founder, Kaylee Randall, 'How to Pivot' is an <strong>actionable, dancer-specific</strong> guide to help
                        you find meaningful work of the stage.</p>
                    <br></br>
                    <p>In 10 chapters, Kaylee dives deep into psychological patterns that might
                        be holding you back and step-by-step activities to help you actually move on to your next stage.</p>
                    <br></br>
                    <p>With real-life examples from Kaylee's own career transition, 'How to Pivot' is essential reading for any dancer struggling with their next steps.</p>
                    <br></br>
                    <div className="mt-4 mx-auto flex justify-center md:justify-start">
                        <a href="https://www.amazon.com/dp/B0CXL4F57D" target="_blank" rel="noopener noreferrer" className="block w-full max-w-xs md:max-w-xs px-4 py-2 text-white bg-purple-gray rounded-md hover:bg-purple-gray opacity-80 hover:opacity-100 text-center">
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
                    <br></br>
                    <a href="https://buy.stripe.com/dR628qgYm750aek6oq" target="_blank" rel="noopener noreferrer" className="block w-full max-w-xs md:max-w-xs px-4 py-2 text-white bg-purple-gray rounded-md hover:bg-purple-gray opacity-80 hover:opacity-100 text-center">
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
                    <br></br>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>3x one-hour virtual sessions with an experienced, former professional dancer</li>
                        <li>Private and confidential conversations</li>
                        <li>Tailored resources for your unique journey</li>
                        <li>Networking opportunities</li>
                    </ul>
                    <br />
                    <br></br>
                    <a href="https://tidycal.com/pivotfordancers/mentorship-1" target="_blank" rel="noopener noreferrer" className="block w-full max-w-xs md:max-w-xs px-4 py-2 text-white bg-purple-gray rounded-md hover:bg-purple-gray opacity-80 hover:opacity-100 text-center">
                        BOOK NOW
                    </a>
                </>
            ),
        },
    ];

    return (
        <section id="faq-section" className="bg-beige">
            <div className="max-w-6xl py-4 px-4 mx-auto md:px-6">
                <header className="mb-6 text-center">
                    <h2 className="mt-2 text-3xl font-merriweather text-black md:text-4xl font-semibold text-center">FAQs</h2>
                    <span className="text-sm text-gray-600 uppercase dark:text-gray-400 text-center">Feeling Curious?</span>
                </header>
                <div className="faq-items space-y-4">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={containerClasses}
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-merriweather dark:text-white text-xl">{item.question}</span>
                                <div className={toggleIconContainerClasses}>
                                    {activeIndex === index ? (
                                        <i className="fas fa-chevron-up text-white text-xl"></i>
                                    ) : (
                                        <i className="fas fa-chevron-down text-white text-xl"></i>
                                    )}
                                </div>
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
