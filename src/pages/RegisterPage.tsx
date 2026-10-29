import React, { useState } from 'react';
import { PageId, RegistrationFormData } from '../types';
import { COURSES_DATA, BRANCHES_DATA } from '../data/mockData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  GraduationCap,
  CheckCircle2,
  Calendar,
  User,
  School,
  Building,
  Phone,
  Mail,
  FileCheck,
  ArrowRight,
  ArrowLeft,
  Printer,
  Sparkles
} from 'lucide-react';

interface RegisterPageProps {
  onNavigate: (page: PageId, courseId?: string) => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submittedApplicationId, setSubmittedApplicationId] = useState<string | null>(null);

  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    dateOfBirth: '',
    gender: 'Male',
    currentSchool: '',
    currentGrade: 'Grade 12 / HSC 2026',
    boardOrCurriculum: 'Dhaka Education Board (National)',
    recentGpaOrMarks: 'GPA 5.0 (Golden)',
    targetCourseId: COURSES_DATA[0].id,
    preferredBranch: BRANCHES_DATA[0].id,
    preferredShift: 'Afternoon Shift (3:30 PM - 6:30 PM)',
    guardianName: '',
    guardianRelation: 'Father',
    guardianPhone: '',
    guardianEmail: '',
    address: '',
    emergencyContact: '',
    agreedToTerms: false
  });

  const selectedCourse =
    COURSES_DATA.find((c) => c.id === formData.targetCourseId) || COURSES_DATA[0];
  const selectedBranch =
    BRANCHES_DATA.find((b) => b.id === formData.preferredBranch) || BRANCHES_DATA[0];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    } else {
      // Final Submit
      const randomId = `OAC-APP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedApplicationId(randomId);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-20 space-y-8">
      <Breadcrumbs items={[{ label: 'Admission Application' }]} onNavigate={onNavigate} />

      {/* Confirmation Screen */}
      {submittedApplicationId ? (
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-10 space-y-6">
          <div className="text-center space-y-3 pb-6 border-b border-slate-200">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 block">
              Application Successfully Submitted
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Welcome to the Omega Admissions Process
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Your official application reference number is{' '}
              <strong className="text-blue-950 font-mono text-base px-2 py-0.5 bg-blue-50 border border-blue-200 rounded">
                {submittedApplicationId}
              </strong>
              . A confirmation SMS and email have been dispatched to the registered phone.
            </p>
          </div>

          {/* Diagnostic Assessment Schedule Slip */}
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-4 text-xs">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-900">
              Diagnostic & Baseline Assessment Notice
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700">
              <div>
                <span className="text-slate-500 block text-[11px]">Applicant Name:</span>
                <span className="font-bold text-slate-900">{formData.fullName}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Applied Program:</span>
                <span className="font-bold text-slate-900">{selectedCourse.title}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Assigned Campus:</span>
                <span className="font-bold text-slate-900">{selectedBranch.name}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Assessment Date & Time:</span>
                <span className="font-bold text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded">
                  Saturday, April 10, 2026 (10:00 AM)
                </span>
              </div>
            </div>
            <p className="text-slate-500 pt-2 border-t border-slate-200 text-[11px]">
              * Please bring your Application Reference Number, 2 passport-sized photographs, and a calculator on assessment day.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
            <button
              onClick={() => window.print()}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>Print Application Slip</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('courses')}
                className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Explore Courses
              </button>
              <button
                onClick={() => onNavigate('login')}
                className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Go to Portal Login
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Multi-Step Application Form */
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-1 rounded">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Enrollment 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Student Admission Application
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              Complete the 3-step registration form. All batches are restricted to 30 students to maintain pedagogical quality.
            </p>
          </div>

          {/* Step Indicator */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
            <div
              className={`py-2 px-1 rounded-lg border transition-colors ${
                currentStep === 1
                  ? 'bg-blue-950 text-white border-blue-950'
                  : currentStep > 1
                  ? 'bg-blue-50 text-blue-950 border-blue-200'
                  : 'bg-slate-50 text-slate-400 border-slate-200'
              }`}
            >
              1. Student Details
            </div>
            <div
              className={`py-2 px-1 rounded-lg border transition-colors ${
                currentStep === 2
                  ? 'bg-blue-950 text-white border-blue-950'
                  : currentStep > 2
                  ? 'bg-blue-50 text-blue-950 border-blue-200'
                  : 'bg-slate-50 text-slate-400 border-slate-200'
              }`}
            >
              2. Program & Branch
            </div>
            <div
              className={`py-2 px-1 rounded-lg border transition-colors ${
                currentStep === 3
                  ? 'bg-blue-950 text-white border-blue-950'
                  : 'bg-slate-50 text-slate-400 border-slate-200'
              }`}
            >
              3. Guardian & Submit
            </div>
          </div>

          {/* Form Container */}
          <form onSubmit={handleNext} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            {/* STEP 1: Student Details */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Step 1: Student Identity & Academic Background
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Abrar Amin"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Gender
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Current School / College Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.currentSchool}
                      onChange={(e) => setFormData({ ...formData, currentSchool: e.target.value })}
                      placeholder="e.g. Notre Dame College / St. Joseph / Scholastica"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Current Grade / Target Level *
                    </label>
                    <select
                      value={formData.currentGrade}
                      onChange={(e) => setFormData({ ...formData, currentGrade: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                    >
                      <option value="Grade 12 / HSC 2026">Grade 12 / HSC 2026 Candidate</option>
                      <option value="Grade 11 / HSC 2027">Grade 11 / HSC 2027</option>
                      <option value="Grade 10 / SSC 2026">Grade 10 / SSC 2026 Candidate</option>
                      <option value="Grade 9 / SSC 2027">Grade 9 / SSC 2027</option>
                      <option value="A-Levels (Cambridge/Edexcel)">A-Levels (Cambridge / Edexcel)</option>
                      <option value="O-Levels (Cambridge/Edexcel)">O-Levels (Cambridge / Edexcel)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Recent Examination Result / GPA *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.recentGpaOrMarks}
                      onChange={(e) => setFormData({ ...formData, recentGpaOrMarks: e.target.value })}
                      placeholder="e.g. GPA 5.0 in SSC / 4 A*s in O-Levels"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Program & Batch Selection */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Step 2: Program, Campus & Shift Preferences
                </h3>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-700">
                    Select Target Coaching Program *
                  </label>
                  <select
                    value={formData.targetCourseId}
                    onChange={(e) => setFormData({ ...formData, targetCourseId: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                  >
                    {COURSES_DATA.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title} ({course.level})
                      </option>
                    ))}
                  </select>
                  <div className="p-3 bg-blue-50/60 rounded-lg border border-blue-100 text-xs text-slate-600 mt-2">
                    <strong className="text-blue-950 block">{selectedCourse.title}</strong>
                    <span>{selectedCourse.subtitle}</span>
                    <div className="mt-1 font-semibold text-blue-900">
                      Standard Tuition: {selectedCourse.tuitionFee}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Preferred Campus Location *
                    </label>
                    <select
                      value={formData.preferredBranch}
                      onChange={(e) => setFormData({ ...formData, preferredBranch: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                    >
                      {BRANCHES_DATA.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Preferred Batch Shift *
                    </label>
                    <select
                      value={formData.preferredShift}
                      onChange={(e) => setFormData({ ...formData, preferredShift: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                    >
                      <option value="Morning Shift (8:30 AM - 11:30 AM)">Morning Shift (8:30 AM - 11:30 AM)</option>
                      <option value="Afternoon Shift (3:30 PM - 6:30 PM)">Afternoon Shift (3:30 PM - 6:30 PM)</option>
                      <option value="Evening Shift (5:30 PM - 8:30 PM)">Evening Shift (5:30 PM - 8:30 PM)</option>
                      <option value="Weekend Intensive (Fri & Sat)">Weekend Intensive (Fri & Sat)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Guardian Details & Consent */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Step 3: Guardian Contact & Final Declaration
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Parent / Guardian Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.guardianName}
                      onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                      placeholder="e.g. Dr. Mahbubul Alam"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Relationship to Student *
                    </label>
                    <select
                      value={formData.guardianRelation}
                      onChange={(e) => setFormData({ ...formData, guardianRelation: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                    >
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Legal Guardian">Legal Guardian</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Guardian Primary Phone (for SMS notifications) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.guardianPhone}
                      onChange={(e) => setFormData({ ...formData, guardianPhone: e.target.value })}
                      placeholder="[Placeholder: +880 17...]"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Guardian Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.guardianEmail}
                      onChange={(e) => setFormData({ ...formData, guardianEmail: e.target.value })}
                      placeholder="guardian@example.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-700">
                    Residential Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="House, Road, Area, City"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2 pt-3">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.agreedToTerms}
                      onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-950 focus:ring-blue-900"
                    />
                    <span className="text-xs text-slate-700 leading-relaxed">
                      I hereby declare that all academic credentials and contact details furnished above are true. I understand that Omega Academic Coaching enforces strict 85% minimum attendance and mandatory weekly diagnostic assessments.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Step Control Buttons */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous Step</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-bold text-white bg-blue-950 hover:bg-blue-900 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>{currentStep === 3 ? 'Submit Final Application' : 'Proceed to Step ' + (currentStep + 1)}</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
