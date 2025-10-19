import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
  type?: string
  publishedTime?: string
  modifiedTime?: string
}

export const SEO = ({
  title = 'RGSK Technologies Pvt. Ltd. - Digital Solutions & Web Development',
  description = 'RGSK Technologies offers innovative web development, mobile apps, social media management, bulk SMS, voice calls, and WhatsApp services. Empowering digital growth in Lucknow.',
  keywords = 'web development, mobile app development, digital marketing, bulk SMS, bulk WhatsApp, social media management, Lucknow, India',
  ogImage = 'https://rgsktechnologies.netlify.app/logo.png',
  canonicalUrl = 'https://rgsktechnologies.netlify.app',
  type = 'website',
  publishedTime,
  modifiedTime,
}: SEOProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RGSK Technologies Pvt. Ltd.',
    url: canonicalUrl,
    logo: `${canonicalUrl}/logo.png`,
    description: description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C-Block, Shivaji Market, near Eram College, Indira Nagar',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      postalCode: '226016',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-7054466111',
      contactType: 'customer service',
      email: 'rgsktechnologies@gmail.com',
    },
    founder: {
      '@type': 'Person',
      name: 'Er. Awanish Kannaujia',
      jobTitle: 'Founder & Director',
    },
    sameAs: [
      'https://facebook.com/rgsktechnologies',
      'https://twitter.com/rgsktechnologies',
      'https://instagram.com/rgsktechnologies',
      'https://linkedin.com/company/rgsktechnologies',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
    },
  }

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: canonicalUrl,
      },
    ],
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="RGSK Technologies" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@rgsktechnologies" />
      <meta name="twitter:creator" content="@rgsktechnologies" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
    </Helmet>
  )
}
