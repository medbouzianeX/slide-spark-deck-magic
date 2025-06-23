
import React, { useEffect, useState } from 'react';
import { DollarSign, Repeat, Zap } from 'lucide-react';

const BusinessModelSlide = () => {
  const [animationStep, setAnimationStep] = useState(0);
  
  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStep(1), 300);
    const timer2 = setTimeout(() => setAnimationStep(2), 800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const revenueStreams = [
    {
      icon: Repeat,
      title: "Subscription Model",
      price: "$99-499/month",
      description: "Tiered pricing based on invoice volume",
      features: ["Basic: 100 invoices/month", "Pro: 1000 invoices/month", "Enterprise: Unlimited"]
    },
    {
      icon: Zap,
      title: "Pay-per-Use",
      price: "$0.50-2.00",
      description: "Per invoice processed",
      features: ["No monthly commitment", "Scale with usage", "Perfect for seasonal businesses"]
    },
    {
      icon: DollarSign,
      title: "Enterprise Licensing",
      price: "Custom",
      description: "Annual contracts for large organizations",
      features: ["White-label solutions", "Custom integrations", "Dedicated support"]
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center px-8 md:px-16">
      {/* Heading with Fade + Rotate Animation */}
      <div className="text-center mb-16">
        <h1
          className={`text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent transition-all duration-800 ${
            animationStep >= 1
              ? 'opacity-100 transform rotate-0'
              : 'opacity-0 transform rotate-12'
          }`}
        >
          Business Model
        </h1>
        <div
          className={`w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto transition-all duration-600 ${
            animationStep >= 1
              ? 'opacity-100 scale-x-100'
              : 'opacity-0 scale-x-0'
          }`}
        />
      </div>

      {/* Revenue Overview */}
      <div
        className={`max-w-4xl mx-auto mb-12 transition-all duration-800 ${
          animationStep >= 1
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-4 text-green-300">Projected Revenue</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-2xl font-bold text-white">Year 1</p>
              <p className="text-green-400">$250K</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">Year 2</p>
              <p className="text-green-400">$1.2M</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">Year 3</p>
              <p className="text-green-400">$3.5M</p>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Streams */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {revenueStreams.map((stream, index) => {
          const IconComponent = stream.icon;
          return (
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 shadow-lg transition-all duration-800 hover:scale-105 hover:shadow-green-500/20 ${
                animationStep >= 2
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 300}ms`,
              }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-white text-center">
                {stream.title}
              </h3>

              {/* Price */}
              <div className="text-2xl font-bold mb-3 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {stream.price}
              </div>

              {/* Description */}
              <p className="text-slate-300 text-center mb-4">
                {stream.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {stream.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-slate-400 text-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-green-400/30 rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default BusinessModelSlide;
