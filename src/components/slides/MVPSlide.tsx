
import React, { useEffect, useState } from 'react';
import { ExternalLink, Zap, Shield, Globe } from 'lucide-react';

const MVPSlide = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  
  const fullTitle = "MVP (Product/Service)";
  
  useEffect(() => {
    // Typewriter effect for title
    let currentIndex = 0;
    const typewriterTimer = setInterval(() => {
      if (currentIndex <= fullTitle.length) {
        setTypewriterText(fullTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriterTimer);
        setAnimationStep(1);
      }
    }, 80);

    return () => clearInterval(typewriterTimer);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Process invoices in under 30 seconds"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance"
    },
    {
      icon: Globe,
      title: "Multi-format Support",
      description: "PDF, images, and digital formats"
    }
  ];

  const links = [
    { title: "Live Demo", url: "#demo", primary: true },
    { title: "API Documentation", url: "#docs", primary: false },
    { title: "Beta Access", url: "#beta", primary: false }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center px-8 md:px-16">
      {/* Typewriter Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {typewriterText}
          <span className="animate-pulse">|</span>
        </h1>
        <div
          className={`w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto transition-all duration-600 ${
            animationStep >= 1
              ? 'opacity-100 scale-x-100'
              : 'opacity-0 scale-x-0'
          }`}
        />
      </div>

      {/* MVP Description */}
      <div
        className={`max-w-4xl mx-auto mb-12 transition-all duration-800 ${
          animationStep >= 1
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <p className="text-xl md:text-2xl text-center text-slate-300 leading-relaxed">
          Our Minimum Viable Product demonstrates core functionality with a user-friendly interface 
          that delivers immediate value to early adopters.
        </p>
      </div>

      {/* Feature Icons with Float Animation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 shadow-lg text-center transition-all duration-800 hover:scale-105 hover:shadow-purple-500/20 ${
                animationStep >= 1
                  ? 'opacity-100 transform translate-y-0 rotate-0'
                  : 'opacity-0 transform translate-y-8 rotate-6'
              }`}
              style={{
                transitionDelay: `${(index * 200) + 500}ms`,
              }}
            >
              <div className="mb-6">
                <IconComponent 
                  className={`w-16 h-16 mx-auto text-purple-400 transition-all duration-700 ${
                    animationStep >= 1 ? 'animate-bounce' : ''
                  }`}
                  style={{
                    animationDelay: `${(index * 200) + 800}ms`,
                    animationDuration: '2s',
                    animationIterationCount: '1'
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-slate-300">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Action Links with Ripple Effect */}
      <div className="flex flex-wrap gap-4 justify-center">
        {links.map((link, index) => (
          <button
            key={index}
            className={`group relative overflow-hidden px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
              link.primary
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-purple-500/50'
                : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:shadow-slate-500/30'
            } ${
              animationStep >= 1
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-4'
            }`}
            style={{
              transitionDelay: `${(index * 150) + 1000}ms`,
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              {link.title}
              <ExternalLink size={16} />
            </span>
            {/* Ripple Effect */}
            <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 rounded-lg transition-transform duration-500 origin-center" />
          </button>
        ))}
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-purple-400/20 rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-pink-400/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-300/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MVPSlide;
