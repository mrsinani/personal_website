import type { Metadata } from "next";
import { profile, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Stats | ${profile.name}`,
  description: `GitHub statistics for ${profile.name}.`,
  openGraph: {
    title: `Stats | ${profile.name}`,
    description: `GitHub statistics for ${profile.name}.`,
    url: `${SITE_URL}/stats`,
  },
  alternates: {
    canonical: `${SITE_URL}/stats`,
  },
};

export default function StatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
