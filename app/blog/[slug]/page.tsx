// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPost } from '@/lib/cosmic'
import type { BlogPost } from '@/types'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug) as BlogPost | null

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.metadata.post_title} - Sustainable Fashion Blog`,
    description: post.metadata.meta_description || post.metadata.post_title,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug) as BlogPost | null

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Back to Blog */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-primary hover:underline mb-8 font-semibold"
        >
          ← Back to Blog
        </Link>

        {/* Featured Image */}
        {post.metadata.featured_image && (
          <img
            src={`${post.metadata.featured_image.imgix_url}?w=1600&h=600&fit=crop&auto=format,compress`}
            alt={post.metadata.post_title}
            width="800"
            height="300"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />
        )}

        {/* Post Header */}
        <header className="mb-8">
          {post.metadata.category && (
            <Link
              href={`/blog?category=${post.metadata.category.key}`}
              className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 hover:bg-primary/20 transition-colors"
            >
              {post.metadata.category.value}
            </Link>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.metadata.post_title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            {post.metadata.author && (
              <span className="font-semibold">By {post.metadata.author}</span>
            )}
            {post.metadata.published_date && (
              <>
                <span>•</span>
                <time>{new Date(post.metadata.published_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</time>
              </>
            )}
          </div>
        </header>

        {/* Post Content */}
        <div 
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.metadata.content }}
        />

        {/* Back to Blog CTA */}
        <div className="border-t pt-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-primary hover:underline font-semibold text-lg"
          >
            ← Read More Articles
          </Link>
        </div>
      </article>
    </div>
  )
}