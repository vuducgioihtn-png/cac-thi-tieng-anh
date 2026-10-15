import React, { useState } from 'react';
import { BookOpen, Sparkles, Volume2, AlertTriangle, Play, ChevronDown, ChevronUp, Check, X, Clock, HelpCircle, Activity, ArrowRight, ShieldAlert, Layers } from 'lucide-react';
import { playAudio } from '../utils/audio';

interface FutureContinuousDeepDiveProps {
  onStartPractice?: () => void;
}

export const FutureContinuousDeepDive: React.FC<FutureContinuousDeepDiveProps> = ({ onStartPractice }) => {
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
    <div className="mt-8 bg-white rounded-3xl border border-violet-200/80 shadow-xl overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-800 p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 w-44 h-44 bg-violet-400/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-1/4 -top-10 w-36 h-36 bg-purple-300/10 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/30 border border-violet-300/30 text-violet-200 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-violet-300" />
              <span>Chuyên Đề Masterclass Nâng Cao</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              Future Continuous Masterclass
            </h3>
            <p className="text-violet-100 text-sm max-w-2xl leading-relaxed">
              Làm chủ thì <strong>Tương Lai Tiếp Diễn</strong>: Công thức <strong>will be + V-ing</strong>, diễn tả hành động đang xảy ra tại mốc tương lai cụ thể, sự việc bị xen ngang, và bẫy đề thi THPT Quốc gia / HSG.
            </p>
          </div>

          {onStartPractice && (
            <button
              onClick={onStartPractice}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-violet-900 hover:bg-violet-50 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play className="w-4 h-4 fill-violet-900" />
              <span>Luyện 8 câu phản xạ TL Tiếp Diễn</span>
            </button>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 mt-8 pt-4 border-t border-violet-500/30 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setActiveTab('formula')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'formula'
                ? 'bg-white text-violet-900 shadow-md ring-2 ring-violet-300'
                : 'text-violet-100 hover:bg-violet-600/40'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Tab 1: Công Thức Chi Tiết 3 Dạng</span>
          </button>

          <button
            onClick={() => setActiveTab('usage')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'usage'
                ? 'bg-white text-violet-900 shadow-md ring-2 ring-violet-300'
                : 'text-violet-100 hover:bg-violet-600/40'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Tab 2: Cách Dùng & Chuyên Đề Thi</span>
          </button>

          <button
            onClick={() => setActiveTab('signals')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'signals'
                ? 'bg-white text-violet-900 shadow-md ring-2 ring-violet-300'
                : 'text-violet-100 hover:bg-violet-600/40'
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
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-5 border border-violet-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md bg-violet-600 text-white text-xs font-bold uppercase tracking-wider">
                  Cốt lõi cấu trúc
                </span>
                <span className="text-xs text-violet-800 font-semibold">Tất cả các chủ ngữ đều dùng chung công thức!</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base font-bold text-slate-800 mt-3 bg-white p-3.5 rounded-xl border border-violet-200 shadow-2xs">
                <span className="text-violet-700 bg-violet-100 px-3 py-1 rounded-lg">Trợ động từ Tương Lai (will)</span>
                <span className="text-slate-400">+</span>
                <span className="text-purple-700 bg-purple-100 px-3 py-1 rounded-lg">To-be nguyên thể (be)</span>
                <span className="text-slate-400">+</span>
                <span className="text-indigo-700 bg-indigo-100 px-3 py-1 rounded-lg">Động từ đuôi (V-ing)</span>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Áp dụng chung cho <strong>tất cả các ngôi</strong>: <em>I / You / We / They / He / She / It / Danh từ số ít / Danh từ số nhiều</em> $\rightarrow$ Đều đi với <strong>will be + V-ing</strong>.
              </p>
            </div>

            {/* 3 Dạng câu: Khẳng định, Phủ định, Nghi vấn */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Khẳng định */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-violet-300 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Khẳng định (+)
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl font-mono text-sm font-bold text-slate-900 border border-slate-200 mb-4">
                  S + will be + V-ing
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-violet-50/60 rounded-xl border border-violet-100">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        At this time tomorrow, I <span className="text-violet-700 font-bold underline">will be working</span> in my office.
                      </p>
                      <button
                        onClick={() => handlePlayAudio("At this time tomorrow, I will be working in my office.")}
                        className="text-violet-600 hover:text-violet-800 p-1 rounded-lg hover:bg-violet-100 transition-colors shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Vào giờ này ngày mai, tôi sẽ đang làm việc ở văn phòng.</p>
                  </div>

                  <div className="p-3 bg-violet-50/60 rounded-xl border border-violet-100">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        They <span className="text-violet-700 font-bold underline">will be sleeping</span> when you arrive.
                      </p>
                      <button
                        onClick={() => handlePlayAudio("They will be sleeping when you arrive.")}
                        className="text-violet-600 hover:text-violet-800 p-1 rounded-lg hover:bg-violet-100 transition-colors shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Họ sẽ đang ngủ lúc bạn tới nơi.</p>
                  </div>
                </div>
              </div>

              {/* Phủ định */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-violet-300 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold flex items-center gap-1.5">
                    <X className="w-3.5 h-3.5" /> Phủ định (-)
                  </span>
                  <span className="text-2xs text-slate-500 font-mono">will not = won't</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl font-mono text-sm font-bold text-slate-900 border border-slate-200 mb-4">
                  S + will not (won't) + be + V-ing
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-violet-50/60 rounded-xl border border-violet-100">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        She <span className="text-rose-700 font-bold underline">won't be attending</span> the meeting tomorrow.
                      </p>
                      <button
                        onClick={() => handlePlayAudio("She won't be attending the meeting tomorrow.")}
                        className="text-violet-600 hover:text-violet-800 p-1 rounded-lg hover:bg-violet-100 transition-colors shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Cô ấy sẽ không tham dự cuộc họp vào ngày mai.</p>
                  </div>

                  <div className="p-3 bg-violet-50/60 rounded-xl border border-violet-100">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        We <span className="text-rose-700 font-bold underline">won't be using</span> the car tonight.
                      </p>
                      <button
                        onClick={() => handlePlayAudio("We won't be using the car tonight.")}
                        className="text-violet-600 hover:text-violet-800 p-1 rounded-lg hover:bg-violet-100 transition-colors shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Tối nay chúng tôi sẽ không dùng tới chiếc xe.</p>
                  </div>
                </div>
              </div>

              {/* Nghi vấn */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-violet-300 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" /> Nghi vấn (?)
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl font-mono text-sm font-bold text-slate-900 border border-slate-200 mb-4">
                  Will + S + be + V-ing?
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-violet-50/60 rounded-xl border border-violet-100">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        <span className="text-amber-800 font-bold">Will you be waiting</span> for me at the station?
                      </p>
                      <button
                        onClick={() => handlePlayAudio("Will you be waiting for me at the station?")}
                        className="text-violet-600 hover:text-violet-800 p-1 rounded-lg hover:bg-violet-100 transition-colors shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      $\rightarrow$ <strong>Yes, I will</strong> / <strong>No, I won't</strong>.
                    </p>
                  </div>

                  <div className="p-3 bg-violet-50/60 rounded-xl border border-violet-100">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        What <span className="text-amber-800 font-bold">will he be doing</span> at 10 PM?
                      </p>
                      <button
                        onClick={() => handlePlayAudio("What will he be doing at 10 PM?")}
                        className="text-violet-600 hover:text-violet-800 p-1 rounded-lg hover:bg-violet-100 transition-colors shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Wh-question: Cậu ấy sẽ đang làm gì lúc 10 giờ tối?</p>
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
                {/* Lỗi 1: Thiếu từ "be" */}
                <div className="bg-red-50/80 rounded-2xl p-4 border border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert className="w-4 h-4 text-red-600" />
                    <span className="text-xs font-bold text-red-900 uppercase">Cạm bẫy 1: Thiếu từ "be"</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    Học sinh hay viết nhầm trực tiếp <em>"will + V-ing"</em> giống như thói quen của thì tương lai đơn.
                  </p>
                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 rounded-lg bg-white border border-red-200 text-red-700 flex items-center gap-2">
                      <X className="w-3.5 h-3.5 text-red-600 shrink-0" />
                      <span>Sai: <em>"I <strong>will working</strong> at 9 AM tomorrow."</em></span>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Sửa đúng: <em>"I <strong>will be working</strong> at 9 AM tomorrow."</em></span>
                    </div>
                  </div>
                  <p className="text-2xs text-red-800 mt-2 font-medium">
                    👉 Bắt buộc phải có đầy đủ bộ ba: <strong>will + be + V-ing</strong>.
                  </p>
                </div>

                {/* Lỗi 2: Chia sai động từ "be" theo chủ ngữ */}
                <div className="bg-amber-50/80 rounded-2xl p-4 border border-amber-200">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert className="w-4 h-4 text-amber-700" />
                    <span className="text-xs font-bold text-amber-900 uppercase">Cạm bẫy 2: Biến đổi "be" thành is/am/are</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    Nhiều bạn thấy chủ ngữ số ít (He, She) liền tự tiện đổi <em>be</em> thành <em>is</em> (nhầm lẫn với hiện tại tiếp diễn).
                  </p>
                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 rounded-lg bg-white border border-red-200 text-red-700 flex items-center gap-2">
                      <X className="w-3.5 h-3.5 text-red-600 shrink-0" />
                      <span>Sai: <em>"He <strong>will is working</strong> tonight."</em></span>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Sửa đúng: <em>"He <strong>will be working</strong> tonight."</em></span>
                    </div>
                  </div>
                  <p className="text-2xs text-amber-800 mt-2 font-medium">
                    👉 Quy tắc bất biến: Sau trợ động từ khuyết thiếu <strong>will</strong>, động từ to be <strong>luôn luôn ở dạng nguyên thể là "be"</strong>!
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
            <div className="p-4 bg-violet-100/70 rounded-2xl border border-violet-200 text-xs text-violet-900 flex items-center justify-between">
              <span>
                💡 Khối kiến thức nâng cao, đặc biệt thường gặp trong các đề thi THPT Quốc gia, bài thi chứng chỉ IELTS và bồi dưỡng Học sinh giỏi.
              </span>
              <span className="font-bold text-violet-800 hidden sm:inline">3 Cách Dùng Trọng Tâm</span>
            </div>

            {/* Accordion 3 Cách Dùng */}
            <div className="space-y-3">
              {/* Mục 1: Hành động đang diễn ra tại một thời điểm xác định trong tương lai */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
                <button
                  onClick={() => toggleAccordion(0)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-violet-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      1
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        Hành động đang diễn ra tại một thời điểm xác định trong tương lai
                      </h4>
                      <p className="text-xs text-slate-500">
                        Nhấn mạnh quá trình / trạng thái đang kéo dài tại mốc giờ cụ thể ở tương lai
                      </p>
                    </div>
                  </div>
                  {openAccordion === 0 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>

                {openAccordion === 0 && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 space-y-3">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Ý nghĩa:</strong> Khác với Tương lai đơn (chỉ nói chung chung sự việc sẽ xảy ra), thì Tương lai tiếp diễn nhấn mạnh vào <strong>khoảnh khắc sự việc đang dở dang</strong> đúng vào thời điểm đó.
                    </p>
                    <div className="p-4 rounded-xl bg-violet-50 border border-violet-200">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-sm font-bold text-violet-950">
                          "At 8 PM tonight, we will be having dinner."
                        </span>
                        <button
                          onClick={() => handlePlayAudio("At 8 PM tonight, we will be having dinner.")}
                          className="p-1.5 bg-white text-violet-700 rounded-lg hover:bg-violet-100 shadow-2xs"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-violet-800 mt-1">
                        $\rightarrow$ Đúng lúc 8h tối nay, chúng tôi đang ngồi bên bàn ăn và đang dùng bữa (hành động đã bắt đầu trước đó và chưa kết thúc).
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Mục 2: Hành động sẽ đang diễn ra thì có hành động khác xen vào */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
                <button
                  onClick={() => toggleAccordion(1)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      2
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        Hành động sẽ đang diễn ra thì có hành động khác xen vào trong tương lai
                      </h4>
                      <p className="text-xs text-slate-500">
                        Phối hợp thì kinh điển trong đề thi: Future Continuous kết hợp Hiện tại đơn
                      </p>
                    </div>
                  </div>
                  {openAccordion === 1 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>

                {openAccordion === 1 && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 space-y-3">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Ý nghĩa:</strong> Một hành động đang diễn ra kéo dài trong tương lai (chia <strong>Tương lai tiếp diễn</strong>) thì bị một hành động khác chen ngang (chia <strong>Hiện tại đơn</strong> trong mệnh đề thời gian đi với When/While).
                    </p>
                    <div className="p-3 bg-purple-50 rounded-xl border border-purple-200 font-mono text-xs sm:text-sm text-purple-900 font-bold">
                      S1 + will be + V-ing + when + S2 + V(s/es)
                    </div>
                    <div className="p-4 rounded-xl bg-violet-50 border border-violet-200">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-sm font-bold text-violet-950">
                          "When you come tomorrow, I will be reading books."
                        </span>
                        <button
                          onClick={() => handlePlayAudio("When you come tomorrow, I will be reading books.")}
                          className="p-1.5 bg-white text-violet-700 rounded-lg hover:bg-violet-100 shadow-2xs"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-violet-800 mt-1">
                        $\rightarrow$ Ngày mai khi bạn ghé qua (hành động chen ngang: <em>you come</em>), tôi sẽ đang ngồi đọc sách (hành động đang dở dang: <em>will be reading</em>).
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Mục 3: Hành động diễn ra theo lịch trình, kế hoạch tự nhiên */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
                <button
                  onClick={() => toggleAccordion(2)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      3
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        Hành động diễn ra theo lịch trình, kế hoạch tự nhiên (Routine/Natural Course)
                      </h4>
                      <p className="text-xs text-slate-500">
                        Sự việc sẽ xảy ra như một phần tất yếu trong công việc hoặc chu trình hàng ngày
                      </p>
                    </div>
                  </div>
                  {openAccordion === 2 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>

                {openAccordion === 2 && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 space-y-3">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Ý nghĩa:</strong> Diễn tả những việc sẽ xảy ra như một phần trong chu trình hoặc thói quen bình thường của cuộc sống, không mang sắc thái ép buộc hay hứa hẹn.
                    </p>
                    <div className="p-4 rounded-xl bg-violet-50 border border-violet-200">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-sm font-bold text-violet-950">
                          "I will be seeing him at the meeting tomorrow."
                        </span>
                        <button
                          onClick={() => handlePlayAudio("I will be seeing him at the meeting tomorrow.")}
                          className="p-1.5 bg-white text-violet-700 rounded-lg hover:bg-violet-100 shadow-2xs"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-violet-800 mt-1">
                        $\rightarrow$ Ngày mai đằng nào tôi cũng sẽ gặp anh ấy ở cuộc họp (việc tự nhiên diễn ra theo lịch làm việc thông thường).
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
                {/* Lỗi 1: Dùng will be trong mệnh đề thời gian */}
                <div className="bg-rose-50/80 rounded-2xl p-4 border border-rose-200">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert className="w-4 h-4 text-rose-600" />
                    <span className="text-xs font-bold text-rose-900 uppercase">Cạm bẫy 1: Mệnh đề chỉ thời gian (Time Clauses)</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    Mệnh đề đi sau các liên từ thời gian (<em>when, while, as soon as, before, after, if</em>) <strong>bắt buộc phải lùi về Hiện tại đơn</strong>, tuyệt đối không dùng <em>will</em> hoặc <em>will be</em>.
                  </p>
                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 rounded-lg bg-white border border-rose-200 text-rose-700 flex items-center gap-2">
                      <X className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span>Sai: <em>"When you <strong>will come</strong>, I will be working."</em></span>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Sửa đúng: <em>"When you <strong>come</strong>, I will be working."</em></span>
                    </div>
                  </div>
                  <p className="text-2xs text-rose-800 mt-2 font-medium">
                    👉 Bẫy kinh điển số 1 trong các câu trắc nghiệm THPT Quốc gia!
                  </p>
                </div>

                {/* Lỗi 2: Dùng với Stative Verbs */}
                <div className="bg-amber-50/80 rounded-2xl p-4 border border-amber-200">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert className="w-4 h-4 text-amber-700" />
                    <span className="text-xs font-bold text-amber-900 uppercase">Cạm bẫy 2: Động từ chỉ trạng thái (Stative Verbs)</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    Các động từ chỉ nhận thức, cảm xúc, sở hữu (<em>want, know, like, understand, belong to, need</em>) <strong>không được chia ở dạng tiếp diễn</strong>.
                  </p>
                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 rounded-lg bg-white border border-rose-200 text-rose-700 flex items-center gap-2">
                      <X className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span>Sai: <em>"At this time tomorrow, I <strong>will be wanting</strong> a coffee."</em></span>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Sửa đúng: <em>"At this time tomorrow, I <strong>will want</strong> a coffee."</em></span>
                    </div>
                  </div>
                  <p className="text-2xs text-amber-800 mt-2 font-medium">
                    👉 Phải lùi về thì Tương lai đơn (Future Simple) khi gặp Stative Verbs!
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
            {/* Chia làm 2 khối: Cụm từ chỉ thời điểm cụ thể và Mệnh đề thời gian kết hợp */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Khối 1: Cụm từ chỉ thời điểm cụ thể */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-violet-800 font-bold text-sm border-b border-slate-100 pb-3">
                  <Clock className="w-4 h-4 text-violet-600" />
                  <span>1. Trạng từ & Cụm từ nhận biết trọng tâm</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-violet-50/70 border border-violet-100">
                    <div className="font-mono text-xs font-bold text-violet-900 mb-1">
                      At + giờ cụ thể + mốc tương lai
                    </div>
                    <p className="text-xs text-slate-600">
                      Ví dụ: <em>at 9 AM tomorrow, at 8 PM tonight, at 10 o'clock next Monday</em>
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-violet-50/70 border border-violet-100">
                    <div className="font-mono text-xs font-bold text-violet-900 mb-1">
                      At this time / At this moment + [mốc tương lai]
                    </div>
                    <p className="text-xs text-slate-600">
                      Ví dụ: <em>at this time tomorrow, at this time next week, at this moment next year</em>
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-violet-50/70 border border-violet-100">
                    <div className="font-mono text-xs font-bold text-violet-900 mb-1">
                      In the middle of + [sự kiện tương lai] / Throughout...
                    </div>
                    <p className="text-xs text-slate-600">
                      Ví dụ: <em>in the middle of the lecture tomorrow, throughout July next year</em>
                    </p>
                  </div>
                </div>
              </div>

              {/* Khối 2: Mệnh đề thời gian kết hợp & Mẹo ngữ cảnh */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-purple-800 font-bold text-sm border-b border-slate-100 pb-3">
                  <Layers className="w-4 h-4 text-purple-600" />
                  <span>2. Mẹo phân biệt nhanh qua ngữ cảnh</span>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 text-xs text-slate-700 leading-relaxed">
                    <p className="font-bold text-purple-900 mb-2">📌 Mẹo nhận diện trọng tâm:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        <strong>Tương lai đơn:</strong> Chỉ thông báo sự việc sẽ xảy ra (<em>"I will work tomorrow"</em> $\rightarrow$ Ngày mai tôi đi làm).
                      </li>
                      <li>
                        <strong>Tương lai tiếp diễn:</strong> Nhấn mạnh sự việc <strong>đang tiến hành, dở dang</strong> tại thời điểm đó (<em>"At 9 AM tomorrow, I will be working"</em> $\rightarrow$ Vào đúng 9h sáng mai, tôi đang ngồi cặm cụi làm việc).
                      </li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <p className="font-bold text-slate-800 mb-1">Mệnh đề thời gian phối hợp:</p>
                    <code className="text-violet-700 font-mono font-bold block mb-1">
                      When + S + V(hiện tại đơn), S + will be + V-ing
                    </code>
                    <p className="text-slate-500 text-2xs">
                      Hành động ngắn (chen vào) chia Hiện tại đơn; hành động dài (đang diễn ra) chia Tương lai tiếp diễn.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alert Box - Bẫy nhầm lẫn với Tương lai đơn */}
            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <h4 className="text-xs font-bold text-amber-900 uppercase">
                  ⚠️ Lỗi Sai Thường Gặp: Nhầm Lẫn Với Tương Lai Đơn
                </h4>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed mb-3">
                Thấy xuất hiện từ <strong>"tomorrow"</strong> hay <strong>"next week"</strong>, học sinh thường phản xạ máy móc chọn ngay <em>Tương lai đơn (will + V_bare)</em> mà bỏ qua các từ chỉ thời điểm cụ thể đi kèm (như <em>at this time, at 8 PM</em>), dẫn đến khoanh sai đáp án trắc nghiệm.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white border border-amber-200">
                  <div className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> Chỉ có "tomorrow" chung chung:
                  </div>
                  <p className="text-slate-600"><em>"I will study tomorrow."</em> (Tương lai đơn)</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-violet-200">
                  <div className="font-bold text-violet-900 mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-violet-600"></span> Có giờ cụ thể: "At 9 AM tomorrow":
                  </div>
                  <p className="text-violet-800 font-semibold"><em>"I will be studying at 9 AM tomorrow."</em> (Tương lai tiếp diễn)</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
