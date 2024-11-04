import React, { useState, ReactNode } from 'react';

const FAQ: React.FC = () => {
    const [showAnswer1, setShowAnswer1] = useState<boolean>(true);
    const [showAnswer2, setShowAnswer2] = useState<boolean>(false);
    const [showAnswer3, setShowAnswer3] = useState<boolean>(false);
    const [showAnswer4, setShowAnswer4] = useState<boolean>(false);
    const [showAnswer5, setShowAnswer5] = useState<boolean>(false);
    const [showAnswer6, setShowAnswer6] = useState<boolean>(false);

    const PlusIcon: React.FC = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
        </svg>
    );

    const MinusIcon: React.FC = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
        </svg>
    );

    // Common class names
    const sectionClasses = "flex flex-col justify-between w-full py-4 pl-4 pr-3 mb-3 bg-white rounded shadow dark:bg-gray-700";
    const titleClasses = "font-bold dark:text-white";
    const answerClasses = "mt-1 text-sm text-white transition-all duration-1000 ease-in-out";
    const buttonClasses = "p-2 bg-purple-gray rounded";

    // Function to render each FAQ item
    const renderFAQItem = (
        title: string | ReactNode,
        answer: string | ReactNode,
        isVisible: boolean,
        toggleVisibility: () => void
    ) => (
        <div className={sectionClasses}>
            <div className="flex items-center justify-between">
                <span className={titleClasses}>{title}</span>
                <button className={buttonClasses} onClick={toggleVisibility}>
                    {isVisible ? <MinusIcon /> : <PlusIcon />}
                </button>
            </div>
            <div className={`${answerClasses} ${isVisible ? 'opacity-100 max-h-120' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                {answer}
            </div>
        </div>
    );

    return (
        <section id="faq-section" className="bg-beige">
            <div className="max-w-6xl py-4 mx-auto md:px-6">
                <div className="px-4 pl-4 mb-6">
                    <span className="text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather">FEELING CURIOUS?</span>
                    <h1 className="mt-2 text-3xl font-merriweather text-black md:text-5xl">
                        FAQs
                    </h1>
                </div>
                <div className="flex items-center h-auto">
                    <div className="w-full p-4 mx-auto">
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex-1">
                                {renderFAQItem(
                                    "What is Pivot for Dancers?",
                                    <div >
                                        <p>Pivot for Dancers offers resources for professional dancers who are making a career change.
                                            We're also a community of hundreds of dancers just like you and we hold events and workshops to
                                            help you connect with others who might be going through something similar to you.
                                            The best way to get involved is to join our email list where we share exclusive content and invitations.</p>
                                    </div>,
                                    showAnswer1,
                                    () => setShowAnswer1(!showAnswer1)
                                )}
                                {renderFAQItem(
                                    "Who runs Pivot for Dancers?",
                                    <div>
                                        <p>Pivot for Dancers is run by former professional dancers who have made their own career transitions.
                                            Founded by Kaylee Randall in 2020 and supported by hundreds of dancers along the way,
                                            our team is passionate about helping dancers thrive long after taking their final bow.</p>
                                    </div>,
                                    showAnswer2,
                                    () => setShowAnswer2(!showAnswer2)
                                )}
                                {renderFAQItem(
                                    "What are Pivot Panels?",
                                    <div>
                                        <p>Pivot Panels are panel-style interviews with professional dancers who have successfully changed careers.
                                            These valuable resources are available to help inspire you to take a leap of faith and
                                            may give you some ideas of how you may want to pivot your career.</p>
                                    </div>,
                                    showAnswer3,
                                    () => setShowAnswer3(!showAnswer3)
                                )}
                                {renderFAQItem(
                                    "What is the 'How to Pivot' ebook?",
                                    <div>
                                        <p>Written by our founder, Kaylee Randall, 'How to Pivot' is an actionable, dancer-specific guide to help you find meaningful work of the stage. .</p>
                                        <br></br>
                                        <p>In 10 chapters, Kaylee dives deep into psychological patterns that might be holding you back and step-by-step activities to help you actually move on to your next stage. </p>
                                        <br></br>
                                        <p>With real-life examples from Kaylee's own career transition, 'How to Pivot' is essential reading for any dancer struggling with their next steps.</p>
                                    </div>,
                                    showAnswer4,
                                    () => setShowAnswer4(!showAnswer4)
                                )}
                                {renderFAQItem(
                                    "What is the 'Happy Trails' Mini Course?",
                                    <div>
                                        <p>If you're a professional dancer, you probably don't have a ton of time.
                                            That's why we developed a quick but effective mini course to help you plan your pivot with an <strong>in-depth, career change roadmap</strong>.</p>
                                        <br></br>
                                        <p>We lay it all out for you and take the guesswork out of changing careers. Our 5-year career roadmap can help you stay on track and finally feel confident about your next steps.</p>
                                        <p><strong>Tailored to professional dancers</strong>, the 'Happy Trails' mini course offers:</p>
                                        <br></br>
                                        <ul className="list-disc list-inside ml-4">
                                            <li>A clear, step-by-step career change plan</li>
                                            <li>50+ non-dancer job ideas</li>
                                            <li>2 resume templates & interview script</li>
                                        </ul>
                                        <br></br>
                                        <p>For the dancers who want to make a plan for what's next but have no idea where to start, 'Happy Trails' is for you.</p>
                                    </div>,
                                    showAnswer5,
                                    () => setShowAnswer5(!showAnswer5)
                                )}

                                {renderFAQItem(
                                    "What is the Pivot for Dancers Mentorship Program?",
                                    <div>
                                        <p>The Pivot for Dancers Mentorship Program is private, one-on-one support for professional dancers to help you find meaningful work off the stage. </p>
                                        <br></br>
                                        <p>Structured with clear goal-setting and targeted reflection, our Mentorship Program is designed to offer actionable results. </p>
                                        <br></br>
                                        <p>You'll be paired with an experienced, former professional dancer to guide you through these challenging times. As part of the program you'll receive:</p>
                                        <br></br>
                                        <ul className="list-disc list-inside ml-4">
                                            <li>3x one-hour virtual sessions with an experienced, former professional dancer</li>
                                            <li>Guided goal-setting and reflection</li>
                                            <li>Tailored resources for your unique journey</li>
                                            <li>Networking opportunities</li>
                                        </ul>
                                        <br></br>
                                        <p>Whether you're just starting to plan your pivot or you're already retired but still feel a little lost, the Pivot for Dancers Mentorship Program is exactly what you've been looking for..</p>
                                    </div>,
                                    showAnswer6,
                                    () => setShowAnswer6(!showAnswer6)
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
