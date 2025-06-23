
import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const SolutionSlide = () => {
  const [animationStep, setAnimationStep] = useState(0);
  
  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStep(1), 300);
    const timer2 = setTimeout(() => setAnimationStep(2), 800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const solutionPoints = [
    "AI-powered OCR technology for accurate data extraction",
    "Machine learning algorithms that improve over time",
    "Seamless integration with existing accounting systems",
    "Real-time processing with 99.5% accuracy rate",
    "Automated validation and error detection",
    "Cloud-based solution with enterprise security"
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center px-8 md:px-16">
      {/* Heading with Slide from Left Animation */}
      <div className="text-center mb-16">
        <h1
          className={`text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent transition-all duration-800 ${
            animationStep >= 1
              ? 'opacity-100 transform translate-x-0'
              : 'opacity-0 transform -translate-x-12'
          }`}
        >
          Our Solution
        </h1>
        <div
          className={`w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto transition-all duration-600 ${
            animationStep >= 1
              ? 'opacity-100 scale-x-100'
              : 'opacity-0 scale-x-0'
          }`}
        />
      </div>

      {/* Solution Description */}
      <div
        className={`max-w-4xl mx-auto mb-12 transition-all duration-800 ${
          animationStep >= 1
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <p className="text-xl md:text-2xl text-center text-slate-300 leading-relaxed mb-8">
          Doc-IN leverages cutting-edge artificial intelligence to automate invoice processing, 
          eliminating manual errors and dramatically reducing processing time.
        </p>
      </div>

      {/* Solution Points */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {solutionPoints.map((point, index) => (
          <div
            key={index}
            className={`flex items-start gap-4 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 shadow-lg transition-all duration-800 hover:scale-105 hover:shadow-green-500/20 ${
              animationStep >= 2
                ? 'opacity-100 transform scale-100'
                : 'opacity-0 transform scale-95'
            }`}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
          >
            <div className="flex-shrink-0">
              <CheckCircle 
                className={`w-6 h-6 text-green-400 transition-all duration-500 ${
                  animationStep >= 2 ? 'scale-100' : 'scale-0'
                }`}
                style={{
                  transitionDelay: `${(index * 150) + 200}ms`,
                }}
              />
            </div>
            <p className="text-slate-300 leading-relaxed">
              {point}
            </p>
          </div>
        ))}
      </div>

      {/* Central Solution Visual */}
      <div
        className={`mt-12 transition-all duration-1000 ${
          animationStep >= 2
            ? 'opacity-100 transform scale-100 rotate-0'
            : 'opacity-0 transform scale-75 rotate-12'
        }`}
      >
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/30">
            <span className="text-2xl font-bold text-white">AI</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full animate-ping" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-400/30 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-emerald-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-green-300/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default SolutionSlide;
