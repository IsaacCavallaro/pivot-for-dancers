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
      <div id="contact" className="max-w-6xl py-4 mx-auto md:px-6"> {/* Reduced lg:py-20 to lg:py-10 */}
        <div className="px-4 pl-4 mb-6">
          <span className="text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather">Join the Pivot for Dancers Community</span>
          <h1 className="mt-2 text-3xl font-merriweather text-black md:text-5xl">
            Community
          </h1>
        </div>
        <div className="justify-center flex-1 mx-auto">
          <div className="relative">
            <div className="relative z-10 px-4 py-10 mx-auto max-w-7xl">
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
                    We promise you'll only get the best we got!
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
                        className="w-full px-6 py-4 text-sm font-semibold text-gray-100 bg-purple-gray rounded-md md:w-auto md:ml-2 hover:bg-purple-gray opacity-80 hover:opacity-100">
                        JOIN US
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
                    <a href="https://www.youtube.com/@pivotfordancers" className={`text-white bg-red-500 hover:bg-red-400 mx-3 p-2 rounded-full flex items-center justify-center ${iconSize}`} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* New section */}
      <div className="max-w-6xl py-4 mx-auto md:px-6 flex flex-wrap">
        <div className="w-full md:w-1/2 px-4 mb-10 xl:mb-0">
          <h2 className="mt-2 mb-4 text-2xl font-bold text-black">
            We are dedicated to supporting dancers
          </h2>
          <p className="mb-4 text-base leading-7 text-black">
            When you join, you’ll become part of a growing community of current and former professional dancers who are talking about career change.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <ul className="mb-10">
            <li className="flex items-center mb-4 text-black">
              <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  className="w-6 h-6 bi bi-1-circle-fill text-light-gray" viewBox="0 0 16 16">
                  <path fillRule="evenodd"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                </svg>
              </span>
              Access to Pivot Conversations
            </li>
            <li className="flex items-center mb-4 text-black">
              <span className="mr-3 text-blue-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  className="w-6 h-6 bi bi-2-circle-fill text-light-gray" viewBox="0 0 16 16">
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
                </svg>

              </span>
              Exclusive Discounts on Pivot Products
            </li>
            <li className="flex items-center mb-4 text-black">
              <span className="mr-3 text-blue-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  className="w-6 h-6 bi bi-3-circle-fill text-light-gray" viewBox="0 0 16 16">
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
                </svg>
              </span>
              Dancer-Specific Career Change Resources
            </li>
            <li className="flex items-center mb-4 text-black">
              <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  className="w-6 h-6 bi bi-4-circle-fill text-light-gray" viewBox="0 0 16 16">
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7.519 5.057c-.886 1.418-1.772 2.838-2.542 4.265v1.12H8.85V12h1.26v-1.559h1.007V9.334H10.11V4.002H8.176c-.218.352-.438.703-.657 1.055ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z" />
                </svg>
              </span>
              Invitations to Virtual Events and Workshops
            </li>
          </ul>
        </div>
      </div>
      {/* End of new section */}
    </section>
  );
};

export default Contact;
