import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { products } from '../data/products';
import { services } from '../data/services';
import { resources } from '../data/resources';

interface NavbarProps {
    // Define any props if needed
}

type MegaMenuType = 'products' | 'services' | 'resources' | null;

const Navbar: React.FC<NavbarProps> = () => {
    const [open, setOpen] = useState(false);
    const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenuType>(null);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const router = useRouter();

    // Hover close delay timer
    const menuTimer = useRef<NodeJS.Timeout | null>(null);

    const clearTimer = () => {
        if (menuTimer.current) {
            clearTimeout(menuTimer.current);
            menuTimer.current = null;
        }
    };

    const handleMegaMenuEnter = (type: MegaMenuType) => {
        clearTimer();
        setActiveMegaMenu(type);
        setIsMegaMenuOpen(true);
    };

    const handleMegaMenuLeave = () => {
        menuTimer.current = setTimeout(() => {
            setIsMegaMenuOpen(false);
            setActiveMegaMenu(null);
        }, 300);
    };

    const handleToggle = () => {
        setOpen(!open);
    };

    const BASE_PATH = process.env.PUBLIC_URL || "";
    const bookNowUrl = 'https://tidycal.com/pivotfordancers/mentorship-1';
    const joinUsClassNameDesktop = 'text-sm px-4 py-2 rounded-full bg-purple-gray text-white opacity-80 hover:opacity-100 hover:bg-purple-gray';
    const bookNowClassNameMobile = 'text-2xl text-white bg-purple-gray px-4 py-2 rounded-full opacity-80 hover:opacity-100 hover:bg-purple-gray';
    const exitHamburgerClassName = 'absolute top-4 right-4 text-gray-200 dark:text-gray-300 focus:outline-none';

    return (
        <section className="bg-dark-gray max-device-width">
            <div className="max-w-6xl px-4 mx-auto">
                <nav className="fixed top-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 py-4 z-50">
                    <div className="max-w-7xl mx-auto flex items-center justify-between relative">
                        <Link href="/" legacyBehavior>
                            <a className="block pl-4 md:pl-6">
                                <img src={`${BASE_PATH}/assets/logo.png`} alt="Logo" className="h-8" />
                            </a>
                        </Link>

                        {/* Desktop Navigation Links */}
                        <ul className="hidden lg:flex lg:space-x-8 lg:items-center">
                            <li>
                                <Link href="/" legacyBehavior>
                                    <a className={`text-sm ${router.pathname === '/' ? 'tan-300' : 'text-gray-200 dark:text-gray-300'} hover:text-light-gray transition-colors duration-200`}>
                                        HOME
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" legacyBehavior>
                                    <a className={`text-sm ${router.pathname === '/about' ? 'tan-300' : 'text-gray-200 dark:text-gray-300'} hover:text-light-gray transition-colors duration-200`}>
                                        ABOUT
                                    </a>
                                </Link>
                            </li>
                            <li
                                className="relative"
                                onMouseEnter={() => handleMegaMenuEnter('products')}
                                onMouseLeave={handleMegaMenuLeave}
                            >
                                <Link href="/products" legacyBehavior>
                                    <a className={`text-sm ${router.pathname.startsWith('/products') ? 'tan-300' : 'text-gray-200 dark:text-gray-300'} hover:text-light-gray transition-colors duration-200`}>
                                        PRODUCTS
                                    </a>
                                </Link>
                            </li>
                            <li
                                className="relative"
                                onMouseEnter={() => handleMegaMenuEnter('services')}
                                onMouseLeave={handleMegaMenuLeave}
                            >
                                <Link href="/services" legacyBehavior>
                                    <a className={`text-sm ${router.pathname.startsWith('/services') ? 'tan-300' : 'text-gray-200 dark:text-gray-300'} hover:text-light-gray transition-colors duration-200`}>
                                        SERVICES
                                    </a>
                                </Link>
                            </li>
                            <li
                                className="relative"
                                onMouseEnter={() => handleMegaMenuEnter('resources')}
                                onMouseLeave={handleMegaMenuLeave}
                            >
                                <Link href="/resources" legacyBehavior>
                                    <a className={`text-sm ${router.pathname.startsWith('/resources') ? 'tan-300' : 'text-gray-200 dark:text-gray-300'} hover:text-light-gray transition-colors duration-200`}>
                                        RESOURCES
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/faqs" legacyBehavior>
                                    <a className={`text-sm ${router.pathname.startsWith('/faqs') ? 'tan-300' : 'text-gray-200 dark:text-gray-300'} hover:text-light-gray transition-colors duration-200`}>
                                        FAQS
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <a
                                    href={bookNowUrl}
                                    className={`${joinUsClassNameDesktop} transition-all duration-200`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    BOOK NOW
                                </a>
                            </li>
                        </ul>

                        {/* Mobile Hamburger Button */}
                        <div className="lg:hidden flex items-center justify-end w-full pr-4 md:pr-6">
                            <button
                                className="text-gray-200 dark:text-gray-300 focus:outline-none transition-transform duration-200 hover:scale-110"
                                onClick={handleToggle}
                            >
                                <svg
                                    className="w-6 h-6 fill-current"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Shared Mega Menu */}
                    <div
                        className={`hidden lg:block absolute left-0 right-0 top-full bg-gray-100 dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700 transition-all duration-500 ease-in-out transform ${isMegaMenuOpen
                            ? 'opacity-100 translate-y-0 visible'
                            : 'opacity-0 -translate-y-4 invisible'
                            }`}
                        onMouseEnter={clearTimer}
                        onMouseLeave={handleMegaMenuLeave}
                        style={{
                            transitionProperty: 'opacity, transform, visibility',
                            transitionDuration: '300ms',
                            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    >
                        {/* Products Mega Menu Content */}
                        {activeMegaMenu === 'products' && (
                            <div className="max-w-7xl mx-auto py-8 px-6 transition-opacity duration-500 ease-in-out">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* All Products Card */}
                                    <div className="group h-full">
                                        <Link href="/products" legacyBehavior>
                                            <a className="flex flex-col h-48 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm transition-all duration-500 ease-in-out border border-gray-200 dark:border-gray-600 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1"
                                                style={{
                                                    '--hover-bg': '#E2DED0',
                                                    '--hover-shadow': '0 20px 25px -5px rgba(146, 132, 144, 0.3), 0 10px 10px -5px rgba(146, 132, 144, 0.1)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.backgroundColor = '#E2DED0';
                                                    e.currentTarget.style.borderColor = '#928490';
                                                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(146, 132, 144, 0.3), 0 10px 10px -5px rgba(146, 132, 144, 0.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.backgroundColor = '';
                                                    e.currentTarget.style.borderColor = '';
                                                    e.currentTarget.style.boxShadow = '';
                                                }}
                                            >
                                                <div className="flex items-start mb-3">
                                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-500" style={{ backgroundColor: 'rgba(146, 132, 144, 0.1)' }}>
                                                        <svg className="w-5 h-5 transition-all duration-500" style={{ color: '#928490' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                        </svg>
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-black transition-colors duration-500">
                                                        All Products
                                                    </h3>
                                                </div>
                                                <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 group-hover:text-black dark:group-hover:text-black transition-colors duration-500">
                                                    Browse our dancer-specific career change products
                                                </p>
                                            </a>
                                        </Link>
                                    </div>

                                    {/* Individual Product Cards */}
                                    {products.map((product) => (
                                        <div key={product.id} className="group h-full">
                                            <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`} legacyBehavior>
                                                <a className="flex flex-col h-48 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm transition-all duration-500 ease-in-out border border-gray-200 dark:border-gray-600 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1"
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#E2DED0';
                                                        e.currentTarget.style.borderColor = '#928490';
                                                        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(146, 132, 144, 0.3), 0 10px 10px -5px rgba(146, 132, 144, 0.1)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.backgroundColor = '';
                                                        e.currentTarget.style.borderColor = '';
                                                        e.currentTarget.style.boxShadow = '';
                                                    }}
                                                >
                                                    <div className="flex items-start mb-3">
                                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-500 group-hover:scale-110" style={{ backgroundColor: 'rgba(146, 132, 144, 0.1)' }}>
                                                            {product.subtitle === 'EBOOK' ? (
                                                                <svg className="w-5 h-5 transition-all duration-500" style={{ color: '#928490' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                                </svg>
                                                            ) : (
                                                                <svg className="w-5 h-5 transition-all duration-500" style={{ color: '#928490' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center justify-between mb-2">
                                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-black transition-colors duration-500">
                                                                    {product.name}
                                                                </h3>
                                                                <span className="inline-block px-2 py-1 text-xs font-medium rounded-full ml-2 flex-shrink-0 transition-all duration-500 group-hover:scale-105" style={{ backgroundColor: 'rgba(146, 132, 144, 0.1)', color: '#928490' }}>
                                                                    {product.subtitle === 'EBOOK' ? 'Ebook' : 'Mini Course'}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 group-hover:text-black dark:group-hover:text-black transition-colors duration-500">
                                                        {product.subtitle === 'EBOOK'
                                                            ? 'Comprehensive guide to help you on your journey'
                                                            : 'Interactive course with practical lessons and exercises'
                                                        }
                                                    </p>
                                                </a>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Services Mega Menu Content */}
                        {activeMegaMenu === 'services' && (
                            <div className="max-w-7xl mx-auto py-8 px-6 transition-opacity duration-500 ease-in-out">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* All Services Card */}
                                    <div className="group h-full">
                                        <Link href="/services" legacyBehavior>
                                            <a className="flex flex-col h-48 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm transition-all duration-500 ease-in-out border border-gray-200 dark:border-gray-600 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1"
                                                style={{
                                                    '--hover-bg': '#E2DED0',
                                                    '--hover-shadow': '0 20px 25px -5px rgba(146, 132, 144, 0.3), 0 10px 10px -5px rgba(146, 132, 144, 0.1)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.backgroundColor = '#E2DED0';
                                                    e.currentTarget.style.borderColor = '#928490';
                                                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(146, 132, 144, 0.3), 0 10px 10px -5px rgba(146, 132, 144, 0.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.backgroundColor = '';
                                                    e.currentTarget.style.borderColor = '';
                                                    e.currentTarget.style.boxShadow = '';
                                                }}
                                            >
                                                <div className="flex items-start mb-3">
                                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-500" style={{ backgroundColor: 'rgba(146, 132, 144, 0.1)' }}>
                                                        <svg className="w-5 h-5 transition-all duration-500" style={{ color: '#928490' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                        </svg>
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-black transition-colors duration-500">
                                                        All Services
                                                    </h3>
                                                </div>
                                                <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 group-hover:text-black dark:group-hover:text-black transition-colors duration-500">
                                                    Explore our personalized career services for dancers.
                                                </p>
                                            </a>
                                        </Link>
                                    </div>

                                    {/* Individual Service Cards */}
                                    {services.map((service) => (
                                        <div key={service.id} className="group h-full">
                                            <Link href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`} legacyBehavior>
                                                <a className="flex flex-col h-48 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm transition-all duration-500 ease-in-out border border-gray-200 dark:border-gray-600 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1"
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#E2DED0';
                                                        e.currentTarget.style.borderColor = '#928490';
                                                        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(146, 132, 144, 0.3), 0 10px 10px -5px rgba(146, 132, 144, 0.1)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.backgroundColor = '';
                                                        e.currentTarget.style.borderColor = '';
                                                        e.currentTarget.style.boxShadow = '';
                                                    }}
                                                >
                                                    <div className="flex items-start mb-3">
                                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-500 group-hover:scale-110" style={{ backgroundColor: 'rgba(146, 132, 144, 0.1)' }}>
                                                            <service.icon className="w-5 h-5 transition-all duration-500" style={{ color: '#928490' }} />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center justify-between mb-2">
                                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-black transition-colors duration-500">
                                                                    {service.name}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 group-hover:text-black dark:group-hover:text-black transition-colors duration-500">
                                                        {service.description}
                                                    </p>
                                                </a>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Resources Mega Menu Content */}
                        {activeMegaMenu === 'resources' && (
                            <div className="max-w-7xl mx-auto py-8 px-6 transition-opacity duration-500 ease-in-out">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* All Resources Card */}
                                    <div className="group h-full">
                                        <Link href="/resources" legacyBehavior>
                                            <a
                                                className="flex flex-col h-48 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm transition-all duration-500 ease-in-out border border-gray-200 dark:border-gray-600 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1"
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.backgroundColor = '#E2DED0';
                                                    e.currentTarget.style.borderColor = '#928490';
                                                    e.currentTarget.style.boxShadow =
                                                        '0 20px 25px -5px rgba(146, 132, 144, 0.3), 0 10px 10px -5px rgba(146, 132, 144, 0.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.backgroundColor = '';
                                                    e.currentTarget.style.borderColor = '';
                                                    e.currentTarget.style.boxShadow = '';
                                                }}
                                            >
                                                <div className="flex items-start mb-3">
                                                    <div
                                                        className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-500"
                                                        style={{ backgroundColor: 'rgba(146, 132, 144, 0.1)' }}
                                                    >
                                                        <svg
                                                            className="w-5 h-5 transition-all duration-500"
                                                            style={{ color: '#928490' }}
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-black transition-colors duration-500">
                                                        All Resources
                                                    </h3>
                                                </div>
                                                <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 group-hover:text-black dark:group-hover:text-black transition-colors duration-500">
                                                    Discover helpful articles, guides, and tools.
                                                </p>
                                            </a>
                                        </Link>
                                    </div>

                                    {/* Individual Resource Cards */}
                                    {resources.map((resource) => (
                                        <div key={resource.id} className="group h-full">
                                            <Link
                                                href={`/resources/${(resource.name || resource.title)
                                                    .toLowerCase()
                                                    .replace(/\s+/g, '-')}`}
                                                legacyBehavior
                                            >
                                                <a
                                                    className="flex flex-col h-48 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm transition-all duration-500 ease-in-out border border-gray-200 dark:border-gray-600 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1"
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#E2DED0';
                                                        e.currentTarget.style.borderColor = '#928490';
                                                        e.currentTarget.style.boxShadow =
                                                            '0 20px 25px -5px rgba(146, 132, 144, 0.3), 0 10px 10px -5px rgba(146, 132, 144, 0.1)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.backgroundColor = '';
                                                        e.currentTarget.style.borderColor = '';
                                                        e.currentTarget.style.boxShadow = '';
                                                    }}
                                                >
                                                    <div className="flex items-start mb-3">
                                                        <div
                                                            className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-500 group-hover:scale-110"
                                                            style={{ backgroundColor: 'rgba(146, 132, 144, 0.1)' }}
                                                        >
                                                            {resource.icon && (
                                                                <resource.icon
                                                                    className="w-5 h-5 transition-all duration-500"
                                                                    style={{ color: '#928490' }}
                                                                />
                                                            )}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center justify-between mb-2">
                                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-black transition-colors duration-500">
                                                                    {resource.name || resource.title}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 group-hover:text-black dark:group-hover:text-black transition-colors duration-500">
                                                        {resource.description || 'Learn more about this resource.'}
                                                    </p>
                                                </a>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Mobile Sidebar Menu */}
                    <div
                        className={`lg:hidden fixed inset-0 z-40 bg-gray-900 bg-opacity-90 transition-all duration-500 ease-in-out ${open ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'}`}
                    >
                        <div className="flex flex-col justify-center items-center h-full">
                            <ul className="space-y-6 text-center w-full">
                                <li>
                                    <Link href="/" legacyBehavior>
                                        <a className={`text-2xl ${router.pathname === '/' ? 'tan-300' : 'text-gray-200 dark:text-gray-300'} hover:text-light-gray transition-colors duration-200`} onClick={() => setOpen(false)}>
                                            HOME
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" legacyBehavior>
                                        <a className={`text-2xl ${router.pathname === '/about' ? 'tan-300' : 'text-gray-200 dark:text-gray-300'} hover:text-light-gray transition-colors duration-200`} onClick={() => setOpen(false)}>
                                            ABOUT
                                        </a>
                                    </Link>
                                </li>
                                <li className="w-full flex flex-col items-center">
                                    <button
                                        className={`text-2xl ${router.pathname.startsWith('/products') ? 'tan-300' : 'text-gray-200 dark:text-gray-300'} hover:text-light-gray transition-colors duration-200`}
                                        onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                                    >
                                        PRODUCTS
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobileProductsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} w-full`}>
                                        <ul className="mt-4 space-y-3">
                                            <li>
                                                <Link href="/products" legacyBehavior>
                                                    <a className="text-xl text-gray-200 dark:text-gray-300 hover:text-light-gray transition-colors duration-200" onClick={() => setOpen(false)}>
                                                        All Products
                                                    </a>
                                                </Link>
                                            </li>
                                            {products.map((product) => (
                                                <li key={product.id}>
                                                    <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`} legacyBehavior>
                                                        <a className="text-xl text-gray-200 dark:text-gray-300 hover:text-light-gray transition-colors duration-200" onClick={() => setOpen(false)}>{`${product.name} - ${product.subtitle === 'EBOOK' ? 'Ebook' : 'Mini Course'}`}</a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                                <li className="w-full flex flex-col items-center">
                                    <button
                                        className={`text-2xl ${router.pathname.startsWith('/services') ? 'tan-300' : 'text-gray-200 dark:text-gray-300'} hover:text-light-gray transition-colors duration-200`}
                                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                    >
                                        SERVICES
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} w-full`}>
                                        <ul className="mt-4 space-y-3">
                                            <li>
                                                <Link href="/services" legacyBehavior>
                                                    <a className="text-xl text-gray-200 dark:text-gray-300 hover:text-light-gray transition-colors duration-200" onClick={() => setOpen(false)}>
                                                        All Services
                                                    </a>
                                                </Link>
                                            </li>
                                            {services.map((service) => (
                                                <li key={service.id}>
                                                    <Link href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`} legacyBehavior>
                                                        <a className="text-xl text-gray-200 dark:text-gray-300 hover:text-light-gray transition-colors duration-200" onClick={() => setOpen(false)}>{service.name}</a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                                <li className="w-full flex flex-col items-center">
                                    <button
                                        className={`text-2xl ${router.pathname.startsWith('/resources') ? 'tan-300' : 'text-gray-200 dark:text-gray-300'} hover:text-light-gray transition-colors duration-200`}
                                        onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                                    >
                                        RESOURCES
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobileResourcesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} w-full`}>
                                        <ul className="mt-4 space-y-3">
                                            <li>
                                                <Link href="/resources" legacyBehavior>
                                                    <a className="text-xl text-gray-200 dark:text-gray-300 hover:text-light-gray transition-colors duration-200" onClick={() => setOpen(false)}>
                                                        All Resources
                                                    </a>
                                                </Link>
                                            </li>
                                            {resources.map((resource) => (
                                                <li key={resource.id}>
                                                    <Link
                                                        href={`/resources/${(resource.name || resource.title)
                                                            .toLowerCase()
                                                            .replace(/\s+/g, '-')}`}
                                                        legacyBehavior
                                                    >
                                                        <a className="text-xl text-gray-200 dark:text-gray-300 hover:text-light-gray transition-colors duration-200" onClick={() => setOpen(false)}>
                                                            {resource.name || resource.title}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link href="/faqs" legacyBehavior>
                                        <a className={`text-2xl ${router.pathname.startsWith('/faqs') ? 'tan-300' : 'text-gray-200 dark:text-gray-300'} hover:text-light-gray transition-colors duration-200`} onClick={() => setOpen(false)}>
                                            FAQS
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href={bookNowUrl}
                                        className={`${bookNowClassNameMobile} transition-all duration-200 hover:scale-105`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        BOOK NOW
                                    </a>
                                </li>
                            </ul>
                            <button
                                className={`${exitHamburgerClassName} transition-transform duration-200 hover:scale-110`}
                                onClick={handleToggle}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;