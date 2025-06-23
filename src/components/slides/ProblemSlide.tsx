import React, { useEffect, useState } from 'react';

const ProblemSlide = () => {
  const [animationStep, setAnimationStep] = useState(0);
  
  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStep(1), 300);
    const timer2 = setTimeout(() => setAnimationStep(2), 800);
    const timer3 = setTimeout(() => setAnimationStep(3), 1300);
    const timer4 = setTimeout(() => setAnimationStep(4), 1800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const dataPoints = [
    { value: "73%", label: "of businesses still process invoices manually" },
    { value: "8-12", label: "minutes average processing time per invoice" },
    { value: "$25", label: "average cost per manually processed invoice" },
    { value: "15%", label: "error rate in manual data entry" }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center px-8 md:px-16">
      {/* Heading with Zoom Animation */}
      <div className="text-center mb-16">
        <h1
          className={`text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent transition-all duration-800 ${
            animationStep >= 1
              ? 'opacity-100 transform scale-100'
              : 'opacity-0 transform scale-75'
          }`}
        >
          Targeted Problem
        </h1>
        <div
          className={`w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto transition-all duration-600 ${
            animationStep >= 1
              ? 'opacity-100 scale-x-100'
              : 'opacity-0 scale-x-0'
          }`}
        />
      </div>

      {/* Problem Description */}
      <div
        className={`max-w-4xl mx-auto mb-12 transition-all duration-800 ${
          animationStep >= 2
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <p className="text-xl md:text-2xl text-center text-slate-300 leading-relaxed">
          Manual invoice processing is creating significant bottlenecks for businesses worldwide, 
          leading to increased costs, errors, and operational inefficiencies.
        </p>
      </div>

      {/* Data Points with Bounce Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
        {dataPoints.map((point, index) => (
          <div
            key={index}
            className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 shadow-lg text-center transition-all duration-800 hover:scale-105 hover:shadow-red-500/20 ${
              animationStep >= 3
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-12'
            }`}
            style={{
              transitionDelay: `${index * 150}ms`,
              animation: animationStep >= 3 ? `bounce-in 0.6s ease-out ${index * 150}ms both` : 'none',
            }}
          >
            <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              {point.value}
            </div>
            <p className="text-slate-300 text-sm md:text-base">
              {point.label}
            </p>
          </div>
        ))}
      </div>

      {/* Chart Placeholder with Draw Animation */}
      <div
        className={`max-w-3xl mx-auto transition-all duration-1000 ${
          animationStep >= 4
            ? 'opacity-100 transform scale-100'
            : 'opacity-0 transform scale-95'
        }`}
      >
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
          <h3 className="text-xl font-semibold mb-6 text-center text-slate-200">
            Cost Impact Over Time
          </h3>
          <div className="h-32 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg flex items-end justify-center relative overflow-hidden">
            <div 
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-orange-400"
              style={{
                animation: animationStep >= 4 ? 'draw-line 2s ease-out' : 'none'
              }}
            />
            <span className="text-slate-400 text-sm">Chart visualization area</span>
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes bounce-in {
          0% {
            transform: translateY(20px) scale(0.9);
            opacity: 0;
          }
          50% {
            transform: translateY(-5px) scale(1.05);
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes draw-line {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
        `}
      </style>
    </div>
  );
};

export default ProblemSlide;
