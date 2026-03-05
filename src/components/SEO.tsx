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
  title = 'RGSK Technologies Pvt Ltd | Web Development & Digital Solutions in Lucknow',
  description = 'RGSK Technologies Pvt Ltd - Leading digital solutions company in Lucknow offering web development, mobile apps, bulk SMS, WhatsApp marketing, social media management & voice call services. Contact: +91-7054466111',
  keywords = 'RGSK Technologies, RGSK Technologies Pvt Ltd, web development Lucknow, mobile app development India, digital marketing agency, bulk SMS service, bulk WhatsApp marketing, social media management, voice call services, IT company Lucknow, software development company, best web development company Lucknow',
  ogImage = 'https://rgsktechnologies.in/og-image.jpg',
  canonicalUrl = 'https://rgsktechnologies.in',
  type = 'website',
  publishedTime,
  modifiedTime,
}: SEOProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RGSK Technologies Pvt Ltd',
    alternateName: ['RGSK Technologies', 'RGSK Tech', 'RGSK'],
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '26.8867',
      longitude: '80.9462',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-7054466111',
        contactType: 'customer service',
        email: 'rgsktechnologies@gmail.com',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-7054466111',
        contactType: 'sales',
        email: 'rgsktechnologies@gmail.com',
        areaServed: 'IN',
      },
    ],
    founder: {
      '@type': 'Person',
      name: 'Er. Awanish Kannaujia',
      jobTitle: 'Founder & Director',
    },
    foundingDate: '2020',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 50,
    },
    sameAs: [
      'https://facebook.com/rgsktech',
      'https://twitter.com/rgsktech',
      'https://instagram.com/rgsktech',
      'https://linkedin.com/company/rgsktech',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
            description: 'Custom website and web application development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            description: 'iOS and Android mobile application development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bulk SMS Services',
            description: 'Bulk SMS marketing and communication services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'WhatsApp Marketing',
            description: 'Bulk WhatsApp messaging and marketing solutions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media Management',
            description: 'Complete social media marketing and management',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Voice Call Services',
            description: 'Automated voice call and IVR solutions',
          },
        },
      ],
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    priceRange: '$$',
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

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${canonicalUrl}/#localbusiness`,
    name: 'RGSK Technologies Pvt Ltd',
    image: `${canonicalUrl}/og-image.jpg`,
    telephone: '+91-7054466111',
    email: 'rgsktechnologies@gmail.com',
    url: canonicalUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C-Block, Shivaji Market, near Eram College, Indira Nagar',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      postalCode: '226016',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.8867,
      longitude: 80.9462,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Lucknow',
        '@id': 'https://www.wikidata.org/wiki/Q48403',
      },
      {
        '@type': 'State',
        name: 'Uttar Pradesh',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 26.8867,
        longitude: 80.9462,
      },
      geoRadius: '50000',
    },
    hasMap: 'https://maps.google.com/?q=RGSK+Technologies+Lucknow',
    priceRange: '$$',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, UPI, Bank Transfer',
    slogan: 'Transform Your Digital Vision',
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RGSK Technologies Pvt Ltd',
    alternateName: 'RGSK Technologies',
    url: canonicalUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${canonicalUrl}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const servicesData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Website Development',
      description:
        'Custom, responsive websites built with modern technologies like React, Next.js, and TypeScript. Includes SEO optimization, fast loading speeds, and mobile-first design for businesses in Lucknow and across India.',
      provider: { '@type': 'Organization', name: 'RGSK Technologies Pvt Ltd', url: canonicalUrl },
      areaServed: { '@type': 'Country', name: 'India' },
      serviceType: 'Web Development',
      category: 'IT Services',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Responsive Website Design' },
          },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Development' } },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Web Application Development' },
          },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android. Built with React Native and Flutter for seamless user experiences.',
      provider: { '@type': 'Organization', name: 'RGSK Technologies Pvt Ltd', url: canonicalUrl },
      areaServed: { '@type': 'Country', name: 'India' },
      serviceType: 'Mobile App Development',
      category: 'IT Services',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Bulk SMS Services',
      description:
        'Reliable bulk SMS messaging with high delivery rates, real-time reports, and DLT-compliant templates for promotional and transactional messaging across India.',
      provider: { '@type': 'Organization', name: 'RGSK Technologies Pvt Ltd', url: canonicalUrl },
      areaServed: { '@type': 'Country', name: 'India' },
      serviceType: 'Bulk SMS Marketing',
      category: 'Digital Marketing',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Bulk WhatsApp Marketing',
      description:
        'Mass WhatsApp messaging solutions with rich media support, API integration, and instant delivery for customer engagement and promotional campaigns.',
      provider: { '@type': 'Organization', name: 'RGSK Technologies Pvt Ltd', url: canonicalUrl },
      areaServed: { '@type': 'Country', name: 'India' },
      serviceType: 'WhatsApp Marketing',
      category: 'Digital Marketing',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Social Media Management',
      description:
        'Complete social media marketing including content strategy, analytics, audience engagement, and paid advertising on Facebook, Instagram, LinkedIn, and Twitter.',
      provider: { '@type': 'Organization', name: 'RGSK Technologies Pvt Ltd', url: canonicalUrl },
      areaServed: { '@type': 'Country', name: 'India' },
      serviceType: 'Social Media Marketing',
      category: 'Digital Marketing',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Voice Call Services',
      description:
        'Automated bulk voice call and IVR solutions for customer outreach, surveys, reminders, and promotional campaigns with detailed call analytics.',
      provider: { '@type': 'Organization', name: 'RGSK Technologies Pvt Ltd', url: canonicalUrl },
      areaServed: { '@type': 'Country', name: 'India' },
      serviceType: 'Voice Call Marketing',
      category: 'Digital Marketing',
    },
  ]

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="RGSK Technologies Pvt Ltd" />
      <meta name="publisher" content="RGSK Technologies Pvt Ltd" />
      <meta name="copyright" content="RGSK Technologies Pvt Ltd" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Lucknow" />
      <meta name="geo.position" content="26.8867;80.9462" />
      <meta name="ICBM" content="26.8867, 80.9462" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="RGSK Technologies Pvt Ltd - Digital Solutions Company"
      />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="RGSK Technologies Pvt Ltd" />
      <meta property="og:locale" content="en_IN" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="RGSK Technologies Pvt Ltd" />
      <meta name="twitter:site" content="@rgsktechnologies" />
      <meta name="twitter:creator" content="@rgsktechnologies" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessData)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteData)}</script>
      {servicesData.map((service, index) => (
        <script key={`service-${index}`} type="application/ld+json">
          {JSON.stringify(service)}
        </script>
      ))}
    </Helmet>
  )
}
