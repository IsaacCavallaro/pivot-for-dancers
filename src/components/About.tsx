import React from 'react';

const AboutUsSection: React.FC = () => {

  const sectionClasses = "bg-beige font-merriweather py-10";
  const containerClasses = "max-w-6xl py-4 mx-auto md:px-6";
  const headingContainerClasses = "px-4 pl-4 mb-6";
  const headingSpanClasses = "text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather";
  const headingTitleClasses = "mt-2 text-3xl font-merriweather text-black md:text-4xl font-semibold";
  const gridClasses = "grid gap-6 md:grid-cols-2 lg:grid-cols-2 px-4";
  const blockClasses = "flex flex-col items-center gap-6 p-8 rounded-lg border-2 border-gray-800";
  const imgClasses = "object-cover w-32 h-32 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105";
  const textContainerClasses = "flex flex-col items-center text-center";
  const textTitleClasses = "mt-2 text-3xl font-semibold text-gray-800 md:text-3xl tracking-tight";
  const textBodyClasses = "text-base md:text-lg lg:text-lg text-gray-600 font-montserrat leading-relaxed max-w-xs";
  const iconsContainerClasses = "grid grid-cols-3 gap-6 justify-items-center";
  const iconWrapperClasses = "flex flex-col items-center";
  const iconClasses = "text-white bg-purple-gray p-3 rounded-full flex items-center justify-center w-12 h-12 shadow-sm";
  const iconTextClasses = "text-xs mt-2 text-gray-600";

  const blocks = [
    {
      img: `${process.env.PUBLIC_URL}/assets/ballet-female.jpeg`,
      title: "Career Changes",
      description: "Pivot for Dancers offers practical resources to support professional dancers in making a career change.",
      icons: [
        { icon: "fa-book", text: "Community" },
        { icon: "fa-masks-theater", text: "Resources" },
        { icon: "fa-briefcase", text: "Planning" },
      ],
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/lyrical-female.jpeg`,
      title: "Taboo Topics",
      description: "We're talking about the stuff no one tells you about stepping away from your professional dance career.",
      icons: [
        { icon: "fa-dollar-sign", text: "Finance" },
        { icon: "fa-heart-broken", text: "Grief" },
        { icon: "fa-sad-cry", text: "Shame" },
      ],
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/jazz-female.jpeg`,
      title: "Meaningful Work",
      description: "Built by dancers who've done it, Pivot for Dancers has everything you need to find meaningful work off the stage.",
      icons: [
        { icon: "fa-magnifying-glass", text: "Curiosity" },
        { icon: "fa-dumbbell", text: "Empowerment" },
        { icon: "fa-seedling", text: "Resilience" },
      ],
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/contemporary-female.jpeg`,
      title: "Dancer-Focused",
      description: "We take a dancer-focused approach to career advice to help shift your mindset on what it means to pivot.",
      icons: [
        { icon: "fa-graduation-cap", text: "Student" },
        { icon: "fa-masks-theater", text: "Professional" },
        { icon: "fa-pause", text: "Retired" },
      ],
    },
  ];

  return (
    <section id="about" className={sectionClasses}>
      <div className={containerClasses}>
        <div className={headingContainerClasses}>
          <span className={headingSpanClasses}>Who We Are & What We Do</span>
          <h2 className={headingTitleClasses}>About Us</h2>
        </div>
        <div className={gridClasses}>
          {blocks.map((block, index) => (
            <div key={index} className={blockClasses}>
              <img src={block.img} alt={block.title} className={imgClasses} />
              <div className={textContainerClasses}>
                <h3 className={textTitleClasses}>{block.title}</h3>
                <p className={textBodyClasses}>{block.description}</p>
              </div>
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
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
