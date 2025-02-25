import React from 'react';

const FeaturedProducts: React.FC = () => {
  // Product urls
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

  // Class variables
  const sectionClasses = "flex items-center bg-beige";
  const containerClasses = "justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-10 md:px-6";
  const headingContainerClasses = "px-4 pl-4 mb-6";
  const headingSpanClasses = "text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather";
  const headingTitleClasses = "mt-2 text-3xl font-merriweather text-black md:text-5xl";
  const gridClasses = "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-4";
  const cardClasses = "flex flex-col border border-gray-200 p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 w-full h-full";
  const imgWrapperClasses = "relative overflow-hidden";
  const imgClasses = "object-cover w-full h-full";
  const textContainerClasses = "p-6 bg-off-white text-center flex flex-col flex-grow justify-between";
  const textTitleClasses = "text-2xl sm:text-3xl font-merriweather text-brown-gray";
  const textDescriptionClasses = "mb-4 text-sm sm:text-base font-montserrat text-brown-gray";
  const buttonClasses = "inline-block px-4 py-2 text-sm font-semibold text-white bg-purple-gray rounded-full hover:bg-purple-gray-600";
  const moreInfoClasses = "mt-10 text-center";
  const moreInfoTextClasses = "text-lg sm:text-xl font-montserrat text-brown-gray";
  const faqButtonClasses = "text-purple-gray font-semibold hover:underline focus:outline-none";

  const products = [
    {
      url: pivotPanelsUrl,
      img: `${process.env.PUBLIC_URL}/assets/pivot-panels.png`,
      title: "Pivot Panels",
      description: "ONLINE INTERVIEWS",
      buttonText: "BUY $0.00",
    },
    {
      url: ebookAmazonUrl,
      img: `${process.env.PUBLIC_URL}/assets/how-to-pivot-ebook.png`,
      title: "How to Pivot",
      description: "KINDLE EBOOK",
      buttonText: "BUY $6.99",
    },
    {
      url: coursePaymentUrl,
      img: `${process.env.PUBLIC_URL}/assets/happy-trails-mini-course.png`,
      title: "Happy Trails",
      description: "DIGITAL COURSE",
      buttonText: "BUY $75.00",
    },
    {
      url: mentorshipBookingUrl,
      img: `${process.env.PUBLIC_URL}/assets/pivot-mentorship.png`,
      title: "Mentorship",
      description: "PRIVATE SESSIONS",
      buttonText: "BUY $150.00",
    },
  ];

  return (
    <section className={sectionClasses}>
      <div id="products" className={containerClasses}>
        <div className={headingContainerClasses}>
          <span className={headingSpanClasses}>Dancer-Specific Career Change Resources</span>
          <h2 className={headingTitleClasses}>Products</h2>
        </div>
        <div className={gridClasses}>
          {products.map((product, index) => (
            <a
              key={index}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClasses}
            >
              <div className={imgWrapperClasses}>
                <img src={product.img} alt={product.title} className={imgClasses} />
              </div>
              <div className={textContainerClasses}>
                <h3 className={textTitleClasses}>{product.title}</h3>
                <p className={textDescriptionClasses}>{product.description}</p>
                <span className={buttonClasses}>{product.buttonText}</span>
              </div>
            </a>
          ))}
        </div>

        {/* MORE INFO */}
        <div className={moreInfoClasses}>
          <p className={moreInfoTextClasses}>
            Need more information on our products?{' '}
            <button
              onClick={scrollToFAQ}
              className={faqButtonClasses}
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
