
import React, { useEffect, useState } from 'react';
import { Calendar, CheckCircle, Clock, Star } from 'lucide-react';

const RoadmapSlide = () => {
  const [animationStep, setAnimationStep] = useState(0);
  
  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStep(1), 300);
    const timer2 = setTimeout(() => setAnimationStep(2), 800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const milestones = [
    {
      phase: "Q1 2024",
      title: "MVP Launch",
      status: "completed",
      icon: CheckCircle,
      tasks: ["Core OCR functionality", "Basic web interface", "Initial integrations"]
    },
    {
      phase: "Q2 2024",
      title: "Beta Testing",
      status: "current",
      icon: Clock,
      tasks: ["User feedback integration", "Performance optimization", "Security enhancements"]
    },
    {
      phase: "Q3 2024",
      title: "Market Launch",
      status: "upcoming",
      icon: Star,
      tasks: ["Public release", "Marketing campaign", "Customer onboarding"]
    },
    {
      phase: "Q4 2024",
      title: "Scale & Expand",
      status: "upcoming",
      icon: Calendar,
      tasks: ["Advanced AI features", "Enterprise solutions", "International expansion"]
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center px-8 md:px-16 py-8">
      {/* Heading with Draw-on Line Effect */}
      <div className="text-center mb-16">
        <h1
          className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent transition-all duration-800 ${
            animationStep >= 1
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          Roadmap & Strategy
        </h1>
        <div
          className={`w-64 h-1 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto transition-all duration-1000 ${
            animationStep >= 1
              ? 'opacity-100 scale-x-100'
              : 'opacity-0 scale-x-0'
          }`}
          style={{
            animation: animationStep >= 1 ? 'draw-line 2s ease-out' : 'none'
          }}
        />
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto w-full">
        <div className="relative">
          {/* Vertical Line */}
          <div 
            className={`absolute left-8 top-0 w-1 bg-gradient-to-b from-violet-400 to-purple-400 transition-all duration-2000 ${
              animationStep >= 2 ? 'h-full opacity-100' : 'h-0 opacity-0'
            }`}
          />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const statusColors = {
                completed: 'from-green-500 to-emerald-500',
                current: 'from-violet-500 to-purple-500',
                upcoming: 'from-slate-500 to-slate-400'
              };

              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 transition-all duration-800 ${
                    animationStep >= 2
                      ? 'opacity-100 transform translate-x-0'
                      : 'opacity-0 transform translate-x-8'
                  }`}
                  style={{
                    transitionDelay: `${index * 300}ms`,
                  }}
                >
                  {/* Timeline Dot */}
                  <div className={`relative z-10 w-16 h-16 bg-gradient-to-r ${statusColors[milestone.status]} rounded-full flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-medium text-violet-400 bg-violet-400/10 px-3 py-1 rounded-full">
                        {milestone.phase}
                      </span>
                      <h3 className="text-xl font-semibold text-white">
                        {milestone.title}
                      </h3>
                    </div>

                    <ul className="space-y-2">
                      {milestone.tasks.map((task, taskIndex) => (
                        <li 
                          key={taskIndex}
                          className={`text-slate-300 flex items-center gap-2 transition-all duration-500 ${
                            animationStep >= 2
                              ? 'opacity-100 transform translate-x-0'
                              : 'opacity-0 transform translate-x-4'
                          }`}
                          style={{
                            transitionDelay: `${(index * 300) + (taskIndex * 100) + 200}ms`,
                          }}
                        >
                          <div className={`w-2 h-2 rounded-full ${
                            milestone.status === 'completed' ? 'bg-green-400' :
                            milestone.status === 'current' ? 'bg-violet-400' : 'bg-slate-400'
                          }`} />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-violet-400/30 rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      <style>
        {`
        @keyframes draw-line {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          100% {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
        `}
      </style>
    </div>
  );
};

export default RoadmapSlide;
