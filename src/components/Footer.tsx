import React, { useState } from 'react';

const Footer: React.FC = () => {
  const iconSize = 'h-8 w-8'; // for social media
  const socialMediaIconClass = `text-white p-2 rounded-full flex items-center justify-center ${iconSize} transition-transform transform hover:scale-110`;
  const buttonClass = `
    px-6 py-4 
    text-sm font-semibold 
    text-gray-100 
    bg-purple-gray 
    rounded-md 
    hover:bg-purple-gray 
    opacity-80 hover:opacity-100 
    w-full md:w-auto
  `.trim();
  const footerInputClass = `
    px-4 py-4 
    text-sm text-gray-900 
    placeholder-gray-400 
    bg-gray-100 
    border border-gray-300 
    rounded-md 
    dark:text-gray-400 
    dark:placeholder-gray-400 
    dark:bg-gray-700 
    dark:border-gray-700 
    w-full md:w-auto
    md:w-96
  `.trim();

  const [email, setEmail] = useState('');

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
    <footer className="bg-gray-800 text-white">
      {/* Container for consistent width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <section className="py-10 sm:pt-16 lg:pt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-12">
            {/* Logo and Description */}
            <div className="flex flex-col justify-between h-full">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase text-center lg:text-left">
                Pivot For Dancers
              </p>
              <div className="w-full max-w-lg lg:text-left">
                <p className="text-base leading-relaxed text-gray-600 mt-7">
                  Discover inspiration, guidance, and community as we help you pivot towards a fulfilling and meaningful journey.
                </p>
              </div>

              {/* Social Media Links */}
              <ul className="flex items-center space-x-3 mt-9 justify-center lg:justify-start">
                <li>
                  <a
                    href="https://www.facebook.com/pivotfordancers/"
                    className={`${socialMediaIconClass} bg-blue-500 hover:bg-blue-400`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit us on Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/pivotfordancers/"
                    className={`${socialMediaIconClass} bg-pink-500 hover:bg-pink-400`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit us on Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/pivotfordancers/"
                    className={`${socialMediaIconClass} bg-blue-600 hover:bg-blue-500`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit us on LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@pivotfordancers"
                    className={`${socialMediaIconClass} bg-red-600 hover:bg-red-500`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit us on YouTube"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* Email Sign Up Form */}
            <div className="flex flex-col items-center lg:items-start lg:text-left space-y-4 lg:space-y-0">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase pb-5">
                Join our Community
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col lg:flex-row lg:space-x-4 w-full lg:mt-0"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`${footerInputClass} h-12`}
                />
                <button
                  type="submit"
                  className={`${buttonClass} h-12 flex items-center justify-center mt-4 lg:mt-0`}
                >
                  JOIN US
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Border Divider */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* Bottom Section */}
        <div className="py-12">
          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <p className="text-sm text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Pivot for Dancers. All rights reserved.
            </p>
          </div>
        </div>
      </div >
    </footer >



  );
};

export default Footer;
