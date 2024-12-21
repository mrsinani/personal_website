import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { AuroraBackground } from "@/components/AuroraBackground";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'Danaid Sinani - Personal Website',
    description: 'Computer Science student at Boston University, passionate about AI and software development.'
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AuroraBackground className="min-h-screen">
            <div className="w-full">
                <Navigation />
                <main className="container mx-auto px-4 py-8">
                    {children}
                </main>
            </div>
        </AuroraBackground>
        </body>
        </html>
    );
}

