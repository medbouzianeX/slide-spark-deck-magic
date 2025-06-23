
import React, { useEffect, useState } from 'react';

const ProjectSummarySlide = () => {
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

  const bulletPoints = [
    {
      title: "Problem Addressed",
      description: "Manual invoice processing is time-consuming, error-prone, and expensive for businesses"
    },
    {
      title: "Our Solution",
      description: "AI-powered automated extraction and processing of invoice data with 99.5% accuracy"
    },
    {
      title: "Expected Impact",
      description: "Reduce processing time by 85% and operational costs by 60% for our clients"
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center px-8 md:px-16">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1
          className={`text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-800 ${
            animationStep >= 1
              ? 'opacity-100 transform scale-100'
              : 'opacity-0 transform scale-95'
          }`}
        >
          Project Summary
        </h1>
        <div
          className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto transition-all duration-600 ${
            animationStep >= 1
              ? 'opacity-100 scale-x-100'
              : 'opacity-0 scale-x-0'
          }`}
        />
      </div>

      {/* Bullet Points */}
      <div className="max-w-4xl mx-auto space-y-8">
        {bulletPoints.map((point, index) => (
          <div
            key={index}
            className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 shadow-lg transition-all duration-800 ${
              animationStep >= index + 2
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
            }`}
            style={{
              transitionDelay: `${index * 400}ms`,
            }}
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">
                  {point.title}
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-6 h-6 bg-blue-400/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-20 w-4 h-4 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default ProjectSummarySlide;
