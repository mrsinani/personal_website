import type { Metadata } from "next";
import { profile, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Projects | ${profile.name}`,
  description: `Software and AI projects by ${profile.name}.`,
  openGraph: {
    title: `Projects | ${profile.name}`,
    description: `Software and AI projects by ${profile.name}.`,
    url: `${SITE_URL}/projects`,
  },
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
