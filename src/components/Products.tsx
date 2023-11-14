

import React from 'react';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="flex items-center bg-white lg:h-screen font-poppins dark:bg-gray-100">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
      <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Why Pivot For Dancers?</span>
                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                  Products
                </h1>
              </div>
        <div className="w-20 mb-6 border-b border-red-700 dark:border-gray-400"></div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {/* Product Card 1 */}
        <div className="border border-gray-200 rounded-md dark:border-none">
          <div className="relative">
            <a href="https://www.youtube.com/watch?v=jVOzzS-Rdks&list=PLgpMNLeroa9rYSEVR0FFySlFowT4HuTZh" target="_blank" rel="noopener noreferrer">
              <img src="https://i.postimg.cc/mg7F7104/blue-t-shirt.jpg" alt="" className="object-cover w-full mx-auto h-96 lg:h-56" />
            </a>
            <span className="absolute top-0 left-0 px-4 py-2 lg:px-2 lg:py-1 text-sm font-bold text-gray-100 border-2 rounded-md bg-rose-600">
              Sale
            </span>
            <div className="absolute bottom-0 right-0 z-10 flex items-center justify-center p-2 -mb-6 text-center text-gray-100 bg-teal-600 rounded-full shadow-xl hover:bg-teal-700 w-11 h-11">
              <a href="https://www.youtube.com/watch?v=jVOzzS-Rdks&list=PLgpMNLeroa9rYSEVR0FFySlFowT4HuTZh" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 bi bi-plus" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-6 bg-stone-100 dark:bg-gray-900">
            <h3 className="mb-2 text-xl font-medium text-center dark:text-gray-400">
              <a href="https://www.youtube.com/watch?v=jVOzzS-Rdks&list=PLgpMNLeroa9rYSEVR0FFySlFowT4HuTZh" target="_blank" rel="noopener noreferrer">Pivot Panels </a>
            </h3>
            <div className="flex justify-center mb-2 text-center">
              <p className="text-lg font-bold text-gray-600 dark:text-gray-400">
                <span className="text-rose-500 dark:text-gray-300">FREE</span>
                <span className="ml-2 line-through dark:text-gray-400">$50</span>
              </p>
            </div>
          </div>
        </div>


          {/* Product Card 2 */}
          <div className="border border-gray-200 rounded-md dark:border-none">
            <div className="relative">
              <a href="#" className="">
                <img src="https://i.postimg.cc/mg7F7104/blue-t-shirt.jpg" alt="" className="object-cover w-full mx-auto h-96 lg:h-56" />
              </a>
              <div className="absolute bottom-0 right-0 z-10 flex items-center justify-center p-2 -mb-6 text-center text-gray-100 bg-teal-600 rounded-full shadow-xl hover:bg-teal-700 w-11 h-11">
                <a href="#" className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-6 bg-stone-100 dark:bg-gray-900">
              <h3 className="mb-2 text-xl font-medium text-center dark:text-gray-400">
                <a href="#">ebook</a>
              </h3>
              <div className="flex justify-center mb-2 text-center">
                <p className="text-lg font-bold text-gray-600 dark:text-gray-400">
                  <span className="text-rose-500 dark:text-gray-300">COMING SOON</span>
                  <span className="ml-2 line-through dark:text-gray-400"></span>
                </p>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="border border-gray-200 rounded-md dark:border-none">
            <div className="relative">
              <a href="#" className="">
                <img src="https://i.postimg.cc/mg7F7104/blue-t-shirt.jpg" alt="" className="object-cover w-full mx-auto h-96 lg:h-56" />
              </a>
              <div className="absolute bottom-0 right-0 z-10 flex items-center justify-center p-2 -mb-6 text-center text-gray-100 bg-teal-600 rounded-full shadow-xl hover:bg-teal-700 w-11 h-11">
                <a href="#" className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-6 bg-stone-100 dark:bg-gray-900">
              <h3 className="mb-2 text-xl font-medium text-center dark:text-gray-400">
                <a href="#">How to pivot course</a>
              </h3>
              <div className="flex justify-center mb-2 text-center">
                <p className="text-lg font-bold text-gray-600 dark:text-gray-400">
                  <span className="text-rose-500 dark:text-gray-300">$800.00</span>
                  <span className="ml-2 line-through dark:text-gray-400">1500</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Product Card 4 */}
          <div className="border border-gray-200 rounded-md dark:border-none">
            <div className="relative">
              <a href="#" className="">
                <img src="https://i.postimg.cc/mg7F7104/blue-t-shirt.jpg" alt="" className="object-cover w-full mx-auto h-96 lg:h-56" />
              </a>
              <div className="absolute bottom-0 right-0 z-10 flex items-center justify-center p-2 -mb-6 text-center text-gray-100 bg-teal-600 rounded-full shadow-xl hover:bg-teal-700 w-11 h-11">
                <a href="#" className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-6 bg-stone-100 dark:bg-gray-900">
              <h3 className="mb-2 text-xl font-medium text-center dark:text-gray-400">
                <a href="#">Private Mentorship</a>
              </h3>
              <div className="flex justify-center mb-2 text-center">
                <p className="text-lg font-bold text-gray-600 dark:text-gray-400">
                  <span className="text-rose-500 dark:text-gray-300">ON REQUESTS</span>
                  <span className="ml-2 line-through dark:text-gray-400"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
