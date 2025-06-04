import { useState } from "react";
import { Star, Clock, BookOpen, Users, Video } from "lucide-react";

const pivotConverstationsUrl = "https://stats.sender.net/forms/bmZM4r/view";
const ebookPaymentUrl = "https://buy.stripe.com/14k6oG8rQexsgCI147";
const coursePaymentUrl = "https://buy.stripe.com/dR628qgYm750aek6oq";
const mentorshipBookingUrl = "https://tidycal.com/pivotfordancers/mentorship-1";
const moreInfoClasses = "mt-10 text-center";
const moreInfoTextClasses = "text-lg sm:text-lg font-montserrat text-brown-gray";
const faqButtonClasses = "text-purple-gray font-semibold hover:underline focus:outline-none";

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

interface Product {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  originalPrice: number;
  url: string;
  img: string;
  category: string;
  duration: string;
  rating: number;
  reviews: number;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Pivot Conversations",
    subtitle: "Virtual Meetups",
    description:
      "Master the art of online interviews with our comprehensive panel sessions. Get real-time feedback from industry experts.",
    price: 0,
    originalPrice: 0,
    url: pivotConverstationsUrl,
    img: "/assets/pivot-panels.png",
    category: "Interview Prep",
    duration: "1 hour",
    rating: 5.0,
    reviews: 127,
    features: ["Live 1-on-1 Sessions", "Expert Feedback", "Recording Included", "Follow-up Support"],
    icon: Video,
    gradient: "from-light-gray to-purple-gray",
  },
  {
    id: 2,
    name: "How to Pivot",
    subtitle: "Ebook",
    description:
      "A comprehensive ebook that guides you through every step of making a successful career pivot with actionable strategies.",
    price: 6.99,
    originalPrice: 0,
    url: ebookPaymentUrl,
    img: "/assets/how-to-pivot-ebook.png",
    category: "Digital Book",
    duration: "10 Chapters",
    rating: 5.0,
    reviews: 342,
    features: ["Instant Download", "Workbook Included", "Case Studies", "Lifetime Updates"],
    icon: BookOpen,
    gradient: "from-purple-gray to-beige",
  },
  {
    id: 3,
    name: "Happy Trails",
    subtitle: "Digital Course Experience",
    description:
      "Transform your mindset and discover your path to happiness with this immersive digital course featuring video lessons and exercises.",
    price: 75,
    originalPrice: 199,
    url: coursePaymentUrl,
    img: "/assets/happy-trails-mini-course.png",
    category: "Online Course",
    duration: "Self Paced",
    rating: 5.0,
    reviews: 89,
    features: ["Video Lessons", "Interactive Exercises", "Community Access", "Certificate"],
    icon: Clock,
    gradient: "from-beige to-brown-gray",
  },
  {
    id: 4,
    name: "Mentorship",
    subtitle: "Private Sessions",
    description:
      "Get personalized guidance with one-on-one mentorship sessions tailored to your specific goals and challenges.",
    price: 150,
    originalPrice: 229,
    url: mentorshipBookingUrl,
    img: "/assets/pivot-mentorship.png",
    category: "Coaching",
    duration: "3 x Sessions",
    rating: 5.0,
    reviews: 45,
    features: ["1-on-1 Sessions", "Custom Strategy", "Email Support", "Progress Tracking"],
    icon: Users,
    gradient: "from-brown-gray to-dark-gray",
  },
];

const FeaturedProducts: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section id="products" className="bg-beige min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-merriweather text-4xl md:text-5xl font-bold text-dark-gray mb-4">Products</h1>
          <p className="font-montserrat text-lg text-brown-gray max-w-3xl mx-auto leading-relaxed">
            Discover our curated collection of career transformation tools, from expert interviews to comprehensive
            courses, designed to help you pivot with confidence and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                className="group relative bg-white rounded-2xl shadow-lg transition-all duration-500 overflow-hidden border border-light-gray group-hover:border-2 group-hover:border-dark-gray"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Most Popular Ribbon */}
                {product.id === 3 && (
                  <div className="absolute -right-8 top-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-dark-gray font-bold font-montserrat text-xs py-1 px-8 transform rotate-45 z-10 shadow-md">
                    Most Popular
                  </div>
                )}

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Product Image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-white flex items-center justify-center">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <IconComponent className="w-5 h-5 text-dark-gray" />
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                        />
                      ))}
                    </div>
                    <span className="font-montserrat text-sm text-brown-gray">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <h3 className="font-merriweather text-xl font-bold text-dark-gray mb-1">{product.name}</h3>
                  <p className="font-montserrat text-sm text-purple-gray mb-3">{product.subtitle}</p>

                  <p className="font-montserrat text-sm text-brown-gray mb-4 line-clamp-3">{product.description}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <span
                          key={index}
                          className="inline-block bg-beige text-dark-gray text-xs font-montserrat px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 2 && (
                        <span className="inline-block bg-light-gray text-white text-xs font-montserrat px-2 py-1 rounded-full">
                          +{product.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-light-gray" />
                    <span className="font-montserrat text-sm text-brown-gray">{product.duration}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-merriweather text-2xl font-bold text-dark-gray">
                      ${product.price}
                      {product.price === 0 && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-montserrat font-normal align-middle ml-2">
                          Free
                        </span>
                      )}
                    </span>
                    {product.originalPrice !== 0 && (
                      <>
                        <span className="font-montserrat text-sm text-brown-gray line-through">
                          ${product.originalPrice}
                        </span>
                        <div className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-montserrat">
                          Save ${product.originalPrice - product.price}
                        </div>
                      </>
                    )}
                    {product.id === 2 && (
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-montserrat">
                        Instant Access
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-2 px-4 text-center font-montserrat font-semibold rounded-md transition-all duration-300 ${hoveredProduct === product.id
                        ? "bg-dark-gray hover:bg-brown-gray text-white transform scale-105"
                        : "bg-light-gray hover:bg-purple-gray text-white"
                        }`}
                    >
                      {product.id === 1 ? "Join Waitlist" :
                        product.id === 2 ? "Download Now" :
                          product.id === 3 ? "Download Now" :
                            "Join Waitlist"}
                    </a>
                    {product.id === 1 && (
                      <p className="font-montserrat text-xs text-center text-brown-gray">
                        Limited spots available for live sessions
                      </p>
                    )}
                    {product.id === 2 && (
                      <p className="font-montserrat text-xs text-center text-brown-gray">
                        Downloaded by {product.reviews}+ professionals
                      </p>
                    )}
                    {product.id === 3 && (
                      <p className="font-montserrat text-xs text-center text-brown-gray">
                        Downloaded by {product.reviews}+ professionals
                      </p>
                    )}
                    {product.id === 4 && (
                      <p className="font-montserrat text-xs text-center text-brown-gray">
                        Limited availability - book your spot today
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
    </section>
  );
};

export default FeaturedProducts;