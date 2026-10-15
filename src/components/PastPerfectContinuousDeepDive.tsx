import React, { useState } from 'react';
import { BookOpen, Sparkles, Volume2, AlertTriangle, Play, ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import { playAudio } from '../utils/audio';

interface PastPerfectContinuousDeepDiveProps {
  onStartPractice?: () => void;
}

export const PastPerfectContinuousDeepDive: React.FC<PastPerfectContinuousDeepDiveProps> = ({ onStartPractice }) => {
  const [activeTab, setActiveTab] = useState<'tab1' | 'tab2' | 'tab3'>('tab1');

  // Accordion state for Tab 2
  const [accordionOpen, setAccordionOpen] = useState<{ [key: string]: boolean }>({
    item1: true,
    item2: true,
  });

  const toggleAccordion = (key: string) => {
    setAccordionOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mt-8 transition-all">
      {/* Header Banner: Past Perfect Continuous Masterclass */}
      <div className="bg-gradient-to-r from-red-700 via-rose-800 to-amber-800 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-red-100 text-xs font-semibold mb-2 backdrop-blur-md border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Chuyên Đề Trọng Điểm</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
              PAST PERFECT CONTINUOUS MASTERCLASS
            </h3>
            <p className="text-xs sm:text-sm text-red-100/90 mt-1 max-w-2xl leading-relaxed">
              Mô-đun học tập toàn diện thì Quá khứ hoàn thành tiếp diễn: Cấu trúc Had been + V-ing, chuyên đề hành động kéo dài liên tục, giải thích hệ quả để lại trong quá khứ & phân biệt sâu sắc với Quá khứ hoàn thành đơn.
            </p>
          </div>

          {onStartPractice && (
            <button
              onClick={onStartPractice}
              className="px-5 py-3 bg-white text-red-950 rounded-xl text-xs font-bold hover:bg-red-50 active:scale-95 transition-all shadow-sm flex items-center gap-2 whitespace-nowrap self-start md:self-auto shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Luyện 8 câu phản xạ QK HT tiếp diễn</span>
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
              ? 'border-red-600 text-red-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <BookOpen className="w-4 h-4 text-red-600" />
          <span>TAB 1: CÔNG THỨC CHI TIẾT 3 DẠNG</span>
        </button>

        <button
          onClick={() => setActiveTab('tab2')}
          className={`px-6 py-4 whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'tab2'
              ? 'border-red-600 text-red-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <Sparkles className="w-4 h-4 text-red-600" />
          <span>TAB 2: CÁC CÁCH DÙNG MỞ RỘNG</span>
        </button>

        <button
          onClick={() => setActiveTab('tab3')}
          className={`px-6 py-4 whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'tab3'
              ? 'border-red-600 text-red-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <Volume2 className="w-4 h-4 text-red-600" />
          <span>TAB 3: TỪ NHẬN BIẾT & DẤU HIỆU ĐẶC BIỆT</span>
        </button>
      </div>

      {/* NỘI DUNG TỪNG TAB */}
      <div className="p-6 sm:p-8">
        {/* ======================================================== */}
        {/* TAB 1: CÔNG THỨC CHI TIẾT 3 DẠNG                          */}
        {/* ======================================================== */}
        {activeTab === 'tab1' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Phân vùng cấu trúc 2 Cards: Trợ động từ Had been và Nguyên tắc cốt lõi */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card 1: Cấu trúc 3 dạng câu */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-red-600" />
                    1. Cấu trúc 3 dạng câu (Khẳng định - Phủ định - Nghi vấn)
                  </h4>
                  <span className="text-[11px] font-mono bg-red-50 text-red-800 border border-red-200 px-2 py-0.5 rounded-md font-semibold">
                    had been + V-ing
                  </span>
                </div>

                {/* Ghi chú áp dụng chung cho mọi ngôi */}
                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 border border-slate-200 space-y-1">
                  <div>
                    • <strong>Đặc quyền đơn giản:</strong> Áp dụng chung cho <strong>tất cả các ngôi</strong> (I / You / We / They / He / She / It / Danh từ số ít / Danh từ số nhiều đều đi với <strong>had been</strong>).
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Khẳng định */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 text-emerald-950 border border-emerald-100">
                    <div className="font-bold text-emerald-900 flex items-center justify-between">
                      <span>(+) Khẳng định</span>
                      <span className="font-mono text-xs bg-emerald-100/80 px-2 py-0.5 rounded text-emerald-900 font-semibold">
                        S + had been + V-ing
                      </span>
                    </div>
                    <div className="text-xs text-emerald-900/90 mt-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>• She <strong>had been working</strong> for 3 hours before her boss arrived.</span>
                        <button onClick={() => playAudio("She had been working for three hours before her boss arrived")} className="text-emerald-700 hover:text-emerald-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• They <strong>had been playing</strong> football all morning.</span>
                        <button onClick={() => playAudio("They had been playing football all morning")} className="text-emerald-700 hover:text-emerald-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Phủ định */}
                  <div className="p-3.5 rounded-xl bg-rose-50/70 text-rose-950 border border-rose-100">
                    <div className="font-bold text-rose-900 flex items-center justify-between">
                      <span>(-) Phủ định</span>
                      <span className="font-mono text-xs bg-rose-100/80 px-2 py-0.5 rounded text-rose-900 font-semibold">
                        S + had not (hadn't) + been + V-ing
                      </span>
                    </div>
                    <div className="text-xs text-rose-900/90 mt-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>• She <strong>hadn't been working</strong> long when the meeting started.</span>
                        <button onClick={() => playAudio("She hadn't been working long when the meeting started")} className="text-rose-700 hover:text-rose-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• They <strong>hadn't been waiting</strong> for too long.</span>
                        <button onClick={() => playAudio("They hadn't been waiting for too long")} className="text-rose-700 hover:text-rose-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Nghi vấn */}
                  <div className="p-3.5 rounded-xl bg-blue-50/70 text-blue-950 border border-blue-100">
                    <div className="font-bold text-blue-900 flex items-center justify-between">
                      <span>(?) Nghi vấn</span>
                      <span className="font-mono text-xs bg-blue-100/80 px-2 py-0.5 rounded text-blue-900 font-semibold">
                        Had + S + been + V-ing?
                      </span>
                    </div>
                    <div className="text-[11px] text-blue-800 font-medium mt-1">
                      Trả lời: Yes, S + had. / No, S + hadn't.
                    </div>
                    <div className="text-xs text-blue-950 mt-2 flex items-center justify-between">
                      <span>• <strong>Had</strong> you <strong>been sleeping</strong> before I called? ➔ Yes, I had / No, I hadn't.</span>
                      <button onClick={() => playAudio("Had you been sleeping before I called? Yes, I had")} className="text-blue-700 hover:text-blue-900 p-1">
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Nguyên tắc cốt lõi & Bản chất kết hợp */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    2. Nguyên tắc cốt lõi & Bản chất thì
                  </h4>
                  <span className="text-[11px] font-mono bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-md font-semibold">
                    Core Concept
                  </span>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900">
                      Sự kết hợp hoàn hảo giữa 2 tính chất:
                    </div>
                    <div className="mt-2 space-y-2 text-slate-700 leading-relaxed font-sans">
                      <div className="flex items-start gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 font-bold text-[11px] shrink-0">Hoàn thành</span>
                        <span>Nhấn mạnh hành động bắt đầu trước một mốc hoặc hành động khác trong quá khứ.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[11px] shrink-0">Tiếp diễn</span>
                        <span>Nhấn mạnh tính <strong>liên tục không ngắt quãng</strong> và <strong>độ dài thời gian (duration)</strong> của hành động.</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-950">
                    <div className="font-bold text-amber-900 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      Mẹo hình dung trực quan:
                    </div>
                    <p className="mt-1 text-slate-700 text-xs leading-relaxed">
                      Hãy tưởng tượng một cuốn phim quay chậm chiếu lại quá trình ai đó làm việc liên tục suốt nhiều giờ đồng hồ ngay trước khi một sự kiện khác xảy đến.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Cấu trúc */}
            <div className="p-5 rounded-2xl bg-red-50/80 border-2 border-red-300/80 text-red-950 space-y-3">
              <div className="flex items-center gap-2 text-red-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Cấu trúc</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Thiếu từ "been":</strong> Học sinh hay viết nhầm thành <em>"She had working"</em> giống như công thức của Quá khứ hoàn thành đơn thuần.<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Bắt buộc phải có cả 3 thành phần <strong>had been + V-ing</strong>: <strong>She had been working</strong>.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Chia sai trợ động từ theo chủ ngữ:</strong> Cố gắng đổi <em>had</em> thành <em>has/have been</em> theo ngôi số ít / số nhiều.<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Luôn dùng duy nhất <strong>had been</strong> cho mọi chủ ngữ: <strong>He had been sleeping</strong>, <strong>They had been waiting</strong>.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: CÁC CÁCH DÙNG MỞ RỘNG (ACCORDION DẠNG MỞ RỘNG)     */}
        {/* ======================================================== */}
        {activeTab === 'tab2' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="text-xs text-slate-500 mb-2">
              Khối kiến thức chuyên sâu nâng cao dành cho bài thi phân biệt thì và đề thi THPT / Học sinh giỏi:
            </div>

            {/* Accordion 1: Hành động diễn ra liên tục kéo dài trước một hành động khác trong quá khứ */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item1')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-red-100 text-red-800 flex items-center justify-center text-xs font-bold font-mono">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Hành động diễn ra liên tục kéo dài trước một hành động khác trong quá khứ
                    </h4>
                    <span className="text-[11px] text-slate-500">Nhấn mạnh tính liên tục và độ dài thời gian của quá trình</span>
                  </div>
                </div>
                {accordionOpen.item1 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item1 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Nhấn mạnh tính liên tục, kéo dài của một hành động đã và đang diễn ra trước một hành động khác trong quá khứ (hoặc trước một mốc thời gian trong quá khứ).
                  </p>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono space-y-1.5 text-slate-900">
                    <div>• S1 + had been + V-ing + <strong>before</strong> + S2 + V2/ed</div>
                    <div>• <strong>When</strong> + S2 + V2/ed, S1 + had been + V-ing</div>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ: "When she <strong>arrived</strong>, we <strong>had been waiting</strong> for over an hour."</span>
                      <button onClick={() => playAudio("When she arrived, we had been waiting for over an hour")} className="text-red-800 hover:text-red-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-xs text-slate-600 px-1">
                      💡 <em>Nhấn mạnh: Hành động chờ đợi đã diễn ra liên tục suốt hơn 1 tiếng đồng hồ trước khi cô ấy xuất hiện.</em>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: Hành động kéo dài để lại kết quả/hậu quả rõ rệt trong quá khứ */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item2')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-red-100 text-red-800 flex items-center justify-center text-xs font-bold font-mono">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Hành động kéo dài để lại kết quả / hậu quả rõ rệt trong quá khứ
                    </h4>
                    <span className="text-[11px] text-slate-500">Giải thích lý do cho một hiện tượng hoặc trạng thái quá khứ</span>
                  </div>
                </div>
                {accordionOpen.item2 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item2 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Giải thích lý do hoặc hậu quả của một hiện tượng xảy ra tại một thời điểm trong quá khứ nhờ vào quá trình diễn ra liên tục trước đó.
                  </p>
                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 1: "The ground was wet because it <strong>had been raining</strong> all night."</span>
                      <button onClick={() => playAudio("The ground was wet because it had been raining all night")} className="text-red-800 hover:text-red-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 2: "He was exhausted because he <strong>had been driving</strong> for eight hours."</span>
                      <button onClick={() => playAudio("He was exhausted because he had been driving for eight hours")} className="text-red-800 hover:text-red-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Nâng cao */}
            <div className="p-5 rounded-2xl bg-red-50/80 border-2 border-red-300/80 text-red-950 space-y-3 mt-4">
              <div className="flex items-center gap-2 text-red-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Nâng cao</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Nhầm lẫn giữa Quá khứ hoàn thành và Quá khứ hoàn thành tiếp diễn:</strong>
                    <div className="mt-1 space-y-1 text-slate-800 bg-white p-2.5 rounded-lg border border-red-200">
                      <div>• <strong>Quá khứ hoàn thành đơn:</strong> Nhấn mạnh <em>kết quả số lượng / hoàn tất</em> (ví dụ: <em>"He had read 3 books before bedtime"</em>).</div>
                      <div>• <strong>Quá khứ hoàn thành tiếp diễn:</strong> Nhấn mạnh <em>quá trình / độ dài thời gian</em> (ví dụ: <em>"He had been reading for 3 hours before bedtime"</em>).</div>
                    </div>
                    <span className="text-slate-600 block mt-1">
                      ⚠️ Học sinh thường dùng sai khi trong câu có chứa khoảng thời gian dài nhưng câu hỏi lại hướng về số lượng kết quả đã hoàn thành.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Dùng thì tiếp diễn với các Stative Verbs (Động từ chỉ trạng thái):</strong> Giống như các thì tiếp diễn khác, tuyệt đối không dùng Quá khứ hoàn thành tiếp diễn với các từ chỉ nhận thức, cảm xúc, sở hữu (như <em>know, want, belong, like, understand</em>).<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Bắt buộc lùi về Quá khứ hoàn thành đơn: <strong>"They had known each other for ten years"</strong> (tuyệt đối không viết <em>"had been knowing"</em>).
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: TỪ NHẬN BIẾT & DẤU HIỆU ĐẶC BIỆT                   */}
        {/* ======================================================== */}
        {activeTab === 'tab3' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Phân chia 2 khối: Cụm từ chỉ khoảng thời gian & Phân biệt nhanh dấu hiệu For vs By */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Khối 1: Dấu hiệu nhận biết trọng tâm */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-red-600" />
                    1. Dấu hiệu nhận biết trọng tâm
                  </h4>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-200">
                    <div className="font-bold text-red-950 font-mono text-xs sm:text-sm">
                      For + [khoảng thời gian] + before / by the time + [QK đơn]
                    </div>
                    <div className="text-slate-700 mt-1 font-sans">
                      • <em>for two hours before she arrived</em>, <em>for a long time by the time we started</em>...
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 font-mono text-xs sm:text-sm">
                      All + [khoảng thời gian trong quá khứ]
                    </div>
                    <div className="text-slate-600 mt-1 font-sans">
                      • <em>all day yesterday</em>, <em>all morning</em>, <em>all night</em> (nhấn mạnh tính liên tục không ngừng nghỉ suốt cả buổi).
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 font-mono text-xs sm:text-sm">
                      Since + [mốc thời gian quá khứ]
                    </div>
                    <div className="text-slate-600 mt-1 font-sans">
                      • <em>since 6 AM</em>, <em>since childhood</em> (khi câu kết hợp với ngữ cảnh sự kiện quá khứ).
                    </div>
                  </div>
                </div>
              </div>

              {/* Khối 2: Phân biệt nhanh dấu hiệu (For vs. By) */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-indigo-500" />
                    2. Phân biệt nhanh dấu hiệu (For vs. By)
                  </h4>
                  <span className="text-[11px] font-mono bg-indigo-50 text-indigo-800 border border-indigo-200 px-2 py-0.5 rounded-md font-semibold">
                    Quick Rule
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200">
                    <div className="font-bold text-indigo-950 font-mono text-xs sm:text-sm flex items-center justify-between">
                      <span>CÓ "FOR" HOẶC "ALL" ➔ ƯU TIÊN TIẾP DIỄN</span>
                    </div>
                    <div className="text-slate-700 mt-1 font-sans leading-relaxed">
                      Nếu câu có chứa <strong>khoảng thời gian dài</strong> đi kèm với từ <strong>for</strong> hoặc <strong>all</strong>, xu hướng cao câu đó sẽ ưu tiên dùng dạng tiếp diễn: <strong>had been + V-ing</strong> thay vì dạng đơn.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
                    <div className="font-bold text-amber-950 font-mono text-xs sm:text-sm flex items-center justify-between">
                      <span>CÓ "BY" HOẶC "ALREADY" ➔ ƯU TIÊN ĐƠN</span>
                    </div>
                    <div className="text-slate-700 mt-1 font-sans leading-relaxed">
                      Nếu câu đi với mốc thời gian chốt chặn (By 5 PM, by last night) hoặc từ chỉ hoàn tất (already, just), ưu tiên chia dạng <strong>had + V3/ed</strong>.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Nhận biết & Dấu hiệu */}
            <div className="p-5 rounded-2xl bg-red-50/80 border-2 border-red-300/80 text-red-950 space-y-3 mt-4">
              <div className="flex items-center gap-2 text-red-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Nhận biết & Dấu hiệu</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Quá phụ thuộc máy móc vào từ "Before" hoặc "By the time":</strong> Thấy <em>Before</em> hay <em>By the time</em>, học sinh thường tự động điền Quá khứ hoàn thành đơn mà quên kiểm tra câu có nhấn mạnh khoảng thời gian kéo dài liên tục hay không.<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Nếu thấy có thêm cụm thời lượng như <em>"for 2 hours"</em> hay <em>"all morning"</em> ➔ ưu tiên chọn <strong>Quá khứ hoàn thành tiếp diễn (had been + V-ing)</strong>.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
