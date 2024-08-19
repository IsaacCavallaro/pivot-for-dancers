import React from 'react';

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-center bg-no-repeat bg-cover relative"
      style={{ backgroundImage: `url('/assets/test-pic.jpeg')` }}
    >
      <div className="absolute inset-0">
        <div className="overlay"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="mb-4 text-9xl font-merriweather tracking-tight leading-none shadow-lg md:text-7xl lg:text-9xl xl:text-9xl">
            Pivot for Dancers
          </h1>
          <p className="mb-8 text-lg font-montserrat">
            You're still part of the dance community, no matter how long it's been since your last bow.
          </p>
          <a
            href="#contact"
            className="inline-flex justify-center items-center py-3 px-5 text-base text-center text-white bg-purple-gray hover:bg-purple-gray opacity-80 hover:opacity-100 text-white font-montserrat py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-light-gray mt-4"
          >
            JOIN OUR COMMUNITY
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;