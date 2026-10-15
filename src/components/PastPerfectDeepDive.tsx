import React, { useState } from 'react';
import { BookOpen, Sparkles, Volume2, AlertTriangle, Play, ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import { playAudio } from '../utils/audio';

interface PastPerfectDeepDiveProps {
  onStartPractice?: () => void;
}

export const PastPerfectDeepDive: React.FC<PastPerfectDeepDiveProps> = ({ onStartPractice }) => {
  const [activeTab, setActiveTab] = useState<'tab1' | 'tab2' | 'tab3'>('tab1');

  // Accordion state for Tab 2
  const [accordionOpen, setAccordionOpen] = useState<{ [key: string]: boolean }>({
    item1: true,
    item2: true,
    item3: true,
  });

  const toggleAccordion = (key: string) => {
    setAccordionOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mt-8 transition-all">
      {/* Header Banner: Past Perfect Masterclass */}
      <div className="bg-gradient-to-r from-rose-600 via-rose-700 to-red-800 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-rose-100 text-xs font-semibold mb-2 backdrop-blur-md border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-rose-200" />
              <span>Chuyên Đề Trọng Điểm</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
              PAST PERFECT MASTERCLASS
            </h3>
            <p className="text-xs sm:text-sm text-rose-100/90 mt-1 max-w-2xl leading-relaxed">
              Mô-đun học tập toàn diện thì Quá khứ hoàn thành: Cấu trúc Had + V3/ed, chuyên đề chuỗi thời gian (Before/After/By the time), câu điều kiện loại 3, đảo ngữ nâng cao & hệ thống cảnh báo bẫy đề thi.
            </p>
          </div>

          {onStartPractice && (
            <button
              onClick={onStartPractice}
              className="px-5 py-3 bg-white text-rose-950 rounded-xl text-xs font-bold hover:bg-rose-50 active:scale-95 transition-all shadow-sm flex items-center gap-2 whitespace-nowrap self-start md:self-auto shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Luyện 8 câu phản xạ QK hoàn thành</span>
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
              ? 'border-rose-600 text-rose-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <BookOpen className="w-4 h-4 text-rose-600" />
          <span>TAB 1: CÔNG THỨC CHI TIẾT 3 DẠNG</span>
        </button>

        <button
          onClick={() => setActiveTab('tab2')}
          className={`px-6 py-4 whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'tab2'
              ? 'border-rose-600 text-rose-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <Sparkles className="w-4 h-4 text-rose-600" />
          <span>TAB 2: CÁC CÁCH DÙNG MỞ RỘNG</span>
        </button>

        <button
          onClick={() => setActiveTab('tab3')}
          className={`px-6 py-4 whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'tab3'
              ? 'border-rose-600 text-rose-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <Volume2 className="w-4 h-4 text-rose-600" />
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
            {/* Phân vùng cấu trúc 2 Cards: Trợ động từ Had và Phân từ hai V3/ed */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card 1: Cấu trúc 3 dạng câu */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    1. Cấu trúc 3 dạng câu (Khẳng định - Phủ định - Nghi vấn)
                  </h4>
                  <span className="text-[11px] font-mono bg-rose-50 text-rose-800 border border-rose-200 px-2 py-0.5 rounded-md font-semibold">
                    had + V3/ed
                  </span>
                </div>

                {/* Ghi chú áp dụng chung cho mọi ngôi */}
                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 border border-slate-200 space-y-1">
                  <div>
                    • <strong>Đặc quyền đơn giản:</strong> Áp dụng chung cho <strong>tất cả các ngôi</strong> (I / You / We / They / He / She / It / Danh từ số ít / Danh từ số nhiều đều đi với <strong>had</strong>).
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Khẳng định */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 text-emerald-950 border border-emerald-100">
                    <div className="font-bold text-emerald-900 flex items-center justify-between">
                      <span>(+) Khẳng định</span>
                      <span className="font-mono text-xs bg-emerald-100/80 px-2 py-0.5 rounded text-emerald-900 font-semibold">
                        S + had + V3/ed
                      </span>
                    </div>
                    <div className="text-xs text-emerald-900/90 mt-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>• She <strong>had finished</strong> her homework before she went to bed.</span>
                        <button onClick={() => playAudio("She had finished her homework before she went to bed")} className="text-emerald-700 hover:text-emerald-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• They <strong>had left</strong> when I arrived.</span>
                        <button onClick={() => playAudio("They had left when I arrived")} className="text-emerald-700 hover:text-emerald-900 p-1">
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
                        S + had not (hadn't) + V3/ed
                      </span>
                    </div>
                    <div className="text-xs text-rose-900/90 mt-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>• She <strong>hadn't finished</strong> her homework.</span>
                        <button onClick={() => playAudio("She hadn't finished her homework")} className="text-rose-700 hover:text-rose-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• They <strong>hadn't left</strong> yet.</span>
                        <button onClick={() => playAudio("They hadn't left yet")} className="text-rose-700 hover:text-rose-900 p-1">
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
                        Had + S + V3/ed?
                      </span>
                    </div>
                    <div className="text-[11px] text-blue-800 font-medium mt-1">
                      Trả lời: Yes, S + had. / No, S + hadn't.
                    </div>
                    <div className="text-xs text-blue-950 mt-2 flex items-center justify-between">
                      <span>• <strong>Had</strong> you <strong>locked</strong> the door before you left? ➔ Yes, I had / No, I hadn't.</span>
                      <button onClick={() => playAudio("Had you locked the door before you left? Yes, I had")} className="text-blue-700 hover:text-blue-900 p-1">
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Cách phân biệt Động từ Quy tắc và Bất quy tắc ở dạng V3/ed */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-indigo-500" />
                    2. Cách phân biệt Động từ Quy tắc & Bất quy tắc (V3/ed)
                  </h4>
                  <span className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-semibold">
                    Past Participle
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Nhóm 1: Có quy tắc */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 flex items-center justify-between">
                      <span>Động từ quy tắc (Regular Verbs)</span>
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded">
                        Thêm đuôi -ed
                      </span>
                    </div>
                    <p className="text-slate-600 mt-1">
                      Thêm đuôi <em>-ed</em> tương tự như thì Quá khứ đơn (V2).
                    </p>
                    <div className="font-mono text-xs text-emerald-950 font-bold mt-1 bg-white p-2 rounded border border-slate-200 space-y-1">
                      <div>• work ➔ worked ➔ <strong>worked</strong></div>
                      <div>• visit ➔ visited ➔ <strong>visited</strong></div>
                      <div>• finish ➔ finished ➔ <strong>finished</strong></div>
                    </div>
                  </div>

                  {/* Nhóm 2: Bất quy tắc */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 flex items-center justify-between">
                      <span>Động từ bất quy tắc (Irregular Verbs)</span>
                      <span className="text-[11px] font-semibold text-rose-800 bg-rose-100/80 px-2 py-0.5 rounded">
                        Cột 3 Bảng BQT
                      </span>
                    </div>
                    <p className="text-slate-600 mt-1">
                      Sử dụng động từ ở Cột 3 (Past Participle) trong bảng động từ bất quy tắc.
                    </p>
                    <div className="font-mono text-xs text-rose-950 font-bold mt-1 bg-white p-2 rounded border border-slate-200 space-y-1">
                      <div>• go ➔ went ➔ <strong>gone</strong></div>
                      <div>• see ➔ saw ➔ <strong>seen</strong></div>
                      <div>• eat ➔ ate ➔ <strong>eaten</strong></div>
                      <div>• leave ➔ left ➔ <strong>left</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Cấu trúc */}
            <div className="p-5 rounded-2xl bg-rose-50/80 border-2 border-rose-300/80 text-rose-950 space-y-3">
              <div className="flex items-center gap-2 text-rose-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Cấu trúc</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Nhầm lẫn trợ động từ giữa các ngôi:</strong> Học sinh hay cố gắng chia <em>had</em> thành <em>has/have</em> theo chủ ngữ số ít / số nhiều (ví dụ viết sai thành <em>"He has finished"</em> khi kể chuyện quá khứ).<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Quá khứ hoàn thành chỉ dùng duy nhất <strong>had</strong> cho mọi chủ ngữ: <strong>He had finished</strong>, <strong>They had left</strong>.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Quên đổi động từ chính về dạng phân từ hai V3/ed:</strong> Dùng nhầm động từ nguyên thể hoặc V2 sau had (ví dụ viết sai: <em>"She had went"</em> hoặc <em>"She had see"</em>).<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Sau had bắt buộc dùng V3/ed: <strong>She had gone</strong>, <strong>She had seen</strong>.
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
              Khối kiến thức chuyên sâu nâng cao dành cho bài học phối hợp thì (Sequence of Tenses) và đề thi THPT / Học sinh giỏi:
            </div>

            {/* Accordion 1: Hành động xảy ra và hoàn tất trước một hành động khác trong quá khứ */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item1')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-rose-100 text-rose-800 flex items-center justify-center text-xs font-bold font-mono">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Hành động xảy ra và hoàn tất trước một hành động khác trong quá khứ
                    </h4>
                    <span className="text-[11px] text-slate-500">Quy tắc vàng phối hợp thì: Xảy ra trước chia QKHT, xảy ra sau chia QK đơn</span>
                  </div>
                </div>
                {accordionOpen.item1 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item1 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Diễn tả hai hành động cùng xảy ra trong quá khứ, hành động nào xảy ra TRƯỚC thì chia Quá khứ hoàn thành (had + V3/ed), hành động xảy ra SAU chia Quá khứ đơn (V2/ed).
                  </p>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono space-y-1.5 text-slate-900">
                    <div>• <strong>Before</strong> + S + V2/ed, S + had + V3/ed <em>(Trước khi... thì...)</em></div>
                    <div>• <strong>After</strong> + S + had + V3/ed, S + V2/ed <em>(Sau khi... thì...)</em></div>
                    <div>• <strong>By the time</strong> + S + V2/ed, S + had + V3/ed <em>(Vào lúc mà...)</em></div>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 1: "By the time we <strong>arrived</strong> at the station, the train <strong>had left</strong>."</span>
                      <button onClick={() => playAudio("By the time we arrived at the station, the train had left")} className="text-rose-800 hover:text-rose-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 2: "Before she <strong>went</strong> to sleep, she <strong>had locked</strong> all the doors."</span>
                      <button onClick={() => playAudio("Before she went to sleep, she had locked all the doors")} className="text-rose-800 hover:text-rose-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 3: "After he <strong>had finished</strong> his work, he <strong>went</strong> home."</span>
                      <button onClick={() => playAudio("After he had finished his work, he went home")} className="text-rose-800 hover:text-rose-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: Hành động xảy ra trước một mốc thời gian xác định trong quá khứ */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item2')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-rose-100 text-rose-800 flex items-center justify-center text-xs font-bold font-mono">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Hành động xảy ra trước một mốc thời gian xác định trong quá khứ
                    </h4>
                    <span className="text-[11px] text-slate-500">Hoàn tất tính đến thời điểm cụ thể trong quá khứ</span>
                  </div>
                </div>
                {accordionOpen.item2 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item2 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Nhấn mạnh sự hoàn thành của một sự việc tính đến một thời điểm cụ thể trong quá khứ.
                  </p>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono">
                    By + mốc thời gian trong quá khứ (e.g., 2010, last night), S + had + V3/ed
                  </div>
                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 1: "By 10 PM last night, she <strong>had completed</strong> her report."</span>
                      <button onClick={() => playAudio("By 10 PM last night, she had completed her report")} className="text-rose-800 hover:text-rose-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 2: "By 2015, they <strong>had lived</strong> in Hanoi for ten years."</span>
                      <button onClick={() => playAudio("By 2015, they had lived in Hanoi for ten years")} className="text-rose-800 hover:text-rose-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 3: Câu điều kiện loại 3 (Third Conditional) */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item3')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-rose-100 text-rose-800 flex items-center justify-center text-xs font-bold font-mono">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Câu điều kiện loại 3 (Third Conditional)
                    </h4>
                    <span className="text-[11px] text-slate-500">Giả định không có thật trong quá khứ (tiếc nuối / suy đoán)</span>
                  </div>
                </div>
                {accordionOpen.item3 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item3 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Diễn tả một giả định không có thật trong quá khứ (trái ngược hoàn toàn với thực tế đã xảy ra).
                  </p>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono">
                    If + S + had + V3/ed, S + would/could/might have + V3/ed
                  </div>
                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 1: "If I <strong>had known</strong> about the traffic, I <strong>would have taken</strong> another route."</span>
                      <button onClick={() => playAudio("If I had known about the traffic, I would have taken another route")} className="text-rose-800 hover:text-rose-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 2: "If they <strong>had studied</strong> harder, they <strong>would have passed</strong> the exam."</span>
                      <button onClick={() => playAudio("If they had studied harder, they would have passed the exam")} className="text-rose-800 hover:text-rose-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Nâng cao */}
            <div className="p-5 rounded-2xl bg-rose-50/80 border-2 border-rose-300/80 text-rose-950 space-y-3 mt-4">
              <div className="flex items-center gap-2 text-rose-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Nâng cao</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Lẫn lộn vị trí hành động trước/sau trong công thức Before/After:</strong> Học sinh hay nhớ nhầm mệnh đề đi với <em>Before</em> chia Quá khứ hoàn thành.<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: <strong>Before + Quá khứ đơn</strong>, vế còn lại mới chia Quá khứ hoàn thành (ngược lại: <strong>After + Quá khứ hoàn thành</strong>, vế còn lại chia Quá khứ đơn).
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Dùng nhầm Hiện tại hoàn thành thay vì Quá khứ hoàn thành:</strong> Khi gặp mốc thời gian trong quá khứ như <em>"by 2020"</em> hoặc <em>"by last night"</em>, học sinh hay dùng nhầm <em>has/have</em>.<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Mốc thời gian đã thuộc về quá khứ kết hợp với "By" bắt buộc dùng <strong>had + V3/ed</strong>: <em>"By 2020, they had bought a house."</em>
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
            {/* Phân chia 2 khối: Trạng từ/Giới từ & Cấu trúc đảo ngữ nâng cao */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Khối 1: Trạng từ và Giới từ nhận biết */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    1. Trạng từ và Giới từ nhận biết
                  </h4>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200">
                    <div className="font-bold text-rose-950 font-mono text-xs sm:text-sm">
                      By + mốc thời gian trong quá khứ
                    </div>
                    <div className="text-slate-700 mt-1 font-sans">
                      • by yesterday, by last week, by 2015, by the end of last year...
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 font-mono text-xs sm:text-sm">
                      By the time + mệnh đề Quá khứ đơn
                    </div>
                    <div className="text-slate-600 mt-1 font-sans">
                      • by the time we arrived, by the time she called...
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 font-mono text-xs sm:text-sm">
                      Các trạng từ tần suất trong ngữ cảnh quá khứ
                    </div>
                    <div className="text-slate-600 mt-1 font-sans">
                      • already, just, yet, before, after, ever, never (khi câu đã có một mốc sự kiện quá khứ làm căn cứ).
                    </div>
                  </div>
                </div>
              </div>

              {/* Khối 2: Cấu trúc đảo ngữ và liên từ nâng cao */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-indigo-500" />
                    2. Cấu trúc đảo ngữ & Liên từ nâng cao (Dành cho HSG)
                  </h4>
                  <span className="text-[11px] font-mono bg-indigo-50 text-indigo-800 border border-indigo-200 px-2 py-0.5 rounded-md font-semibold">
                    Inversion
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Cấu trúc Hardly / Scarcely */}
                  <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200">
                    <div className="font-bold text-indigo-950 font-mono text-xs sm:text-sm flex items-center justify-between">
                      <span>Hardly / Scarcely / Barely ... WHEN</span>
                      <span className="text-[10px] uppercase font-bold bg-indigo-200/80 text-indigo-900 px-2 py-0.5 rounded">
                        Ngay khi... thì...
                      </span>
                    </div>
                    <div className="font-mono text-xs text-indigo-950 font-semibold mt-1.5 bg-white p-2 rounded border border-indigo-100">
                      Hardly + had + S + V3/ed + WHEN + S + V2/ed
                    </div>
                    <div className="text-xs text-indigo-900/90 mt-1.5 flex items-center justify-between">
                      <span>• "Hardly <strong>had I opened</strong> the door <strong>when</strong> it started to rain."</span>
                      <button onClick={() => playAudio("Hardly had I opened the door when it started to rain")} className="text-indigo-700 hover:text-indigo-900 p-1">
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Cấu trúc No sooner */}
                  <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
                    <div className="font-bold text-amber-950 font-mono text-xs sm:text-sm flex items-center justify-between">
                      <span>No sooner ... THAN</span>
                      <span className="text-[10px] uppercase font-bold bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded">
                        Vừa mới... thì...
                      </span>
                    </div>
                    <div className="font-mono text-xs text-amber-950 font-semibold mt-1.5 bg-white p-2 rounded border border-amber-100">
                      No sooner + had + S + V3/ed + THAN + S + V2/ed
                    </div>
                    <div className="text-xs text-amber-900/90 mt-1.5 flex items-center justify-between">
                      <span>• "No sooner <strong>had he arrived</strong> <strong>than</strong> the show ended."</span>
                      <button onClick={() => playAudio("No sooner had he arrived than the show ended")} className="text-amber-700 hover:text-amber-900 p-1">
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Nhận biết & Đảo ngữ */}
            <div className="p-5 rounded-2xl bg-rose-50/80 border-2 border-rose-300/80 text-rose-950 space-y-3 mt-4">
              <div className="flex items-center gap-2 text-rose-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Nhận biết & Đảo ngữ</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Quên đảo ngữ trợ động từ "had" lên trước chủ ngữ:</strong> Học sinh hay viết thuận theo thói quen tiếng Việt là <em>"Hardly I had opened..."</em> hoặc <em>"No sooner he had arrived..."</em>.<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Bắt buộc đảo <strong>had</strong> lên trước chủ ngữ: <strong>Hardly had I...</strong>, <strong>No sooner had he...</strong>
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Dùng sai liên từ đi kèm (Bẫy kinh điển trong bài thi trắc nghiệm):</strong> Nhầm lẫn liên từ nối giữa <em>Hardly/Scarcely</em> và <em>No sooner</em>.<br />
                    <span className="text-slate-800 font-mono text-xs block mt-0.5">
                      💡 Mẹo khắc cốt ghi tâm: <strong>Hardly/Scarcely</strong> đi với <strong>WHEN</strong> | <strong>No sooner</strong> đi với <strong>THAN</strong> (so sánh hơn đi với Than).
                    </span>
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: <strong>Hardly ... when</strong> và <strong>No sooner ... than</strong>.
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
