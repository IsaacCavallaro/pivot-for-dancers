import React, { useState } from 'react';
import {
    FaStar, FaTrophy, FaHeart, FaRegArrowAltCircleRight,
    FaUserAlt, FaBriefcase
} from 'react-icons/fa';
import {
    MdEmojiEvents, MdOutlineEmojiObjects
} from 'react-icons/md';

const Timeline: React.FC = () => {
    const [activeStage, setActiveStage] = useState<number | null>(1);

    const handleStageClick = (stageNumber: number) => {
        setActiveStage(activeStage === stageNumber ? null : stageNumber);
    };

    const handleCardClick = () => {
        setActiveStage(prev => (prev === null ? 1 : (prev % stages.length + 1)));
    };

    const theDreamTxt = `You've trained to be a dancer since you were tiny. 
        You graduate and finally book your first job. You're buzzing and motivated, hungry for the next audition, ready for the next challenge. 
        You work consistently as a professional dancer and you feel like you're truly living the dream.`;

    const theGritTxt = `You're still dancing professionally and loving it. You also teach four nights a week, 
        take any extra gig you can get, but still struggle to make ends meet. You work nights 
        and most holidays and sometimes feel like you're missing out on other aspects of life. 
        But you're living the dream, so who cares?`;

    const theRealityTxt = `You're older, achy, and unsure of where to go. You're no longer challenged and feel bored
        doing the same choreography day after day. You're also broke and have no idea how to get ahead financially. 
        Plus, you crave stability but keep these thoughts to yourself because you're living the dream, right?`;

    const theUnkoownTxt = `You take a step back and reassess your goals and what you want for the future. 
        Maybe you start to explore different career options, find ways to balance your life and finances, 
        and look for new ways to reignite your passion. This is the stage where you rethink and start to pivot, seeking a new direction`;

    const stages = [
        {
            id: 1,
            title: "THE DREAM",
            content: theDreamTxt,
            number: "5",
            bgColor: "bg-[#647C90]",
            textColor: "text-white",
            badges: [
                { text: "New Artist", icon: <FaStar className="mr-1" />, color: "bg-[#928490] text-white" },
                { text: "First Gig", icon: <MdEmojiEvents className="mr-1" />, color: "bg-[#928490] text-white" },
                { text: "Passionate", icon: <FaHeart className="mr-1" />, color: "bg-[#928490] text-white" }
            ]
        },
        {
            id: 2,
            title: "THE GRIT",
            content: theGritTxt,
            number: "6",
            bgColor: "bg-[#647C90]",
            textColor: "text-white",
            badges: [
                { text: "Hustling", icon: <FaBriefcase className="mr-1" />, color: "bg-[#928490] text-white" },
                { text: "Teaching", icon: <FaUserAlt className="mr-1" />, color: "bg-[#928490] text-white" },
                { text: "Dedicated", icon: <FaTrophy className="mr-1" />, color: "bg-[#928490] text-white" }
            ]
        },
        {
            id: 3,
            title: "THE REALITY",
            content: theRealityTxt,
            number: "7",
            bgColor: "bg-[#647C90]",
            textColor: "text-white",
            badges: [
                { text: "Burnout", icon: <FaHeart className="mr-1" />, color: "bg-[#928490] text-white" },
                { text: "Questioning", icon: <MdOutlineEmojiObjects className="mr-1" />, color: "bg-[#928490] text-white" },
                { text: "Transition", icon: <FaRegArrowAltCircleRight className="mr-1" />, color: "bg-[#928490] text-white" }
            ]
        },
        {
            id: 4,
            title: "THE UNKNOWN",
            content: theUnkoownTxt,
            number: "8",
            bgColor: "bg-[#647C90]",
            textColor: "text-white",
            badges: [
                { text: "New Path", icon: <FaRegArrowAltCircleRight className="mr-1" />, color: "bg-[#928490] text-white" },
                { text: "Growth", icon: <FaTrophy className="mr-1" />, color: "bg-[#928490] text-white" },
                { text: "Opportunity", icon: <FaStar className="mr-1" />, color: "bg-[#928490] text-white" }
            ]
        }
    ];

    return (
        <div className="bg-beige pb-12">
            <div className="">
                <div className="max-w-6xl mx-auto text-center pt-4 md:pb-0 pb-10">
                    <h1 className="font-merriweather text-center text-5xl md:text-6xl lg:text-6xl font-bold text-black mb-6 leading-tight transition-all duration-1000 opacity-100 transform translate-y-0">
                        Your Journey
                    </h1>
                    <span
                        className="text-md text-center uppercase dark:text-gray-500 transition-all duration-1000 delay-300"
                    >
                        Does this sound familiar?
                    </span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-0 pb-8 md:pt-8 md:pb-12">
                <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-6 md:gap-8">
                    <div className="lg:w-1/3 lg:pr-8 order-2 lg:order-1">
                        <div className="lg:sticky lg:top-8">
                            <div className="relative">
                                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#928490] opacity-30"></div>

                                {stages.map((stage) => (
                                    <div key={stage.id} className="relative mb-6 md:mb-8 cursor-pointer group" onClick={() => handleStageClick(stage.id)}>
                                        <div className={`absolute left-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-300 ${activeStage === stage.id ? `${stage.bgColor} scale-110` : 'bg-white border-[#928490] hover:scale-105'}`}>
                                            <span className={`font-merriweather font-bold text-xs sm:text-sm ${activeStage === stage.id ? 'text-white' : 'text-[#928490]'}`}>
                                                {stage.number}
                                            </span>
                                        </div>

                                        <div className="ml-16 sm:ml-20">
                                            <div className="flex items-center">
                                                <h3 className={`font-merriweather font-bold text-base sm:text-lg transition-colors duration-300 ${activeStage === stage.id ? 'text-[#647C90]' : 'text-[#928490] group-hover:text-[#647C90]'}`}>
                                                    {stage.title}
                                                </h3>
                                            </div>
                                            <div className={`h-1 mt-2 transition-all duration-300 ${activeStage === stage.id ? `${stage.bgColor} w-12 sm:w-16` : 'bg-[#928490] w-6 sm:w-8 opacity-50'}`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content card section - now appears first on mobile */}
                    <div className="lg:w-2/3 order-1 lg:order-2">
                        <div className="flex items-center">
                            {activeStage ? (
                                <div className="w-full">
                                    {stages.map(stage => (
                                        stage.id === activeStage && (
                                            <div
                                                key={stage.id}
                                                onClick={handleCardClick}
                                                className={`${stage.bgColor} w-full max-w-[700px] h-[500px] mx-auto rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl sm:shadow-2xl cursor-pointer relative overflow-hidden flex flex-col justify-center items-center text-center`}
                                            >


                                                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6 relative z-10">
                                                    <div>
                                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-merriweather font-bold text-white">{stage.title}</h2>
                                                        <div className="flex flex-wrap mt-2 gap-2">
                                                            {stage.badges.map((badge, idx) => (
                                                                <span key={idx} className={`${badge.color} text-xs px-2 py-1 rounded-full flex items-center`}>
                                                                    {badge.icon} {badge.text}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-white bg-opacity-10 rounded-lg sm:rounded-xl p-4 sm:p-6 backdrop-blur-sm relative z-10">
                                                    <p className="text-base sm:text-lg md:text-xl font-montserrat text-white leading-relaxed">{stage.content}</p>
                                                </div>

                                                <div className="mt-6 sm:mt-8 flex justify-between items-center relative z-10">
                                                    <div className="flex space-x-2">
                                                        {stages.map((_, idx) => (
                                                            <div key={idx} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${idx + 1 === activeStage ? 'bg-white' : 'bg-white bg-opacity-30'}`}></div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    ))}
                                </div>
                            ) : (
                                <div className="w-full text-center py-12 sm:py-20">
                                    <div className="bg-[#E2DED0] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg relative overflow-hidden">
                                        <h2 className="text-2xl sm:text-3xl font-merriweather font-bold text-[#647C90] mb-3 sm:mb-4 relative">
                                            Select a chapter to begin
                                        </h2>
                                        <p className="text-sm sm:text-base md:text-lg font-montserrat text-[#928490] relative">
                                            Click on any stage in the timeline to explore your journey
                                        </p>
                                        <div className="mt-4 sm:mt-6 flex justify-center">
                                            <div className="bg-[#928490] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center">
                                                <FaStar className="mr-1 sm:mr-2 text-xs sm:text-sm" /> Start your journey
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;