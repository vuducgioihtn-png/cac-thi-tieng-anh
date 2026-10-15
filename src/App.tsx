import React, { useState, useEffect } from 'react';
import { UserStats, TenseId, Exercise } from './types';
import { loadUserStats, saveUserStats } from './utils/storage';
import { Navbar } from './components/Navbar';
import { ReflexTrainer } from './components/ReflexTrainer';
import { TimelineVisualizer } from './components/TimelineVisualizer';
import { TenseMatrix } from './components/TenseMatrix';
import { QuestionBank } from './components/QuestionBank';
import { MistakesReview } from './components/MistakesReview';
import { WhQuestionsMastery } from './components/WhQuestionsMastery';
import { Play, Sparkles, Clock, Target, Layers, ArrowRight } from 'lucide-react';

export default function App() {
  const [stats, setStats] = useState<UserStats>(loadUserStats);
  const [activeTab, setActiveTab] = useState<'reflex' | 'timeline' | 'matrix' | 'bank' | 'mistakes' | 'wh-questions'>('reflex');
  const [initialTenseFilter, setInitialTenseFilter] = useState<TenseId | 'all' | 'mistakes'>('all');
  const [timelineTenseId, setTimelineTenseId] = useState<TenseId>('past_continuous');

  const handleUpdateStats = (newStats: UserStats) => {
    setStats(newStats);
    saveUserStats(newStats);
  };

  const handleSelectTenseForPractice = (tenseId: TenseId) => {
    setInitialTenseFilter(tenseId);
    setActiveTab('reflex');
  };

  const handleOpenMasterclass = (tenseId: TenseId) => {
    setTimelineTenseId(tenseId);
    setActiveTab('timeline');
  };

  const handleToggleBookmark = (id: number) => {
    const updated = { ...stats };
    if (updated.bookmarkedIds.includes(id)) {
      updated.bookmarkedIds = updated.bookmarkedIds.filter(i => i !== id);
    } else {
      updated.bookmarkedIds.push(id);
    }
    handleUpdateStats(updated);
  };

  const handlePracticeSpecificQuestion = (_exercise: Exercise) => {
    setInitialTenseFilter(_exercise.tenseId);
    setActiveTab('reflex');
  };

  const handleRemoveMistake = (id: number) => {
    const updated = { ...stats };
    updated.mistakeIds = updated.mistakeIds.filter(i => i !== id);
    handleUpdateStats(updated);
  };

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-900 flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        streakDays={stats.streakDays}
        mistakesCount={stats.mistakeIds.length}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 md:py-8 space-y-8">
        {/* Dynamic Hero Banner (Only shown on top of Reflex mode to set context) */}
        {activeTab === 'reflex' && (
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white p-6 md:p-10 shadow-xl border border-indigo-900/40">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
                <span>Phương pháp phản xạ trực quan 3 bước: Nhìn Trục ➔ Nghe Âm ➔ Chọn Tốc Độ</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display leading-tight text-white">
                Luyện Phản Xạ 12 Thì Tiếng Anh
              </h1>

              <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
                Ghi nhớ sâu bản chất của từng thì qua hình ảnh chuyển động, nghe phát âm IPA chuẩn bản xứ và rèn phản xạ tức thì với 100 câu bài tập đa dạng.
              </p>

              {/* KPI Strip */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-indigo-800/60 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-slate-400">Ngân hàng câu hỏi</div>
                  <div className="text-lg font-bold font-mono text-white mt-0.5">100 Câu</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-slate-400">Bản đồ ngữ pháp</div>
                  <div className="text-lg font-bold font-mono text-white mt-0.5">12 Thì Trọn Gói</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-slate-400">Đã luyện tập</div>
                  <div className="text-lg font-bold font-mono text-indigo-300 mt-0.5">{stats.totalAnswered} lượt</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-slate-400">Tỷ lệ chính xác</div>
                  <div className="text-lg font-bold font-mono text-emerald-400 mt-0.5">
                    {stats.totalAnswered > 0 ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) : 100}%
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative background shapes */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none hidden lg:block">
              <svg viewBox="0 0 200 200" className="w-full h-full text-indigo-400">
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="10 5" />
                <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="2" fill="none" />
                <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="2" />
                <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
        )}

        {/* Tab Views */}
        {activeTab === 'reflex' && (
          <ReflexTrainer
            stats={stats}
            onUpdateStats={handleUpdateStats}
            initialTenseFilter={initialTenseFilter}
          />
        )}

        {activeTab === 'timeline' && (
          <TimelineVisualizer
            onSelectTense={handleSelectTenseForPractice}
            initialTenseId={timelineTenseId}
            onOpenWhQuestions={() => setActiveTab('wh-questions')}
          />
        )}

        {activeTab === 'matrix' && (
          <TenseMatrix
            onSelectTenseForPractice={handleSelectTenseForPractice}
            onOpenMasterclass={handleOpenMasterclass}
            onOpenWhQuestions={() => setActiveTab('wh-questions')}
          />
        )}

        {activeTab === 'wh-questions' && (
          <WhQuestionsMastery
            onOpenTrainer={() => {
              setInitialTenseFilter('all');
              setActiveTab('reflex');
            }}
          />
        )}

        {activeTab === 'bank' && (
          <QuestionBank
            bookmarkedIds={stats.bookmarkedIds}
            mistakeIds={stats.mistakeIds}
            onToggleBookmark={handleToggleBookmark}
            onPracticeSpecificQuestion={handlePracticeSpecificQuestion}
          />
        )}

        {activeTab === 'mistakes' && (
          <MistakesReview
            stats={stats}
            onStartMistakeDrill={() => {
              setInitialTenseFilter('mistakes');
              setActiveTab('reflex');
            }}
            onRemoveMistake={handleRemoveMistake}
          />
        )}
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-medium text-slate-600">
            TenseReflex · Ứng Dụng Luyện Phản Xạ 12 Thì Tiếng Anh Trực Quan
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Phiên âm IPA chuẩn Quốc Tế</span>
            <span>·</span>
            <span>Web Speech TTS</span>
            <span>·</span>
            <span>100 Câu Phân Tích Chuyên Sâu</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
