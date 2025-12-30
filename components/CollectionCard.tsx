import Link from 'next/link'
import type { Collection } from '@/types'

interface CollectionCardProps {
  collection: Collection
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  const heroImage = collection.metadata.hero_image?.imgix_url || collection.thumbnail

  return (
    <Link href={`/collections/${collection.slug}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        {heroImage && (
          <div className="relative h-64 overflow-hidden">
            <img
              src={`${heroImage}?w=1200&h=512&fit=crop&auto=format,compress`}
              alt={collection.metadata.collection_name}
              width="600"
              height="256"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{collection.metadata.collection_name}</h3>
              {collection.metadata.season && collection.metadata.year && (
                <p className="text-sm opacity-90">
                  {collection.metadata.season.value} {collection.metadata.year}
                </p>
              )}
            </div>
          </div>
        )}
        {collection.metadata.description && (
          <div className="p-6">
            <p className="text-gray-600">{collection.metadata.description}</p>
          </div>
        )}
      </div>
    </Link>
  )
}