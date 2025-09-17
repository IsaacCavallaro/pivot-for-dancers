import { useRouter } from 'next/router';
import Image from 'next/image';
import { products, Product } from '../../data/products';
import { Star, Clock, ArrowLeft } from 'lucide-react';
import ProductNavigation from '../../components/ProductNavigation';
import Footer from '../../components/Footer';

const ProductPage = () => {
    const router = useRouter();
    const { 'product-name': productName } = router.query;

    // Find the product based on the product name
    const product = products.find((p: Product) =>
        p.name.toLowerCase().replace(/ /g, '-') === productName
    );

    if (!product) {
        return (
            <div>
                <ProductNavigation />
                <div className="min-h-screen flex items-center justify-center bg-beige">
                    <div className="text-center">
                        <h1 className="text-4xl font-merriweather font-bold text-dark-gray mb-4">
                            Product Not Found
                        </h1>
                        <p className="text-lg text-brown-gray mb-8">
                            The product you're looking for doesn't exist.
                        </p>
                        <button
                            onClick={() => router.push('/')}
                            className="bg-light-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-2 px-6 rounded-md transition-all duration-300"
                        >
                            Go Back Home
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    const IconComponent = product.icon;

    return (
        <div>
            <ProductNavigation />
            <div className="min-h-screen bg-beige py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    {/* Back Button */}
                    <button
                        onClick={() => router.push('/#products')}
                        className="flex items-center gap-2 text-purple-gray hover:text-dark-gray font-montserrat font-semibold mb-8 transition-colors duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Products
                    </button>

                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Product Image */}
                            <div className="relative aspect-square bg-white flex items-center justify-center p-8">
                                <Image
                                    src={product.img}
                                    alt={product.name}
                                    width={400}
                                    height={400}
                                    className="max-w-full max-h-full object-contain"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                                    <IconComponent className="w-6 h-6 text-dark-gray" />
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="p-8">
                                <div className="mb-4">
                                    <p className="font-montserrat text-sm text-purple-gray font-semibold uppercase tracking-wide">
                                        {product.subtitle}
                                    </p>
                                    <h1 className="font-merriweather text-4xl font-bold text-dark-gray mb-4">
                                        {product.name}
                                    </h1>
                                </div>

                                {/* Rating */}
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

                                {/* Description */}
                                <p className="font-montserrat text-lg text-brown-gray mb-6 leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Features */}
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

                                {/* Duration & Category */}
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

                                {/* Pricing */}
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

                                {/* CTA Button */}
                                <button
                                    onClick={() => window.open(product.url, '_blank', 'noopener,noreferrer')}
                                    className="w-full bg-light-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-4 px-6 rounded-md transition-all duration-300 hover:transform hover:scale-105 mb-4"
                                >
                                    {product.id === 1 ? "REGISTER NOW" :
                                        product.id === 2 ? "DOWNLOAD NOW" :
                                            product.id === 3 ? "START NOW" :
                                                "BOOK NOW"}
                                </button>

                                {/* Additional Info */}
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
            </div>
            <Footer />
        </div>
    );
};

export default ProductPage;