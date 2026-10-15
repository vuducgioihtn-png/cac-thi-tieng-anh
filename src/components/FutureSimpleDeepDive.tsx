import React, { useState } from 'react';
import { BookOpen, Sparkles, Volume2, AlertTriangle, Play, ChevronDown, ChevronUp, Check, X, Clock, HelpCircle, Compass, Zap, ArrowRight, ShieldAlert } from 'lucide-react';
import { playAudio } from '../utils/audio';

interface FutureSimpleDeepDiveProps {
  onStartPractice?: () => void;
}

export const FutureSimpleDeepDive: React.FC<FutureSimpleDeepDiveProps> = ({ onStartPractice }) => {
  const [activeTab, setActiveTab] = useState<'tab1' | 'tab2' | 'tab3'>('tab1');

  // Accordion state for Tab 2
  const [accordionOpen, setAccordionOpen] = useState<{ [key: string]: boolean }>({
    item1: true,
    item2: true,
    item3: true,
    item4: true,
  });

  const toggleAccordion = (key: string) => {
    setAccordionOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mt-8 transition-all">
      {/* Header Banner: Future Simple Masterclass */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-900 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-indigo-100 text-xs font-semibold mb-2 backdrop-blur-md border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
              <span>Chuyên Đề Trọng Điểm Điểm 9+</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
              FUTURE SIMPLE MASTERCLASS
            </h3>
            <p className="text-xs sm:text-sm text-indigo-100/90 mt-1 max-w-2xl leading-relaxed">
              Mô-đun học tập toàn diện thì Tương lai đơn: Cấu trúc Will + V-bare cho mọi ngôi, cách dùng Shall trang trọng, quyết định bộc phát tức thì, dự đoán chủ quan, phân biệt sống còn với Be Going To và bẫy mệnh đề thời gian thi THPT.
            </p>
          </div>

          {onStartPractice && (
            <button
              onClick={onStartPractice}
              className="px-5 py-3 bg-white text-indigo-950 rounded-xl text-xs font-bold hover:bg-indigo-50 active:scale-95 transition-all shadow-sm flex items-center gap-2 whitespace-nowrap self-start md:self-auto shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Luyện 8 câu phản xạ Tương lai đơn</span>
            </button>
          )}
        </div>
      </div>

      {/* 3 Tab Điều Hướng Chính */}
      <div className="flex border-b border-slate-200 bg-slate-50/80 overflow-x-auto text-xs sm:text-sm font-semibold">
        <button
          onClick={() => setActiveTab('tab1')}
          className={`px-6 py-4 whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'tab1'
              ? 'border-indigo-600 text-indigo-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>TAB 1: CÔNG THỨC CHI TIẾT 3 DẠNG</span>
        </button>

        <button
          onClick={() => setActiveTab('tab2')}
          className={`px-6 py-4 whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'tab2'
              ? 'border-indigo-600 text-indigo-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>TAB 2: CÁC CÁCH DÙNG MỞ RỘNG & SO SÁNH</span>
        </button>

        <button
          onClick={() => setActiveTab('tab3')}
          className={`px-6 py-4 whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'tab3'
              ? 'border-indigo-600 text-indigo-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>TAB 3: TỪ NHẬN BIẾT & BẪY ĐỀ THI</span>
        </button>
      </div>

      {/* Nội Dung Từng Tab */}
      <div className="p-6 sm:p-8">
        {/* ========================================================================= */}
        {/* TAB 1: CÔNG THỨC CHI TIẾT 3 DẠNG (Khối cấu trúc nền tảng) */}
        {/* ========================================================================= */}
        {activeTab === 'tab1' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Phân vùng Cards: Động từ với Will và Cấu trúc Shall */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card 1: Cấu trúc với Will (Áp dụng chung mọi ngôi) */}
              <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 shadow-2xs">
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                    <h4 className="text-base font-bold text-slate-900">
                      1. Động Từ Với Trợ Từ "Will" (Mọi Ngôi)
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-semibold">
                    S + will + V (nguyên thể)
                  </span>
                </div>

                {/* Khẳng định */}
                <div className="mb-6">
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                      +
                    </span>
                    <span>Cấu Trúc Khẳng Định (+)</span>
                  </div>

                  {/* Formula Box */}
                  <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-2xs space-y-1.5">
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 font-mono">
                      <span className="text-indigo-600 font-bold">S</span> +{' '}
                      <span className="text-blue-600 font-bold">will ('ll)</span> +{' '}
                      <span className="text-teal-600 font-bold">V (nguyên thể / V-bare)</span>
                    </div>
                    <div className="text-[11px] text-slate-500 italic">
                      * Áp dụng chung cho tất cả các ngôi: I / You / We / They / He / She / It / Danh từ số ít hay số nhiều!
                    </div>
                  </div>

                  {/* Ví dụ khẳng định */}
                  <div className="mt-3 space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100/80 flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-emerald-950 flex items-center gap-1.5">
                          <span>I will help you with your homework.</span>
                          <button
                            onClick={() => playAudio('I will help you with your homework.')}
                            className="text-emerald-700 hover:text-emerald-900 p-0.5 rounded hover:bg-emerald-100 transition-colors"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-emerald-800/80 text-[11px] mt-0.5">
                          Tôi sẽ giúp bạn làm bài tập về nhà. (Đề nghị giúp đỡ bộc phát)
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100/80 flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-emerald-950 flex items-center gap-1.5">
                          <span>They'll arrive soon.</span>
                          <button
                            onClick={() => playAudio("They'll arrive soon.")}
                            className="text-emerald-700 hover:text-emerald-900 p-0.5 rounded hover:bg-emerald-100 transition-colors"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-emerald-800/80 text-[11px] mt-0.5">
                          Họ sẽ sớm tới nơi thôi. (Viết tắt They'll = They will)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phủ định */}
                <div className="mb-6">
                  <div className="text-xs font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-[10px] font-bold">
                      -
                    </span>
                    <span>Cấu Trúc Phủ Định (-)</span>
                  </div>

                  {/* Formula Box */}
                  <div className="bg-white p-4 rounded-xl border border-rose-100 shadow-2xs space-y-1.5">
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 font-mono">
                      <span className="text-indigo-600 font-bold">S</span> +{' '}
                      <span className="text-rose-600 font-bold">will not (won't)</span> +{' '}
                      <span className="text-teal-600 font-bold">V (nguyên thể / V-bare)</span>
                    </div>
                    <div className="text-[11px] text-slate-500 italic">
                      * Chú ý dạng viết tắt: will not $\rightarrow$ <strong>won't</strong> (phát âm /woʊnt/)
                    </div>
                  </div>

                  {/* Ví dụ phủ định */}
                  <div className="mt-3 space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-rose-50/60 border border-rose-100/80 flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-rose-950 flex items-center gap-1.5">
                          <span>She won't accept the offer.</span>
                          <button
                            onClick={() => playAudio("She won't accept the offer.")}
                            className="text-rose-700 hover:text-rose-900 p-0.5 rounded hover:bg-rose-100 transition-colors"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-rose-800/80 text-[11px] mt-0.5">
                          Cô ấy sẽ không chấp nhận lời đề nghị đó đâu.
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-rose-50/60 border border-rose-100/80 flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-rose-950 flex items-center gap-1.5">
                          <span>We won't be late.</span>
                          <button
                            onClick={() => playAudio("We won't be late.")}
                            className="text-rose-700 hover:text-rose-900 p-0.5 rounded hover:bg-rose-100 transition-colors"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-rose-800/80 text-[11px] mt-0.5">
                          Chúng tôi sẽ không đến muộn đâu. (Động từ be nguyên thể)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nghi vấn */}
                <div>
                  <div className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold">
                      ?
                    </span>
                    <span>Cấu Trúc Nghi Vấn (?)</span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-2xs space-y-2">
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 font-mono">
                      <span className="text-blue-600 font-bold">Will</span> +{' '}
                      <span className="text-indigo-600 font-bold">S</span> +{' '}
                      <span className="text-teal-600 font-bold">V (nguyên thể / V-bare)</span>?
                    </div>
                    <div className="text-xs text-slate-600 pt-1 border-t border-slate-100 font-mono">
                      <span className="text-emerald-700 font-bold">Yes, S + will.</span>
                      <span className="mx-2 text-slate-300">|</span>
                      <span className="text-rose-700 font-bold">No, S + won't.</span>
                    </div>
                  </div>

                  <div className="mt-3 text-xs">
                    <div className="p-2.5 rounded-lg bg-blue-50/60 border border-blue-100/80">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-blue-950">
                          Will you come to the party?
                        </span>
                        <button
                          onClick={() => playAudio('Will you come to the party? Yes, I will.')}
                          className="text-blue-700 hover:text-blue-900 p-0.5 rounded hover:bg-blue-100 transition-colors"
                          title="Nghe phát âm"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-blue-800/80 text-[11px] mt-0.5">
                        → Yes, I will. / No, I won't. (Bạn sẽ đến bữa tiệc chứ?)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Cấu trúc thay thế với "Shall" & Bản chất động từ khuyết thiếu */}
              <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-violet-500"></span>
                      <h4 className="text-base font-bold text-slate-900">
                        2. Cấu Trúc Thay Thế Với "Shall" & Văn Phong
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-violet-100 text-violet-800 font-semibold">
                      Shall I / Shall we...?
                    </span>
                  </div>

                  {/* Chi tiết về Shall */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
                      <div className="flex items-center gap-2 text-violet-900 font-bold text-xs">
                        <Compass className="w-4 h-4 text-violet-600" />
                        <span>QUY TẮC SỬ DỤNG "SHALL" TRONG TIẾNG ANH</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Trong tiếng Anh truyền thống và văn phong trang trọng, <strong>Shall</strong> chỉ được sử dụng với hai ngôi duy nhất là <strong>I</strong> và <strong>We</strong>.
                      </p>
                      <div className="p-2.5 rounded-lg bg-violet-50 border border-violet-100 text-[11px] text-violet-900">
                        ⚡ <strong>Lưu ý hiện đại:</strong> Trong tiếng Anh giao tiếp hiện nay, người bản xứ hầu như dùng <strong>will</strong> cho tất cả các ngôi trong câu trần thuật. Tuy nhiên, <strong>Shall</strong> vẫn giữ vị trí độc tôn trong 2 trường hợp câu hỏi đặc biệt sau:
                      </div>
                    </div>

                    {/* 2 trường hợp câu hỏi với Shall */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {/* Đề nghị giúp đỡ */}
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                        <div className="font-bold text-slate-900 flex items-center justify-between">
                          <span>1. Đề nghị giúp đỡ (Offer)</span>
                          <button
                            onClick={() => playAudio('Shall I open the window for you?')}
                            className="text-violet-600 hover:text-violet-900 p-0.5 rounded"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="font-mono text-[11.5px] text-violet-700 font-semibold">
                          "Shall I open the window?"
                        </div>
                        <div className="text-[11px] text-slate-500">
                          (Tôi mở cửa sổ giúp bạn nhé?)
                        </div>
                      </div>

                      {/* Lời rủ rê, gợi ý */}
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                        <div className="font-bold text-slate-900 flex items-center justify-between">
                          <span>2. Lời rủ rê (Suggestion)</span>
                          <button
                            onClick={() => playAudio('Shall we dance together tonight?')}
                            className="text-violet-600 hover:text-violet-900 p-0.5 rounded"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="font-mono text-[11.5px] text-violet-700 font-semibold">
                          "Shall we dance?"
                        </div>
                        <div className="text-[11px] text-slate-500">
                          (Chúng mình khiêu vũ nhé? = Let's dance)
                        </div>
                      </div>
                    </div>

                    {/* Bản chất trợ động từ khuyết thiếu */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200/80 space-y-2">
                      <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs">
                        <Zap className="w-4 h-4 text-indigo-600" />
                        <span>BẢN CHẤT CỦA "WILL" — MODAL AUXILIARY VERB</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        <strong>Will</strong> thực chất là một trợ động từ khuyết thiếu (Modal verb). Vì vậy nó tuân theo nguyên tắc thép:
                      </p>
                      <div className="bg-white p-2.5 rounded-lg border border-indigo-100 text-xs font-semibold text-indigo-950 font-mono text-center">
                        WILL + V (nguyên thể không 'to' / V-bare)
                      </div>
                      <div className="text-[11px] text-slate-600">
                        Động từ theo sau Will không bao giờ chia ngôi số ít, không thêm <em>-s/-es</em>, không chia quá khứ <em>V2</em>, và không thêm <em>-ing</em>!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Cấu trúc */}
            <div className="rounded-2xl border-2 border-rose-300 bg-rose-50/70 p-5 sm:p-6 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-rose-500 text-white shrink-0 mt-0.5">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div className="space-y-3 w-full">
                  <div>
                    <h5 className="text-sm font-bold text-rose-950 uppercase tracking-wide">
                      CẢNH BÁO LỖI SAI THƯỜNG GẶP (STRUCTURE MISTAKES)
                    </h5>
                    <p className="text-xs text-rose-900/90 mt-0.5">
                      2 lỗi ngữ pháp ngớ ngẩn làm mất điểm trắc nghiệm nhanh nhất của người học:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                    {/* Lỗi 1: Chia động từ sau will */}
                    <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-2xs space-y-2">
                      <div className="font-bold text-rose-900 flex items-center gap-1.5">
                        <X className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>1. Chia động từ chính sau Will / Won't</span>
                      </div>
                      <div className="text-[11px] text-slate-600 leading-relaxed">
                        Thói quen thấy chủ ngữ số ít (<em>He, She, It</em>) rồi vội vàng thêm <em>-s/-es</em> vào động từ sau will, hoặc dùng V2/V-ing sau won't.
                      </div>
                      <div className="font-mono text-[11px] p-2 rounded bg-rose-50 text-rose-900 space-y-1">
                        <div>❌ <strong>Sai:</strong> He will <span className="underline">works</span> hard. / She won't <span className="underline">went</span>.</div>
                        <div className="text-emerald-700 font-semibold">✔ <strong>Đúng:</strong> He will <strong>work</strong> hard. / She won't <strong>go</strong>.</div>
                      </div>
                    </div>

                    {/* Lỗi 2: Dùng nhầm will với To Be ở dạng chia */}
                    <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-2xs space-y-2">
                      <div className="font-bold text-rose-900 flex items-center gap-1.5">
                        <X className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>2. Dùng nhầm Will với To Be ở dạng chia (is/am/are)</span>
                      </div>
                      <div className="text-[11px] text-slate-600 leading-relaxed">
                        Học sinh dịch xuôi từ tiếng Việt <em>"Anh ấy sẽ là/thì vui"</em> và viết thành <code>will is</code> hoặc <code>will are</code>.
                      </div>
                      <div className="font-mono text-[11px] p-2 rounded bg-rose-50 text-rose-900 space-y-1">
                        <div>❌ <strong>Sai:</strong> He will <span className="underline">is</span> happy. / They will <span className="underline">are</span> here.</div>
                        <div className="text-emerald-700 font-semibold">✔ <strong>Đúng:</strong> He will <strong>be</strong> happy. / They will <strong>be</strong> here.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: CÁC CÁCH DÙNG MỞ RỘNG (Khối nâng cao - Chuyên đề thi) */}
        {/* ========================================================================= */}
        {activeTab === 'tab2' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Accordion 1: Quyết định bộc phát tại thời điểm nói */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item1')}
                className="w-full p-5 text-left flex items-center justify-between bg-slate-50 hover:bg-slate-100/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs">
                    01
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      1. Quyết định bộc phát tại thời điểm nói (Spontaneous Decisions)
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Quyết định tức thì ngay khi nói — Không hề có kế hoạch hay chuẩn bị từ trước
                    </p>
                  </div>
                </div>
                {accordionOpen.item1 ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>

              {accordionOpen.item1 && (
                <div className="p-6 border-t border-slate-200 space-y-4 text-xs sm:text-sm">
                  <p className="text-slate-700 leading-relaxed">
                    Dùng khi người nói nảy ra ý định và đưa ra quyết định thực hiện một hành động nào đó <strong>ngay tại thời điểm phát ngôn</strong>, hoàn toàn do tình huống thực tế thôi thúc chứ không hề có toan tính trước.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                    <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-blue-950 text-xs">Trời đổ mưa bất chợt</span>
                        <button
                          onClick={() => playAudio("It's starting to rain. I will take an umbrella.")}
                          className="p-1 rounded text-blue-700 hover:bg-blue-200/60"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="font-mono text-[11px] text-blue-900">
                        "It's starting to rain.<br/>
                        I <strong>will take</strong> an umbrella."
                      </div>
                      <div className="text-[11px] text-slate-600">
                        Thấy trời mưa thì quyết định lấy ô ngay lập tức.
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-blue-950 text-xs">Chuông điện thoại reo</span>
                        <button
                          onClick={() => playAudio("The phone is ringing. I'll get it.")}
                          className="p-1 rounded text-blue-700 hover:bg-blue-200/60"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="font-mono text-[11px] text-blue-900">
                        "The phone is ringing.<br/>
                        I<strong>'ll get</strong> it!"
                      </div>
                      <div className="text-[11px] text-slate-600">
                        Chuông reo bất ngờ nên đứng lên nghe máy tức thì.
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-blue-950 text-xs">Cảm thấy đói bụng</span>
                        <button
                          onClick={() => playAudio("I'm so hungry. I will make a sandwich.")}
                          className="p-1 rounded text-blue-700 hover:bg-blue-200/60"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="font-mono text-[11px] text-blue-900">
                        "I'm so hungry.<br/>
                        I <strong>will make</strong> a sandwich."
                      </div>
                      <div className="text-[11px] text-slate-600">
                        Đói bụng bất chợt nên quyết định làm bánh mì ăn.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: Dự đoán không có căn cứ (Predictions without evidence) */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item2')}
                className="w-full p-5 text-left flex items-center justify-between bg-slate-50 hover:bg-slate-100/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-xs">
                    02
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      2. Dự đoán không có căn cứ, dựa vào quan điểm cá nhân (Predictions)
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Dự đoán cảm tính, niềm tin, suy nghĩ chủ quan (đi kèm think, believe, perhaps, probably...)
                    </p>
                  </div>
                </div>
                {accordionOpen.item2 ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>

              {accordionOpen.item2 && (
                <div className="p-6 border-t border-slate-200 space-y-4 text-xs sm:text-sm">
                  <p className="text-slate-700 leading-relaxed">
                    Dùng để đưa ra phán đoán, linh cảm về những điều sẽ xảy ra trong tương lai nhưng <strong>chưa có bằng chứng xác thực trước mắt</strong>. Thường bắt đầu bằng các động từ bày tỏ ý kiến chủ quan:
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 font-semibold">I think</span>
                    <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 font-semibold">I believe</span>
                    <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 font-semibold">I suppose</span>
                    <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 font-semibold">I'm sure</span>
                    <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 font-semibold">Perhaps / Maybe</span>
                    <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 font-semibold">Probably</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200/80 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-purple-950 font-bold text-xs">
                          "I think he will win the competition."
                        </span>
                        <button
                          onClick={() => playAudio('I think he will win the competition.')}
                          className="p-1 rounded text-purple-700 hover:bg-purple-200/60"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] text-slate-600">
                        → Tôi nghĩ là anh ấy sẽ thắng cuộc thi. (Ý kiến cảm quan cá nhân, cuộc thi chưa diễn ra và chưa có kết quả)
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200/80 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-purple-950 font-bold text-xs">
                          "People will live on Mars in the future."
                        </span>
                        <button
                          onClick={() => playAudio('People will live on Mars in the future.')}
                          className="p-1 rounded text-purple-700 hover:bg-purple-200/60"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] text-slate-600">
                        → Con người sẽ sống trên sao Hỏa trong tương lai. (Dự đoán khoa học viễn tưởng lâu dài, không có bằng chứng hiện tại)
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 3: Lời hứa, lời đe dọa, lời đề nghị hoặc lời mời */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item3')}
                className="w-full p-5 text-left flex items-center justify-between bg-slate-50 hover:bg-slate-100/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs">
                    03
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      3. Lời hứa, lời đe dọa, lời đề nghị hoặc lời mời (Promises, Offers, Threats)
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Chức năng giao tiếp cốt lõi: Hứa hẹn, răn đe, mời chào hoặc đề xuất giúp đỡ
                    </p>
                  </div>
                </div>
                {accordionOpen.item3 ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>

              {accordionOpen.item3 && (
                <div className="p-6 border-t border-slate-200 space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {/* Lời hứa */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-bold text-emerald-800 text-xs uppercase tracking-wide">
                        Lời hứa (Promise)
                      </span>
                      <div className="font-mono text-[11px] text-slate-900">
                        "I <strong>will never do</strong> that again, I promise."
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Tôi hứa tôi sẽ không bao giờ làm như vậy nữa.
                      </div>
                    </div>

                    {/* Lời đề nghị giúp */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-bold text-blue-800 text-xs uppercase tracking-wide">
                        Lời đề nghị (Offer)
                      </span>
                      <div className="font-mono text-[11px] text-slate-900">
                        "I <strong>will carry</strong> that heavy suitcase for you."
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Để tôi xách chiếc vali nặng đó giúp bạn nhé.
                      </div>
                    </div>

                    {/* Lời đe dọa */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-bold text-rose-800 text-xs uppercase tracking-wide">
                        Lời đe dọa (Threat)
                      </span>
                      <div className="font-mono text-[11px] text-slate-900">
                        "Stop talking or I <strong>will tell</strong> the teacher!"
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Im lặng đi nếu không tôi sẽ mách cô giáo đấy!
                      </div>
                    </div>

                    {/* Lời mời */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-bold text-amber-800 text-xs uppercase tracking-wide">
                        Lời mời (Invitation)
                      </span>
                      <div className="font-mono text-[11px] text-slate-900">
                        "<strong>Will you have</strong> a cup of tea?"
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Bạn dùng một tách trà nhé?
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 4: Câu điều kiện loại 1 & Sự thật hiển nhiên */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item4')}
                className="w-full p-5 text-left flex items-center justify-between bg-slate-50 hover:bg-slate-100/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-teal-100 text-teal-800 font-bold flex items-center justify-center text-xs">
                    04
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      4. Mệnh đề chính trong Câu điều kiện loại 1 & Sự thật tự nhiên
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Kết quả có thể xảy ra ở tương lai nếu điều kiện được đáp ứng
                    </p>
                  </div>
                </div>
                {accordionOpen.item4 ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>

              {accordionOpen.item4 && (
                <div className="p-6 border-t border-slate-200 space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200/80 space-y-2">
                      <span className="font-bold text-teal-950 text-xs uppercase">
                        Câu điều kiện loại 1 (Conditional Type 1)
                      </span>
                      <div className="font-mono text-[11.5px] text-teal-900 font-semibold">
                        If + S + V(hiện tại đơn), S + <strong className="text-teal-700">will + V(bare)</strong>
                      </div>
                      <p className="text-xs text-slate-600">
                        Ví dụ: <em>"If it rains tomorrow, we <strong>will cancel</strong> the outdoor picnic."</em> (Nếu ngày mai trời mưa, chúng tôi sẽ hủy chuyến dã ngoại ngoài trời).
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200/80 space-y-2">
                      <span className="font-bold text-teal-950 text-xs uppercase">
                        Sự thật tự nhiên hiển nhiên theo thời gian
                      </span>
                      <div className="font-mono text-[11.5px] text-teal-900 font-semibold">
                        S + will be + Tuổi / Thời gian
                      </div>
                      <p className="text-xs text-slate-600">
                        Ví dụ: <em>"He <strong>will be</strong> 20 next week."</em> / <em>"Tomorrow <strong>will be</strong> Monday."</em> (Tuổi tác và quy luật thứ ngày tự nhiên chắc chắn xảy ra).
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Nâng cao: So sánh Will vs Be Going To */}
            <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/70 p-5 sm:p-6 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-500 text-white shrink-0 mt-0.5">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div className="space-y-3 w-full">
                  <div>
                    <h5 className="text-sm font-bold text-amber-950 uppercase tracking-wide">
                      CẢNH BÁO BẪY KINH ĐIỂN: PHÂN BIỆT "WILL" VS "BE GOING TO"
                    </h5>
                    <p className="text-xs text-amber-900/90 mt-0.5">
                      Bảng so sánh sống còn giúp bạn không bao giờ chọn nhầm hai thì này trong đề thi:
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden border border-amber-200 shadow-2xs">
                      <thead>
                        <tr className="bg-amber-100/70 text-amber-950 text-xs border-b border-amber-200">
                          <th className="p-3 font-bold w-1/4">Tiêu chí so sánh</th>
                          <th className="p-3 font-bold text-indigo-700 w-[37.5%]">
                            TƯƠNG LAI ĐƠN (WILL)
                          </th>
                          <th className="p-3 font-bold text-blue-700 w-[37.5%]">
                            TƯƠNG LAI GẦN (BE GOING TO)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs">
                        <tr>
                          <td className="p-3 font-bold text-slate-900 bg-slate-50/50">
                            1. Thời điểm quyết định
                          </td>
                          <td className="p-3 text-slate-800">
                            <span className="font-bold text-indigo-800">BỘC PHÁT NGAY LÚC NÓI</span>
                            <div className="text-[11px] text-slate-500 mt-0.5">
                              Chưa hề có kế hoạch trước.<br/>
                              <em>"I'm thirsty. I'll drink some water."</em>
                            </div>
                          </td>
                          <td className="p-3 text-slate-800">
                            <span className="font-bold text-blue-800">ĐÃ LÊN KẾ HOẠCH TỪ TRƯỚC</span>
                            <div className="text-[11px] text-slate-500 mt-0.5">
                              Đã chuẩn bị hoặc có ý định sẵn.<br/>
                              <em>"I'm going to visit Paris next month."</em>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td className="p-3 font-bold text-slate-900 bg-slate-50/50">
                            2. Cơ sở dự đoán
                          </td>
                          <td className="p-3 text-slate-800">
                            <span className="font-bold text-indigo-800">CẢM TÍNH / QUAN ĐIỂM</span>
                            <div className="text-[11px] text-slate-500 mt-0.5">
                              Không có bằng chứng thực tế tại hiện tại.<br/>
                              <em>"I think it will rain someday."</em>
                            </div>
                          </td>
                          <td className="p-3 text-slate-800">
                            <span className="font-bold text-blue-800">CÓ BẰNG CHỨNG CỤ THỂ Ở HIỆN TẠI</span>
                            <div className="text-[11px] text-slate-500 mt-0.5">
                              Mắt thấy tai nghe rõ ràng.<br/>
                              <em>"Look at those dark clouds! It is going to rain."</em>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: TỪ NHẬN BIẾT & DẤU HIỆU ĐẶC BIỆT (Khối kỹ năng bổ trợ) */}
        {/* ========================================================================= */}
        {activeTab === 'tab3' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Phân vùng 2 khối: Trạng từ thời gian & Cụm từ quan điểm */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Khối 1: Trạng từ và cụm từ chỉ thời gian tương lai */}
              <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 shadow-2xs">
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    <h4 className="text-base font-bold text-slate-900">
                      1. Trạng Từ & Cụm Từ Chỉ Thời Gian Tương Lai
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded font-semibold">
                    Time Signals
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
                    <div className="font-bold text-indigo-900 flex items-center justify-between">
                      <span>• tomorrow / tonight</span>
                      <span className="text-[11px] text-slate-500">ngày mai / tối nay</span>
                    </div>
                    <div className="font-mono text-[11px] text-slate-700">
                      "I will call you <strong>tomorrow</strong> morning."
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
                    <div className="font-bold text-indigo-900 flex items-center justify-between">
                      <span>• next + [khoảng thời gian]</span>
                      <span className="text-[11px] text-slate-500">tuần tới / tháng tới / năm tới</span>
                    </div>
                    <div className="font-mono text-[11px] text-slate-700">
                      next week, next month, next year, next summer...
                    </div>
                    <div className="font-mono text-[11px] text-indigo-800">
                      "They will graduate <strong>next year</strong>."
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
                    <div className="font-bold text-indigo-900 flex items-center justify-between">
                      <span>• in + [khoảng thời gian trong tương lai]</span>
                      <span className="text-[11px] text-slate-500">trong vòng ... nữa</span>
                    </div>
                    <div className="font-mono text-[11px] text-slate-700">
                      in 5 minutes, in 2 hours, in 2030, in three days...
                    </div>
                    <div className="font-mono text-[11px] text-indigo-800">
                      "The train will arrive <strong>in 10 minutes</strong>."
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
                    <div className="font-bold text-indigo-900 flex items-center justify-between">
                      <span>• soon, someday, in the near future</span>
                      <span className="text-[11px] text-slate-500">chẳng bao lâu / một ngày nào đó</span>
                    </div>
                    <div className="font-mono text-[11px] text-indigo-800">
                      "We will meet again <strong>soon</strong>."
                    </div>
                  </div>
                </div>
              </div>

              {/* Khối 2: Các từ/cụm từ chỉ quan điểm dự đoán */}
              <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 shadow-2xs">
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-violet-600" />
                    <h4 className="text-base font-bold text-slate-900">
                      2. Cụm Từ Chỉ Quan Điểm & Nhận Định Dự Đoán
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-violet-700 bg-violet-100 px-2 py-0.5 rounded font-semibold">
                    Opinion Signals
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <p className="text-slate-600 leading-relaxed">
                    Khi nhìn thấy các động từ và phó từ chỉ ý kiến chủ quan này trong câu trắc nghiệm, thì <strong>Tương lai đơn (Will + V-bare)</strong> luôn là ưu tiên hàng đầu:
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-violet-950 font-bold">
                      I think (tôi nghĩ)
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-violet-950 font-bold">
                      I believe (tôi tin rằng)
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-violet-950 font-bold">
                      I suppose (tôi cho là)
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-violet-950 font-bold">
                      I'm sure (tôi chắc rằng)
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-violet-950 font-bold">
                      Perhaps / Maybe (có lẽ)
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-violet-950 font-bold">
                      Probably (có thể, có khả năng)
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-violet-50/70 border border-violet-200 text-xs space-y-1.5">
                    <div className="font-bold text-violet-950 flex items-center justify-between">
                      <span>Ví dụ thực tế:</span>
                      <button
                        onClick={() => playAudio('She will probably pass the exam.')}
                        className="text-violet-700 hover:text-violet-900 p-0.5 rounded"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="font-mono text-violet-900 font-semibold text-[11.5px]">
                      "She <strong>will probably pass</strong> the exam."
                    </div>
                    <div className="text-[11px] text-slate-600">
                      → Cô ấy có lẽ sẽ vượt qua kỳ thi thôi. (Vị trí của phó từ <em>probably</em> đứng ngay sau <em>will</em>)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Bẫy Mệnh đề thời gian & Điều kiện loại 1 */}
            <div className="rounded-2xl border-2 border-indigo-300 bg-indigo-50/70 p-5 sm:p-6 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-indigo-600 text-white shrink-0 mt-0.5">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div className="space-y-3 w-full">
                  <div>
                    <h5 className="text-sm font-bold text-indigo-950 uppercase tracking-wide">
                      CẢNH BÁO BẪY SỐ 1 ĐỀ THI VÀO 10 & THPTQG: MỆNH ĐỀ THỜI GIAN & ĐIỀU KIỆN
                    </h5>
                    <p className="text-xs text-indigo-900/90 mt-0.5">
                      Quy tắc vàng: <strong>TUYỆT ĐỐI KHÔNG DÙNG "WILL" SAU CÁC LIÊN TỪ CHỈ THỜI GIAN HOẶC IF!</strong>
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-indigo-200 shadow-2xs space-y-3 text-xs">
                    <p className="text-slate-700 leading-relaxed">
                      Trong các câu có chứa liên từ chỉ thời gian (<strong>when, as soon as, until, before, after, while</strong>) hoặc trong mệnh đề điều kiện của <strong>If / Unless</strong>, mặc dù hành động sẽ diễn ra trong tương lai nhưng mệnh đề phụ chứa liên từ <strong>BẮT BUỘC PHẢI LÙI VỀ THÌ HIỆN TẠI ĐƠN</strong>!
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-[11px]">
                      {/* Bẫy If */}
                      <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 space-y-1">
                        <div className="text-rose-800">❌ <strong>SAI:</strong> If it <span className="underline font-bold">will rain</span>, I will stay home.</div>
                        <div className="text-emerald-800 font-bold">✔ <strong>ĐÚNG:</strong> If it <strong>rains</strong>, I will stay home.</div>
                      </div>

                      {/* Bẫy When / As soon as */}
                      <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 space-y-1">
                        <div className="text-rose-800">❌ <strong>SAI:</strong> I will call you when I <span className="underline font-bold">will arrive</span>.</div>
                        <div className="text-emerald-800 font-bold">✔ <strong>ĐÚNG:</strong> I will call you when I <strong>arrive</strong>.</div>
                      </div>
                    </div>

                    <div className="text-[11.5px] text-indigo-900 bg-indigo-50 p-2.5 rounded-lg border border-indigo-100 font-semibold flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span>Công thức khắc cốt ghi tâm: <code>When / As soon as / If + S + V(hiện tại đơn), S + will + V(bare)</code></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
