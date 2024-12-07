import React from 'react';

const Footer: React.FC = () => {
  const iconSize = 'h-8 w-8'; // Icon size for social media
  const socialMediaIconClass = `text-white p-2 rounded-full flex items-center justify-center ${iconSize}`;
  const buttonClass = 'w-full md:w-auto px-6 py-4 text-sm font-semibold text-gray-100 bg-purple-gray rounded-md hover:bg-purple-gray opacity-80 hover:opacity-100';

  return (
    <footer className="bg-gray-700 text-white p-8">
      <hr className="border-t border-gray-600 my-8" />
      <div className="flex flex-col items-center space-y-6">
        {/* Social Media Icons */}
        <div className="flex space-x-4">
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

        {/* Join Us Button */}
        <a
          href="https://pivotfordancers.us19.list-manage.com/subscribe/post?u=be8fecbf3f1babc7628da411c&amp;id=e5d51bd2a0&amp;f_id=00c396e4f0"
          className={buttonClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          JOIN US
        </a>

        {/* Footer Text */}
        <p className="text-center">
          &copy; 2023 Pivot for Dancers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
