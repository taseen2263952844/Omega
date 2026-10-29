import React, { useState, useMemo } from 'react';
import { PageId } from '../types';
import { COURSES_DATA } from '../data/mockData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Search, BookOpen, Clock, Users, ArrowRight, UserCheck, Check, Sparkles } from 'lucide-react';

interface CoursesPageProps {
  onNavigate: (page: PageId, courseId?: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'engineering', label: 'Pre-Engineering' },
    { id: 'medical', label: 'Pre-Medical' },
    { id: 'secondary', label: 'Senior Secondary (11-12)' },
    { id: 'foundation', label: 'High School (9-10)' },
    { id: 'international', label: 'Cambridge / Edexcel' },
  ];

  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchesCategory =
        selectedCategory === 'all' || course.category === selectedCategory;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.overview.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-20 space-y-8">
      <Breadcrumbs items={[{ label: 'Academic Programs' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-1 rounded">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Curriculum Directory</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Academic Coaching Programs & Entrance Cohorts
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Targeted pedagogy designed by veteran academicians. Every batch is restricted to 30 students with weekly diagnostic testing, printed problem sets, and individual doubt clearing.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between pt-2">
        {/* Interactive Segmented Filter Control */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-blue-950 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px] max-w-sm">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by subject, level, or exam..."
            className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
          />
        </div>
      </div>

      {/* Course List */}
      {filteredCourses.length === 0 ? (
        <div className="p-12 text-center bg-white border border-slate-200 rounded-xl space-y-3">
          <p className="text-sm font-semibold text-slate-700">No programs match your search or filter.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="text-xs text-blue-900 font-semibold hover:underline cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden shadow-xs"
            >
              <div className="p-6 space-y-4">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-blue-900 mb-1">
                      {course.level}
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 leading-snug">
                      {course.title}
                    </h2>
                  </div>
                  {course.badge && (
                    <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded shrink-0">
                      {course.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {course.subtitle}
                </p>

                {/* Key Spec Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-slate-50 rounded-lg text-xs border border-slate-100">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Duration</span>
                    <span className="font-semibold text-slate-800">{course.duration}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Classes / Week</span>
                    <span className="font-semibold text-slate-800">{course.classesPerWeek} Classes ({course.classDuration})</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Max Cohort Size</span>
                    <span className="font-semibold text-slate-800">{course.batchSize} Students</span>
                  </div>
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <UserCheck className="w-4 h-4 text-blue-900 shrink-0" />
                  <span>
                    Faculty Lead: <strong className="text-slate-900">{course.leadInstructor.name}</strong> ({course.leadInstructor.institution})
                  </span>
                </div>

                {/* Highlights */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Curriculum Inclusions:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {course.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-800">{course.tuitionFee}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onNavigate('course-details', course.id)}
                    className="px-3 py-1.5 text-xs font-semibold text-blue-950 hover:bg-slate-200/60 rounded-md transition-colors cursor-pointer"
                  >
                    View Syllabus
                  </button>
                  <button
                    onClick={() => onNavigate('register')}
                    className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
