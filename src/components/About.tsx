import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const BASE_PATH = process.env.PUBLIC_URL || "";
const headingContainerClasses = "px-4 pl-4 mb-6";
const headingSpanClasses = "text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather";
const headingTitleClasses = "mt-2 text-3xl font-merriweather text-black md:text-4xl font-semibold";
const sectionClasses = "bg-beige font-merriweather py-10 px-5 text-center";

interface CounterProps {
  value: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const finalValue = Number.parseInt(value.replace(/\D/g, ""));
  const hasSuffix = value.includes("+");

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * finalValue);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [finalValue, duration]);

  return (
    <span className="text-4xl font-bold">
      {count}
      {hasSuffix && "+"}
    </span>
  );
};

const AboutUsSection = () => {

  const reviews = [
    {
      text: "A great community for dancers going through the difficult transition out of a full-time career in the performing arts, into a new career. Support, guidance, and self-exploration exercises—all in one place.",
      author: "Kelsey Glennon, Former Dancer & Travel Journalist",
    },
    {
      text: "Finally a platform that says what we're all thinking! Offering a supportive space, Founder, Kaylee, is a kind and empathetic mentor that wants dancers to understand they deserve to have joy in all aspects of life!",
      author: "Christie Bellish, Former Dancer",
    },
    {
      text: "Pivot for Dancers is a community full of educational resources that every professional dancer should learn about. It came to me at the perfect time when I was ending my performing career due to injury and burnout and helped me realize that I was not alone.",
      author: "Mallory Gladman, Former Dancer & Event Business Owner",
    },
  ];

  const stats = [
    { value: "5+", label: "Years in Business" },
    { value: "1000+", label: "Dancers" },
    { value: "1000+", label: "Hours of Free Content" },
    { value: "500+", label: "Workshops Conducted" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section id="about" className={sectionClasses}>
      <div className={headingContainerClasses}>
        <h2 className={headingTitleClasses}>About Us</h2>
        <span className={headingSpanClasses}>Who We Are & What We Do</span>
      </div>

      {/* Stats Section - 2x2 grid on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-3xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md">
            <Counter value={stat.value} />
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Google Reviews Carousel */}
      <div className="max-w-lg mx-auto mb-10">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 dark:bg-gray-700 rounded-xl shadow-md flex flex-col items-center h-72 justify-center"
            >
              <img
                src={`${BASE_PATH}/assets/alex-perry.jpeg`}
                alt="Alex Perry"
                className="w-16 h-16 rounded-full mb-3 object-cover"
              />
              <div className="flex justify-center mb-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-lg mx-0.5" />
                  ))}
              </div>
              <p className="text-lg text-white italic text-center flex-1 px-4">"{review.text}"</p>
              <p className="text-sm text-white font-semibold mt-2">{review.author}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* As Seen In */}
      <div className="mt-6">
        <p className="text-lg font-semibold">As Seen In</p>
        <img
          src={`${BASE_PATH}/assets/dance-mang-long.jpeg`}
          alt="Dance Magazine"
          className="h-12 mx-auto mt-2"
        />
      </div>
    </section>
  );
};

export default AboutUsSection;
