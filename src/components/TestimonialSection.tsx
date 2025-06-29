import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faMasksTheater, faBriefcase, faDollarSign, faHeartBroken, faSadCry, faMagnifyingGlass, faDumbbell, faSeedling, faGraduationCap, faPause, faTimes } from '@fortawesome/free-solid-svg-icons';

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

  const blocks = [
    {
      img: `${BASE_PATH}/assets/ballet-female.jpeg`,
      title: "Career Changes",
      description: "Pivot for Dancers offers practical resources to support professional dancers in making a career change.",
      icons: [
        { icon: faBook, text: "Community" },
        { icon: faMasksTheater, text: "Resources" },
        { icon: faBriefcase, text: "Planning" },
      ],
    },
    {
      img: `${BASE_PATH}/assets/lyrical-female.jpeg`,
      title: "Taboo Topics",
      description: "We're talking about the stuff no one tells you about stepping away from your professional dance career.",
      icons: [
        { icon: faDollarSign, text: "Finance" },
        { icon: faHeartBroken, text: "Grief" },
        { icon: faSadCry, text: "Shame" },
      ],
    },
    {
      img: `${BASE_PATH}/assets/jazz-female.jpeg`,
      title: "Meaningful Work",
      description: "Built by dancers who've done it, Pivot for Dancers has everything you need to find meaningful work off the stage.",
      icons: [
        { icon: faMagnifyingGlass, text: "Curiosity" },
        { icon: faDumbbell, text: "Empowerment" },
        { icon: faSeedling, text: "Resilience" },
      ],
    },
    {
      img: `${BASE_PATH}/assets/contemporary-female.jpeg`,
      title: "Dancer-Focused",
      description: "We take a dancer-focused approach to career advice to help shift your mindset on what it means to pivot.",
      icons: [
        { icon: faGraduationCap, text: "Student" },
        { icon: faMasksTheater, text: "Professional" },
        { icon: faPause, text: "Retired" },
      ],
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

  // Modal styling classes
  const modalSectionClasses = "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50";
  const modalContainerClasses = "bg-white rounded-lg max-w-4xl w-full mx-4 overflow-y-auto max-h-[90vh] relative";
  const modalContentClasses = "p-6 pt-16"; // Added padding to top to account for sticky header
  const modalHeaderClasses = "sticky top-0 bg-beige z-20 flex justify-between items-center px-6 py-4 border-b border-gray-200";
  const modalHeadingClasses = "text-2xl font-bold text-black font-merriweather";
  const modalCloseButtonClasses = "text-purple-gray rounded-full p-2 transition-colors duration-200 flex items-center justify-center";
  const modalGridClasses = "grid gap-6 md:grid-cols-2 lg:grid-cols-2 px-4";
  const modalBlockClasses = "flex flex-col items-center gap-6 p-8 rounded-lg border-2 border-purple-gray";
  const modalImgClasses = "object-cover w-32 h-32 border-2 border-purple-gray rounded-full";
  const modalTextContainerClasses = "flex flex-col items-center text-center";
  const modalTextTitleClasses = "mt-2 text-3xl font-merriweather font-semibold text-gray-800 md:text-3xl tracking-tight";
  const modalTextBodyClasses = "text-base md:text-lg lg:text-lg text-gray-600 font-montserrat leading-relaxed max-w-xs";
  const modalIconsContainerClasses = "grid grid-cols-3 gap-6 justify-items-center";
  const modalIconWrapperClasses = "flex flex-col items-center";
  const modalIconClasses = "text-white bg-purple-gray p-3 rounded-full flex items-center justify-center w-12 h-12 shadow-sm";
  const modalIconTextClasses = "text-xs mt-2 text-gray-600";

  return (
    <section className="bg-beige px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
              className="inline-block px-4 py-2 text-sm font-montserrat text-white bg-purple-gray rounded-full hover:bg-purple-gray opacity-80 hover:opacity-100"
            >
              OUR VALUES
            </button>
            <a
              href="https://g.page/r/CfHdX47gLCCXEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-sm text-center font-montserrat text-white bg-purple-gray rounded-full hover:bg-purple-gray opacity-80 hover:opacity-100"
            >
              ADD REVIEW
            </a>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={modalSectionClasses} onClick={closeModal}>
          <div className={modalContainerClasses} onClick={(e) => e.stopPropagation()}>
            {/* Sticky Header with Title and Close Button */}
            <div className={modalHeaderClasses}>
              <h2 className={modalHeadingClasses}>Our Values</h2>
              <button
                onClick={closeModal}
                className={modalCloseButtonClasses}
                aria-label="Close modal"
              >
                <FontAwesomeIcon icon={faTimes} className="text-xl" />
              </button>
            </div>

            {/* Modal Content */}
            <div className={modalContentClasses}>
              <div className={modalGridClasses}>
                {blocks.map((block, index) => (
                  <div key={index} className={modalBlockClasses}>
                    <img src={block.img} alt={block.title} className={modalImgClasses} />
                    <div className={modalTextContainerClasses}>
                      <h3 className={modalTextTitleClasses}>{block.title}</h3>
                      <p className={modalTextBodyClasses}>{block.description}</p>
                    </div>
                    <div className={modalIconsContainerClasses}>
                      {block.icons.map((icon, iconIndex) => (
                        <div key={iconIndex} className={modalIconWrapperClasses}>
                          <div className={modalIconClasses}>
                            <FontAwesomeIcon icon={icon.icon} className="text-xl" />
                          </div>
                          <p className={modalIconTextClasses}>{icon.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;