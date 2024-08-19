import React, { useState } from 'react';

const Timeline: React.FC = () => {
    // Set the initial visible stage to 1 (THE DREAM)
    const [visibleStage, setVisibleStage] = useState<number | null>(1);

    const toggleStage = (stageNumber: number) => {
        setVisibleStage(visibleStage === stageNumber ? null : stageNumber);
    };

    return (
        <section className="items-center bg-beige font-poppins">
            <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div className="px-4 pl-4 mb-6">
                    <span className="text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather">Does this sound familiar?</span>
                    <h1 className="mt-2 text-3xl font-merriweather text-black md:text-5xl">
                        Pivot Stages
                    </h1>
                </div>
                <div className="w-full mx-auto lg:max-w-3xl">
                    {/* STAGE 1 - THE DREAM */}
                    <div className="relative flex justify-between">
                        <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border border-black rounded-full">
                                    <i className="fas fa-5 text-black text-xl"></i>
                                </div>
                            </div>
                            <div className="w-px h-full dark:bg-gray-700"></div>
                        </div>
                        <div
                            className={`relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-700 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer ${visibleStage === 1 ? 'bg-gray-200 dark:bg-gray-600' : ''
                                }`}
                            onClick={() => toggleStage(1)}
                        >
                            <div className="relative z-20 p-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="flex-1 text-lg font-semibold text-white text-center">
                                        {visibleStage === 1 ? 'THE DREAM' : 'THE DREAM'}
                                    </h2>
                                    <div className="w-8 h-8 flex items-center justify-center border-2 border-purple-gray rounded-full">
                                        {visibleStage === 1 ? (
                                            <i className="fas fa-chevron-up text-white text-xl"></i>
                                        ) : (
                                            <i className="fas fa-chevron-down text-white text-xl"></i>
                                        )}
                                    </div>
                                </div>
                                {visibleStage === 1 && (
                                    <p className="mt-4 leading-7 text-white font-montserrat text-lg">
                                        You’ve trained to be a dancer since you were tiny. You graduate and finally book your first job. You’re buzzing and motivated, hungry for the next audition, ready for the next challenge. You work consistently as a professional dancer and you feel like you’re truly living the dream.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* THE GRIT */}
                    <div className="relative flex justify-between">
                        <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border border-black rounded-full">
                                    <i className="fas fa-6 text-black text-xl"></i>
                                </div>
                            </div>
                            <div className="w-px h-full dark:bg-gray-700"></div>
                        </div>
                        <div
                            className={`relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-700 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer ${visibleStage === 2 ? 'bg-gray-200 dark:bg-gray-600' : ''
                                }`}
                            onClick={() => toggleStage(2)}
                        >
                            <div className="relative z-20 p-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="flex-1 text-lg font-semibold text-white text-center">
                                        {visibleStage === 2 ? 'THE GRIT' : 'THE GRIT'}
                                    </h2>
                                    <div className="w-8 h-8 flex items-center justify-center border-2 border-purple-gray rounded-full">
                                        {visibleStage === 2 ? (
                                            <i className="fas fa-chevron-up text-white text-xl"></i>
                                        ) : (
                                            <i className="fas fa-chevron-down text-white text-xl"></i>
                                        )}
                                    </div>
                                </div>
                                {visibleStage === 2 && (
                                    <p className="mt-4 leading-7 text-white font-montserrat text-lg">
                                        You’re still dancing professionally and loving it. You also teach four nights a week, take any extra gig you can get, but still struggle to make ends meet. You work nights and most holidays and sometimes feel like you’re missing out on other aspects of life. But you’re living the dream, so who cares?
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* THE REALITY */}
                    <div className="relative flex justify-between">
                        <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div className="flex items-center justify-center w-10 h-10 border border-black rounded-full">
                                <i className="fas fa-7 text-black text-xl"></i>
                            </div>
                            <div className="w-px h-full dark:bg-gray-700"></div>
                        </div>
                        <div
                            className={`relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-700 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer ${visibleStage === 3 ? 'bg-gray-200 dark:bg-gray-600' : ''
                                }`}
                            onClick={() => toggleStage(3)}
                        >
                            <div className="relative z-20 p-6">
                                <div className="flex items-center">
                                    <h2 className="flex-1 text-lg font-semibold text-white text-center">
                                        THE REALITY
                                    </h2>
                                    <div className="w-8 h-8 flex items-center justify-center border-2 border-purple-gray rounded-full">
                                        {visibleStage === 3 ? (
                                            <i className="fas fa-chevron-up text-white text-xl"></i>
                                        ) : (
                                            <i className="fas fa-chevron-down text-white text-xl"></i>
                                        )}
                                    </div>
                                </div>
                                {visibleStage === 3 && (
                                    <p className="mt-4 leading-7 text-white font-montserrat text-lg">
                                        You’re older, achy, and unsure of where to. You’re no longer challenged and feel bored doing the same choreography day after day. You’re also broke and have no idea how to get ahead financially. Plus, you crave settling down but keep these thoughts to yourself because you’re living the dream, right?
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* THE PIVOT */}
                    <div className="relative flex justify-between">
                        <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border border-black rounded-full">
                                    <i className="fas fa-8 text-black"></i>
                                </div>
                            </div>
                            <div className="w-px h-full dark:bg-gray-700"></div>
                        </div>
                        <div
                            className={`relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-700 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer ${visibleStage === 4 ? 'bg-gray-200 dark:bg-gray-600' : ''
                                }`}
                            onClick={() => toggleStage(4)}
                        >
                            <div className="relative z-20 p-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="flex-1 text-lg font-semibold text-white text-center">
                                        {visibleStage === 4 ? 'LOOK AT YOU' : 'THE PIVOT'}
                                    </h2>
                                    <div className="w-8 h-8 flex items-center justify-center border-2 border-purple-gray rounded-full">
                                        {visibleStage === 4 ? (
                                            <i className="fas fa-chevron-up text-white text-xl"></i>
                                        ) : (
                                            <i className="fas fa-chevron-down text-white text-xl"></i>
                                        )}
                                    </div>
                                </div>
                                {visibleStage === 4 && (
                                    <p className="mt-4 leading-7 text-white font-montserrat text-lg">
                                        You’ve pivoted to a new career where you’re excited to wake up every day! You’re challenged again and your hard work is paying off. Plus, you finally have that stability you’ve always craved. Sure, it’s taken you a while to get here, but you wouldn’t change a thing!
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
