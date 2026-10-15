import React, { useState } from 'react';
import { BookOpen, Sparkles, Volume2, AlertTriangle, Play, ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import { playAudio } from '../utils/audio';

interface PastSimpleDeepDiveProps {
  onStartPractice?: () => void;
}

export const PastSimpleDeepDive: React.FC<PastSimpleDeepDiveProps> = ({ onStartPractice }) => {
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
      {/* Header Banner: Past Simple Masterclass */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-orange-700 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-amber-100 text-xs font-semibold mb-2 backdrop-blur-md border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Chuyên Đề Trọng Điểm</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
              PAST SIMPLE MASTERCLASS
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/90 mt-1 max-w-2xl leading-relaxed">
              Mô-đun học tập toàn diện: Khối cấu trúc nền tảng, chuyên đề cách dùng nâng cao, quy tắc phát âm âm vị học và hệ thống cảnh báo bẫy đề thi.
            </p>
          </div>

          {onStartPractice && (
            <button
              onClick={onStartPractice}
              className="px-5 py-3 bg-white text-amber-900 rounded-xl text-xs font-bold hover:bg-amber-50 active:scale-95 transition-all shadow-sm flex items-center gap-2 whitespace-nowrap self-start md:self-auto shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Luyện 8 câu phản xạ QK đơn</span>
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
              ? 'border-amber-600 text-amber-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <BookOpen className="w-4 h-4 text-amber-600" />
          <span>TAB 1: CÔNG THỨC CHI TIẾT 3 DẠNG</span>
        </button>

        <button
          onClick={() => setActiveTab('tab2')}
          className={`px-6 py-4 whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'tab2'
              ? 'border-amber-600 text-amber-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>TAB 2: CÁC CÁCH DÙNG MỞ RỘNG</span>
        </button>

        <button
          onClick={() => setActiveTab('tab3')}
          className={`px-6 py-4 whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'tab3'
              ? 'border-amber-600 text-amber-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <Volume2 className="w-4 h-4 text-amber-600" />
          <span>TAB 3: TỪ NHẬN BIẾT & PHÁT ÂM</span>
        </button>
      </div>

      {/* NỘI DUNG TỪNG TAB */}
      <div className="p-6 sm:p-8">
        {/* ======================================================== */}
        {/* TAB 1: CÔNG THỨC CHI TIẾT 3 DẠNG                          */}
        {/* ======================================================== */}
        {activeTab === 'tab1' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Phân vùng 2 Cards: Động từ thường & To be */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card 1: Động từ thường */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-5 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    1. Động từ thường (Regular / Irregular Verbs)
                  </h4>
                  <span className="text-[11px] font-mono bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-md font-semibold">
                    V2 / V-ed
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Khẳng định */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 text-emerald-950 border border-emerald-100">
                    <div className="font-bold text-emerald-900 flex items-center justify-between">
                      <span>(+) Khẳng định</span>
                      <span className="font-mono text-xs bg-emerald-100/80 px-2 py-0.5 rounded text-emerald-900">
                        S + V2/ed
                      </span>
                    </div>
                    <div className="text-xs text-emerald-900/90 mt-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>• She <strong>visited</strong> her grandparents yesterday.</span>
                        <button onClick={() => playAudio("She visited her grandparents yesterday")} className="text-emerald-700 hover:text-emerald-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• They <strong>went</strong> to the cinema.</span>
                        <button onClick={() => playAudio("They went to the cinema")} className="text-emerald-700 hover:text-emerald-900 p-1">
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
                        S + did not (didn't) + V (nguyên thể)
                      </span>
                    </div>
                    <div className="text-[11px] text-rose-700 font-medium mt-1">
                      * V (nguyên thể / V-bare): Động từ ở dạng nguyên mẫu không "to", không chia đuôi -ed.
                    </div>
                    <div className="text-xs text-rose-900/90 mt-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>• She <strong>didn't visit</strong> her grandparents.</span>
                        <button onClick={() => playAudio("She didn't visit her grandparents")} className="text-rose-700 hover:text-rose-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• They <strong>didn't go</strong>.</span>
                        <button onClick={() => playAudio("They didn't go")} className="text-rose-700 hover:text-rose-900 p-1">
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
                        Did + S + V (nguyên thể)?
                      </span>
                    </div>
                    <div className="text-[11px] text-blue-800 font-medium mt-1">
                      Trả lời: Yes, S + did. / No, S + didn't.
                    </div>
                    <div className="text-xs text-blue-950 mt-2 flex items-center justify-between">
                      <span>• <strong>Did</strong> you <strong>enjoy</strong> the party? ➔ Yes, I did / No, I didn't.</span>
                      <button onClick={() => playAudio("Did you enjoy the party? Yes, I did")} className="text-blue-700 hover:text-blue-900 p-1">
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Động từ "To be" */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-5 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-indigo-500" />
                    2. Động từ "To be" (Was / Were)
                  </h4>
                  <span className="text-[11px] font-mono bg-indigo-50 text-indigo-800 border border-indigo-200 px-2 py-0.5 rounded-md font-semibold">
                    was / were
                  </span>
                </div>

                {/* Ghi chú chia ngôi */}
                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 border border-slate-200 space-y-1">
                  <div>• <strong>Was</strong>: I / He / She / It / Danh từ số ít / Danh từ không đếm được</div>
                  <div>• <strong>Were</strong>: We / You / They / Danh từ số nhiều</div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Khẳng định */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 text-emerald-950 border border-emerald-100">
                    <div className="font-bold text-emerald-900 flex items-center justify-between">
                      <span>(+) Khẳng định</span>
                      <span className="font-mono text-xs bg-emerald-100/80 px-2 py-0.5 rounded text-emerald-900">
                        S + was/were + O/Adj
                      </span>
                    </div>
                    <div className="text-xs text-emerald-900/90 mt-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>• He <strong>was</strong> a student.</span>
                        <button onClick={() => playAudio("He was a student")} className="text-emerald-700 hover:text-emerald-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• They <strong>were</strong> happy.</span>
                        <button onClick={() => playAudio("They were happy")} className="text-emerald-700 hover:text-emerald-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Phủ định */}
                  <div className="p-3.5 rounded-xl bg-rose-50/70 text-rose-950 border border-rose-100">
                    <div className="font-bold text-rose-900 flex items-center justify-between">
                      <span>(-) Phủ định</span>
                      <span className="font-mono text-xs bg-rose-100/80 px-2 py-0.5 rounded text-rose-900">
                        S + was/were + not (wasn't/weren't)
                      </span>
                    </div>
                    <div className="text-xs text-rose-900/90 mt-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>• He <strong>wasn't</strong> late.</span>
                        <button onClick={() => playAudio("He wasn't late")} className="text-rose-700 hover:text-rose-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• They <strong>weren't</strong> at home.</span>
                        <button onClick={() => playAudio("They weren't at home")} className="text-rose-700 hover:text-rose-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Nghi vấn */}
                  <div className="p-3.5 rounded-xl bg-blue-50/70 text-blue-950 border border-blue-100">
                    <div className="font-bold text-blue-900 flex items-center justify-between">
                      <span>(?) Nghi vấn</span>
                      <span className="font-mono text-xs bg-blue-100/80 px-2 py-0.5 rounded text-blue-900">
                        Was/Were + S + O/Adj?
                      </span>
                    </div>
                    <div className="text-[11px] text-blue-800 font-medium mt-1">
                      Trả lời: Yes, S + was/were. / No, S + wasn't/weren't.
                    </div>
                    <div className="text-xs text-blue-950 mt-2 flex items-center justify-between">
                      <span>• <strong>Were</strong> you tired? ➔ Yes, I was / No, I wasn't.</span>
                      <button onClick={() => playAudio("Were you tired? Yes, I was")} className="text-blue-700 hover:text-blue-900 p-1">
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Cấu trúc */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-300/80 text-amber-950 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Cấu trúc</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Quên mượn trợ động từ "did":</strong> Học sinh hay viết sai thành <em>"She didn't went"</em> hoặc <em>"She not went"</em>.<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Sau <code>didn't</code>, động từ bắt buộc phải về nguyên thể không chia (<strong>V nguyên thể</strong>): <strong>didn't go</strong> (không dùng didn't went).
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Dùng nhầm "Did" với động từ "To be":</strong> Học sinh hay viết <em>"Did you were at home?"</em>.<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Động từ "To be" tự đứng độc lập trong câu hỏi, không mượn did: <strong>Were you at home?</strong>.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Chia sai động từ To be ở số ít / số nhiều:</strong> Nhầm lẫn giữa <em>was</em> và <em>were</em> (ví dụ: viết <em>"They was happy"</em>).<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Chủ ngữ số nhiều dùng <strong>were</strong>: <strong>They were happy</strong>.
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
              Khối kiến thức chuyên sâu nâng cao dành cho học sinh giỏi và các kỳ thi chuẩn hóa (THPT / IELTS):
            </div>

            {/* Accordion 1: Chuỗi hành động liên tiếp */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item1')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold font-mono">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Chuỗi hành động liên tiếp trong quá khứ (Sequential Actions)
                    </h4>
                    <span className="text-[11px] text-slate-500">Kỹ năng kể chuyện (Storytelling)</span>
                  </div>
                </div>
                {accordionOpen.item1 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item1 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Dùng để kể chuyện (storytelling), liệt kê các hành động xảy ra nối tiếp nhau tuần tự, chấm dứt hoàn toàn trong quá khứ.
                  </p>
                  <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 font-medium text-slate-900 flex items-center justify-between">
                    <span>Ví dụ: "He <strong>opened</strong> the door, <strong>turned</strong> on the light, and <strong>sat</strong> down."</span>
                    <button onClick={() => playAudio("He opened the door, turned on the light, and sat down")} className="text-amber-800 hover:text-amber-950 p-1">
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: Thói quen cũ với "Used to" */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item2')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold font-mono">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Thói quen cũ trong quá khứ với "Used to"
                    </h4>
                    <span className="text-[11px] text-slate-500">Hành động/trạng thái cũ nay đã chấm dứt</span>
                  </div>
                </div>
                {accordionOpen.item2 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item2 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Diễn tả thói quen, trạng thái kéo dài trong quá khứ nhưng nay không còn nữa.
                  </p>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono space-y-1">
                    <div>(+) S + used to + V (nguyên thể)</div>
                    <div>(-) S + didn't use to + V (nguyên thể)</div>
                    <div>(?) Did + S + use to + V (nguyên thể)?</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 font-medium text-slate-900 flex items-center justify-between">
                    <span>Ví dụ: "I <strong>used to play</strong> football when I was a child, but now I don't."</span>
                    <button onClick={() => playAudio("I used to play football when I was a child, but now I don't")} className="text-amber-800 hover:text-amber-950 p-1">
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 3: Câu điều kiện loại 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item3')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold font-mono">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Câu điều kiện loại 2 (Second Conditional)
                    </h4>
                    <span className="text-[11px] text-slate-500">Giả định không có thật ở hiện tại</span>
                  </div>
                </div>
                {accordionOpen.item3 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item3 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Diễn tả giả định không có thật ở hiện tại; lưu ý mệnh đề chứa điều kiện (mệnh đề If) phải chia ở thì Quá khứ đơn.
                  </p>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono">
                    If + S + V2/ed (hoặc were cho mọi ngôi), S + would/could + V (nguyên thể)
                  </div>
                  <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 font-medium text-slate-900 flex items-center justify-between">
                    <span>Ví dụ: "If I <strong>had</strong> a million dollars, I <strong>would buy</strong> a house."</span>
                    <button onClick={() => playAudio("If I had a million dollars, I would buy a house")} className="text-amber-800 hover:text-amber-950 p-1">
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Nâng cao */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-300/80 text-amber-950 space-y-3 mt-4">
              <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Nâng cao</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Nhầm lẫn "used to + V" với "be/get used to + V-ing":</strong> Học sinh hay dùng nhầm cấu trúc quen thuộc ở hiện tại (*be used to V-ing*) thành thói quen cũ trong quá khứ.<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Thói quen cũ đã dứt phải là <strong>used to + V (nguyên thể)</strong>.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Quên đổi động từ về nguyên thể sau "did not use to":</strong> Viết sai thành <em>"didn't used to"</em> (thừa chữ 'd').<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Phải bỏ 'd' thành <strong>didn't use to</strong>.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Chia sai động từ "to be" trong câu điều kiện loại 2:</strong> Quên mất quy tắc chuẩn ngữ pháp là dùng <em>were</em> cho tất cả các ngôi trong mệnh đề If.<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Viết <strong>"If I were you..."</strong> thay vì <em>"If I was you..."</em>.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: TỪ NHẬN BIẾT & PHÁT ÂM (KHỐI KỸ NĂNG BỔ TRỢ)       */}
        {/* ======================================================== */}
        {activeTab === 'tab3' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* 1. Trạng từ và cụm từ chỉ thời gian nâng cao */}
            <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  1. Trạng từ và cụm từ chỉ thời gian nâng cao
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-amber-900">yesterday</div>
                  <div className="text-slate-600 mt-0.5">hôm qua</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-amber-900">... ago</div>
                  <div className="text-slate-600 mt-0.5">trước đây (e.g., 2 days ago)</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-amber-900">last...</div>
                  <div className="text-slate-600 mt-0.5">last night, last week, last year...</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-amber-900">in the past</div>
                  <div className="text-slate-600 mt-0.5">trong quá khứ</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-amber-900">the other day</div>
                  <div className="text-slate-600 mt-0.5">hôm nọ (vài ngày trước)</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-amber-900">during + [khoảng thời gian]</div>
                  <div className="text-slate-600 mt-0.5">"during the summer", "during my childhood"</div>
                </div>
              </div>
            </div>

            {/* 2. Quy tắc phát âm đuôi -ed (Phonetics Rule Flashcards) */}
            <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-indigo-500" />
                  2. Quy tắc phát âm đuôi "-ed" (Phonetics Rule)
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                {/* /t/ */}
                <div className="p-4 rounded-2xl bg-indigo-50/70 border-2 border-indigo-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-black text-indigo-800">/t/</span>
                    <span className="text-[10px] font-bold uppercase bg-indigo-200/80 text-indigo-900 px-2 py-0.5 rounded">
                      Âm Vô Thanh
                    </span>
                  </div>
                  <div className="text-slate-800 font-medium">
                    Khi động từ tận cùng bằng âm vô thanh: <strong>/p/, /k/, /f/, /s/, /ʃ/ (sh), /tʃ/ (ch)</strong>.
                  </div>
                  <div className="p-2 bg-white rounded-lg text-xs text-indigo-900 font-semibold border border-indigo-100">
                    💡 Mẹo nhớ: <em>"Phải Không F hút S thuốc Shẻ Chè?"</em> (hoặc âm gió / bật hơi mạnh).
                  </div>
                  <div className="space-y-1.5 pt-1 text-xs">
                    <div className="flex items-center justify-between bg-white/70 p-1.5 rounded">
                      <span>looked (/lʊkt/)</span>
                      <button onClick={() => playAudio("looked")} className="text-indigo-600"><Volume2 className="w-3.5 h-3.5" /></button>
                    </div>
                    <div className="flex items-center justify-between bg-white/70 p-1.5 rounded">
                      <span>stopped (/stɒpt/)</span>
                      <button onClick={() => playAudio("stopped")} className="text-indigo-600"><Volume2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                </div>

                {/* /id/ */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border-2 border-amber-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-black text-amber-800">/ɪd/</span>
                    <span className="text-[10px] font-bold uppercase bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded">
                      Âm /t/ hoặc /d/
                    </span>
                  </div>
                  <div className="text-slate-800 font-medium">
                    Khi động từ tận cùng bằng âm: <strong>/t/</strong> hoặc <strong>/d/</strong>.
                  </div>
                  <div className="p-2 bg-white rounded-lg text-xs text-amber-900 font-semibold border border-amber-100">
                    💡 Mẹo nhớ: <em>"Tiền Độc"</em> (T - D).
                  </div>
                  <div className="space-y-1.5 pt-1 text-xs">
                    <div className="flex items-center justify-between bg-white/70 p-1.5 rounded">
                      <span>wanted (/ˈwɒntɪd/)</span>
                      <button onClick={() => playAudio("wanted")} className="text-amber-700"><Volume2 className="w-3.5 h-3.5" /></button>
                    </div>
                    <div className="flex items-center justify-between bg-white/70 p-1.5 rounded">
                      <span>needed (/ˈniːdɪd/)</span>
                      <button onClick={() => playAudio("needed")} className="text-amber-700"><Volume2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                </div>

                {/* /d/ */}
                <div className="p-4 rounded-2xl bg-teal-50/70 border-2 border-teal-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-black text-teal-800">/d/</span>
                    <span className="text-[10px] font-bold uppercase bg-teal-200/80 text-teal-900 px-2 py-0.5 rounded">
                      Còn lại
                    </span>
                  </div>
                  <div className="text-slate-800 font-medium">
                    Với các trường hợp còn lại: <strong>âm hữu thanh và tất cả nguyên âm</strong>.
                  </div>
                  <div className="p-2 bg-white rounded-lg text-xs text-teal-900 font-semibold border border-teal-100">
                    💡 Mẹo nhớ: Dây thanh quản rung mạnh ở cổ họng.
                  </div>
                  <div className="space-y-1.5 pt-1 text-xs">
                    <div className="flex items-center justify-between bg-white/70 p-1.5 rounded">
                      <span>played (/pleɪd/)</span>
                      <button onClick={() => playAudio("played")} className="text-teal-700"><Volume2 className="w-3.5 h-3.5" /></button>
                    </div>
                    <div className="flex items-center justify-between bg-white/70 p-1.5 rounded">
                      <span>lived (/lɪvd/)</span>
                      <button onClick={() => playAudio("lived")} className="text-teal-700"><Volume2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Nhận biết & Phát âm */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-300/80 text-amber-950 space-y-3 mt-4">
              <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Nhận biết & Phát âm</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Phát âm máy móc theo mặt chữ thay vì mặt âm (phonemes):</strong> Học sinh thường nhìn chữ cái "c" hay "gh" mà quên xét đến âm cuối (ending sound).<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Ví dụ chuẩn: Từ <em>laugh</em> kết thúc bằng chữ "gh" nhưng phát âm là âm /f/ (vô thanh) ➔ đuôi -ed phải đọc là <strong>/t/ (laughed /lɑːft/)</strong>, chứ không đọc là /id/.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Nhầm lẫn các cụm từ chỉ thời gian với thì Hiện tại hoàn thành:</strong> Dùng lẫn lộn giữa <em>since/for</em> (Hiện tại hoàn thành) với <em>ago/last</em> (Quá khứ đơn).<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Quá khứ đơn đi với mốc thời gian chấm dứt hẳn: <strong>3 days ago, last week</strong>; không đi kèm <em>since/for</em> kéo dài tới nay.
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
