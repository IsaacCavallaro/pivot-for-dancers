import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      content: "The most rewarding part of this transition was opening myself up to the possibility of loving another career just as much as dance",
      author: "Alex Peggy",
      role: "Former Dancer",
      imageSrc: "https://i.postimg.cc/KvrSzTxg/alexandru-zdrobau-dj-RG1v-B1pw-unsplash.jpg",
    },
    {
      content: "The lifestyle of a dancer stopped feeling good for me. I still love dancing, but the lifestyle you must lead in order to make performing work as a career didn't feel good anymore",
      author: "Kelsey A Glennon",
      role: "Former Dancer",
      imageSrc: "https://i.postimg.cc/gk8KvyTN/ehsan-ahmadi-vs-Wy6nchc-Os-unsplash.jpg",
    },
    {
      content: "Use the fire dancing gives you as the motivation to propel yourself into that new direction, rather than letting the struggle bring you down",
      author: "Alexa Schmitt",
      role: "Former Dancer",
      imageSrc: "https://i.postimg.cc/wj9DLCJj/yunming-wang-G9f4-Enb8-XVM-unsplash.jpg",
    },
  ];

  return (
    <section className="flex items-center bg-light-gray lg:h-screen">
      <div className="p-4 mx-auto max-w-7xl">
      <div className="px-4 pl-4 mb-6 border-l-4 border-white">
            <span className="text-sm text-white uppercase dark:text-gray-400">Why Pivot For Dancers?</span>
            <h1 className="mt-2 text-3xl font-black text-white md:text-5xl">
              Testimonials
            </h1>
          </div>
        <br></br>
        <div className="flex">
          <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-purple-gray">
                <div className="relative z-20 p-8 -mt-14">
                  <span className="inline-block p-3 mb-3 text-xs text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                    </svg>
                  </span>
                  <p className="mb-4 text-base leading-7 text-white">{testimonial.content}</p>
                  <div className="flex items-center gap-x-4">
                    <div className="relative w-20 h-20 overflow-hidden rounded-full">
                      <img className="object-cover w-full h-full transition-all hover:scale-110" src={testimonial.imageSrc} alt="" />
                    </div>
                    <div className="info">
                      <h2 className="text-lg font-bold text-black dark:text-white">{testimonial.author}</h2>
                      <span className="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
