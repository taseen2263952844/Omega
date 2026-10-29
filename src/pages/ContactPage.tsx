import React, { useState } from 'react';
import { PageId } from '../types';
import { BRANCHES_DATA } from '../data/mockData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  MessageSquare,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [activeBranch, setActiveBranch] = useState(BRANCHES_DATA[0].id);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    branch: 'branch-dhanmondi',
    studentGrade: 'HSC / Grade 11-12',
    subject: 'Admission Inquiry',
    message: ''
  });

  const selectedBranchData =
    BRANCHES_DATA.find((b) => b.id === activeBranch) || BRANCHES_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        branch: 'branch-dhanmondi',
        studentGrade: 'HSC / Grade 11-12',
        subject: 'Admission Inquiry',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-20 space-y-12">
      <Breadcrumbs items={[{ label: 'Contact & Campus Locations' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-1 rounded">
          <Building className="w-3.5 h-3.5" />
          <span>Campus Network & Help Desk</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Connect with Omega Academic Coaching
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Visit any of our three central campuses for in-person academic counseling, lab tours, or diagnostic test enrollment. Our admissions offices are open 6 days a week.
        </p>
      </div>

      {/* 3 Campuses Selector */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {BRANCHES_DATA.map((branch) => (
            <button
              key={branch.id}
              onClick={() => setActiveBranch(branch.id)}
              className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer border ${
                activeBranch === branch.id
                  ? 'bg-blue-950 text-white border-blue-950 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              {branch.name}
            </button>
          ))}
        </div>

        {/* Selected Branch Detail Card */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold text-blue-900 uppercase tracking-wider">
              {selectedBranchData.type}
            </span>
            <h3 className="text-lg font-bold text-slate-900">{selectedBranchData.name}</h3>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{selectedBranchData.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="font-mono text-slate-900 font-medium">{selectedBranchData.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="font-mono">{selectedBranchData.email}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Visiting & Office Hours
            </span>
            <div className="flex items-start gap-2 text-xs text-slate-700">
              <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>{selectedBranchData.officeHours}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 border border-slate-100">
              <span className="font-semibold text-slate-900 block">Admissions Walk-Ins:</span>
              <span>Counselors are available on-site for immediate parent meetings without prior appointment.</span>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              On-Campus Facilities
            </span>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {selectedBranchData.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 2-Column: Form & Map Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Send an Academic Inquiry
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Have specific questions about batch timings, fees, or prerequisite courses? We will get back to you promptly.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-base font-bold text-emerald-950">Inquiry Dispatched Successfully</h3>
              <p className="text-xs text-emerald-800 max-w-md mx-auto">
                Thank you for reaching out. A Senior Academic Coordinator from your preferred campus will contact you via phone or email within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Student or parent name"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="[Placeholder: +880 17...]"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@example.com"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-700">
                    Student Current Level / Grade
                  </label>
                  <select
                    value={formData.studentGrade}
                    onChange={(e) => setFormData({ ...formData, studentGrade: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                  >
                    <option value="HSC / Grade 11-12">HSC / Grade 11-12 (Science)</option>
                    <option value="SSC / Grade 9-10">SSC / Grade 9-10</option>
                    <option value="Pre-Engineering BUET">Pre-Engineering BUET Aspirant</option>
                    <option value="Pre-Medical DMC">Pre-Medical Entrance Aspirant</option>
                    <option value="Cambridge O/A Levels">Cambridge O / A Levels</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-700">
                  Target Campus
                </label>
                <select
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                >
                  <option value="branch-dhanmondi">Main Campus (Dhanmondi, Dhaka)</option>
                  <option value="branch-uttara">North Campus (Sector 4, Uttara, Dhaka)</option>
                  <option value="branch-gulshan">Academic Center (Gulshan-1, Dhaka)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-700">
                  Your Inquiry / Questions *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ask about batch availability, fees, demo classes, or upcoming diagnostic tests..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>Submit Inquiry to Academic Office</span>
              </button>
            </form>
          )}
        </div>

        {/* Map Preview & Direct Assistance */}
        <div className="lg:col-span-5 space-y-6">
          {/* Styled Map Container */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <MapPin className="w-4 h-4 text-blue-900" />
                <span>{selectedBranchData.name} - Location Map</span>
              </div>
              <span className="text-[11px] text-slate-500">Dhaka, Bangladesh</span>
            </div>

            {/* Stylized Map Canvas */}
            <div className="relative aspect-4/3 bg-slate-200 flex flex-col items-center justify-center p-6 text-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10 space-y-2">
                <div className="w-12 h-12 rounded-full bg-blue-950 text-amber-400 flex items-center justify-center mx-auto shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">{selectedBranchData.name}</h4>
                <p className="text-xs text-slate-600 max-w-xs">{selectedBranchData.address}</p>
                <div className="pt-2">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded-md text-xs font-semibold text-slate-800 hover:bg-slate-50 shadow-xs"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Helpline Box */}
          <div className="p-6 bg-slate-900 text-white rounded-xl border border-slate-800 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Immediate Assistance Hotline
            </span>
            <div className="text-lg font-bold text-white">
              [Placeholder: (+880) 1711-000001]
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Available 8:00 AM – 8:30 PM everyday for urgent registration queries, syllabus questions, and batch confirmations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
