import React, { useState } from 'react';
import { BookOpen, Sparkles, Volume2, AlertTriangle, Play, ChevronDown, ChevronUp, Check, X, Clock, HelpCircle, Trophy, ArrowRight, ShieldAlert, Layers } from 'lucide-react';
import { playAudio } from '../utils/audio';

interface FuturePerfectDeepDiveProps {
  onStartPractice?: () => void;
}

export const FuturePerfectDeepDive: React.FC<FuturePerfectDeepDiveProps> = ({ onStartPractice }) => {
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
    <div className="mt-8 bg-white rounded-3xl border border-fuchsia-200/80 shadow-xl overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-fuchsia-700 via-purple-700 to-indigo-800 p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 w-44 h-44 bg-fuchsia-400/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-1/4 -top-10 w-36 h-36 bg-purple-300/10 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/30 border border-fuchsia-300/30 text-fuchsia-200 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-300" />
              <span>Chuyên Đề Masterclass Nâng Cao</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              Future Perfect Masterclass
            </h3>
            <p className="text-fuchsia-100 text-sm max-w-2xl leading-relaxed">
              Làm chủ thì <strong>Tương Lai Hoàn Thành</strong>: Cấu trúc <strong>will have + V3/ed</strong>, hành động hoàn tất trước mốc tương lai, mệnh đề liên kết với <em>By / By the time</em>, và các bẫy điểm 9-10 trong đề thi.
            </p>
          </div>

          {onStartPractice && (
            <button
              onClick={onStartPractice}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-fuchsia-950 hover:bg-fuchsia-50 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play className="w-4 h-4 fill-fuchsia-950" />
              <span>Luyện 8 câu phản xạ TL Hoàn Thành</span>
            </button>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 mt-8 pt-4 border-t border-fuchsia-500/30 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setActiveTab('formula')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'formula'
                ? 'bg-white text-fuchsia-950 shadow-md ring-2 ring-fuchsia-300'
                : 'text-fuchsia-100 hover:bg-fuchsia-600/40'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Tab 1: Công Thức Chi Tiết 3 Dạng</span>
          </button>

          <button
            onClick={() => setActiveTab('usage')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'usage'
                ? 'bg-white text-fuchsia-950 shadow-md ring-2 ring-fuchsia-300'
                : 'text-fuchsia-100 hover:bg-fuchsia-600/40'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Tab 2: Cách Dùng & Chuyên Đề Thi</span>
          </button>

          <button
            onClick={() => setActiveTab('signals')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'signals'
                ? 'bg-white text-fuchsia-950 shadow-md ring-2 ring-fuchsia-300'
                : 'text-fuchsia-100 hover:bg-fuchsia-600/40'
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
            <div className="bg-gradient-to-r from-fuchsia-50 to-purple-50 rounded-2xl p-5 border border-fuchsia-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md bg-fuchsia-700 text-white text-xs font-bold uppercase tracking-wider">
                  Cốt lõi cấu trúc
                </span>
                <span className="text-xs text-fuchsia-900 font-semibold">Tất cả các ngôi đều dùng chung "will have"!</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base font-bold text-slate-800 mt-3 bg-white p-3.5 rounded-xl border border-fuchsia-200 shadow-2xs">
                <span className="text-fuchsia-700 bg-fuchsia-100 px-3 py-1 rounded-lg">Trợ động từ Tương Lai (will)</span>
                <span className="text-slate-400">+</span>
                <span className="text-purple-700 bg-purple-100 px-3 py-1 rounded-lg">Động từ nguyên thể (have)</span>
                <span className="text-slate-400">+</span>
                <span className="text-indigo-700 bg-indigo-100 px-3 py-1 rounded-lg">Phân từ hai (V3/ed)</span>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Áp dụng chung cho <strong>mọi chủ ngữ</strong>: <em>I / You / We / They / He / She / It / Danh từ số ít / Danh từ số nhiều</em> $\rightarrow$ Tất cả đều dùng <strong>will have + V3/ed</strong>.
              </p>
            </div>

            {/* 3 Dạng câu: Khẳng định, Phủ định, Nghi vấn */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Khẳng định */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-fuchsia-300 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Khẳng định (+)
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl font-mono text-sm font-bold text-slate-900 border border-slate-200 mb-4">
                  S + will have + V3/ed
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-fuchsia-50/60 rounded-xl border border-fuchsia-100">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        By next month, I <span className="text-fuchsia-700 font-bold underline">will have completed</span> this project.
                      </p>
                      <button
                        onClick={() => handlePlayAudio("By next month, I will have completed this project.")}
                        className="text-fuchsia-600 hover:text-fuchsia-800 p-1 rounded-lg hover:bg-fuchsia-100 transition-colors shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Trước tháng sau, tôi sẽ hoàn thành xong dự án này.</p>
                  </div>

                  <div className="p-3 bg-fuchsia-50/60 rounded-xl border border-fuchsia-100">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        They <span className="text-fuchsia-700 font-bold underline">will have arrived</span> home by 6 PM.
                      </p>
                      <button
                        onClick={() => handlePlayAudio("They will have arrived home by 6 PM.")}
                        className="text-fuchsia-600 hover:text-fuchsia-800 p-1 rounded-lg hover:bg-fuchsia-100 transition-colors shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Họ sẽ về tới nhà trước 6 giờ chiều.</p>
                  </div>
                </div>
              </div>

              {/* Phủ định */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-fuchsia-300 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold flex items-center gap-1.5">
                    <X className="w-3.5 h-3.5" /> Phủ định (-)
                  </span>
                  <span className="text-2xs text-slate-500 font-mono">will not = won't</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl font-mono text-sm font-bold text-slate-900 border border-slate-200 mb-4">
                  S + will not (won't) + have + V3/ed
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-fuchsia-50/60 rounded-xl border border-fuchsia-100">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        She <span className="text-rose-700 font-bold underline">won't have finished</span> her homework before you leave.
                      </p>
                      <button
                        onClick={() => handlePlayAudio("She won't have finished her homework before you leave.")}
                        className="text-fuchsia-600 hover:text-fuchsia-800 p-1 rounded-lg hover:bg-fuchsia-100 transition-colors shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Cô ấy sẽ chưa làm xong bài trước khi bạn rời đi.</p>
                  </div>

                  <div className="p-3 bg-fuchsia-50/60 rounded-xl border border-fuchsia-100">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        We <span className="text-rose-700 font-bold underline">won't have completed</span> the task by then.
                      </p>
                      <button
                        onClick={() => handlePlayAudio("We won't have completed the task by then.")}
                        className="text-fuchsia-600 hover:text-fuchsia-800 p-1 rounded-lg hover:bg-fuchsia-100 transition-colors shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Chúng tôi sẽ chưa thể hoàn thành nhiệm vụ trước lúc đó.</p>
                  </div>
                </div>
              </div>

              {/* Nghi vấn */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-fuchsia-300 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" /> Nghi vấn (?)
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl font-mono text-sm font-bold text-slate-900 border border-slate-200 mb-4">
                  Will + S + have + V3/ed?
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-fuchsia-50/60 rounded-xl border border-fuchsia-100">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        <span className="text-amber-800 font-bold">Will you have graduated</span> by next year?
                      </p>
                      <button
                        onClick={() => handlePlayAudio("Will you have graduated by next year?")}
                        className="text-fuchsia-600 hover:text-fuchsia-800 p-1 rounded-lg hover:bg-fuchsia-100 transition-colors shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      $\rightarrow$ <strong>Yes, I will</strong> / <strong>No, I won't</strong>.
                    </p>
                  </div>

                  <div className="p-3 bg-fuchsia-50/60 rounded-xl border border-fuchsia-100">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        How many books <span className="text-amber-800 font-bold">will she have read</span> by the end of this month?
                      </p>
                      <button
                        onClick={() => handlePlayAudio("How many books will she have read by the end of this month?")}
                        className="text-fuchsia-600 hover:text-fuchsia-800 p-1 rounded-lg hover:bg-fuchsia-100 transition-colors shrink-0"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Tính tới cuối tháng này cô ấy sẽ đọc xong bao nhiêu cuốn?</p>
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
                {/* Lỗi 1: Đổi have thành has */}
                <div className="bg-red-50/80 rounded-2xl p-4 border border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert className="w-4 h-4 text-red-600" />
                    <span className="text-xs font-bold text-red-900 uppercase">Cạm bẫy 1: Chia sai "have" thành "has"</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    Học sinh hay thấy chủ ngữ <em>He / She / It</em> liền tự động đổi thành <em>will has</em>.
                  </p>
                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 rounded-lg bg-white border border-red-200 text-red-700 flex items-center gap-2">
                      <X className="w-3.5 h-3.5 text-red-600 shrink-0" />
                      <span>Sai: <em>"He <strong>will has finished</strong> the project."</em></span>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Sửa đúng: <em>"He <strong>will have finished</strong> the project."</em></span>
                    </div>
                  </div>
                  <p className="text-2xs text-red-800 mt-2 font-medium">
                    👉 Sau động từ khuyết thiếu <strong>will</strong>, từ <strong>have bắt buộc phải giữ nguyên thể</strong>, không bao giờ được chia thành <em>has</em>!
                  </p>
                </div>

                {/* Lỗi 2: Quên chia V3/ed */}
                <div className="bg-amber-50/80 rounded-2xl p-4 border border-amber-200">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert className="w-4 h-4 text-amber-700" />
                    <span className="text-xs font-bold text-amber-900 uppercase">Cạm bẫy 2: Dùng nhầm V-bare hoặc V2</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    Sau <em>will have</em>, động từ chính phải là <strong>Phân từ hai (V3 / V-ed)</strong>, không được để nguyên thể hay V2 quá khứ.
                  </p>
                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 rounded-lg bg-white border border-red-200 text-red-700 flex items-center gap-2">
                      <X className="w-3.5 h-3.5 text-red-600 shrink-0" />
                      <span>Sai: <em>"She will have <strong>went</strong> / <strong>go</strong> before 8 PM."</em></span>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Sửa đúng: <em>"She will have <strong>gone</strong> before 8 PM."</em></span>
                    </div>
                  </div>
                  <p className="text-2xs text-amber-800 mt-2 font-medium">
                    👉 Chú ý bảng động từ bất quy tắc: <em>go - went - <strong>gone</strong></em>; <em>see - saw - <strong>seen</strong></em>.
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
            <div className="p-4 bg-fuchsia-100/70 rounded-2xl border border-fuchsia-200 text-xs text-fuchsia-950 flex items-center justify-between">
              <span>
                💡 Thì Tương Lai Hoàn Thành thường xuyên xuất hiện trong các câu phân hóa điểm 8-9-10 của đề thi tốt nghiệp THPT và kỳ thi Học sinh giỏi.
              </span>
              <span className="font-bold text-fuchsia-900 hidden sm:inline">2 Cách Dùng Cốt Lõi</span>
            </div>

            {/* Accordion 2 Cách Dùng */}
            <div className="space-y-3">
              {/* Mục 1: Hành động sẽ hoàn tất trước một thời điểm hoặc hành động khác trong tương lai */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
                <button
                  onClick={() => toggleAccordion(0)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-fuchsia-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      1
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        Hành động sẽ hoàn tất trước một thời điểm hoặc một hành động khác trong tương lai
                      </h4>
                      <p className="text-xs text-slate-500">
                        Ý nghĩa trọng tâm số 1: Nhấn mạnh tính hoàn tất trọn vẹn trước cột mốc xác định
                      </p>
                    </div>
                  </div>
                  {openAccordion === 0 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>

                {openAccordion === 0 && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 space-y-3">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Ý nghĩa:</strong> Nhấn mạnh một sự việc sẽ kết thúc, thu được kết quả hoàn chỉnh trước khi một thời điểm hoặc một hành động thứ hai trong tương lai xảy ra.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono font-bold">
                      <div className="p-3 bg-fuchsia-50 rounded-xl border border-fuchsia-200 text-fuchsia-900">
                        By + mốc tương lai, S + will have + V3/ed
                      </div>
                      <div className="p-3 bg-purple-50 rounded-xl border border-purple-200 text-purple-900">
                        By the time + S + V(s/es), S + will have + V3/ed
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-fuchsia-50/70 border border-fuchsia-200">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-sm font-bold text-fuchsia-950">
                          "By the time you come tomorrow, I will have cleaned the whole house."
                        </span>
                        <button
                          onClick={() => handlePlayAudio("By the time you come tomorrow, I will have cleaned the whole house.")}
                          className="p-1.5 bg-white text-fuchsia-700 rounded-lg hover:bg-fuchsia-100 shadow-2xs"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-fuchsia-800 mt-1">
                        $\rightarrow$ Trước lúc bạn ghé sang ngày mai (hành động ở hiện tại đơn: <em>you come</em>), tôi sẽ đã dọn dẹp sạch sẽ toàn bộ ngôi nhà xong xuôi rồi.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Mục 2: Hành động kéo dài tính đến một mốc thời điểm trong tương lai */}
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
                        Hành động kéo dài tính đến một mốc thời điểm trong tương lai
                      </h4>
                      <p className="text-xs text-slate-500">
                        Chỉ độ dài / thời lượng tích lũy đến một cột mốc (thường đi với "for + khoảng thời gian")
                      </p>
                    </div>
                  </div>
                  {openAccordion === 1 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>

                {openAccordion === 1 && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 space-y-3">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Ý nghĩa:</strong> Chỉ trạng thái hoặc sự việc đã diễn ra và tính tròn tổng thời lượng (kinh nghiệm, năm công tác, tuổi kết hôn) khi chạm tới một mốc thời gian trong tương lai.
                    </p>
                    <div className="p-4 rounded-xl bg-fuchsia-50/70 border border-fuchsia-200">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-sm font-bold text-fuchsia-950">
                          "By next year, we will have lived in this city for 10 years."
                        </span>
                        <button
                          onClick={() => handlePlayAudio("By next year, we will have lived in this city for 10 years.")}
                          className="p-1.5 bg-white text-fuchsia-700 rounded-lg hover:bg-fuchsia-100 shadow-2xs"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-fuchsia-800 mt-1">
                        $\rightarrow$ Tính tới năm sau, chúng tôi sẽ sống tại thành phố này được tròn 10 năm liên tục.
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

              <div className="bg-rose-50/80 rounded-2xl p-4 border border-rose-200">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                  <span className="text-xs font-bold text-rose-900 uppercase">
                    Cạm bẫy chí mạng: Chia sai thì sau "By the time"
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  Giống như các mệnh đề trạng ngữ chỉ thời gian khác, mệnh đề đi sau <strong>By the time / When / Before</strong> ở tương lai <strong>phải lùi về thì Hiện tại đơn</strong>, tuyệt đối không được dùng <em>will</em>!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-white border border-rose-200 text-rose-700 flex items-center gap-2">
                    <X className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span>Sai: <em>"By the time you <strong>will come</strong>, I will have finished."</em></span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Sửa đúng: <em>"By the time you <strong>come</strong>, I will have finished."</em></span>
                  </div>
                </div>
                <p className="text-2xs text-rose-800 mt-2 font-medium">
                  👉 Công thức vàng nhớ nhanh: <strong>By the time + Hiện tại đơn, Tương lai hoàn thành</strong>.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 3: TỪ NHẬN BIẾT & DẤU HIỆU ĐẶC BIỆT
           ======================================================== */}
        {activeTab === 'signals' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Chia làm 2 khối: Giới từ chỉ thời gian trọng tâm và Mẹo phân biệt */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Khối 1: Giới từ chỉ thời gian trọng tâm */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-fuchsia-900 font-bold text-sm border-b border-slate-100 pb-3">
                  <Clock className="w-4 h-4 text-fuchsia-600" />
                  <span>1. Trạng từ & Cụm từ nhận biết trọng tâm</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-fuchsia-50/70 border border-fuchsia-100">
                    <div className="font-mono text-xs font-bold text-fuchsia-950 mb-1">
                      By + mốc thời gian trong tương lai
                    </div>
                    <p className="text-xs text-slate-600">
                      Ví dụ: <em>by tomorrow, by next week, by 2030, by the end of this month, by next year</em>
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-fuchsia-50/70 border border-fuchsia-100">
                    <div className="font-mono text-xs font-bold text-fuchsia-950 mb-1">
                      By the time + Mệnh đề Hiện tại đơn
                    </div>
                    <p className="text-xs text-slate-600">
                      Ví dụ: <em>By the time she returns, by the time we arrive, by the time the teacher comes</em>
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-fuchsia-50/70 border border-fuchsia-100">
                    <div className="font-mono text-xs font-bold text-fuchsia-950 mb-1">
                      Before + mốc thời gian / Mệnh đề Hiện tại đơn
                    </div>
                    <p className="text-xs text-slate-600">
                      Ví dụ: <em>before 10 PM tonight, before the bell rings, before they graduate</em>
                    </p>
                  </div>
                </div>
              </div>

              {/* Khối 2: Mẹo phân biệt nhanh qua ngữ cảnh */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-purple-900 font-bold text-sm border-b border-slate-100 pb-3">
                  <Layers className="w-4 h-4 text-purple-600" />
                  <span>2. Mẹo phân biệt nhanh qua ngữ cảnh</span>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-fuchsia-50 to-purple-50 border border-fuchsia-100 text-xs text-slate-700 leading-relaxed">
                    <p className="font-bold text-fuchsia-950 mb-2">📌 Kim chỉ nam nhận diện thì:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        Từ khóa vàng: <strong>"By"</strong> mang ý nghĩa là <em>"trước một thời điểm nào đó"</em> hoặc <em>"tính cho đến khi"</em>.
                      </li>
                      <li>
                        Hễ trong câu xuất hiện <strong>By + mốc tương lai</strong> hoặc <strong>By the time + Hiện tại đơn</strong>, xu hướng xác suất trên 95% là phải chọn <strong>Tương lai hoàn thành (will have + V3/ed)</strong>.
                      </li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <p className="font-bold text-slate-800 mb-1">So sánh phản xạ:</p>
                    <div className="space-y-1 text-2xs text-slate-600">
                      <div>• <em>"Next year, I will graduate."</em> (Chỉ mốc thời điểm $\rightarrow$ Tương lai đơn)</div>
                      <div>• <em>"<strong>By</strong> next year, I will have graduated."</em> (Đã hoàn tất trước cột mốc $\rightarrow$ Tương lai hoàn thành)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alert Box - Bẫy nhầm lẫn giữa Tương lai đơn và Tương lai hoàn thành */}
            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <h4 className="text-xs font-bold text-amber-900 uppercase">
                  ⚠️ Lỗi Sai Thường Gặp: Nhầm Lẫn Giữa Tương Lai Đơn Và Tương Lai Hoàn Thành
                </h4>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed mb-3">
                Thấy cụm từ tương lai như <em>"next year"</em> hay <em>"2030"</em>, học sinh rất dễ chọn nhầm <strong>Tương lai đơn (will + V-bare)</strong> vì quên để ý giới từ <strong>"By"</strong> đứng ở đầu câu.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white border border-amber-200">
                  <div className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> Chỉ có mốc thời gian "In 2030":
                  </div>
                  <p className="text-slate-600"><em>"In 2030, robots <strong>will do</strong> the housework."</em> (Tương lai đơn)</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-fuchsia-200">
                  <div className="font-bold text-fuchsia-950 mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-600"></span> Có từ khóa "By 2030":
                  </div>
                  <p className="text-fuchsia-900 font-semibold"><em>"<strong>By 2030</strong>, they <strong>will have built</strong> the bridge."</em> (Tương lai hoàn thành)</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
