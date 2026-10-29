import React, { useState, useMemo } from 'react';
import { PageId, FAQItem } from '../types';
import { FAQ_DATA } from '../data/mockData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  ArrowRight,
  Phone
} from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqIds, setOpenFaqIds] = useState<Record<string, boolean>>({
    'faq-adm-1': true,
    'faq-fee-1': true,
  });

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'Admissions & Eligibility', label: 'Admissions & Baseline Tests' },
    { id: 'Tuition & Payment', label: 'Tuition & Scholarships' },
    { id: 'Classes & Attendance', label: 'Classes & Attendance' },
    { id: 'Mock Exams & Evaluation', label: 'Exams & Mock Tests' },
    { id: 'Parent Involvement', label: 'Parent Engagement' },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-20 space-y-8">
      <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-1 rounded">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Help & Clarifications</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Find transparent answers regarding admissions, batch grouping, tuition installments, negative-marking mock tests, and parent-teacher communication protocols.
        </p>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between pt-2">
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

        <div className="relative min-w-[260px] max-w-sm">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions or keywords..."
            className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900"
          />
        </div>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3 max-w-4xl">
        {filteredFaqs.length === 0 ? (
          <div className="p-12 text-center bg-white border border-slate-200 rounded-xl space-y-3">
            <p className="text-sm font-semibold text-slate-700">No questions match your query.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs text-blue-900 font-semibold hover:underline cursor-pointer"
            >
              Reset search
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = !!openFaqIds[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-colors shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-blue-900 uppercase tracking-wider block">
                      {faq.category}
                    </span>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </h2>
                  </div>
                  <div className="p-1 text-slate-500 shrink-0 mt-1">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-blue-950" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions Banner */}
      <div className="p-8 bg-blue-950 text-white rounded-xl border border-blue-900 max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-base font-bold text-white">Have a specific or unlisted question?</h3>
          <p className="text-xs text-slate-300">
            Our central admissions team is available via phone and in-person consultations.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contact Helpdesk</span>
          </button>
          <a
            href="tel:+8801711000001"
            className="px-4 py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold rounded-lg border border-blue-700 transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>[Placeholder: Call Hotline]</span>
          </a>
        </div>
      </div>
    </div>
  );
};
