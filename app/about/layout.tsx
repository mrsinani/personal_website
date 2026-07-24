import type { Metadata } from "next";
import { profile, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `About ${profile.name}`,
  description: profile.bio,
  openGraph: {
    title: `About ${profile.name}`,
    description: profile.bio,
    url: `${SITE_URL}/about`,
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
