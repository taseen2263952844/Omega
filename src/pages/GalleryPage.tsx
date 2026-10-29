import React, { useState, useMemo } from 'react';
import { PageId, GalleryItem } from '../types';
import { GALLERY_DATA } from '../data/mockData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Modal } from '../components/Modal';
import {
  Camera,
  MapPin,
  Calendar,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Campus Moments' },
    { id: 'Classrooms', label: 'Smart Classrooms' },
    { id: 'Science Labs', label: 'Science Laboratories' },
    { id: 'Study Lounges', label: 'Study Lounges & Library' },
    { id: 'Awards & Ceremonies', label: 'Awards & Olympiads' },
  ];

  const filteredItems = useMemo(() => {
    return GALLERY_DATA.filter((item) => {
      return selectedCategory === 'all' || item.category === selectedCategory;
    });
  }, [selectedCategory]);

  const activeItem: GalleryItem | null =
    activeItemIndex !== null ? filteredItems[activeItemIndex] || null : null;

  const handleNext = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((activeItemIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((activeItemIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-20 space-y-8">
      <Breadcrumbs items={[{ label: 'Campus Life & Facilities' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-1 rounded">
          <Camera className="w-3.5 h-3.5" />
          <span>Life at Omega</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Campus Gallery & Academic Infrastructure
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Glimpse inside our classrooms, research laboratories, study atriums, and celebration of student triumphs across our Dhanmondi, Uttara, and Gulshan branches.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg max-w-fit">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setSelectedCategory(cat.id);
              setActiveItemIndex(null);
            }}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
              selectedCategory === cat.id
                ? 'bg-blue-950 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Image Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setActiveItemIndex(idx)}
            className="group relative bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
          >
            <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-2.5 bg-white/90 backdrop-blur-xs rounded-full text-slate-900 shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-semibold text-blue-900 uppercase tracking-wider">
                  {item.category}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mt-0.5 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span className="truncate max-w-[140px]">{item.location}</span>
                </span>
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={activeItem !== null}
        onClose={() => setActiveItemIndex(null)}
        maxWidth="max-w-4xl"
      >
        {activeItem && (
          <div className="space-y-4">
            <div className="relative aspect-16/9 bg-slate-950 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="max-h-full max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
              {/* Previous & Next Controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2">
              <div>
                <span className="text-xs font-semibold text-blue-900 uppercase">
                  {activeItem.category}
                </span>
                <h3 className="text-base font-bold text-slate-900">{activeItem.title}</h3>
                <p className="text-xs text-slate-600 mt-1 max-w-xl">{activeItem.description}</p>
              </div>
              <div className="text-xs text-slate-500 sm:text-right shrink-0">
                <div className="flex items-center gap-1 sm:justify-end">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{activeItem.location}</span>
                </div>
                <div className="mt-0.5">{activeItem.date}</div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
