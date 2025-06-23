
import React, { useEffect, useState } from 'react';
import { TrendingUp, Clock, DollarSign, Target } from 'lucide-react';

const ValuePropositionSlide = () => {
  const [animationStep, setAnimationStep] = useState(0);
  
  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStep(1), 300);
    const timer2 = setTimeout(() => setAnimationStep(2), 800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const valuePoints = [
    {
      icon: Clock,
      title: "Time Savings",
      value: "85%",
      description: "Reduction in processing time"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      value: "60%",
      description: "Lower operational costs"
    },
    {
      icon: Target,
      title: "Accuracy",
      value: "99.5%",
      description: "Data extraction precision"
    },
    {
      icon: TrendingUp,
      title: "ROI",
      value: "300%",
      description: "Return on investment"
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center px-8 md:px-16">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1
          className={`text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent transition-all duration-800 ${
            animationStep >= 1
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          Value Added
        </h1>
        <div
          className={`w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto transition-all duration-600 ${
            animationStep >= 1
              ? 'opacity-100 scale-x-100'
              : 'opacity-0 scale-x-0'
          }`}
        />
      </div>

      {/* Value Proposition Statement */}
      <div
        className={`max-w-4xl mx-auto mb-16 transition-all duration-800 ${
          animationStep >= 1
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <p className="text-xl md:text-2xl text-center text-slate-300 leading-relaxed">
          Transform your business operations with measurable results that directly impact your bottom line.
        </p>
      </div>

      {/* Value Points Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {valuePoints.map((point, index) => {
          const IconComponent = point.icon;
          return (
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 shadow-lg text-center transition-all duration-800 hover:scale-110 hover:shadow-amber-500/30 ${
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
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Value */}
              <div 
                className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent transition-all duration-600 ${
                  animationStep >= 2 ? 'scale-110' : 'scale-100'
                }`}
                style={{
                  transitionDelay: `${(index * 200) + 300}ms`,
                }}
              >
                {point.value}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm">
                {point.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom Statement */}
      <div
        className={`max-w-4xl mx-auto mt-16 transition-all duration-1000 ${
          animationStep >= 2
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
        }`}
        style={{
          transitionDelay: '800ms',
        }}
      >
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-8 border border-amber-500/20">
          <p className="text-lg text-center text-slate-200 leading-relaxed">
            <span className="font-semibold text-amber-400">Doc-IN</span> doesn't just automate your processes—
            it transforms them into a competitive advantage that scales with your business growth.
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-5 h-5 bg-amber-400/30 rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-orange-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default ValuePropositionSlide;
