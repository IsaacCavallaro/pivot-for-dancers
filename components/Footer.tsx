import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const socialLinks = [
        { href: 'https://www.linkedin.com/company/pivotfordancers/', icon: Linkedin, label: 'LinkedIn' },
        { href: 'https://www.youtube.com/@pivotfordancers', icon: Youtube, label: 'YouTube' },
        { href: 'https://www.instagram.com/pivotfordancers/', icon: Instagram, label: 'Instagram' },
        { href: 'https://www.facebook.com/pivotfordancers/', icon: Facebook, label: 'Facebook' },
    ];

    const handleSubmit = async () => {
        const trimmedEmail = email.trim();
        if (!trimmedEmail) return;

        setStatus('loading');
        try {
            const response = await fetch('https://stats.sender.net/forms/aKrmkz/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: trimmedEmail }),
            });

            if (!response.ok) throw new Error('Subscription failed');
            setStatus('success');
            setEmail('');
        } catch {
            setStatus('error');
        }
    };

    return (
        <footer className="border-t border-black/8 bg-white">
            <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8">
                <div className="grid gap-10 border-b border-black/8 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                    <div>
                        <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#7A7D86]">
                            Stay connected
                        </div>
                        <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight text-[#111827] md:text-5xl">
                            Start free with Pivot Paths, then move deeper into the Pivot for Dancers ecosystem.
                        </h2>
                        <p className="mt-5 max-w-xl text-lg leading-8 text-[#60636B]">
                            Join for free tools, real stories, and updates on the products and services helping dancers build what comes next.
                        </p>
                    </div>

                    <div className="rounded-[32px] border border-black/10 bg-[#F5F6F2] p-6 md:p-8">
                        <label className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#7A7D86]">
                            Email address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                                if (status !== 'idle') setStatus('idle');
                            }}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') handleSubmit();
                            }}
                            placeholder="Enter your email"
                            className="mt-3 w-full rounded-[20px] border border-black/10 bg-white px-4 py-4 text-base outline-none"
                        />
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#111827] px-5 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white"
                        >
                            {status === 'loading' ? 'Joining...' : 'Join the community'}
                            <ArrowRight className="h-4 w-4" />
                        </button>
                        {status === 'success' && (
                            <p className="mt-4 text-sm font-medium text-[#647C90]">
                                You are in. Check your inbox for confirmation.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="mt-4 text-sm font-medium text-red-500">
                                There was an issue submitting your email. Please try again.
                            </p>
                        )}
                    </div>
                </div>

                <div className="grid gap-10 pt-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
                    <div>
                        <img src="/assets/logo.png" alt="Pivot For Dancers" className="h-12 w-auto" />
                        <p className="mt-5 max-w-sm text-sm leading-7 text-[#60636B]">
                            Career change resources for professional dancers, built to support the identity shift, practical decisions, and emotional reality of life beyond the stage.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#7A7D86]">Explore</h3>
                        <div className="mt-4 flex flex-col gap-3 text-[15px] text-[#111827]">
                            <Link href="/products">Products</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/resources">Resources</Link>
                            <Link href="/resources/pivot-paths">Pivot Paths</Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#7A7D86]">Company</h3>
                        <div className="mt-4 flex flex-col gap-3 text-[15px] text-[#111827]">
                            <Link href="/about">About</Link>
                            <Link href="/faqs">FAQs</Link>
                            <a href="mailto:pivotfordancers@gmail.com">pivotfordancers@gmail.com</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#7A7D86]">Follow</h3>
                        <div className="mt-4 flex gap-3">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.label}
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[#F5F6F2]"
                                >
                                    <item.icon className="h-5 w-5 text-[#111827]" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
