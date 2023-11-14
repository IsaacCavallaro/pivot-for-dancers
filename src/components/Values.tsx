import React from 'react';

const Values: React.FC = () => {
  return (
    <section className="flex items-center bg-gray-100 lg:h-screen font-poppins dark:bg-gray-900">
      <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
      <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
        <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Why Pivot For Dancers?</span>
        <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
          Our Values
        </h1>
      </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md dark:bg-gray-800">
            <a href="#" className="">
              <img
                src="/assets/curiosity.jpg"
                alt=""
                className="object-cover w-full h-64 rounded-t-lg"
              />
            </a>
            <div className="p-5">
              <a href="#" className="">
                <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-400">
                  Curiosity
                </h2>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Pivot for Dancers encourages dancers to explore other interests simultaneously with pursuing a dance career. It doesn’t have to be one or the other.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md dark:bg-gray-800">
            <a href="#" className="">
              <img
                src="/assets/empowerment.jpg"
                alt=""
                className="object-cover w-full h-64 rounded-t-lg"
              />
            </a>
            <div className="p-5">
              <a href="#" className="">
                <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-400">
                Empowerment
                </h2>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Let’s ditch the idea that if we’re not dancing, we’re only merely surviving. Pivot is about finding fulfilling jobs for when times get tough or our passions change, instead of meaningless survival jobs that make us feel desperate.
              </p>

            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md dark:bg-gray-800">
            <a href="#" className="">
              <img
                src="/assets/resilience.jpg"
                alt=""
                className="object-cover w-full h-64 rounded-t-lg"
              />
            </a>
            <div className="p-5">
              <a href="#" className="">
                <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-400">
                  Resilience
                </h2>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                You’ve made the courageous choice to see what else is out there for you. It’s that resilience you learned as an ambitious dancer that will help you through.
              </p>
              <div className="flex items-center justify-between">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
