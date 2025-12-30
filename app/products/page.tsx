import { getProducts } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'
import type { Product } from '@/types'

export const metadata = {
  title: 'Sustainable Products - Shop Eco-Friendly Fashion',
  description: 'Browse our collection of sustainable fashion products made from organic and recycled materials.',
}

export default async function ProductsPage() {
  const products = await getProducts() as Product[]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Sustainable Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Discover our collection of eco-friendly fashion pieces. Each product is carefully crafted with sustainable materials 
            and ethical production practices.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products available at the moment.</p>
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
  )
}