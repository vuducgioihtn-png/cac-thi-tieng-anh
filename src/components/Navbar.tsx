import React from 'react';
import { Flame, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: 'reflex' | 'timeline' | 'matrix' | 'bank' | 'mistakes' | 'wh-questions';
  onSelectTab: (tab: 'reflex' | 'timeline' | 'matrix' | 'bank' | 'mistakes' | 'wh-questions') => void;
  streakDays: number;
  mistakesCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  streakDays,
  mistakesCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          onClick={() => onSelectTab('reflex')}
          className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 font-display flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-sm font-bold shadow-xs">
            TR
          </span>
          <span>TenseReflex</span>
        </button>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => onSelectTab('reflex')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'reflex' ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600' : 'hover:text-slate-900'
            }`}
          >
            Luyện Phản Xạ
          </button>
          <button
            onClick={() => onSelectTab('timeline')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'timeline' ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600' : 'hover:text-slate-900'
            }`}
          >
            Trục Thời Gian
          </button>
          <button
            onClick={() => onSelectTab('matrix')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'matrix' ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600' : 'hover:text-slate-900'
            }`}
          >
            Ma Trận 12 Thì
          </button>
          <button
            onClick={() => onSelectTab('wh-questions')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 flex items-center gap-1.5 ${
              activeTab === 'wh-questions' ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600' : 'hover:text-slate-900'
            }`}
          >
            <span>Wh- Questions</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-700">
              14 thì
            </span>
          </button>
          <button
            onClick={() => onSelectTab('bank')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'bank' ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600' : 'hover:text-slate-900'
            }`}
          >
            Kho 100 Câu
          </button>
          <button
            onClick={() => onSelectTab('mistakes')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 flex items-center gap-1.5 ${
              activeTab === 'mistakes' ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600' : 'hover:text-slate-900'
            }`}
          >
            <span>Sổ Tay Lỗi Sai</span>
            {mistakesCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700">
                {mistakesCount}
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200/80 text-xs font-semibold">
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>{streakDays} ngày liên tiếp</span>
          </div>
          <button
            onClick={() => onSelectTab('reflex')}
            className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap shrink-0 shadow-xs flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vào Luyện Tập</span>
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="md:hidden flex items-center justify-around border-t border-slate-100 px-2 py-2 overflow-x-auto text-xs bg-slate-50/90 gap-1">
        <button
          onClick={() => onSelectTab('reflex')}
          className={`px-2.5 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'reflex' ? 'bg-indigo-600 text-white' : 'text-slate-600'
          }`}
        >
          Luyện Tập
        </button>
        <button
          onClick={() => onSelectTab('wh-questions')}
          className={`px-2.5 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'wh-questions' ? 'bg-indigo-600 text-white' : 'text-slate-600'
          }`}
        >
          Wh- Questions
        </button>
        <button
          onClick={() => onSelectTab('timeline')}
          className={`px-2.5 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'timeline' ? 'bg-indigo-600 text-white' : 'text-slate-600'
          }`}
        >
          Trục Thời Gian
        </button>
        <button
          onClick={() => onSelectTab('matrix')}
          className={`px-2.5 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'matrix' ? 'bg-indigo-600 text-white' : 'text-slate-600'
          }`}
        >
          Ma Trận
        </button>
        <button
          onClick={() => onSelectTab('bank')}
          className={`px-2.5 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'bank' ? 'bg-indigo-600 text-white' : 'text-slate-600'
          }`}
        >
          100 Câu
        </button>
        <button
          onClick={() => onSelectTab('mistakes')}
          className={`px-2.5 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'mistakes' ? 'bg-indigo-600 text-white' : 'text-slate-600'
          }`}
        >
          Lỗi Sai ({mistakesCount})
        </button>
      </div>
    </header>
  );
};
