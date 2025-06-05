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
      <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center h-full">
        <IconComponent className="w-6 h-6 text-light-gray mb-3" />
        <div className="font-merriweather text-2xl font-bold text-dark-gray mb-1">
          {isVisible ? (
            <>
              <Counter end={numericValue} duration={2000} />
              {number.includes('+') && '+'}
            </>
          ) : (
            '0'
          )}
        </div>
        <p className="font-montserrat text-sm text-brown-gray">{label}</p>
      </div>
    </div>
  );
};


const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

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
  `.trim();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = `https://pivotfordancers.us19.list-manage.com/subscribe/post?u=be8fecbf3f1babc7628da411c&amp;id=e5d51bd2a0&amp;f_id=00c396e4f0&EMAIL=${encodeURIComponent(email)}`;
  };

  return (
    <section id="home" className="relative overflow-hidden bg-beige pt-32 pb-10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* Form */}
            <div className="flex flex-col items-center justify-center w-full mt-6 space-y-4">
              <form
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className={formClass}
                target="_self"
                onSubmit={handleSubmit}
                noValidate
              >
                <input
                  className={inputClass}
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button type="submit" className={buttonClass}>
                  JOIN US
                </button>
              </form>

              <div className="flex space-x-4 justify-center">
                {/* Social Icons */}
                {[
                  ['facebook', 'https://www.facebook.com/pivotfordancers/', 'bg-blue-500'],
                  ['instagram', 'https://www.instagram.com/pivotfordancers/', 'bg-pink-500'],
                  ['linkedin', 'https://www.linkedin.com/company/pivotfordancers/', 'bg-blue-500'],
                  ['youtube', 'https://www.youtube.com/@pivotfordancers', 'bg-red-500']
                ].map(([platform, href, color], i) => (
                  <a key={i} href={href} className={`${socialMediaIconClass} ${color} hover:opacity-80`} target="_blank" rel="noopener noreferrer">
                    <i className={`fab fa-${platform}`}></i>
                  </a>
                ))}
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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