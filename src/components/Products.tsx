import React from 'react';

const FeaturedProducts: React.FC = () => {
  const pivotPanelsUrl = "https://www.youtube.com/playlist?list=PLjTsov7LqGgI2Tc2tsi_aH-_ZF0MuFT6r";
  const ebookAmazonUrl = "https://www.amazon.com/dp/B0CXL4F57D";
  const coursePaymentUrl = "https://buy.stripe.com/dR628qgYm750aek6oq";
  const mentorshipBookingUrl = "https://tidycal.com/pivotfordancers/mentorship-1";

  // Scroll to the FAQ section smoothly
  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-section');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <a
            href={pivotPanelsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-200 rounded-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 max-w-xs mx-auto"
          >
            <div className="relative">
              <img
                src="/assets/pivot-panels.png"
                alt="Pivot Panels"
                className="object-cover w-full h-auto max-h-48 mx-auto"
              />
            </div>
            <div className="p-6 bg-off-white text-center">
              <h3 className="text-lg sm:text-xl font-merriweather text-brown-gray">
                Pivot Panels
              </h3>
              <p className="mb-4 text-sm sm:text-base font-montserrat text-brown-gray">
                Hear from the community
              </p>
              <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-purple-gray rounded-full hover:bg-purple-gray-600">
                FREE
              </span>
            </div>
          </a>

          {/* Product Card 2 */}
          <a
            href={ebookAmazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-200 rounded-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 max-w-xs mx-auto"
          >
            <div className="relative">
              <img
                src="/assets/how-to-pivot-ebook.png"
                alt="How to Pivot eBook"
                className="object-cover w-full h-auto max-h-48 mx-auto"
              />
            </div>
            <div className="p-6 bg-off-white text-center">
              <h3 className="text-lg sm:text-xl font-merriweather text-brown-gray">
                How to Pivot eBook
              </h3>
              <p className="mb-4 text-sm sm:text-base font-montserrat text-brown-gray">
                Your guide to pivoting
              </p>
              <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-purple-gray rounded-full hover:bg-purple-gray-600">
                BUY
              </span>
            </div>
          </a>

          {/* Product Card 3 */}
          <a
            href={coursePaymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-200 rounded-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 max-w-xs mx-auto"
          >
            <div className="relative">
              <img
                src="/assets/happy-trails-mini-course.png"
                alt="Pivot Course"
                className="object-cover w-full h-auto max-h-48 mx-auto"
              />
            </div>
            <div className="p-6 bg-off-white text-center">
              <h3 className="text-lg sm:text-xl font-merriweather text-brown-gray">
                Pivot Course
              </h3>
              <p className="mb-4 text-sm sm:text-base font-montserrat text-brown-gray">
                Share at your studio
              </p>
              <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-purple-gray rounded-full hover:bg-purple-gray-600">
                BOOK
              </span>
            </div>
          </a>

          {/* Product Card 4 */}
          <a
            href={mentorshipBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-200 rounded-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 max-w-xs mx-auto"
          >
            <div className="relative">
              <img
                src="/assets/pivot-mentorship.png"
                alt="Private Mentorship"
                className="object-cover w-full h-auto max-h-48 mx-auto"
              />
            </div>
            <div className="p-6 bg-off-white text-center">
              <h3 className="text-lg sm:text-xl font-merriweather text-brown-gray">
                Private Mentorship
              </h3>
              <p className="mb-4 text-sm sm:text-base font-montserrat text-brown-gray">
                Personalised guidance
              </p>
              <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-purple-gray rounded-full hover:bg-purple-gray-600">
                BOOK
              </span>
            </div>
          </a>
        </div>

        {/* MORE INFO */}
        <div className="mt-10 text-center">
          <p className="text-lg sm:text-xl font-montserrat text-brown-gray">
            Need more information on our products?{' '}
            <button
              onClick={scrollToFAQ}
              className="text-purple-gray font-semibold hover:underline focus:outline-none"
            >
              See our Frequently Asked Questions
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
