import React from 'react';

const FeaturedProducts: React.FC = () => {
  const pivotPanelsUrl = process.env.REACT_APP_PIVOT_PANELS_URL;
  const ebookCheckoutUrl = process.env.REACT_APP_EBOOK_CHECKOUT_URL;
  const workshopBookingUrl = process.env.REACT_APP_WORKSHOP_URL;
  const mentorshipBookingUrl = process.env.REACT_APP_MENTORSHIP_URL;
  return (
    <section className="flex items-center bg-beige">
      <div id="products" className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-10 md:px-6">
        <div className="px-4 pl-4 mb-6">
          <span className="text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather">Dancer-Specific Career Change Resources</span>
          <h1 className="mt-2 text-3xl font-merriweather text-black md:text-5xl">
            Products
          </h1>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {/* Product Card 1 */}
          <a href={pivotPanelsUrl} target="_blank" rel="noopener noreferrer" className="block border border-gray-200 rounded-md dark:border-none p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 max-w-xs mx-auto">
            <div className="relative">
              <img src="/assets/pivot-panels.png" alt="" className="object-cover w-full h-auto max-h-48 mx-auto" />
            </div>
            <div className="p-6 bg-off-white">
              <h3 className="mb-2 text-lg sm:text-xl font-merriweather text-center text-brown-gray">
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
          <a href={ebookCheckoutUrl} target="_blank" rel="noopener noreferrer" className="block border border-gray-200 rounded-md dark:border-none p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 max-w-xs mx-auto">
            <div className="relative">
              <img src="/assets/how-to-pivot-ebook.png" alt="" className="object-cover w-full h-auto max-h-48 mx-auto" />
            </div>
            <div className="p-6 bg-off-white">
              <h3 className="mb-2 text-lg sm:text-xl font-merriweather text-center text-brown-gray">
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
          <a href={workshopBookingUrl} target="_blank" rel="noopener noreferrer" className="block border border-gray-200 rounded-md dark:border-none p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 max-w-xs mx-auto">
            <div className="relative">
              <img src="/assets/pivot-workshop.png" alt="" className="object-cover w-full h-auto max-h-48 mx-auto" />
            </div>
            <div className="p-6 bg-off-white">
              <h3 className="mb-2 text-lg sm:text-xl font-merriweather text-center text-brown-gray">
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
          <a href={mentorshipBookingUrl} target="_blank" rel="noopener noreferrer" className="block border border-gray-200 rounded-md dark:border-none p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 max-w-xs mx-auto">
            <div className="relative">
              <img src="/assets/pivot-mentorship.png" alt="" className="object-cover w-full h-auto max-h-48 mx-auto" />
            </div>
            <div className="p-6 bg-off-white">
              <h3 className="mb-2 text-lg sm:text-xl font-merriweather text-center text-brown-gray">
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