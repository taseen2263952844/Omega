import React, { useState, useMemo } from 'react';
import { PageId, Teacher } from '../types';
import { TEACHERS_DATA } from '../data/mockData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Modal } from '../components/Modal';
import {
  GraduationCap,
  Award,
  BookOpen,
  Mail,
  Search,
  CheckCircle2,
  Calendar,
  UserCheck,
  Sparkles
} from 'lucide-react';

interface TeachersPageProps {
  onNavigate: (page: PageId) => void;
}

export const TeachersPage: React.FC<TeachersPageProps> = ({ onNavigate }) => {
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [consultModalTeacher, setConsultModalTeacher] = useState<Teacher | null>(null);
  const [consultSuccess, setConsultSuccess] = useState(false);
  const [consultForm, setConsultForm] = useState({
    studentName: '',
    phone: '',
    currentClass: 'HSC / Grade 12',
    topic: ''
  });

  const departments = [
    { id: 'all', label: 'All Departments' },
    { id: 'Physics', label: 'Physics' },
    { id: 'Mathematics', label: 'Mathematics' },
    { id: 'Chemistry', label: 'Chemistry' },
    { id: 'Biology', label: 'Biology' },
    { id: 'English & Humanities', label: 'English & Humanities' },
  ];

  const filteredTeachers = useMemo(() => {
    return TEACHERS_DATA.filter((teacher) => {
      const matchesDept = selectedDept === 'all' || teacher.department === selectedDept;
      const matchesSearch =
        teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        teacher.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        teacher.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        teacher.specialty.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesDept && matchesSearch;
    });
  }, [selectedDept, searchQuery]);

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultSuccess(true);
    setTimeout(() => {
      setConsultSuccess(false);
      setConsultModalTeacher(null);
      setConsultForm({ studentName: '', phone: '', currentClass: 'HSC / Grade 12', topic: '' });
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-20 space-y-8">
      <Breadcrumbs items={[{ label: 'Faculty Directory' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-1 rounded">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Distinguished Academic Mentors</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Learn from Renowned Olympiad Coaches & Senior Academicians
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Our educators possess decades of specialized teaching experience at elite colleges and engineering universities, known for turning challenging principles into crystal-clear conceptual understanding.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between pt-2">
        {/* Department Filters */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDept(dept.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                selectedDept === dept.id
                  ? 'bg-blue-950 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {dept.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative min-w-[260px] max-w-sm">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search faculty or subject..."
            className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900"
          />
        </div>
      </div>

      {/* Faculty Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden shadow-xs"
          >
            <div className="p-6 space-y-4">
              {/* Faculty Top Info */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold text-blue-900 uppercase tracking-wider">
                    {teacher.department}
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 leading-snug mt-0.5">
                    {teacher.name}
                  </h2>
                  <p className="text-xs text-slate-600 font-medium">{teacher.title}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-950 font-bold text-sm shrink-0">
                  {teacher.name.split(' ').map((n) => n[0]).slice(-2).join('')}
                </div>
              </div>

              {/* Education & Alma Mater */}
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs space-y-1">
                <div className="text-slate-700 font-semibold">{teacher.education}</div>
                <div className="text-slate-500">{teacher.institution}</div>
                <div className="text-blue-900 font-medium pt-1">
                  {teacher.experienceYears} Years of Pedagogical Experience
                </div>
              </div>

              {/* Bio & Quote */}
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {teacher.bio}
              </p>

              <blockquote className="text-xs text-slate-500 italic border-l-2 border-slate-200 pl-3">
                "{teacher.quote}"
              </blockquote>

              {/* Specialties (Unboxed metadata style) */}
              <div className="pt-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-700 mr-1.5">Specialties:</span>
                {teacher.specialty.join(' · ')}
              </div>
            </div>

            {/* Bottom Strip */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
              <span className="text-slate-500 text-[11px] font-mono truncate max-w-[140px]">
                {teacher.emailPlaceholder}
              </span>
              <button
                onClick={() => setConsultModalTeacher(teacher)}
                className="px-3 py-1.5 bg-blue-950 hover:bg-blue-900 text-white font-semibold rounded-md transition-colors cursor-pointer"
              >
                Book Mentorship
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Faculty Mentorship Booking Modal */}
      <Modal
        isOpen={!!consultModalTeacher}
        onClose={() => setConsultModalTeacher(null)}
        title={consultModalTeacher ? `Request Mentorship with ${consultModalTeacher.name}` : ''}
      >
        {consultSuccess ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-lg font-bold text-slate-900">Request Scheduled</h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Our academic coordination office will confirm your 20-minute 1-on-1 counseling slot with {consultModalTeacher?.name}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleConsultSubmit} className="space-y-4">
            <p className="text-xs text-slate-600">
              Students and parents can book a 20-minute guidance discussion regarding curriculum fit, diagnostic analysis, or academic anxiety.
            </p>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700">
                Student Full Name
              </label>
              <input
                type="text"
                required
                value={consultForm.studentName}
                onChange={(e) => setConsultForm({ ...consultForm, studentName: e.target.value })}
                placeholder="Student name"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700">
                Contact Phone Number
              </label>
              <input
                type="tel"
                required
                value={consultForm.phone}
                onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                placeholder="[Placeholder: +880 17...]"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700">
                Current Class / Target Exam
              </label>
              <select
                value={consultForm.currentClass}
                onChange={(e) => setConsultForm({ ...consultForm, currentClass: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
              >
                <option value="HSC / Grade 12">HSC / Grade 12 (Science)</option>
                <option value="SSC / Grade 10">SSC / Grade 10 (Science)</option>
                <option value="Pre-Engineering BUET">Pre-Engineering BUET / IUT</option>
                <option value="Pre-Medical DMC">Pre-Medical Entrance</option>
                <option value="Cambridge O/A Levels">Cambridge O/A Levels</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700">
                Primary Question / Topic of Discussion
              </label>
              <textarea
                rows={3}
                value={consultForm.topic}
                onChange={(e) => setConsultForm({ ...consultForm, topic: e.target.value })}
                placeholder="Briefly describe what you'd like guidance on (e.g. calculus fundamentals, balancing board vs entrance exams)..."
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
              />
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setConsultModalTeacher(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-lg cursor-pointer"
              >
                Confirm Appointment Request
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};
