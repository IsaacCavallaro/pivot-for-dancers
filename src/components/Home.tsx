import React, { useState } from 'react';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const iconSize = 'h-8 w-8'; // Icon size for social media
  const containerClass = 'border border-gray-300 rounded-lg p-8 bg-white shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8';
  const textSectionClass = 'flex flex-col justify-center items-center md:items-start';
  const formClass = 'flex flex-col md:flex-row items-center w-full justify-center md:justify-start';
  const inputClass = `
  w-full 
  px-4 py-4 
  text-sm text-gray-900 
  placeholder-gray-400 
  bg-gray-100 
  border border-gray-300 
  rounded-md 
  dark:text-gray-400 
  lg:mr-3 
  dark:placeholder-gray-400 
  dark:bg-gray-700 
  dark:border-gray-700 
  md:mb-3 
  md:w-2/3
`.trim();
  const buttonClass = 'w-full md:w-auto px-6 py-4 text-sm font-semibold text-gray-100 bg-purple-gray rounded-md mt-4 md:mt-0 md:ml-2 hover:bg-purple-gray opacity-80 hover:opacity-100';
  const socialMediaIconClass = `text-white p-2 rounded-full flex items-center justify-center ${iconSize}`;

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = `https://pivotfordancers.us19.list-manage.com/subscribe/post?u=be8fecbf3f1babc7628da411c&amp;id=e5d51bd2a0&amp;f_id=00c396e4f0&EMAIL=${encodeURIComponent(
      email
    )}`;
  };

  return (
    <section id="home" className="bg-beige pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container with Border */}
        <div className={containerClass}>
          {/* Text Section */}
          <div className={textSectionClass}>
            <h1 className="text-4xl md:text-5xl font-merriweather leading-tight text-gray-900 mb-5">
              Pivot for Dancers
            </h1>
            <p className="mb-4 text-base leading-7 text-black">
              At Pivot for Dancers, we're helping professional dancers find meaningful work off the stage with our dancer-specific career change resources.
              {/* Join our growing community of current and former professional dancers who are talking about career change and stepping onto their next stage. */}
            </p>
            {/* Form and Social Media Icons Section */}
            <div className="flex flex-col items-center md:items-start justify-center w-full mt-6 space-y-4">
              {/* Email Input and Button */}
              <form
                action="https://pivotfordancers.us19.list-manage.com/subscribe/post?u=be8fecbf3f1babc7628da411c&amp;id=e5d51bd2a0&amp;f_id=00c396e4f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className={formClass}
                target="_self"
                onSubmit={handleSubmit}
                noValidate
              >
                <input
                  className={`${inputClass} lg:mr-3 md:mb-3`}
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button
                  type="submit"
                  className={`${buttonClass} md:mb-3`}
                >
                  JOIN US
                </button>
              </form>
              {/* Social Media Icons */}
              <div className="flex space-x-4 justify-center md:justify-start">
                <a
                  href="https://www.facebook.com/pivotfordancers/"
                  className={`${socialMediaIconClass} bg-blue-500 hover:bg-blue-400`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/pivotfordancers/"
                  className={`${socialMediaIconClass} bg-pink-500 hover:bg-pink-400`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/pivotfordancers/"
                  className={`${socialMediaIconClass} bg-blue-500 hover:bg-blue-400`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.youtube.com/@pivotfordancers"
                  className={`${socialMediaIconClass} bg-red-500 hover:bg-red-400`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="flex justify-center items-center">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/tuBxpzNHWlU?si=k6vasI0aoAubcgLW"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
