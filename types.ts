// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  thumbnail?: string;
}

// Product interface
export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    product_name: string;
    description: string;
    price: number;
    sku: string;
    product_images?: Array<{
      url: string;
      imgix_url: string;
    }>;
    sustainability_info?: string;
    available_sizes?: string[];
    in_stock: boolean;
    collection?: Collection;
  };
}

// Collection interface
export interface Collection extends CosmicObject {
  type: 'collections';
  metadata: {
    collection_name: string;
    description?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    season?: {
      key: string;
      value: string;
    };
    year?: number;
  };
}

// Review interface
export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    customer_name: string;
    rating: {
      key: string;
      value: string;
    };
    review_text: string;
    verified_purchase: boolean;
    product?: Product;
  };
}

// Blog Post interface
export interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    post_title: string;
    content: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    meta_description?: string;
    author?: string;
    published_date?: string;
    category?: {
      key: string;
      value: string;
    };
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isProduct(obj: CosmicObject): obj is Product {
  return obj.type === 'products';
}

export function isCollection(obj: CosmicObject): obj is Collection {
  return obj.type === 'collections';
}

export function isReview(obj: CosmicObject): obj is Review {
  return obj.type === 'reviews';
}

export function isBlogPost(obj: CosmicObject): obj is BlogPost {
  return obj.type === 'blog-posts';
}