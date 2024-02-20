import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const iconSize = "h-8 w-8"; // Set the desired size

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = `https://pivotfordancers.us19.list-manage.com/subscribe/post?u=be8fecbf3f1babc7628da411c&amp;id=e5d51bd2a0&amp;f_id=00c396e4f0&EMAIL=${encodeURIComponent(email)}`;
  };

  return (
    <section className="bg-beige">
      <div id="contact" className="max-w-6xl py-4 mx-auto lg:py-20 md:px-6">
        <div className="px-4 pl-4 mb-6">
          <span className="text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather">Why Pivot For Dancers?</span>
          <h1 className="mt-2 text-3xl font-merriweather text-black md:text-5xl">
            Community
          </h1>
        </div>
        <div className="justify-center flex-1 mx-auto">
          <div className="relative">
            <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl">
              <div className="flex flex-wrap items-center">
                <div className="w-full px-4 mb-6 lg:mb-0 lg:w-1/2">
                  <div className="w-full lg:w-1/2">
                    <div className="flex gap-4">
                      <img className="object-cover w-1/2 rounded-md md:w-72 h-44 md:h-72" src="/assets/contact-us-one.jpg" alt="" />
                      <img className="object-cover w-1/2 rounded-md md:w-72 h-44 md:h-72" src="/assets/contact-us-two.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 lg:mb-0 lg:w-1/2">
                  <h2 className="mb-3 text-3xl font-montserrat text-black sm:text-5xl">
                    Join 100+ people on our newsletter
                  </h2>
                  <p className="mb-6 font-montserrat text-gray-700 dark:text-gray-400">
                    Lorem ipsum dor amet set Lorem ipsum dor amet set ispicuous .
                  </p>
                  <div className="flex flex-wrap justify-center mb-6"> {/* Centering the button and input on smaller screens */}
                    <input
                      className="w-full px-4 py-4 mb-6 text-sm text-gray-900 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-md dark:text-gray-400 lg:mr-3 dark:placeholder-gray-400 dark:bg-gray-700 dark:border-gray-700 md:mb-0 md:w-1/2"
                      type="email"
                      placeholder="Type your e-mail"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <form
                      action="https://pivotfordancers.us19.list-manage.com/subscribe/post?u=be8fecbf3f1babc7628da411c&amp;id=e5d51bd2a0&amp;f_id=00c396e4f0"
                      method="post"
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      className="validate"
                      target="_self"
                      onSubmit={handleSubmit}
                      noValidate
                    >
                      <button
                        type="submit"
                        className="w-full px-6 py-4 text-sm font-semibold text-gray-100 bg-blue-500 rounded-md md:w-auto md:ml-2 hover:bg-blue-600"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 mb-2"> {/* Centering the social media icons on smaller screens */}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
