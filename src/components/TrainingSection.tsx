import React, { useState } from 'react';
import {
  GraduationCap,
  CheckCircle2,
  Clock,
  BookOpen,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight,
  Monitor,
  Palette,
  Code2,
  Briefcase,
  Award,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { ACADEMY_COURSES, TRAINING_HIGHLIGHTS } from '../data/companyData';
import { Course } from '../types';

interface TrainingSectionProps {
  onEnrollCourse: (courseName: string) => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({
  onEnrollCourse,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const categories = [
    'ALL',
    'Office Productivity',
    'Creative & Design',
    'Software & Web',
    'Professional & Career',
  ];

  const filteredCourses = ACADEMY_COURSES.filter((c) => {
    if (selectedCategory === 'ALL') return true;
    return c.category === selectedCategory;
  });

  const toggleCourseExpand = (id: string) => {
    setExpandedCourseId(expandedCourseId === id ? null : id);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Office Productivity':
        return Monitor;
      case 'Creative & Design':
        return Palette;
      case 'Software & Web':
        return Code2;
      case 'Professional & Career':
        return Briefcase;
      default:
        return BookOpen;
    }
  };

  return (
    <section id="training" className="relative py-20 bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Omegalinks Digital Academy</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            PRACTICAL TECHNOLOGY EDUCATION & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400">
              HIGH-STANDARD SKILLS ACADEMY
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Our academy bridges the gap between theoretical knowledge and real industry practice. Learn through project-based curriculum, individualized mentorship, and authentic vocational skills.
          </p>
        </div>

        {/* Training Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-14">
          {TRAINING_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 backdrop-blur-sm transition-all text-center flex flex-col items-center justify-center"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/20 flex items-center justify-center mb-2">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-200 mb-1">{item.title}</h4>
              <p className="text-[10px] text-slate-400 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex items-center flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-tech font-bold tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const CategoryIcon = getCategoryIcon(course.category);
            const isExpanded = expandedCourseId === course.id;

            return (
              <div
                key={course.id}
                className="group rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between backdrop-blur-sm"
              >
                <div>
                  {/* Category & Level Badges */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-tech font-bold uppercase tracking-wider">
                      <CategoryIcon className="w-3 h-3" />
                      <span>{course.category}</span>
                    </div>

                    <span className="text-[11px] font-tech font-semibold text-slate-400">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {course.description}
                  </p>

                  {/* Schedule & Duration Meta */}
                  <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-2xl bg-white/5 border border-white/10 text-[11px]">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="truncate">{course.trainingFormat}</span>
                    </div>
                  </div>

                  {/* Syllabus Modules Toggle */}
                  <div className="mb-4">
                    <button
                      onClick={() => toggleCourseExpand(course.id)}
                      className="w-full text-left text-xs font-semibold text-slate-300 hover:text-blue-300 flex items-center justify-between py-1 border-b border-white/10"
                    >
                      <span>Syllabus Modules ({course.syllabus.length})</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-2 space-y-1.5 pt-1 animate-in fade-in duration-200">
                        {course.syllabus.map((modItem, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col text-[11px] text-slate-300 pb-1 border-b border-white/5"
                          >
                            <span className="text-blue-400 font-tech font-bold text-[10px]">
                              {modItem.module}
                            </span>
                            <span className="text-slate-400 text-[11px]">{modItem.topics.join(' • ')}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Enroll CTA */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    Certification upon project completion
                  </div>

                  <button
                    onClick={() => onEnrollCourse(course.title)}
                    className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_10px_rgba(37,99,235,0.3)] flex items-center gap-1.5"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate / Institutional Training Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-tech font-bold uppercase">
              Corporate & Institutional Programs
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              Upskill Your Team or Educational Institution
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              We deliver custom on-site or hybrid training for businesses, schools, and organizations needing practical office automation, data analysis, or web skills.
            </p>
          </div>

          <button
            onClick={() => onEnrollCourse('Corporate & Institutional Training')}
            className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 text-slate-200 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all"
          >
            Inquire for Organizations
          </button>
        </div>
      </div>
    </section>
  );
};
