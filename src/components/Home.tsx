import { useState, useEffect, useRef } from 'react';
import { Star, CheckCircle, Users, Globe } from 'lucide-react';

// Counter animation component
const Counter = ({ end, duration }: { end: number; duration: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<number>(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        ref.current = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    ref.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(ref.current);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const StatCard = ({ number, label, icon: IconComponent }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Split label into two parts for two-line display
  const splitLabel = (text: string) => {
    const words = text.split(' ');
    const midPoint = Math.ceil(words.length / 2);
    return {
      line1: words.slice(0, midPoint).join(' '),
      line2: words.slice(midPoint).join(' ')
    };
  };

  const { line1, line2 } = splitLabel(label);
  const numericValue = parseInt(number.replace(/\D/g, ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="bg-white rounded-2xl p-4 md:p-3 shadow-lg flex flex-col items-center justify-center h-full">
        <IconComponent className="w-5 h-5 md:w-4 md:h-4 text-light-gray mb-2 md:mb-1" />
        <div className="font-merriweather text-xl md:text-lg font-bold text-dark-gray mb-1">
          {isVisible ? (
            <>
              <Counter end={numericValue} duration={2000} />
              {number.includes('+') && '+'}
            </>
          ) : (
            '0'
          )}
        </div>
        <div className="font-montserrat text-xs text-brown-gray leading-tight">
          <div>{line1}</div>
          <div>{line2}</div>
        </div>
      </div>
    </div>
  );
};


const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '25+', label: 'years of dance experience', icon: Star },
    { number: '1309+', label: 'dancers in our community', icon: Users },
    { number: '17+', label: 'countries participating', icon: Globe },
    { number: '20+', label: 'successful workshops', icon: CheckCircle }
  ];

  const iconSize = 'h-8 w-8';
  const socialMediaIconClass = `text-white p-2 rounded-full flex items-center justify-center ${iconSize}`;
  const formClass = 'flex flex-col md:flex-row items-center md:items-stretch w-full justify-center md:justify-start gap-3';
  const inputClass = `
    w-full px-4 py-4 
    text-sm text-gray-900 placeholder-gray-400 
    bg-gray-100 border border-gray-300 
    rounded-md dark:text-gray-400 
    dark:placeholder-gray-400 dark:bg-gray-700 
    dark:border-gray-700 md:w-2/3
  `.trim();

  const buttonClass = `
    px-6 py-4 
    text-sm font-semibold text-gray-100 
    bg-purple-gray rounded-md 
    hover:bg-purple-gray opacity-80 hover:opacity-100 
    w-full md:w-auto
    disabled:opacity-50 disabled:cursor-not-allowed
  `.trim();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    // Reset status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async () => {
    if (!email.trim()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://stats.sender.net/forms/aKrmkz/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim()
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail(''); // Clear the form on success
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const getButtonText = () => {
    if (isSubmitting) return 'JOINING...';
    if (submitStatus === 'success') return 'JOINED!';
    if (submitStatus === 'error') return 'TRY AGAIN';
    return 'JOIN US';
  };

  return (
    <section id="home" className="relative overflow-hidden bg-beige pt-32 pb-10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} text-center md:text-left`}>
            <div className="flex justify-center md:justify-start md:items-center gap-2 mb-6">
              <span className="bg-yellow-400 text-dark-gray font-montserrat font-semibold px-4 py-2 rounded-full">
                <Star className="w-4 h-4 mr-1 fill-current inline" />
                Trusted by professional dancers worldwide
              </span>
            </div>

            <h1 className="font-merriweather text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight mx-auto md:mx-0">
              Career change resources made for dancers
            </h1>

            <p className="font-montserrat text-xl text-brown-gray mb-8 leading-relaxed max-w-xl mx-auto">
              At Pivot for Dancers, we're helping professional dancers find meaningful work off the stage with our dancer-specific career change resources.
            </p>

            {/* Form and Social Media Icons Section */}
            <div className="flex flex-col items-center md:items-start justify-center w-full mt-6 space-y-4">
              {/* Email Input and Button */}
              <div className={formClass}>
                <input
                  className={`${inputClass} lg:mr-3 md:mb-3`}
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  onKeyPress={handleKeyPress}
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  className={`${buttonClass} md:mb-3`}
                  onClick={handleSubmit}
                  disabled={isSubmitting || !email.trim()}
                >
                  {getButtonText()}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm font-medium">
                  Successfully subscribed! Welcome to our community.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm font-medium">
                  Something went wrong. Please try again.
                </p>
              )}

              {/* Social Media Icons */}
              <div className="flex space-x-4 justify-center md:justify-start">
                <a
                  href="https://www.facebook.com/pivotfordancers/"
                  className={`${socialMediaIconClass} bg-blue-500 hover:bg-blue-400`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/pivotfordancers/"
                  className={`${socialMediaIconClass} bg-pink-500 hover:bg-pink-400`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/pivotfordancers/"
                  className={`${socialMediaIconClass} bg-blue-500 hover:bg-blue-400`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.youtube.com/@pivotfordancers"
                  className={`${socialMediaIconClass} bg-red-500 hover:bg-red-400`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className={`relative transition-all duration-1000 delay-300  pb-px-5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative aspect-video w-full">
              <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/I6wSSAMR3FY?si=rRy0U55jnBeqyRz1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>

            <br></br>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;