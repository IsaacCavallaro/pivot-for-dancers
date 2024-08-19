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
                    {/* THE DREAM */}
                    <div className="relative flex justify-between">
                        <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border border-blue-500 rounded-full dark:border-blue-400">
                                    <i className="fas fa-5 text-blue-500 dark:text-blue-400 text-xl"></i>
                                </div>
                            </div>
                            <div className="w-px h-full dark:bg-gray-700"></div>
                        </div>
                        <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-700">
                            <div className="relative z-20 p-6">
                                <button
                                    className="mt-4 mb-2 text-blue-500 font-semibold cursor-pointer"
                                    onClick={() => toggleStage(1)}
                                >
                                    {visibleStage === 1 ? 'Hide Stage 1' : 'THE DREAM'}
                                </button>
                                {visibleStage === 1 && (
                                    <p className="mt-4 mb-2 pt-4 leading-7 text-white font-montserrat">
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
                                <div className="flex items-center justify-center w-10 h-10 border border-blue-500 rounded-full dark:border-blue-400">
                                    <i className="fas fa-6 text-blue-500 dark:text-blue-400 text-xl"></i>
                                </div>
                            </div>
                            <div className="w-px h-full dark:bg-gray-700"></div>
                        </div>
                        <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-700">
                            <div className="relative z-20 p-6">
                                <button
                                    className="mt-4 mb-2 text-blue-500 font-semibold cursor-pointer"
                                    onClick={() => toggleStage(2)}
                                >
                                    {visibleStage === 2 ? 'Hide Stage 2' : 'THE GRIT'}
                                </button>
                                {visibleStage === 2 && (
                                    <p className="mt-4 mb-2 pt-4 leading-7 text-white font-montserrat">
                                        You’re still dancing professionally and loving it. You also teach four nights a week, take any extra gig you can get, but still struggle to make ends meet. You work nights and most holidays and sometimes feel like you’re missing out on other aspects of life. But you’re living the dream, so who cares?
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* THE REALITY */}
                    <div className="relative flex justify-between">
                        <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div className="flex items-center justify-center w-10 h-10 border border-blue-500 rounded-full dark:border-blue-400">
                                <i className="fas fa-7 text-blue-500 dark:text-blue-400 text-xl"></i>
                            </div>
                            <div className="w-px h-full dark:bg-gray-700"></div>
                        </div>
                        <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-700">
                            <div className="relative z-20 p-6">
                                <button
                                    className="mt-4 mb-2 text-blue-500 font-semibold cursor-pointer"
                                    onClick={() => toggleStage(3)}
                                >
                                    {visibleStage === 3 ? 'Hide Stage 3' : 'THE REALITY'}
                                </button>
                                {visibleStage === 3 && (
                                    <p className="mt-4 mb-2 pt-4 leading-7 text-white font-montserrat">
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
                                <div className="flex items-center justify-center w-10 h-10 border border-blue-500 rounded-full dark:border-blue-400">
                                    <i className="fas fa-8 text-blue-500 dark:text-blue-400 text-xl"></i>
                                </div>
                            </div>
                            <div className="w-px h-full dark:bg-gray-700"></div>
                        </div>
                        <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-700">
                            <div className="relative z-20 p-6">
                                <button
                                    className="mt-4 mb-2 text-blue-500 font-semibold cursor-pointer"
                                    onClick={() => toggleStage(4)}
                                >
                                    {visibleStage === 4 ? 'Hide Pivot' : 'THE PIVOT'}
                                </button>
                                {visibleStage === 4 && (
                                    <p className="mt-4 mb-2 pt-4 leading-7 text-white font-montserrat">
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
        </section>
    );
};

export default Timeline;
