import React from 'react';
import { PageId } from '../types';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: {
    label: string;
    page?: PageId;
  }[];
  onNavigate: (page: PageId) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 py-2 overflow-x-auto whitespace-nowrap">
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center gap-1 hover:text-blue-950 transition-colors cursor-pointer"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </button>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {isLast || !item.page ? (
              <span className="font-medium text-slate-900 truncate max-w-[240px]">
                {item.label}
              </span>
            ) : (
              <button
                onClick={() => item.page && onNavigate(item.page)}
                className="hover:text-blue-950 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
