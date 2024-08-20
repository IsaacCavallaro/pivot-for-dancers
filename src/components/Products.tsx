import React from 'react';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="flex items-center bg-beige">
      <div id="products" className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-10 md:px-6">
        <div className="px-4 pl-4 mb-6">
          <span className="text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather">Dancer-Specific Career Change Resources</span>
          <h1 className="mt-2 text-3xl font-merriweather text-black md:text-5xl">
            Products
          </h1>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {/* Product Card 1 */}
          <a href="https://www.youtube.com/playlist?list=PLjTsov7LqGgI2Tc2tsi_aH-_ZF0MuFT6r" target="_blank" rel="noopener noreferrer" className="block border border-gray-200 rounded-md dark:border-none p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
            <div className="relative">
              <img src="/assets/pivot-panels.png" alt="" className="object-cover w-full mx-auto h-96 lg:h-56" />
            </div>
            <div className="p-6 bg-off-white">
              <h3 className="mb-2 text-xl font-merriweather text-center text-brown-gray">
                Pivot Panels
              </h3>
              <div className="flex justify-center mb-2 text-center">
                <p className="text-lg font-merriweather text-brown-gray">
                  <span className="text-brown-gray">FREE</span>
                </p>
              </div>
            </div>
          </a>

          {/* Product Card 2 */}
          <a href="#" className="block border border-gray-200 rounded-md dark:border-none p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
            <div className="relative">
              <img src="/assets/how-to-pivot-ebook.png" alt="" className="object-cover w-full mx-auto h-96 lg:h-56" />
            </div>
            <div className="p-6 bg-off-white">
              <h3 className="mb-2 text-xl font-merriweather text-center text-brown-gray">
                How to Pivot eBook
              </h3>
              <div className="flex justify-center mb-2 text-center">
                <p className="text-lg font-merriweather text-gray-600 text-brown-gray">
                  <span className="text-brown-gray">COMING SOON</span>
                </p>
              </div>
            </div>
          </a>

          {/* Product Card 3 */}
          <a href="#" className="block border border-gray-200 rounded-md dark:border-none p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
            <div className="relative">
              <img src="/assets/pivot-workshop.png" alt="" className="object-cover w-full mx-auto h-96 lg:h-56" />
            </div>
            <div className="p-6 bg-off-white">
              <h3 className="mb-2 text-xl font-merriweather text-center text-brown-gray">
                Pivot Workshops
              </h3>
              <div className="flex justify-center mb-2 text-center">
                <p className="text-lg font-merriweather text-gray-600 text-brown-gray">
                  <span className="text-brown-gray">COMING SOON</span>
                </p>
              </div>
            </div>
          </a>

          {/* Product Card 4 */}
          <a href="#" className="block border border-gray-200 rounded-md dark:border-none p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
            <div className="relative">
              <img src="/assets/pivot-mentorship.png" alt="" className="object-cover w-full mx-auto h-96 lg:h-56" />
            </div>
            <div className="p-6 bg-off-white">
              <h3 className="mb-2 text-xl font-merriweather text-center text-brown-gray">
                Private Mentorship
              </h3>
              <div className="flex justify-center mb-2 text-center">
                <p className="text-lg font-merriweather text-gray-600 text-brown-gray">
                  <span className="text-brown-gray">ON REQUEST</span>
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;