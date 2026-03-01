import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { blogPosts } from '@/data/blogPosts'
import { cn } from '@/lib/utils'

export const BlogPreview = () => {
  const { ref, isVisible } = useScrollAnimation()
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <section id="blog" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div ref={ref} className={cn(isVisible ? 'scroll-visible' : 'scroll-hidden')}>
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-4">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary">From Our Blog</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Latest <span className="text-primary">Insights</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
              Stay updated with the latest trends in web development, digital marketing, and
              technology.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-10">
            {latestPosts.map((post, index) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover-lift"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-1 bg-gradient-to-r from-primary to-accent" />
                <div className="p-5 flex flex-col h-full">
                  <Badge variant="secondary" className="text-xs w-fit mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground pt-3 border-t border-border">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All */}
          <div className="text-center">
            <Link to="/blog">
              <Button
                variant="outline"
                className="gap-2 group border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View All Articles
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
