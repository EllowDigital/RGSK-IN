import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react'
import { Header } from '@/components/Header'
import { EnhancedFooter } from '@/components/EnhancedFooter'
import { SEO } from '@/components/SEO'
import { CTA } from '@/components/CTA'
import { blogPosts } from '@/data/blogPosts'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: 'RGSK Technologies Pvt Ltd',
      url: 'https://rgsktechnologies.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'RGSK Technologies Pvt Ltd',
      logo: { '@type': 'ImageObject', url: 'https://rgsktechnologies.in/logo.png' },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `https://rgsktechnologies.in/blog/${post.slug}`,
    keywords: post.tags.join(', '),
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    }
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content
      .split('\n')
      .map((line, i) => {
        const trimmed = line.trim()
        if (!trimmed) return <br key={i} />
        if (trimmed.startsWith('## '))
          return (
            <h2 key={i} className="text-2xl sm:text-3xl font-bold mt-10 mb-4 text-foreground">
              {trimmed.slice(3)}
            </h2>
          )
        if (trimmed.startsWith('### '))
          return (
            <h3 key={i} className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-foreground">
              {trimmed.slice(4)}
            </h3>
          )
        if (trimmed.startsWith('**') && trimmed.endsWith('**'))
          return (
            <p key={i} className="font-semibold text-foreground mt-4 mb-2">
              {trimmed.slice(2, -2)}
            </p>
          )
        if (trimmed.startsWith('- '))
          return (
            <li key={i} className="text-muted-foreground ml-4 mb-1 list-disc">
              {trimmed.slice(2)}
            </li>
          )
        if (trimmed.startsWith('| ')) return null // skip table rows for simplicity
        return (
          <p key={i} className="text-muted-foreground leading-relaxed mb-2">
            {trimmed}
          </p>
        )
      })
      .filter(Boolean)
  }

  return (
    <>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.tags.join(', ')}
        canonicalUrl={`https://rgsktechnologies.in/blog/${post.slug}`}
        type="article"
        publishedTime={post.date}
        modifiedTime={post.date}
      />
      {/* Article Structured Data */}
      <script type="application/ld+json">{JSON.stringify(articleStructuredData)}</script>

      <div className="min-h-screen">
        <Header />
        <main className="pt-24 sm:pt-28 pb-16">
          <article className="container mx-auto px-4 max-w-3xl">
            {/* Back link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{post.category}</Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>

              <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-border">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
            </header>

            {/* Content */}
            <div className="prose-custom">{renderContent(post.content)}</div>

            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap mt-10 pt-6 border-t border-border">
              <Tag className="w-4 h-4 text-muted-foreground" />
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </article>

          {/* Related Posts */}
          <section className="container mx-auto px-4 mt-16 max-w-5xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/blog/${rp.slug}`}
                  className="group bg-card rounded-xl border border-border p-5 hover-lift"
                >
                  <Badge variant="secondary" className="text-xs mb-3">
                    {rp.category}
                  </Badge>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {rp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{rp.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-16">
            <CTA />
          </div>
        </main>
        <EnhancedFooter />
      </div>
    </>
  )
}

export default BlogPost
