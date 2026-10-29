import React, { useState } from 'react';
import { PageId } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  UserCheck,
  Lock,
  Phone,
  KeyRound,
  CheckCircle2,
  AlertCircle,
  FileText,
  Calendar,
  Award,
  LogOut,
  Download,
  BookOpen
} from 'lucide-react';

interface LoginPageProps {
  onNavigate: (page: PageId) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [portalType, setPortalType] = useState<'student' | 'parent'>('student');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [demoUserRole, setDemoUserRole] = useState<'student' | 'parent'>('student');

  const handleFillDemo = (type: 'student' | 'parent') => {
    setPortalType(type);
    if (type === 'student') {
      setIdentifier('OAC-2026-042');
      setPassword('omegaStudent@2026');
    } else {
      setIdentifier('+880 1711-223344');
      setPassword('parentPass#2026');
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier || !password) return;
    setDemoUserRole(portalType);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIdentifier('');
    setPassword('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-20 space-y-8">
      <Breadcrumbs items={[{ label: 'Portal Access' }]} onNavigate={onNavigate} />

      {/* If Authenticated: Show Simulated Student/Parent Portal Dashboard */}
      {isAuthenticated ? (
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Welcome Card */}
          <div className="bg-blue-950 text-white rounded-2xl p-6 sm:p-8 border border-blue-900 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/80 px-2.5 py-0.5 rounded">
                {demoUserRole === 'student' ? 'Student Portal Active' : 'Guardian Portal Active'}
              </div>
              <h1 className="text-2xl font-bold text-white">
                {demoUserRole === 'student' ? 'Welcome back, Abrar Amin' : 'Welcome, Dr. Mahbubul Alam (Guardian)'}
              </h1>
              <p className="text-xs text-slate-300">
                Enrollment ID: <span className="font-mono text-amber-300">OAC-2026-042</span> · Batch: Pre-Engineering (A1 Morning)
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-blue-900 hover:bg-blue-800 border border-blue-700 rounded-lg text-xs font-semibold text-white transition-colors flex items-center gap-2 self-start sm:self-center cursor-pointer"
            >
              <LogOut className="w-4 h-4 text-slate-400" />
              <span>Sign Out</span>
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1">
              <div className="text-xs text-slate-500 font-medium">Biometric Attendance</div>
              <div className="text-2xl font-extrabold text-blue-950 tabular-nums">96.4%</div>
              <div className="text-[11px] text-emerald-600 font-semibold">48 of 50 Sessions Attended</div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1">
              <div className="text-xs text-slate-500 font-medium">Last Central Mock Exam</div>
              <div className="text-2xl font-extrabold text-blue-950 tabular-nums">94 / 100</div>
              <div className="text-[11px] text-blue-900 font-semibold">Rank #3 in Engineering Cohort</div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1">
              <div className="text-xs text-slate-500 font-medium">Tuition Status</div>
              <div className="text-2xl font-extrabold text-emerald-700">Cleared</div>
              <div className="text-[11px] text-slate-500">Receipt #INV-2026-081 Paid</div>
            </div>
          </div>

          {/* Upcoming Schedule & Downloads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Upcoming Tests & Classes */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-900" />
                <span>Upcoming Academic Events</span>
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-start justify-between gap-3">
                  <div>
                    <span className="font-bold text-slate-900 block">Phase-II Central Mock Assessment</span>
                    <span className="text-slate-500">Advanced Mechanics & Fluid Statics</span>
                  </div>
                  <span className="text-blue-900 font-semibold shrink-0">April 4, 9:00 AM</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-start justify-between gap-3">
                  <div>
                    <span className="font-bold text-slate-900 block">Weekly Organic Chemistry Doubt Lab</span>
                    <span className="text-slate-500">With Dr. Kamal Hossain (Room 204)</span>
                  </div>
                  <span className="text-blue-900 font-semibold shrink-0">April 6, 4:00 PM</span>
                </div>
              </div>
            </div>

            {/* Document Downloads */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-900" />
                <span>Student Documents & Hall Tickets</span>
              </h3>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
                  <span className="font-medium text-slate-800">Exam Hall Admit Card (Phase-II)</span>
                  <button
                    onClick={() => alert('Downloading official Admit Card PDF... [Placeholder: Simulated download]')}
                    className="text-blue-900 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
                  <span className="font-medium text-slate-800">Term I Progress Report Card</span>
                  <button
                    onClick={() => alert('Downloading Term I Report Card PDF... [Placeholder: Simulated download]')}
                    className="text-blue-900 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
                  <span className="font-medium text-slate-800">Formula Almanac & Chemistry Sheets</span>
                  <button
                    onClick={() => alert('Downloading Formula Pack... [Placeholder: Simulated download]')}
                    className="text-blue-900 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Login Form Container */
        <div className="max-w-md mx-auto bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-blue-950 text-white flex items-center justify-center mx-auto shadow-sm">
              <UserCheck className="w-6 h-6 text-amber-400" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Omega Portal Access
            </h1>
            <p className="text-xs text-slate-500">
              Sign in to view attendance records, mock exam scorecards, lecture notes, and tuition receipts.
            </p>
          </div>

          {/* Portal Switcher Tabs */}
          <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-lg text-xs font-semibold">
            <button
              onClick={() => setPortalType('student')}
              className={`py-2 rounded-md transition-colors cursor-pointer ${
                portalType === 'student'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Student Portal
            </button>
            <button
              onClick={() => setPortalType('parent')}
              className={`py-2 rounded-md transition-colors cursor-pointer ${
                portalType === 'parent'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Parent Portal
            </button>
          </div>

          {/* Demo Credentials Quick-Fill Strip */}
          <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-lg text-xs space-y-1.5">
            <div className="font-semibold text-amber-900 flex items-center gap-1.5">
              <span>Quick Demo Sign-In:</span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleFillDemo('student')}
                className="px-2.5 py-1 bg-white border border-amber-300 rounded text-[11px] font-medium text-amber-900 hover:bg-amber-100/50 cursor-pointer"
              >
                Fill Student Demo
              </button>
              <button
                type="button"
                onClick={() => handleFillDemo('parent')}
                className="px-2.5 py-1 bg-white border border-amber-300 rounded text-[11px] font-medium text-amber-900 hover:bg-amber-100/50 cursor-pointer"
              >
                Fill Parent Demo
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700">
                {portalType === 'student' ? 'Student Roll / Registration ID' : 'Guardian Registered Mobile Phone'}
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder={portalType === 'student' ? 'e.g. OAC-2026-042' : 'e.g. +880 1711-223344'}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <label className="font-semibold text-slate-700">Password / Access PIN</label>
                <button
                  type="button"
                  onClick={() => alert('Password reset link sent to registered phone/email. [Placeholder: Reset PIN]')}
                  className="text-blue-900 hover:underline cursor-pointer"
                >
                  Forgot?
                </button>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter account password"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              Sign In to {portalType === 'student' ? 'Student Portal' : 'Guardian Portal'}
            </button>
          </form>

          <div className="pt-2 text-center text-xs text-slate-500 border-t border-slate-100">
            <span>New student awaiting batch allocation? </span>
            <button
              onClick={() => onNavigate('register')}
              className="font-semibold text-blue-900 hover:underline cursor-pointer"
            >
              Apply for Admission
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
