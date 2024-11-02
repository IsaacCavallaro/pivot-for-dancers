import React from 'react';
import { useSpring, animated } from 'react-spring';

const EbookBanner: React.FC = () => {
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
    });

    return (
        <section id="home" className="bg-beige relative">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Container with Border */}
                <animated.div style={fadeIn} className="border border-gray-300 rounded-lg p-8 bg-white shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    {/* Text Section */}
                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-4xl md:text-5xl font-merriweather leading-tight text-gray-900">
                            Your Next Chapter Awaits
                        </h2>
                        <p className="text-lg text-gray-700">
                            Discover the inspiring stories of dancers who, <span className="font-bold">just like you</span>, found the courage to explore new passions and build fulfilling careers while staying connected to their love for dance.
                        </p>

                        {/* Testimonial Quote */}
                        <blockquote className="italic text-gray-600">
                            "A must-read for dancers looking to pivot without losing their passion. Full of actionable advice and heartfelt stories."
                            <br></br>
                            <span className="font-semibold text-gray-900">— Sarah M., Professional Dancer</span>
                        </blockquote>

                        {/* Call to Action */}
                        <div className="flex justify-center">
                            <a
                                href="https://www.amazon.com/dp/B0CXL4F57D"
                                className="flex justify-center w-full md:w-auto px-6 py-4 text-sm font-semibold text-gray-100 bg-purple-gray rounded-md mt-4 md:mt-0 md:ml-2 hover:bg-purple-gray opacity-80 hover:opacity-100 md:mb-3"
                                target="_blank"
                            >
                                ORDER BOOK NOW
                            </a>
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="flex justify-center items-center">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://read.amazon.com.au/kp/card?asin=B0CXL4F57D&preview=inline&linkCode=kpe&ref_=kip_embed_taf_preview_WP7PVP0JR6SW63ZPDGC6"
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