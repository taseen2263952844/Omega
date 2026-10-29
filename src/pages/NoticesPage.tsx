import React, { useState, useMemo } from 'react';
import { PageId, Notice } from '../types';
import { NOTICES_DATA } from '../data/mockData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Modal } from '../components/Modal';
import {
  FileText,
  Search,
  Download,
  AlertCircle,
  Pin,
  Calendar,
  Building,
  CheckCircle2,
  Share2
} from 'lucide-react';

interface NoticesPageProps {
  onNavigate: (page: PageId) => void;
}

export const NoticesPage: React.FC<NoticesPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeNotice, setActiveNotice] = useState<Notice | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const categories = [
    { id: 'all', label: 'All Bulletins' },
    { id: 'Admissions', label: 'Admissions' },
    { id: 'Exam Schedules', label: 'Exam Schedules' },
    { id: 'Results & Merit', label: 'Results & Merit Lists' },
    { id: 'Holiday Notices', label: 'Holiday Recess' },
  ];

  const filteredNotices = useMemo(() => {
    return NOTICES_DATA.filter((n) => {
      const matchesCategory =
        selectedCategory === 'all' || n.category === selectedCategory;
      const matchesSearch =
        n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.referenceNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.targetAudience.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleSimulatedDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-20 space-y-8">
      <Breadcrumbs items={[{ label: 'Official Notices & Bulletins' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-1 rounded">
          <FileText className="w-3.5 h-3.5" />
          <span>Notice Board</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Official Circulars, Schedules & Merit Announcements
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Access authoritative publications from the Omega Academic Council regarding admission deadlines, exam seating plans, holiday declarations, and scholarship evaluations.
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
            placeholder="Search circulars by keyword or ref..."
            className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900"
          />
        </div>
      </div>

      {/* Notices List */}
      <div className="space-y-4">
        {filteredNotices.map((notice) => (
          <div
            key={notice.id}
            className="bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-all shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="font-mono text-slate-700 font-semibold">{notice.referenceNo}</span>
                <span aria-hidden="true">·</span>
                <span>{notice.date}</span>
                <span aria-hidden="true">·</span>
                <span className="text-blue-900 font-medium">{notice.category}</span>
                {notice.isUrgent && (
                  <span className="text-rose-700 bg-rose-50 border border-rose-200 text-[11px] font-semibold px-2 py-0.5 rounded">
                    Urgent
                  </span>
                )}
                {notice.isPinned && (
                  <span className="text-amber-800 bg-amber-50 border border-amber-200 text-[11px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                    <Pin className="w-3 h-3" />
                    <span>Pinned</span>
                  </span>
                )}
              </div>

              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {notice.title}
              </h2>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {notice.summary}
              </p>

              <div className="text-[11px] text-slate-500 pt-1">
                <span className="font-semibold text-slate-700">Target Cohort:</span> {notice.targetAudience}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
              <button
                onClick={() => setActiveNotice(notice)}
                className="px-4 py-2 bg-blue-950 hover:bg-blue-900 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Read Official Notice
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Notice Detail Modal */}
      <Modal
        isOpen={!!activeNotice}
        onClose={() => setActiveNotice(null)}
        title={activeNotice?.referenceNo}
        maxWidth="max-w-3xl"
      >
        {activeNotice && (
          <div className="space-y-6">
            {/* Header Lockup in modal */}
            <div className="border-b border-slate-200 pb-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Omega Academic Council Bulletin</span>
                <span className="font-mono">{activeNotice.date}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 leading-snug">
                {activeNotice.title}
              </h2>
              <div className="text-xs text-blue-900 font-medium">
                Target Audience: {activeNotice.targetAudience}
              </div>
            </div>

            {/* Notice Body */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeNotice.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Simulated Official Seal / Sign-off */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="space-y-1 text-slate-600">
                <span className="font-bold text-slate-900 block">By Order of the Academic Director</span>
                <span>Omega Academic Council, Central Operations</span>
                <div className="text-slate-400 font-mono text-[11px]">Verification Hash: OAC-SEC-8942-VERIFIED</div>
              </div>

              {/* Download simulated PDF */}
              <div className="space-y-1 sm:text-right">
                <button
                  onClick={handleSimulatedDownload}
                  className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Download Circular PDF ({activeNotice.fileSize})</span>
                </button>
                {downloadSuccess && (
                  <span className="block text-emerald-600 font-semibold text-[11px] animate-in fade-in">
                    ✓ PDF download initiated successfully
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
