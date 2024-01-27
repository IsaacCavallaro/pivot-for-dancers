// Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  const iconSize = "h-8 w-8"; // Set the desired size

  return (
    <footer className="bg-gray-700 text-white p-8">
      <hr className="border-t border-gray-600 my-8" />
      <div className="max-w-screen-xl mx-auto">
        {/* Your footer content goes here */}
        <div className="flex justify-center items-center">
          {/* Social Media Icons with background colors */}
          <a href="https://www.facebook.com/pivotfordancers/" className={`text-white bg-blue-500 hover:bg-blue-400 mx-3 p-2 rounded-full flex items-center justify-center ${iconSize}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/pivotfordancers/" className={`text-white bg-pink-500 hover:bg-pink-400 mx-3 p-2 rounded-full flex items-center justify-center ${iconSize}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/pivotfordancers/" className={`text-white bg-blue-500 hover:bg-blue-400 mx-3 p-2 rounded-full flex items-center justify-center ${iconSize}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.youtube.com/@pivotfordancers8979" className={`text-white bg-red-500 hover:bg-red-400 mx-3 p-2 rounded-full flex items-center justify-center ${iconSize}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <p className="text-center mt-4">
          &copy; 2023 Pivot for Dancers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
