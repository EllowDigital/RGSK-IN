import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { Header } from '@/components/Header'
import { EnhancedFooter } from '@/components/EnhancedFooter'
import { SEO } from '@/components/SEO'
import { blogPosts } from '@/data/blogPosts'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const Blog = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <>
      <SEO
        title="Blog | RGSK Technologies Pvt Ltd - Digital Marketing & Web Development Insights"
        description="Read expert insights on web development, digital marketing, bulk SMS, WhatsApp marketing, and mobile app development from RGSK Technologies Pvt Ltd, Lucknow."
        keywords="RGSK Technologies blog, web development tips, digital marketing insights, bulk SMS guide, WhatsApp marketing, Lucknow IT company blog"
        canonicalUrl="https://rgsktechnologies.in/blog"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 sm:pt-28 pb-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 mb-12 sm:mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                <Tag className="w-3 h-3 mr-1" />
                Insights & Resources
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                RGSK Technologies <span className="text-primary">Blog</span>
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
                Expert insights on web development, digital marketing, and technology trends to help
                your business grow.
              </p>
            </div>
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
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover-lift transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Category color bar */}
                  <div className="h-1 bg-gradient-to-r from-primary to-accent" />

                  <div className="p-5 sm:p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs font-medium">
                        {post.category}
                      </Badge>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
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
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
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
