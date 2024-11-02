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
      <div id="contact" className="max-w-6xl py-4 mx-auto md:px-6">
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {/* Block one */}
          <div className="flex flex-col items-center gap-6 p-6 rounded-lg border border-gray-100">
            <img
              src="/assets/ballet-femal.jpeg"
              alt="Pivot Panels"
              className="object-cover w-32 h-32 rounded-full"
            />
            <div className="flex flex-col items-center text-center">
              <h2 className="mt-2 text-2xl font-merriweather text-black md:text-3xl">
                Career Changes
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-2">
                Pivot for Dancers offers <span className="font-bold">practical resources</span> to support professional dancers while making a career change.
              </p>
            </div>
          </div>

          {/* Block two */}
          <div className="flex flex-col items-center gap-6 p-6 rounded-lg border border-gray-100">
            <img
              src="/assets/contemporary-female.jpeg"
              alt="Pivot Panels"
              className="object-cover w-32 h-32 rounded-full"
            />
            <div className="flex flex-col items-center text-center">
              <h2 className="mt-2 text-2xl font-merriweather text-black md:text-3xl">
                Taboo Topics
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-2">
                We're talking about <span className="font-bold">the stuff no one tells you</span> about stepping away from your professional dance career.
              </p>
            </div>
          </div>

          {/* Block three */}
          <div className="flex flex-col items-center gap-6 p-6 rounded-lg border border-gray-100">
            <img
              src="/assets/jazz-female.jpeg"
              alt="Pivot Panels"
              className="object-cover w-32 h-32 rounded-full"
            />
            <div className="flex flex-col items-center text-center">
              <h2 className="mt-2 text-2xl font-merriweather text-black md:text-3xl">
                Meaningful Work
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-2">
                Built by dancers who've done it, Pivot for Dancers has everything you need to <span className="font-bold">find meaningful work off the stage</span>.
              </p>
            </div>
          </div>

          {/* Block four */}
          <div className="flex flex-col items-center gap-6 p-6 rounded-lg border border-gray-100">
            <img
              src="/assets/hip-hop-female.jpeg"
              alt="Pivot Panels"
              className="object-cover w-32 h-32 rounded-full"
            />
            <div className="flex flex-col items-center text-center">
              <h2 className="mt-2 text-2xl font-merriweather text-black md:text-3xl">
                Dancer-Focused
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-2">
                We take a dancer-focused approach to career advice to help shift your mindset around dance, your career, and <span className="font-bold">what it means to pivot</span>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;
