import { getBlogPosts } from '@/lib/cosmic'
import BlogPostCard from '@/components/BlogPostCard'
import CategoryFilter from '@/components/CategoryFilter'
import type { BlogPost } from '@/types'

export const metadata = {
  title: 'Sustainable Fashion Blog - Tips, Guides & Stories',
  description: 'Learn about sustainable fashion, care guides, and our brand story.',
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const allPosts = await getBlogPosts() as BlogPost[]
  
  // Filter by category if provided
  const filteredPosts = category
    ? allPosts.filter(post => post.metadata.category?.key === category)
    : allPosts

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Discover stories, tips, and insights about sustainable fashion, caring for your clothes, 
            and building a more conscious wardrobe.
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter currentCategory={category} />

        {/* Blog Posts */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {category 
                ? `No blog posts found in this category.` 
                : 'No blog posts available at the moment.'}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}