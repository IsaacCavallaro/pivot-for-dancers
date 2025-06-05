import React, { useState } from 'react';
import {
    FaStar, FaTrophy, FaHeart, FaLightbulb, FaRegArrowAltCircleRight,
    FaMusic, FaUserAlt, FaBrain, FaBriefcase
} from 'react-icons/fa';
import {
    MdEmojiEvents, MdWork, MdOutlineEmojiObjects
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
            number: "01",
            bgColor: "bg-[#647C90]",
            textColor: "text-white",
            icon: <FaMusic className="text-3xl" />,
            badges: [
                { text: "New Artist", icon: <FaStar className="mr-1" />, color: "bg-[#928490] text-white" },
                { text: "First Gig", icon: <MdEmojiEvents className="mr-1" />, color: "bg-[#E2DED0] text-[#647C90]" },
                { text: "Passionate", icon: <FaHeart className="mr-1" />, color: "bg-[#928490] text-white" }
            ]
        },
        {
            id: 2,
            title: "THE GRIT",
            content: theGritTxt,
            number: "02",
            bgColor: "bg-[#647C90]",
            textColor: "text-white",
            icon: <MdWork className="text-3xl" />,
            badges: [
                { text: "Hustling", icon: <FaBriefcase className="mr-1" />, color: "bg-[#928490] text-white" },
                { text: "Teaching", icon: <FaUserAlt className="mr-1" />, color: "bg-[#E2DED0] text-[#647C90]" },
                { text: "Dedicated", icon: <FaTrophy className="mr-1" />, color: "bg-[#928490] text-white" }
            ]
        },
        {
            id: 3,
            title: "THE REALITY",
            content: theRealityTxt,
            number: "03",
            bgColor: "bg-[#647C90]",
            textColor: "text-white",
            icon: <FaBrain className="text-3xl" />,
            badges: [
                { text: "Burnout", icon: <FaHeart className="mr-1" />, color: "bg-[#E2DED0] text-[#647C90]" },
                { text: "Questioning", icon: <MdOutlineEmojiObjects className="mr-1" />, color: "bg-[#928490] text-white" },
                { text: "Transition", icon: <FaRegArrowAltCircleRight className="mr-1" />, color: "bg-[#928490] text-white" }
            ]
        },
        {
            id: 4,
            title: "THE UNKOWN",
            content: theUnkoownTxt,
            number: "04",
            bgColor: "bg-[#647C90]",
            textColor: "text-white",
            icon: <FaLightbulb className="text-3xl" />,
            badges: [
                { text: "New Path", icon: <FaRegArrowAltCircleRight className="mr-1" />, color: "bg-[#E2DED0] text-[#647C90]" },
                { text: "Growth", icon: <FaTrophy className="mr-1" />, color: "bg-[#928490] text-white" },
                { text: "Opportunity", icon: <FaStar className="mr-1" />, color: "bg-[#928490] text-white" }
            ]
        }
    ];

    return (
        <div className="bg-beige pb-12">
            <div className="py-12 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="font-merriweather text-center text-5xl md:text-6xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                        Does this sound familiar?
                    </h1>
                    <p className="text-lg font-montserrat text-black max-w-2xl mx-auto">
                        The journey of a professional dancer - a story told in four chapters
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3 lg:pr-8">
                        <div className="sticky top-8">
                            <div className="flex items-center mb-8">
                                <h2 className="text-2xl font-merriweather font-bold text-[#647C90]">
                                    Your Journey
                                </h2>
                                <div className="ml-2 bg-[#E2DED0] text-[#647C90] px-2 py-1 rounded-full text-xs font-bold">
                                    4 Stages
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#928490] opacity-30"></div>

                                {stages.map((stage) => (
                                    <div key={stage.id} className="relative mb-8 cursor-pointer group" onClick={() => handleStageClick(stage.id)}>
                                        <div className={`absolute left-0 w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-300 ${activeStage === stage.id ? `${stage.bgColor} scale-110` : 'bg-white border-[#928490] hover:scale-105'}`}>
                                            <span className={`font-merriweather font-bold text-sm ${activeStage === stage.id ? 'text-white' : 'text-[#928490]'}`}>
                                                {stage.number}
                                            </span>
                                        </div>

                                        <div className="ml-20">
                                            <div className="flex items-center">
                                                <h3 className={`font-merriweather font-bold text-lg transition-colors duration-300 ${activeStage === stage.id ? 'text-[#647C90]' : 'text-[#928490] group-hover:text-[#647C90]'}`}>
                                                    {stage.title}
                                                </h3>
                                            </div>
                                            <div className={`h-1 mt-2 transition-all duration-300 ${activeStage === stage.id ? `${stage.bgColor} w-16` : 'bg-[#928490] w-8 opacity-50'}`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3">
                        <div className="flex items-center">
                            {activeStage ? (
                                <div className="w-full">
                                    {stages.map(stage => (
                                        stage.id === activeStage && (
                                            <div key={stage.id} onClick={handleCardClick} className={`${stage.bgColor} rounded-2xl p-8 md:p-12 shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.01] relative overflow-hidden`}>
                                                <div className="absolute top-4 right-4 opacity-20">
                                                    {React.cloneElement(stage.icon, { className: "text-8xl" })}
                                                </div>

                                                <div className="flex items-center mb-6 relative z-10">
                                                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                                                        <span className="text-2xl font-merriweather font-bold text-white">{stage.number}</span>
                                                    </div>
                                                    <div>
                                                        <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-white">{stage.title}</h2>
                                                        <div className="flex mt-2 space-x-2">
                                                            {stage.badges.map((badge, idx) => (
                                                                <span key={idx} className={`${badge.color} text-xs px-2 py-1 rounded-full flex items-center`}>
                                                                    {badge.icon} {badge.text}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm relative z-10">
                                                    <p className="text-lg md:text-xl font-montserrat text-white leading-relaxed">{stage.content}</p>
                                                </div>

                                                <div className="mt-8 flex justify-between items-center relative z-10">
                                                    <div className="flex space-x-2">
                                                        {stages.map((_, idx) => (
                                                            <div key={idx} className={`w-3 h-3 rounded-full ${idx + 1 === activeStage ? 'bg-white' : 'bg-white bg-opacity-30'}`}></div>
                                                        ))}
                                                    </div>

                                                    <div className="text-white text-opacity-70 font-montserrat text-sm flex items-center">
                                                        <span>Chapter {activeStage} of {stages.length}</span>
                                                        <FaRegArrowAltCircleRight className="ml-2" />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    ))}
                                </div>
                            ) : (
                                <div className="w-full text-center py-20">
                                    <div className="bg-[#E2DED0] rounded-2xl p-12 shadow-lg relative overflow-hidden">
                                        <div className="absolute top-0 right-0 opacity-10">
                                            <FaMusic className="text-8xl" />
                                        </div>
                                        <h2 className="text-3xl font-merriweather font-bold text-[#647C90] mb-4 relative">
                                            Select a chapter to begin
                                        </h2>
                                        <p className="text-lg font-montserrat text-[#928490] relative">
                                            Click on any stage in the timeline to explore your journey
                                        </p>
                                        <div className="mt-6 flex justify-center">
                                            <div className="bg-[#928490] text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                                                <FaStar className="mr-2" /> Start your journey
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
