import Link from 'next/link'
import { getProducts, getCollections, getBlogPosts, getAllReviews } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'
import CollectionCard from '@/components/CollectionCard'
import BlogPostCard from '@/components/BlogPostCard'
import ReviewCard from '@/components/ReviewCard'
import type { Product, Collection, BlogPost, Review } from '@/types'

export default async function HomePage() {
  const products = await getProducts() as Product[]
  const collections = await getCollections() as Collection[]
  const blogPosts = await getBlogPosts() as BlogPost[]
  const reviews = await getAllReviews() as Review[]

  // Get featured items (first 4 of each)
  const featuredProducts = products.slice(0, 4)
  const featuredCollections = collections.slice(0, 2)
  const featuredPosts = blogPosts.slice(0, 3)
  const featuredReviews = reviews.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sustainable Fashion for a Better Tomorrow
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Discover timeless pieces crafted from organic and recycled materials. Fashion that's good for you and the planet.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/products" 
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </Link>
              <Link 
                href="/collections" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Collections
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      {featuredCollections.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Featured Collections</h2>
              <Link href="/collections" className="text-primary hover:underline font-semibold">
                View All →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredCollections.map((collection) => (
                <CollectionCard key={collection.id} collection={collection} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <Link href="/products" className="text-primary hover:underline font-semibold">
                View All →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Customer Reviews */}
      {featuredReviews.length > 0 && (
        <section className="py-16 bg-accent/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">From Our Blog</h2>
              <Link href="/blog" className="text-primary hover:underline font-semibold">
                View All →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sustainability Promise */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Our Sustainability Promise</h2>
          <p className="text-lg mb-8 text-gray-100">
            Every piece we create is thoughtfully designed with the planet in mind. From organic cotton to recycled materials, 
            we're committed to reducing our environmental impact while creating beautiful, lasting fashion.
          </p>
          <Link 
            href="/blog" 
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Learn More About Our Mission
          </Link>
        </div>
      </section>
    </div>
  )
}