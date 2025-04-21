"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Loader2, Share2 } from "lucide-react"

const Quiz: React.FC = () => {
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
        }
    }

    function ResultCard({ personalityType }: ResultCardProps) {
        return (
            <section className="flex items-center bg-beige text-center">
                <div id="quiz-result" className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-5 md:px-6">
                    <div className="px-4 pl-4 mb-6">
                        <h2 className="mt-2 text-3xl font-merriweather text-black md:text-4xl font-semibold">Pivot Quiz</h2>
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
                                <h3 className="font-merriweather text-xl text-dark-gray mb-4">What This Means For Your Transition</h3>
                                <div className="space-y-4 font-montserrat text-light-gray">
                                    <p>
                                        Based on your answers, we've identified key strengths and potential challenges for your career transition.
                                        Your personality type gives you unique advantages in navigating this change.
                                    </p>
                                    <p>
                                        We've sent a detailed breakdown to your email with personalized recommendations and resources tailored to
                                        your pivot personality.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <button className="flex items-center justify-center font-montserrat bg-brown-gray text-white hover:bg-dark-gray px-6 py-3 rounded-md transition-colors">
                                    Download Full Results
                                </button>
                                <button className="flex items-center justify-center font-montserrat border border-light-gray text-light-gray hover:text-dark-gray hover:border-dark-gray px-6 py-3 rounded-md transition-colors">
                                    <Share2 className="w-5 h-5 mr-2" />
                                    Share Your Results
                                </button>
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
                { id: "A", text: "Excited about the possibilities, but unsure where to start." },
                { id: "B", text: "Ready to make a plan but lacking clarity." },
                { id: "C", text: "Nervous, I need stability and a backup plan." },
                { id: "D", text: "Unsure, but I know I want something meaningful." },
            ],
        },
        {
            id: 2,
            question: "How do you usually approach big changes?",
            options: [
                { id: "A", text: "I follow my inspiration and figure it out as I go." },
                { id: "B", text: "I do research, talk to people, and create a timeline." },
                { id: "C", text: "I procrastinate, then usually make the safest choice." },
                { id: "D", text: "I reflect deeply. I need to feel aligned before I act." },
            ],
        },
        {
            id: 3,
            question: "What best describes your current dance career?",
            options: [
                { id: "A", text: "I'm still performing, but thinking ahead." },
                { id: "B", text: "I'm teaching and dabbling in a few dance projects." },
                { id: "C", text: "I've slowed down or stopped, but don't have a clear path yet." },
                { id: "D", text: "I've stepped back and I'm searching for a calling or purpose." },
            ],
        },
        {
            id: 4,
            question: "What's your biggest fear about pivoting?",
            options: [
                { id: "A", text: "Losing my identity as a dancer" },
                { id: "B", text: "Making the wrong decision and wasting time" },
                { id: "C", text: "Not having financial security or support" },
                { id: "D", text: "Ending up in a job that feels meaningless" },
            ],
        },
        {
            id: 5,
            question: "What motivates you most?",
            options: [
                { id: "A", text: "Freedom and creativity" },
                { id: "B", text: "Accomplishing a clear goal" },
                { id: "C", text: "Feeling safe and stable" },
                { id: "D", text: "Purpose and personal growth" },
            ],
        },
        {
            id: 6,
            question: "How do you feel about exploring other careers?",
            options: [
                { id: "A", text: "I'm curious and open." },
                { id: "B", text: "I want structure and clear steps." },
                { id: "C", text: "I'm hesitant, but I know I need to think about it." },
                { id: "D", text: "I'm searching for something that feels right, but it's hard to define." },
            ],
        },
        {
            id: 7,
            question: "What kind of support would feel most helpful right now?",
            options: [
                { id: "A", text: "Inspiration and new ideas" },
                { id: "B", text: "A clear plan or framework" },
                { id: "C", text: "Someone to reassure me and guide me" },
                { id: "D", text: "Space to reflect and talk things through" },
            ],
        },
    ]

    // Define personality types and their group IDs
    const personalityTypes = {
        A: {
            type: "The Dreamer",
            groupId: "bD6Xqy",
            description:
                "You're creative, intuitive, and drawn to possibilities. You thrive on inspiration and prefer to follow your passion rather than rigid plans.",
        },
        B: {
            type: "The Perfectionist",
            groupId: "eE1YqY",
            description:
                "You're organized, detail-oriented, and methodical. You prefer clear steps and frameworks to guide your transition journey.",
        },
        C: {
            type: "The Realist",
            groupId: "dGz1RL",
            description:
                "You're practical, cautious, and value stability. You need reassurance and concrete options before making big changes.",
        },
        D: {
            type: "The Seeker",
            groupId: "dL0jZX",
            description:
                "You're reflective, purpose-driven, and searching for meaning. You need alignment with your values in any new path.",
        },
    }

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
        <section className="flex items-center bg-beige text-center py-10">
            <div id="quiz" className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-5 md:px-6">
                <div className="px-4 pl-4 mb-6">
                    <h2 className="mt-2 text-3xl font-merriweather text-black md:text-4xl font-semibold">Pivot Quiz</h2>
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