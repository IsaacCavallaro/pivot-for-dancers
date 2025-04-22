import React from 'react';

const FeaturedProducts: React.FC = () => {
  // Product urls
  const pivotPanelsUrl = "https://www.youtube.com/playlist?list=PLjTsov7LqGgI2Tc2tsi_aH-_ZF0MuFT6r";
  const ebookSPaymentUrl = "https://buy.stripe.com/14k6oG8rQexsgCI147";
  const coursePaymentUrl = "https://buy.stripe.com/dR628qgYm750aek6oq";
  const mentorshipBookingUrl = "https://tidycal.com/pivotfordancers/mentorship-1";

  // Scroll to the FAQ section smoothly
  const scrollToFAQ = () => {
    const element = document.getElementById('faq-section');
    if (element) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const topOffset = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  // Class variables
  const sectionClasses = "flex items-center bg-beige text-center py-10";
  const containerClasses = "justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-5 md:px-6";
  const headingContainerClasses = "px-4 pl-4 mb-6";
  const headingSpanClasses = "text-sm text-gray-600 uppercase dark:text-gray-400 font-merriweather";
  const headingTitleClasses = "mt-2 text-3xl font-merriweather text-black md:text-4xl font-semibold";
  const gridClasses = "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-4";
  const cardClasses = "flex flex-col border border-gray-200 p-4 w-full h-full";
  const imgWrapperClasses = "relative overflow-hidden";
  const imgClasses = "object-cover w-full h-full";
  const textContainerClasses = "p-6 bg-off-white text-center flex flex-col flex-grow justify-between";
  const textTitleClasses = "text-2xl sm:text-3xl font-merriweather font-semibold text-brown-gray";
  const textDescriptionClasses = "mb-4 text-sm sm:text-base font-montserrat text-brown-gray";
  const buttonClasses = "inline-block px-4 py-2 text-sm font-semibold text-white bg-purple-gray rounded-full hover:bg-purple-gray opacity-80 hover:opacity-100";
  const moreInfoClasses = "mt-10 text-center";
  const moreInfoTextClasses = "text-lg sm:text-lg font-montserrat text-brown-gray";
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
      url: ebookSPaymentUrl,
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
          <h2 className={headingTitleClasses}>Products</h2>
          <span className={headingSpanClasses}>Dancer-Specific Career Change Resources</span>
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

        {/* GO TO FAQ*/}
        <div className={moreInfoClasses}>
          <p className={moreInfoTextClasses}>
            Need More Information? See our {' '}
            <button
              onClick={scrollToFAQ}
              className={faqButtonClasses}
            >
              Frequently Asked Questions
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
