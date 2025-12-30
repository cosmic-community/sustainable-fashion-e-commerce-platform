import { getCollections } from '@/lib/cosmic'
import CollectionCard from '@/components/CollectionCard'
import type { Collection } from '@/types'

export const metadata = {
  title: 'Collections - Seasonal Sustainable Fashion',
  description: 'Explore our seasonal collections of sustainable fashion pieces.',
}

export default async function CollectionsPage() {
  const collections = await getCollections() as Collection[]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Collections</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Discover our curated seasonal collections. Each collection features carefully selected pieces 
            that embody our commitment to sustainable fashion.
          </p>
        </div>

        {collections.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No collections available at the moment.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}