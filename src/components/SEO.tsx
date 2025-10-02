import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const SEO = ({
  title = "RGSK Technologies Pvt. Ltd. - Digital Solutions & Web Development",
  description = "RGSK Technologies offers innovative web development, mobile apps, social media management, bulk SMS, voice calls, and WhatsApp services. Empowering digital growth in Lucknow.",
  keywords = "web development, mobile app development, digital marketing, bulk SMS, bulk WhatsApp, social media management, Lucknow, India",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  canonicalUrl = "https://rgsktechnologies.lovable.app",
}: SEOProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RGSK Technologies Pvt. Ltd.",
    url: canonicalUrl,
    logo: `${canonicalUrl}/logo.png`,
    description: description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "C-Block, Shivaji Market, near Eram College, Indira Nagar",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      postalCode: "226016",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7054466111",
      contactType: "customer service",
      email: "rgsktechnologies@gmail.com",
    },
    founder: {
      "@type": "Person",
      name: "Er. Awanish Kannaujia",
      jobTitle: "Founder & Director",
    },
    sameAs: [
      "https://facebook.com/rgsktechnologies",
      "https://twitter.com/rgsktechnologies",
      "https://instagram.com/rgsktechnologies",
      "https://linkedin.com/company/rgsktechnologies",
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};
