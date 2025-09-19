import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-samos-neutral-900 text-white">
      {/* Main Footer */}
      <div className="marketplace-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-lg">S</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Samos Trade</h3>
                <p className="text-sm text-gray-400">Global Technologies</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading global trading platform connecting businesses worldwide. 
              Secure, reliable, and professional marketplace for all your trading needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Browse Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Find Suppliers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Become a Seller</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Trade Assurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Bulk Orders</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Request Quotes</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-6">Categories</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Electronics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Fashion & Apparel</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home & Garden</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Industrial Equipment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Digital Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Automotive</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Samos Global Technologies</p>
                  <p className="text-gray-300">Tashkent, Uzbekistan</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-gray-300">+998 71 123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-gray-300">info@samos.uz</p>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Stay Updated</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                />
                <button className="px-4 py-2 bg-primary hover:bg-primary/90 rounded-r-lg transition-colors">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="marketplace-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Samos Global Technologies Inc. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Trade Assurance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;