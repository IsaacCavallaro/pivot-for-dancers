"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"

const STYLES = {
  section: "bg-beige font-merriweather py-10 px-5 text-center",
  headingContainer: "px-4 pl-4 mb-6",
  headingSpan: "text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather",
  headingTitle: "mt-2 text-3xl font-merriweather text-black md:text-4xl font-semibold",
  button: "inline-block px-4 py-2 text-sm font-semibold text-white bg-purple-gray rounded-full hover:bg-purple-gray-600",
  modalImageContainer: "flex justify-center mb-4",
  modalImage: "w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-full border-2 border-purple-gray",
  counter: "text-4xl font-bold"
}

interface CounterProps {
  value: string
  duration?: number
  onComplete?: () => void
}

interface StatProps {
  value: string
  label: string
  description?: string | React.ReactNode
  imageUrl?: string
  buttonText: string
  modalButtonText: string
}

interface StatCardProps extends StatProps {
  index: number
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  modalButtonText: string
  children: React.ReactNode
}

type AnimationState = "closed" | "closing" | "open"

const AnimatedTickIcon: React.FC<{ size?: number; animate: boolean }> = ({
  size = 56,
  animate
}) => {
  return (
    <div className="flex justify-center">
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`text-purple-gray ${animate ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline
          points="22 4 12 14.01 9 11.01"
          className={animate ? 'animate-draw' : ''}
          style={{
            strokeDasharray: 24,
            strokeDashoffset: animate ? 24 : 0,
            transition: animate ? 'none' : 'stroke-dashoffset 1.5s ease-in-out',
          }}
        />
      </svg>
    </div>
  )
}

const Counter: React.FC<CounterProps> = ({
  value,
  duration = 2000,
  onComplete
}) => {
  const [count, setCount] = useState(0)
  const completedRef = useRef(false)

  // Extract numeric value and check for suffix
  const finalValue = Number.parseInt(value.replace(/\D/g, ""))
  const hasSuffix = value.includes("+")

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentCount = Math.floor(progress * finalValue)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      } else if (!completedRef.current) {
        completedRef.current = true
        onComplete?.()
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animationFrame)
  }, [finalValue, duration, onComplete])

  return (
    <span className={STYLES.counter}>
      {count}
      {hasSuffix && "+"}
    </span>
  )
}

// Modal component with smooth animations
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  modalButtonText,
  children,
}) => {
  const [animationState, setAnimationState] = useState<AnimationState>("closed")

  useEffect(() => {
    if (isOpen) {
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden'
      // Start animation after component mounts
      const timer = setTimeout(() => setAnimationState("open"), 100)
      return () => clearTimeout(timer)
    } else {
      // Restore scrolling
      document.body.style.overflow = 'auto'
      // Close animation
      setAnimationState("closing")
      // Wait for animation to complete before unmounting
      const timer = setTimeout(() => setAnimationState("closed"), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Skip rendering if modal is closed
  if (animationState === "closed" && !isOpen) return null

  // Determine opacity based on animation state
  const bgOpacity = animationState === "open" ? "bg-opacity-50" : "bg-opacity-0"
  const modalTransform = animationState === "open"
    ? "opacity-100 scale-100 translate-y-0"
    : "opacity-0 scale-95 -translate-y-4"

  return (
    <div
      className={`fixed inset-0 bg-black z-50 overflow-y-auto transition-opacity duration-300 ease-in-out ${bgOpacity}`}
      onClick={onClose}
    >
      <div className="min-h-screen px-4 py-6 flex items-center justify-center">
        <div
          className={`bg-white rounded-lg shadow-lg w-full max-w-2xl mx-auto my-8 flex flex-col transition-all duration-300 ease-in-out ${modalTransform}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 sm:p-6 md:p-8 flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl transition-colors duration-200"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

// Stat Card component
const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  imageUrl,
  buttonText,
  modalButtonText,
  index
}) => {
  const [isAnimating, setIsAnimating] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Set up intersection observer to detect when card is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          if (cardRef.current) {
            observer.unobserve(cardRef.current)
          }
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  const handleCounterComplete = () => {
    // Once the counter is done, finish the tick animation
    setTimeout(() => {
      setIsAnimating(false)
    }, 100) // Small delay for better visual effect
  }

  return (
    <div
      ref={cardRef}
      className={`text-center bg-white p-6 rounded-lg shadow-md transition-opacity duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="mb-4 h-14 flex items-center justify-center">
        {isVisible && <AnimatedTickIcon animate={isAnimating} />}
      </div>

      {isVisible && (
        <Counter
          value={value}
          duration={2000}
          onComplete={handleCounterComplete}
        />
      )}

      <p className="text-lg mt-2">{label}</p>

      <button
        onClick={() => setIsModalOpen(true)}
        className={`${STYLES.button} mt-3`}
      >
        {buttonText}
      </button>

      {/* Modal with sticky header and scrollable content */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modalButtonText={modalButtonText}
      >
        <div className="flex flex-col h-full">
          {/* Sticky header with image and title */}
          <div className="sticky top-0 bg-white z-10 p-4">
            {imageUrl && (
              <div className={STYLES.modalImageContainer}>
                <div className={STYLES.modalImage}>
                  <img
                    src={imageUrl}
                    alt={label}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{label}</h3>
          </div>

          {/* Scrollable content area */}
          <div className="p-4 sm:p-6 bg-white overflow-y-auto max-h-[50vh]">
            <div className="text-gray-700 text-sm sm:text-base">
              {description || "No additional information available."}
            </div>
          </div>

          {/* Sticky footer with button */}
          <div className="sticky bottom-0 bg-white z-10 p-4 flex justify-center">
            <button
              onClick={() => setIsModalOpen(false)}
              className={STYLES.button}
            >
              {modalButtonText}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

const STATS_DATA: StatProps[] = [
  {
    value: "25+",
    label: "Years of Experience",
    description: (
      <>
        <p>
          Kaylee Randall started dancing at age 3 in Florida, training on the competition circuit.
          Her professional dance career spanned almost a decade, performing full time with companies
          such as Universal Studios and Royal Caribbean. In 2018, when burnout set in and her
          priorities started to shift, she knew she was ready to take her last bow.
        </p>
        <br />
        <p>
          Since then, Kaylee has started a freelance business, moved overseas to Australia, and now works
          full-time in the corporate tech world. But the transition didn't come without struggles,
          which is why Kaylee founded Pivot for Dancers in 2020 to help other dancers on their
          career change journey.
        </p>
        <br />
        <p>
          Kaylee is a dancer who <em>actually</em> performed full time for many
          years and who still managed to build a fulfilling life beyond dance. She's here to share
          how you can too.
        </p>
        <br />
      </>
    ),
    imageUrl: `${process.env.PUBLIC_URL}/assets/kr-head-shot.jpg`,
    buttonText: "Meet Our Founder",
    modalButtonText: "Get In Touch",
  },
  {
    value: "1309+",
    label: "Dancers in Our Community",
    description: (
      <>
        <p>
          Over the years, Pivot for Dancers has built a thriving community of current and former
          professional dancers who are courageously building a life after dance. Having the tough
          conversations about the reality of a dance career and supporting each other through the
          ups and downs of navigating a pivot.
        </p>
        <br />
        <p>
          There are thousands of other dancers just like you in our community. Whether you've suffered
          an injury, been diagnosed with an illness, or simply found new dreams to pursue, you're not
          alone in wanting to change careers as a professional dancer.
        </p>
        <br />
        <p>
          Connect with the Pivot for Dancers community to feel part of something bigger and know you're
          on this journey with the support of your fellow dancers.
        </p>
        <br />
      </>
    ),
    imageUrl: `${process.env.PUBLIC_URL}/assets/jazz-male.jpeg`,
    buttonText: "Learn About Us",
    modalButtonText: "Join Our Community",
  },
  {
    value: "17+",
    label: "Nationalities Subscribed",
    description: (
      <>
        <p>
          At Pivot for Dancers, we believe you shouldn't need to be based in New York or LA to
          access real career change support. And you shouldn't need to be part of a union,
          organization, or non-profit to find resources to help you.
        </p>
        <br />
        <p>
          With us, there are no orientations, memberships, citizenships, or applications necessary.
          We offer global support for dancers all around the world. We've connected with dancers in
          the US, Canada, Australia, Brazil, Germany, France, the UK, Austria, China, South Africa,
          Spain, Ireland, Mexico, Paraguay, Portugal, New Zealand, the Netherlands, and more.
        </p>
        <br />
        <p>
          Pivot for Dancers resources are accessible to all dancers — from expats between countries
          to touring artists between time zones to cruise ship dancers between oceans — you still
          deserve access to dancer-specific career change support.
        </p>
        <br />
      </>
    ),
    imageUrl: `${process.env.PUBLIC_URL}/assets/jazz-male.jpeg`,
    buttonText: "Get Global Support",
    modalButtonText: "Discover Our Resources",
  },
  {
    value: "20+",
    label: "Successful Live Workshops",
    description: (
      <>
        <p>
          Since launching Pivot for Dancers, we've hosted dozens of free online workshops for
          dancers focused on changing careers.
        </p>
        <br />
        <p>
          We've covered topics such as caring for your mental health during your transition, how to
          write a resume and cover letter, preparing to pivot while you're still dancing, common job
          search mistakes, and more.
        </p>
        <br />
        <p>
          When you sign up for a live Pivot Workshop, you're not only learning valuable skills but
          you're also connecting with other dancers in the Pivot for Dancers community in real-time.
          It's the perfect way to network while upskilling for your career change.
        </p>
        <br />
      </>
    ),
    imageUrl: `${process.env.PUBLIC_URL}/assets/jazz-male.jpeg`,
    buttonText: "Explore Our Workshops",
    modalButtonText: "Sign Up",
  },
]

// Main AboutUsSection component
const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className={STYLES.section}>
      <div className={STYLES.headingContainer}>
        <h2 className={STYLES.headingTitle}>About Us</h2>
        <span className={STYLES.headingSpan}>Who We Are & What We Do</span>
      </div>

      {/* Stats Section - 2x2 grid on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-3xl mx-auto">
        {STATS_DATA.map((stat, index) => (
          <StatCard
            key={`stat-${index}`}
            {...stat}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default AboutUsSection