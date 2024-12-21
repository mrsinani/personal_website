"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Navigation() {
    const pathname = usePathname();

    // Helper function to determine if a link is active
    const isActive = (path: string) => pathname === path;

    return (
        <nav className="w-full backdrop-blur-sm fixed top-0 left-0">
            <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-black mb-4 sm:mb-0">
                    personal website
                </Link>
                <div className="flex space-x-8">
                    {/* Navigation links */}
                    {[
                        { href: '/about', label: 'ABOUT' },
                        { href: '/projects', label: 'PROJECTS' },
                        { href: '/stats', label: 'STATS' },
                        { href: '/contact', label: 'CONTACT' },
                    ].map(({ href, label }) => (
                        <Link 
                            key={href}
                            href={href}
                            className={cn(
                                "text-black/70 hover:text-black transition-colors",
                                isActive(href) && "text-black font-semibold"
                            )}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

