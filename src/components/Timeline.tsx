import React, { useState } from 'react';

const Timeline: React.FC = () => {
    const [visibleStage, setVisibleStage] = useState<number | null>(null);

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
                            <div className="relative z-20 p-6 text-center">
                                <h2 className="text-lg font-semibold text-white">
                                    THE DREAM
                                </h2>
                                <div className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center border-2 border-blue-500 rounded-full dark:border-blue-400">
                                    {visibleStage === 1 ? (
                                        <i className="fas fa-chevron-up text-white text-xl"></i>
                                    ) : (
                                        <i className="fas fa-chevron-down text-white text-xl"></i>
                                    )}
                                </div>
                                <div className="mt-2 flex justify-center">
                                    {/* Icon placement */}
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
                            <div className="relative z-20 p-6 text-center">
                                <h2 className="text-lg font-semibold text-white">
                                    THE GRIT
                                </h2>
                                <div className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center border-2 border-blue-500 rounded-full dark:border-blue-400">
                                    {visibleStage === 2 ? (
                                        <i className="fas fa-chevron-up text-white text-xl"></i>
                                    ) : (
                                        <i className="fas fa-chevron-down text-white text-xl"></i>
                                    )}
                                </div>
                                <div className="mt-2 flex justify-center">
                                    {/* Optional additional content */}
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
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border border-black rounded-full">
                                    <i className="fas fa-7 text-black text-xl"></i>
                                </div>
                            </div>
                            <div className="w-px h-full dark:bg-gray-700"></div>
                        </div>
                        <div
                            className={`relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-700 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer ${visibleStage === 3 ? 'bg-gray-200 dark:bg-gray-600' : ''
                                }`}
                            onClick={() => toggleStage(3)}
                        >
                            <div className="relative z-20 p-6 text-center">
                                <h2 className="text-lg font-semibold text-white">
                                    THE REALITY
                                </h2>
                                <div className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center border-2 border-blue-500 rounded-full dark:border-blue-400">
                                    {visibleStage === 3 ? (
                                        <i className="fas fa-chevron-up text-white text-xl"></i>
                                    ) : (
                                        <i className="fas fa-chevron-down text-white text-xl"></i>
                                    )}
                                </div>
                                <div className="mt-2 flex justify-center">
                                    {/* Optional additional content */}
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
                            <div className="relative z-20 p-6 text-center">
                                <h2 className="text-lg font-semibold text-white">
                                    {visibleStage === 4 ? 'LOOK AT YOU' : 'THE PIVOT'}
                                </h2>
                                <div className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center border-2 border-blue-500 rounded-full dark:border-blue-400">
                                    {visibleStage === 4 ? (
                                        <i className="fas fa-chevron-up text-white text-xl"></i>
                                    ) : (
                                        <i className="fas fa-chevron-down text-white text-xl"></i>
                                    )}
                                </div>
                                {visibleStage === 4 && (
                                    <p className="mt-4 leading-7 text-white font-montserrat text-lg">
                                        You’ve pivoted to a new career path, maybe teaching or choreography. You’re still passionate about dancing but find joy in helping others, and you’re starting to see new opportunities. This new direction brings a fresh perspective and excitement to your life.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-full lg:px-8 px-4">
                        <h2 className="mt-2 mb-4 text-2xl font-bold text-black">
                            What's your next stage?
                        </h2>
                        <p className="mb-4 text-base leading-7 text-black">
                            If you’ve gone through any of these stages, <span className="text-lg lg:text-xl font-semibold">Pivot for Dancers is for you.</span>
                        </p>
                        <p className="mb-4 text-base leading-7 text-black">
                            Of course, everyone’s story is wonderfully unique, but if you resonate at all, <span className="text-lg lg:text-xl font-semibold">you’re in the right place.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Timeline;
