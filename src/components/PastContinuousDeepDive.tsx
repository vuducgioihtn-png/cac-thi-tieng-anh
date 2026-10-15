import React, { useState } from 'react';
import { BookOpen, Sparkles, Volume2, AlertTriangle, Play, ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import { playAudio } from '../utils/audio';

interface PastContinuousDeepDiveProps {
  onStartPractice?: () => void;
}

export const PastContinuousDeepDive: React.FC<PastContinuousDeepDiveProps> = ({ onStartPractice }) => {
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
      {/* Header Banner: Past Continuous Masterclass */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-700 to-amber-700 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-orange-100 text-xs font-semibold mb-2 backdrop-blur-md border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-orange-200" />
              <span>Chuyên Đề Trọng Điểm</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
              PAST CONTINUOUS MASTERCLASS
            </h3>
            <p className="text-xs sm:text-sm text-orange-100/90 mt-1 max-w-2xl leading-relaxed">
              Mô-đun học tập toàn diện thì Quá khứ tiếp diễn: Khối cấu trúc & quy tắc chính tả V-ing, chuyên đề hành động xen vào/song song (When/While), mốc giờ cụ thể và bẫy động từ trạng thái.
            </p>
          </div>

          {onStartPractice && (
            <button
              onClick={onStartPractice}
              className="px-5 py-3 bg-white text-orange-950 rounded-xl text-xs font-bold hover:bg-orange-50 active:scale-95 transition-all shadow-sm flex items-center gap-2 whitespace-nowrap self-start md:self-auto shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Luyện 8 câu phản xạ QK tiếp diễn</span>
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
              ? 'border-orange-600 text-orange-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <BookOpen className="w-4 h-4 text-orange-600" />
          <span>TAB 1: CÔNG THỨC CHI TIẾT 3 DẠNG</span>
        </button>

        <button
          onClick={() => setActiveTab('tab2')}
          className={`px-6 py-4 whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'tab2'
              ? 'border-orange-600 text-orange-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <Sparkles className="w-4 h-4 text-orange-600" />
          <span>TAB 2: CÁC CÁCH DÙNG MỞ RỘNG</span>
        </button>

        <button
          onClick={() => setActiveTab('tab3')}
          className={`px-6 py-4 whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'tab3'
              ? 'border-orange-600 text-orange-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <Volume2 className="w-4 h-4 text-orange-600" />
          <span>TAB 3: TỪ NHẬN BIẾT & PHÂN BIỆT WHEN / WHILE</span>
        </button>
      </div>

      {/* NỘI DUNG TỪNG TAB */}
      <div className="p-6 sm:p-8">
        {/* ======================================================== */}
        {/* TAB 1: CÔNG THỨC CHI TIẾT 3 DẠNG                          */}
        {/* ======================================================== */}
        {activeTab === 'tab1' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* 2 Phân vùng chính: Cấu trúc 3 dạng & Quy tắc chính tả */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card 1: Cấu trúc 3 dạng câu */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-orange-500" />
                    1. Cấu trúc 3 dạng câu (Khẳng định - Phủ định - Nghi vấn)
                  </h4>
                  <span className="text-[11px] font-mono bg-orange-50 text-orange-800 border border-orange-200 px-2 py-0.5 rounded-md font-semibold">
                    was/were + V-ing
                  </span>
                </div>

                {/* Ghi chú chia ngôi */}
                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 border border-slate-200 space-y-1">
                  <div>• <strong>Was</strong>: I / He / She / It / Danh từ số ít</div>
                  <div>• <strong>Were</strong>: We / You / They / Danh từ số nhiều</div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Khẳng định */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 text-emerald-950 border border-emerald-100">
                    <div className="font-bold text-emerald-900 flex items-center justify-between">
                      <span>(+) Khẳng định</span>
                      <span className="font-mono text-xs bg-emerald-100/80 px-2 py-0.5 rounded text-emerald-900">
                        S + was/were + V-ing
                      </span>
                    </div>
                    <div className="text-xs text-emerald-900/90 mt-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>• She <strong>was reading</strong> a book at 8 PM yesterday.</span>
                        <button onClick={() => playAudio("She was reading a book at 8 PM yesterday")} className="text-emerald-700 hover:text-emerald-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• They <strong>were playing</strong> football.</span>
                        <button onClick={() => playAudio("They were playing football")} className="text-emerald-700 hover:text-emerald-900 p-1">
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
                        S + was/were + not (wasn't / weren't) + V-ing
                      </span>
                    </div>
                    <div className="text-xs text-rose-900/90 mt-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>• She <strong>wasn't reading</strong> a book.</span>
                        <button onClick={() => playAudio("She wasn't reading a book")} className="text-rose-700 hover:text-rose-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• They <strong>weren't playing</strong> football.</span>
                        <button onClick={() => playAudio("They weren't playing football")} className="text-rose-700 hover:text-rose-900 p-1">
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
                        Was/Were + S + V-ing?
                      </span>
                    </div>
                    <div className="text-[11px] text-blue-800 font-medium mt-1">
                      Trả lời: Yes, S + was/were. / No, S + wasn't/weren't.
                    </div>
                    <div className="text-xs text-blue-950 mt-2 flex items-center justify-between">
                      <span>• <strong>Were</strong> you <strong>doing</strong> your homework at 9 PM? ➔ Yes, I was / No, I wasn't.</span>
                      <button onClick={() => playAudio("Were you doing your homework at 9 PM? Yes, I was")} className="text-blue-700 hover:text-blue-900 p-1">
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Quy tắc chính tả khi thêm đuôi "-ing" */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    2. Các quy tắc chính tả khi thêm đuôi "-ing"
                  </h4>
                  <span className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-semibold">
                    Spelling Rules
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Quy tắc 1 */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 flex items-center justify-between">
                      <span>Tận cùng là chữ "e" câm</span>
                      <span className="text-[11px] font-semibold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">
                        Bỏ "e" + ing
                      </span>
                    </div>
                    <p className="text-slate-600 mt-1">
                      Bỏ chữ <em>e</em> rồi thêm đuôi <em>-ing</em>.
                    </p>
                    <div className="font-mono text-xs text-amber-950 font-bold mt-1 bg-white p-2 rounded border border-slate-200">
                      • write ➔ writing, come ➔ coming, make ➔ making
                    </div>
                    <div className="text-[11px] text-rose-700 font-semibold mt-1">
                      * Ngoại lệ đặc biệt: be ➔ being, see ➔ seeing
                    </div>
                  </div>

                  {/* Quy tắc 2 */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 flex items-center justify-between">
                      <span>Động từ 1 âm tiết (Phụ âm - Nguyên âm - Phụ âm)</span>
                      <span className="text-[11px] font-semibold text-indigo-800 bg-indigo-100/80 px-2 py-0.5 rounded">
                        Gấp đôi phụ âm
                      </span>
                    </div>
                    <p className="text-slate-600 mt-1">
                      Gấp đôi phụ âm cuối rồi thêm đuôi <em>-ing</em>.
                    </p>
                    <div className="font-mono text-xs text-indigo-950 font-bold mt-1 bg-white p-2 rounded border border-slate-200">
                      • run ➔ running, sit ➔ sitting, swim ➔ swimming, stop ➔ stopping
                    </div>
                  </div>

                  {/* Quy tắc 3 */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 flex items-center justify-between">
                      <span>Động từ tận cùng là "ie"</span>
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded">
                        Đổi ie ➔ y + ing
                      </span>
                    </div>
                    <p className="text-slate-600 mt-1">
                      Đổi đuôi <em>ie</em> thành chữ <em>y</em> rồi mới thêm <em>-ing</em>.
                    </p>
                    <div className="font-mono text-xs text-emerald-950 font-bold mt-1 bg-white p-2 rounded border border-slate-200">
                      • lie ➔ lying, die ➔ dying, tie ➔ tying
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Cấu trúc */}
            <div className="p-5 rounded-2xl bg-orange-50/80 border-2 border-orange-300/80 text-orange-950 space-y-3">
              <div className="flex items-center gap-2 text-orange-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-orange-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Cấu trúc</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Quên chia động từ "To be" hoặc thiếu đuôi "-ing":</strong> Học sinh hay viết sai thành <em>"She was read a book"</em> hoặc <em>"She reading a book"</em>.<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Đủ cả 2 thành phần <strong>was/were + V-ing</strong>: <strong>She was reading a book</strong>.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Nhầm lẫn chia was/were theo chủ ngữ số ít / số nhiều:</strong> Dùng nhầm <em>"They was playing"</em> thay vì <em>"They were playing"</em>, hoặc <em>"You was"</em> thay vì <em>"You were"</em>.<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: <strong>They were playing</strong>, <strong>You were listening</strong>.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Sai quy tắc chính tả cơ bản:</strong> Quên bỏ chữ <em>e</em> hoặc quên gấp đôi phụ âm (ví dụ: viết sai thành <em>"writng"</em> hoặc <em>"runing"</em>).<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Viết là <strong>writing</strong>, <strong>running</strong>.
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
              Khối kiến thức chuyên sâu nâng cao dành cho câu hỏi kết hợp thì và các kỳ thi học sinh giỏi / THPT:
            </div>

            {/* Accordion 1: Hành động đang xảy ra thì có hành động khác xen vào */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item1')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-orange-100 text-orange-800 flex items-center justify-center text-xs font-bold font-mono">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Hành động đang xảy ra thì có hành động khác xen vào
                    </h4>
                    <span className="text-[11px] text-slate-500">Mô hình kinh điển: Hành động dài (tiếp diễn) bị hành động ngắn (đơn) cắt ngang</span>
                  </div>
                </div>
                {accordionOpen.item1 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item1 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Diễn tả một hành động đang diễn ra (chia Quá khứ tiếp diễn) thì có một hành động khác bước vào cắt ngang (chia Quá khứ đơn).
                  </p>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono space-y-1">
                    <div>• While + S1 + was/were + V-ing1, S2 + V2/ed</div>
                    <div>• When + S2 + V2/ed, S1 + was/were + V-ing1</div>
                  </div>
                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-orange-50/60 border border-orange-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 1: "While I <strong>was cooking</strong>, the phone <strong>rang</strong>."</span>
                      <button onClick={() => playAudio("While I was cooking, the phone rang")} className="text-orange-800 hover:text-orange-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-orange-50/60 border border-orange-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 2: "When the phone <strong>rang</strong>, I <strong>was cooking</strong>."</span>
                      <button onClick={() => playAudio("When the phone rang, I was cooking")} className="text-orange-800 hover:text-orange-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-900">
                    <strong>⚠️ Lỗi sai:</strong> Chia nhầm thì cho hành động xen vào (Ví dụ: <em>"While I was cooking, the phone was ringing"</em> ➔ sai ý nghĩa vì chuông reo là hành động ngắn cắt ngang).
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: Hai hành động diễn ra song song cùng lúc trong quá khứ */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item2')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-orange-100 text-orange-800 flex items-center justify-center text-xs font-bold font-mono">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Hai hành động diễn ra song song cùng lúc trong quá khứ (Parallel Actions)
                    </h4>
                    <span className="text-[11px] text-slate-500">Hành động đồng thời, không ngắt quãng nhau</span>
                  </div>
                </div>
                {accordionOpen.item2 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item2 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Diễn tả hai hay nhiều hành động cùng lúc xảy ra đồng thời trong quá khứ, không ngắt quãng nhau (thường nối bởi "While").
                  </p>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono">
                    While + S1 + was/were + V-ing1, S2 + was/were + V-ing2
                  </div>
                  <div className="p-3.5 rounded-xl bg-orange-50/60 border border-orange-200 font-medium text-slate-900 flex items-center justify-between">
                    <span>Ví dụ: "While my mother <strong>was cooking</strong>, my father <strong>was reading</strong> books."</span>
                    <button onClick={() => playAudio("While my mother was cooking, my father was reading books")} className="text-orange-800 hover:text-orange-950 p-1">
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 3: Hành động lặp đi lặp lại gây phiền toái trong quá khứ với "Always" */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item3')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-orange-100 text-orange-800 flex items-center justify-center text-xs font-bold font-mono">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Hành động lặp đi lặp lại gây phiền toái trong quá khứ với "Always"
                    </h4>
                    <span className="text-[11px] text-slate-500">Phàn nàn, chỉ trích thói quen xấu trong quá khứ</span>
                  </div>
                </div>
                {accordionOpen.item3 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item3 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Phàn nàn về một thói quen xấu hoặc hành động lặp đi lặp lại trong quá khứ gây khó chịu cho người khác.
                  </p>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono">
                    S + was/were + always + V-ing
                  </div>
                  <div className="p-3.5 rounded-xl bg-orange-50/60 border border-orange-200 font-medium text-slate-900 flex items-center justify-between">
                    <span>Ví dụ: "He <strong>was always losing</strong> his keys when he lived here."</span>
                    <button onClick={() => playAudio("He was always losing his keys when he lived here")} className="text-orange-800 hover:text-orange-950 p-1">
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
                    <strong>⚠️ Lỗi sai:</strong> Nhầm với Quá khứ đơn (<em>"He always lost his keys"</em> chỉ là trần thuật sự thật khách quan, không thể hiện thái độ phàn nàn gay gắt bằng cấu trúc <em>was always losing</em>).
                  </div>
                </div>
              )}
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Nâng cao */}
            <div className="p-5 rounded-2xl bg-orange-50/80 border-2 border-orange-300/80 text-orange-950 space-y-3 mt-4">
              <div className="flex items-center gap-2 text-orange-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-orange-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Nâng cao</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Chia cứng nhắc thì trong câu kết hợp When / While:</strong> Học sinh thường nhớ máy móc <em>While</em> đi với Quá khứ tiếp diễn và <em>When</em> đi với Quá khứ đơn mà quên mất bản chất ngữ cảnh (hành động dài hay ngắn, hành động cắt ngang hay song song).<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Luôn xét hành động làm nền (kéo dài) ➔ chia Quá khứ tiếp diễn; hành động xen vào đột ngột ➔ chia Quá khứ đơn.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Dùng thì Quá khứ tiếp diễn với các động từ chỉ trạng thái (Stative Verbs):</strong> Các từ chỉ nhận thức, cảm xúc, sở hữu (như <em>want, know, like, belong, understand</em>) không bao giờ dùng ở dạng tiếp diễn.<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Dùng thì Quá khứ đơn: <strong>"I wanted an ice cream"</strong> (tuyệt đối không viết <em>"I was wanting an ice cream"</em>).
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: TỪ NHẬN BIẾT & PHÂN BIỆT WHEN / WHILE               */}
        {/* ======================================================== */}
        {activeTab === 'tab3' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Phân chia 2 khối: Dấu hiệu nhận biết & Quy tắc vàng phân biệt When / While */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Khối 1: Dấu hiệu nhận biết */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-orange-500" />
                    1. Dấu hiệu nhận biết thì Quá khứ tiếp diễn
                  </h4>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-orange-50/60 border border-orange-200">
                    <div className="font-bold text-orange-950 font-mono text-xs sm:text-sm">
                      • Giờ cụ thể trong quá khứ:
                    </div>
                    <div className="text-slate-700 mt-1 font-sans space-y-0.5">
                      <div>- <strong>at + giờ cụ thể + thời gian quá khứ</strong>: <em>at 8 PM yesterday, at 10 AM last Monday, at 6:30 this morning...</em></div>
                      <div>- <strong>at this time / at that moment</strong>: <em>at this time last week, at this time yesterday, at midnight last night...</em></div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 font-mono text-xs sm:text-sm">
                      • Các từ nối chỉ thời gian liên kết:
                    </div>
                    <div className="text-slate-600 mt-1 font-sans">
                      • <strong>While</strong> (trong khi), <strong>When</strong> (khi), <strong>As</strong> (khi), <strong>At that moment</strong> (ngay lúc đó)...
                    </div>
                  </div>
                </div>
              </div>

              {/* Khối 2: Quy tắc vàng phân biệt WHEN và WHILE */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-indigo-500" />
                    2. Quy tắc vàng phân biệt WHEN và WHILE
                  </h4>
                  <span className="text-[11px] font-mono bg-indigo-50 text-indigo-800 border border-indigo-200 px-2 py-0.5 rounded-md font-semibold">
                    Golden Rule
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {/* WHILE */}
                  <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200">
                    <div className="font-bold text-indigo-950 font-mono text-xs sm:text-sm flex items-center justify-between">
                      <span>WHILE (Trong khi)</span>
                      <span className="text-[10px] uppercase font-bold bg-indigo-200/80 text-indigo-900 px-2 py-0.5 rounded">
                        Hành động kéo dài
                      </span>
                    </div>
                    <div className="text-indigo-900/90 mt-1.5 font-sans">
                      Thường đi liền với mệnh đề chia thì <strong>Quá khứ tiếp diễn</strong> (hành động diễn ra trong khoảng thời gian dài làm bối cảnh).
                    </div>
                    <div className="font-mono text-xs text-indigo-950 font-semibold mt-1.5 bg-white p-2 rounded border border-indigo-100">
                      While + Past Continuous (was/were + V-ing)
                    </div>
                  </div>

                  {/* WHEN */}
                  <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
                    <div className="font-bold text-amber-950 font-mono text-xs sm:text-sm flex items-center justify-between">
                      <span>WHEN (Khi / Lúc mà)</span>
                      <span className="text-[10px] uppercase font-bold bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded">
                        Hành động ngắn xen vào
                      </span>
                    </div>
                    <div className="text-amber-900/90 mt-1.5 font-sans">
                      Thường đi liền với mệnh đề chia thì <strong>Quá khứ đơn</strong> (hành động ngắn, bất ngờ xảy ra cắt ngang hành động đang diễn ra).
                    </div>
                    <div className="font-mono text-xs text-amber-950 font-semibold mt-1.5 bg-white p-2 rounded border border-amber-100">
                      When + Past Simple (V2/ed)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Dấu hiệu & Phân biệt */}
            <div className="p-5 rounded-2xl bg-orange-50/80 border-2 border-orange-300/80 text-orange-950 space-y-3 mt-4">
              <div className="flex items-center gap-2 text-orange-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-orange-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Dấu hiệu & Phân biệt</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Bẫy từ nhận biết "yesterday":</strong> Thấy chữ <em>yesterday</em> học sinh lập tức vội chọn ngay Quá khứ đơn mà không để ý phía trước có cụm mốc giờ cụ thể như <em>"at 8 PM yesterday"</em> hoặc <em>"at this time yesterday"</em>.<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Khi có giờ cụ thể hoặc thời điểm chính xác trong quá khứ ➔ bắt buộc chia <strong>Quá khứ tiếp diễn</strong>: <em>"At 8 PM yesterday, I was studying."</em>
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Động từ chỉ trạng thái (Stative verbs) KHÔNG chia dạng tiếp diễn:</strong> Các từ chỉ nhận thức, cảm xúc, sở hữu (như <em>know, understand, believe, love, like, hate, want, belong, remember</em>) tuyệt đối không dùng với -ing.<br />
                    <span className="text-rose-700 font-mono text-xs block mt-0.5">
                      ❌ Viết: "While I was knowing him..." hoặc "I was wanting a cup of coffee" là SAI HOÀN TOÀN.
                    </span>
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Bắt buộc lùi về thì Quá khứ đơn: <strong>"While I knew him..."</strong>, <strong>"I wanted a cup of coffee."</strong>
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
