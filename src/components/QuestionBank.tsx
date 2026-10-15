import React, { useState } from 'react';
import { EXERCISES } from '../data/exercises';
import { Exercise, TenseId } from '../types';
import { playAudio } from '../utils/audio';
import { Search, Volume2, Bookmark, CheckCircle2, ChevronDown, ChevronUp, Filter, Sparkles } from 'lucide-react';

interface QuestionBankProps {
  bookmarkedIds: number[];
  mistakeIds: number[];
  onToggleBookmark: (id: number) => void;
  onPracticeSpecificQuestion: (exercise: Exercise) => void;
}

export const QuestionBank: React.FC<QuestionBankProps> = ({
  bookmarkedIds,
  mistakeIds,
  onToggleBookmark,
  onPracticeSpecificQuestion
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'present' | 'past' | 'future' | 'mixed' | 'bookmarked' | 'mistakes'>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredExercises = EXERCISES.filter((ex) => {
    // Category check
    if (categoryFilter === 'present' && ex.category !== 'present') return false;
    if (categoryFilter === 'past' && ex.category !== 'past') return false;
    if (categoryFilter === 'future' && ex.category !== 'future') return false;
    if (categoryFilter === 'mixed' && ex.category !== 'mixed') return false;
    if (categoryFilter === 'bookmarked' && !bookmarkedIds.includes(ex.id)) return false;
    if (categoryFilter === 'mistakes' && !mistakeIds.includes(ex.id)) return false;

    // Search term check
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const matchSentence = ex.fullSentence.toLowerCase().includes(q);
      const matchTrans = ex.translationVi.toLowerCase().includes(q);
      const matchExplain = ex.explanationVi.toLowerCase().includes(q);
      const matchVerb = ex.verbPrompt.toLowerCase().includes(q);
      const matchTense = ex.tenseNameVi.toLowerCase().includes(q) || ex.tenseNameEn.toLowerCase().includes(q);
      return matchSentence || matchTrans || matchExplain || matchVerb || matchTense;
    }
    return true;
  });

  return (
    <div className="w-full space-y-6">
      {/* Header kicker */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="text-xs font-semibold text-indigo-600 tracking-wider uppercase mb-1">
            Kho Dữ Liệu 100 Câu Phản Xạ Chuẩn
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Tra Cứu & Ôn Luyện 100 Bài Tập
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Toàn bộ 100 câu bài tập chia động từ có đầy đủ phiên âm quốc tế IPA, bản dịch nghĩa học thuật và phân tích ngữ pháp chuyên sâu.
          </p>
        </div>

        {/* Total count badge */}
        <div className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 shrink-0">
          Hiển thị: <strong className="text-slate-900 font-mono">{filteredExercises.length}</strong> / 100 câu
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm theo từ tiếng Anh, tiếng Việt, động từ hoặc thì ngữ pháp..."
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-600 focus:outline-hidden"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              categoryFilter === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            Tất cả 100 câu
          </button>
          <button
            onClick={() => setCategoryFilter('present')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              categoryFilter === 'present' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
            }`}
          >
            Hiện Tại (Câu 1-28)
          </button>
          <button
            onClick={() => setCategoryFilter('past')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              categoryFilter === 'past' ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
            }`}
          >
            Quá Khứ (Câu 29-56)
          </button>
          <button
            onClick={() => setCategoryFilter('future')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              categoryFilter === 'future' ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-800 hover:bg-indigo-100'
            }`}
          >
            Tương Lai (Câu 57-84)
          </button>
          <button
            onClick={() => setCategoryFilter('mixed')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              categoryFilter === 'mixed' ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-800 hover:bg-purple-100'
            }`}
          >
            Tổng Hợp Phân Biệt (Câu 85-100)
          </button>
          <button
            onClick={() => setCategoryFilter('bookmarked')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              categoryFilter === 'bookmarked' ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
            }`}
          >
            ⭐ Đã đánh dấu ({bookmarkedIds.length})
          </button>
          <button
            onClick={() => setCategoryFilter('mistakes')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              categoryFilter === 'mistakes' ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-800 hover:bg-rose-100'
            }`}
          >
            ⚠️ Câu làm sai ({mistakeIds.length})
          </button>
        </div>
      </div>

      {/* List of Exercises */}
      <div className="space-y-3">
        {filteredExercises.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-500">Không tìm thấy câu nào phù hợp với bộ lọc tìm kiếm.</p>
          </div>
        ) : (
          filteredExercises.map((ex) => {
            const isExpanded = expandedId === ex.id;
            const isBookmarked = bookmarkedIds.includes(ex.id);
            const isMistake = mistakeIds.includes(ex.id);

            return (
              <div
                key={ex.id}
                className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs transition-all hover:border-slate-300"
              >
                {/* Main Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-mono font-bold text-slate-700 shrink-0">
                      {ex.id}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                          {ex.tenseNameVi}
                        </span>
                        {isMistake && (
                          <span className="text-xs text-rose-700 bg-rose-50 px-2 py-0.5 rounded font-medium border border-rose-200">
                            Cần ôn lại
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-slate-900 leading-snug">
                        {ex.promptSentence}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {ex.translationVi}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <button
                      onClick={() => playAudio(ex.fullSentence)}
                      className="p-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors border border-slate-200"
                      title="Nghe câu hoàn chỉnh"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onToggleBookmark(ex.id)}
                      className={`p-2 rounded-lg border transition-colors ${
                        isBookmarked ? 'bg-amber-50 border-amber-300 text-amber-600' : 'text-slate-400 hover:text-slate-600 border-slate-200'
                      }`}
                      title="Đánh dấu câu khó"
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : ex.id)}
                      className="px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-1"
                    >
                      <span>{isExpanded ? 'Thu gọn' : 'Chi tiết'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-3 bg-slate-50/50 p-3.5 rounded-xl text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <span className="font-semibold text-slate-700">Đáp án chuẩn: </span>
                        <strong className="text-emerald-700 font-mono text-sm ml-1">{ex.targetAnswer}</strong>
                        <div className="text-slate-800 font-medium mt-1">
                          "{ex.fullSentence}"
                        </div>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700">Phiên âm quốc tế (IPA):</span>
                        <div className="text-slate-600 font-mono mt-1 text-wrap">
                          {ex.ipa}
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <span className="font-bold text-slate-800">Giải thích ngữ pháp: </span>
                      <span className="text-slate-700 leading-relaxed ml-1">{ex.explanationVi}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="text-slate-500">
                        Tín hiệu: <span className="font-medium text-indigo-700">{ex.signalWords.join(', ')}</span>
                      </div>
                      <button
                        onClick={() => onPracticeSpecificQuestion(ex)}
                        className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold transition-colors flex items-center gap-1 shadow-xs text-xs"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        Luyện phản xạ câu này
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
