import React from 'react';
import { PageId } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ASSET_IMAGES } from '../data/mockData';
import {
  Award,
  CheckCircle,
  GraduationCap,
  History,
  Shield,
  Target,
  Users,
  Building,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const milestones = [
    {
      year: '2011',
      title: 'Foundation in Dhanmondi',
      desc: 'Established by senior university academicians with 2 classrooms and a single cohort of 40 students dedicated to conceptual physics and calculus.'
    },
    {
      year: '2015',
      title: 'Science Laboratories Commissioned',
      desc: 'Opened our dedicated physics and chemistry laboratory to provide hands-on practical training alongside theoretical board classes.'
    },
    {
      year: '2019',
      title: 'North Campus (Uttara) Launch',
      desc: 'Expanded to North Dhaka with an advanced 200-seat facility catering to secondary STEM and entrance aspirants.'
    },
    {
      year: '2023',
      title: 'National Olympiad Rank 1 & Expansion',
      desc: 'Omega students secured top positions in the National Physics and Math Olympiads, leading to the inauguration of the Gulshan Academic Center.'
    },
    {
      year: '2026',
      title: 'Integrated Digital Academic System',
      desc: 'Seamless parent portal, biometric attendance notifications, and 4,200+ alumni across top medical and engineering universities worldwide.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-20 space-y-12">
      <Breadcrumbs items={[{ label: 'About Our Institute' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-1 rounded">
          <Building className="w-3.5 h-3.5" />
          <span>Our Heritage & Philosophy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Pioneering Rigorous Academic Coaching Since 2011
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Omega Academic Coaching was founded on a singular conviction: when students understand the foundational derivation of physical and mathematical principles, high-stakes examination excellence follows naturally.
        </p>
      </div>

      {/* Image & Story Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Moving Beyond Rote Memorization
          </h2>
          <p>
            For decades, standard coaching institutes packed hundreds of students into impersonal lecture halls, relying on repetitive memorization tricks. Omega was created to challenge that model.
          </p>
          <p>
            Every class at Omega is deliberately capped at 30 students. Our teachers are not just subject matter tutors; they are seasoned educators from top universities who diagnose learning roadblocks, guide step-by-step problem derivations, and hold individual question clinics.
          </p>
          <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="font-bold text-slate-900 block">Our Mission</span>
              <p className="text-slate-600 mt-1">To cultivate deep scientific inquiry, analytical problem-solving resilience, and top competitive ranks for every learner.</p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="font-bold text-slate-900 block">Our Vision</span>
              <p className="text-slate-600 mt-1">To stand as South Asia's gold standard in academic coaching and university entrance mentorship.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg aspect-4/3 bg-slate-100">
            <img
              src={ASSET_IMAGES.classroom}
              alt="Faculty engaging with students at Omega Academic Coaching"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Founder Message Section */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Executive Director & Founder's Message
          </span>
          <blockquote className="text-base sm:text-lg text-slate-200 italic leading-relaxed">
            "At Omega, we never measure success by the number of students enrolled, but by the confidence of a student who looks at an unfamiliar entrance question and knows precisely how to begin the proof. Our responsibility is to instill clarity, discipline, and moral character alongside academic triumphs."
          </blockquote>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
            <div>
              <div className="font-bold text-white text-sm">Dr. Rafiqul Amin, PhD</div>
              <div className="text-slate-400">Founder & Chairman, Omega Academic Board [Placeholder: Credential]</div>
            </div>
            <div className="text-amber-400 font-mono text-[11px]">
              Dhanmondi, Dhaka
            </div>
          </div>
        </div>
      </div>

      {/* Institutional Values */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Our Standard
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Core Principles Governing Omega
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">01. Intellectual Rigor</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We teach complete mathematical proofs and physical derivations rather than shortcuts, ensuring students adapt when examination patterns evolve.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">02. The Individual Matters</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every student has unique strengths and knowledge blind spots. Our teaching assistants provide dedicated 1-on-1 sessions to ensure no one lags behind.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">03. Absolute Transparency</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Parents deserve honest assessment data. We provide weekly test score breakdowns, attendance logs, and genuine feedback on entrance test readiness.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-6 pt-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Evolution
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Milestones in Our Journey
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 pl-6 space-y-8">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[31px] top-0 w-3.5 h-3.5 rounded-full bg-blue-950 border-4 border-white shadow-xs" />
              <div className="text-xs font-bold text-blue-900 font-mono">{item.year}</div>
              <h3 className="text-sm font-bold text-slate-900 mt-0.5">{item.title}</h3>
              <p className="text-xs text-slate-600 mt-1 max-w-xl leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-base font-bold text-slate-900">
            Experience an Omega Lecture Session
          </h3>
          <p className="text-xs text-slate-600">
            Prospective students and parents are welcome to tour our campus and observe an ongoing session.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2.5 bg-blue-950 text-white text-xs font-semibold rounded-lg hover:bg-blue-900 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Book Campus Tour</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
