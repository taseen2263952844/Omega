import React from 'react';
import { PageId } from '../types';
import { COURSES_DATA, NOTICES_DATA, TESTIMONIALS_DATA, ASSET_IMAGES } from '../data/mockData';
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Sparkles,
  Users,
  Compass,
  FileText,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, courseId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredCourses = COURSES_DATA.slice(0, 3);
  const urgentNotices = NOTICES_DATA.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Quiet Academic Kicker */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50/80 px-3 py-1 rounded-md border border-blue-100">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Premier Academic Coaching & University Admissions</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
                Transforming Ambition into Top-Tier University & Board Ranks
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Rigorous STEM pedagogy, small batches capped at 30 students, weekly simulated mock exams,
                and personalized 1-on-1 problem-solving clinics designed for students who refuse to settle.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('register')}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
                <button
                  onClick={() => onNavigate('courses')}
                  className="px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore All Programs</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Capped 30-Student Cohorts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Central Lab Practical Training</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Daily Parent SMS Attendance</span>
                </div>
              </div>
            </div>

            {/* Right Media Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 aspect-4/3 lg:aspect-auto lg:h-[420px] bg-slate-100">
                <img
                  src={ASSET_IMAGES.heroCampus}
                  alt="Students at Omega Academic Coaching Library and Campus"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-semibold tracking-wider uppercase text-amber-400">
                    Central Campus Atrium
                  </span>
                  <p className="text-sm font-medium text-slate-100 mt-1">
                    An inspiring sanctuary of quiet discipline and collaborative academic inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Column Proof Metric Strip */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-950 tabular-nums">15+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Years of Academic Pedagogy
              </div>
              <p className="text-xs text-slate-600">Established in 2011 with unwavering educational standards.</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-950 tabular-nums">98.4%</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Board & Exam Success Rate
              </div>
              <p className="text-xs text-slate-600">Students achieving GPA 5.0 and top percentile merit.</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-950 tabular-nums">4,200+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Top University Placements
              </div>
              <p className="text-xs text-slate-600">Alumni studying in BUET, DMC, IBA, and international universities.</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-950 tabular-nums">&le; 30</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Max Students Per Batch
              </div>
              <p className="text-xs text-slate-600">No mass lecture halls; every learner receives active teacher focus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 4 PILLARS OF OMEGA */}
      <section className="bg-slate-100/70 py-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-1">
              The Omega Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              A Scientific Methodology Engineered for Peak Exam Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3 shadow-sm hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5 text-blue-900" />
              </div>
              <h3 className="text-base font-bold text-slate-900">01. Conceptual Intuition</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We dismantle complex calculus, physics mechanics, and organic reactions into first principles so students solve non-routine entrance problems without panic.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3 shadow-sm hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center font-bold">
                <Users className="w-5 h-5 text-blue-900" />
              </div>
              <h3 className="text-base font-bold text-slate-900">02. Small-Batch Discipline</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Classes are strictly restricted to 25-30 students. Teachers call on students by name, verify work live, and maintain high engagement throughout every session.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3 shadow-sm hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5 text-blue-900" />
              </div>
              <h3 className="text-base font-bold text-slate-900">03. Weekly Diagnostic Exams</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standardized mock exams with negative-marking criteria simulate exact competitive conditions. Weak areas are flagged automatically on student portals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3 shadow-sm hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-blue-900" />
              </div>
              <h3 className="text-base font-bold text-slate-900">04. Radical Transparency</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instant biometric SMS arrival notifications, accessible parent portal gradebooks, and scheduled monthly consultations ensure family peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROGRAMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-1">
              Curriculum Tracks
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Featured Academic Coaching Programs
            </h2>
          </div>
          <button
            onClick={() => onNavigate('courses')}
            className="text-sm font-semibold text-blue-900 hover:text-blue-950 flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <span>View All Programs ({COURSES_DATA.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-semibold text-blue-900">{course.level}</span>
                  {course.badge && (
                    <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[11px] font-medium border border-amber-200">
                      {course.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {course.overview}
                </p>

                {/* Course Metadata (No static pill clutter, clean unboxed metadata) */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Duration:</span>
                    <span className="font-medium text-slate-900">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Batch Limit:</span>
                    <span className="font-medium text-slate-900">{course.batchSize} students</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Lead Faculty:</span>
                    <span className="font-medium text-slate-900">{course.leadInstructor.name}</span>
                  </div>
                </div>
              </div>

              {/* Action Strip */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onNavigate('course-details', course.id)}
                  className="text-xs font-semibold text-blue-950 hover:underline cursor-pointer"
                >
                  View Details & Syllabus
                </button>
                <button
                  onClick={() => onNavigate('register')}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-md transition-colors cursor-pointer"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CAMPUS FACILITIES & IMMERSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-blue-950 text-white rounded-2xl p-8 sm:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                World-Class Academic Infrastructure
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Equipped for Practical Mastery, Not Just Blackboard Lectures
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Our campuses feature certified chemistry and optics laboratories, temperature-controlled amphitheater classrooms, curated reference libraries, and high-speed fiber-optic study carrels.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>3 Strategic Campuses (Dhanmondi, Uttara, Gulshan)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Biometric Security & Digital Attendance</span>
                </div>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('gallery')}
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Campus Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden aspect-square border border-blue-900">
                <img
                  src={ASSET_IMAGES.classroom}
                  alt="Modern classroom"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square border border-blue-900">
                <img
                  src={ASSET_IMAGES.lab}
                  alt="Science lab"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. URGENT NOTICES & CIRCULARS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-1">
              Official Bulletin
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Latest Circulars & Exam Schedules
            </h2>
          </div>
          <button
            onClick={() => onNavigate('notices')}
            className="text-xs font-semibold text-blue-900 hover:text-blue-950 flex items-center gap-1 cursor-pointer"
          >
            <span>All Notices</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {urgentNotices.map((notice) => (
            <div
              key={notice.id}
              className="p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">{notice.referenceNo}</span>
                  <span className="text-slate-500">{notice.date}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 line-clamp-2">
                  {notice.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {notice.summary}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px] truncate max-w-[150px]">
                  {notice.targetAudience}
                </span>
                <button
                  onClick={() => onNavigate('notices')}
                  className="text-blue-950 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Circular</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PROOF & TESTIMONIALS */}
      <section className="bg-slate-100/70 py-14 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-1">
              Verified Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Words from Our Achievers and Guardians
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <div className="text-sm font-bold text-slate-900">{item.studentName}</div>
                  <div className="text-xs font-semibold text-blue-900">{item.achievement}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{item.program} · {item.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL ENROLLMENT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-blue-950 rounded-2xl p-8 sm:p-12 text-center text-white space-y-6 max-w-4xl mx-auto border border-blue-900 shadow-xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <GraduationCap className="w-4 h-4" />
            <span>Admissions for Academic Session 2026</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white max-w-2xl mx-auto text-balance">
            Seats Are Strictly Capped at 30 per Batch. Secure Your Diagnostic Test.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Take our 60-minute non-punitive baseline assessment to map out your weaknesses before classes begin.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('register')}
              className="px-6 py-3.5 text-sm font-bold text-blue-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Submit Admission Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 border border-blue-700 rounded-lg transition-colors cursor-pointer"
            >
              <span>Visit Campus in Person</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
