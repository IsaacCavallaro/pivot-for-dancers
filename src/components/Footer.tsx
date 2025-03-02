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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-x-12 text-center">
            {/* Logo and Description */}
            <div className="flex flex-col items-center h-full space-y-6">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Pivot For Dancers
              </p>
              <p className="text-gray-300 leading-relaxed">
                Discover inspiration, guidance, and a vibrant community to help you navigate your journey toward a fulfilling and meaningful future filled with purpose, growth, opportunities, and lasting connections.
              </p>
            </div>

            {/* Email Sign-Up Form */}
            <div className="flex flex-col items-center space-y-6 lg:px-6">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Join our Community
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4 w-full max-w-sm"
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
                  className={`${buttonClass} h-12 flex items-center justify-center`}
                >
                  JOIN US
                </button>
              </form>
            </div>

            {/* Contact and Social Media */}
            <div className="flex flex-col items-center space-y-6">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Contact
              </p>
              <a
                href="mailto:pivotfordancers@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                pivotfordancers@gmail.com
              </a>
              <a
                href="/terms-of-service"
                className="text-gray-300 hover:text-white transition-colors"
              >
                @pivotfordancers
              </a>
              <ul className="flex items-center justify-center space-x-3">
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
          </div>
        </section>

        {/* Border Divider */}
        <div className="border-t border-gray-600 my-1"></div>

        {/* Bottom Section */}
        <div className="py-12 text-center">
          <a
            href="https://drive.google.com/file/d/1XiqWl5qiHd1xCGF62D300hyodmsCe5OC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 mt-2 block"
          >
            Privacy Policy
          </a>
          <a
            href="https://drive.google.com/file/d/1JVBQN7SZBSSup9E-avhsTXRxZ1Y_7Zeg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 mt-2 block"
          >
            Happy Trails Terms and Conditions
          </a>
          <a
            href="https://drive.google.com/file/d/11ssn_alwWa1K0IrgGQgE7Dt65TRmsXrH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 mt-2 block"
          >
            Pivot Mentorship Program Terms and Conditions
          </a>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Pivot for Dancers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
