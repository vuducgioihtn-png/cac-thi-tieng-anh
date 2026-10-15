import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Exercise, TenseId, UserStats } from '../types';
import { EXERCISES } from '../data/exercises';
import { TENSES_METADATA } from '../data/tenses';
import { playAudio } from '../utils/audio';
import { saveUserStats } from '../utils/storage';
import { TenseIllustration } from './TenseIllustrations';
import confetti from 'canvas-confetti';
import {
  Volume2,
  Clock,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Bookmark,
  ArrowRight,
  Flame,
  VolumeX,
  Keyboard,
  Sparkles,
  HelpCircle
} from 'lucide-react';

interface ReflexTrainerProps {
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  initialTenseFilter?: TenseId | 'all' | 'mistakes';
}

export const ReflexTrainer: React.FC<ReflexTrainerProps> = ({
  stats,
  onUpdateStats,
  initialTenseFilter = 'all'
}) => {
  // Filter settings
  const [tenseFilter, setTenseFilter] = useState<TenseId | 'all' | 'mistakes'>(initialTenseFilter);
  const [practiceMode, setPracticeMode] = useState<'choice' | 'speed' | 'type'>('speed');
  const [timeLimit, setTimeLimit] = useState<number>(10); // 5s, 10s, 15s or 0 for unlimited
  const [autoSpeak, setAutoSpeak] = useState<boolean>(true);

  // Sync initialTenseFilter when prop changes from parent
  useEffect(() => {
    if (initialTenseFilter) {
      setTenseFilter(initialTenseFilter);
      setCurrentIndex(0);
      resetQuestionState();
    }
  }, [initialTenseFilter]);

  // Filtered pool of exercises (Memoized to prevent cascading renders)
  const activePool = useMemo((): Exercise[] => {
    if (tenseFilter === 'mistakes') {
      const mistakeList = EXERCISES.filter(ex => stats.mistakeIds.includes(ex.id));
      return mistakeList.length > 0 ? mistakeList : EXERCISES;
    }
    if (tenseFilter === 'all') return EXERCISES;
    return EXERCISES.filter(ex => ex.tenseId === tenseFilter);
  }, [tenseFilter, stats.mistakeIds]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [typedInput, setTypedInput] = useState<string>('');
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(timeLimit);
  const [combo, setCombo] = useState<number>(0);
  const [showHint, setShowHint] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const resetQuestionState = () => {
    setSelectedOption(null);
    setTypedInput('');
    setIsAnswered(false);
    setIsCorrect(false);
    setShowHint(false);
    setTimeLeft(timeLimit);
  };

  // Safe index in case pool shrank
  const safeIndex = currentIndex < activePool.length ? currentIndex : 0;
  const currentExercise = activePool[safeIndex] || EXERCISES[0];
  const isBookmarked = stats.bookmarkedIds.includes(currentExercise.id);

  // Timer countdown for Speed Mode
  useEffect(() => {
    if (practiceMode !== 'speed' || timeLimit === 0 || isAnswered) {
      return;
    }

    setTimeLeft(timeLimit);
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [safeIndex, practiceMode, timeLimit, isAnswered]);

  // Handle timeout cleanly in a dedicated effect, never inside setState updater
  useEffect(() => {
    if (practiceMode === 'speed' && timeLimit > 0 && !isAnswered && timeLeft === 0) {
      setIsAnswered(true);
      setIsCorrect(false);
      setCombo(0);
      recordResult(false);
    }
  }, [timeLeft, practiceMode, timeLimit, isAnswered]);

  // Focus input on type mode
  useEffect(() => {
    if (practiceMode === 'type' && !isAnswered) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [practiceMode, safeIndex, isAnswered]);

  // Check answer
  const handleCheckAnswer = (answer: string) => {
    if (isAnswered) return;

    setSelectedOption(answer);
    setIsAnswered(true);

    const cleanUser = answer.trim().toLowerCase();
    const cleanTarget = currentExercise.targetAnswer.trim().toLowerCase();
    const accepted = currentExercise.acceptedAnswers.map(a => a.trim().toLowerCase());

    const correct = cleanUser === cleanTarget || accepted.includes(cleanUser);
    setIsCorrect(correct);

    if (correct) {
      const newCombo = combo + 1;
      setCombo(newCombo);
      if (newCombo % 5 === 0 || newCombo === 10) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      }
    } else {
      setCombo(0);
    }

    recordResult(correct);

    // Auto speak if enabled
    if (autoSpeak) {
      playAudio(currentExercise.fullSentence);
    }
  };

  const recordResult = (correct: boolean) => {
    const updatedStats = { ...stats };
    updatedStats.totalAnswered += 1;
    if (correct) {
      updatedStats.totalCorrect += 1;
      // remove from mistakes if answered correctly
      updatedStats.mistakeIds = updatedStats.mistakeIds.filter(id => id !== currentExercise.id);
    } else {
      // Add to mistakes
      if (!updatedStats.mistakeIds.includes(currentExercise.id)) {
        updatedStats.mistakeIds.push(currentExercise.id);
      }
    }

    // Tense mastery tracking
    const tenseKey = currentExercise.tenseId;
    if (!updatedStats.masteredTenses[tenseKey]) {
      updatedStats.masteredTenses[tenseKey] = { correct: 0, total: 0 };
    }
    updatedStats.masteredTenses[tenseKey].total += 1;
    if (correct) {
      updatedStats.masteredTenses[tenseKey].correct += 1;
    }

    onUpdateStats(updatedStats);
    saveUserStats(updatedStats);
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < activePool.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Loop or restart
      setCurrentIndex(0);
    }
    resetQuestionState();
  };

  const toggleBookmark = () => {
    const updatedStats = { ...stats };
    if (isBookmarked) {
      updatedStats.bookmarkedIds = updatedStats.bookmarkedIds.filter(id => id !== currentExercise.id);
    } else {
      updatedStats.bookmarkedIds.push(currentExercise.id);
    }
    onUpdateStats(updatedStats);
    saveUserStats(updatedStats);
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnswered) {
        if (e.code === 'Space' || e.key === 'Enter') {
          e.preventDefault();
          handleNextQuestion();
        }
        return;
      }

      if (practiceMode !== 'type') {
        if (['1', '2', '3', '4'].includes(e.key)) {
          const optIdx = parseInt(e.key, 10) - 1;
          if (currentExercise.options[optIdx]) {
            handleCheckAnswer(currentExercise.options[optIdx]);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswered, currentExercise, practiceMode]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Control Bar: Mode, Filter, Settings */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Tense Filter Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Chủ đề:</span>
            <select
              value={tenseFilter}
              onChange={(e) => setTenseFilter(e.target.value as any)}
              className="text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">Toàn bộ 100 Câu (Tất cả 12 thì)</option>
              {stats.mistakeIds.length > 0 && (
                <option value="mistakes">⚠️ Sổ tay lỗi sai ({stats.mistakeIds.length} câu)</option>
              )}
              <optgroup label="Thì Hiện Tại">
                <option value="present_simple">Hiện Tại Đơn (Present Simple)</option>
                <option value="present_continuous">Hiện Tại Tiếp Diễn (Present Continuous)</option>
                <option value="present_perfect">Hiện Tại Hoàn Thành (Present Perfect)</option>
                <option value="present_perfect_continuous">HT Hoàn Thành Tiếp Diễn</option>
              </optgroup>
              <optgroup label="Thì Quá Khứ">
                <option value="past_simple">Quá Khứ Đơn (Past Simple)</option>
                <option value="past_continuous">Quá Khứ Tiếp Diễn (Past Continuous)</option>
                <option value="past_perfect">Quá Khứ Hoàn Thành (Past Perfect)</option>
                <option value="past_perfect_continuous">QK Hoàn Thành Tiếp Diễn</option>
              </optgroup>
              <optgroup label="Thì Tương Lai">
                <option value="future_simple">Tương Lai Đơn (Future Simple)</option>
                <option value="near_future">Tương Lai Gần (Be Going To)</option>
                <option value="future_continuous">Tương Lai Tiếp Diễn</option>
                <option value="future_perfect">Tương Lai Hoàn Thành</option>
                <option value="future_perfect_continuous">TL Hoàn Thành Tiếp Diễn</option>
              </optgroup>
              <optgroup label="Bài tập tổng hợp">
                <option value="mixed">Phản Xạ Tổng Hợp (Mixed Drills 85-100)</option>
              </optgroup>
            </select>
          </div>

          {/* Practice Mode Tabs */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => { setPracticeMode('speed'); resetQuestionState(); }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                practiceMode === 'speed' ? 'bg-white text-indigo-700 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Phản Xạ Tốc Độ</span>
            </button>
            <button
              onClick={() => { setPracticeMode('choice'); resetQuestionState(); }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                practiceMode === 'choice' ? 'bg-white text-indigo-700 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Trắc Nghiệm</span>
            </button>
            <button
              onClick={() => { setPracticeMode('type'); resetQuestionState(); }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                practiceMode === 'type' ? 'bg-white text-indigo-700 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Keyboard className="w-3.5 h-3.5" />
              <span>Gõ Trực Tiếp</span>
            </button>
          </div>

          {/* Quick Options: Audio toggle & Timer option */}
          <div className="flex items-center gap-3">
            {practiceMode === 'speed' && (
              <div className="flex items-center gap-1 text-xs">
                <span className="text-slate-400">Giới hạn:</span>
                <select
                  value={timeLimit}
                  onChange={(e) => setTimeLimit(Number(e.target.value))}
                  className="bg-slate-50 border border-slate-200 rounded px-1.5 py-1 text-slate-700 font-medium"
                >
                  <option value={5}>5 giây</option>
                  <option value={10}>10 giây</option>
                  <option value={15}>15 giây</option>
                  <option value={0}>Không đếm</option>
                </select>
              </div>
            )}

            <button
              onClick={() => setAutoSpeak(!autoSpeak)}
              title={autoSpeak ? 'Tắt tự động đọc âm' : 'Bật tự động đọc âm'}
              className={`p-2 rounded-lg border transition-colors ${
                autoSpeak ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-slate-50 border-slate-200 text-slate-400'
              }`}
            >
              {autoSpeak ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Training Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs relative overflow-hidden">
        {/* Top Progress & Stats Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
              Câu {currentExercise.id} / 100
            </span>
            <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
              {currentExercise.tenseNameVi}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Combo Badge */}
            {combo > 1 && (
              <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 animate-pulse">
                <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>Combo {combo}x</span>
              </div>
            )}

            {/* Bookmark button */}
            <button
              onClick={toggleBookmark}
              className={`p-1.5 rounded-lg border transition-colors ${
                isBookmarked ? 'bg-amber-50 border-amber-300 text-amber-600' : 'text-slate-400 hover:text-slate-600 border-slate-200'
              }`}
              title={isBookmarked ? 'Bỏ lưu câu khó' : 'Lưu vào danh sách câu khó'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Speed Timer Bar */}
        {practiceMode === 'speed' && timeLimit > 0 && !isAnswered && (
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-3">
            <div
              className={`h-full transition-all duration-1000 ${
                timeLeft <= 3 ? 'bg-rose-500' : timeLeft <= 5 ? 'bg-amber-500' : 'bg-indigo-600'
              }`}
              style={{ width: `${(timeLeft / timeLimit) * 100}%` }}
            />
          </div>
        )}

        {/* Question Area */}
        <div className="my-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4">
            <span>Động từ cần chia:</span>
            <strong className="text-indigo-600 font-mono text-sm">({currentExercise.verbPrompt})</strong>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-relaxed max-w-2xl mx-auto font-sans">
            {currentExercise.promptSentence.split('__________').map((part, i, arr) => (
              <React.Fragment key={i}>
                <span>{part}</span>
                {i < arr.length - 1 && (
                  <span
                    className={`inline-block mx-1.5 px-4 py-0.5 rounded-lg border-2 font-mono ${
                      isAnswered
                        ? isCorrect
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                          : 'bg-rose-50 border-rose-500 text-rose-800'
                        : 'bg-indigo-50/70 border-dashed border-indigo-400 text-indigo-700'
                    }`}
                  >
                    {isAnswered ? currentExercise.targetAnswer : '______'}
                  </span>
                )}
              </React.Fragment>
            ))}
          </h3>

          {/* Hint button */}
          {!isAnswered && (
            <div className="mt-4">
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-xs text-slate-400 hover:text-indigo-600 inline-flex items-center gap-1 transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{showHint ? 'Ẩn gợi ý' : 'Gợi ý từ nhận biết'}</span>
              </button>
              {showHint && (
                <div className="mt-2 text-xs text-indigo-700 bg-indigo-50/80 max-w-md mx-auto p-2 rounded-lg border border-indigo-100">
                  Dấu hiệu: <strong>{currentExercise.signalWords.join(', ')}</strong>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Answer Input Controls */}
        <div className="mt-6">
          {practiceMode === 'type' ? (
            /* Type-In Mode */
            <div className="max-w-md mx-auto">
              {!isAnswered ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (typedInput.trim()) handleCheckAnswer(typedInput);
                  }}
                  className="flex gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={typedInput}
                    onChange={(e) => setTypedInput(e.target.value)}
                    placeholder="Gõ dạng đúng của động từ..."
                    className="flex-1 px-4 py-3 text-sm font-mono border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:outline-hidden"
                  />
                  <button
                    type="submit"
                    disabled={!typedInput.trim()}
                    className="px-5 py-3 bg-indigo-600 text-white font-semibold text-xs rounded-xl hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                  >
                    Kiểm tra
                  </button>
                </form>
              ) : null}
            </div>
          ) : (
            /* Multiple Choice Options (4 Choices) */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {currentExercise.options.map((option, idx) => {
                const isThisSelected = selectedOption === option;
                const isTarget = option === currentExercise.targetAnswer || currentExercise.acceptedAnswers.includes(option);

                let btnStyle = 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 text-slate-800 bg-white';
                if (isAnswered) {
                  if (isTarget) {
                    btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-200';
                  } else if (isThisSelected && !isCorrect) {
                    btnStyle = 'border-rose-400 bg-rose-50 text-rose-950 line-through';
                  } else {
                    btnStyle = 'opacity-40 border-slate-200 bg-slate-50 text-slate-500';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleCheckAnswer(option)}
                    className={`p-4 rounded-xl border-2 text-left transition-all relative flex items-center justify-between group ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md bg-slate-100 group-hover:bg-indigo-100 flex items-center justify-center text-xs font-mono font-bold text-slate-600 group-hover:text-indigo-800">
                        {idx + 1}
                      </span>
                      <span className="font-semibold text-sm font-mono">{option}</span>
                    </div>

                    {isAnswered && isTarget && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isAnswered && isThisSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Detailed Feedback & Explanation Section (Visible after answering) */}
        {isAnswered && (
          <div className="mt-8 pt-6 border-t border-slate-100 space-y-4 animate-in fade-in duration-200">
            {/* Result banner */}
            <div
              className={`p-4 rounded-xl border flex items-start justify-between gap-3 ${
                isCorrect ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950' : 'bg-rose-50/80 border-rose-200 text-rose-950'
              }`}
            >
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="text-sm font-bold">
                    {isCorrect ? 'Chính xác! Phản xạ rất chuẩn.' : `Chưa đúng! Đáp án chính xác là: "${currentExercise.targetAnswer}"`}
                  </div>
                  <div className="text-xs text-slate-600 mt-1 font-sans">
                    {currentExercise.explanationVi}
                  </div>
                </div>
              </div>

              <button
                onClick={() => playAudio(currentExercise.fullSentence)}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-indigo-600 text-xs font-medium flex items-center gap-1.5 shrink-0 shadow-xs"
              >
                <Volume2 className="w-4 h-4 text-indigo-600" />
                <span>Nghe lại</span>
              </button>
            </div>

            {/* Pronunciation IPA & Vietnamese Translation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-semibold text-slate-500 uppercase">Phiên âm chuẩn quốc tế (IPA):</span>
                <div className="text-xs font-mono font-medium text-slate-800 mt-1 text-wrap">
                  {currentExercise.ipa}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-semibold text-slate-500 uppercase">Dịch nghĩa tiếng Việt:</span>
                <div className="text-xs font-medium text-slate-800 mt-1">
                  {currentExercise.translationVi}
                </div>
              </div>
            </div>

            {/* Visual Timeline Miniature */}
            <div className="mt-2">
              <div className="text-xs font-semibold text-slate-500 mb-1">Mô hình thời gian của câu này:</div>
              <TenseIllustration tenseId={currentExercise.tenseId} size="sm" />
            </div>

            {/* Next Question CTA */}
            <div className="flex items-center justify-between pt-2">
              <div className="text-xs text-slate-400 hidden sm:block">
                Nhấn <kbd className="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200 font-mono text-[10px]">Space</kbd> hoặc <kbd className="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200 font-mono text-[10px]">Enter</kbd> để tiếp tục
              </div>
              <button
                onClick={handleNextQuestion}
                className="ml-auto px-6 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors flex items-center gap-2 shadow-xs"
              >
                <span>Câu kế tiếp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Progress mini indicator */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-2">
        <div>
          Tiến độ chủ đề: {currentIndex + 1} / {activePool.length} câu
        </div>
        <div>
          Tổng điểm toàn app: {stats.totalCorrect} / {stats.totalAnswered} đúng ({stats.totalAnswered > 0 ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) : 0}%)
        </div>
      </div>
    </div>
  );
};
