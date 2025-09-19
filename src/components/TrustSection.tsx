import { Shield, Award, Truck, Users } from "lucide-react";

const trustFeatures = [
  {
    icon: Shield,
    title: "Secure Payments",
    description: "End-to-end encryption with escrow protection for all transactions",
    highlight: "SSL Encrypted"
  },
  {
    icon: Award,
    title: "Verified Suppliers",
    description: "All sellers undergo rigorous KYC verification and quality checks",
    highlight: "100% Verified"
  },
  {
    icon: Truck,
    title: "Global Shipping",
    description: "Reliable delivery to 180+ countries with tracking and insurance",
    highlight: "Worldwide Delivery"
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Professional customer service team available around the clock",
    highlight: "Always Available"
  }
];

const TrustSection = () => {
  return (
    <section className="py-16 bg-gradient-card">
      <div className="marketplace-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Samos Trade?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built on trust, security, and reliability - the foundation of successful global trading
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <div className="inline-block bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium">
                    {feature.highlight}
                  </div>
                  <h3 className="text-xl font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Stats Bar */}
        <div className="mt-16 bg-white rounded-2xl shadow-card p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$2.4B+</div>
              <div className="text-muted-foreground">Total Trade Volume</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500K+</div>
              <div className="text-muted-foreground">Successful Trades</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;