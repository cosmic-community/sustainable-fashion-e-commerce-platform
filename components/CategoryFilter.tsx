import Link from 'next/link'

interface CategoryFilterProps {
  currentCategory?: string
}

const categories = [
  { key: 'all', value: 'All Posts', href: '/blog' },
  { key: 'sustainability', value: 'Sustainability', href: '/blog?category=sustainability' },
  { key: 'fashion-tips', value: 'Fashion Tips', href: '/blog?category=fashion-tips' },
  { key: 'brand-story', value: 'Brand Story', href: '/blog?category=brand-story' },
  { key: 'care-guides', value: 'Care Guides', href: '/blog?category=care-guides' },
]

export default function CategoryFilter({ currentCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => {
        const isActive = currentCategory === category.key || (!currentCategory && category.key === 'all')
        
        return (
          <Link
            key={category.key}
            href={category.href}
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${
              isActive
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.value}
          </Link>
        )
      })}
    </div>
  )
}