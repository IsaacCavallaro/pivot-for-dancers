"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Loader2, Share2 } from "lucide-react"

const Quiz: React.FC = () => {
    // Add effect to handle hash navigation accounting for navbar height
    useEffect(() => {
        // Function to handle the scrolling with offset
        const handleHashScroll = () => {
            // Check if we have a hash in the URL that matches our section
            if (window.location.hash === "#quiz") {
                // Slight delay to ensure DOM is fully loaded
                setTimeout(() => {
                    const quizElement = document.getElementById("quiz");
                    if (quizElement) {
                        // Get navbar height
                        const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
                        // Calculate position accounting for navbar
                        const topOffset = quizElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

                        // Scroll to the element with the offset
                        window.scrollTo({
                            top: topOffset,
                            behavior: "smooth"
                        });
                    }
                }, 100);
            }
        };

        // Call the function when component mounts
        handleHashScroll();

        // Also add event listener for hash changes (in case user clicks different anchor links)
        window.addEventListener("hashchange", handleHashScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("hashchange", handleHashScroll);
        };
    }, []);

    // ProgressBar Component
    type ProgressBarProps = {
        progress: number
    }

    function ProgressBar({ progress }: ProgressBarProps) {
        return (
            <div className="w-full">
                <div className="flex justify-between mb-2">
                    <span className="font-montserrat text-sm text-light-gray">Your progress</span>
                    <span className="font-montserrat text-sm font-medium text-dark-gray">{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-2 bg-beige rounded-full overflow-hidden">
                    <div className="h-full bg-brown-gray transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
                </div>
            </div>
        )
    }

    // QuizQuestion Component
    type Option = {
        id: string
        text: string
    }

    type QuestionProps = {
        question: {
            id: number
            question: string
            options: Option[]
        }
        selectedOption: string | undefined
        onSelect: (optionId: string) => void
    }

    function QuizQuestion({ question, selectedOption, onSelect }: QuestionProps) {
        return (
            <div className="space-y-6">
                <h2 className="font-merriweather text-xl md:text-2xl text-dark-gray">
                    {question.question}
                </h2>

                <div className="space-y-3">
                    {question.options.map((option) => (
                        <motion.div key={option.id} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                            <button
                                type="button"
                                onClick={() => onSelect(option.id)}
                                className={`w-full text-left p-4 md:p-5 rounded-lg border-2 transition-all ${selectedOption === option.id
                                    ? "border-brown-gray bg-brown-gray bg-opacity-10"
                                    : "border-light-gray border-opacity-30 hover:border-purple-gray"
                                    }`}
                            >
                                <div className="flex items-start">
                                    <div
                                        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 mt-0.5 ${selectedOption === option.id ? "border-brown-gray bg-brown-gray" : "border-light-gray"
                                            }`}
                                    >
                                        {selectedOption === option.id && <div className="w-2 h-2 rounded-full bg-white" />}
                                    </div>
                                    <div>
                                        <span className="font-montserrat font-medium text-dark-gray">
                                            {option.text}
                                        </span>
                                    </div>
                                </div>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        )
    }

    // ResultCard Component
    type ResultCardProps = {
        personalityType: {
            type: string
            groupId: string
            description: string
            pdfLink: string
        }
    }

    function ResultCard({ personalityType }: ResultCardProps) {
        const handleDownload = () => {
            window.open(personalityType.pdfLink, '_blank');
        };

        return (
            <section className="flex items-center bg-beige text-center px-4">
                <div id="quiz-result" className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-5 md:px-6">
                    <div className="px-4 pl-4 mb-6">
                        <h2 className="font-merriweather text-center text-5xl md:text-6xl lg:text-7xl font-bold text-dark-gray mb-6 leading-tight">Pivot Quiz</h2>
                        <span className="text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather">
                            Discover Your Pivot Personality
                        </span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <div className="p-6 md:p-10">
                            <div className="text-center mb-8">
                                <div className="inline-block px-4 py-1 bg-beige rounded-full font-montserrat text-sm text-brown-gray mb-4">
                                    Your Pivot Personality
                                </div>
                                <h2 className="font-merriweather text-3xl md:text-4xl text-dark-gray mb-4">{personalityType.type}</h2>
                                <p className="font-montserrat text-light-gray text-lg max-w-2xl mx-auto">{personalityType.description}</p>
                            </div>

                            <div className="bg-beige bg-opacity-50 rounded-lg p-6 md:p-8 mb-8">
                                <h3 className="font-merriweather text-2xl text-dark-gray mb-4">What This Means For Your Transition</h3>
                                <div className="space-y-4 font-montserrat text-light-gray">
                                    <p>
                                        Based on your answers, we've identified key strengths and challenges that could come up during your transition.
                                    </p>
                                    <p>
                                        We've sent a detailed breakdown to your email with unique career change recommendations to suit your pivot personality.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <button
                                    onClick={handleDownload}
                                    className="flex items-center justify-center font-montserrat bg-brown-gray text-white hover:bg-dark-gray px-6 py-3 rounded-md transition-colors"
                                >
                                    Download Full Results
                                </button>
                                {/* <button className="flex items-center justify-center font-montserrat border border-light-gray text-light-gray hover:text-dark-gray hover:border-dark-gray px-6 py-3 rounded-md transition-colors">
                                    <Share2 className="w-5 h-5 mr-2" />
                                    Share Your Results
                                </button> */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    // Define the quiz questions and options
    const questions = [
        {
            id: 1,
            question: "When you think about life after dance, you feel…",
            options: [
                { id: "A", text: "Hesitant. I'm not quite ready to let go." },
                { id: "B", text: "Overwhelmed. I'm ready to make a plan but get stuck in the details." },
                { id: "C", text: "Worried. I don't want to disrupt my current day-to-day." },
                { id: "D", text: "Curious. I want to see what could be meaningful beyond dance." },
            ],
        },
        {
            id: 2,
            question: "How do you usually approach big changes?",
            options: [
                { id: "A", text: "I avoid them until I absolutely have to do something." },
                { id: "B", text: "I research everything and make a detailed plan." },
                { id: "C", text: "I take small, low-risk steps that won't shake things up too much." },
                { id: "D", text: "I ask deep questions and align with my feelings before deciding." },
            ],
        },
        {
            id: 3,
            question: "What best describes where you are now?",
            options: [
                { id: "A", text: "I haven't thought much about what's next after dance." },
                { id: "B", text: "I'm ready to start thinking ahead and making a plan." },
                { id: "C", text: "I want more stability but struggle to step into the unknown." },
                { id: "D", text: "I'm searching for a new calling or purpose beyond dance." },
            ],
        },
        {
            id: 4,
            question: "What's your biggest fear about pivoting?",
            options: [
                { id: "A", text: "Losing my identity as a dancer." },
                { id: "B", text: "Making the wrong decision and wasting time." },
                { id: "C", text: "Not having a secure or reliable next step." },
                { id: "D", text: "Ending up in a job that feels meaningless." },
            ],
        },
        {
            id: 5,
            question: "What motivates you most?",
            options: [
                { id: "A", text: "Living the dream." },
                { id: "B", text: "Accomplishing a clear goal." },
                { id: "C", text: "Building something dependable and sustainable." },
                { id: "D", text: "Finding purpose, connection, and meaning." },
            ],
        },
        {
            id: 6,
            question: "How do you feel about exploring other careers?",
            options: [
                { id: "A", text: "I know I'll need to someday… but I'm avoiding it." },
                { id: "B", text: "I want structure and clear steps." },
                { id: "C", text: "I'll try something if I feel it makes sense." },
                { id: "D", text: "I'm searching for something that feels right, but it's hard to define." },
            ],
        },
        {
            id: 7,
            question: "What kind of support would feel most helpful right now?",
            options: [
                { id: "A", text: "Reassurance that I'm not alone." },
                { id: "B", text: "A clear plan or framework." },
                { id: "C", text: "Someone to guide me on a safe and smart path." },
                { id: "D", text: "Space to reflect and understand what's meaningful to me." },
            ],
        },
    ];

    // Define personality types and their group IDs
    const personalityTypes = {
        A: {
            type: "The Dreamer",
            groupId: "bD6Xqy",
            description: "Thinking about life after dance feels like betraying a part of yourself. Deep down, you're hesitant to fully explore the future because naming a 'Plan B' feels like giving up.",
            pdfLink: "https://drive.google.com/file/d/1V0x5pNvthPAG4YMaCyZm1RuyjlACpt2Y/view"
        },
        B: {
            type: "The Perfectionist",
            groupId: "eE1YqY",
            description: "You love a solid plan. The idea of winging it? No, thank you. You want clarity, options, and a reliable timeline so you can move forward with confidence.",
            pdfLink: "https://drive.google.com/file/d/1OswjIaET42wSswwHG9ZXrc_T2k34NHhV/view"
        },
        C: {
            type: "The Realist",
            groupId: "dGz1RL",
            description: "You're thoughtful, careful, and you value real-world stability. You're not here to take huge leaps. You want to build something stable and real.",
            pdfLink: "https://drive.google.com/file/d/1MVxDPlfzsE0Neg3mfXuiTR6VMpPWf_Ik/view"
        },
        D: {
            type: "The Seeker",
            groupId: "dL0jZX",
            description: "For you, it's not about a paycheck... you're pivoting for purpose. You crave connection, impact, and alignment.",
            pdfLink: "https://drive.google.com/file/d/1UR1FWS_L0p7hhSkA1554jZ796QQ6VThx/view"
        },
    };

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState<Record<number, string>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [result, setResult] = useState<string | null>(null)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [error, setError] = useState<string | null>(null)

    // API configuration
    const API_URL = process.env.REACT_APP_API_URL;
    const API_KEY = process.env.REACT_APP_API_KEY;

    const handleAnswer = (questionId: number, optionId: string) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: optionId,
        }))
    }

    const goToNextQuestion = () => {
        if (currentQuestion < questions.length) {
            setCurrentQuestion((prev) => prev + 1)
        }
    }

    const goToPreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1)
        }
    }

    const calculateResult = () => {
        // Count occurrences of each option
        const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 }

        Object.values(answers).forEach((answer) => {
            counts[answer] = (counts[answer] || 0) + 1
        })

        // Find the most common answer
        let maxCount = 0
        let result = "A"

        Object.entries(counts).forEach(([option, count]) => {
            if (count > maxCount) {
                maxCount = count
                result = option
            }
        })

        return result
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email || !name) {
            setError("Please provide your name and email to see your results.")
            return
        }

        setIsSubmitting(true)
        setError(null)

        const personalityResult = calculateResult()
        const { groupId } = personalityTypes[personalityResult as keyof typeof personalityTypes]

        try {
            // Make the API request to submit user data with the correct group ID
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    firstname: name,
                    groups: [groupId], // Using the correct group ID based on personality type
                    trigger_automation: true, // Enable automation if you have one set up
                }),
            })

            if (response.ok) {
                console.log("Successfully submitted user data to API")
                setResult(personalityResult)

            } else {
                const errorData = await response.json()
                console.error("API error:", errorData)
                setError("There was an error submitting your results. Please try again.")
            }
        } catch (err) {
            setError("There was an error submitting your results. Please try again.")
            console.error(err)
        } finally {
            setIsSubmitting(false)
        }
    }

    const isQuestionAnswered = (questionId: number) => {
        return !!answers[questionId]
    }

    const isCurrentQuestionAnswered = () => {
        return isQuestionAnswered(questions[currentQuestion]?.id)
    }

    const progress = (Object.keys(answers).length / questions.length) * 100

    // Show the result if available
    if (result) {
        const personalityType = personalityTypes[result as keyof typeof personalityTypes]
        return <ResultCard personalityType={personalityType} />
    }

    return (
        // Add padding-top to account for navbar height 
        <section className="flex items-center bg-beige text-center py-10 pt-16 md:pt-20 px-4">
            <div id="quiz" className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-5 md:px-6">
                <div className="px-4 pl-4 mb-6">
                    <h2 className="font-merriweather text-center text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">Pivot Quiz</h2>
                    <span className="text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather">
                        Discover Your Pivot Personality
                    </span>
                </div>

                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6 md:p-8">
                        <ProgressBar progress={progress} />

                        <form onSubmit={handleSubmit} className="mt-6">
                            <AnimatePresence mode="wait">
                                {currentQuestion < questions.length ? (
                                    <motion.div
                                        key={`question-${currentQuestion}`}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <QuizQuestion
                                            question={questions[currentQuestion]}
                                            selectedOption={answers[questions[currentQuestion]?.id]}
                                            onSelect={(optionId) => handleAnswer(questions[currentQuestion].id, optionId)}
                                        />

                                        <div className="flex justify-between mt-8">
                                            <button
                                                type="button"
                                                onClick={goToPreviousQuestion}
                                                disabled={currentQuestion === 0}
                                                className={`flex items-center font-montserrat px-4 py-2 rounded-md transition-colors ${currentQuestion === 0
                                                    ? "text-purple-gray opacity-50 cursor-not-allowed"
                                                    : "text-purple-gray hover:text-dark-gray"
                                                    }`}
                                            >
                                                <ChevronLeft className="w-5 h-5 mr-1" />
                                                Previous
                                            </button>

                                            <button
                                                type="button"
                                                onClick={goToNextQuestion}
                                                disabled={!isCurrentQuestionAnswered()}
                                                className={`flex items-center font-montserrat px-6 py-2 rounded-md transition-colors ${isCurrentQuestionAnswered()
                                                    ? "bg-brown-gray text-white hover:bg-dark-gray"
                                                    : "bg-light-gray opacity-50 text-white cursor-not-allowed"
                                                    }`}
                                            >
                                                Next
                                                <ChevronRight className="w-5 h-5 ml-1" />
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="final-step"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-6"
                                    >
                                        <h2 className="font-merriweather text-2xl text-dark-gray mb-6">
                                            Almost there! Enter your details to see your results
                                        </h2>
                                        <div className="space-y-4">
                                            <div>
                                                <label htmlFor="name" className="sr-only">
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="w-full md:max-w-md px-4 py-3 border border-light-gray rounded-md font-montserrat focus:outline-none focus:ring-2 focus:ring-brown-gray"
                                                    placeholder="Enter your name"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="sr-only">
                                                    Your Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="w-full md:max-w-md px-4 py-3 border border-light-gray rounded-md font-montserrat focus:outline-none focus:ring-2 focus:ring-brown-gray"
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <p className="text-center w-full md:max-w-md px-4 py-2 font-montserrat text-sm text-gray-400 mb-2">
                                                    By submitting your email you agree to receive communications from Pivot For Dancers.
                                                </p>
                                            </div>
                                        </div>

                                        {error && (
                                            <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 font-montserrat text-sm">
                                                {error}
                                            </div>
                                        )}

                                        <div className="flex justify-between pt-4">
                                            <button
                                                type="button"
                                                onClick={goToPreviousQuestion}
                                                className="flex items-center font-montserrat text-purple-gray hover:text-dark-gray px-4 py-2 rounded-md transition-colors"
                                            >
                                                <ChevronLeft className="w-5 h-5 mr-1" />
                                                Back to questions
                                            </button>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="flex items-center font-montserrat bg-brown-gray text-white hover:bg-dark-gray px-8 py-3 rounded-md transition-colors disabled:opacity-70"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                        Processing...
                                                    </>
                                                ) : (
                                                    "Get My Results"
                                                )}
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quiz