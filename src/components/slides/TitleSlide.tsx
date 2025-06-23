
import React, { useEffect, useState } from 'react';

const TitleSlide = () => {
  const [animationStep, setAnimationStep] = useState(0);
  
  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStep(1), 200);
    const timer2 = setTimeout(() => setAnimationStep(2), 800);
    const timer3 = setTimeout(() => setAnimationStep(3), 1400);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const title = "Doc-IN";
  const subtitle = "Innovative Automated Invoice Data Extraction";

  return (
    <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Title with Letter Animation */}
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-8xl md:text-9xl font-bold mb-6 relative">
          {title.split('').map((letter, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-600 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent ${
                animationStep >= 1
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {letter === '-' ? (
                <span className="mx-2 inline-block w-8 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transform translate-y-[-0.5rem]" />
              ) : (
                letter
              )}
            </span>
          ))}
        </h1>

        {/* Subtitle with Slide Up Animation */}
        <p
          className={`text-2xl md:text-3xl text-slate-300 font-light transition-all duration-800 ${
            animationStep >= 2
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-6'
          }`}
        >
          {subtitle}
        </p>

        {/* Decorative Line */}
        <div
          className={`w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-8 transition-all duration-1000 ${
            animationStep >= 3
              ? 'opacity-100 scale-x-100'
              : 'opacity-0 scale-x-0'
          }`}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-300/50 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default TitleSlide;
