import React, { useState } from 'react';
import { PageId } from '../types';
import { GraduationCap, Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { BRANCHES_DATA } from '../data/mockData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSubscribed(false);
    }, 4000);
  };

  const handleLink = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Footer: Branches & Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center font-bold text-xl border border-blue-700">
                <GraduationCap className="w-6 h-6 text-amber-400" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Omega Academic Coaching
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Established in 2011 to replace rote memorization with foundational intuition.
              Guiding students to excellence in national board examinations, engineering entrances,
              and medical colleges.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-200">Accreditation:</span>
                <span>Recognized Educational Coaching Institute #OAC-REG-2011</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-200">Central Admissions:</span>
                <span className="text-amber-400">[Placeholder: +880 1711-000001]</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-4 max-w-md">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Subscribe to Exam & Scholarship Circulars
              </span>
              {newsletterSubscribed ? (
                <div className="p-3 bg-emerald-950/60 border border-emerald-700 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Subscribed! You will receive admission updates directly.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter parent or student email..."
                    required
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    className="bg-blue-700 hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleLink('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('courses')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Academic Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Our Institute
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('teachers')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Faculty Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('gallery')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Campus Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('notices')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Circulars & Notices
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Locations
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Coaching Tracks
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleLink('courses')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Pre-Engineering (BUET/Tech)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('courses')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Pre-Medical & Biology Entrance
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('courses')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  HSC & Grade 11-12 STEM
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('courses')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  SSC & Grade 9-10 Foundations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('courses')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  CAIE O & A Levels Track
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('register')}
                  className="text-amber-400 hover:text-amber-300 font-medium transition-colors text-left cursor-pointer flex items-center gap-1 mt-2"
                >
                  <span>Register for Batch 2026</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Campus Branches */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Campus Branches
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              {BRANCHES_DATA.map((branch) => (
                <div key={branch.id} className="border-b border-slate-800/80 pb-2.5">
                  <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>{branch.name}</span>
                  </div>
                  <p className="mt-1 text-slate-400 line-clamp-1">{branch.address}</p>
                  <p className="mt-0.5 text-slate-500 font-mono text-[11px]">{branch.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lower Legal & Status Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Omega Academic Coaching Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">[Placeholder Note: Content marked for institutional replacement]</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleLink('login')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Portal Access
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
