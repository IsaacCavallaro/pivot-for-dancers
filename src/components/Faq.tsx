import React from 'react';

const FAQ: React.FC = () => {
    return (
        <section className="bg-beige">
            <div className="max-w-6xl py-4 mx-auto md:px-6"> {/* Reduced lg:py-20 to lg:py-10 */}
                <div className="px-4 pl-4 mb-6">
                    <span className="text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather">Join the Pivot for Dancers Community</span>
                    <h1 className="mt-2 text-3xl font-merriweather text-black md:text-5xl">
                        FAQ's
                    </h1>
                </div>
                <div className="flex items-center h-auto">
                    <div className="max-w-5xl p-4 mx-auto">
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="w-full mb-4 lg:w-2/5">
                                <p className="max-w-xl mx-auto text-gray-500"> Pivot for Dancers offers resources for professional dancers who are making a career change. We’re also a community of hundreds of dancers just like you and we hold events and workshops to help you connect with others who might be going through something similar to you. The best way to get involved is to join our email list where we share exclusive content and invitations.</p>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col justify-between w-full py-4 pl-4 pr-3 mb-3 bg-white rounded shadow dark:bg-gray-700">
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold dark:text-white"> What is Pivot for Dancers?</span>
                                        <div className="p-2 bg-blue-500 rounded">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between w-full py-4 pl-4 pr-3 mb-3 bg-white rounded shadow dark:bg-gray-700">
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold text-blue-500 dark:text-blue-400"> What are Pivot Panels? </span>
                                        <div className="p-2 bg-blue-500 rounded">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 answer">
                                        Pivot Panels are panel-style interviews with professional dancers who have successfully changed careers. These valuable resources are available to help inspire you to take a leap of faith and may give you some ideas of how you may want to pivot your career.
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between w-full py-4 pl-4 pr-3 mb-3 bg-white rounded shadow dark:bg-gray-700">
                                    <div className="flex items-center justify-between ">
                                        <span className="font-bold dark:text-white"> Who runs Pivot for Dancers? </span>
                                        <div className="p-2 bg-blue-500 rounded">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between w-full py-4 pl-4 pr-3 mb-3 bg-white rounded shadow dark:bg-gray-700">
                                    <div className="flex items-center justify-between ">
                                        <span className="font-bold dark:text-white"> When is the next Pivot Conversations?</span>
                                        <div className="p-2 bg-blue-500 rounded">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                            </svg>
                                        </div>
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
