import { Smartphone, Shirt, Home, Wrench, Code, Briefcase, Car, Gamepad2 } from "lucide-react";

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    icon: Smartphone,
    description: "Phones, Computers, Audio",
    color: "bg-blue-50 text-blue-600 border-blue-100"
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: Shirt,
    description: "Clothing, Shoes, Accessories",
    color: "bg-pink-50 text-pink-600 border-pink-100"
  },
  {
    id: "home",
    name: "Home & Garden",
    icon: Home,
    description: "Furniture, Décor, Tools",
    color: "bg-green-50 text-green-600 border-green-100"
  },
  {
    id: "industrial",
    name: "Industrial",
    icon: Wrench,
    description: "Machinery, Equipment",
    color: "bg-orange-50 text-orange-600 border-orange-100"
  },
  {
    id: "digital",
    name: "Digital Products",
    icon: Code,
    description: "Software, Licenses, NFTs",
    color: "bg-purple-50 text-purple-600 border-purple-100"
  },
  {
    id: "services",
    name: "Services",
    icon: Briefcase,
    description: "Consulting, Marketing",
    color: "bg-teal-50 text-teal-600 border-teal-100"
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: Car,
    description: "Cars, Parts, Accessories",
    color: "bg-red-50 text-red-600 border-red-100"
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: Gamepad2,
    description: "Games, Movies, Books",
    color: "bg-indigo-50 text-indigo-600 border-indigo-100"
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="marketplace-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Categories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover millions of products across diverse categories from verified suppliers worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group cursor-pointer bg-white rounded-xl p-6 border border-border hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;