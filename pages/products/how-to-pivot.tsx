import Image from 'next/image';
import { Product, ebookPaymentUrl } from '../../data/products';
import { Star, Clock, ArrowLeft, BookOpen } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';

const product: Product = {
    id: 2,
    name: "How to Pivot",
    subtitle: "EBOOK",
    description:
        `Feeling stuck in your dance career?\nNot sure what else is out there for you beyond the stage?\nReady to take the leap but unsure where to start?\n\nIntroducing \"How to Pivot: Navigating Career Change for Professional Dancers\".\n\nPart self-help book and part action-focused career resource, this ebook takes you through all the things you wish someone would\'ve told you before you started your career as a professional dancer.\n\nIf you already lived your dream and find yourself wondering \"what now?\", this dancer-specific guide is for you.\n\nBrought to you by the founder of Pivot for Dancers, \"How to Pivot\" is an actionable career change guide tailored specifically for professional dancers.\n\nKaylee Randall brings together concepts from psychology and philosophy, merging them with her own experience as a professional dancer who successfully changed careers.\n\nInside, you\'ll find:\n10 chapters of taboo, dancer-specific topics no one else is talking about\nDeep dive into the psychological and philosophical concepts that can guide you through a career change\nMindset shifts and taboo topics to connect to what you truly want in your next adventure\nTools and resources to help you understand your transferable skills and build a muggle resume\nA clear, focused action plan to help you step onto your next stage\nYou\'ll always be a dancer. No one can take that away. But if you\'re feeling pulled to something more, you\'re not alone. Get prepared for all the exciting things to come and reach your full potential with the help of \"How to Pivot\".`,
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
};

const HowToPivotPage = () => {
    const router = useRouter();
    const IconComponent = product.icon;

    return (
        <div>
            <Navigation />
            <div className="min-h-screen bg-beige py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={() => router.push('/products')}
                        className="flex items-center gap-2 text-purple-gray hover:text-dark-gray font-montserrat font-semibold mb-8 transition-colors duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Products
                    </button>

                    <div className="text-center py-4 mb-8">
                        <p className="font-montserrat text-md uppercase text-purple-gray font-semibold tracking-wide">
                            {product.subtitle}
                        </p>
                        <h1 className="font-merriweather text-5xl md:text-6xl font-bold text-dark-gray mb-4">
                            {product.name}
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column - Product Image */}
                        <div className="relative aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center p-8">
                            <Image
                                src={product.img}
                                alt={product.name}
                                width={500}
                                height={500}
                                className="max-w-full max-h-full object-contain"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                                <IconComponent className="w-6 h-6 text-dark-gray" />
                            </div>
                        </div>

                        {/* Right Column - Product Details */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(product.rating)
                                                ? "text-yellow-400 fill-current"
                                                : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="font-montserrat text-sm text-brown-gray">
                                    {product.rating} ({product.reviews} reviews)
                                </span>
                            </div>

                            <p className="font-montserrat text-brown-gray mb-6 leading-relaxed whitespace-pre-line">
                                {product.description}
                            </p>

                            <div className="mb-6">
                                <h3 className="font-merriweather text-xl font-bold text-dark-gray mb-3">
                                    What's Included:
                                </h3>
                                <div className="space-y-2">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-light-gray rounded-full"></div>
                                            <span className="font-montserrat text-brown-gray">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-6 mb-6">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-light-gray" />
                                    <span className="font-montserrat text-sm text-brown-gray">
                                        {product.duration}
                                    </span>
                                </div>
                                <div className="bg-purple-gray text-white text-xs px-3 py-1 rounded-full font-montserrat">
                                    {product.category}
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="font-merriweather text-4xl font-bold text-dark-gray">
                                        ${product.price}
                                        {product.price === 0 && (
                                            <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-montserrat font-normal align-middle ml-3">
                                                Free
                                            </span>
                                        )}
                                    </span>
                                    {product.originalPrice !== 0 && (
                                        <>
                                            <span className="font-montserrat text-xl text-brown-gray line-through">
                                                ${product.originalPrice}
                                            </span>
                                            <div className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-montserrat">
                                                Save ${product.originalPrice - product.price}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                            <button
                                onClick={() => window.open(product.url, '_blank', 'noopener,noreferrer')}
                                className="w-full bg-light-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-4 px-6 rounded-md transition-all duration-300 hover:transform hover:scale-105 mb-4"
                            >
                                {product.id === 1 ? "REGISTER NOW" :
                                    product.id === 2 ? "DOWNLOAD NOW" :
                                        product.id === 3 ? "START NOW" :
                                            "BOOK NOW"}
                            </button>

                            <div className="text-center text-sm text-brown-gray">
                                {product.id === 1 && "Limited spots available for live sessions"}
                                {product.id === 2 && "Low-cost, low-pressure"}
                                {product.id === 3 && `Downloaded by ${product.reviews}+ professionals`}
                                {product.id === 4 && "Limited Availability"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HowToPivotPage;