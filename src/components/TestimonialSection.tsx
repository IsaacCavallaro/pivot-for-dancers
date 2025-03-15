import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const TestimonialsSection: React.FC = () => {
  const BASE_PATH = process.env.PUBLIC_URL || "";

  const testimonials = [
    {
      content: `
        "A great community for dancers going through the difficult transition 
        out of a full-time career in the performing arts, into a new career. 
        Support, guidance, and self-exploration exercises—all in one place."
      `,
      author: "Kelsey Glennon",
      role: "Former Dancer & Travel Journalist",
      imageSrc: `${BASE_PATH}/assets/kelsey-glennon.jpeg`,
    },
    {
      content: `
        "Finally a platform that says what we're all thinking! Offering a supportive space, 
        Founder, Kaylee, is a kind and empathetic mentor that wants dancers to 
        understand they deserve to have joy in all aspects of life!"
        `,
      author: "Christie Bellish",
      role: "Former Dancer",
      imageSrc: `${BASE_PATH}/assets/christie-bellish.jpeg`,
    },
    {
      content: `
        Pivot for Dancers is a community full of educational resources that every professional dancer should learn about. 
        It came to me at the perfect time when I was ending my performing career due to injury 
        and burnout and helped me realize that I was not alone."
        `,
      author: "Mallory Gladman",
      role: "Former Dancer & Event Business Owner",
      imageSrc: `${BASE_PATH}/assets/mallory-gladman.jpg`,
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
  };

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
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="bg-beige">
      <div className="max-w-6xl py-4 mx-auto md:px-6">
        <div className="relative mx-auto px-4 pt-12 text-center bg-white rounded shadow md:px-20 md:py-20 dark:bg-gray-700">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex flex-col items-center mb-8">
                  <p className="mb-4 leading-7 text-white lg:text-lg xl:text-xl">
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
                      <h2 className="text-lg lg:text-xl xl:text-2xl font-bold leading-9 text-white">
                        {testimonial.author}
                      </h2>
                      <span className="block text-xs font-semibold text-white uppercase">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center mb-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} className="text-yellow-500 text-lg mx-0.5" />
                      ))}
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
