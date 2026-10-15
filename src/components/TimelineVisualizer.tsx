import React, { useState, useEffect } from 'react';
import { TENSES_METADATA } from '../data/tenses';
import { TenseId } from '../types';
import { TenseIllustration } from './TenseIllustrations';
import { Volume2, Play, Sparkles } from 'lucide-react';
import { playAudio } from '../utils/audio';
import { PastSimpleDeepDive } from './PastSimpleDeepDive';
import { PastContinuousDeepDive } from './PastContinuousDeepDive';
import { PastPerfectDeepDive } from './PastPerfectDeepDive';
import { PastPerfectContinuousDeepDive } from './PastPerfectContinuousDeepDive';
import { PresentSimpleDeepDive } from './PresentSimpleDeepDive';
import { PresentContinuousDeepDive } from './PresentContinuousDeepDive';
import { PresentPerfectDeepDive } from './PresentPerfectDeepDive';
import { PresentPerfectContinuousDeepDive } from './PresentPerfectContinuousDeepDive';
import { FutureSimpleDeepDive } from './FutureSimpleDeepDive';
import { NearFutureDeepDive } from './NearFutureDeepDive';
import { FutureContinuousDeepDive } from './FutureContinuousDeepDive';
import { FuturePerfectDeepDive } from './FuturePerfectDeepDive';
import { FuturePerfectContinuousDeepDive } from './FuturePerfectContinuousDeepDive';

interface TimelineVisualizerProps {
  onSelectTense: (tenseId: TenseId) => void;
  initialTenseId?: TenseId;
  onOpenWhQuestions?: () => void;
}

export const TimelineVisualizer: React.FC<TimelineVisualizerProps> = ({
  onSelectTense,
  initialTenseId,
  onOpenWhQuestions
}) => {
  const [activeTenseId, setActiveTenseId] = useState<TenseId>(initialTenseId || 'past_continuous');

  useEffect(() => {
    if (initialTenseId) {
      setActiveTenseId(initialTenseId);
    }
  }, [initialTenseId]);

  const activeTense = TENSES_METADATA.find(t => t.id === activeTenseId) || TENSES_METADATA[0];

  const timelineTenses: { id: TenseId; shortLabel: string; category: 'past' | 'present' | 'future' }[] = [
    // Nhóm Quá khứ (QK)
    { id: 'past_simple', shortLabel: 'QK Đơn', category: 'past' },
    { id: 'past_continuous', shortLabel: 'QK Tiếp diễn', category: 'past' },
    { id: 'past_perfect', shortLabel: 'QK Hoàn thành', category: 'past' },
    { id: 'past_perfect_continuous', shortLabel: 'QK Hoàn thành tiếp diễn', category: 'past' },
    // Nhóm Hiện tại (HT)
    { id: 'present_simple', shortLabel: 'HT Đơn', category: 'present' },
    { id: 'present_continuous', shortLabel: 'HT Tiếp diễn', category: 'present' },
    { id: 'present_perfect', shortLabel: 'HT Hoàn thành', category: 'present' },
    { id: 'present_perfect_continuous', shortLabel: 'HT Hoàn thành tiếp diễn', category: 'present' },
    // Nhóm Tương lai (TL)
    { id: 'future_simple', shortLabel: 'TL Đơn', category: 'future' },
    { id: 'near_future', shortLabel: 'Tương lai gần', category: 'future' },
    { id: 'future_continuous', shortLabel: 'TL Tiếp diễn', category: 'future' },
    { id: 'future_perfect', shortLabel: 'TL Hoàn thành', category: 'future' },
    { id: 'future_perfect_continuous', shortLabel: 'TL Hoàn thành tiếp diễn', category: 'future' },
  ];

  const pastTenses = timelineTenses.filter(t => t.category === 'past');
  const presentTenses = timelineTenses.filter(t => t.category === 'present');
  const futureTenses = timelineTenses.filter(t => t.category === 'future');

  const renderTenseButton = (item: { id: TenseId; shortLabel: string; category: 'past' | 'present' | 'future' }) => {
    const isSelected = activeTenseId === item.id;
    const catColor =
      item.category === 'past'
        ? isSelected ? 'bg-amber-600 text-white shadow-xs font-bold ring-2 ring-amber-400' : 'bg-white hover:bg-amber-100 text-amber-950 border border-amber-200'
        : item.category === 'present'
        ? isSelected ? 'bg-emerald-600 text-white shadow-xs font-bold ring-2 ring-emerald-400' : 'bg-white hover:bg-emerald-100 text-emerald-950 border border-emerald-200'
        : isSelected ? 'bg-indigo-600 text-white shadow-xs font-bold ring-2 ring-indigo-400' : 'bg-white hover:bg-indigo-100 text-indigo-950 border border-indigo-200';

    return (
      <button
        key={item.id}
        onClick={() => setActiveTenseId(item.id)}
        className={`px-3 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all text-center ${catColor}`}
      >
        {item.shortLabel}
      </button>
    );
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-100 gap-2">
        <div>
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">
            Mô Phỏng Trực Quan Động
          </div>
          <h3 className="text-xl font-bold text-slate-900 mt-0.5">
            Trục Thời Gian Tương Tác 12 Thì
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Bấm chọn các mốc trên dòng thời gian từ Quá Khứ tới Tương Lai để thấy rõ bản chất chuyển dịch của từng thì.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 font-medium">Quá khứ</span>
          <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">Hiện tại</span>
          <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-800 border border-indigo-200 font-medium">Tương lai</span>
        </div>
      </div>

      {/* Interactive Horizontal Scrollable Timeline Bar */}
      <div className="mt-6">
        {/* Cohort Section Headers */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2 px-1">
          <div className="flex items-center gap-1.5 text-amber-800">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>NHÓM QUÁ KHỨ (QK)</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>NHÓM HIỆN TẠI (HT)</span>
          </div>
          <div className="flex items-center gap-1.5 text-indigo-800">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>NHÓM TƯƠNG LAI (TL)</span>
          </div>
        </div>

        <div className="overflow-x-auto pb-3">
          <div className="flex items-center gap-2.5 min-w-[1080px] p-2 bg-slate-100/80 rounded-2xl border border-slate-200">
            {/* Nhóm Quá khứ */}
            <div className="flex items-center gap-1.5 p-1.5 bg-amber-50/70 rounded-xl border border-amber-200/70">
              {pastTenses.map(renderTenseButton)}
            </div>

            <div className="w-px h-8 bg-slate-300 shrink-0" />

            {/* Nhóm Hiện tại */}
            <div className="flex items-center gap-1.5 p-1.5 bg-emerald-50/70 rounded-xl border border-emerald-200/70">
              {presentTenses.map(renderTenseButton)}
            </div>

            <div className="w-px h-8 bg-slate-300 shrink-0" />

            {/* Nhóm Tương lai */}
            <div className="flex items-center gap-1.5 p-1.5 bg-indigo-50/70 rounded-xl border border-indigo-200/70">
              {futureTenses.map(renderTenseButton)}
            </div>
          </div>
        </div>
      </div>

      {/* Active Selected Tense Showcase */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: SVG Diagram */}
        <div className="lg:col-span-6 flex flex-col justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500 uppercase">Minh họa trực quan chuyển động</span>
              <span className="text-xs font-mono font-medium text-slate-600 px-2 py-0.5 rounded bg-white border border-slate-200">
                {activeTense.formula.affirmative}
              </span>
            </div>
            <TenseIllustration tenseId={activeTense.id} size="lg" />
          </div>

          <div className="mt-3 p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-600">
            <span className="font-semibold text-slate-800">Tín hiệu nhận biết nhanh: </span>
            {activeTense.signalWords.join(', ')}
          </div>
        </div>

        {/* Right: Concept & Interactive Action */}
        <div className="lg:col-span-6 flex flex-col justify-between p-5 rounded-xl border border-slate-200 bg-white">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  {activeTense.nameEn}
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mt-0.5">
                  {activeTense.nameVi}
                </h4>
              </div>
              <button
                onClick={() => playAudio(activeTense.exampleSentence)}
                className="p-2 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition-colors border border-indigo-100 flex items-center gap-1 text-xs font-medium"
                title="Nghe câu mẫu"
              >
                <Volume2 className="w-4 h-4" />
                <span>Nghe</span>
              </button>
            </div>

            <div className="mt-3 text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-100">
              {activeTense.conceptVi}
            </div>

            <div className="mt-4 p-3.5 rounded-lg bg-indigo-50/50 border border-indigo-100">
              <div className="text-xs font-semibold text-indigo-900 mb-1">Ví dụ chuẩn phản xạ:</div>
              <div className="text-sm font-semibold text-slate-900 font-sans">
                "{activeTense.exampleSentence}"
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                {activeTense.exampleTranslation}
              </div>
            </div>

            <div className="mt-3 flex items-start gap-2 text-xs text-amber-800 bg-amber-50/60 p-2.5 rounded-lg border border-amber-200">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>Mẹo cốt lõi:</strong> {activeTense.coreTip}</span>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-end">
            <button
              onClick={() => onSelectTense(activeTense.id)}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors flex items-center gap-2 shadow-xs"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Bắt đầu luyện tập phản xạ cho thì này
            </button>
          </div>
        </div>
      </div>

      {/* Chuyên Đề Masterclass Selector & View */}
      <div className="mt-8 p-4.5 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 rounded-2xl text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm border border-slate-700/60">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-2">
              <span>Chuyên Đề Masterclass Chuyên Sâu</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-200">
                Luyện Thi & Ngữ Pháp
              </span>
            </div>
            <div className="text-xs text-slate-300 mt-0.5">
              Cấu trúc 3 dạng chi tiết, các cách dùng mở rộng (Accordion), nhận biết & hệ thống cảnh báo bẫy đề thi.
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {onOpenWhQuestions && (
            <button
              onClick={onOpenWhQuestions}
              className="px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 bg-linear-to-r from-amber-400 to-amber-500 text-slate-950 hover:from-amber-300 hover:to-amber-400 shadow-md cursor-pointer"
            >
              <span>🎯 Wh- Questions (14 thì)</span>
            </button>
          )}
          <button
            onClick={() => setActiveTenseId('present_simple')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTenseId === 'present_simple'
                ? 'bg-emerald-600 text-white shadow-md ring-2 ring-emerald-300'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
          >
            <span>HT Đơn</span>
          </button>
          <button
            onClick={() => setActiveTenseId('present_continuous')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTenseId === 'present_continuous'
                ? 'bg-teal-600 text-white shadow-md ring-2 ring-teal-300'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
          >
            <span>HT Tiếp Diễn</span>
          </button>
          <button
            onClick={() => setActiveTenseId('present_perfect')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTenseId === 'present_perfect'
                ? 'bg-indigo-600 text-white shadow-md ring-2 ring-indigo-300'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
          >
            <span>HT Hoàn Thành</span>
          </button>
          <button
            onClick={() => setActiveTenseId('present_perfect_continuous')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTenseId === 'present_perfect_continuous'
                ? 'bg-sky-600 text-white shadow-md ring-2 ring-sky-300'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
          >
            <span>HT HT Tiếp Diễn</span>
          </button>
          <button
            onClick={() => setActiveTenseId('past_simple')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTenseId === 'past_simple'
                ? 'bg-amber-500 text-white shadow-md ring-2 ring-amber-300'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
          >
            <span>QK Đơn</span>
          </button>
          <button
            onClick={() => setActiveTenseId('past_continuous')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTenseId === 'past_continuous'
                ? 'bg-orange-500 text-white shadow-md ring-2 ring-orange-300'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
          >
            <span>QK Tiếp Diễn</span>
          </button>
          <button
            onClick={() => setActiveTenseId('past_perfect')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTenseId === 'past_perfect'
                ? 'bg-rose-600 text-white shadow-md ring-2 ring-rose-300'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
          >
            <span>QK Hoàn Thành</span>
          </button>
          <button
            onClick={() => setActiveTenseId('past_perfect_continuous')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTenseId === 'past_perfect_continuous'
                ? 'bg-red-700 text-white shadow-md ring-2 ring-red-400'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
          >
            <span>QK HT Tiếp Diễn</span>
          </button>
          <button
            onClick={() => setActiveTenseId('future_simple')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTenseId === 'future_simple'
                ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
          >
            <span>TL Đơn</span>
          </button>
          <button
            onClick={() => setActiveTenseId('near_future')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTenseId === 'near_future'
                ? 'bg-amber-600 text-white shadow-md ring-2 ring-amber-300'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
          >
            <span>TL Gần</span>
          </button>
          <button
            onClick={() => setActiveTenseId('future_continuous')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTenseId === 'future_continuous'
                ? 'bg-purple-600 text-white shadow-md ring-2 ring-purple-300'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
          >
            <span>TL Tiếp Diễn</span>
          </button>
          <button
            onClick={() => setActiveTenseId('future_perfect')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTenseId === 'future_perfect'
                ? 'bg-fuchsia-700 text-white shadow-md ring-2 ring-fuchsia-300'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
          >
            <span>TL Hoàn Thành</span>
          </button>
          <button
            onClick={() => setActiveTenseId('future_perfect_continuous')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTenseId === 'future_perfect_continuous'
                ? 'bg-pink-700 text-white shadow-md ring-2 ring-pink-300'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
          >
            <span>TL HT Tiếp Diễn</span>
          </button>
        </div>
      </div>

      {/* Hiển thị Masterclass tương ứng */}
      {activeTenseId === 'present_simple' && (
        <PresentSimpleDeepDive onStartPractice={() => onSelectTense('present_simple')} />
      )}

      {activeTenseId === 'present_continuous' && (
        <PresentContinuousDeepDive onStartPractice={() => onSelectTense('present_continuous')} />
      )}

      {activeTenseId === 'present_perfect' && (
        <PresentPerfectDeepDive onStartPractice={() => onSelectTense('present_perfect')} />
      )}

      {activeTenseId === 'present_perfect_continuous' && (
        <PresentPerfectContinuousDeepDive onStartPractice={() => onSelectTense('present_perfect_continuous')} />
      )}

      {activeTenseId === 'past_simple' && (
        <PastSimpleDeepDive onStartPractice={() => onSelectTense('past_simple')} />
      )}

      {activeTenseId === 'past_continuous' && (
        <PastContinuousDeepDive onStartPractice={() => onSelectTense('past_continuous')} />
      )}

      {activeTenseId === 'past_perfect' && (
        <PastPerfectDeepDive onStartPractice={() => onSelectTense('past_perfect')} />
      )}

      {activeTenseId === 'past_perfect_continuous' && (
        <PastPerfectContinuousDeepDive onStartPractice={() => onSelectTense('past_perfect_continuous')} />
      )}

      {activeTenseId === 'future_simple' && (
        <FutureSimpleDeepDive onStartPractice={() => onSelectTense('future_simple')} />
      )}

      {activeTenseId === 'near_future' && (
        <NearFutureDeepDive onStartPractice={() => onSelectTense('near_future')} />
      )}

      {activeTenseId === 'future_continuous' && (
        <FutureContinuousDeepDive onStartPractice={() => onSelectTense('future_continuous')} />
      )}

      {activeTenseId === 'future_perfect' && (
        <FuturePerfectDeepDive onStartPractice={() => onSelectTense('future_perfect')} />
      )}

      {activeTenseId === 'future_perfect_continuous' && (
        <FuturePerfectContinuousDeepDive onStartPractice={() => onSelectTense('future_perfect_continuous')} />
      )}

      {activeTenseId !== 'present_simple' && activeTenseId !== 'present_continuous' && activeTenseId !== 'present_perfect' && activeTenseId !== 'present_perfect_continuous' && activeTenseId !== 'past_simple' && activeTenseId !== 'past_continuous' && activeTenseId !== 'past_perfect' && activeTenseId !== 'past_perfect_continuous' && activeTenseId !== 'future_simple' && activeTenseId !== 'near_future' && activeTenseId !== 'future_continuous' && activeTenseId !== 'future_perfect' && activeTenseId !== 'future_perfect_continuous' && (
        <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span>
            💡 Bạn đang xem mô phỏng của thì <strong>{activeTense.nameVi}</strong>. Bấm vào các nút chuyên đề phía trên để mở cẩm nang Masterclass chuyên sâu!
          </span>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveTenseId('present_simple')}
              className="text-emerald-700 font-bold hover:underline"
            >
              HT Đơn →
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTenseId('present_continuous')}
              className="text-teal-700 font-bold hover:underline"
            >
              HT Tiếp Diễn →
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTenseId('present_perfect')}
              className="text-indigo-700 font-bold hover:underline"
            >
              HT Hoàn Thành →
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTenseId('present_perfect_continuous')}
              className="text-sky-700 font-bold hover:underline"
            >
              HT HT Tiếp Diễn →
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTenseId('past_simple')}
              className="text-amber-700 font-bold hover:underline"
            >
              QK Đơn →
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTenseId('past_continuous')}
              className="text-orange-700 font-bold hover:underline"
            >
              QK Tiếp Diễn →
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTenseId('past_perfect')}
              className="text-rose-700 font-bold hover:underline"
            >
              QK Hoàn Thành →
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTenseId('past_perfect_continuous')}
              className="text-red-700 font-bold hover:underline"
            >
              QK HT Tiếp Diễn →
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTenseId('future_simple')}
              className="text-blue-700 font-bold hover:underline"
            >
              TL Đơn →
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTenseId('near_future')}
              className="text-amber-700 font-bold hover:underline"
            >
              TL Gần →
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTenseId('future_continuous')}
              className="text-purple-700 font-bold hover:underline"
            >
              TL Tiếp Diễn →
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTenseId('future_perfect')}
              className="text-fuchsia-700 font-bold hover:underline"
            >
              TL Hoàn Thành →
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTenseId('future_perfect_continuous')}
              className="text-pink-700 font-bold hover:underline"
            >
              TL HT Tiếp Diễn →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
