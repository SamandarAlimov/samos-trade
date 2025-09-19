import ProductCard from "./ProductCard";

// Mock data for demonstration
const featuredProducts = [
  {
    id: "1",
    name: "Professional Wireless Headphones with Active Noise Cancellation",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 1247,
    seller: "TechGear Solutions",
    category: "Electronics",
    featured: true,
    freeShipping: true
  },
  {
    id: "2",
    name: "Sustainable Cotton Business Shirt - Premium Quality",
    price: 89,
    originalPrice: 129,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 892,
    seller: "Fashion Forward Co.",
    category: "Fashion",
    freeShipping: true
  },
  {
    id: "3",
    name: "Smart Home Security Camera System with AI Detection",
    price: 249,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 1563,
    seller: "SecureHome Tech",
    category: "Electronics",
    featured: true
  },
  {
    id: "4",
    name: "Industrial Grade 3D Printer for Manufacturing",
    price: 2499,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 234,
    seller: "Industrial Solutions Ltd",
    category: "Industrial",
    freeShipping: true
  },
  {
    id: "5",
    name: "Premium Coffee Bean Roasting Machine",
    price: 1299,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 445,
    seller: "Coffee Masters Inc",
    category: "Home & Garden"
  },
  {
    id: "6",
    name: "Professional Web Development Course Bundle",
    price: 199,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 3421,
    seller: "CodeAcademy Pro",
    category: "Digital Products",
    featured: true,
    freeShipping: true
  },
  {
    id: "7",
    name: "Luxury Leather Executive Office Chair",
    price: 899,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 678,
    seller: "Office Luxury",
    category: "Home & Garden",
    freeShipping: true
  },
  {
    id: "8",
    name: "Electric Mountain Bike with Long Range Battery",
    price: 1899,
    originalPrice: 2299,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 892,
    seller: "EcoBike Solutions",
    category: "Automotive",
    featured: true
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="marketplace-container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground text-lg">
              Handpicked products from our top-rated sellers
            </p>
          </div>
          <div className="hidden md:block">
            <button className="text-primary font-semibold hover:underline">
              View All Products →
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;