/**
 * Injects JSON-LD structured data into the page <head>.
 * Used for rich search results and SEO enhancement.
 */
export default function JsonLd({
  data,
}: {
  data: Record<string, unknown>;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
}
