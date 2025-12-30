import type { Review } from '@/types'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const rating = parseInt(review.metadata.rating.key)

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
              ★
            </span>
          ))}
        </div>
        {review.metadata.verified_purchase && (
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">
            ✓ Verified Purchase
          </span>
        )}
      </div>
      
      <p className="text-gray-700 mb-4">{review.metadata.review_text}</p>
      
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold">{review.metadata.customer_name}</span>
        {review.metadata.product && (
          <span className="text-gray-500 text-xs">
            {review.metadata.product.metadata.product_name}
          </span>
        )}
      </div>
    </div>
  )
}