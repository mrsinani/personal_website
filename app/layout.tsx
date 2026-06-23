import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "@/components/AuroraBackground";
import Navigation from "@/components/Navigation";
import PersonJsonLd from "@/components/PersonJsonLd";
import { Analytics } from "@vercel/analytics/next";
import { profile, SITE_URL } from "@/lib/site-data";

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
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE_URL,
    types: {
      "text/plain": `${SITE_URL}/llms.txt`,
    },
  },
  other: {
    "ai-content": `${SITE_URL}/llms-full.txt`,
    "profile-json": `${SITE_URL}/profile.json`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="author" href={`${SITE_URL}/llms.txt`} type="text/plain" />
        <link
          rel="alternate"
          type="text/plain"
          href={`${SITE_URL}/llms-full.txt`}
          title={`${profile.name} — complete site content`}
        />
        <link
          rel="alternate"
          type="application/json"
          href={`${SITE_URL}/profile.json`}
          title={`${profile.name} profile`}
        />
      </head>
      <body className={inter.className}>
        <PersonJsonLd />
        <AuroraBackground className="min-h-screen">
          <div className="w-full">
            <Navigation />
            <main className="container mx-auto px-4">{children}</main>
          </div>
        </AuroraBackground>
        <Analytics />
      </body>
    </html>
  );
}
