import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Globe } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="marketplace-container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Global Trading Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Trade Globally with 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200">
                Samos Technologies
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
              Connect with millions of buyers and sellers worldwide. Secure transactions, 
              verified suppliers, and professional trading tools for businesses of all sizes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Start Trading Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Browse Products
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold">500K+</div>
                <div className="text-white/80 text-sm">Active Traders</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2M+</div>
                <div className="text-white/80 text-sm">Products Listed</div>
              </div>
              <div>
                <div className="text-3xl font-bold">180+</div>
                <div className="text-white/80 text-sm">Countries</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-premium">
              <img 
                src={heroImage} 
                alt="Global Trading Platform" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-hover">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Secure Trading</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-hover">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">Global Reach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;