import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const AboutUsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const textAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
    config: { duration: 800 },
  });

  const iframeAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
    config: { duration: 800 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');

      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isSectionVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

        if (isSectionVisible) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className="bg-beige font-merriweather py-10">
      <div className="max-w-6xl py-4 mx-auto md:px-6">
        {/* Heading section */}
        <div className="px-4 pl-4 mb-6">
          <span className="text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather">
            Who We Are & What We Do
          </span>
          <h1 className="mt-2 text-3xl font-merriweather text-black md:text-5xl">
            About Us
          </h1>
        </div>

        {/* Grid Container for Blocks */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 px-4">
          {/* Block one */}
          <div className="flex flex-col items-center gap-6 p-8 rounded-lg border border-gray-200">
            <img
              src="/assets/ballet-femal.jpeg"
              alt="Pivot Panels"
              className="object-cover w-32 h-32 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105"
            />
            <div className="flex flex-col items-center text-center">
              <h2 className="mt-2 text-3xl font-semibold text-gray-800 md:text-4xl tracking-tight">
                Career Changes
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xs">
                Pivot for Dancers offers <span className="font-bold text-gray-800">practical resources</span> to support professional dancers in making a career change.
              </p>
            </div>

            {/* Block one -> Icons */}
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {/* Community Icon */}
              <div className="text-center">
                <div className="text-white bg-purple-gray p-3 rounded-full flex items-center justify-center w-12 h-12 shadow-sm">
                  <i className="fas fa-book text-xl"></i>
                </div>
                <p className="text-xs mt-2 text-gray-600">Community</p>
              </div>

              {/* Resources Icon */}
              <div className="text-center">
                <div className="text-white bg-purple-gray p-3 rounded-full flex items-center justify-center w-12 h-12 shadow-sm">
                  <i className="fas fa-masks-theater text-xl"></i>
                </div>
                <p className="text-xs mt-2 text-gray-600">Resources</p>
              </div>

              {/* Planning Icon */}
              <div className="text-center">
                <div className="text-white bg-purple-gray p-3 rounded-full flex items-center justify-center w-12 h-12 shadow-sm">
                  <i className="fas fa-briefcase text-xl"></i>
                </div>
                <p className="text-xs mt-2 text-gray-600">Planning</p>
              </div>
            </div>
          </div>

          {/* Block two */}
          <div className="flex flex-col items-center gap-6 p-8 rounded-lg border border-gray-200">
            <img
              src="/assets/lyrical-female.jpeg"
              alt="Pivot Panels"
              className="object-cover w-32 h-32 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105"
            />
            <div className="flex flex-col items-center text-center">
              <h2 className="mt-2 text-3xl font-semibold text-gray-800 md:text-4xl tracking-tight">
                Taboo Topics
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xs">
                We're talking about <span className="font-bold">the stuff no one tells you</span> about stepping away from your professional dance career.
              </p>
            </div>

            {/* Block two -> Icons */}
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {/* Finance Icon */}
              <div className="text-center">
                <div className="text-white bg-purple-gray p-3 rounded-full flex items-center justify-center w-12 h-12 shadow-sm">
                  <i className="fas fa-graduation-cap text-xl"></i>
                </div>
                <p className="text-xs mt-2 text-gray-600">Finance</p>
              </div>

              {/* Grief Icon */}
              <div className="text-center">
                <div className="text-white bg-purple-gray p-3 rounded-full flex items-center justify-center w-12 h-12 shadow-sm">
                  <i className="fas fa-masks-theater text-xl"></i>
                </div>
                <p className="text-xs mt-2 text-gray-600">Grief</p>
              </div>

              {/* Shame Icon */}
              <div className="text-center">
                <div className="text-white bg-purple-gray p-3 rounded-full flex items-center justify-center w-12 h-12 shadow-sm">
                  <i className="fas fa-pause text-xl"></i>
                </div>
                <p className="text-xs mt-2 text-gray-600">Shame</p>
              </div>
            </div>
          </div>

          {/* Block three */}
          <div className="flex flex-col items-center gap-6 p-8 rounded-lg border border-gray-200">
            <img
              src="/assets/jazz-female.jpeg"
              alt="Pivot Panels"
              className="object-cover w-32 h-32 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105"
            />
            <div className="flex flex-col items-center text-center">
              <h2 className="mt-2 text-3xl font-semibold text-gray-800 md:text-4xl tracking-tight">
                Meaningful Work
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xs">
                Built by dancers who've done it, Pivot for Dancers has everything you need to <span className="font-bold">find meaningful work off the stage</span>.
              </p>
            </div>

            {/* Block three -> Icons */}
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {/* Curiosity Icon */}
              <div className="flex flex-col items-center text-center">
                <div className="text-white bg-purple-gray p-3 rounded-full flex items-center justify-center w-12 h-12 shadow-sm">
                  <i className="fas fa-magnifying-glass text-xl"></i>
                </div>
                <p className="text-xs mt-2 text-gray-600">Curiosity</p>
              </div>

              {/* Empowermentssional Icon */}
              <div className="flex flex-col items-center text-center">
                <div className="text-white bg-purple-gray p-3 rounded-full flex items-center justify-center w-12 h-12 shadow-sm">
                  <i className="fas fa-dumbbell text-xl"></i>
                </div>
                <p className="text-xs mt-2 text-gray-600">Empowerment</p>
              </div>

              {/* Resilience Icon */}
              <div className="flex flex-col items-center text-center">
                <div className="text-white bg-purple-gray p-3 rounded-full flex items-center justify-center w-12 h-12 shadow-sm">
                  <i className="fas fa-seedling text-xl"></i>
                </div>
                <p className="text-xs mt-2 text-gray-600">Resilience</p>
              </div>
            </div>
          </div>

          {/* Block four */}
          <div className="flex flex-col items-center gap-6 p-8 rounded-lg border border-gray-200">
            <img
              src="/assets/contemporary-female.jpeg"
              alt="Pivot Panels"
              className="object-cover w-32 h-32 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105"
            />
            <div className="flex flex-col items-center text-center">
              <h2 className="mt-2 text-3xl font-semibold text-gray-800 md:text-4xl tracking-tight">
                Dancer-Focused
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xs">
                We take a dancer-focused approach to career advice to help shift your mindset on  <span className="font-bold">what it means to pivot</span>.
              </p>
            </div>

            {/* Block four -> Icons */}
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {/* Student Icon */}
              <div className="flex flex-col items-center text-center">
                <div className="text-white bg-purple-gray p-3 rounded-full flex items-center justify-center w-12 h-12 shadow-sm">
                  <i className="fas fa-graduation-cap text-xl"></i>
                </div>
                <p className="text-xs mt-2 text-gray-600">Student</p>
              </div>

              {/* Professional Icon */}
              <div className="flex flex-col items-center text-center">
                <div className="text-white bg-purple-gray p-3 rounded-full flex items-center justify-center w-12 h-12 shadow-sm">
                  <i className="fas fa-masks-theater text-xl"></i>
                </div>
                <p className="text-xs mt-2 text-gray-600">Professional</p>
              </div>

              {/* Retired Icon */}
              <div className="flex flex-col items-center text-center">
                <div className="text-white bg-purple-gray p-3 rounded-full flex items-center justify-center w-12 h-12 shadow-sm">
                  <i className="fas fa-pause text-xl"></i>
                </div>
                <p className="text-xs mt-2 text-gray-600">Retired</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section >
  );
};

export default AboutUsSection;
