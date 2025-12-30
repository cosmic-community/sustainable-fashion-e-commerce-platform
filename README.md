# Sustainable Fashion E-Commerce Platform

A modern, eco-conscious e-commerce platform showcasing sustainable fashion products with an integrated blog for SEO. Built with Next.js 16, TypeScript, Tailwind CSS, and powered by Cosmic CMS.

![App Preview](https://imgix.cosmicjs.com/7f547040-e52b-11f0-a847-3b9ae0c904b9-photo-1490481651871-ab68de25d43d-1767063542439.jpg?w=1200&h=300&fit=crop&auto=format,compress)

## Features

- 🛍️ **Product Catalog**: Browse sustainable fashion products with detailed information
- 📦 **Seasonal Collections**: Curated collections organized by season
- ⭐ **Customer Reviews**: Verified purchase reviews with star ratings
- 📝 **SEO Blog**: Educational content about sustainable fashion and care guides
- 🎨 **Modern Design**: Clean, responsive interface with nature-inspired aesthetics
- 🔍 **Category Filtering**: Filter blog posts by category (Sustainability, Fashion Tips, Care Guides, Brand Story)
- 📱 **Mobile-First**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Server-side rendering with Next.js 16 for optimal speed
- 🔒 **Type-Safe**: Full TypeScript implementation with comprehensive type checking

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=69533f4fc054b5b9353747c7&clone_repository=69534122c054b5b9353747ed)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design a content model for a sustainable e-commerce fashion store with products, collections, and customer reviews, and a blog for SEO"

### Code Generation Prompt

> "Based on the content model I created for 'Design a content model for a sustainable e-commerce fashion store with products, collections, and customer reviews, and a blog for SEO', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [Cosmic CMS](https://www.cosmicjs.com/docs) - Headless CMS for content management
- [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine
- A Cosmic account with the fashion e-commerce content model set up

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file in the root directory with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Products with Collections

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch products with nested collection data
const response = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const products = response.objects
```

### Fetching Blog Posts by Category

```typescript
// Fetch blog posts filtered by category
const response = await cosmic.objects
  .find({ 
    type: 'blog-posts',
    'metadata.category.key': 'sustainability'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const posts = response.objects
```

### Fetching Reviews for a Product

```typescript
// Fetch reviews for a specific product
const response = await cosmic.objects
  .find({ 
    type: 'reviews',
    'metadata.product': productId
  })
  .props(['id', 'title', 'metadata'])
  .depth(1)

const reviews = response.objects
```

## Cosmic CMS Integration

This application uses Cosmic's powerful features:

- **Object Metafields**: Structured data for products, collections, reviews, and blog posts
- **Object Relationships**: Products linked to collections, reviews linked to products
- **File Uploads**: Product images and featured blog images
- **Select Dropdowns**: Category filtering for blog posts, star ratings for reviews
- **Depth Parameter**: Automatic fetching of nested relationship data

All content is managed through the Cosmic dashboard, allowing you to:
- Add/edit products with sustainability information
- Manage seasonal collections
- Moderate customer reviews
- Publish blog content with categories
- Update content instantly without code changes

## Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js application is using [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import the project into Vercel
3. Add your environment variables in the Vercel dashboard:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Environment Variables

Make sure to set these environment variables in your deployment platform:

- `COSMIC_BUCKET_SLUG`: Your Cosmic bucket slug
- `COSMIC_READ_KEY`: Your Cosmic read key
- `COSMIC_WRITE_KEY`: Your Cosmic write key

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Homepage with featured content
│   ├── products/           # Product catalog and detail pages
│   ├── collections/        # Collection pages
│   ├── blog/              # Blog listing and post pages
│   └── globals.css        # Global styles
├── components/
│   ├── ProductCard.tsx    # Product display component
│   ├── CollectionCard.tsx # Collection display component
│   ├── BlogPostCard.tsx   # Blog post preview component
│   ├── ReviewCard.tsx     # Customer review component
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── CosmicBadge.tsx    # Cosmic badge component
├── lib/
│   └── cosmic.ts          # Cosmic SDK configuration
├── types.ts               # TypeScript type definitions
└── tailwind.config.js     # Tailwind configuration
```

## Learn More

- [Cosmic Documentation](https://www.cosmicjs.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

<!-- README_END -->