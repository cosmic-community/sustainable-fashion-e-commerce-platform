// app/collections/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCollection, getProductsByCollection } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'
import type { Collection, Product } from '@/types'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const collection = await getCollection(slug) as Collection | null

  if (!collection) {
    return {
      title: 'Collection Not Found',
    }
  }

  return {
    title: `${collection.metadata.collection_name} - Sustainable Fashion Collection`,
    description: collection.metadata.description || 'Sustainable fashion collection',
  }
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const collection = await getCollection(slug) as Collection | null

  if (!collection) {
    notFound()
  }

  const products = await getProductsByCollection(collection.id) as Product[]

  return (
    <div className="min-h-screen">
      {/* Collection Hero */}
      {collection.metadata.hero_image && (
        <div className="relative h-[400px] bg-gray-900">
          <img
            src={`${collection.metadata.hero_image.imgix_url}?w=2400&h=800&fit=crop&auto=format,compress`}
            alt={collection.metadata.collection_name}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">{collection.metadata.collection_name}</h1>
              {collection.metadata.season && collection.metadata.year && (
                <p className="text-xl">
                  {collection.metadata.season.value} {collection.metadata.year}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12">
        {/* Collection Info */}
        {!collection.metadata.hero_image && (
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">{collection.metadata.collection_name}</h1>
            {collection.metadata.season && collection.metadata.year && (
              <p className="text-xl text-gray-600 mb-4">
                {collection.metadata.season.value} {collection.metadata.year}
              </p>
            )}
          </div>
        )}

        {collection.metadata.description && (
          <div className="max-w-3xl mb-12">
            <p className="text-lg text-gray-700">{collection.metadata.description}</p>
          </div>
        )}

        {/* Products in Collection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Products in this Collection</h2>
          {products.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600 text-lg">No products in this collection yet.</p>
              <Link 
                href="/products" 
                className="inline-block mt-4 text-primary hover:underline font-semibold"
              >
                Browse All Products →
              </Link>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}