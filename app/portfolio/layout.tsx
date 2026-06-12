import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Portfolio | Danaid Sinani",
  description:
    "Websites and online tools built for businesses, clients, and shipped products by Danaid Sinani.",
  openGraph: {
    title: "Freelance Portfolio | Danaid Sinani",
    description:
      "Websites and online tools built for businesses, clients, and shipped products by Danaid Sinani.",
    url: "https://danaidsinani.com/portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
