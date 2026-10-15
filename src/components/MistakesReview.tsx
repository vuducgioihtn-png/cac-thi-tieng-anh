import React from 'react';
import { Exercise, UserStats } from '../types';
import { EXERCISES } from '../data/exercises';
import { playAudio } from '../utils/audio';
import { Volume2, Play, CheckCircle2, RotateCcw, AlertTriangle, Sparkles } from 'lucide-react';

interface MistakesReviewProps {
  stats: UserStats;
  onStartMistakeDrill: () => void;
  onRemoveMistake: (id: number) => void;
}

export const MistakesReview: React.FC<MistakesReviewProps> = ({
  stats,
  onStartMistakeDrill,
  onRemoveMistake
}) => {
  const mistakeExercises = EXERCISES.filter(ex => stats.mistakeIds.includes(ex.id));

  // Tense mistake frequency analysis
  const tenseCounts: Record<string, { count: number; nameVi: string }> = {};
  mistakeExercises.forEach(ex => {
    if (!tenseCounts[ex.tenseId]) {
      tenseCounts[ex.tenseId] = { count: 0, nameVi: ex.tenseNameVi };
    }
    tenseCounts[ex.tenseId].count += 1;
  });

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="text-xs font-semibold text-rose-600 tracking-wider uppercase mb-1">
            Ghi Nhớ Sâu & Khắc Phục Lỗi Sai
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Sổ Tay Lỗi Sai Cần Ôn Tập
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Các câu bạn từng trả lời sai được lưu lại tự động. Hãy luyện lại nhiều lần cho đến khi đạt phản xạ chính xác 100%.
          </p>
        </div>

        {mistakeExercises.length > 0 && (
          <button
            onClick={onStartMistakeDrill}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-xl transition-colors flex items-center gap-2 shadow-xs shrink-0"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Luyện Lại Riêng Các Câu Sai ({mistakeExercises.length})</span>
          </button>
        )}
      </div>

      {mistakeExercises.length === 0 ? (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-xs">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-100">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Không có câu nào trong sổ tay lỗi sai!
          </h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto mt-1">
            Bạn đang nắm bài rất tốt hoặc chưa bắt đầu làm bài. Hãy vào phần <strong>Luyện Phản Xạ</strong> để thử thách bản thân với các câu hỏi tốc độ cao.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Analysis Card */}
          <div className="bg-rose-50/50 rounded-2xl border border-rose-200/80 p-5">
            <div className="flex items-center gap-2 text-rose-900 font-bold text-sm mb-3">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Phân tích điểm cần củng cố theo thì:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(tenseCounts).map(([tenseId, data]) => (
                <div
                  key={tenseId}
                  className="px-3 py-1.5 rounded-lg bg-white border border-rose-200 text-xs text-rose-900 flex items-center gap-2 shadow-xs"
                >
                  <span className="font-semibold">{data.nameVi}</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-rose-100 text-rose-800 font-bold font-mono">
                    {data.count} câu sai
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* List of mistakes */}
          <div className="space-y-3">
            {mistakeExercises.map((ex) => (
              <div
                key={ex.id}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-slate-300 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        Câu {ex.id}
                      </span>
                      <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                        {ex.tenseNameVi}
                      </span>
                    </div>

                    <div className="text-sm font-bold text-slate-900">
                      {ex.promptSentence}
                    </div>

                    <div className="mt-2 text-xs">
                      <span className="text-slate-500">Đáp án chuẩn: </span>
                      <strong className="text-emerald-700 font-mono text-sm">{ex.targetAnswer}</strong>
                    </div>

                    <div className="text-xs text-slate-600 mt-0.5 font-medium">
                      "{ex.fullSentence}"
                    </div>

                    <div className="mt-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <strong>Lý do chọn thì:</strong> {ex.explanationVi}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-start">
                    <button
                      onClick={() => playAudio(ex.fullSentence)}
                      className="p-2 text-slate-600 hover:text-indigo-600 rounded-lg border border-slate-200 hover:bg-indigo-50 transition-colors"
                      title="Nghe phát âm"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onRemoveMistake(ex.id)}
                      className="px-3 py-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors flex items-center gap-1"
                      title="Đánh dấu đã hiểu và xóa khỏi sổ tay"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Đã nắm vững</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
