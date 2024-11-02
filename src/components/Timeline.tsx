import React, { useState } from 'react';

const Timeline: React.FC = () => {
    const [visibleStage, setVisibleStage] = useState<number | null>(1);

    const toggleStage = (stageNumber: number) => {
        setVisibleStage(visibleStage === stageNumber ? null : stageNumber);
    };

    // Common class variables
    const baseContainerClasses = "relative flex justify-between";
    const sideIconClasses = "flex flex-col items-center w-10 mr-4 md:w-24";
    const iconContainerClasses = "flex items-center justify-center w-10 h-10 border border-black rounded-full";
    const contentBoxClasses = "relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-700 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer";
    const innerContentClasses = "relative z-20 p-6";
    const titleClasses = "flex-1 text-lg font-semibold text-white text-center";
    const toggleIconContainerClasses = "w-8 h-8 flex items-center justify-center border-2 border-purple-gray rounded-full";
    const descriptionClasses = "mt-4 leading-7 text-white font-montserrat text-lg";
    const transitionClasses = "overflow-hidden transition-all duration-1000 ease-in-out";

    // content
    const theDreamTxt = `You’ve trained to be a dancer since you were tiny. 
                            You graduate and finally book your first job. You’re buzzing and motivated, hungry for the next audition, ready for the next challenge. 
                            You work consistently as a professional dancer and you feel like you’re truly living the dream.`;
    const theGritTxt = `You’re still dancing professionally and loving it. You also teach four nights a week, 
                            take any extra gig you can get, but still struggle to make ends meet. You work nights 
                            and most holidays and sometimes feel like you’re missing out on other aspects of life. 
                            But you’re living the dream, so who cares?`
    const theRealityTxt = `You’re older, achy, and unsure of where to. You’re no longer challenged and feel bored
                             doing the same choreography day after day. You’re also broke and have no idea how to get ahead financially. 
                             Plus, you crave stability but keep these thoughts to yourself because you’re living the dream, right?`

    const thePivotTxt = `You take a step back and reassess your goals and what you want for the future. 
                        Maybe you start to explore different career options, find ways to balance your life and finances, 
                        and look for new ways to reignite your passion. This is the stage where you rethink and pivot, seeking a new direction.`

    const stages = [
        {
            id: 1,
            title: "THE DREAM",
            content: theDreamTxt,
            icon: "fas fa-5 text-black text-xl"
        },
        {
            id: 2,
            title: "THE GRIT",
            content: theGritTxt,
            icon: "fas fa-6 text-black text-xl"
        },
        {
            id: 3,
            title: "THE REALITY",
            content: theRealityTxt,
            icon: "fas fa-7 text-black text-xl"
        },
        {
            id: 4,
            title: "THE PIVOT",
            content: thePivotTxt,
            icon: "fas fa-8 text-black text-xl"
        }
    ];

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
                    {stages.map(stage => (
                        <div key={stage.id} className={baseContainerClasses}>
                            <div className={sideIconClasses}>
                                <div>
                                    <div className={iconContainerClasses}>
                                        <i className={stage.icon}></i>
                                    </div>
                                </div>
                                <div className="w-px h-full dark:bg-gray-700"></div>
                            </div>
                            <div
                                className={`${contentBoxClasses} ${visibleStage === stage.id ? 'bg-gray-200 dark:bg-gray-600' : ''}`}
                                onClick={() => toggleStage(stage.id)}
                            >
                                <div className={innerContentClasses}>
                                    <div className="flex items-center justify-between">
                                        <h2 className={titleClasses}>
                                            {stage.title}
                                        </h2>
                                        <div className={toggleIconContainerClasses}>
                                            {visibleStage === stage.id ? (
                                                <i className="fas fa-chevron-up text-white text-xl"></i>
                                            ) : (
                                                <i className="fas fa-chevron-down text-white text-xl"></i>
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className={`${transitionClasses} ${visibleStage === stage.id ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}
                                    >
                                        <p className={descriptionClasses}>
                                            {stage.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
