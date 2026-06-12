import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Portfolio",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
