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
    w-full md:w-96
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
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Social Media Links */}
          <div className="flex flex-row gap-6 items-center pb-4 sm:pb-0">
            <a
              href="https://www.facebook.com/pivotfordancers/"
              className={`${socialMediaIconClass} bg-blue-500 hover:bg-blue-400`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/pivotfordancers/"
              className={`${socialMediaIconClass} bg-pink-500 hover:bg-pink-400`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/pivotfordancers/"
              className={`${socialMediaIconClass} bg-blue-600 hover:bg-blue-500`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.youtube.com/@pivotfordancers"
              className={`${socialMediaIconClass} bg-red-600 hover:bg-red-500`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>

          {/* Join Us Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className={`${footerInputClass}`}
            />

            <button type="submit" className={`${buttonClass} max-w-md`}>
              JOIN US
            </button>
          </form>
        </div>
      </div>

      {/* Border Divider */}
      <div className="border-t border-gray-600 mx-6 my-6"></div> {/* Added vertical margin for spacing */}

      {/* Bottom Section */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-sm text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Pivot for Dancers. All rights reserved.
          </p>
          <div className="text-sm text-gray-400 mt-4 md:mt-0">
            <a href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
