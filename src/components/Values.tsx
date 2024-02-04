import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { IoMdCompass, IoMdSearch, IoIosFitness, IoMdHeartHalf, IoMdCode } from 'react-icons/io';

const Values: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const valuesSection = document.getElementById('values');

      if (valuesSection) {
        const rect = valuesSection.getBoundingClientRect();
        const isSectionVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

        if (isSectionVisible) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const valuesAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
    config: { duration: 800 },
  });

  const iconAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
    config: { duration: 800 },
  });

  return (
    <section id="values" className="bg-beige font-poppins lg:py-20">
      <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="px-4 pl-4 mb-6">
          <span className="text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather">Why Pivot For Dancers?</span>
          <h1 className="mt-2 text-3xl font-merriweather text-text-black md:text-5xl">
          Our Values
        </h1>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 px-4 mb-10 opacity-70">
            <animated.img
              style={iconAnimation}
              className="object-cover w-full h-full rounded-lg"
              src="/assets/test-pic-three.jpeg"
              alt="Female artistically reaching for the sky"
            />
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <div className="flex flex-col space-y-8">
              {values.map((value, index) => (
                <animated.div
                  key={index}
                  style={valuesAnimation}
                  className="flex mb-4 animate__animated animate__fadeIn"
                >
                  <animated.span style={iconAnimation} className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 dark:bg-gray-700 text-white">
                    {value.title === 'Curiosity' && <IoMdSearch className="w-6 h-6" />}
                    {value.title === 'Empowerment' && <IoIosFitness className="w-6 h-6" />}
                    {value.title === 'Resilience' && <IoMdHeartHalf className="w-6 h-6" />}
                    {value.title !== 'Curiosity' && value.title !== 'Empowerment' && value.title !== 'Resilience' && <IoMdCode className="w-6 h-6" />}
                  </animated.span>
                  <div>
                    <animated.h2 style={valuesAnimation} className="mb-4 text-xl font-bold leading-tight text-text-black md:text-2xl">
                      {value.title}
                    </animated.h2>
                    <animated.p style={valuesAnimation} className="text-base leading-loose text-black">
                      {value.description}
                    </animated.p>
                  </div>
                </animated.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const values = [
  {
    title: 'Curiosity',
    description: 'Pivot for Dancers encourages dancers to explore other interests simultaneously with pursuing a dance career. It doesn\'t have to be one or the other.',
  },
  {
    title: 'Empowerment',
    description: 'Let\'s ditch the idea that if we\'re not dancing, we\'re only merely surviving. Pivot is about finding fulfilling jobs for when times get tough or our passions change, instead of meaningless survival jobs that make us feel desperate.',
  },
  {
    title: 'Resilience',
    description: 'You\'ve made the courageous choice to see what else is out there for you. It\'s that resilience you learned as an ambitious dancer that will help you through.',
  },
];

export default Values;
