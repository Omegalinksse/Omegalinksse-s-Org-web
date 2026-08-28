import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { TrainingSection } from '../components/TrainingSection';
import {
  GraduationCap,
  BookOpen,
  Award,
  CheckCircle2,
  Users,
  Laptop,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface TrainingPageProps {
  onNavigate: (page: string) => void;
  onEnrollCourse: (courseTitle: string) => void;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({
  onNavigate,
  onEnrollCourse,
}) => {
  return (
    <div className="relative">
      {/* 1. Page Header */}
      <PageHeader
        badge="Certified Practical Education"
        badgeIcon={GraduationCap}
        title="Omegalinks Digital Academy: Practical Skills for the Modern Economy"
        subtitle="Step into high-impact digital careers with certified, lab-intensive training in Computer Fundamentals, CorelDRAW Graphic Design, Full-Stack Web Development, and Corporate Office Productivity."
        currentPageTitle="Digital Academy"
        onNavigateHome={() => onNavigate('home')}
        actions={
          <>
            <button
              onClick={() => onEnrollCourse('General Academy Enrollment Inquiry')}
              className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-[0_0_15px_rgba(16,185,129,0.4)]"
            >
              Enroll for Next Cohort
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-semibold text-xs transition-all"
            >
              Inquire About Corporate Training
            </button>
          </>
        }
      />

      {/* 2. Interactive Academy Section */}
      <TrainingSection onEnrollCourse={onEnrollCourse} />

      {/* 3. Academy Features & Methodology */}
      <section className="py-20 bg-slate-100/60 dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-emerald-600 dark:text-emerald-400 font-tech text-xs uppercase tracking-wider font-semibold mb-2">
              Our Training Pedagogy
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              Why Omegalinks Academy Produces Confident Graduates
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
              We reject purely theoretical slide presentations. Our curriculum is 80% hands-on laboratory exercises with real-world client briefs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-slate-900 dark:text-white text-base mb-2">
                1-on-1 Workstation Access
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                Every student in our physical training center receives a dedicated high-spec workstation configured with industry standard development environments and design suites.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-slate-900 dark:text-white text-base mb-2">
                Verified Graduation Capstone
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                Graduation certificates are only awarded upon successful defense of an end-of-program capstone project (a live web app, a brand identity kit, or automated database).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-slate-900 dark:text-white text-base mb-2">
                Post-Training Mentorship
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                Graduates gain lifelong access to the Omegalinks Alumni Network, peer code reviews, freelance opportunity referrals, and internship opportunities in our engineering wing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Enrollment Banner */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 dark:from-emerald-950/40 dark:via-cyan-950/30 dark:to-emerald-950/40 border-t border-slate-200 dark:border-white/10 text-center transition-colors">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-3">
            Ready to Begin Your Tech Journey?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-6">
            Admissions are open for our upcoming cohort. Secure your seat today and master in-demand technology skills.
          </p>
          <button
            onClick={() => onEnrollCourse('General Academy Enrollment')}
            className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:scale-105"
          >
            Apply for Admission Now
          </button>
        </div>
      </section>
    </div>
  );
};
