import type { Metadata } from "next";
import { profile, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Contact ${profile.name}`,
  description: `Contact ${profile.name}. Email: ${profile.email}. Phone: ${profile.phone}.`,
  openGraph: {
    title: `Contact ${profile.name}`,
    description: `Email: ${profile.email}. Phone: ${profile.phone}.`,
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
