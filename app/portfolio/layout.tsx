import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Freelance Portfolio | Danaid Sinani",
  description:
    "Websites and online tools built for businesses, clients, and shipped products by Danaid Sinani.",
  openGraph: {
    title: "Freelance Portfolio | Danaid Sinani",
    description:
      "Websites and online tools built for businesses, clients, and shipped products by Danaid Sinani.",
    url: `${SITE_URL}/portfolio`,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
