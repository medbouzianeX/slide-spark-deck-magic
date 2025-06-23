
import React, { useEffect, useState } from 'react';
import { Target, TrendingUp, Users, Building } from 'lucide-react';

const TargetMarketSlide = () => {
  const [animationStep, setAnimationStep] = useState(0);
  
  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStep(1), 300);
    const timer2 = setTimeout(() => setAnimationStep(2), 800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const marketSegments = [
    {
      icon: Building,
      title: "Small-Medium Enterprises",
      size: "60%",
      description: "Companies processing 100-1000 invoices monthly"
    },
    {
      icon: TrendingUp,
      title: "Growing Businesses",
      size: "25%",
      description: "Scaling companies needing automation"
    },
    {
      icon: Users,
      title: "Accounting Firms",
      size: "15%",
      description: "Service providers managing multiple clients"
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center px-8 md:px-16">
      {/* Heading with Bounce Animation */}
      <div className="text-center mb-16">
        <h1
          className={`text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent transition-all duration-800 ${
            animationStep >= 1
              ? 'opacity-100 transform scale-100'
              : 'opacity-0 transform scale-75'
          }`}
          style={{
            animation: animationStep >= 1 ? 'bounce-in 0.8s ease-out' : 'none'
          }}
        >
          Target Market
        </h1>
        <div
          className={`w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto transition-all duration-600 ${
            animationStep >= 1
              ? 'opacity-100 scale-x-100'
              : 'opacity-0 scale-x-0'
          }`}
        />
      </div>

      {/* Market Overview */}
      <div
        className={`max-w-4xl mx-auto mb-12 transition-all duration-800 ${
          animationStep >= 1
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 shadow-lg text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Target className="w-8 h-8 text-emerald-400" />
            <h3 className="text-2xl font-semibold text-emerald-300">Total Addressable Market</h3>
          </div>
          <p className="text-4xl font-bold text-white mb-2">$12.8 Billion</p>
          <p className="text-slate-300">Global invoice processing automation market by 2027</p>
        </div>
      </div>

      {/* Market Segments */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {marketSegments.map((segment, index) => {
          const IconComponent = segment.icon;
          return (
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 shadow-lg text-center transition-all duration-800 hover:scale-105 hover:shadow-emerald-500/20 ${
                animationStep >= 2
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Market Size */}
              <div className="text-3xl font-bold mb-3 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {segment.size}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {segment.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm">
                {segment.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-5 h-5 bg-emerald-400/30 rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-teal-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      <style>
        {`
        @keyframes bounce-in {
          0% {
            transform: scale(0.3) rotate(-10deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.1) rotate(5deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        `}
      </style>
    </div>
  );
};

export default TargetMarketSlide;
