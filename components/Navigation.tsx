import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowRight, Menu, X } from 'lucide-react';
import { products } from '../data/products';
import { services } from '../data/services';
import { resources } from '../data/resources';

type MegaMenuKey = 'products' | 'services' | 'resources' | null;

const navItems = [
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products', megaMenu: 'products' as const },
    { href: '/services', label: 'Services', megaMenu: 'services' as const },
    { href: '/resources', label: 'Resources', megaMenu: 'resources' as const },
    { href: '/faqs', label: 'FAQs' },
];

const Navigation = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenuKey>(null);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const menuTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const bookNowUrl = 'https://tidycal.com/pivotfordancers/mentorship-1';

    const isActive = (href: string) => router.pathname.startsWith(href);
    const clearTimer = () => {
        if (menuTimer.current) {
            clearTimeout(menuTimer.current);
            menuTimer.current = null;
        }
    };

    const openMegaMenu = (menu: MegaMenuKey) => {
        clearTimer();
        setIsMegaMenuOpen(true);
        setActiveMegaMenu(menu);
    };

    const closeMegaMenu = () => {
        menuTimer.current = setTimeout(() => {
            setIsMegaMenuOpen(false);
            window.setTimeout(() => setActiveMegaMenu(null), 420);
        }, 180);
    };

    const megaMenuCards = {
        products: [
            {
                title: 'All Products',
                description: 'Browse every digital guide and course designed for dancers navigating career change.',
                href: '/products',
                meta: 'Overview',
            },
            ...products.map((product) => ({
                title: product.name,
                description: product.description,
                href: `/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`,
                meta: product.subtitle,
            })),
        ],
        services: [
            {
                title: 'All Services',
                description: 'See the personalised support options available for dancers who want direct guidance.',
                href: '/services',
                meta: 'Overview',
            },
            ...services.map((service) => ({
                title: service.name,
                description: service.description,
                href: `/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`,
                meta: service.subtitle,
            })),
        ],
        resources: [
            {
                title: 'All Resources',
                description: 'Explore the full library of free tools, stories, research, and guided support.',
                href: '/resources',
                meta: 'Overview',
            },
            ...resources.map((resource) => ({
                title: resource.title,
                description: resource.description,
                href: resource.url,
                meta: resource.duration,
            })),
        ],
    } as const;

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-black/8 bg-white/96 backdrop-blur-md">
            <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 sm:gap-8">
                    <Link href="/" className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-[2.5px] border-[#647C90]/20 bg-white p-[2px] shadow-[0_8px_18px_rgba(17,24,39,0.08)]">
                            <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-black/8 bg-[#E2DED0]">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Pivot For Dancers"
                                    fill
                                    sizes="44px"
                                    className="object-cover"
                                />
                            </span>
                        </span>
                        <span className="hidden text-[13px] font-semibold uppercase tracking-[0.22em] text-[#111827] md:inline-block">
                            Pivot For Dancers
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-7 lg:flex">
                        {navItems.map((item) => (
                            <div
                                key={item.href}
                                className="relative"
                                onMouseEnter={() => item.megaMenu && openMegaMenu(item.megaMenu)}
                                onMouseLeave={() => item.megaMenu && closeMegaMenu()}
                            >
                                <Link
                                    href={item.href}
                                    className="text-[15px] font-medium transition-colors"
                                    style={{ color: isActive(item.href) ? '#111827' : '#60636B' }}
                                >
                                    {item.label}
                                </Link>
                            </div>
                        ))}
                    </nav>
                </div>

                <div className="hidden lg:flex">
                    <a
                        href={bookNowUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#647C90] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#556c7f]"
                    >
                        Book support
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>

                <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 lg:hidden"
                    onClick={() => setOpen((value) => !value)}
                    aria-label={open ? 'Close navigation' : 'Open navigation'}
                >
                    {open ? <X className="h-5 w-5 text-[#111827]" /> : <Menu className="h-5 w-5 text-[#111827]" />}
                </button>
            </div>

            {activeMegaMenu && (
                <div
                    className="hidden border-t border-black/8 bg-white/98 shadow-[0_24px_60px_rgba(17,24,39,0.08)] transition-all duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:block"
                    onMouseEnter={clearTimer}
                    onMouseLeave={closeMegaMenu}
                    style={{
                        opacity: isMegaMenuOpen ? 1 : 0,
                        transform: isMegaMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                        visibility: isMegaMenuOpen ? 'visible' : 'hidden',
                    }}
                >
                    <div className="mx-auto max-w-[1280px] px-4 py-6 sm:px-6 lg:px-8">
                        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {megaMenuCards[activeMegaMenu].map((card) => (
                                <Link
                                    key={`${activeMegaMenu}-${card.title}`}
                                    href={card.href}
                                    className="group rounded-[28px] border border-black/8 bg-[#F5F6F2] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(17,24,39,0.06)]"
                                >
                                    <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                        {card.meta}
                                    </div>
                                    <div className="mt-3 text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#111827]">
                                        {card.title}
                                    </div>
                                    <p className="mt-3 text-[14px] leading-7 text-[#60636B]">
                                        {card.description}
                                    </p>
                                    <div className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#111827]">
                                        Explore
                                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {open && (
                <div className="border-t border-black/8 bg-white px-4 py-4 lg:hidden sm:px-6">
                    <nav className="flex flex-col gap-2">
                        <Link href="/" className="rounded-2xl px-4 py-3 text-sm font-medium text-[#111827]" onClick={() => setOpen(false)}>
                            Home
                        </Link>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-2xl px-4 py-3 text-sm font-medium"
                                style={{
                                    color: isActive(item.href) ? '#111827' : '#60636B',
                                    backgroundColor: isActive(item.href) ? 'rgba(17,24,39,0.04)' : 'transparent',
                                }}
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <a
                        href={bookNowUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#647C90] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#556c7f]"
                    >
                        Book support
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navigation;
