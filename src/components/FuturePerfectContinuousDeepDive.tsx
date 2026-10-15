import React, { useState } from 'react';
import { BookOpen, Sparkles, Volume2, AlertTriangle, Play, ChevronDown, ChevronUp, Check, X, Clock, HelpCircle, TrendingUp, ArrowRight, ShieldAlert, Layers } from 'lucide-react';
import { playAudio } from '../utils/audio';

interface FuturePerfectContinuousDeepDiveProps {
  onStartPractice?: () => void;
}

export const FuturePerfectContinuousDeepDive: React.FC<FuturePerfectContinuousDeepDiveProps> = ({ onStartPractice }) => {
  const [activeTab, setActiveTab] = useState<'formula' | 'usage' | 'signals'>('formula');
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [playingExample, setPlayingExample] = useState<string | null>(null);

  const handlePlayAudio = (text: string) => {
    setPlayingExample(text);
    playAudio(text);
    setTimeout(() => {
      setPlayingExample(null);
    }, 1200);
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="mt-8 bg-white rounded-3xl border border-pink-200/80 shadow-xl overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-pink-700 via-rose-700 to-purple-800 p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 w-44 h-44 bg-pink-400/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-1/4 -top-10 w-36 h-36 bg-rose-300/10 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/30 border border-pink-300/30 text-pink-200 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-pink-300" />
              <span>Chuyên Đề Masterclass Nâng Cao</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              Future Perfect Continuous Masterclass
            </h3>
            <p className="text-pink-100 text-sm max-w-2xl leading-relaxed">
              Làm chủ thì <strong>Tương Lai Hoàn Thành Tiếp Diễn</strong>: Công thức phức hợp <strong>will have been + V-ing</strong>, nhấn mạnh tính liên tục không ngắt quãng đến mốc tương lai, và mẹo phân biệt bộ đôi <em>By ... for ...</em> trong các kỳ thi HSG & THPT Quốc gia.
            </p>
          </div>

          {onStartPractice && (
            <button
              onClick={onStartPractice}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-rose-950 hover:bg-rose-50 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play className="w-4 h-4 fill-rose-950" />
              <span>Luyện 8 câu phản xạ TL HT Tiếp Diễn</span>
            </button>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 mt-8 pt-4 border-t border-pink-500/30 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setActiveTab('formula')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'formula'
                ? 'bg-white text-rose-950 shadow-md ring-2 ring-pink-300'
                : 'text-pink-100 hover:bg-pink-600/40'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Tab 1: Công Thức Chi Tiết 3 Dạng</span>
          </button>

          <button
            onClick={() => setActiveTab('usage')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'usage'
                ? 'bg-white text-rose-950 shadow-md ring-2 ring-pink-300'
                : 'text-pink-100 hover:bg-pink-600/40'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Tab 2: Cách Dùng & Chuyên Đề Thi</span>
          </button>

          <button
            onClick={() => setActiveTab('signals')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'signals'
                ? 'bg-white text-rose-950 shadow-md ring-2 ring-pink-300'
                : 'text-pink-100 hover:bg-pink-600/40'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Tab 3: Từ Nhận Biết & Dấu Hiệu Đặc Biệt</span>
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="p-6 sm:p-8 bg-slate-50/50">
        {/* ========================================================
            TAB 1: CÔNG THỨC CHI TIẾT 3 DẠNG
           ======================================================== */}
        {activeTab === 'formula' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Giới thiệu thành phần cốt lõi */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-5 border border-pink-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md bg-rose-600 text-white text-xs font-bold uppercase tracking-wider">
                  Cốt lõi cấu trúc phức hợp
                </span>
                <span className="text-xs text-rose-900 font-semibold">Tất cả các chủ ngữ đều dùng chung "will have been"!</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-slate-800 mt-3 bg-white p-3.5 rounded-xl border border-pink-200 shadow-2xs">
                <span className="text-rose-700 bg-rose-100 px-2.5 py-1 rounded-lg">Trợ động từ TL (will)</span>
                <span className="text-slate-400">+</span>
                <span className="text-pink-700 bg-pink-100 px-2.5 py-1 rounded-lg">Nguyên thể (have)</span>
                <span className="text-slate-400">+</span>
                <span className="text-purple-700 bg-purple-100 px-2.5 py-1 rounded-lg">Phân từ to-be (been)</span>
                <span className="text-slate-400">+</span>
                <span className="text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-lg">Động từ đuôi (V-ing)</span>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Áp dụng chung cho <strong>tất cả các chủ ngữ</strong>: <em>I / You / We / They / He / She / It / Danh từ số ít / Danh từ số nhiều</em> $\rightarrow$ Tất cả đều dùng <strong>will have been + V-ing</strong>.
              </p>
            </div>

            {/* 3 Dạng câu: Khẳng định, Phủ định, Nghi vấn */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Khẳng định */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-pink-300 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Khẳng định (+)
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl font-mono text-sm font-bold text-slate-900 border border-slate-200 mb-4">
                  S + will have been + V-ing
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-pink-50/60 rounded-xl border border-pink-100">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        By next month, I <span className="text-rose-700 font-bold underline">will have been working</span> here for 5 years.
                      </p>
                      <button
                        onClick={() => handlePlayAudio("By next month, I will have been working here for 5 years.")}
                        className="text-rose-600 hover:text-rose-800 p-1 rounded-lg hover:bg-pink-100 transition-colors shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Tính tới tháng sau, tôi sẽ làm việc ở đây liên tục được tròn 5 năm.</p>
                  </div>

                  <div className="p-3 bg-pink-50/60 rounded-xl border border-pink-100">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        They <span className="text-rose-700 font-bold underline">will have been waiting</span> for two hours by 5 PM.
                      </p>
                      <button
                        onClick={() => handlePlayAudio("They will have been waiting for two hours by 5 PM.")}
                        className="text-rose-600 hover:text-rose-800 p-1 rounded-lg hover:bg-pink-100 transition-colors shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Họ sẽ chờ đợi suốt 2 tiếng đồng hồ tính cho đến 5 giờ chiều.</p>
                  </div>
                </div>
              </div>

              {/* Phủ định */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-pink-300 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold flex items-center gap-1.5">
                    <X className="w-3.5 h-3.5" /> Phủ định (-)
                  </span>
                  <span className="text-2xs text-slate-500 font-mono">will not = won't</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl font-mono text-sm font-bold text-slate-900 border border-slate-200 mb-4">
                  S + will not (won't) + have been + V-ing
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-pink-50/60 rounded-xl border border-pink-100">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        By next year, she <span className="text-rose-700 font-bold underline">won't have been living</span> in this city for long.
                      </p>
                      <button
                        onClick={() => handlePlayAudio("By next year, she won't have been living in this city for long.")}
                        className="text-rose-600 hover:text-rose-800 p-1 rounded-lg hover:bg-pink-100 transition-colors shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Tính tới năm sau, cô ấy sẽ chưa sống ở thành phố này được bao lâu.</p>
                  </div>

                  <div className="p-3 bg-pink-50/60 rounded-xl border border-pink-100">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        We <span className="text-rose-700 font-bold underline">won't have been studying</span> for three hours by then.
                      </p>
                      <button
                        onClick={() => handlePlayAudio("We won't have been studying for three hours by then.")}
                        className="text-rose-600 hover:text-rose-800 p-1 rounded-lg hover:bg-pink-100 transition-colors shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Trước lúc đó chúng tôi sẽ chưa học liên tục tới 3 tiếng đâu.</p>
                  </div>
                </div>
              </div>

              {/* Nghi vấn */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-pink-300 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" /> Nghi vấn (?)
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl font-mono text-sm font-bold text-slate-900 border border-slate-200 mb-4">
                  Will + S + have been + V-ing?
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-pink-50/60 rounded-xl border border-pink-100">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        <span className="text-amber-800 font-bold">Will you have been working</span> for 10 hours by the time I get home?
                      </p>
                      <button
                        onClick={() => handlePlayAudio("Will you have been working for 10 hours by the time I get home?")}
                        className="text-rose-600 hover:text-rose-800 p-1 rounded-lg hover:bg-pink-100 transition-colors shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      $\rightarrow$ <strong>Yes, I will</strong> / <strong>No, I won't</strong>.
                    </p>
                  </div>

                  <div className="p-3 bg-pink-50/60 rounded-xl border border-pink-100">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        How long <span className="text-amber-800 font-bold">will they have been driving</span> by midnight?
                      </p>
                      <button
                        onClick={() => handlePlayAudio("How long will they have been driving by midnight?")}
                        className="text-rose-600 hover:text-rose-800 p-1 rounded-lg hover:bg-pink-100 transition-colors shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Tính tới nửa đêm họ sẽ lái xe liên tục được bao lâu?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alert Boxes - Lỗi sai thường gặp phần Cấu trúc */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>⚠️ Lỗi Sai Thường Gặp (Common Mistakes) - Phần Cấu Trúc</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Lỗi 1: Thiếu từ "been" hoặc thiếu "have" */}
                <div className="bg-red-50/80 rounded-2xl p-4 border border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert className="w-4 h-4 text-red-600" />
                    <span className="text-xs font-bold text-red-900 uppercase">Cạm bẫy 1: Thiếu "been" hoặc thiếu "have"</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    Vì cấu trúc dài gồm 4 thành tố, học sinh thường viết rơi rớt thành <em>"will have V-ing"</em> hoặc <em>"will been V-ing"</em>.
                  </p>
                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 rounded-lg bg-white border border-red-200 text-red-700 flex items-center gap-2">
                      <X className="w-3.5 h-3.5 text-red-600 shrink-0" />
                      <span>Sai: <em>"She will <strong>have working</strong>"</em> hoặc <em>"will <strong>been working</strong>"</em></span>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Sửa đúng: <em>"She <strong>will have been working</strong>..."</em></span>
                    </div>
                  </div>
                  <p className="text-2xs text-red-800 mt-2 font-medium">
                    👉 Bắt buộc phải có trọn bộ: <strong>will + have + been + V-ing</strong>.
                  </p>
                </div>

                {/* Lỗi 2: Sai dạng từ "have" */}
                <div className="bg-amber-50/80 rounded-2xl p-4 border border-amber-200">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert className="w-4 h-4 text-amber-700" />
                    <span className="text-xs font-bold text-amber-900 uppercase">Cạm bẫy 2: Đổi "have" thành "has"</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    Thấy chủ ngữ số ít (He, She, It) liền tự tiện đổi <em>have</em> thành <em>has</em> (nhầm lẫn với hiện tại hoàn thành).
                  </p>
                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 rounded-lg bg-white border border-red-200 text-red-700 flex items-center gap-2">
                      <X className="w-3.5 h-3.5 text-red-600 shrink-0" />
                      <span>Sai: <em>"He <strong>will has been working</strong> for 5 years."</em></span>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Sửa đúng: <em>"He <strong>will have been working</strong> for 5 years."</em></span>
                    </div>
                  </div>
                  <p className="text-2xs text-amber-800 mt-2 font-medium">
                    👉 Sau trợ động từ khuyết thiếu <strong>will</strong>, từ <strong>have luôn ở dạng nguyên thể</strong>!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 2: CÁC CÁCH DÙNG MỞ RỘNG (Khối nâng cao - Chuyên đề thi)
           ======================================================== */}
        {activeTab === 'usage' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-4 bg-pink-100/70 rounded-2xl border border-pink-200 text-xs text-rose-950 flex items-center justify-between">
              <span>
                💡 Chuyên đề đỉnh cao cho kỳ thi Học sinh giỏi và câu phân loại tối đa trong đề thi THPT Quốc gia / IELTS.
              </span>
              <span className="font-bold text-rose-900 hidden sm:inline">2 Cách Dùng Cốt Lõi</span>
            </div>

            {/* Accordion 2 Cách Dùng */}
            <div className="space-y-3">
              {/* Mục 1: Hành động diễn ra liên tục kéo dài cho đến một mốc thời gian trong tương lai */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
                <button
                  onClick={() => toggleAccordion(0)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      1
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        Hành động diễn ra liên tục kéo dài cho đến một mốc thời gian trong tương lai
                      </h4>
                      <p className="text-xs text-slate-500">
                        Nhấn mạnh tính bền bỉ, không gián đoạn (thường đi kèm "for + khoảng thời gian")
                      </p>
                    </div>
                  </div>
                  {openAccordion === 0 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>

                {openAccordion === 0 && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 space-y-3">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Ý nghĩa:</strong> Nhấn mạnh tính liên tục, không ngắt quãng của một hành động đã và đang diễn ra trong một khoảng thời gian dài và tiếp tục kéo dài chạm tới một thời điểm xác định ở tương lai.
                    </p>
                    <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 font-mono text-xs sm:text-sm text-rose-900 font-bold">
                      By + mốc tương lai + for + [khoảng thời gian], S + will have been + V-ing
                    </div>
                    <div className="p-4 rounded-xl bg-pink-50/70 border border-pink-200">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-sm font-bold text-rose-950">
                          "By next year, we will have been building this house for two years."
                        </span>
                        <button
                          onClick={() => handlePlayAudio("By next year, we will have been building this house for two years.")}
                          className="p-1.5 bg-white text-rose-700 rounded-lg hover:bg-pink-100 shadow-2xs"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-rose-800 mt-1">
                        $\rightarrow$ Tính tới năm sau, chúng tôi sẽ thi công xây dựng ngôi nhà này liên tục được tròn 2 năm (nhấn mạnh sự nỗ lực không ngừng nghỉ).
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Mục 2: Nhấn mạnh tiến trình hành động tính đến một cột mốc tương lai */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
                <button
                  onClick={() => toggleAccordion(1)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-pink-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      2
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        Nhấn mạnh tiến trình hành động tính đến một cột mốc tương lai
                      </h4>
                      <p className="text-xs text-slate-500">
                        Khác biệt với Tương lai hoàn thành: Nhấn mạnh tiến trình vs Kết quả xong xuôi
                      </p>
                    </div>
                  </div>
                  {openAccordion === 1 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>

                {openAccordion === 1 && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 space-y-3">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Ý nghĩa:</strong> Khác với Tương lai hoàn thành (chỉ chăm chăm vào kết quả đã kết thúc hay chưa), Tương lai hoàn thành tiếp diễn nhấn mạnh vào <strong>bản chất quá trình và thời lượng dở dang</strong> của hành động.
                    </p>
                    <div className="p-4 rounded-xl bg-pink-50/70 border border-pink-200">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-sm font-bold text-rose-950">
                          "When you arrive tonight, I will have been studying for six hours."
                        </span>
                        <button
                          onClick={() => handlePlayAudio("When you arrive tonight, I will have been studying for six hours.")}
                          className="p-1.5 bg-white text-rose-700 rounded-lg hover:bg-pink-100 shadow-2xs"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-rose-800 mt-1">
                        $\rightarrow$ Khi bạn tới tối nay, tôi sẽ đã ngồi học liên tục suốt 6 tiếng đồng hồ rồi (nhấn mạnh sự mệt mỏi và tiến trình học tập kéo dài).
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Alert Boxes - Lỗi sai thường gặp phần Nâng cao */}
            <div className="space-y-4 pt-2">
              <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>⚠️ Lỗi Sai Thường Gặp (Common Mistakes) - Phần Nâng Cao Đề Thi</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Lỗi 1: Nhầm lẫn TL Hoàn thành & TL Hoàn thành Tiếp diễn */}
                <div className="bg-rose-50/80 rounded-2xl p-4 border border-rose-200">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert className="w-4 h-4 text-rose-600" />
                    <span className="text-xs font-bold text-rose-900 uppercase">
                      Cạm bẫy 1: Nhầm Kết Quả (HT) với Thời Lượng (HT Tiếp Diễn)
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    Nếu câu có <strong>số lượng cụ thể</strong> (5 cuốn sách, 3 bài kiểm tra) $\rightarrow$ <strong>bắt buộc dùng Tương lai hoàn thành</strong>.
                  </p>
                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 rounded-lg bg-white border border-rose-200 text-slate-700">
                      <span className="font-bold text-purple-900">• TL Hoàn thành:</span> <em>"By next month, I will have read <strong>5 books</strong>."</em> (Kết quả số lượng)
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800">
                      <span className="font-bold text-rose-900">• TL HT Tiếp diễn:</span> <em>"By next month, I will have been reading books <strong>for a month</strong>."</em> (Thời lượng)
                    </div>
                  </div>
                </div>

                {/* Lỗi 2: Dùng Stative Verbs */}
                <div className="bg-amber-50/80 rounded-2xl p-4 border border-amber-200">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert className="w-4 h-4 text-amber-700" />
                    <span className="text-xs font-bold text-amber-900 uppercase">
                      Cạm bẫy 2: Dùng với Động từ chỉ trạng thái (Stative Verbs)
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    Tuyệt đối không dùng thì tiếp diễn với các từ chỉ trạng thái, nhận thức, sở hữu (<em>know, want, belong, like, understand</em>).
                  </p>
                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 rounded-lg bg-white border border-rose-200 text-rose-700 flex items-center gap-2">
                      <X className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span>Sai: <em>"By 2030, I will have been <strong>knowing</strong> him for 10 years."</em></span>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Sửa đúng: <em>"By 2030, I will have <strong>known</strong> him for 10 years."</em></span>
                    </div>
                  </div>
                  <p className="text-2xs text-amber-800 mt-2 font-medium">
                    👉 Bắt buộc phải lùi về thì Tương lai hoàn thành đơn (will have known)!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 3: TỪ NHẬN BIẾT & DẤU HIỆU ĐẶC BIỆT
           ======================================================== */}
        {activeTab === 'signals' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Chia làm 2 khối: Cụm từ chỉ thời gian đặc trưng và Mẹo nhận biết */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Khối 1: Cụm từ chỉ thời gian đặc trưng */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-rose-900 font-bold text-sm border-b border-slate-100 pb-3">
                  <Clock className="w-4 h-4 text-rose-600" />
                  <span>1. Trạng từ & Cụm từ nhận biết trọng tâm</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-pink-50/70 border border-pink-100">
                    <div className="font-mono text-xs font-bold text-rose-950 mb-1">
                      By + mốc tương lai + FOR + [khoảng thời gian]
                    </div>
                    <p className="text-xs text-slate-600">
                      Ví dụ: <em>by next year for 3 years, by this time tomorrow for 5 hours, by 2035 for two decades</em>
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-pink-50/70 border border-pink-100">
                    <div className="font-mono text-xs font-bold text-rose-950 mb-1">
                      By the time + [mệnh đề HT đơn] + FOR + [khoảng thời gian]
                    </div>
                    <p className="text-xs text-slate-600">
                      Ví dụ: <em>By the time he finishes the race, he will have been running for 4 hours.</em>
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-pink-50/70 border border-pink-100">
                    <div className="font-mono text-xs font-bold text-rose-950 mb-1">
                      for + [khoảng thời gian] + by then / by [thời điểm]
                    </div>
                    <p className="text-xs text-slate-600">
                      Ví dụ: <em>for 10 straight hours by 10 PM tonight</em>
                    </p>
                  </div>
                </div>
              </div>

              {/* Khối 2: Mẹo nhận biết nhanh qua ngữ cảnh */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-purple-900 font-bold text-sm border-b border-slate-100 pb-3">
                  <Layers className="w-4 h-4 text-purple-600" />
                  <span>2. Mẹo nhận biết nhanh qua ngữ cảnh</span>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100 text-xs text-slate-700 leading-relaxed">
                    <p className="font-bold text-rose-950 mb-2">📌 Công thức nhận diện kép (Double Clue):</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        Dấu hiệu 1: <strong>"By" / "By the time"</strong> (chỉ cột mốc giới hạn trong tương lai).
                      </li>
                      <li>
                        Dấu hiệu 2: <strong>"For + khoảng thời gian"</strong> (chỉ độ dài liên tục không ngắt quãng).
                      </li>
                      <li>
                        👉 Khi <strong>cả hai cùng xuất hiện</strong> trong một câu, xác suất 99% câu đó cần chia <strong>Tương lai hoàn thành tiếp diễn (will have been + V-ing)</strong>.
                      </li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <p className="font-bold text-slate-800 mb-1">So sánh nhanh:</p>
                    <div className="space-y-1 text-2xs text-slate-600">
                      <div>• <em>"By next year, I will have built the house."</em> (Không có "for" $\rightarrow$ TL Hoàn thành)</div>
                      <div>• <em>"By next year, I will have been building the house <strong>for 2 years</strong>."</em> (Có "for" $\rightarrow$ TL HT Tiếp diễn)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alert Box - Bỏ quên vế "For + khoảng thời gian" */}
            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <h4 className="text-xs font-bold text-amber-900 uppercase">
                  ⚠️ Lỗi Sai Thường Gặp: Bỏ Quên Vế "For + Khoảng Thời Gian"
                </h4>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed mb-3">
                Học sinh thấy chữ <strong>"By"</strong> đứng đầu câu là hấp tấp chọn ngay <em>Tương lai hoàn thành đơn (will have + V3/ed)</em> mà quên đọc hết câu để kiểm tra xem có cụm <strong>"For + duration"</strong> hay động từ hành động đang kéo dài hay không.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white border border-amber-200">
                  <div className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> Chỉ có "By + mốc tương lai":
                  </div>
                  <p className="text-slate-600"><em>"By 2030, she <strong>will have retired</strong>."</em> (TL Hoàn thành)</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-rose-200">
                  <div className="font-bold text-rose-950 mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-600"></span> Có thêm "For + thời lượng":
                  </div>
                  <p className="text-rose-900 font-semibold"><em>"By 2030, she <strong>will have been teaching for 30 years</strong>."</em> (TL HT Tiếp diễn)</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
