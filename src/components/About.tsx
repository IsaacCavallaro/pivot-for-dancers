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
    <section id="about" className="bg-beige font-merriweather">
      <div className="max-w-6xl py-4 mx-auto md:px-6">
        <div className="px-4 pl-4 mb-6">
          <span className="text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather">Who We Are & What We Do</span>
          <h1 className="mt-2 text-3xl font-merriweather text-text-black md:text-5xl">
            About Us
          </h1>
        </div>
        {/* Card Layout */}
        <div className="dark:bg-gray-700 rounded-lg shadow-lg p-6 md:p-8 pt-2">
          <div className="flex flex-col gap-8 md:flex-row pt-10">
            {/* Text Column 1 */}
            <animated.div style={textAnimation} className="flex-1 bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="text-black font-montserrat">
                <p className="mb-6 leading-7">
                  Pivot for Dancers is an online community, built to <span className="text-lg font-bold">support dancers</span> by welcoming uncomfortable career change conversations.
                  Basically, we're talking about the stuff <span className="text-lg font-bold">no one tells you about</span> stepping away from your professional dance career.
                  Created by dancers who've done it, we'll help you find <span className="text-lg font-bold">meaningful work</span> off the stage whether due to injuries, illness, or shifts in priorities.
                  We've accepted the fact that dance careers are notoriously short.
                </p>
              </div>
            </animated.div>

            {/* Text Column 2 */}
            <animated.div style={textAnimation} className="flex-1 bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="text-black font-montserrat">
                <p className="mb-6 leading-7">
                  And while we're incredibly proud to be dancers, we realized there's <span className="text-lg font-bold">more to life than dance</span>.
                  But by no means are we encouraging you to stop pursuing dancing professionally if it's still working for you. We're also not advocating that you get a "real job" or anything of the sort.
                  Instead, we're acknowledging a dancer's ever-changing body, priorities, and goals while helping to change your mindset around dance, your career, and <span className="text-lg font-bold">what it means to pivot</span>.
                </p>
              </div>
            </animated.div>

            {/* Iframe Section */}
            <animated.div style={iframeAnimation} className="flex-1 bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="relative w-full pt-[140%] bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://instagram.com/pivotfordancers/embed"
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
