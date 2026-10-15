import React, { useState } from 'react';
import { TENSES_METADATA } from '../data/tenses';
import { TenseInfo, TenseId } from '../types';
import { TenseIllustration } from './TenseIllustrations';
import { playAudio } from '../utils/audio';
import { Volume2, ArrowRight, X, Sparkles, BookOpen } from 'lucide-react';

interface TenseMatrixProps {
  onSelectTenseForPractice: (tenseId: TenseId) => void;
  onOpenMasterclass?: (tenseId: TenseId) => void;
  onOpenWhQuestions?: () => void;
}

export const TenseMatrix: React.FC<TenseMatrixProps> = ({
  onSelectTenseForPractice,
  onOpenMasterclass,
  onOpenWhQuestions
}) => {
  const [selectedTense, setSelectedTense] = useState<TenseInfo | null>(null);

  const aspects = [
    { key: 'simple', label: 'Đơn (Simple)', desc: 'Sự thật, thói quen, hoặc mốc cố định' },
    { key: 'continuous', label: 'Tiếp Diễn (Continuous)', desc: 'Đang diễn ra tại một thời điểm' },
    { key: 'perfect', label: 'Hoàn Thành (Perfect)', desc: 'Hoàn tất trước một mốc thời gian' },
    { key: 'perfect_continuous', label: 'Hoàn Thành Tiếp Diễn', desc: 'Nhấn mạnh độ dài và tính liên tục' },
  ];

  const getTenseByCoord = (category: string, aspectIndex: number): TenseInfo | undefined => {
    if (category === 'present') {
      if (aspectIndex === 0) return TENSES_METADATA.find(t => t.id === 'present_simple');
      if (aspectIndex === 1) return TENSES_METADATA.find(t => t.id === 'present_continuous');
      if (aspectIndex === 2) return TENSES_METADATA.find(t => t.id === 'present_perfect');
      if (aspectIndex === 3) return TENSES_METADATA.find(t => t.id === 'present_perfect_continuous');
    }
    if (category === 'past') {
      if (aspectIndex === 0) return TENSES_METADATA.find(t => t.id === 'past_simple');
      if (aspectIndex === 1) return TENSES_METADATA.find(t => t.id === 'past_continuous');
      if (aspectIndex === 2) return TENSES_METADATA.find(t => t.id === 'past_perfect');
      if (aspectIndex === 3) return TENSES_METADATA.find(t => t.id === 'past_perfect_continuous');
    }
    if (category === 'future') {
      if (aspectIndex === 0) return TENSES_METADATA.find(t => t.id === 'future_simple');
      if (aspectIndex === 1) return TENSES_METADATA.find(t => t.id === 'future_continuous');
      if (aspectIndex === 2) return TENSES_METADATA.find(t => t.id === 'future_perfect');
      if (aspectIndex === 3) return TENSES_METADATA.find(t => t.id === 'future_perfect_continuous');
    }
    return undefined;
  };

  return (
    <div className="w-full">
      {/* Header kicker */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 pb-4 border-b border-slate-200 gap-4">
        <div>
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-1">
            Bản Đồ Tư Duy Hệ Thống
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Ma Trận Bản Đồ 12 Thì Tiếng Anh
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Bản đồ trực quan liên kết giữa 3 trục thời gian và 4 thể hành động. Bấm vào bất kỳ thì nào để xem minh họa và công thức chuẩn hóa.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {onOpenWhQuestions && (
            <button
              onClick={onOpenWhQuestions}
              className="px-3.5 py-2 text-xs font-bold text-indigo-900 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-xl transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <span>🎯 Bộ Công Thức Wh- Questions (14 thì)</span>
            </button>
          )}
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Hiện tại
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Quá khứ
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" /> Tương lai
            </span>
          </div>
        </div>
      </div>

      {/* The 3x4 Matrix Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs bg-white">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-700">
              <th className="p-4 w-44">Thể Hành Động (Aspect)</th>
              <th className="p-4 border-l border-slate-200 bg-emerald-50/50 text-emerald-900">
                <div className="flex items-center gap-2 font-display text-sm">
                  <span>Hiện Tại (Present)</span>
                </div>
              </th>
              <th className="p-4 border-l border-slate-200 bg-amber-50/50 text-amber-900">
                <div className="flex items-center gap-2 font-display text-sm">
                  <span>Quá Khứ (Past)</span>
                </div>
              </th>
              <th className="p-4 border-l border-slate-200 bg-indigo-50/50 text-indigo-900">
                <div className="flex items-center gap-2 font-display text-sm">
                  <span>Tương Lai (Future)</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {aspects.map((aspect, aspectIdx) => (
              <tr key={aspect.key} className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 bg-slate-50/40 border-r border-slate-200">
                  <div className="font-semibold text-slate-900">{aspect.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{aspect.desc}</div>
                </td>

                {/* Present Cell */}
                {(() => {
                  const tense = getTenseByCoord('present', aspectIdx);
                  if (!tense) return <td className="p-4"></td>;
                  return (
                    <td className="p-3 border-r border-slate-100 align-top">
                      <button
                        onClick={() => setSelectedTense(tense)}
                        className="w-full text-left p-3 rounded-lg border border-emerald-100 bg-emerald-50/40 hover:bg-emerald-100/60 hover:border-emerald-300 transition-all group flex flex-col justify-between h-full"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-emerald-900 group-hover:text-emerald-950 text-sm">
                              {tense.nameVi}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="text-xs text-emerald-700/80 mt-0.5 font-medium">{tense.nameEn}</div>
                          <div className="text-xs font-mono text-slate-700 mt-2 bg-white/80 p-1.5 rounded border border-emerald-100/60 font-medium">
                            {tense.formula.affirmative}
                          </div>
                        </div>
                        <div className="text-[11px] text-slate-600 mt-2 line-clamp-2">
                          {tense.conceptVi}
                        </div>
                      </button>
                    </td>
                  );
                })()}

                {/* Past Cell */}
                {(() => {
                  const tense = getTenseByCoord('past', aspectIdx);
                  if (!tense) return <td className="p-4"></td>;
                  return (
                    <td className="p-3 border-r border-slate-100 align-top">
                      <button
                        onClick={() => setSelectedTense(tense)}
                        className="w-full text-left p-3 rounded-lg border border-amber-100 bg-amber-50/40 hover:bg-amber-100/60 hover:border-amber-300 transition-all group flex flex-col justify-between h-full"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-amber-900 group-hover:text-amber-950 text-sm">
                              {tense.nameVi}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="text-xs text-amber-700/80 mt-0.5 font-medium">{tense.nameEn}</div>
                          <div className="text-xs font-mono text-slate-700 mt-2 bg-white/80 p-1.5 rounded border border-amber-100/60 font-medium">
                            {tense.formula.affirmative}
                          </div>
                        </div>
                        <div className="text-[11px] text-slate-600 mt-2 line-clamp-2">
                          {tense.conceptVi}
                        </div>
                      </button>
                    </td>
                  );
                })()}

                {/* Future Cell */}
                {(() => {
                  const tense = getTenseByCoord('future', aspectIdx);
                  if (!tense) return <td className="p-4"></td>;
                  return (
                    <td className="p-3 align-top">
                      <button
                        onClick={() => setSelectedTense(tense)}
                        className="w-full text-left p-3 rounded-lg border border-indigo-100 bg-indigo-50/40 hover:bg-indigo-100/60 hover:border-indigo-300 transition-all group flex flex-col justify-between h-full"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-indigo-900 group-hover:text-indigo-950 text-sm">
                              {tense.nameVi}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="text-xs text-indigo-700/80 mt-0.5 font-medium">{tense.nameEn}</div>
                          <div className="text-xs font-mono text-slate-700 mt-2 bg-white/80 p-1.5 rounded border border-indigo-100/60 font-medium">
                            {tense.formula.affirmative}
                          </div>
                        </div>
                        <div className="text-[11px] text-slate-600 mt-2 line-clamp-2">
                          {tense.conceptVi}
                        </div>
                      </button>
                    </td>
                  );
                })()}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Near Future Note banner */}
      <div className="mt-4 p-4 rounded-xl bg-blue-50/60 border border-blue-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <div className="text-sm font-semibold text-blue-950">
              Lưu ý đặc biệt: Tương Lai Gần (Near Future - Be Going To)
            </div>
            <div className="text-xs text-blue-800 mt-0.5">
              Phân biệt với Will (tương lai đơn): dùng "be going to" khi có kế hoạch đã chuẩn bị hoặc có <strong>bằng chứng nhãn tiền</strong> (ví dụ: mây đen ➔ trời sắp mưa).
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            const nearFuture = TENSES_METADATA.find(t => t.id === 'near_future');
            if (nearFuture) setSelectedTense(nearFuture);
          }}
          className="px-3.5 py-1.5 text-xs font-semibold text-blue-700 bg-white border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap shrink-0"
        >
          Xem chi tiết Tương Lai Gần
        </button>
      </div>

      {/* Tense Detail Modal / Drawer */}
      {selectedTense && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                  Cẩm Nang Trực Quan
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  {selectedTense.nameVi} ({selectedTense.nameEn})
                </h3>
              </div>
              <button
                onClick={() => setSelectedTense(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Visual SVG Timeline Diagram */}
            <div className="mt-4">
              <div className="text-xs font-semibold text-slate-500 mb-1.5">Hình dung trực quan trên trục thời gian:</div>
              <TenseIllustration tenseId={selectedTense.id} size="md" />
            </div>

            {/* Core Concept */}
            <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                Bản chất và cách ghi nhớ:
              </div>
              <div className="text-sm text-slate-700 mt-1 leading-relaxed">
                {selectedTense.conceptVi}
              </div>
            </div>

            {/* Formulas Box */}
            <div className="mt-4">
              <div className="text-xs font-bold text-slate-700 mb-2 flex items-center justify-between">
                <span>Công thức ngữ pháp chuẩn (4 dạng):</span>
                {onOpenWhQuestions && (
                  <button
                    onClick={() => {
                      setSelectedTense(null);
                      onOpenWhQuestions();
                    }}
                    className="text-[11px] text-indigo-600 hover:text-indigo-800 font-semibold underline cursor-pointer"
                  >
                    Xem cẩm nang Wh- Questions 14 thì ➔
                  </button>
                )}
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-100 flex items-center justify-between">
                  <span>Khẳng định (+)</span>
                  <span className="font-semibold">{selectedTense.formula.affirmative}</span>
                </div>
                <div className="p-2 rounded-lg bg-rose-50 text-rose-900 border border-rose-100 flex items-center justify-between">
                  <span>Phủ định (-)</span>
                  <span className="font-semibold">{selectedTense.formula.negative}</span>
                </div>
                <div className="p-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-100 flex items-center justify-between">
                  <span>Nghi vấn Yes/No (?)</span>
                  <span className="font-semibold">{selectedTense.formula.question}</span>
                </div>
                {selectedTense.formula.whQuestion && (
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-950 border border-indigo-100 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-indigo-800">Câu hỏi Wh- (?)</span>
                      <span className="font-semibold">{selectedTense.formula.whQuestion}</span>
                    </div>
                    {selectedTense.formula.whQuestionExample && (
                      <div className="flex items-center justify-between pt-1 border-t border-indigo-200/50 text-[11px] text-indigo-900 font-sans">
                        <span>Ví dụ: <em>{selectedTense.formula.whQuestionExample}</em></span>
                        <button
                          onClick={() => playAudio(selectedTense.formula.whQuestionExample?.split('/')[0] || '')}
                          className="p-0.5 text-indigo-600 hover:text-indigo-800 shrink-0 cursor-pointer"
                          title="Phát âm ví dụ"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {selectedTense.formula.whSubjectException && (
                <div className="mt-2 p-2 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-900 flex items-start gap-1.5">
                  <span className="font-bold shrink-0">⚠️ Subject Question:</span>
                  <span>{selectedTense.formula.whSubjectException}</span>
                </div>
              )}
            </div>

            {/* Signal Words */}
            <div className="mt-4">
              <div className="text-xs font-bold text-slate-700 mb-1.5">Tín hiệu nhận biết (Signal Words):</div>
              <div className="flex flex-wrap gap-1.5">
                {selectedTense.signalWords.map((word, i) => (
                  <span key={i} className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200 font-medium">
                    {word}
                  </span>
                ))}
              </div>
            </div>

            {/* Example with Audio */}
            <div className="mt-4 p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-100">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-indigo-900">Ví dụ minh họa:</div>
                <button
                  onClick={() => playAudio(selectedTense.exampleSentence)}
                  className="flex items-center gap-1 text-xs font-medium text-indigo-700 hover:text-indigo-900 transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5" /> Nghe phát âm
                </button>
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-1">
                "{selectedTense.exampleSentence}"
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                {selectedTense.exampleTranslation}
              </div>
            </div>

            {/* Golden Tip */}
            <div className="mt-4 text-xs text-amber-800 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
              <strong>Mẹo phản xạ nhanh:</strong> {selectedTense.coreTip}
            </div>

            {/* Action buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
              {onOpenMasterclass ? (
                <button
                  onClick={() => {
                    const id = selectedTense.id;
                    setSelectedTense(null);
                    onOpenMasterclass(id);
                  }}
                  className="px-3.5 py-2 text-xs font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  Mở Masterclass Chuyên Sâu
                </button>
              ) : (
                <div />
              )}

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedTense(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Đóng
                </button>
                <button
                  onClick={() => {
                    const id = selectedTense.id;
                    setSelectedTense(null);
                    onSelectTenseForPractice(id);
                  }}
                  className="px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  Luyện phản xạ thì này <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
