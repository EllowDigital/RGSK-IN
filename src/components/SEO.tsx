import { Helmet } from 'react-helmet-async'
import { servicesData as serviceCatalog } from '@/data/services'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
  type?: string
  publishedTime?: string
  modifiedTime?: string
  structuredData?: Array<Record<string, unknown>>
  includeServiceSchemas?: boolean
  includeBreadcrumbSchema?: boolean
}

const SITE_URL = 'https://rgsktechnologies.in'
const BUSINESS_NAME = 'RGSK Technologies Pvt Ltd'
const BUSINESS_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'C-Block, Shivaji Market, near Eram College, Indira Nagar',
  addressLocality: 'Lucknow',
  addressRegion: 'Uttar Pradesh',
  postalCode: '226016',
  addressCountry: 'IN',
} as const

export const SEO = ({
  title = 'RGSK Technologies Pvt Ltd | Web Development & Digital Solutions in Lucknow',
  description = 'RGSK Technologies Pvt Ltd - Leading digital solutions company in Lucknow offering web development, mobile apps, bulk SMS, WhatsApp marketing, social media management & voice call services. Contact: +91-7054466111',
  keywords = 'RGSK Technologies, RGSK Technologies Pvt Ltd, web development Lucknow, mobile app development India, digital marketing agency, bulk SMS service, bulk WhatsApp marketing, social media management, voice call services, IT company Lucknow, software development company, best web development company Lucknow',
  ogImage = `${SITE_URL}/og-image.jpg`,
  canonicalUrl = SITE_URL,
  type = 'website',
  publishedTime,
  modifiedTime,
  structuredData = [],
  includeServiceSchemas,
  includeBreadcrumbSchema,
}: SEOProps) => {
  const shouldIncludeServiceSchemas = includeServiceSchemas ?? canonicalUrl === SITE_URL
  const shouldIncludeBreadcrumbSchema = includeBreadcrumbSchema ?? canonicalUrl === SITE_URL

  const organizationData = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'RGSK Technologies Pvt Ltd',
    alternateName: ['RGSK Technologies', 'RGSK Tech', 'RGSK'],
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: ogImage,
    description,
    email: 'rgsktechnologies@gmail.com',
    telephone: '+91-7054466111',
    address: BUSINESS_ADDRESS,
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
    sameAs: [
      'https://facebook.com/rgsktech',
      'https://twitter.com/rgsktech',
      'https://instagram.com/rgsktech',
      'https://linkedin.com/company/rgsktech',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Services',
      itemListElement: serviceCatalog.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          url: `${SITE_URL}/services/${service.slug}`,
        },
      })),
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    priceRange: '$$',
  }

  const breadcrumbData = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
    ],
  }

  const localBusinessData = {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: BUSINESS_NAME,
    image: ogImage,
    telephone: '+91-7054466111',
    email: 'rgsktechnologies@gmail.com',
    url: SITE_URL,
    address: BUSINESS_ADDRESS,
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
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: BUSINESS_NAME,
    alternateName: 'RGSK Technologies',
    url: SITE_URL,
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'en-IN',
  }

  const pageData = {
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    description,
    inLanguage: 'en-IN',
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/#organization`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: ogImage,
    },
  }

  const serviceSchemas = serviceCatalog.map((service) => ({
      '@type': 'Service',
      '@id': `${SITE_URL}/services/${service.slug}#service`,
      name: service.title,
      description: service.longDescription,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: { '@type': 'Country', name: 'India' },
      serviceType: service.title,
      category: 'Digital Services',
      url: `${SITE_URL}/services/${service.slug}`,
    }))

  const defaultStructuredData = [
    organizationData,
    localBusinessData,
    websiteData,
    pageData,
    ...(shouldIncludeBreadcrumbSchema ? [breadcrumbData] : []),
    ...(shouldIncludeServiceSchemas ? serviceSchemas : []),
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
      <meta property="og:image:secure_url" content={ogImage} />
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
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="RGSK Technologies Pvt Ltd" />
      <meta name="twitter:site" content="@rgsktechnologies" />
      <meta name="twitter:creator" content="@rgsktechnologies" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({ '@context': 'https://schema.org', '@graph': defaultStructuredData })}
      </script>
      {structuredData.map((schema, index) => (
        <script key={`structured-data-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
