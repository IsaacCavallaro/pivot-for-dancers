import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaStar } from "react-icons/fa";

const BASE_PATH = process.env.PUBLIC_URL || "";
const EbookBanner: React.FC = () => {
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
    });

    const amazonEbookUrl = "https://www.amazon.com/dp/B0CXL4F57D"
    const amazonPreviewLink = "https://read.amazon.com.au/kp/card?asin=B0CXL4F57D&preview=inline&linkCode=kpe&ref_=kip_embed_taf_preview_WP7PVP0JR6SW63ZPDGC6"
    const orderNowClassName = "flex justify-center w-full md:w-auto px-6 py-4 text-sm font-semibold text-gray-100 bg-purple-gray rounded-md mt-4 md:mt-0 md:ml-2 hover:bg-purple-gray opacity-80 hover:opacity-100 md:mb-3"

    return (
        <section id="home" className="bg-beige relative">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                {/* Container with Border */}
                <animated.div style={fadeIn} className="border border-gray-300 rounded-lg p-8 bg-white shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    {/* Text Section */}
                    <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
                        {/* Header */}
                        <h2 className="text-4xl md:text-4xl font-merriweather leading-tight text-gray-900 font-semibold">
                            Your Next Chapter
                        </h2>
                        {/* Description */}
                        <p className="text-lg text-gray-700">
                            Unlock the tools you need to get out of your own way and step onto the next stage of your career.
                            Discover real-life examples and dancer-specific resources to help you find fulfilment in your next career.
                        </p>

                        {/* Testimonial Quote */}
                        <blockquote className="italic text-gray-600">
                            "It's all the things I wish someone told me before I started my professional dance career. A must-read for dancers looking to pivot."
                            <br></br>
                            <br></br>
                            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                                {/* Image */}
                                <img
                                    src={`${BASE_PATH}/assets/robyne-campell.jpg`}
                                    alt="Robyne Campbell"
                                    className="w-20 h-20 rounded-full object-cover"
                                />
                                {/* Stars and Text */}
                                <div className="flex flex-col items-center md:items-start">
                                    {/* Five Stars */}
                                    <div className="flex space-x-1">
                                        {Array(5)
                                            .fill(0)
                                            .map((_, i) => (
                                                <FaStar key={i} className="text-yellow-500 text-lg mx-0.5" />
                                            ))}
                                    </div>
                                    <span className="font-semibold text-gray-900 mt-2">— Robyne Campbell, Former Professional Dancer</span>
                                </div>
                            </div>
                        </blockquote>

                        {/* Call to Action */}
                        <div className="flex justify-center">
                            <a
                                href={amazonEbookUrl}
                                className={orderNowClassName}
                                target="_blank"
                            >
                                ORDER EBOOK NOW
                            </a>
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="flex justify-center items-center">
                        <iframe
                            width="100%"
                            height="315"
                            src={amazonPreviewLink}
                            title="Book Preview"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </animated.div>
            </div>
        </section>
    );
};

export default EbookBanner;