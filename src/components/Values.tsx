// Values component
import React from 'react';

const Values: React.FC = () => {
  return (
    <div id="values" className="section bg-gray-100 text-black p-8 relative font-brown-sugar">
        <h2 className="text-3xl font-bold mb-6 mt-12 text-center relative z-10">
        Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        <div className="value flex flex-col items-center bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition-transform h-full relative overflow-hidden">
            <h3 className="text-xl font-semibold mb-2">Curiosity</h3>
            <p className="leading-7 text-justify">
            Pivot for Dancers encourages dancers to explore other interests simultaneously with pursuing a dance career. It doesn’t have to be one or the other.
            </p>
        </div>

        <div className="value flex flex-col items-center bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition-transform h-full relative overflow-hidden">
            <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
            <p className="leading-7 text-justify">
            Pivot for Dancers is not about survival jobs. It's about finding fulfilling jobs for tough times or when passions change, instead of meaningless survival jobs that make us feel desperate.
            </p>
        </div>

        <div className="value flex flex-col items-center bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition-transform h-full relative overflow-hidden">
            <h3 className="text-xl font-semibold mb-2">Resilience</h3>
            <p className="leading-7 text-justify">
            Pivot for Dancers doesn't claim it'll be easy. We're all in this together. Everything you see here is a work in progress – and that’s a good thing! Enjoy the process.
            </p>
        </div>
        </div>
    </div>
  );
};

export default Values;