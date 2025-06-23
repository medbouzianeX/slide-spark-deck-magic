
import React, { useEffect, useState } from 'react';

const TeamSlide = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  
  const fullTitle = "The Team";
  
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
    }, 100);

    return () => clearInterval(typewriterTimer);
  }, []);

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Co-founder",
      expertise: "AI/ML Strategy",
      avatar: "AJ"
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-founder", 
      expertise: "System Architecture",
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      expertise: "Full-Stack Development",
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      role: "Data Scientist",
      expertise: "Machine Learning",
      avatar: "EW"
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center px-8 md:px-16">
      {/* Typewriter Title */}
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {typewriterText}
          <span className="animate-pulse">|</span>
        </h1>
        <div
          className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto transition-all duration-600 ${
            animationStep >= 1
              ? 'opacity-100 scale-x-100'
              : 'opacity-0 scale-x-0'
          }`}
        />
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`group transition-all duration-800 ${
              animationStep >= 1
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
            }`}
            style={{
              transitionDelay: `${(index * 200) + 500}ms`,
            }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 cursor-pointer">
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:rotate-6 transition-transform duration-300">
                  {member.avatar}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3
                  className={`text-xl font-semibold mb-2 text-white transition-all duration-500 ${
                    animationStep >= 1
                      ? 'opacity-100 transform translate-y-0'
                      : 'opacity-0 transform translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${(index * 200) + 800}ms`,
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className={`text-blue-300 font-medium mb-2 transition-all duration-500 ${
                    animationStep >= 1
                      ? 'opacity-100 transform translate-y-0'
                      : 'opacity-0 transform translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${(index * 200) + 900}ms`,
                  }}
                >
                  {member.role}
                </p>
                <p
                  className={`text-slate-400 text-sm transition-all duration-500 ${
                    animationStep >= 1
                      ? 'opacity-100 transform translate-y-0'
                      : 'opacity-0 transform translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${(index * 200) + 1000}ms`,
                  }}
                >
                  {member.expertise}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default TeamSlide;
