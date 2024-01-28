import React from 'react';

const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="py-10 lg:py-20 bg-light-gray font-montserrat">
      <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="lg:max-w-md">
              <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Why Pivot For Dancers?</span>
                <h1 className="mt-2 text-3xl font-black text-white md:text-5xl">
                  About Us
                </h1>
              </div>
              <p className="px-4 mb-10 text-base leading-7 text-white">
                Pivot for Dancers is an online community, built to support dancers by welcoming uncomfortable career change conversations.
              </p>
              <p className="px-4 mb-10 text-base leading-7 text-white">
                Basically, we're talking about the stuff no one tells you about stepping away from your professional dance career.
              </p>
              <p className="px-4 mb-10 text-base leading-7 text-white">
                Created by dancers who've done it, we'll help you find meaningful work off the stage whether due to injuries, illness, or shifts in priorities.
              </p>
              <p className="px-4 mb-10 text-base leading-7 text-white">
                We've accepted the fact that dance careers are notoriously short. And while we're incredibly proud to be dancers, we realized there's more to life than dance.
              </p>
              <p className="px-4 mb-10 text-base leading-7 text-white">
                But by no means are we encouraging you to stop pursuing dancing professionally if it's still working for you. We're also not advocating that you get a "real job" or anything of the sort.
              </p>
              <p className="px-4 mb-10 text-base leading-7 text-white">
                Instead, we're acknowledging a dancer's ever-changing body, priorities, and goals while helping to change your mindset around dance, your career, and what it means to pivot.
              </p>
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
