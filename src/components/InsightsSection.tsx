import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  User,
  ArrowRight,
  Sparkles,
  Calendar,
  X,
} from 'lucide-react';
import { BLOG_POSTS } from '../data/companyData';
import { BlogPost } from '../types';

export const InsightsSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <section id="insights" className="relative py-20 bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Thought Leadership & Industry Perspectives</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            OMEGALINKS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400">
              TECH INSIGHTS
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical analyses on software engineering architectures, digital transformation strategies, and modern computer literacy.
          </p>
        </div>

        {/* 3 Featured Insights Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg text-left flex flex-col justify-between backdrop-blur-sm"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-tech font-semibold uppercase text-[10px]">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-2.5 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {post.summary}
                </p>
              </div>

              {/* Footer Author & Read Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-slate-300 text-xs">
                  <User className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-[11px] font-semibold">{post.author}</span>
                </div>

                <button
                  onClick={() => setActiveArticle(post)}
                  className="text-xs font-bold text-blue-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#020617] border border-white/10 p-6 sm:p-8 text-left shadow-2xl backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white border border-white/10 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-tech font-bold uppercase">
                {activeArticle.category}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 font-tech">{activeArticle.date}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 font-tech">{activeArticle.readTime}</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-3xl text-white mb-3 leading-tight">
              {activeArticle.title}
            </h2>

            <div className="flex items-center gap-2 text-xs text-slate-300 pb-4 mb-6 border-b border-white/10">
              <User className="w-4 h-4 text-blue-400" />
              <span>By {activeArticle.author} (Founder & Lead Developer, Omegalinks)</span>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p className="font-semibold text-slate-200">
                {activeArticle.summary}
              </p>
              <p>
                In today's fast-evolving technological landscape, organizations cannot rely on off-the-shelf templates or fragmented manual workflows. Building real competitive advantage demands tailored architectures, scalable database schemas, and digital training that upskills the workforce.
              </p>
              <p>
                At Omegalinks Digital Technology, our projects demonstrate that whether designing a localized campus recovery platform like TraceHop, establishing multi-branch inventory tracking, or training young professionals in python programming, intentional engineering delivers lasting institutional value.
              </p>
              <div className="p-4 rounded-xl bg-blue-500/10 border-l-4 border-blue-500 text-blue-200 text-xs italic my-4">
                "Digital transformation is not simply installing software; it is the thoughtful alignment of technology, human capability, and operational discipline."
              </div>
              <p>
                We invite you to reach out and explore how our four divisions can accelerate your organization's digital journey.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 rounded-full bg-white/5 text-slate-200 hover:text-white border border-white/10 hover:border-blue-500/50 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
