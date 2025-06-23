
import React, { useEffect, useState } from 'react';

const CompetitiveAnalysisSlide = () => {
  const [animationStep, setAnimationStep] = useState(0);
  
  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStep(1), 300);
    const timer2 = setTimeout(() => setAnimationStep(2), 800);
    const timer3 = setTimeout(() => setAnimationStep(3), 1300);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const title = "Competitive Analysis";

  const competitors = [
    { name: "Legacy Solution A", score: 65 },
    { name: "Manual Processing", score: 30 },
    { name: "Competitor B", score: 72 },
    { name: "Doc-IN", score: 95, highlight: true }
  ];

  const swotData = [
    { 
      category: "Strengths", 
      items: ["AI-powered accuracy", "Real-time processing", "Easy integration"],
      side: "left"
    },
    { 
      category: "Weaknesses", 
      items: ["New market entrant", "Limited brand recognition"],
      side: "right"
    },
    { 
      category: "Opportunities", 
      items: ["Growing market demand", "Digital transformation trend"],
      side: "left"
    },
    { 
      category: "Threats", 
      items: ["Established competitors", "Economic uncertainty"],
      side: "right"
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center px-8 md:px-16 py-8">
      {/* Letter Split Animation Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          {title.split('').map((letter, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-600 ${
                animationStep >= 1
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>
        <div
          className={`w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto transition-all duration-600 ${
            animationStep >= 1
              ? 'opacity-100 scale-x-100'
              : 'opacity-0 scale-x-0'
          }`}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        {/* Competitor Comparison */}
        <div
          className={`mb-12 transition-all duration-800 ${
            animationStep >= 2
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-indigo-300">
            Market Position Comparison
          </h3>
          <div className="space-y-4">
            {competitors.map((competitor, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 transition-all duration-600 ${
                  animationStep >= 2
                    ? 'opacity-100 transform translate-x-0'
                    : 'opacity-0 transform translate-x-8'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className={`w-32 text-right ${competitor.highlight ? 'text-indigo-300 font-semibold' : 'text-slate-300'}`}>
                  {competitor.name}
                </div>
                <div className="flex-1 bg-slate-700/30 rounded-full h-6 relative overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      competitor.highlight
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500'
                        : 'bg-gradient-to-r from-slate-500 to-slate-400'
                    }`}
                    style={{
                      width: animationStep >= 2 ? `${competitor.score}%` : '0%',
                      transitionDelay: `${(index * 150) + 200}ms`,
                    }}
                  />
                </div>
                <div className={`w-12 text-left ${competitor.highlight ? 'text-indigo-300 font-semibold' : 'text-slate-400'}`}>
                  {competitor.score}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SWOT Analysis */}
        <div
          className={`transition-all duration-800 ${
            animationStep >= 3
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-indigo-300">
            SWOT Analysis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {swotData.map((section, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 shadow-lg transition-all duration-800 ${
                  animationStep >= 3
                    ? 'opacity-100 transform translate-x-0'
                    : `opacity-0 transform ${section.side === 'left' ? '-translate-x-8' : 'translate-x-8'}`
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <h4 className={`text-lg font-semibold mb-4 ${
                  section.category === 'Strengths' || section.category === 'Opportunities'
                    ? 'text-green-400'
                    : 'text-red-400'
                }`}>
                  {section.category}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`text-slate-300 flex items-center gap-2 transition-all duration-500 ${
                        animationStep >= 3
                          ? 'opacity-100 transform translate-x-0'
                          : 'opacity-0 transform translate-x-4'
                      }`}
                      style={{
                        transitionDelay: `${(index * 200) + (itemIndex * 100) + 300}ms`,
                      }}
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        section.category === 'Strengths' || section.category === 'Opportunities'
                          ? 'bg-green-400'
                          : 'bg-red-400'
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-indigo-400/30 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default CompetitiveAnalysisSlide;
