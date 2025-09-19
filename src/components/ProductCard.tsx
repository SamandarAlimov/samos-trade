import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    seller: string;
    category: string;
    featured?: boolean;
    freeShipping?: boolean;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card group">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.featured && (
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-red-500 text-white">-{discount}%</Badge>
          )}
          {product.freeShipping && (
            <Badge variant="secondary">Free Shipping</Badge>
          )}
        </div>
        
        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
        </div>
        
        <h3 className="font-semibold text-sm mb-2 line-clamp-2 hover:text-primary cursor-pointer transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-1">
            ({product.reviews})
          </span>
        </div>
        
        {/* Price */}
        <div className="flex items-center mb-3">
          <span className="text-lg font-bold text-primary">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through ml-2">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        
        {/* Seller */}
        <p className="text-xs text-muted-foreground mb-4">
          By <span className="text-foreground font-medium">{product.seller}</span>
        </p>
        
        {/* Actions */}
        <div className="flex gap-2">
          <Button className="btn-trading flex-1 text-xs">
            <ShoppingCart className="h-3 w-3 mr-1" />
            Add to Cart
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            Quick View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;