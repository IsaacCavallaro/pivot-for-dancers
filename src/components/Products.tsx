import { useState, useRef, useEffect } from "react";
import { Star, Clock, BookOpen, Users, Video, Check } from "lucide-react";

const pivotConverstationsUrl = "https://stats.sender.net/forms/bmZM4r/view";
const ebookPaymentUrl = "https://buy.stripe.com/14k6oG8rQexsgCI147";
const coursePaymentUrl = "https://buy.stripe.com/dR628qgYm750aek6oq";
const mentorshipBookingUrl = "https://tidycal.com/pivotfordancers/mentorship-1";
const bundlePaymentUrl = "https://buy.stripe.com/3cIcN79R24mAbeg4p4g3604";
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
    subtitle: "VIRTUAL MEETUPS",
    description:
      "Join your fellow dancers for a virtual career change conversation. No recordings, no pressure, just real talk.",
    price: 0,
    originalPrice: 0,
    url: pivotConverstationsUrl,
    img: "/assets/pivot-panels.png",
    category: "Interview Prep",
    duration: "1 hour",
    rating: 5.0,
    reviews: 43,
    features: ["Live Group Sessions", "Community", "Follow-up Support"],
    icon: Video,
    gradient: "from-light-gray to-purple-gray",
  },
  {
    id: 2,
    name: "How to Pivot",
    subtitle: "EBOOK",
    description:
      "Get an actionable, dancer-specific career change guide with mindset shifts and steps for how to pivot. ",
    price: 6.99,
    originalPrice: 0,
    url: ebookPaymentUrl,
    img: "/assets/how-to-pivot-ebook.png",
    category: "Digital Book",
    duration: "10 Chapters",
    rating: 5.0,
    reviews: 89,
    features: ["Instant Download", "Interactive Exercises", "Case Studies", "Lifetime Updates"],
    icon: BookOpen,
    gradient: "from-purple-gray to-beige",
  },
  {
    id: 3,
    name: "Happy Trails",
    subtitle: "DIGITAL COURSE",
    description:
      "Explore a 5-year career change roadmap to make a plan for before, during, and after your pivot.",
    price: 75,
    originalPrice: 199,
    url: coursePaymentUrl,
    img: "/assets/happy-trails-mini-course.png",
    category: "Online Course",
    duration: "Self Paced",
    rating: 5.0,
    reviews: 16,
    features: ["Video Lessons", "Bonus Resources", "Community Access", "Certificate"],
    icon: Clock,
    gradient: "from-beige to-brown-gray",
  },
  {
    id: 4,
    name: "Mentorship",
    subtitle: "PRIVATE SESSIONS",
    description:
      "Need more support? Get personalized guidance tailored to your unique goals and experiences.",
    price: 150,
    originalPrice: 229,
    url: mentorshipBookingUrl,
    img: "/assets/pivot-mentorship.png",
    category: "Coaching",
    duration: "3 x Sessions",
    rating: 5.0,
    reviews: 3,
    features: ["1-on-1 Sessions", "Bespoke Advice", "Email Support", "Progress Tracking"],
    icon: Users,
    gradient: "from-brown-gray to-dark-gray",
  },
];

const FeaturedProducts: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
    title: false,
    products: false,
    bundle: false,
    faq: false
  });

  const titleRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const bundleRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target === titleRef.current) {
          setIsVisible(prev => ({ ...prev, title: entry.isIntersecting }));
        } else if (entry.target === productsRef.current) {
          setIsVisible(prev => ({ ...prev, products: entry.isIntersecting }));
        } else if (entry.target === bundleRef.current) {
          setIsVisible(prev => ({ ...prev, bundle: entry.isIntersecting }));
        } else if (entry.target === faqRef.current) {
          setIsVisible(prev => ({ ...prev, faq: entry.isIntersecting }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    if (titleRef.current) observer.observe(titleRef.current);
    if (productsRef.current) observer.observe(productsRef.current);
    if (bundleRef.current) observer.observe(bundleRef.current);
    if (faqRef.current) observer.observe(faqRef.current);

    return () => observer.disconnect();
  }, []);

  // Handle button clicks
  const handleProductClick = (url: string, event: React.MouseEvent) => {
    event.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Calculate bundle pricing dynamically
  const bundleProducts = products.filter(product => [2, 3, 4].includes(product.id));
  const totalPrice = bundleProducts.reduce((sum, product) => sum + product.price, 0);
  const discountPercent = 30;
  const discountAmount = totalPrice * (discountPercent / 100);
  const bundlePrice = totalPrice - discountAmount;

  return (
    <section id="products" className="bg-beige min-h-screen px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className="text-center md:py-4"
        >
          <h1
            className={`font-merriweather text-center text-5xl md:text-6xl lg:text-6xl font-bold text-black mb-6 leading-tight transition-all duration-1000 ${isVisible.title
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform -translate-y-10'
              }`}
          >
            Products
          </h1>
          <span
            className={`text-sm text-center text-gray-600 uppercase dark:text-gray-400 transition-all duration-1000 delay-300 ${isVisible.title
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-10'
              }`}
          >
            Dancer-Specific Career Change Resources
          </span>
        </div>

        <div
          ref={productsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mt-5"
        >
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                className={`group relative bg-white rounded-2xl shadow-lg transition-all duration-500 overflow-hidden border border-light-gray hover:opacity-90 ${isVisible.products
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-16'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
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
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 transition-transform duration-300 group-hover:rotate-12">
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
                          className={`w-4 h-4 transition-all duration-300 ${i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
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
                          className="inline-block bg-amber-50 text-gray-800 text-xs px-2 py-1 rounded-full"
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
                    <button
                      onClick={(e) => handleProductClick(product.url, e)}
                      className={`block w-full py-2 px-4 text-center font-montserrat font-semibold rounded-md transition-all duration-300 cursor-pointer ${hoveredProduct === product.id
                        ? "bg-light-gray hover:bg-purple-gray text-white transform scale-105"
                        : "bg-light-gray hover:bg-purple-gray text-white"
                        }`}
                    >
                      {product.id === 1 ? "REGISTER NOW" :
                        product.id === 2 ? "DOWNLOAD NOW" :
                          product.id === 3 ? "START NOW" :
                            "BOOK NOW"}
                    </button>
                    {product.id === 1 && (
                      <p className="font-montserrat text-xs text-center text-brown-gray">
                        Limited spots available for live sessions
                      </p>
                    )}
                    {product.id === 2 && (
                      <p className="text-xs text-center text-stone-600">
                        Low-cost, low-pressure
                      </p>
                    )}
                    {product.id === 3 && (
                      <p className="text-xs text-center text-stone-600">
                        Downloaded by {product.reviews}+ professionals
                      </p>
                    )}
                    {product.id === 4 && (
                      <p className="text-xs text-center text-stone-600">
                        Limited Availability
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Bundle Section */}
        <div className="mt-20 mb-16">
          <div className="dark:bg-gray-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">

              {/* Bundle Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-dark-gray px-4 py-2 rounded-full font-montserrat font-semibold text-sm mb-4">
                  <Star className="w-4 h-4 fill-current" />
                  BEST VALUE
                </div>
                <h2 className="font-merriweather text-4xl md:text-5xl font-bold mb-4">
                  Dance Career Transition Suite
                </h2>
                <p className="font-montserrat text-xl opacity-90 max-w-3xl mx-auto">
                  Everything you need to confidently pivot into meaningful, fulfilling work — For less than the cost of new headshots.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Bundle Contents */}
                <div>
                  <div className="space-y-6">
                    {bundleProducts.map((product) => {
                      const IconComponent = product.icon;
                      return (
                        <div key={product.id} className="flex items-start gap-4 bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                          <div className={`rounded-full p-3 flex-shrink-0 ${product.id === 2 ? 'bg-purple-gray' :
                            product.id === 3 ? 'bg-beige' :
                              'bg-light-gray'
                            }`}>
                            <IconComponent className={`w-6 h-6 ${product.id === 3 ? 'text-dark-gray' : 'text-white'}`} />
                          </div>
                          <div>
                            <h4 className="font-merriweather text-lg font-bold mb-2">{product.name}</h4>
                            <p className="font-montserrat text-sm opacity-90 mb-2">
                              {product.id === 2 ? "10 chapters of mindset shifts and step-by-step guides" :
                                product.id === 3 ? "Self-paced course with video lessons & extras" :
                                  "Specialised 1-on-1 coaching sessions"}
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="font-montserrat text-sm line-through opacity-75">
                                ${product.originalPrice || product.price}
                              </span>
                              <span className={`font-montserrat text-xs px-2 py-1 rounded-full ${product.id === 2 ? 'bg-beige text-dark-gray' :
                                product.id === 3 ? 'bg-brown-gray text-white' :
                                  'bg-dark-gray text-white'
                                }`}>
                                {product.id === 2 ? 'Ebook' :
                                  product.id === 3 ? 'Online Course' :
                                    'Private Sessions'}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="bg-white rounded-3xl p-8 text-dark-gray">
                  <div className="text-center mb-8">
                    <div className="mb-4">
                      <span className="font-montserrat text-sm text-brown-gray">Full Price Value:</span>
                      <div className="font-merriweather text-3xl text-brown-gray line-through mb-2">
                        ${totalPrice}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="font-merriweather text-5xl font-bold text-dark-gray">
                          ${Math.round(bundlePrice)}
                        </span>
                        <div className="bg-yellow-400 text-dark-gray px-3 py-1 rounded-full">
                          <span className="font-montserrat font-bold text-sm">{discountPercent}% OFF</span>
                        </div>
                      </div>
                      <p className="font-montserrat text-brown-gray">
                        Save ${Math.round(discountAmount)} — Invest in your next stage today
                      </p>
                      <p className="font-montserrat text-xs text-brown-gray mt-2 italic">
                        Limited time only. Don't miss out.
                      </p>
                    </div>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-light-gray" />
                        <span className="font-montserrat text-brown-gray">First access to Pivot Conversations</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-light-gray" />
                        <span className="font-montserrat text-brown-gray">Our complete suite of career change resources</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-light-gray" />
                        <span className="font-montserrat text-brown-gray">Dancer-specific career transformation system</span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleProductClick(bundlePaymentUrl, e)}
                      className="block w-full py-3 px-4 text-center font-montserrat font-semibold rounded-md transition-all duration-300 bg-light-gray hover:bg-purple-gray hover:transform hover:scale-105 text-white cursor-pointer"
                    >
                      START MY PIVOT
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
      </div>
    </section>
  );
};

export default FeaturedProducts;