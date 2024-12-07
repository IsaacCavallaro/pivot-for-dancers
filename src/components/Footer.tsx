import React from 'react';

const Footer: React.FC = () => {
  const iconSize = 'h-8 w-8'; // Icon size for social media
  const socialMediaIconClass = `text-white p-2 rounded-full flex items-center justify-center ${iconSize} transition-transform transform hover:scale-110`;
  const signUpUrl = 'https://mailchi.mp/2129c6018f7d/pivot-for-dancers-email-sign-up';
  const joinUsClassName = 'px-6 py-3 text-sm rounded-md bg-purple-gray text-white opacity-80 hover:opacity-100 hover:bg-purple-gray';

  return (
    <footer className="bg-gray-800 text-white">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center space-y-8 md:flex-row md:justify-between">
        {/* Social Media Links */}
        <div className="flex space-x-4">
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

        {/* Join Us Button */}
        <div>
          <a
            href={signUpUrl}
            className={joinUsClassName}
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN US
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mx-6"></div>

      {/* Bottom Section */}
      <div className="bg-gray-800">
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
