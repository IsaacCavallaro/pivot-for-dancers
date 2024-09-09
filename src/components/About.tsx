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
    <section id="about" className="bg-beige font-merriweather py-10"> {/* Added vertical padding */}
      <div className="max-w-6xl mx-auto px-4 md:px-6"> {/* Add padding on mobile with px-4 */}
        <div className="px-4 pl-4 mb-6">
          <span className="text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather">Who We Are & What We Do</span>
          <h1 className="mt-2 text-3xl font-merriweather text-text-black md:text-5xl">
            About Us
          </h1>
        </div>
        {/* Card Layout */}
        <div className="dark:bg-gray-700 rounded-lg shadow-lg md:p-8 pt-2 my-6"> {/* Added vertical margin */}
          <div className="flex flex-col gap-8 md:flex-row md:gap-8 px-4 md:px-0"> {/* Add padding on mobile and remove it on larger screens */}
            {/* Text Column 1 */}
            <animated.div
              style={textAnimation}
              className="mt-8 md:mt-0 flex-1 bg-white rounded-lg shadow-md p-6 md:p-8 mx-auto"

            >
              <div className="text-black font-montserrat">
                <p className="mb-6 leading-7">
                  Pivot for Dancers is an online community, built to <span className="font-bold">support dancers</span> by welcoming uncomfortable career change conversations.
                  Basically, we're talking about the stuff <span className="font-bold">no one tells you about</span> stepping away from your professional dance career.
                </p>
                <p className="mb-6 leading-7">
                  Created by dancers who've done it, we'll help you find <span className="font-bold">meaningful work</span> off the stage whether due to injuries, illness, or shifts in priorities.
                  We've accepted the fact that dance careers are notoriously short.
                </p>
                <p className="mb-6 leading-7">
                  And while we're incredibly proud to be dancers, we realized there's <span className="font-bold">more to life than dance</span>.
                  But by no means are we encouraging you to stop pursuing dancing professionally if it's still working for you. We're also not advocating that you get a "real job" or anything of the sort.
                </p>
                <p className="mb-6 leading-7">
                  Instead, we're acknowledging a dancer's ever-changing body, priorities, and goals while helping to change your mindset around dance, your career, and <span className="font-bold">what it means to pivot</span>.
                </p>
              </div>
            </animated.div>

            {/* Iframe Section */}
            <animated.div
              style={iframeAnimation}
              className="mb-10 md:mb-0 flex-1 bg-white rounded-lg shadow-md p-6 md:p-8 mx-auto"
            >
              {/* Video Section */}
              <div className="flex justify-center items-center">
                <div className="w-full max-w-sm md:max-w-full mx-auto">
                  <iframe
                    width="100%"
                    height="600px"
                    src="https://www.instagram.com/p/C8x-Sp7SSCo/embed"
                    title="Instagram video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-lg w-full h-[600px]"
                  ></iframe>
                </div>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
