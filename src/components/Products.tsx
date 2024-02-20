

import React from 'react';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="flex items-center bg-beige">
      <div id="products" className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-20 md:px-6">
        <div className="px-4 pl-4 mb-6">
          <span className="text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather">Dancer-Specific Career Change Resources</span>
          <h1 className="mt-2 text-3xl font-merriweather text-black md:text-5xl">
            Products
          </h1>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {/* Product Card 1 */}
          <div className="border border-gray-200 rounded-md dark:border-none p-4">
            <div className="relative">
              <a href="https://www.youtube.com/watch?v=jVOzzS-Rdks&list=PLgpMNLeroa9rYSEVR0FFySlFowT4HuTZh" target="_blank" rel="noopener noreferrer">
                <img src="/assets/pivot-panels.png" alt="" className="object-cover w-full mx-auto h-96 lg:h-56" />
              </a>
              <span className="absolute top-0 left-0 px-4 py-2 lg:px-2 lg:py-1 text-sm font-bold text-gray-100 border-2 rounded-md bg-rose-600">
                Sale
              </span>
              <div className="absolute bottom-0 left-3 z-10 flex items-center justify-center p-2 -mb-6 text-center text-gray-100 bg-light-gray rounded-full shadow-xl hover:bg-purple-gray w-11 h-11">
                <a href="https://www.youtube.com/watch?v=jVOzzS-Rdks&list=PLgpMNLeroa9rYSEVR0FFySlFowT4HuTZh" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-6 bg-off-white">
              <h3 className="mb-2 text-xl font-merriweather text-center text-brown-gray">
                <a href="https://www.youtube.com/watch?v=jVOzzS-Rdks&list=PLgpMNLeroa9rYSEVR0FFySlFowT4HuTZh" target="_blank" rel="noopener noreferrer">Pivot Panels </a>
              </h3>
              <div className="flex justify-center mb-2 text-center">
                <p className="text-lg font-merriweather text-brown-gray">
                  <span className="text-brown-gray ">FREE</span>
                  <span className="ml-2 line-through text-brown-gray">$50</span>
                </p>
              </div>
            </div>
          </div>


          {/* Product Card 2 */}
          <div className="border border-gray-200 rounded-md dark:border-none p-4">
            <div className="relative">
              <a href="#" className="">
                <img src="/assets/how-to-pivot-ebook.png" alt="" className="object-cover w-full mx-auto h-96 lg:h-56" />
              </a>
              <div className="absolute bottom-0 left-3 z-10 flex items-center justify-center p-2 -mb-6 text-center text-gray-100 bg-light-gray rounded-full shadow-xl hover:bg-purple-gray w-11 h-11">
                <a href="#" className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-6 bg-off-white">
              <h3 className="mb-2 text-xl font-merriweather text-center text-brown-gray">
                <a href="#">How to Pivot ebook</a>
              </h3>
              <div className="flex justify-center mb-2 text-center">
                <p className="text-lg font-merriweather text-gray-600 text-brown-gray">
                  <span className="text-brown-gray">COMING SOON</span>
                  <span className="ml-2 line-through text-brown-gray"></span>
                </p>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="border border-gray-200 rounded-md dark:border-none p-4">
            <div className="relative">
              <a href="#" className="">
                <img src="/assets/pivot-workshop.png" alt="" className="object-cover w-full mx-auto h-96 lg:h-56" />
              </a>
              <div className="absolute bottom-0 left-3 z-10 flex items-center justify-center p-2 -mb-6 text-center text-gray-100 bg-light-gray rounded-full shadow-xl hover:bg-purple-gray w-11 h-11">
                <a href="#" className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-6 bg-off-white">
              <h3 className="mb-2 text-xl font-merriweather text-center text-brown-gray">
                <a href="#">Pivot Workshops</a>
              </h3>
              <div className="flex justify-center mb-2 text-center">
                <p className="text-lg font-merriweather text-gray-600 text-brown-gray">
                  <span className="text-brown-gray">$800.00</span>
                  <span className="ml-2 line-through text-brown-gray">1500</span>
                </p>
              </div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="border border-gray-200 rounded-md dark:border-none p-4">
            <div className="relative">
              <a href="#" className="">
                <img src="/assets/pivot-mentorship.png" alt="" className="object-cover w-full mx-auto h-96 lg:h-56" />
              </a>
              <div className="absolute bottom-0 left-3 z-10 flex items-center justify-center p-2 -mb-6 text-center text-gray-100 bg-light-gray rounded-full shadow-xl hover:bg-purple-gray w-11 h-11">
                <a href="#" className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-6 bg-off-white">
              <h3 className="mb-2 text-xl font-merriweather text-center text-brown-gray">
                <a href="#">Private Mentorship</a>
              </h3>
              <div className="flex justify-center mb-2 text-center">
                <p className="text-lg font-merriweather text-gray-600 text-brown-gray">
                  <span className="text-brown-gray">ON REQUEST</span>
                  <span className="ml-2 line-through text-brown-gray"></span>
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
