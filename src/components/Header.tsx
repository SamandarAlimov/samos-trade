import { Search, ShoppingCart, User, Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="marketplace-container">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border">
          <div className="flex items-center space-x-6">
            <span>📞 +998 71 123 4567</span>
            <span>✉️ info@samos.uz</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>🌐 Global Trading Platform</span>
            <span>🚚 Free Shipping on Orders $500+</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="font-bold text-white text-lg">S</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">Samos Trade</h1>
              <p className="text-xs text-muted-foreground">Global Technologies</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search products, services, suppliers..." 
                className="search-input pl-10 pr-4"
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 btn-trading h-10">
                Search
              </Button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Category navigation */}
        <nav className="hidden md:flex items-center space-x-8 py-3 border-t border-border">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Electronics</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Fashion</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home & Garden</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Industrial</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Digital Products</a>
          <Button variant="outline" size="sm" className="btn-success ml-auto">
            Become a Seller
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;