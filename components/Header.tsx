import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            🌿 EcoFashion
          </Link>
          
          <div className="flex items-center gap-8">
            <Link href="/products" className="font-semibold hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/collections" className="font-semibold hover:text-primary transition-colors">
              Collections
            </Link>
            <Link href="/blog" className="font-semibold hover:text-primary transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}