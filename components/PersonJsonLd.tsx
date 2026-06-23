import { buildProfileJson } from "@/lib/site-data";

export default function PersonJsonLd() {
  const jsonLd = buildProfileJson(null);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
