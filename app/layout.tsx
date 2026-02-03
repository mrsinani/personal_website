import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "@/components/AuroraBackground";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danaid Sinani - Software Engineer",
  description:
    "Computer Science student at Boston University. Full-stack developer and ML engineer building production systems.",
  keywords: [
    "Danaid Sinani",
    "Software Engineer",
    "Full Stack Developer",
    "Machine Learning",
    "Boston University",
    "React",
    "Next.js",
    "Python",
  ],
  authors: [{ name: "Danaid Sinani" }],
  creator: "Danaid Sinani",
  icons: {
    icon: "/icon.jpeg",
    apple: "/icon.jpeg",
  },
  metadataBase: new URL("https://danaidsinani.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danaidsinani.com",
    siteName: "Danaid Sinani",
    title: "Danaid Sinani - Software Engineer",
    description:
      "Computer Science student at Boston University. Full-stack developer and ML engineer building production systems.",
    images: [
      {
        url: "/icon.jpeg",
        width: 400,
        height: 400,
        alt: "Danaid Sinani",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Danaid Sinani - Software Engineer",
    description:
      "Computer Science student at Boston University. Full-stack developer and ML engineer building production systems.",
    images: ["/icon.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
            <main className="container mx-auto px-4 py-8">{children}</main>
          </div>
        </AuroraBackground>
      </body>
    </html>
  );
}
