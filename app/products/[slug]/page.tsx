// app/products/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getProduct, getProductReviews } from '@/lib/cosmic'
import ReviewCard from '@/components/ReviewCard'
import type { Product, Review } from '@/types'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProduct(slug) as Product | null

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.metadata.product_name} - Sustainable Fashion`,
    description: product.metadata.sustainability_info || 'Sustainable fashion product',
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProduct(slug) as Product | null

  if (!product) {
    notFound()
  }

  const reviews = await getProductReviews(product.id) as Review[]
  
  const mainImage = product.metadata.product_images?.[0]?.imgix_url || product.thumbnail
  const additionalImages = product.metadata.product_images?.slice(1) || []

  // Calculate average rating
  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, review) => sum + parseInt(review.metadata.rating.key), 0) / reviews.length
    : 0

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div>
            {mainImage && (
              <div className="mb-4">
                <img
                  src={`${mainImage}?w=1200&h=1200&fit=crop&auto=format,compress`}
                  alt={product.metadata.product_name}
                  width="600"
                  height="600"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}
            {additionalImages.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {additionalImages.map((image, index) => (
                  <img
                    key={index}
                    src={`${image.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
                    alt={`${product.metadata.product_name} - View ${index + 2}`}
                    width="200"
                    height="200"
                    className="w-full h-auto rounded-lg"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.metadata.product_name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-primary">${product.metadata.price}</span>
              {reviews.length > 0 && (
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({reviews.length} reviews)</span>
                </div>
              )}
            </div>

            <div 
              className="prose prose-lg mb-8"
              dangerouslySetInnerHTML={{ __html: product.metadata.description }}
            />

            {product.metadata.available_sizes && product.metadata.available_sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Available Sizes:</h3>
                <div className="flex gap-2">
                  {product.metadata.available_sizes.map((size) => (
                    <span 
                      key={size} 
                      className="px-4 py-2 border-2 border-gray-300 rounded-lg font-semibold"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                product.metadata.in_stock 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {product.metadata.in_stock ? '✓ In Stock' : 'Out of Stock'}
              </span>
            </div>

            {product.metadata.collection && (
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-1">Collection</p>
                <p className="font-semibold text-lg">{product.metadata.collection.title}</p>
              </div>
            )}

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-green-900">🌱 Sustainability Information</h3>
              <p className="text-gray-700">{product.metadata.sustainability_info}</p>
            </div>

            <p className="text-sm text-gray-500 mt-6">SKU: {product.metadata.sku}</p>
          </div>
        </div>

        {/* Customer Reviews Section */}
        {reviews.length > 0 && (
          <div className="border-t pt-12">
            <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}