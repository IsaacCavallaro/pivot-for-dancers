import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const TestimonialsSection: React.FC = () => {
  const BASE_PATH = process.env.PUBLIC_URL || "";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const testimonials = [
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
        Pivot for Dancers came to me at the perfect time when I was ending my performing career due to injury 
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
    speed: 1500,
    autoplaySpeed: 7800,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="bg-beige py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="dark:bg-gray-700 rounded-lg shadow-lg p-6 md:p-12">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex flex-col items-center mb-8">
                  <p className="mb-4 text-white leading-relaxed text-base md:text-lg lg:text-xl">
                    {testimonial.content}
                  </p>
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mt-4">
                    <div className="w-20 h-20">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src={testimonial.imageSrc}
                        alt={testimonial.author}
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                        {testimonial.author}
                      </h2>
                      <span className="block text-sm font-semibold text-white uppercase">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
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
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <button
              onClick={openModal}
              className="px-6 py-2 text-white bg-purple-gray rounded-lg hover:bg-purple-gray opacity-80 hover:opacity-100 transition duration-300"
            >
              Our Values
            </button>
            <a
              href="https://g.page/r/CfHdX47gLCCXEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-white bg-purple-gray rounded-lg transition duration-300 hover:bg-purple-gray opacity-80 hover:opacity-100 text-center"
            >
              Add Review
            </a>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full mx-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-gray-700">
              At Pivot for Dancers, we are committed to supporting dancers through their transitions with empathy, understanding, and practical guidance. We believe in the power of community and the importance of mental health and well-being in navigating career changes.
            </p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-purple-gray text-white rounded-lg transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;