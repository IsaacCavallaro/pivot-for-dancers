import React from 'react';

const AboutUsSection: React.FC = () => {
  const features = [
    {
      title: '',
      count: '',
      description: 'Created by dancers who’ve done it, we’ll help you find meaningful work off the stage.',
    },
    {
      title: '',
      count: '',
      description: 'While we’re incredibly proud to be dancers, we realized there’s more to life than dance.',
    },
    {
      title: '',
      count: '',
      description: 'We’ve built a community of your fellow dancers to support you through your career pivot',
    },
    {
      title: '',
      count: '',
      description: 'Our mission is to change the conversation around career transitions and let go of the taboo.',
    },
  ];

  return (
    <section id="about" className="py-10 lg:py-20 bg-gray-100 dark:bg-gray-800 font-montserrat">
      <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="lg:max-w-md">
              <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Why Pivot For Dancers?</span>
                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                  About Us
                </h1>
              </div>
              <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                Pivot for Dancers is an online community, built to support dancers by welcoming uncomfortable career change conversations.
              </p>
              <div className="flex flex-wrap items-center">
                {features.map((feature, index) => (
                  <div key={index} className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900">
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">{feature.count}</p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">{feature.title}</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img src="/assets/test-pic-two.jpeg" alt=""
              className="relative z-40 object-cover w-full h-full rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
