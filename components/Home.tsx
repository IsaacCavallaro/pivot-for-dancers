"use client"

import { useState, useEffect, useRef } from "react"
import {
  Star,
  CheckCircle,
  Users,
  Play,
  Apple,
  Shield,
  MapPin,
  Heart,
  TrendingUp,
  Calendar,
  Target,
  Award,
  Globe,
  Linkedin,
  Youtube,
  Instagram,
  Facebook,
  ArrowRight,
  Smartphone,
  Headphones,
  BookOpen,
  BarChart,
} from "lucide-react"

const Counter = ({ end, duration }: { end: number; duration: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<number>(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16)
    const step = () => {
      start += increment
      if (start < end) {
        setCount(Math.floor(start))
        ref.current = requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }
    ref.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(ref.current)
  }, [end, duration])

  return <span>{count.toLocaleString()}</span>
}

const StatCard = ({ number, label, icon: IconComponent, index }: { number: string; label: string; icon: React.ComponentType<any>; index: number }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const splitLabel = (text: string) => {
    const words = text.split(" ")
    const midPoint = Math.ceil(words.length / 2)
    return {
      line1: words.slice(0, midPoint).join(" "),
      line2: words.slice(midPoint).join(" "),
    }
  }

  const highlightKeyWords = (text: string) => {
    return text
  }

  const { line1, line2 } = splitLabel(label)
  const numericValue = Number.parseInt(number.replace(/\D/g, ""))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      { threshold: 0.3 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  const backgroundColor = "#E2DED0"
  const borderColor = index % 2 === 0 ? "#647C90" : "#928490"
  const iconColor = index % 2 === 0 ? "#647C90" : "#928490"
  const textColor = "#647C90"

  return (
    <div ref={ref} className="text-center">
      <div
        className="rounded-2xl p-4 md:p-3 shadow-lg flex flex-col items-center justify-center h-full relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
        style={{
          backgroundColor: backgroundColor,
          border: `2px solid ${borderColor}`,
        }}
      >
        {/* Icon with enhanced styling */}
        <div
          className="w-8 h-8 md:w-7 md:h-7 rounded-full flex items-center justify-center mb-2 md:mb-1 relative z-10"
          style={{ backgroundColor: iconColor }}
        >
          <IconComponent className="w-5 h-5 md:w-4 md:h-4 text-white" />
        </div>

        <div className="text-xl md:text-lg font-bold mb-1 relative z-10" style={{ color: textColor }}>
          {isVisible ? (
            <>
              <Counter end={numericValue} duration={2000} />
              {number.includes("+") && "+"}
            </>
          ) : (
            "0"
          )}
        </div>
        <div className="text-xs leading-tight relative z-10" style={{ color: textColor }}>
          <div dangerouslySetInnerHTML={{ __html: highlightKeyWords(line1) }} />
          <div dangerouslySetInnerHTML={{ __html: highlightKeyWords(line2) }} />
        </div>
      </div>
    </div>
  )
}

// New Suite CTA Section Component
const SuiteCTASection = () => {
  const products = [
    {
      title: "Products",
      description: "Your private toolkit for career transition, mindset wellness, and financial planning",
      icon: Smartphone,
      color: "#647C90",
      link: "/products",
      badge: "Digital Resources",
      highlight: "NEW",
      items: ["E-book", "Mini Course"]
    },
    {
      title: "Services",
      description: "A comprehensive 5-year roadmap for dancers planning their career transition",
      icon: BookOpen,
      color: "#928490",
      link: "/services",
      badge: "1-on-1 Support",
      highlight: "POPULAR",
      items: ["Mentorship", "Mock Interviews"]
    },
    {
      title: "Resources",
      description: "Weekly conversations about career transition, mindset, and finding purpose",
      icon: Headphones,
      color: "#746C70",
      link: "/resources",
      badge: "Tools",
      highlight: "FREE",
      items: ["Mobile App", "Podcast", "Research"]
    },
  ];

  return (
    <section className="py-16 bg-light-gray relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-gray via-light-gray to-purple-gray/10"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-gray/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-tan-300/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full mb-6 border border-purple-gray/20 bg-white/10 backdrop-blur-sm">
            <span className="text-sm font-semibold text-white tracking-wide">COMPREHENSIVE SUITE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 ">
            Explore Our Complete Offerings
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-montserrat leading-relaxed">
            Discover our comprehensive suite of products, services, and resources designed specifically for dancers navigating career transitions
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg border border-purple-gray/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center max-w-sm w-full relative overflow-hidden"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#928490';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(146, 132, 144, 0.3), 0 10px 10px -5px rgba(146, 132, 144, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4">
                <span
                  className="inline-block px-2 py-1 text-xs font-bold rounded-full transition-all duration-500 group-hover:scale-105"
                  style={{
                    backgroundColor: product.color === "#647C90" ? 'rgba(100, 124, 144, 0.1)' :
                      product.color === "#928490" ? 'rgba(146, 132, 144, 0.1)' : 'rgba(116, 108, 112, 0.1)',
                    color: product.color
                  }}
                >
                  {product.highlight}
                </span>
              </div>

              {/* Icon with enhanced styling */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg"
                style={{ backgroundColor: product.color }}
              >
                <product.icon className="w-8 h-8 text-white transition-all duration-500" />
              </div>

              {/* Badge */}
              <div className="mb-3">
                <span
                  className="inline-block px-3 py-1 text-xs font-semibold rounded-full transition-all duration-500 group-hover:scale-105"
                  style={{
                    backgroundColor: 'rgba(146, 132, 144, 0.1)',
                    color: '#928490'
                  }}
                >
                  {product.badge}
                </span>
              </div>

              {/* Title */}
              <h4 className="font-bold text-xl font-bold text-black mb-3 group-hover:text-black transition-colors duration-500">
                {product.title}
              </h4>

              {/* Items list */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {product.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="inline-block px-2 py-1 text-xs font-medium rounded-md transition-all duration-500 group-hover:scale-105"
                    style={{
                      backgroundColor: 'rgba(146, 132, 144, 0.05)',
                      color: '#746C70',
                      border: '1px solid rgba(146, 132, 144, 0.1)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="font-montserrat text-brown-gray text-sm mb-6 leading-relaxed group-hover:text-black transition-colors duration-500">
                {product.description}
              </p>

              {/* Enhanced Button */}
              <a
                href={product.link}
                className="inline-flex items-center justify-center w-full bg-purple-gray text-white font-semibold py-3 px-6 rounded-xl hover:bg-light-gray transition-all duration-300 group-hover:scale-105 shadow-md hover:shadow-lg"
              >
                <span className="mr-2">LEARN MORE</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Decorative element */}
              <div
                className="absolute bottom-0 left-0 w-full h-1 rounded-b-2xl transition-all duration-500 group-hover:h-2"
                style={{ backgroundColor: product.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <span className="text-white font-semibold mr-2">Ready to get started?</span>
            <a
              href="https://tidycal.com/pivotfordancers/mentorship-1"
              className="text-tan-300 font-bold text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK NOW
            </a>
            <svg
              className="w-4 h-4 ml-2 text-tan-300 text-white group-hover:translate-x-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentScreen, setCurrentScreen] = useState(0)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % 4)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    if (submitStatus !== "idle") {
      setSubmitStatus("idle")
    }
    if (error) {
      setError(null)
    }
  }

  const inputClass = `
    w-full px-4 py-4 
    text-sm text-gray-900 placeholder-gray-400 
    bg-gray-100 border border-gray-300 
    rounded-md dark:text-gray-400 
    dark:placeholder-gray-500 dark:bg-gray-700 
    dark:border-gray-700 md:w-2/3
  `.trim()

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async () => {
    const trimmedEmail = email.trim()

    if (!trimmedEmail) {
      setError("Please provide your email to join us.")
      setSubmitStatus("error")
      return
    }

    if (!validateEmail(trimmedEmail)) {
      setError("Please enter a valid email address.")
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setError(null)
    setSubmitStatus("idle")

    try {
      const iframe = document.createElement("iframe")
      iframe.name = "hidden-iframe"
      iframe.style.display = "none"
      document.body.appendChild(iframe)

      const form = document.createElement("form")
      form.method = "POST"
      form.action = "https://example.com/submit"
      form.target = "hidden-iframe"
      form.style.display = "none"

      const emailInput = document.createElement("input")
      emailInput.type = "email"
      emailInput.name = "email"
      emailInput.value = trimmedEmail

      form.appendChild(emailInput)
      document.body.appendChild(form)
      form.submit()

      setTimeout(() => {
        document.body.removeChild(form)
        document.body.removeChild(iframe)
      }, 1000)

      setSubmitStatus("success")
      setEmail("")
      setError(null)
    } catch (fallbackError) {
      console.error("Submission error:", fallbackError)
      setError("There was an error submitting your email. Please try again.")
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit()
    }
  }

  const getButtonText = () => {
    if (isSubmitting) return "JOINING..."
    if (submitStatus === "success") return "JOINED!"
    if (submitStatus === "error") return "TRY AGAIN"
    return "JOIN US"
  }

  const stats = [
    { number: "25+", label: "years of dance experience", icon: Star },
    { number: "1309+", label: "dancers in our community", icon: Users },
    { number: "17+", label: "countries participating", icon: Globe },
    { number: "20+", label: "successful workshops", icon: CheckCircle },
  ]

  const screens = [
    {
      title: "Pivot Paths",
      subtitle: "Your Dance Career Companion",
      content: (
        <div className="flex-1 px-4 space-y-4">
          <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#E2DED0" }}>
            <div className="flex items-center mb-2">
              <MapPin className="w-5 h-5 mr-2" style={{ color: "#647C90" }} />
              <span style={{ color: "#647C90" }} className="font-semibold">
                Career Transition
              </span>
            </div>
            <div className="w-full rounded-full h-2" style={{ backgroundColor: "rgba(100, 124, 144, 0.3)" }}>
              <div style={{ backgroundColor: "#647C90" }} className="rounded-full h-2 w-3/4"></div>
            </div>
          </div>

          <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#E2DED0" }}>
            <div className="flex items-center mb-2">
              <Heart className="w-5 h-5 mr-2" style={{ color: "#647C90" }} />
              <span style={{ color: "#647C90" }} className="font-semibold">
                Mindset Wellness
              </span>
            </div>
            <div className="w-full rounded-full h-2" style={{ backgroundColor: "rgba(100, 124, 144, 0.3)" }}>
              <div style={{ backgroundColor: "#647C90" }} className="rounded-full h-2 w-1/2"></div>
            </div>
          </div>

          <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#E2DED0" }}>
            <div className="flex items-center mb-2">
              <CheckCircle className="w-5 h-5 mr-2" style={{ color: "#647C90" }} />
              <span style={{ color: "#647C90" }} className="font-semibold">
                Financial Planning
              </span>
            </div>
            <div className="w-full rounded-full h-2" style={{ backgroundColor: "rgba(100, 124, 144, 0.3)" }}>
              <div style={{ backgroundColor: "#647C90" }} className="rounded-full h-2 w-1/4"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Career Transition",
      subtitle: "Navigate Your Next Chapter",
      content: (
        <div className="flex-1 px-4 space-y-4">
          <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#E2DED0" }}>
            <div className="flex items-center justify-between mb-3">
              <span style={{ color: "#647C90" }} className="font-semibold">
                Skills Assessment
              </span>
              <Target className="w-5 h-5" style={{ color: "#647C90" }} />
            </div>
            <p style={{ color: "#647C90" }} className="text-sm opacity-90">
              Identify transferable skills from your dance background
            </p>
          </div>

          <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#E2DED0" }}>
            <div className="flex items-center justify-between mb-3">
              <span style={{ color: "#647C90" }} className="font-semibold">
                Industry Exploration
              </span>
              <Shield className="w-5 h-5" style={{ color: "#647C90" }} />
            </div>
            <p style={{ color: "#647C90" }} className="text-sm opacity-90">
              Discover career paths that value your unique experience
            </p>
          </div>

          <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#E2DED0" }}>
            <div className="flex items-center justify-between mb-3">
              <span style={{ color: "#647C90" }} className="font-semibold">
                Network Building
              </span>
              <Award className="w-5 h-5" style={{ color: "#647C90" }} />
            </div>
            <p style={{ color: "#647C90" }} className="text-sm opacity-90">
              Connect with professionals in your target industry
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Identify Transferable Skills",
      subtitle: "Unlock Your Potential",
      content: (
        <div className="flex-1 px-4 space-y-4">
          <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#E2DED0" }}>
            <div className="flex items-center justify-between mb-3">
              <span style={{ color: "#647C90" }} className="font-semibold">
                Skill Mapping
              </span>
              <Users className="w-5 h-5" style={{ color: "#647C90" }} />
            </div>
            <p style={{ color: "#647C90" }} className="text-sm opacity-90">
              Identify transferable skills from your dance background
            </p>
          </div>

          <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#E2DED0" }}>
            <div className="flex items-center justify-between mb-3">
              <span style={{ color: "#647C90" }} className="font-semibold">
                Industry Exploration
              </span>
              <TrendingUp className="w-5 h-5" style={{ color: "#647C90" }} />
            </div>
            <p style={{ color: "#647C90" }} className="text-sm opacity-90">
              Discover career paths that value your unique experience
            </p>
          </div>

          <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#E2DED0" }}>
            <div className="flex items-center justify-between mb-3">
              <span style={{ color: "#647C90" }} className="font-semibold">
                Action Planning
              </span>
              <Calendar className="w-5 h-5" style={{ color: "#647C90" }} />
            </div>
            <p style={{ color: "#647C90" }} className="text-sm opacity-90">
              Create step-by-step transition roadmap
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Mindset Wellness",
      subtitle: "Mental Health & Confidence",
      content: (
        <div className="flex-1 px-4 space-y-4">
          <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#E2DED0" }}>
            <div className="flex items-center justify-between mb-3">
              <span style={{ color: "#647C90" }} className="font-semibold">
                Daily Affirmations
              </span>
              <Heart className="w-5 h-5" style={{ color: "#647C90" }} />
            </div>
            <p style={{ color: "#647C90" }} className="text-sm opacity-90">
              Build confidence with personalized positive messaging
            </p>
          </div>

          <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#E2DED0" }}>
            <div className="flex items-center justify-between mb-3">
              <span style={{ color: "#647C90" }} className="font-semibold">
                Stress Management
              </span>
              <Shield className="w-5 h-5" style={{ color: "#647C90" }} />
            </div>
            <p style={{ color: "#647C90" }} className="text-sm opacity-90">
              Techniques to handle transition anxiety and uncertainty
            </p>
          </div>

          <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#E2DED0" }}>
            <div className="flex items-center justify-between mb-3">
              <span style={{ color: "#647C90" }} className="font-semibold">
                Community Support
              </span>
              <Users className="w-5 h-5" style={{ color: "#647C90" }} />
            </div>
            <p style={{ color: "#647C90" }} className="text-sm opacity-90">
              Connect with other dancers on similar journeys
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Financial Planning",
      subtitle: "Secure Your Future",
      content: (
        <div className="flex-1 px-4 space-y-4">
          <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#E2DED0" }}>
            <div className="flex items-center justify-between mb-3">
              <span style={{ color: "#647C90" }} className="font-semibold">
                Budget Planning
              </span>
              <TrendingUp className="w-5 h-5" style={{ color: "#647C90" }} />
            </div>
            <p style={{ color: "#647C90" }} className="text-sm opacity-90">
              Manage finances during career transition periods
            </p>
          </div>

          <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#E2DED0" }}>
            <div className="flex items-center justify-between mb-3">
              <span style={{ color: "#647C90" }} className="font-semibold">
                Emergency Fund
              </span>
              <Shield className="w-5 h-5" style={{ color: "#647C90" }} />
            </div>
            <p style={{ color: "#647C90" }} className="text-sm opacity-90">
              Build financial security for unexpected changes
            </p>
          </div>

          <div className="rounded-2xl p-4 border border-white/30" style={{ backgroundColor: "#E2DED0" }}>
            <div className="flex items-center justify-between mb-3">
              <span style={{ color: "#647C90" }} className="font-semibold">
                Investment Basics
              </span>
              <Award className="w-5 h-5" style={{ color: "#647C90" }} />
            </div>
            <p style={{ color: "#647C90" }} className="text-sm opacity-90">
              Learn to grow wealth beyond your dance career
            </p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden pt-32 pb-10"
        style={{
          backgroundColor: "#E2DED0",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start justify-between">
            {/* Left Column */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} text-center md:text-left`}
            >
              <div className="relative flex justify-center md:justify-start mb-6">
                <div className="flex flex-col items-center gap-3">
                  <span className="text-white font-semibold px-4 py-2 rounded-full text-sm md:text-base flex items-center bg-gray-900/20 backdrop-blur-sm border border-white/20">
                    <Shield className="w-4 h-4 mr-2" />
                    Trusted by professional dancers worldwide
                  </span>
                </div>
              </div>

              <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6 leading-tight">
                Career change resources made for dancers
              </h1>

              <p className="font-montserrat text-xl mb-8 leading-relaxed max-w-xl" style={{ color: "#746C70" }}>
                We're helping professional dancers find meaningful work off the stage with our{" "}
                <span
                  className="px-2 py-1 rounded-lg font-semibold"
                  style={{ backgroundColor: "#E2DED0", color: "#647C90", border: "2px solid #647C90" }}
                >
                  dancer-specific
                </span>{" "}
                career change resources.
              </p>

              <div className="mt-12">
                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} index={index} />
                  ))}
                </div>

                {/* Social Media Icons Section - Centered underneath stats */}
                <div className="flex justify-center items-center gap-4 mt-8">
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{ backgroundColor: "#647C90" }}
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{ backgroundColor: "#928490" }}
                    >
                      <Youtube className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{ backgroundColor: "#647C90" }}
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{ backgroundColor: "#928490" }}
                    >
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Mobile Phone Mockup */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } flex justify-center`}
            >
              <div className="relative flex flex-col mt-[-1px]">
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="relative w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl overflow-hidden">

                    {/* COMING SOON Ribbon - sits on top of the entire phone */}
                    <div className="absolute -right-10 top-9 bg-gradient-to-r from-yellow-400 to-yellow-500 text-dark-gray font-bold text-xs md:text-sm py-1 px-10 transform rotate-45 z-40 shadow-lg">
                      COMING SOON
                    </div>

                    {/* Status Bar */}
                    <div className="bg-gray-50 h-8 flex items-center justify-between px-6 text-xs font-medium text-gray-900 rounded-t-[2.5rem] relative z-10">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-6 h-3 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>

                    {/* Screen Container */}
                    <div
                      className="relative w-full overflow-hidden rounded-b-[2.5rem] bg-slate-600"
                      style={{ height: "calc(100% - 2rem)", backgroundColor: "#647C90" }}
                    >
                      <div className="relative w-full h-full">
                        {screens.map((screen, index) => (
                          <div
                            key={index}
                            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out bg-slate-600 ${index === currentScreen
                              ? "translate-x-0 opacity-100"
                              : index < currentScreen
                                ? "-translate-x-full opacity-0"
                                : "translate-x-full opacity-0"
                              }`}
                            style={{ backgroundColor: "#647C90" }}
                          >
                            <div className="flex flex-col h-full w-full">
                              <div className="p-6 text-center flex-shrink-0" style={{ backgroundColor: "#647C90" }}>
                                <h2 className="text-2xl font-bold text-white mb-2">{screen.title}</h2>
                                <p className="text-white text-sm opacity-90">{screen.subtitle}</p>
                              </div>

                              {/* Screen Content */}
                              <div className="flex-1 overflow-hidden">{screen.content}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* New Suite CTA Section */}
      <SuiteCTASection />
    </>
  )
}

export default HeroSection