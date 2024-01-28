import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Updated Home section with refined styling */}
      <section id="home" className="min-h-screen bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: `url('/assets/test-pic.jpeg')` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="mb-4 text-9xl font-merriweather tracking-tight leading-none shadow-lg">
            Pivot for Dancers
          </h1>
          <p className="mb-8 text-lg font-montserrat">
            Youre still part of the dance community, no matter how long its been since your last bow.
          </p>
          <a
            href="#contact"
            className="inline-flex justify-center items-center py-3 px-5 text-base text-center text-white bg-light-gray hover:bg-dark-gray text-white font-montserrat py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-light-gray mt-4"
          >
            Join Our Community
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;