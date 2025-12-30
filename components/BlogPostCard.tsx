import Link from 'next/link'
import type { BlogPost } from '@/types'

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const featuredImage = post.metadata.featured_image?.imgix_url

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
        {featuredImage && (
          <div className="aspect-video overflow-hidden">
            <img
              src={`${featuredImage}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={post.metadata.post_title}
              width="400"
              height="225"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6 flex-1 flex flex-col">
          {post.metadata.category && (
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3 self-start">
              {post.metadata.category.value}
            </span>
          )}
          <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
            {post.metadata.post_title}
          </h3>
          {post.metadata.meta_description && (
            <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
              {post.metadata.meta_description}
            </p>
          )}
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-auto">
            {post.metadata.author && <span>{post.metadata.author}</span>}
            {post.metadata.published_date && post.metadata.author && <span>•</span>}
            {post.metadata.published_date && (
              <time>{new Date(post.metadata.published_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}</time>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}