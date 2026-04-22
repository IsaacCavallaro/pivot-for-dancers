import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowRight, Menu, X } from 'lucide-react';

const navItems = [
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/resources', label: 'Resources' },
    { href: '/faqs', label: 'FAQs' },
];

const Navigation = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const bookNowUrl = 'https://tidycal.com/pivotfordancers/mentorship-1';

    const isActive = (href: string) => router.pathname.startsWith(href);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-black/8 bg-white/96 backdrop-blur-md">
            <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-3">
                        <img src="/assets/logo.png" alt="Pivot For Dancers" className="h-10 w-auto" />
                        <span className="hidden text-[13px] font-semibold uppercase tracking-[0.22em] text-[#111827] md:inline-block">
                            Pivot For Dancers
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-7 lg:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-[15px] font-medium transition-colors"
                                style={{ color: isActive(item.href) ? '#111827' : '#60636B' }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="hidden lg:flex">
                    <a
                        href={bookNowUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:opacity-92"
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
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white"
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
