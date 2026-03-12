import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react'
import { CTA, PageIntro, PremiumCard, SEO } from '@/components/common'
import { Header, EnhancedFooter } from '@/components/layout'
import { blogPosts } from '@/constants/blogPosts'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)
  const canonicalUrl = `https://rgsktechnologies.in/blog/${post.slug}`

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${canonicalUrl}#article`,
    headline: post.title,
    name: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: 'RGSK Technologies Pvt Ltd',
      url: 'https://rgsktechnologies.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'RGSK Technologies Pvt Ltd',
      logo: { '@type': 'ImageObject', url: 'https://rgsktechnologies.in/brand/logo.png' },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    url: canonicalUrl,
    keywords: post.tags.join(', '),
    articleSection: post.category,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rgsktechnologies.in' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://rgsktechnologies.in/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
    ],
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
        canonicalUrl={canonicalUrl}
        type="article"
        publishedTime={post.date}
        modifiedTime={post.date}
        structuredData={[articleStructuredData, breadcrumbSchema]}
      />

      <div className="min-h-screen">
        <Header />
        <main className="pt-24 sm:pt-28 pb-16">
          <article className="container mx-auto px-4 max-w-5xl">
            {/* Back link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-10">
              <PageIntro
                align="left"
                eyebrow={<Badge variant="secondary">{post.category}</Badge>}
                title={post.title}
                description={post.excerpt}
                aside={
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-background border border-border/70 shadow-sm text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-background border border-border/70 shadow-sm text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleShare}
                      className="gap-2 rounded-2xl"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                  </div>
                }
              />
            </header>

            {/* Content */}
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
              <div className="min-w-0">
                <div className="prose-custom">{renderContent(post.content)}</div>

                <div className="flex items-center gap-2 flex-wrap mt-10 pt-6 border-t border-border">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <aside className="lg:sticky lg:top-28">
                <PremiumCard className="p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Article Snapshot
                  </p>
                  <h2 className="text-lg font-semibold text-foreground mb-4">Why this matters</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    A practical read for teams looking to turn digital channels into measurable
                    growth, not just online presence.
                  </p>
                  <div className="space-y-3">
                    <div className="rounded-2xl border border-border/70 bg-secondary/50 px-4 py-3">
                      <p className="text-xs text-muted-foreground">Category</p>
                      <p className="font-medium text-foreground mt-1">{post.category}</p>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-secondary/50 px-4 py-3">
                      <p className="text-xs text-muted-foreground">Published</p>
                      <p className="font-medium text-foreground mt-1">
                        {new Date(post.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-secondary/50 px-4 py-3">
                      <p className="text-xs text-muted-foreground">Read Time</p>
                      <p className="font-medium text-foreground mt-1">{post.readTime}</p>
                    </div>
                  </div>
                </PremiumCard>
              </aside>
            </div>
          </article>

          {/* Related Posts */}
          <section className="container mx-auto px-4 mt-16 max-w-5xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group block">
                  <PremiumCard interactive className="h-full p-5">
                    <Badge variant="secondary" className="text-xs mb-3">
                      {rp.category}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {rp.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border/70 inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Continue reading
                      <ArrowLeft className="w-4 h-4 rotate-180 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </PremiumCard>
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
