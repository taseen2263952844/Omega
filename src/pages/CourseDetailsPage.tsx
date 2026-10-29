import React, { useState } from 'react';
import { PageId } from '../types';
import { COURSES_DATA } from '../data/mockData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Modal } from '../components/Modal';
import {
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  UserCheck,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  FileCheck,
  PhoneCall,
  GraduationCap
} from 'lucide-react';

interface CourseDetailsPageProps {
  courseId?: string;
  onNavigate: (page: PageId, courseId?: string) => void;
}

export const CourseDetailsPage: React.FC<CourseDetailsPageProps> = ({
  courseId,
  onNavigate
}) => {
  // Find current course or default to first
  const course = COURSES_DATA.find((c) => c.id === courseId) || COURSES_DATA[0];

  const [expandedModule, setExpandedModule] = useState<number | null>(0);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    preferredCampus: 'Dhanmondi Main Campus'
  });

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setInquiryModalOpen(false);
      setInquiryForm({ name: '', phone: '', preferredCampus: 'Dhanmondi Main Campus' });
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-20 space-y-8">
      <Breadcrumbs
        items={[
          { label: 'Courses', page: 'courses' },
          { label: course.title }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/80 px-2.5 py-1 rounded">
            {course.level}
          </span>
          {course.badge && (
            <span className="text-xs font-medium text-slate-300">
              {course.badge}
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white max-w-3xl">
          {course.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          {course.subtitle}
        </p>

        {/* Quick Specs */}
        <div className="pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-slate-400 block text-[11px]">Program Length:</span>
            <span className="font-semibold text-white">{course.duration}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Intensity:</span>
            <span className="font-semibold text-white">{course.classesPerWeek} Classes / Week</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Batch Limit:</span>
            <span className="font-semibold text-white">{course.batchSize} Students Capped</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Batch Schedule:</span>
            <span className="font-semibold text-white">{course.schedule}</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Details & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Overview & Syllabus */}
        <div className="lg:col-span-8 space-y-10">
          {/* Section: Overview */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Program Overview & Methodology</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {course.overview}
            </p>

            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Key Pedagogical Features:
              </h3>
              <ul className="space-y-2.5">
                {course.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section: Syllabus Breakdown */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-1">
                Curriculum Structure
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Detailed Module & Topic Roadmap
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Every topic is reinforced through classroom deduction, chapter-wise question banks, and timed diagnostic quizzes.
              </p>
            </div>

            <div className="space-y-3">
              {course.curriculum.map((item, index) => {
                const isOpen = expandedModule === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-lg overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleModule(index)}
                      className="w-full p-4 text-left bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-3 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-semibold text-blue-950 bg-white border border-slate-200 px-2 py-0.5 rounded">
                          Module {index + 1}
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          {item.module}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs text-slate-500 hidden sm:inline">
                          {item.durationWeeks} Weeks
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-slate-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="p-4 bg-white border-t border-slate-100 text-xs text-slate-600 space-y-2">
                        <span className="font-semibold text-slate-700 block">Covered Competencies:</span>
                        <ul className="space-y-1.5 pl-4 list-disc text-slate-600">
                          {item.topics.map((topic, tIdx) => (
                            <li key={tIdx} className="leading-relaxed">
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Academic Resources Included */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-blue-900" />
              <span>What Each Enrolled Student Receives</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">Printed Study Packs</span>
                <p className="text-slate-500">Comprehensive chapter summaries, formula tables, and 15-year past entrance paper solutions.</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">Digital Portal Access</span>
                <p className="text-slate-500">Video recaps of all classroom lectures, downloadable practice sheets, and live score history.</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">Daily Doubt Solving Clinics</span>
                <p className="text-slate-500">Teaching assistants available 2 hours before and after each lecture for 1-on-1 problem clarification.</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">Standardized Mock Tests</span>
                <p className="text-slate-500">Weekly OMR-evaluated diagnostic examinations mirroring real test conditions and negative marking.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Enrollment Card & Lead Faculty */}
        <div className="lg:col-span-4 space-y-6">
          {/* Enrollment Card */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5 sticky top-24">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Enrollment Details
              </span>
              <div className="text-2xl font-bold text-blue-950">
                {course.tuitionFee}
              </div>
              <p className="text-xs text-slate-500">
                Monthly installment option available. Includes printed materials & mock exam fees.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs">
              <div className="flex items-center justify-between text-slate-600">
                <span>Batch Cap:</span>
                <span className="font-semibold text-slate-900">{course.batchSize} Students</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Weekly Schedule:</span>
                <span className="font-semibold text-slate-900">{course.classesPerWeek} Sessions</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Class Duration:</span>
                <span className="font-semibold text-slate-900">{course.classDuration}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Diagnostic Test:</span>
                <span className="font-semibold text-emerald-700">Free Baseline Assessment</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => onNavigate('register')}
                className="w-full py-3 px-4 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Apply for this Course</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
              <button
                onClick={() => setInquiryModalOpen(true)}
                className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-slate-600" />
                <span>Request Batch Callback</span>
              </button>
            </div>

            {/* Lead Instructor Mini Profile */}
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Academic Program Lead
              </span>
              <div className="text-sm font-bold text-slate-900">
                {course.leadInstructor.name}
              </div>
              <div className="text-xs text-blue-900 font-medium">
                {course.leadInstructor.title}
              </div>
              <div className="text-xs text-slate-500">
                {course.leadInstructor.institution}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      <Modal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        title={`Inquire: ${course.title}`}
      >
        {inquirySuccess ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-lg font-bold text-slate-900">Inquiry Received</h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Our academic counselor for {course.title} will call you within 2 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleInquirySubmit} className="space-y-4">
            <p className="text-xs text-slate-600">
              Leave your phone number to receive the full curriculum brochure, fee installment options, and seat availability.
            </p>
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700">
                Student or Guardian Name
              </label>
              <input
                type="text"
                required
                value={inquiryForm.name}
                onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                placeholder="Full name"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700">
                Contact Phone / WhatsApp Number
              </label>
              <input
                type="tel"
                required
                value={inquiryForm.phone}
                onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                placeholder="[Placeholder: +880 17...]"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700">
                Preferred Campus Location
              </label>
              <select
                value={inquiryForm.preferredCampus}
                onChange={(e) => setInquiryForm({ ...inquiryForm, preferredCampus: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
              >
                <option value="Dhanmondi Main Campus">Dhanmondi Main Campus</option>
                <option value="North Campus (Uttara)">North Campus (Uttara)</option>
                <option value="Academic Center (Gulshan)">Academic Center (Gulshan)</option>
              </select>
            </div>
            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setInquiryModalOpen(false)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-lg cursor-pointer"
              >
                Submit Request
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};
