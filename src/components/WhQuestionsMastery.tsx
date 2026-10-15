import React, { useState } from 'react';
import {
  HelpCircle,
  AlertTriangle,
  Volume2,
  CheckCircle2,
  XCircle,
  Search,
  BookOpen,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Layers,
  ChevronDown,
  ChevronUp,
  BrainCircuit,
  RotateCcw
} from 'lucide-react';
import { playAudio } from '../utils/audio';
import {
  WH_GENERAL_PRINCIPLES,
  WH_14_TENSES_DATA,
  WH_PRACTICE_QUESTIONS,
  WhTenseItem
} from '../data/whQuestionsData';

interface WhQuestionsMasteryProps {
  onOpenTrainer?: () => void;
}

export const WhQuestionsMastery: React.FC<WhQuestionsMasteryProps> = ({ onOpenTrainer }) => {
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'simple' | 'continuous' | 'perfect' | 'perfect_continuous' | 'future_in_past' | 'quiz'
  >('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTenseId, setExpandedTenseId] = useState<string | null>(null);

  // Quiz state
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<number, boolean>>({});

  const filteredTenses = WH_14_TENSES_DATA.filter(item => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesCategory;

    const matchesSearch =
      item.tenseNameVi.toLowerCase().includes(query) ||
      item.tenseNameEn.toLowerCase().includes(query) ||
      item.formulas.some(
        f =>
          f.formula.toLowerCase().includes(query) ||
          f.exampleEn.toLowerCase().includes(query) ||
          f.exampleVi.toLowerCase().includes(query)
      );

    return matchesCategory && matchesSearch;
  });

  const handleSelectQuizAnswer = (questionId: number, optionIdx: number) => {
    if (quizSubmitted[questionId]) return;
    setQuizAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
    setQuizSubmitted(prev => ({ ...prev, [questionId]: true }));
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted({});
    setCurrentQuizIdx(0);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-900 via-indigo-800 to-blue-900 text-white p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold backdrop-blur-xs border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>CHUẨN HÓA CẤU TRÚC NGỮ PHÁP 14 THÌ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            🎯 Bộ Công Thức Chuẩn Hóa: Câu Hỏi Wh- Questions
          </h2>
          <p className="text-indigo-100/90 text-sm sm:text-base leading-relaxed max-w-3xl">
            Nắm vững công thức đảo trợ động từ, cấu trúc với To be, và cách xử lý
            chuẩn xác <strong>bẫy kinh điển: Subject Questions vs Object Questions</strong> cho trọn bộ 14 thì trong tiếng Anh.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setSelectedCategory('quiz')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 text-indigo-950 font-bold text-xs sm:text-sm hover:bg-amber-300 transition-all shadow-md cursor-pointer"
            >
              <BrainCircuit className="w-4 h-4 text-indigo-950" />
              <span>Luyện 8 câu bẫy Subject Questions</span>
            </button>
            {onOpenTrainer && (
              <button
                onClick={onOpenTrainer}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 text-white hover:bg-white/25 transition-all text-xs sm:text-sm font-semibold border border-white/20 cursor-pointer"
              >
                <span>Vào phòng Luyện Phản Xạ 12 thì</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Ambient Decorative Shapes */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 📌 NGUYÊN TẮC CHUNG & BẪY KINH ĐIỂN CARD */}
      <div className="rounded-2xl border-2 border-indigo-200 bg-white p-5 sm:p-7 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              📌
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {WH_GENERAL_PRINCIPLES.title}
              </h3>
              <p className="text-xs text-slate-500">
                Quy luật vàng chi phối toàn bộ câu hỏi có từ để hỏi
              </p>
            </div>
          </div>
          <div className="px-3.5 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-mono font-bold">
            {WH_GENERAL_PRINCIPLES.generalFormula}
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          {WH_GENERAL_PRINCIPLES.explanationVi}
        </p>

        {/* CẢNH BÁO BẪY KINH ĐIỂN: SUBJECT QUESTION VS OBJECT QUESTION */}
        <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-5 space-y-4">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-rose-950 text-sm sm:text-base flex items-center gap-2">
                <span>LƯU Ý BẪY KINH ĐIỂN: SUBJECT QUESTIONS VS OBJECT QUESTIONS</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-200 text-rose-800 uppercase">
                  Rất hay nhầm lẫn
                </span>
              </div>
              <p className="text-xs sm:text-sm text-rose-900/90 mt-1 leading-relaxed">
                {WH_GENERAL_PRINCIPLES.subjectException.ruleVi}
              </p>
            </div>
          </div>

          {/* Công thức ngoại lệ */}
          <div className="p-3 bg-white rounded-lg border border-rose-200 font-mono text-xs sm:text-sm font-bold text-rose-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>Công thức hỏi chủ ngữ:</span>
            <span className="text-indigo-600">{WH_GENERAL_PRINCIPLES.subjectException.formula}</span>
          </div>

          {/* Bảng so sánh trực quan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {WH_GENERAL_PRINCIPLES.subjectException.comparison.map((item, idx) => {
              const isSubject = item.type.includes('Subject');
              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border ${
                    isSubject
                      ? 'bg-amber-50/80 border-amber-200 text-amber-950'
                      : 'bg-blue-50/80 border-blue-200 text-blue-950'
                  }`}
                >
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/5 font-bold">
                    <span className={isSubject ? 'text-amber-800' : 'text-blue-800'}>
                      {item.type}
                    </span>
                    <button
                      onClick={() => playAudio(item.enCorrect)}
                      className="p-1 hover:opacity-80 transition-opacity"
                      title="Nghe phát âm chuẩn"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-1.5 font-sans">
                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-emerald-700">Đúng:</strong> {item.enCorrect}
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-rose-700">Sai:</strong> <del className="text-slate-500">{item.enWrong}</del>
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-600 pt-1 italic">
                      ➔ Nghĩa: {item.vi}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Control Bar: Categories & Search */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 text-xs font-semibold no-scrollbar">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Tất Cả 14 Thì
            </button>
            <button
              onClick={() => setSelectedCategory('simple')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'simple'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              1. Nhóm Đơn (4)
            </button>
            <button
              onClick={() => setSelectedCategory('continuous')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'continuous'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              2. Nhóm Tiếp Diễn (3)
            </button>
            <button
              onClick={() => setSelectedCategory('perfect')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'perfect'
                  ? 'bg-cyan-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              3. Nhóm Hoàn Thành (3)
            </button>
            <button
              onClick={() => setSelectedCategory('perfect_continuous')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'perfect_continuous'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              4. Nhóm HT Tiếp Diễn (3)
            </button>
            <button
              onClick={() => setSelectedCategory('future_in_past')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'future_in_past'
                  ? 'bg-slate-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              5. Tương Lai Quá Khứ (2)
            </button>
            <button
              onClick={() => setSelectedCategory('quiz')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                selectedCategory === 'quiz'
                  ? 'bg-amber-500 text-white font-bold shadow-xs'
                  : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 font-bold'
              }`}
            >
              <BrainCircuit className="w-3.5 h-3.5 text-amber-700" />
              <span>Trắc Nghiệm Bẫy (8 câu)</span>
            </button>
          </div>

          {/* Search Box */}
          {selectedCategory !== 'quiz' && (
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Tìm thì hoặc từ để hỏi (what, who, where...)"
                className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}
        </div>
      </div>

      {/* QUIZ TAB CONTENT */}
      {selectedCategory === 'quiz' ? (
        <div className="space-y-6">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <BrainCircuit className="w-6 h-6 text-indigo-600" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Trắc Nghiệm Phản Xạ Bẫy Wh- Questions & Subject Questions
                  </h3>
                  <p className="text-xs text-slate-500">
                    Câu hỏi {currentQuizIdx + 1} / {WH_PRACTICE_QUESTIONS.length}
                  </p>
                </div>
              </div>
              <button
                onClick={handleResetQuiz}
                className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Làm lại từ đầu</span>
              </button>
            </div>

            {/* Current Question */}
            {(() => {
              const q = WH_PRACTICE_QUESTIONS[currentQuizIdx];
              const isAnswered = quizSubmitted[q.id];
              const selectedOpt = quizAnswers[q.id];
              const isCorrect = selectedOpt === q.correctIndex;

              return (
                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block mb-1">
                      {q.tenseName}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {q.questionText}
                    </h4>
                  </div>

                  {/* Options */}
                  <div className="space-y-2.5">
                    {q.options.map((opt, optIdx) => {
                      let btnStyle =
                        'border-slate-200 bg-white hover:border-indigo-300 text-slate-800 hover:bg-indigo-50/30';
                      if (isAnswered) {
                        if (optIdx === q.correctIndex) {
                          btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                        } else if (selectedOpt === optIdx) {
                          btnStyle = 'border-rose-400 bg-rose-50 text-rose-950 font-semibold';
                        } else {
                          btnStyle = 'border-slate-200 bg-white/60 text-slate-400 opacity-60';
                        }
                      }

                      return (
                        <div
                          key={optIdx}
                          role="button"
                          tabIndex={isAnswered ? -1 : 0}
                          onClick={() => !isAnswered && handleSelectQuizAnswer(q.id, optIdx)}
                          onKeyDown={e => {
                            if (!isAnswered && (e.key === 'Enter' || e.key === ' ')) {
                              e.preventDefault();
                              handleSelectQuizAnswer(q.id, optIdx);
                            }
                          }}
                          className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${
                            isAnswered ? 'cursor-default' : 'cursor-pointer'
                          } ${btnStyle}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="font-mono">{opt}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={e => {
                                e.stopPropagation();
                                playAudio(opt);
                              }}
                              className="p-1 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                              title="Nghe câu"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                            {isAnswered && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                            )}
                            {isAnswered && selectedOpt === optIdx && optIdx !== q.correctIndex && (
                              <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation card after answering */}
                  {isAnswered && (
                    <div
                      className={`p-4 rounded-xl border animate-in fade-in duration-200 ${
                        isCorrect
                          ? 'bg-emerald-50/90 border-emerald-200 text-emerald-950'
                          : 'bg-rose-50/90 border-rose-200 text-rose-950'
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm flex items-center gap-2 mb-1.5">
                        {isCorrect ? (
                          <span className="text-emerald-700 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" /> Chính xác tuyệt đối!
                          </span>
                        ) : (
                          <span className="text-rose-700 flex items-center gap-1.5">
                            <AlertTriangle className="w-4 h-4" /> Bạn đã chọn chưa đúng — Hãy xem kỹ lời giải:
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        {q.explanationVi}
                      </p>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button
                      disabled={currentQuizIdx === 0}
                      onClick={() => setCurrentQuizIdx(prev => prev - 1)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                    >
                      Câu trước
                    </button>
                    <div className="flex gap-1.5">
                      {WH_PRACTICE_QUESTIONS.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentQuizIdx(i)}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            currentQuizIdx === i
                              ? 'bg-indigo-600 w-6'
                              : quizSubmitted[WH_PRACTICE_QUESTIONS[i].id]
                              ? 'bg-emerald-400'
                              : 'bg-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      disabled={currentQuizIdx === WH_PRACTICE_QUESTIONS.length - 1}
                      onClick={() => setCurrentQuizIdx(prev => prev + 1)}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                    >
                      Câu tiếp theo ➔
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      ) : (
        /* LIST OF 14 TENSES WITH STANDARDIZED FORMULAS */
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-5">
            {filteredTenses.map(tense => {
              const isExpanded = expandedTenseId === tense.id;

              return (
                <div
                  key={tense.id}
                  className={`rounded-2xl border transition-all duration-200 bg-white shadow-xs overflow-hidden ${
                    isExpanded ? 'border-indigo-400 ring-2 ring-indigo-100' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Card Header Bar */}
                  <div
                    onClick={() => setExpandedTenseId(isExpanded ? null : tense.id)}
                    className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-sm shrink-0 border border-indigo-100">
                        Wh-
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                            {tense.tenseNameVi}
                          </h4>
                          <span className="text-xs text-slate-500 font-medium">
                            ({tense.tenseNameEn})
                          </span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-md font-semibold ${tense.colorTheme.badge}`}>
                            {tense.categoryLabelVi}
                          </span>
                        </div>
                        <div className="font-mono text-xs text-indigo-700 font-semibold mt-1">
                          {tense.formulas[0].formula}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline-block text-xs font-semibold text-slate-400">
                        {isExpanded ? 'Thu gọn' : 'Xem chi tiết & ví dụ'}
                      </span>
                      <span className="p-1 text-slate-400 group-hover:text-slate-600 transition-colors flex items-center justify-center">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-indigo-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Detailed Breakdown */}
                  {isExpanded && (
                    <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50/40 space-y-5 animate-in fade-in duration-150">
                      {/* Formulas List (e.g. Regular Verbs vs To be) */}
                      <div className="space-y-4">
                        {tense.formulas.map((fItem, fIdx) => (
                          <div
                            key={fIdx}
                            className="p-4 rounded-xl bg-white border border-slate-200 space-y-2.5 shadow-2xs"
                          >
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <span className="font-bold text-xs sm:text-sm text-slate-800 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-indigo-600" />
                                {fItem.label}
                              </span>
                              <div className="font-mono text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                                {fItem.formula}
                              </div>
                            </div>

                            {/* Examples */}
                            <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800 flex items-start justify-between gap-3">
                              <div className="space-y-1">
                                <div className="font-semibold text-indigo-950 flex items-center gap-1.5">
                                  <span>Ví dụ EN:</span>
                                  <span className="font-normal font-mono">{fItem.exampleEn}</span>
                                </div>
                                <div className="text-slate-600 italic text-[11px] sm:text-xs">
                                  ➔ Dịch VI: {fItem.exampleVi}
                                </div>
                              </div>
                              <button
                                onClick={() => playAudio(fItem.exampleEn.split('/')[0].trim())}
                                className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors shrink-0 cursor-pointer"
                                title="Phát âm câu ví dụ đầu tiên"
                              >
                                <Volume2 className="w-4 h-4" />
                              </button>
                            </div>

                            {fItem.notes && (
                              <div className="text-[11px] text-slate-500 leading-relaxed">
                                💡 <strong>Ghi nhớ:</strong> {fItem.notes}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Subject Question Alert Box */}
                      {tense.subjectQuestion && (
                        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 space-y-2.5">
                          <div className="flex items-center justify-between pb-2 border-b border-amber-200/60">
                            <div className="font-bold text-xs sm:text-sm flex items-center gap-1.5 text-amber-900">
                              <AlertTriangle className="w-4 h-4 text-amber-600" />
                              <span>Quy tắc Subject Question (Hỏi cho chủ ngữ Who / What):</span>
                            </div>
                            <span className="font-mono text-xs font-bold text-amber-800 bg-white px-2 py-0.5 rounded border border-amber-200">
                              {tense.subjectQuestion.formula}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                            <div className="p-2.5 rounded-lg bg-white/80 border border-amber-100 flex items-start justify-between gap-2">
                              <div>
                                <span className="font-bold text-emerald-700 block">✅ Câu hỏi đúng:</span>
                                <span className="font-mono text-slate-900">{tense.subjectQuestion.exampleEn}</span>
                                <div className="text-[11px] text-slate-500 italic mt-0.5">
                                  {tense.subjectQuestion.exampleVi}
                                </div>
                              </div>
                              <button
                                onClick={() => playAudio(tense.subjectQuestion?.exampleEn || '')}
                                className="p-1 text-slate-400 hover:text-slate-700 transition-colors shrink-0"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <div className="p-2.5 rounded-lg bg-white/80 border border-amber-100">
                              <span className="font-bold text-rose-700 block">❌ Bẫy sai thường gặp:</span>
                              <span className="font-mono text-rose-800 line-through">
                                {tense.subjectQuestion.wrongExampleEn}
                              </span>
                              <div className="text-[11px] text-amber-800 mt-1">
                                {tense.subjectQuestion.ruleVi}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
