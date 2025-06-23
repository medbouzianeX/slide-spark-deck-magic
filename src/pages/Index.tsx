
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import TitleSlide from '../components/slides/TitleSlide';
import ProjectSummarySlide from '../components/slides/ProjectSummarySlide';
import TeamSlide from '../components/slides/TeamSlide';
import ProblemSlide from '../components/slides/ProblemSlide';
import SolutionSlide from '../components/slides/SolutionSlide';
import MVPSlide from '../components/slides/MVPSlide';
import ValuePropositionSlide from '../components/slides/ValuePropositionSlide';
import CompetitiveAnalysisSlide from '../components/slides/CompetitiveAnalysisSlide';
import TargetMarketSlide from '../components/slides/TargetMarketSlide';
import BusinessModelSlide from '../components/slides/BusinessModelSlide';
import RoadmapSlide from '../components/slides/RoadmapSlide';

const slides = [
  { id: 1, component: TitleSlide, title: 'Title' },
  { id: 2, component: ProjectSummarySlide, title: 'Project Summary' },
  { id: 3, component: TeamSlide, title: 'Team' },
  { id: 4, component: ProblemSlide, title: 'Problem' },
  { id: 5, component: SolutionSlide, title: 'Solution' },
  { id: 6, component: MVPSlide, title: 'MVP' },
  { id: 7, component: ValuePropositionSlide, title: 'Value Proposition' },
  { id: 8, component: CompetitiveAnalysisSlide, title: 'Competitive Analysis' },
  { id: 9, component: TargetMarketSlide, title: 'Target Market' },
  { id: 10, component: BusinessModelSlide, title: 'Business Model' },
  { id: 11, component: RoadmapSlide, title: 'Roadmap' },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresenting, setIsPresenting] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        setIsPresenting(false);
      }
    };

    if (isPresenting) {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [isPresenting]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {!isPresenting ? (
        // Slide Overview Mode
        <div className="container mx-auto px-6 py-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Doc-IN Pitch Deck
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Innovative Automated Invoice Data Extraction
            </p>
            <button
              onClick={() => setIsPresenting(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <Play size={20} />
              Start Presentation
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsPresenting(true);
                }}
                className="bg-slate-800/50 rounded-xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-slate-700/50 shadow-lg hover:shadow-blue-500/20 border border-slate-700/50"
              >
                <div className="text-sm text-blue-400 font-medium mb-2">
                  Slide {slide.id}
                </div>
                <h3 className="text-lg font-semibold mb-2">{slide.title}</h3>
                <div className="w-full h-32 bg-slate-700/30 rounded-lg flex items-center justify-center text-slate-400">
                  Preview
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Presentation Mode
        <div className="relative h-screen flex flex-col">
          {/* Slide Content */}
          <div className="flex-1 relative overflow-hidden">
            <div
              key={currentSlide}
              className="absolute inset-0 animate-fade-in"
            >
              <CurrentSlideComponent />
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 rounded-full bg-blue-600/20 hover:bg-blue-600/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-blue-400 scale-125'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-2 rounded-full bg-blue-600/20 hover:bg-blue-600/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Exit Presentation */}
          <button
            onClick={() => setIsPresenting(false)}
            className="absolute top-8 right-8 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-lg hover:bg-black/40 transition-all duration-200"
          >
            Exit (ESC)
          </button>

          {/* Slide Counter */}
          <div className="absolute top-8 left-8 bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
