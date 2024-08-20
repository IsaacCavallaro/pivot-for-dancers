import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "linear",
  };

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
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative overflow-hidden mb-8">
                  <div className="text-center">
                    <p className="mb-4 leading-7 text-gray-400 lg:text-lg xl:text-xl">
                      {testimonial.content}
                    </p>
                    <h2 className="text-lg lg:text-xl xl:text-2xl font-bold leading-9 text-black dark:text-white">
                      {testimonial.author}
                    </h2>
                    <span className="block text-xs font-semibold text-black uppercase">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
                <div className="w-32 h-32 lg:w-64 lg:h-64 mb-3 text-xs text-white rounded-full transition-opacity duration-1000 ease-in-out">
                  <img className="object-cover w-full h-full hover:scale-110 rounded-full" src={testimonial.imageSrc} alt={testimonial.author} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
