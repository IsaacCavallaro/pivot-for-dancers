import React from 'react';

const Timeline: React.FC = () => {
    return (
        <section className="items-center py-16 bg-beige font-poppins">
            <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div className="px-4 pl-4 mb-6">
                    <span className="text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather">Does this sound familiar?</span>
                    <h1 className="mt-2 text-3xl font-merriweather text-black md:text-5xl">
                        Pivot Stages
                    </h1>
                </div>
                <div className="w-full mx-auto lg:max-w-3xl">
                    {/* Stage 1 */}
                    <div className="relative flex justify-between">
                        <div className="hidden py-3 w-14 md:block">
                            {/* <h2 className="text-base font-medium text-gray-700 dark:text-gray-400">Stage 1</h2> */}
                        </div>
                        <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border border-blue-500 rounded-full dark:border-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 text-blue-500 dark:text-blue-400 bi bi-building" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-px h-full dark:bg-gray-700"></div>
                        </div>
                        <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-700">
                            <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                <div className="hidden h-10 origin-top-right transform -rotate-45 bg-blue-600 dark:bg-blue-500 lg:block drop-shadow-lg"></div>
                            </div>
                            <div className="relative z-20 p-6">
                                <div className="absolute -top-4 -left[-30px] lg:top-0 lg:left-0 inline-block px-2 py-2.5 dark:bg-blue-500 bg-blue-600 rounded-md lg:rounded-br-md lg:rounded-tl-md">
                                    <span className="text-xs text-gray-100">Stage 1</span>
                                </div>
                                <p className="mt-4 mb-2 leading-7 text-white font-montserrat">You’ve trained to be a dancer since you were tiny. You graduate and finally book your first job. You’re buzzing and motivated, hungry for the next audition, ready for the next challenge. You work consistently as a professional dancer and you feel like you’re truly living the dream.</p>
                            </div>
                        </div>
                    </div>
                    {/* Stage 2 */}
                    <div className="relative flex justify-between">
                        <div className="hidden py-3 w-14 md:block">
                            {/* <h2 className="text-base font-medium text-gray-700 dark:text-gray-400">Stage 2</h2> */}
                        </div>
                        <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border border-blue-500 rounded-full dark:border-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 text-blue-500 dark:text-blue-400 bi bi-building" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-px h-full dark:bg-gray-700"></div>
                        </div>
                        <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-700">
                            <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                <div className="hidden h-10 origin-top-right transform -rotate-45 bg-blue-600 dark:bg-blue-500 lg:block drop-shadow-lg"></div>
                            </div>
                            <div className="relative z-20 p-6">
                                <div className="absolute -top-4 -left[-30px] lg:top-0 lg:left-0 inline-block px-2 py-2.5 dark:bg-blue-500 bg-blue-600 rounded-md lg:rounded-br-md lg:rounded-tl-md">
                                    <span className="text-xs text-gray-100">Stage 2</span>
                                </div>
                                <p className="mt-4 mb-2 leading-7 text-white font-montserrat">You’re still dancing professionally and loving it. You also teach four nights a week, take any extra gig you can get, but still struggle to make ends meet. You work nights and most holidays and sometimes feel like you’re missing out on other aspects of life. But you’re living the dream, so who cares?</p>
                            </div>
                        </div>
                    </div>
                    {/* Stage 3 */}
                    <div className="relative flex justify-between">
                        <div className="hidden py-3 w-14 md:block">
                            {/* <h2 className="text-base font-medium text-gray-700 dark:text-gray-400">Stage 3</h2> */}
                        </div>
                        <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border border-blue-500 rounded-full dark:border-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 text-blue-500 dark:text-blue-400 bi bi-building" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-px h-full dark:bg-gray-700"></div>
                        </div>
                        <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-700">
                            <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                <div className="hidden h-10 origin-top-right transform -rotate-45 bg-blue-600 dark:bg-blue-500 lg:block drop-shadow-lg"></div>
                            </div>
                            <div className="relative z-20 p-6">
                                <div className="absolute -top-4 -left[-30px] lg:top-0 lg:left-0 inline-block px-2 py-2.5 dark:bg-blue-500 bg-blue-600 rounded-md lg:rounded-br-md lg:rounded-tl-md">
                                    <span className="text-xs text-gray-100">Stage 3</span>
                                </div>
                                <p className="mt-4 mb-2 leading-7 text-white font-montserrat">You’re older, achy, and unsure of where to. You’re no longer challenged and feel bored doing the same choreography day after day. You’re also broke and have no idea how to get ahead financially. Plus, you crave settling down but keep these thoughts to yourself because you’re living the dream, right?</p>
                            </div>
                        </div>
                    </div>
                    {/* Pivot */}
                    <div className="relative flex justify-between">
                        <div className="hidden py-3 w-14 md:block">
                            {/* <h2 className="text-base font-medium text-gray-700 dark:text-gray-400">Pivot</h2> */}
                        </div>
                        <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border border-blue-500 rounded-full dark:border-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 text-blue-500 dark:text-blue-400 bi bi-building" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-px h-full dark:bg-gray-700"></div>
                        </div>
                        <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-700">
                            <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                <div className="hidden h-10 origin-top-right transform -rotate-45 bg-blue-600 dark:bg-blue-500 lg:block drop-shadow-lg"></div>
                            </div>
                            <div className="relative z-20 p-6">
                                <div className="absolute -top-4 -left[-30px] lg:top-0 lg:left-0 inline-block px-2 py-2.5 dark:bg-blue-500 bg-blue-600 rounded-md lg:rounded-br-md lg:rounded-tl-md">
                                    <span className="text-xs text-gray-100">Pivot</span>
                                </div>
                                <p className="mt-4 mb-2 leading-7 text-white font-montserrat">You decide to make a career change on your terms. You start a family or a business. You explore new hobbies and make real money for the first time. You still take class and you’re not bitter about the industry. You’re proud of your dance career but learn you’re more than a dancer. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-10 xl:mb-0">
                    <h2 className="mt-2 mb-4 text-2xl font-bold text-black">
                        What's your next stage?
                    </h2>
                    <p className="mb-4 text-base leading-7 text-black">
                        If you’ve gone through any of these stages, Pivot for Dancers is for you. Of course, everyone’s story is wonderfully unique, but if you resonate at all, you’re in the right place.
                    </p>
                    <p className="px-4 mb-6 text-2xl font-montserrat text-black">
                        you’re in the right place.
                    </p>
                </div>
            </div>

        </section>
    );
};

export default Timeline;
