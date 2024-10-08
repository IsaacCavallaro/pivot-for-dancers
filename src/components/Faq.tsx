import React, { useState } from 'react';

const FAQ = () => {
    const [showAnswer1, setShowAnswer1] = useState(true);
    const [showAnswer2, setShowAnswer2] = useState(false);
    const [showAnswer3, setShowAnswer3] = useState(false);
    const [showAnswer4, setShowAnswer4] = useState(false);

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
                                <div className="flex flex-col justify-between w-full py-4 pl-4 pr-3 mb-3 bg-white rounded shadow dark:bg-gray-700">
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold dark:text-white"> What is Pivot for Dancers?</span>
                                        <button className="p-2 bg-purple-gray rounded" onClick={() => setShowAnswer1(!showAnswer1)}>
                                            {showAnswer1 ? <MinusIcon /> : <PlusIcon />}
                                        </button>
                                    </div>
                                    <div className={`mt-1 text-sm text-white transition-all duration-1000 ease-in-out ${showAnswer1 ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                                        Pivot for Dancers offers resources for professional dancers who are making a career change. We’re also a community of hundreds of dancers just like you and we hold events and workshops to help you connect with others who might be going through something similar to you. The best way to get involved is to join our email list where we share exclusive content and invitations.
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between w-full py-4 pl-4 pr-3 mb-3 bg-white rounded shadow dark:bg-gray-700">
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold dark:text-white"> What are Pivot Panels? </span>
                                        <button className="p-2 bg-purple-gray rounded" onClick={() => setShowAnswer2(!showAnswer2)}>
                                            {showAnswer2 ? <MinusIcon /> : <PlusIcon />}
                                        </button>
                                    </div>
                                    <div className={`mt-1 text-sm text-white transition-all duration-1000 ease-in-out ${showAnswer2 ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                                        Pivot Panels are panel-style interviews with professional dancers who have successfully changed careers. These valuable resources are available to help inspire you to take a leap of faith and may give you some ideas of how you may want to pivot your career.
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between w-full py-4 pl-4 pr-3 mb-3 bg-white rounded shadow dark:bg-gray-700">
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold dark:text-white"> Who runs Pivot for Dancers? </span>
                                        <button className="p-2 bg-purple-gray rounded" onClick={() => setShowAnswer3(!showAnswer3)}>
                                            {showAnswer3 ? <MinusIcon /> : <PlusIcon />}
                                        </button>
                                    </div>
                                    <div className={`mt-1 text-sm text-white transition-all duration-1000 ease-in-out ${showAnswer3 ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                                        Pivot for Dancers is run by former professional dancers who have made their own career transitions. Founded by Kaylee Randall in 2020 and supported by hundreds of dancers along the way, our team is passionate about helping dancers thrive long after taking their final bow.
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between w-full py-4 pl-4 pr-3 mb-3 bg-white rounded shadow dark:bg-gray-700">
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold dark:text-white"> When is the next Pivot Conversations?</span>
                                        <button className="p-2 bg-purple-gray rounded" onClick={() => setShowAnswer4(!showAnswer4)}>
                                            {showAnswer4 ? <MinusIcon /> : <PlusIcon />}
                                        </button>
                                    </div>
                                    <div className={`mt-1 text-sm text-white transition-all duration-1000 ease-in-out ${showAnswer4 ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                                        The schedule for Pivot Conversations varies depending on the availability of our panelists and the topics we're covering. We announce upcoming conversations through our email list and social media channels, so be sure to join our email list and follow us to stay updated on the latest events!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
