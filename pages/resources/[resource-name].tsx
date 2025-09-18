import { useRouter } from 'next/router';
import Image from 'next/image';
import { resources, Resource } from '../../data/resources';
import { Clock, ArrowLeft } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import DataSection from '../../components/Data';
import Quiz from '../../components/Quiz';

const ResourcePage = () => {
    const router = useRouter();
    const { 'resource-name': resourceName } = router.query;

    // Find the resource based on the resource name
    const resource = resources.find((r: Resource) =>
        r.title.toLowerCase().replace(/ /g, '-') === resourceName
    );

    if (!resource) {
        return (
            <div>
                <Navigation />
                <div className="min-h-screen flex items-center justify-center bg-beige">
                    <div className="text-center">
                        <h1 className="text-4xl font-merriweather font-bold text-dark-gray mb-4">
                            Resource Not Found
                        </h1>
                        <p className="text-lg text-brown-gray mb-8">
                            The resource you're looking for doesn't exist.
                        </p>
                        <button
                            onClick={() => router.push('/resources')}
                            className="bg-light-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-2 px-6 rounded-md transition-all duration-300"
                        >
                            Go Back to Resources
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    if (resource.title === 'Expectations vs Reality') {
        return (
            <div>
                <Navigation />
                <DataSection />
                <Footer />
            </div>
        );
    }

    if (resource.title === 'Discover Your Pivot Personality') {
        return (
            <div>
                <Navigation />
                <Quiz />
                <Footer />
            </div>
        );
    }

    const IconComponent = resource.icon;

    return (
        <div>
            <Navigation />
            <div className="min-h-screen bg-beige py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    {/* Back Button */}
                    <button
                        onClick={() => router.push('/resources')}
                        className="flex items-center gap-2 text-purple-gray hover:text-dark-gray font-montserrat font-semibold mb-8 transition-colors duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Resources
                    </button>

                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Resource Image */}
                            <div className="relative aspect-square bg-white flex items-center justify-center p-8">
                                <Image
                                    src={resource.image}
                                    alt={resource.title}
                                    width={400}
                                    height={400}
                                    className="max-w-full max-h-full object-contain"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                                    <IconComponent className="w-6 h-6 text-dark-gray" />
                                </div>
                            </div>

                            {/* Resource Details */}
                            <div className="p-8">
                                <div className="mb-4">
                                    <h1 className="font-merriweather text-4xl font-bold text-dark-gray mb-4">
                                        {resource.title}
                                    </h1>
                                </div>

                                {/* Description */}
                                <p className="font-montserrat text-lg text-brown-gray mb-6 leading-relaxed">
                                    {resource.description}
                                </p>

                                {/* Features */}
                                <div className="mb-6">
                                    <h3 className="font-merriweather text-xl font-bold text-dark-gray mb-3">
                                        Features:
                                    </h3>
                                    <div className="space-y-2">
                                        {resource.features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-light-gray rounded-full"></div>
                                                <span className="font-montserrat text-brown-gray">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Duration */}
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-light-gray" />
                                        <span className="font-montserrat text-sm text-brown-gray">
                                            {resource.duration}
                                        </span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <a
                                    href={resource.link}
                                    className="w-full block text-center bg-light-gray hover:bg-purple-gray text-white font-montserrat font-semibold py-4 px-6 rounded-md transition-all duration-300 hover:transform hover:scale-105 mb-4"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ResourcePage;