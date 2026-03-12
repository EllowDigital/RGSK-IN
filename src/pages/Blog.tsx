import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { PageIntro, PremiumCard, SEO } from '@/components/common'
import { Header, EnhancedFooter } from '@/components/layout'
import { blogPosts } from '@/constants/blogPosts'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const BLOG_URL = 'https://rgsktechnologies.in/blog'

const Blog = () => {
  const { ref, isVisible } = useScrollAnimation()

  const blogCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${BLOG_URL}#blog`,
    url: BLOG_URL,
    name: 'RGSK Technologies Blog',
    description:
      'Expert insights on web development, digital marketing, bulk SMS, WhatsApp marketing, and mobile app development from RGSK Technologies Pvt Ltd.',
    publisher: {
      '@id': 'https://rgsktechnologies.in/#organization',
    },
    inLanguage: 'en-IN',
  }

  const blogItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${BLOG_URL}#posts`,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    numberOfItems: blogPosts.length,
    itemListElement: blogPosts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${BLOG_URL}/${post.slug}`,
      name: post.title,
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rgsktechnologies.in' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: BLOG_URL },
    ],
  }

  return (
    <>
      <SEO
        title="Blog | RGSK Technologies Pvt Ltd - Digital Marketing & Web Development Insights"
        description="Read expert insights on web development, digital marketing, bulk SMS, WhatsApp marketing, and mobile app development from RGSK Technologies Pvt Ltd, Lucknow."
        keywords="RGSK Technologies blog, web development tips, digital marketing insights, bulk SMS guide, WhatsApp marketing, Lucknow IT company blog"
        canonicalUrl={BLOG_URL}
        structuredData={[blogCollectionSchema, blogItemListSchema, breadcrumbSchema]}
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 sm:pt-28 pb-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 mb-12 sm:mb-16">
            <PageIntro
              eyebrow={
                <Badge variant="outline" className="text-primary border-primary/30">
                  <Tag className="w-3 h-3 mr-1" />
                  Insights & Resources
                </Badge>
              }
              title={
                <>
                  RGSK Technologies <span className="text-primary">Blog</span>
                </>
              }
              description="Expert insights on web development, digital marketing, and technology trends to help your business grow."
              aside={
                <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/70 shadow-sm text-left">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {blogPosts.length}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Curated growth articles</p>
                    <p className="text-xs text-muted-foreground">
                      Actionable reads across web, marketing, and product delivery.
                    </p>
                  </div>
                </div>
              }
            />
          </section>

          {/* Blog Grid */}
          <section className="container mx-auto px-4">
            <div
              ref={ref}
              className={cn(
                'grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto',
                isVisible ? 'scroll-visible' : 'scroll-hidden'
              )}
            >
              {blogPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <PremiumCard interactive className="h-full">
                    <div className="h-1 bg-gradient-to-r from-primary to-accent" />
                    <div className="p-5 sm:p-6 flex flex-col h-full">
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <Badge variant="secondary" className="text-xs font-medium">
                          {post.category}
                        </Badge>
                        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                          {post.author}
                        </div>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h2>

                      <p className="text-sm sm:text-[15px] text-muted-foreground mb-5 line-clamp-3 flex-1 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full border border-border/70 bg-background px-3 py-1 text-[11px] font-medium text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border/70">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <div className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                          Read article
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </PremiumCard>
                </Link>
              ))}
            </div>
          </section>
        </main>
        <EnhancedFooter />
      </div>
    </>
  )
}

export default Blog
