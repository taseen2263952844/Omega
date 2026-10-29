import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, Phone, UserCheck, ArrowRight, GraduationCap } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, courseId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'about', label: 'About' },
    { id: 'teachers', label: 'Faculty' },
    { id: 'gallery', label: 'Campus Life' },
    { id: 'notices', label: 'Notices' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Quiet Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="font-semibold text-amber-400">Admissions Open 2026:</span>
            <span className="truncate text-slate-300">
              Diagnostic & Scholarship assessment registrations open across all 3 campuses
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 shrink-0 text-slate-300">
            <a
              href="tel:+8801711000001"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>[Placeholder: +880 1711-000001]</span>
            </a>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <button
              onClick={() => handleLinkClick('login')}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Student / Parent Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation (3-Zone Contract) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-blue-950 text-white flex items-center justify-center font-bold text-xl shadow-sm border border-blue-900">
            <GraduationCap className="w-6 h-6 text-amber-400" />
          </div>
          <div className="whitespace-nowrap shrink-0">
            <span className="text-xl font-bold tracking-tight text-blue-950 block leading-tight">
              Omega Academic Coaching
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id || (currentPage === 'course-details' && link.id === 'courses');
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
                  isActive
                    ? 'border-blue-900 text-blue-950 font-semibold'
                    : 'border-transparent text-slate-600 hover:text-blue-950 hover:border-slate-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleLinkClick('login')}
            className="lg:hidden text-xs font-medium text-slate-700 hover:text-blue-950 px-3 py-2"
          >
            Portal Login
          </button>
          <button
            onClick={() => handleLinkClick('register')}
            className="px-4 py-2.5 text-xs font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 shadow-sm cursor-pointer"
          >
            <span>Apply for Admission</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-950 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in fade-in duration-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id || (currentPage === 'course-details' && link.id === 'courses');
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 text-blue-950 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-950'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-100 space-y-2">
              <button
                onClick={() => handleLinkClick('register')}
                className="w-full py-3 px-4 text-center text-sm font-semibold text-white bg-blue-950 rounded-lg shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <button
                onClick={() => handleLinkClick('login')}
                className="w-full py-2.5 px-4 text-center text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <UserCheck className="w-4 h-4 text-blue-900" />
                <span>Student / Parent Portal Login</span>
              </button>

              <div className="pt-2 text-center text-xs text-slate-500">
                <span>Admissions Helpline: [Placeholder: +880 1711-000001]</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
