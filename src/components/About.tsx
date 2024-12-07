import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const AboutUsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const textAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
    config: { duration: 800 },
  });

  const sectionClasses = "bg-beige font-merriweather py-10";
  const containerClasses = "max-w-6xl py-4 mx-auto md:px-6";
  const headingContainerClasses = "px-4 pl-4 mb-6";
  const headingSpanClasses = "text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather";
  const headingTitleClasses = "mt-2 text-3xl font-merriweather text-black md:text-5xl";
  const gridClasses = "grid gap-6 md:grid-cols-2 lg:grid-cols-2 px-4";
  const blockClasses = "flex flex-col items-center gap-6 p-8 rounded-lg border-2 border-gray-800";
  const imgClasses = "object-cover w-32 h-32 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105";
  const textContainerClasses = "flex flex-col items-center text-center";
  const textTitleClasses = "mt-2 text-3xl font-semibold text-gray-800 md:text-4xl tracking-tight";
  const textBodyClasses = "text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xs";
  const iconsContainerClasses = "grid grid-cols-3 gap-6 justify-items-center";
  const iconWrapperClasses = "flex flex-col items-center";
  const iconClasses = "text-white bg-purple-gray p-3 rounded-full flex items-center justify-center w-12 h-12 shadow-sm";
  const iconTextClasses = "text-xs mt-2 text-gray-600";

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

  // Render the component
  return (
    <section id="about" className={sectionClasses}>
      <div className={containerClasses}>
        {/* Heading section */}
        <div className={headingContainerClasses}>
          <span className={headingSpanClasses}>Who We Are & What We Do</span>
          <h1 className={headingTitleClasses}>About Us</h1>
        </div>

        {/* Animated Grid Container for Blocks */}
        <animated.div style={textAnimation} className={gridClasses}>
          {/* Block content (reusable) */}
          {[
            {
              img: "/assets/ballet-femal.jpeg",
              title: "Career Changes",
              description: "Pivot for Dancers offers practical resources to support professional dancers in making a career change.",
              icons: [
                { icon: "fa-book", text: "Community" },
                { icon: "fa-masks-theater", text: "Resources" },
                { icon: "fa-briefcase", text: "Planning" },
              ],
            },
            {
              img: "/assets/lyrical-female.jpeg",
              title: "Taboo Topics",
              description: "We're talking about the stuff no one tells you about stepping away from your professional dance career.",
              icons: [
                { icon: "fa-dollar-sign", text: "Finance" },
                { icon: "fa-heart-broken", text: "Grief" },
                { icon: "fa-sad-cry", text: "Shame" },
              ],
            },
            {
              img: "/assets/jazz-female.jpeg",
              title: "Meaningful Work",
              description: "Built by dancers who've done it, Pivot for Dancers has everything you need to find meaningful work off the stage.",
              icons: [
                { icon: "fa-magnifying-glass", text: "Curiosity" },
                { icon: "fa-dumbbell", text: "Empowerment" },
                { icon: "fa-seedling", text: "Resilience" },
              ],
            },
            {
              img: "/assets/contemporary-female.jpeg",
              title: "Dancer-Focused",
              description: "We take a dancer-focused approach to career advice to help shift your mindset on what it means to pivot.",
              icons: [
                { icon: "fa-graduation-cap", text: "Student" },
                { icon: "fa-masks-theater", text: "Professional" },
                { icon: "fa-pause", text: "Retired" },
              ],
            },
          ].map((block, index) => (
            <div key={index} className={blockClasses}>
              <img src={block.img} alt="Pivot Panels" className={imgClasses} />
              <div className={textContainerClasses}>
                <h2 className={textTitleClasses}>{block.title}</h2>
                <p className={textBodyClasses}>
                  {block.description}
                </p>
              </div>

              {/* Icons for each block */}
              <div className={iconsContainerClasses}>
                {block.icons.map((icon, iconIndex) => (
                  <div key={iconIndex} className={iconWrapperClasses}>
                    <div className={iconClasses}>
                      <i className={`fas ${icon.icon} text-xl`}></i>
                    </div>
                    <p className={iconTextClasses}>{icon.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </animated.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
