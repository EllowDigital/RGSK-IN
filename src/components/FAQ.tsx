import { HelpCircle, ChevronDown } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Helmet } from 'react-helmet-async'

const faqs = [
  {
    question: 'What services does RGSK Technologies Pvt Ltd offer?',
    answer:
      'RGSK Technologies Pvt Ltd offers a comprehensive range of digital solutions including custom web development, mobile app development (iOS & Android), bulk SMS services, bulk WhatsApp marketing, social media management, voice call & IVR solutions, and complete digital marketing services. We serve businesses across Lucknow, Uttar Pradesh, and all of India.',
  },
  {
    question: 'How much does it cost to build a website with RGSK Technologies?',
    answer:
      'Our website development packages start from ₹9,999 for a basic informational website. Custom web applications and e-commerce websites are priced based on requirements and complexity. We offer transparent pricing with no hidden charges. Contact us for a free consultation and detailed quote tailored to your business needs.',
  },
  {
    question: 'How long does it take to develop a website or mobile app?',
    answer:
      'A standard business website typically takes 1-2 weeks, while custom web applications take 4-8 weeks depending on complexity. Mobile app development ranges from 6-12 weeks. We follow agile methodology and provide regular progress updates throughout the development process.',
  },
  {
    question: 'What is bulk SMS marketing and how can it help my business?',
    answer:
      'Bulk SMS marketing allows you to send promotional or transactional messages to thousands of customers simultaneously. With a 98% open rate, SMS is one of the most effective marketing channels. RGSK Technologies provides TRAI-compliant bulk SMS services with high delivery rates, real-time analytics, and competitive pricing.',
  },
  {
    question: 'Do you provide WhatsApp Business API integration?',
    answer:
      'Yes, we offer complete WhatsApp Business API solutions including bulk messaging, automated chatbots, catalog integration, and campaign management. Our WhatsApp marketing services help businesses achieve 99% message open rates and significantly higher engagement compared to traditional channels.',
  },
  {
    question: 'Where is RGSK Technologies located?',
    answer:
      'RGSK Technologies Pvt Ltd is headquartered in Lucknow, Uttar Pradesh, India. Our office is located at C-Block, Shivaji Market, near Eram College, Indira Nagar, Lucknow - 226016. While we are based in Lucknow, we serve clients across India and internationally.',
  },
  {
    question: 'Do you offer ongoing support and maintenance after project delivery?',
    answer:
      'Absolutely! We provide comprehensive post-delivery support including bug fixes, security updates, performance optimization, and feature enhancements. Our 24/7 support team ensures your digital solutions run smoothly at all times. We also offer annual maintenance contracts for long-term partnerships.',
  },
  {
    question: 'Can RGSK Technologies help improve my website\'s SEO and Google ranking?',
    answer:
      'Yes, SEO optimization is built into every website we develop. We implement on-page SEO, technical SEO, structured data markup, mobile optimization, page speed optimization, and content strategy. We also offer dedicated SEO services to help your website rank higher on Google for relevant keywords in your industry.',
  },
  {
    question: 'What payment methods does RGSK Technologies accept?',
    answer:
      'We accept multiple payment methods for your convenience including bank transfers (NEFT/RTGS/IMPS), UPI payments (Google Pay, PhonePe, Paytm), credit/debit cards, and online payment gateways. We offer flexible payment plans — typically 50% advance and 50% on project completion. For larger projects, milestone-based payment schedules are available.',
  },
  {
    question: 'What is your refund policy?',
    answer:
      'RGSK Technologies follows a transparent refund policy. If we are unable to deliver the agreed-upon project scope, a full refund is provided. For partial work completed, refunds are calculated proportionally. We provide detailed project milestones upfront so both parties have clear expectations. Customer satisfaction is our top priority, and we work closely with clients to resolve any concerns before considering refunds.',
  },
  {
    question: 'What is the typical project development process at RGSK Technologies?',
    answer:
      'Our development process follows 6 key phases: 1) Discovery & Consultation — understanding your requirements and goals, 2) Planning & Strategy — creating wireframes, project timelines, and technical architecture, 3) Design — UI/UX design with client approval, 4) Development — coding and building the solution using latest technologies, 5) Testing & QA — thorough quality assurance and bug fixing, 6) Launch & Support — deployment, training, and ongoing maintenance support.',
  },
  {
    question: 'Do you provide custom software development for specific business needs?',
    answer:
      'Yes, we specialize in custom software development tailored to your unique business requirements. Whether you need a CRM system, inventory management, ERP solution, booking platform, or any industry-specific application, our experienced developers build scalable and secure solutions. We use modern technologies like React, Node.js, Python, and cloud platforms to deliver high-performance applications.',
  },
  {
    question: 'How can I get a free consultation or project estimate from RGSK Technologies?',
    answer:
      'Getting a free consultation is easy! You can reach us through multiple channels: call or WhatsApp us at +91-7054466111, email us at rgsktechnologies@gmail.com, or fill out the contact form on our website. Our team will schedule a consultation within 24 hours to discuss your project requirements and provide a detailed estimate with timeline and pricing.',
  },
]

export const FAQ = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation()

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      <section id="faq" className="section-padding relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.04),transparent_60%)]" />

        <div className="container relative z-10">
          {/* Header */}
          <div
            ref={headerRef}
            className={cn(
              'text-center mb-10 sm:mb-14',
              headerVisible ? 'scroll-visible' : 'scroll-hidden'
            )}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-4">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
                FAQ
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Find answers to common questions about our services, pricing, and process.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div
            ref={faqRef}
            className={cn(
              'max-w-3xl mx-auto',
              faqVisible ? 'scroll-visible' : 'scroll-hidden'
            )}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card border border-border rounded-xl sm:rounded-2xl px-5 sm:px-6 data-[state=open]:border-primary/30 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold py-4 sm:py-5 hover:no-underline hover:text-primary transition-colors [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}
