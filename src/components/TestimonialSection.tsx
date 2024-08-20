import React, { useState, useEffect } from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      content: `"The most rewarding part of this transition was opening myself up to the possibility of loving another career just as much as dance."`,
      author: "Alex Perry",
      role: "Former Dancer",
      imageSrc: "/assets/alex-perry.jpeg",
    },
    {
      content: `"The lifestyle of a dancer stopped feeling good for me. I still love dancing, but the lifestyle you must lead in order to make performing work as a career didn't feel good anymore."`,
      author: "Kelsey A Glennon",
      role: "Former Dancer",
      imageSrc: "/assets/kelsey-glennon.jpeg",
    },
    {
      content: `"Use the fire dancing gives you as the motivation to propel yourself into that new direction, rather than letting the struggle bring you down."`,
      author: "Alexa Schmitt",
      role: "Former Dancer",
      imageSrc: "/assets/alexa-schmidt.jpeg",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const goToNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextTestimonial, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="bg-beige">
      <div className="max-w-6xl py-4 mx-auto md:px-6">
        <div className="px-4 pl-4 mb-6">
          <span className="text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather">Why Pivot For Dancers?</span>
          <h1 className="mt-2 text-3xl font-merriweather text-black md:text-5xl">
            Testimonials
          </h1>
        </div>
        <br />
        <div className="relative mx-auto px-4 py-12 mb-20 text-center bg-white rounded shadow md:px-20 md:py-20 dark:bg-gray-700">
          <div className="z-20 p-8 flex flex-col items-center lg:flex-row">
            <div className="w-full lg:w-2/3 pr-8 mb-8 lg:mb-0 lg:order-1">
              <div className="flex gap-x-1">
                <button onClick={goToPrevTestimonial} className="absolute p-3 text-white -translate-y-1/2 bg-purple-gray rounded -left-2 lg:-left-5 top-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                  </svg>
                </button>
                <button onClick={goToNextTestimonial} className="absolute p-3 text-white -translate-y-1/2 bg-purple-gray rounded -right-2 lg:-right-5 top-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
              <div className="transition-opacity duration-1000 ease-in-out opacity-0" style={{ opacity: 1 }}>
                <p className="mb-4 leading-7 text-gray-400 lg:text-lg xl:text-xl">
                  {testimonials[currentTestimonial].content}
                </p>
                <h2 className="text-lg lg:text-xl xl:text-2xl font-bold leading-9 text-black dark:text-white">
                  {testimonials[currentTestimonial].author}
                </h2>
                <span className="block text-xs font-semibold text-black uppercase">
                  {testimonials[currentTestimonial].role}
                </span>
              </div>
            </div>
            <div className="w-full lg:w-1/3 lg:pl-8 lg:flex lg:flex-col lg:items-center lg:order-2">
              <div className="inline-block w-32 h-32 lg:w-64 lg:h-64 mb-3 text-xs text-white rounded-full lg:relative lg:mb-0">
                <img className="object-cover w-full h-full transition-all hover:scale-110 rounded-full" src={testimonials[currentTestimonial].imageSrc} alt="" />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute w-20 h-20 lg:w-24 lg:h-24 rotate-180 bottom-4 right-4 opacity-10 lg:static lg:block lg:mt-4">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
