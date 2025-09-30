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

// ScrollAnimation component to mimic Next.js scroll animations
const ScrollAnimation = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  threshold = 0.1,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, threshold])

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translateY(60px)'
        case 'down': return 'translateY(-60px)'
        case 'left': return 'translateX(60px)'
        case 'right': return 'translateX(-60px)'
        case 'scale': return 'scale(0.8)'
        default: return 'translateY(60px)'
      }
    }
    return 'translateY(0) translateX(0) scale(1)'
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
        ...props.style
      }}
      {...props}
    >
      {children}
    </div>
  )
}

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

  const backgroundColor = "#fff"
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

// New Suite CTA Section Component with ScrollAnimation
const SuiteCTASection = () => {
  const products = [
    {
      title: "Products",
      description: "Your private toolkit for career transition, mindset wellness, and financial planning",
      icon: Smartphone,
      color: "#928490",
      link: "/products",
      badge: "Digital Guides",
      items: ["E-book", "Mini Course"]
    },
    {
      title: "Services",
      description: "A comprehensive 5-year roadmap for dancers planning their career transition",
      icon: BookOpen,
      color: "#928490",
      link: "/services",
      badge: "Personalized Support",
      items: ["Mentorship", "Mock Interviews"]
    },
    {
      title: "Resources",
      description: "Weekly conversations about career transition, mindset, and finding purpose",
      icon: Headphones,
      color: "#928490",
      link: "/resources",
      badge: "Free Tools",
      items: ["Mobile App", "Podcast", "Research"]
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#647C90' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Heading with ScrollAnimation */}
        <ScrollAnimation
          className="text-center mb-20"
          direction="up"
          duration={0.8}
        >
          <ScrollAnimation
            delay={200}
            direction="scale"
            duration={0.6}
          >
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full mb-8 border backdrop-blur-xl shadow-xl" style={{ borderColor: 'rgba(255, 255, 255, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#E2DED0' }}></div>
              <span className="text-sm font-bold text-white tracking-widest">COMPREHENSIVE SUITE</span>
              <div className="w-2 h-2 rounded-full ml-3 animate-pulse delay-300" style={{ backgroundColor: '#E2DED0' }}></div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            delay={400}
            direction="up"
            duration={0.8}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Explore Our Complete Offerings
            </h2>
          </ScrollAnimation>

          <ScrollAnimation
            delay={600}
            direction="up"
            duration={0.8}
          >
            <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Discover our comprehensive suite of products, services, and resources designed specifically for dancers navigating career transitions
            </p>
          </ScrollAnimation>
        </ScrollAnimation>

        {/* Enhanced Products Grid with Slower Animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {products.map((product, index) => (
            <ScrollAnimation
              key={index}
              delay={index * 300} // Increased delay for slower staggered effect
              direction="up"
              duration={1.2} // Increased duration for slower animation
              threshold={0.1} // Lower threshold for earlier trigger
            >
              <div
                className="group relative backdrop bl rounded-3xl p-8 shadow-2xl border transition-all duration-1000 hover:-translate-y-4 flex flex-col items-center text-center max-w-sm w-full overflow-hidden"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 rounded-3xl" style={{ backgroundColor: 'rgba(226, 222, 208, 0.1)' }}></div>

                {/* Most Popular badge for Services card only */}
                {product.title === "Services" && (
                  <div className="absolute -right-8 top-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-dark-gray font-bold font-montserrat text-xs py-1 px-8 transform rotate-45 z-10 shadow-md">
                    Most Popular
                  </div>
                )}

                {/* Enhanced Icon with 3D effect - No ScrollAnimation */}
                <div className="relative mb-6">
                  <div
                    className="absolute inset-0 opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-1000 group-hover:bg-[#647C90]"
                    style={{ backgroundColor: `${product.color}40` }}
                  ></div>
                  <div
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-1000 shadow-2xl group-hover:bg-[#647C90]"
                    style={{ backgroundColor: product.color }}
                  >
                    <product.icon className="w-10 h-10 text-white transition-all duration-1000 group-hover:scale-110" />
                  </div>
                </div>

                {/* Enhanced Badge - No ScrollAnimation */}
                <div className="mb-4">
                  <span
                    className="inline-block px-4 py-2 text-xs font-bold rounded-full transition-all duration-700 group-hover:scale-105 shadow-lg border group-hover:bg-[#647C90] group-hover:bg-opacity-20 group-hover:border-[#647C90] group-hover:border-opacity-30 group-hover:text-[#647C90]"
                    style={{
                      backgroundColor: 'rgba(226, 222, 208, 0.2)',
                      color: '#928490',
                      borderColor: 'rgba(146, 132, 144, 0.3)'
                    }}
                  >
                    {product.badge}
                  </span>
                </div>

                {/* Enhanced Title with gradient - No ScrollAnimation */}
                <h4 className="font-black text-3xl mb-4 transition-colors duration-700 relative z-10 group-hover:text-[#647C90]" style={{ color: '#647C90' }}>
                  <span className="group-hover:opacity-80 transition-opacity duration-700">
                    {product.title}
                  </span>
                </h4>

                {/* Enhanced Items list with better spacing - No ScrollAnimation */}
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {product.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="inline-block px-3 py-2 text-xs font-semibold rounded-xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-md border group-hover:bg-[#647C90] group-hover:bg-opacity-15 group-hover:border-[#647C90] group-hover:border-opacity-20 group-hover:text-[#647C90]"
                      style={{
                        backgroundColor: 'rgba(226, 222, 208, 0.15)',
                        color: '#647C90',
                        borderColor: 'rgba(146, 132, 144, 0.2)'
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Enhanced Description - No ScrollAnimation */}
                <p className="text-gray-600 text-sm mb-8 leading-relaxed group-hover:text-gray-800 transition-colors duration-700 relative z-10 font-medium">
                  {product.description}
                </p>

                {/* Enhanced Button with gradient and glow - No ScrollAnimation */}
                <a
                  href={product.link}
                  className="relative inline-flex items-center justify-center w-full font-bold py-4 px-8 rounded-2xl transition-all duration-1000 group-hover:scale-105 shadow-xl group-hover:shadow-2xl overflow-hidden group/button text-white group-hover:bg-[#647C90]"
                  style={{ backgroundColor: product.color }}
                >
                  {/* Button background glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover/button:opacity-30 transition-opacity duration-1000 rounded-2xl group-hover:bg-[#647C90]"
                    style={{ backgroundColor: '#E2DED0' }}
                  ></div>

                  {/* Button content */}
                  <span className="relative mr-3 tracking-wider">LEARN MORE</span>
                  <svg
                    className="relative w-5 h-5 transition-transform duration-1000 group-hover/button:translate-x-2 group-hover/button:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Enhanced Bottom CTA with ScrollAnimation */}
        <ScrollAnimation
          className="text-center mt-20"
          delay={800}
          direction="up"
          duration={0.8}
        >
          <div className="inline-flex items-center justify-center px-8 py-4 rounded-full backdrop-blur-xl border shadow-2xl transition-all duration-500 group hover:scale-105" style={{ backgroundColor: '#928490', borderColor: 'rgba(255, 255, 255, 0.3)' }}>
            <span className="text-white font-bold mr-3 text-lg">Ready to get started?</span>
            <a
              href="https://tidycal.com/pivotfordancers/mentorship-1"
              className="font-black text-lg transition-all duration-300 text-white hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK NOW
            </a>
            <svg
              className="w-5 h-5 ml-3 text-white group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

const CommunitySection = () => {
  const [shuffledVideos, setShuffledVideos] = useState([])

  const playlistVideos = [
    {
      id: "FJRbh7AI9HQ",
      title: "Are we done telling dancers not to have a backup plan? Rachel's story",
      description: "Rachel is proof that you can successfully transition from dance while maintaining your passion and finding new purpose",
      duration: "14:22"
    },
    {
      id: "16JMiSPzlBE",
      title: "How a ski mountain helped Elise let go of her dance career",
      description: "Elise shares her journey of finding closure and new beginnings through outdoor adventure",
      duration: "12:34"
    },
    {
      id: "7EUfZS8mQtk",
      title: "How Demi's roller skating hobby turned into 500K followers",
      description: "From dancer to social media influencer - Demi's unexpected career pivot success story",
      duration: "15:22"
    },
    {
      id: "ZsvNvXLtcC4",
      title: "Will you regret being a dancer? How Monica turned guilt into growth",
      description: "Monica discusses overcoming post-career doubts and finding value in her dance journey",
      duration: "18:45"
    },
    {
      id: "tnPkI_ezUto",
      title: "Finding meaning beyond ballet: Ali's journey after the stage",
      description: "Ali explores how she's discovering new purpose and magic outside her ballet career",
      duration: "14:30"
    }
  ];

  // Shuffle function using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    // Shuffle videos when component mounts
    setShuffledVideos(shuffleArray(playlistVideos));
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#E2DED0' }}>
      <div className="absolute inset-0 bg-[radial-gradient(#d5d1c5_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation className="text-center mb-10 sm:mb-16 lg:mb-20" direction="up" duration={0.8}>
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-full mb-6 sm:mb-8 border backdrop-blur-xl shadow-xl" style={{ borderColor: 'rgba(100, 124, 144, 0.3)', backgroundColor: 'rgba(100, 124, 144, 0.1)' }}>
            <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#647C90' }}></div>
            <span className="text-sm font-bold tracking-widest" style={{ color: '#647C90' }}>COMMUNITY STORIES</span>
            <div className="w-2 h-2 rounded-full ml-3 animate-pulse delay-300" style={{ backgroundColor: '#647C90' }}></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight" style={{ color: '#647C90' }}>
            Real Dancers, Real Transitions
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: '#746C70' }}>
            Watch inspiring stories from dancers who successfully navigated career changes and found new paths.
          </p>
        </ScrollAnimation>

        {/* Main YouTube Player and Playlist */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <ScrollAnimation delay={400} direction="up" duration={1}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border" style={{ borderColor: 'rgba(100, 124, 144, 0.2)' }}>
                <div className="aspect-video bg-gray-900 relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${shuffledVideos[0]?.id || 'FJRbh7AI9HQ'}?list=PLjTsov7LqGgJ1XUG3vPMIFA6KOojU4_mm`}
                    title={shuffledVideos[0]?.title || "Rachel's Story - Are we done telling dancers not to have a backup plan?"}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Playlist Sidebar */}
          <div className="lg:col-span-1">
            <ScrollAnimation delay={600} direction="up" duration={1}>
              <div className="bg-white rounded-3xl p-6 shadow-2xl border h-full" style={{ borderColor: 'rgba(100, 124, 144, 0.2)' }}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-xl" style={{ color: '#647C90' }}>Success Stories</h3>
                  <div className="flex items-center text-sm" style={{ color: '#928490' }}>
                    <Play className="w-4 h-4 mr-1" />
                    <span>{playlistVideos.length} videos</span>
                  </div>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {shuffledVideos.map((video, index) => (
                    <div
                      key={video.id}
                      className="flex gap-4 p-4 rounded-2xl transition-all duration-300 hover:shadow-lg cursor-pointer group border"
                      style={{
                        borderColor: 'rgba(100, 124, 144, 0.1)',
                        backgroundColor: index === 0 ? 'rgba(100, 124, 144, 0.05)' : 'transparent'
                      }}
                      onClick={() => {
                        // This would update the main video in a real implementation
                        const iframe = document.querySelector('iframe');
                        if (iframe) {
                          iframe.src = `https://www.youtube.com/embed/${video.id}?list=PLjTsov7LqGgJ1XUG3vPMIFA6KOojU4_mm&autoplay=1`;
                        }
                      }}
                    >
                      <div className="relative flex-shrink-0">
                        <div className="w-20 h-12 rounded-lg bg-gray-300 overflow-hidden">
                          <img
                            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-[#647C90] transition-colors" style={{ color: '#647C90' }}>
                          {video.title}
                        </h4>
                        <p className="text-xs text-gray-600 line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* CTA Buttons */}
        <ScrollAnimation className="text-center" delay={1000} direction="up" duration={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.youtube.com/playlist?list=PLjTsov7LqGgJ1XUG3vPMIFA6KOojU4_mm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full backdrop-blur-xl border shadow-2xl transition-all duration-500 group hover:scale-105"
              style={{ backgroundColor: '#928490', borderColor: 'rgba(100, 124, 144, 0.3)' }}
            >
              <Youtube className="w-6 h-6 mr-3 text-white" />
              <span className="font-bold text-lg mr-3 text-white">Watch Full Playlist</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
            </a>

            <a
              href="https://stats.sender.net/forms/aKrmkz/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full backdrop-blur-xl border shadow-2xl transition-all duration-500 group hover:scale-105"
              style={{ backgroundColor: '#928490', borderColor: 'rgba(100, 124, 144, 0.3)' }}
            >
              <Users className="w-5 h-5 mr-3 text-white" />
              <span className="font-bold text-lg mr-3 text-white">Share Your Story</span>
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform text-white" />
            </a>
          </div>
        </ScrollAnimation>
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
              <div className="relative flex justify-center md:justify-start -mt-8 mb-4 md:mb-6">
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
                  style={{ backgroundColor: "#647C90", color: "#fff", border: "2px solid #647C90" }}
                >
                  dancer specfic
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

      {/* New Community Section */}
      <CommunitySection />
    </>
  )
}

export default HeroSection