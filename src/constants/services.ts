import { Globe, Smartphone, Share2, Phone, MessageCircle, Megaphone } from 'lucide-react'

export interface ServiceData {
  slug: string
  icon: typeof Globe
  title: string
  shortTitle: string
  description: string
  longDescription: string
  features: string[]
  benefits: string[]
  gradient: string
  keywords: string
}

export const servicesData: ServiceData[] = [
  {
    slug: 'website-development',
    icon: Globe,
    title: 'Website Development',
    shortTitle: 'Web Dev',
    description:
      'Custom, responsive websites built with modern technologies to establish your online presence.',
    longDescription:
      'We build high-performance, SEO-optimized websites using React, Next.js, and TypeScript. From corporate sites to e-commerce platforms, our solutions are mobile-first, fast-loading, and designed to convert visitors into customers.',
    features: [
      'Responsive Design',
      'SEO Optimized',
      'Fast Loading',
      'CMS Integration',
      'E-Commerce Ready',
      'Analytics Setup',
    ],
    benefits: [
      'Increase online visibility',
      'Generate more leads',
      '24/7 business presence',
      'Professional brand image',
    ],
    gradient: 'from-primary/20 to-primary/5',
    keywords:
      'website development Lucknow, web design company, responsive website, e-commerce development India',
  },
  {
    slug: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    shortTitle: 'App Dev',
    description:
      'Native and cross-platform mobile applications designed for seamless user experiences.',
    longDescription:
      'We develop iOS and Android applications using React Native and Flutter. Our apps deliver native-like performance with beautiful UI, push notifications, offline support, and seamless API integrations.',
    features: [
      'iOS & Android',
      'Cross-platform',
      'User-Friendly',
      'Push Notifications',
      'Offline Support',
      'App Store Publishing',
    ],
    benefits: [
      'Reach mobile users',
      'Improve customer engagement',
      'Streamline operations',
      'Competitive advantage',
    ],
    gradient: 'from-accent/20 to-accent/5',
    keywords:
      'mobile app development Lucknow, iOS Android app, React Native developer, Flutter app India',
  },
  {
    slug: 'social-media-management',
    icon: Share2,
    title: 'Social Media Management',
    shortTitle: 'Social Media',
    description:
      'Strategic social media campaigns to grow your brand and engage with your audience.',
    longDescription:
      'Our social media experts create and manage content strategies across Facebook, Instagram, LinkedIn, and Twitter. We handle everything from content creation to paid advertising, analytics, and community management.',
    features: [
      'Content Strategy',
      'Analytics',
      'Engagement',
      'Paid Advertising',
      'Community Management',
      'Monthly Reports',
    ],
    benefits: [
      'Build brand awareness',
      'Engage target audience',
      'Drive website traffic',
      'Increase conversions',
    ],
    gradient: 'from-primary/20 to-primary/5',
    keywords:
      'social media management Lucknow, social media marketing India, Facebook Instagram management',
  },
  {
    slug: 'bulk-sms-services',
    icon: Phone,
    title: 'Bulk SMS & Voice Call Services',
    shortTitle: 'SMS & Voice',
    description: 'Reliable bulk messaging and voice call services for effective customer outreach.',
    longDescription:
      'Send thousands of SMS messages and automated voice calls with high delivery rates. Our DLT-compliant platform supports promotional, transactional, and OTP messaging with real-time delivery reports and API integration.',
    features: [
      'High Delivery Rate',
      'Cost-Effective',
      'Real-time Reports',
      'DLT Compliant',
      'API Integration',
      'Scheduled Sending',
    ],
    benefits: [
      'Instant customer reach',
      'Cost-effective marketing',
      'Measurable results',
      'Automated campaigns',
    ],
    gradient: 'from-accent/20 to-accent/5',
    keywords:
      'bulk SMS service Lucknow, voice call marketing India, OTP SMS provider, IVR solutions',
  },
  {
    slug: 'whatsapp-marketing',
    icon: MessageCircle,
    title: 'Bulk WhatsApp Marketing',
    shortTitle: 'WhatsApp',
    description: 'Mass WhatsApp messaging solutions to connect with customers instantly.',
    longDescription:
      'Leverage WhatsApp Business API for mass messaging with rich media support—images, videos, documents, and interactive buttons. Perfect for promotional campaigns, order updates, and customer support at scale.',
    features: [
      'Instant Delivery',
      'Rich Media',
      'API Integration',
      'Interactive Buttons',
      'Broadcast Lists',
      'Auto-Replies',
    ],
    benefits: [
      '98% open rate',
      'Rich media engagement',
      'Direct customer connection',
      'Automated workflows',
    ],
    gradient: 'from-primary/20 to-primary/5',
    keywords: 'bulk WhatsApp marketing Lucknow, WhatsApp Business API India, WhatsApp bulk sender',
  },
  {
    slug: 'digital-marketing',
    icon: Megaphone,
    title: 'Digital Marketing & SEO',
    shortTitle: 'Marketing',
    description: 'Comprehensive digital marketing strategies to boost your online growth and ROI.',
    longDescription:
      'From Google Ads and SEO to email marketing and content strategy, we offer full-funnel digital marketing services. Our data-driven approach ensures maximum ROI with transparent reporting and continuous optimization.',
    features: [
      'Google Ads',
      'SEO Optimization',
      'Email Marketing',
      'Content Strategy',
      'Lead Generation',
      'Performance Tracking',
    ],
    benefits: ['Higher search rankings', 'Increased ROI', 'Qualified leads', 'Brand authority'],
    gradient: 'from-accent/20 to-accent/5',
    keywords:
      'digital marketing Lucknow, SEO services India, Google Ads management, lead generation',
  },
]
