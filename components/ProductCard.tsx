import Link from 'next/link'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const mainImage = product.metadata.product_images?.[0]?.imgix_url || product.thumbnail
  
  return (
    <Link href={`/products/${product.slug}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        {mainImage && (
          <div className="aspect-square overflow-hidden">
            <img
              src={`${mainImage}?w=800&h=800&fit=crop&auto=format,compress`}
              alt={product.metadata.product_name}
              width="400"
              height="400"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {product.metadata.product_name}
          </h3>
          <p className="text-2xl font-bold text-primary mb-2">${product.metadata.price}</p>
          {product.metadata.sustainability_info && (
            <p className="text-sm text-gray-600 line-clamp-2">{product.metadata.sustainability_info}</p>
          )}
        </div>
      </div>
    </Link>
  )
}