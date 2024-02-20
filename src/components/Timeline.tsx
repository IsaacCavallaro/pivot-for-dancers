import React from 'react';

const Timeline: React.FC = () => {
    return (
        <section className="items-center py-16 bg-beige font-poppins">
            <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div className="px-4 pl-4 mb-6">
                    <span className="text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather">Does this sound familiar?</span>
                    <h1 className="mt-2 text-3xl font-merriweather text-black md:text-5xl">
                        Next Stage
                    </h1>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-10 xl:mb-0">
                    <h2 className="mt-2 mb-4 text-2xl font-bold text-black">
                        What's your next stage?
                    </h2>
                    <p className="mb-4 text-base leading-7 text-black">
                        If you’ve gone through any of these stages, Pivot for Dancers is for you. Of course, everyone’s story is wonderfully unique, but if you resonate at all, you’re in the right place.
                    </p>
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
                            <div className="w-px h-full bg-blue-300"></div>
                        </div>
                        <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                            <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                <div className="hidden h-10 origin-top-right transform -rotate-45 bg-blue-600 dark:bg-blue-500 lg:block drop-shadow-lg"></div>
                            </div>
                            <div className="relative z-20 p-6">
                                <div className="absolute -top-4 -left[-30px] lg:top-0 lg:left-0 inline-block px-2 py-2.5 dark:bg-blue-500 bg-blue-600 rounded-md lg:rounded-br-md lg:rounded-tl-md">
                                    <span className="text-xs text-gray-100">Stage 1</span>
                                </div>
                                <p className="mt-4 mb-2 text-xl font-bold text-gray-600 lg:mt-8 dark:text-gray-400">You’ve trained to be a dancer since you were tiny — probably 3 or 4. You graduate and finally book your first job. You’re buzzing and motivated, hungry for the next audition, ready for the next challenge. You work consistently as a professional dancer and you feel like you’re truly living the dream.</p>
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
                            <div className="w-px h-full bg-blue-300"></div>
                        </div>
                        <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                            <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                <div className="hidden h-10 origin-top-right transform -rotate-45 bg-blue-600 dark:bg-blue-500 lg:block drop-shadow-lg"></div>
                            </div>
                            <div className="relative z-20 p-6">
                                <div className="absolute -top-4 -left[-30px] lg:top-0 lg:left-0 inline-block px-2 py-2.5 dark:bg-blue-500 bg-blue-600 rounded-md lg:rounded-br-md lg:rounded-tl-md">
                                    <span className="text-xs text-gray-100">Stage 2</span>
                                </div>
                                <p className="mt-4 mb-2 text-xl font-bold text-gray-600 lg:mt-8 dark:text-gray-400">You’re still dancing professionally and it makes up the majority of your income. But you also juggle teaching four nights a week, you grab up any extra gig you can get, and you’re honestly still struggling to make ends meet. You met someone and you want to plant roots but there aren’t many dance jobs that won’t mean touring or moving. Or, if you can stay local, you work nights and probably on every holiday where you start to feel like you’re missing out on other aspects of life. But still, you’re living the dream so who cares?</p>
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
                            <div className="w-px h-full bg-blue-300"></div>
                        </div>
                        <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                            <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                <div className="hidden h-10 origin-top-right transform -rotate-45 bg-blue-600 dark:bg-blue-500 lg:block drop-shadow-lg"></div>
                            </div>
                            <div className="relative z-20 p-6">
                                <div className="absolute -top-4 -left[-30px] lg:top-0 lg:left-0 inline-block px-2 py-2.5 dark:bg-blue-500 bg-blue-600 rounded-md lg:rounded-br-md lg:rounded-tl-md">
                                    <span className="text-xs text-gray-100">Stage 3</span>
                                </div>
                                <p className="mt-4 mb-2 text-xl font-bold text-gray-600 lg:mt-8 dark:text-gray-400">You’re older, a bit more achy, and you’ve perhaps had a few heartbreaks sprinkled in along the way. You feel like you’ve “been there, done that” with every new job you book. You’re no longer challenged and might be feeling bored doing the same choreography day after day. You notice that you’re not connecting to your dance friends the way you used to. They still seem really into it and you’re quietly confused, unsure if there’s something more for you. You’re broke and have no idea how to get ahead financially, let alone out of debt. And you crave settling down but don’t tell anyone because that’s seen as a bad thing.</p>
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
                            <div className="w-px h-full bg-blue-300"></div>
                        </div>
                        <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                            <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                <div className="hidden h-10 origin-top-right transform -rotate-45 bg-blue-600 dark:bg-blue-500 lg:block drop-shadow-lg"></div>
                            </div>
                            <div className="relative z-20 p-6">
                                <div className="absolute -top-4 -left[-30px] lg:top-0 lg:left-0 inline-block px-2 py-2.5 dark:bg-blue-500 bg-blue-600 rounded-md lg:rounded-br-md lg:rounded-tl-md">
                                    <span className="text-xs text-gray-100">Pivot</span>
                                </div>
                                <p className="mt-4 mb-2 text-xl font-bold text-gray-600 lg:mt-8 dark:text-gray-400">You make the hard choice to leave your dance career and embark on a new adventure. You explore new hobbies and remember old interests you put aside. You start a family or start a business. You learn about money and start to value yourself in dollars for the first time. You continue to dance and protect your relationship with it. You didn’t end up jaded and bitter about the dance industry and all the shows you didn’t book. You’re grateful and proud of your dance career and you bring dance in your life in new ways. You can afford to support theatres and ballets, and you have time to take class regularly and with no pressure. You learn that you’re more than a dancer and that life doesn’t end just because your dance career did. You chose to pivot. Welcome to the next stage.</p>
                            </div>
                        </div>
                    </div>
                    {/* Repeat the same structure for Stages 2, 3, and Pivot */}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
