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

  interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }

  const NextArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute top-1/2 transform -translate-y-1/2 right-0 p-2 rounded-full cursor-pointer z-10`}
        style={{ ...style, display: "block", width: "30px", height: "30px", borderRadius: "50%" }}
        onClick={onClick}
      >
      </div>
    );
  }

  const PrevArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute top-1/2 transform -translate-y-1/2 left-0 p-2 rounded-full cursor-pointer z-10`}
        style={{ ...style, display: "block", width: "30px", height: "30px", borderRadius: "50%" }}
        onClick={onClick}
      >
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="bg-beige">
      <div className="max-w-6xl py-4 mx-auto md:px-6">
        <div className="px-4 pl-4 mb-6">
          {/* <span className="text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather">Why Pivot For Dancers?</span> */}
          {/* <h1 className="mt-2 text-3xl font-merriweather text-black md:text-5xl">
            Testimonials
          </h1> */}
        </div>
        <br />
        <div className="relative mx-auto px-4 py-12 mb-20 text-center bg-white rounded shadow md:px-20 md:py-20 dark:bg-gray-700">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex flex-col items-center mb-8">
                  <p className="mb-4 leading-7 text-gray-400 lg:text-lg xl:text-xl">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center justify-center space-x-4 mt-4">
                    <div className="w-16 h-16">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src={testimonial.imageSrc}
                        alt={testimonial.author}
                      />
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg lg:text-xl xl:text-2xl font-bold leading-9 text-black dark:text-white">
                        {testimonial.author}
                      </h2>
                      <span className="block text-xs font-semibold text-black uppercase">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
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
