import React, { useState } from 'react';
import { BookOpen, Sparkles, Volume2, AlertTriangle, Play, ChevronDown, ChevronUp, Check, X, ShieldAlert, Clock, Bell } from 'lucide-react';
import { playAudio } from '../utils/audio';

interface PresentContinuousDeepDiveProps {
  onStartPractice?: () => void;
}

export const PresentContinuousDeepDive: React.FC<PresentContinuousDeepDiveProps> = ({ onStartPractice }) => {
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
      {/* Header Banner: Present Continuous Masterclass */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-700 to-indigo-900 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-cyan-100 text-xs font-semibold mb-2 backdrop-blur-md border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
              <span>Chuyên Đề Trọng Điểm</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
              PRESENT CONTINUOUS MASTERCLASS
            </h3>
            <p className="text-xs sm:text-sm text-cyan-100/90 mt-1 max-w-2xl leading-relaxed">
              Mô-đun học tập toàn diện thì Hiện tại tiếp diễn: Cấu trúc 3 dạng, quy tắc thêm đuôi -ing (C-V-C, e câm, ie), chuyên đề hành động tức thời, tính chất tạm thời, phàn nàn với "Always" và bẫy động từ trạng thái (Stative Verbs).
            </p>
          </div>

          {onStartPractice && (
            <button
              onClick={onStartPractice}
              className="px-5 py-3 bg-white text-teal-950 rounded-xl text-xs font-bold hover:bg-cyan-50 active:scale-95 transition-all shadow-sm flex items-center gap-2 whitespace-nowrap self-start md:self-auto shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Luyện 8 câu phản xạ HT tiếp diễn</span>
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
              ? 'border-teal-600 text-teal-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <BookOpen className="w-4 h-4 text-teal-600" />
          <span>TAB 1: CÔNG THỨC CHI TIẾT 3 DẠNG</span>
        </button>

        <button
          onClick={() => setActiveTab('tab2')}
          className={`px-6 py-4 whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'tab2'
              ? 'border-teal-600 text-teal-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <Sparkles className="w-4 h-4 text-teal-600" />
          <span>TAB 2: CÁC CÁCH DÙNG MỞ RỘNG</span>
        </button>

        <button
          onClick={() => setActiveTab('tab3')}
          className={`px-6 py-4 whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'tab3'
              ? 'border-teal-600 text-teal-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <Volume2 className="w-4 h-4 text-teal-600" />
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
            {/* Phân vùng 2 Cards: Cấu trúc câu và Quy tắc thêm đuôi -ing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card 1: Cấu trúc 3 dạng câu */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-teal-600" />
                    1. Cấu trúc 3 dạng câu (Khẳng định - Phủ định - Nghi vấn)
                  </h4>
                  <span className="text-[11px] font-mono bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 rounded-md font-semibold">
                    am/is/are + V-ing
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 border border-slate-200 space-y-1">
                  <div>• <strong>I</strong> ➔ am ('m)</div>
                  <div>• <strong>He / She / It / Danh từ số ít</strong> ➔ is ('s)</div>
                  <div>• <strong>We / You / They / Danh từ số nhiều</strong> ➔ are ('re)</div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Khẳng định */}
                  <div className="p-3.5 rounded-xl bg-teal-50/70 text-teal-950 border border-teal-100">
                    <div className="font-bold text-teal-900 flex items-center justify-between">
                      <span>(+) Khẳng định:</span>
                      <span className="font-mono text-xs bg-teal-100/80 px-2 py-0.5 rounded text-teal-900 font-semibold">
                        S + am/is/are + V-ing
                      </span>
                    </div>
                    <div className="text-xs text-teal-900/90 mt-2 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span>• Look! It <strong>is raining</strong>.</span>
                        <button onClick={() => playAudio("Look! It is raining.")} className="text-teal-700 hover:text-teal-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• They <strong>are studying</strong> English now.</span>
                        <button onClick={() => playAudio("They are studying English now.")} className="text-teal-700 hover:text-teal-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Phủ định */}
                  <div className="p-3.5 rounded-xl bg-rose-50/70 text-rose-950 border border-rose-100">
                    <div className="font-bold text-rose-900 flex items-center justify-between">
                      <span>(-) Phủ định:</span>
                      <span className="font-mono text-xs bg-rose-100/80 px-2 py-0.5 rounded text-rose-900 font-semibold">
                        S + am/is/are + not ('m not / isn't / aren't) + V-ing
                      </span>
                    </div>
                    <div className="text-xs text-rose-900/90 mt-2 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span>• I <strong>'m not sleeping</strong>.</span>
                        <button onClick={() => playAudio("I am not sleeping.")} className="text-rose-700 hover:text-rose-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• She <strong>isn't working</strong> at the moment.</span>
                        <button onClick={() => playAudio("She isn't working at the moment.")} className="text-rose-700 hover:text-rose-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Nghi vấn */}
                  <div className="p-3.5 rounded-xl bg-cyan-50/70 text-cyan-950 border border-cyan-100">
                    <div className="font-bold text-cyan-900 flex items-center justify-between">
                      <span>(?) Nghi vấn:</span>
                      <span className="font-mono text-xs bg-cyan-100/80 px-2 py-0.5 rounded text-cyan-900 font-semibold">
                        Am/Is/Are + S + V-ing?
                      </span>
                    </div>
                    <div className="text-[11px] text-cyan-800 font-medium mt-1">
                      Trả lời: Yes, S + am/is/are. / No, S + 'm not / isn't / aren't.
                    </div>
                    <div className="text-xs text-cyan-950 mt-2 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span>• <strong>Are</strong> you <strong>listening</strong> to me? ➔ Yes, I am / No, I'm not.</span>
                        <button onClick={() => playAudio("Are you listening to me? Yes, I am")} className="text-cyan-700 hover:text-cyan-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• <strong>Is</strong> he <strong>doing</strong> his homework? ➔ Yes, he is / No, he isn't.</span>
                        <button onClick={() => playAudio("Is he doing his homework? Yes, he is")} className="text-cyan-700 hover:text-cyan-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Các quy tắc chính tả khi thêm đuôi "-ing" */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-cyan-600" />
                    2. Quy tắc chính tả thêm đuôi "-ing"
                  </h4>
                  <span className="text-[11px] font-mono bg-cyan-50 text-cyan-800 border border-cyan-200 px-2 py-0.5 rounded-md font-semibold">
                    Spelling Rules
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  {/* Quy tắc 1: e câm */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 flex items-center justify-between">
                      <span>• Động từ tận cùng là chữ "e" câm ➔ Bỏ "e" rồi thêm "-ing"</span>
                      <span className="font-mono text-[10px] bg-slate-200 px-1.5 py-0.5 rounded text-slate-700 font-semibold">e ➔ ing</span>
                    </div>
                    <div className="text-slate-600 mt-1">
                      Ví dụ: make ➔ <strong>making</strong>, write ➔ <strong>writing</strong>, dance ➔ <strong>dancing</strong>, take ➔ <strong>taking</strong>.
                    </div>
                    <div className="text-amber-700 font-medium mt-1">
                      ⚠️ Ngoại trừ: <em>be ➔ being</em>, <em>see ➔ seeing</em>, <em>agree ➔ agreeing</em> (đuôi "ee" giữ nguyên).
                    </div>
                  </div>

                  {/* Quy tắc 2: Phụ âm - Nguyên âm - Phụ âm */}
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200">
                    <div className="font-bold text-amber-950 flex items-center justify-between">
                      <span>• Động từ 1 âm tiết, kết thúc bằng Phụ âm - Nguyên âm - Phụ âm (C-V-C)</span>
                      <span className="font-mono text-[10px] bg-amber-200 px-1.5 py-0.5 rounded text-amber-900 font-semibold">Gấp đôi x2</span>
                    </div>
                    <div className="text-amber-900 mt-1 font-semibold">
                      ➔ Gấp đôi phụ âm cuối rồi thêm "-ing":
                    </div>
                    <div className="text-slate-700 mt-1">
                      Ví dụ: swim ➔ <strong>swimming</strong>, stop ➔ <strong>stopping</strong>, run ➔ <strong>running</strong>, sit ➔ <strong>sitting</strong>, get ➔ <strong>getting</strong>.
                    </div>
                    <div className="text-slate-600 mt-1">
                      <em>Lưu ý:</em> Không gấp đôi phụ âm khi kết thúc bằng <strong>w, x, y</strong>: fix ➔ <strong>fixing</strong>, play ➔ <strong>playing</strong>, snow ➔ <strong>snowing</strong>.
                    </div>
                  </div>

                  {/* Quy tắc 3: Tận cùng là ie */}
                  <div className="p-3 rounded-xl bg-cyan-50/70 border border-cyan-200">
                    <div className="font-bold text-cyan-950 flex items-center justify-between">
                      <span>• Động từ tận cùng là "ie" ➔ Đổi thành "y" rồi thêm "-ing"</span>
                      <span className="font-mono text-[10px] bg-cyan-200 px-1.5 py-0.5 rounded text-cyan-900 font-semibold">ie ➔ ying</span>
                    </div>
                    <div className="text-slate-700 mt-1 space-y-0.5 font-sans">
                      <div>• tie ➔ <strong>tying</strong> (thắt, buộc)</div>
                      <div>• die ➔ <strong>dying</strong> (chết, hấp hối)</div>
                      <div>• lie ➔ <strong>lying</strong> (nói dối / nằm)</div>
                    </div>
                  </div>

                  {/* Quy tắc 4: Thông thường */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900">
                      • Các trường hợp thông thường ➔ Thêm "-ing" trực tiếp
                    </div>
                    <div className="text-slate-600 mt-1">
                      Ví dụ: read ➔ <strong>reading</strong>, watch ➔ <strong>watching</strong>, learn ➔ <strong>learning</strong>, cook ➔ <strong>cooking</strong>.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Cấu trúc */}
            <div className="p-5 rounded-2xl bg-teal-50/80 border-2 border-teal-300/80 text-teal-950 space-y-3">
              <div className="flex items-center gap-2 text-teal-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-teal-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Cấu trúc</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Quên chia động từ "To be" hoặc thiếu đuôi "-ing":</strong> Học sinh hay viết sót trợ động từ to be (*"She reading a book"*) hoặc quên thêm đuôi ing sau to be (*"She is read a book"*).<br />
                    <span className="text-teal-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-teal-600 inline" /> Sửa đúng: Bắt buộc đủ 2 thành phần <strong>am/is/are + V-ing</strong>: <strong>"She is reading a book."</strong>
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Dùng Hiện tại tiếp diễn với các Stative Verbs (Động từ chỉ trạng thái):</strong> Các động từ chỉ cảm xúc, nhận thức, sở hữu hoặc giác quan (<em>like, want, know, belong, understand, love, hate, need, remember, see, hear</em>) tuyệt đối <strong>KHÔNG</strong> chia ở dạng tiếp diễn.<br />
                    <span className="text-rose-700 font-mono text-xs block mt-0.5">
                      ❌ Viết: "I am wanting an ice cream" hoặc "She is knowing the answer" là SAI NGỮ PHÁP.
                    </span>
                    <span className="text-teal-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-teal-600 inline" /> Sửa đúng: Lùi về Hiện tại đơn: <strong>"I want an ice cream."</strong> / <strong>"She knows the answer."</strong>
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
              Khối kiến thức chuyên sâu nâng cao dành cho bài thi phân biệt thì và đề thi THPT / Chuyên ngữ:
            </div>

            {/* Accordion 1: Hành động đang xảy ra ngay tại thời điểm nói */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item1')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold font-mono">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Hành động đang xảy ra ngay tại thời điểm nói (Actions happening now)
                    </h4>
                    <span className="text-[11px] text-slate-500">Sự việc đang thực sự diễn ra xung quanh khoảnh khắc phát ngôn</span>
                  </div>
                </div>
                {accordionOpen.item1 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item1 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Diễn tả một sự việc đang trực tiếp diễn ra ngay tại thời điểm người nói phát ngôn. Hành động bắt đầu trước lúc nói và chưa hoàn thành.
                  </p>

                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 1: "Quiet! The baby <strong>is sleeping</strong>."</span>
                      <button onClick={() => playAudio("Quiet! The baby is sleeping.")} className="text-teal-800 hover:text-teal-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 2: "We <strong>are having</strong> lunch right now."</span>
                      <button onClick={() => playAudio("We are having lunch right now.")} className="text-teal-800 hover:text-teal-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: Hành động mang tính chất tạm thời */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item2')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold font-mono">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Hành động mang tính chất tạm thời (Temporary Actions)
                    </h4>
                    <span className="text-[11px] text-slate-500">Diễn ra quanh thời điểm hiện tại, đối lập với thói quen lâu dài</span>
                  </div>
                </div>
                {accordionOpen.item2 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item2 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Diễn tả một sự việc chỉ diễn ra trong một giai đoạn ngắn hạn xung quanh thời điểm hiện tại (tuần này, tháng này, mùa hè này) nhưng không phải là quy luật hay thói quen sống lâu dài.
                  </p>

                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 1: "He usually lives in Da Nang, but he <strong>is staying</strong> in Hanoi this week."</span>
                      <button onClick={() => playAudio("He usually lives in Da Nang, but he is staying in Hanoi this week.")} className="text-teal-800 hover:text-teal-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 2: "I <strong>am living</strong> with my aunt until I find an apartment."</span>
                      <button onClick={() => playAudio("I am living with my aunt until I find an apartment.")} className="text-teal-800 hover:text-teal-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 3: Sự phàn nàn về thói quen xấu với "Always" */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item3')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold font-mono">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Sự phàn nàn về thói quen xấu với "Always" (Annoying Habits)
                    </h4>
                    <span className="text-[11px] text-slate-500">Nhấn mạnh sự bực bội, khó chịu khi sự việc lặp lại quá nhiều lần</span>
                  </div>
                </div>
                {accordionOpen.item3 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item3 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa & Sắc thái ngữ cảm:</strong> Thông thường <em>always</em> đi với Hiện tại đơn chỉ thói quen bình thường. Nhưng khi kết hợp với <strong>Hiện tại tiếp diễn</strong> (<em>am/is/are always + V-ing</em>), câu mang sắc thái <strong>than phiền, bực mình hoặc chỉ trích</strong> một thói quen tiêu cực của ai đó.
                  </p>

                  <div className="p-3 bg-teal-50 rounded-xl font-mono text-teal-950 font-semibold border border-teal-200 text-xs">
                    S + am/is/are + always + V-ing! (Phàn nàn, chỉ trích)
                  </div>

                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 1: "He <strong>is always leaving</strong> his dirty socks on the floor!"</span>
                      <button onClick={() => playAudio("He is always leaving his dirty socks on the floor!")} className="text-teal-800 hover:text-teal-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 2: "You <strong>are always interrupting</strong> me when I'm speaking!"</span>
                      <button onClick={() => playAudio("You are always interrupting me when I'm speaking!")} className="text-teal-800 hover:text-teal-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 4: Kế hoạch đã sắp xếp trong tương lai gần */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item4')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold font-mono">
                    4
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Kế hoạch sắp xếp trong tương lai gần (Fixed Arrangements)
                    </h4>
                    <span className="text-[11px] text-slate-500">Đã lên lịch chắc chắn, có thời gian/địa điểm cụ thể</span>
                  </div>
                </div>
                {accordionOpen.item4 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item4 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Diễn tả một kế hoạch trong tương lai đã được chuẩn bị hoặc hẹn trước rõ ràng (đã mua vé, đã đặt bàn, đã thống nhất giờ giấc). Có độ chắc chắn xảy ra cao hơn cấu trúc <em>be going to</em>.
                  </p>

                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 1: "I <strong>am flying</strong> to Tokyo tomorrow morning." (Đã mua vé máy bay)</span>
                      <button onClick={() => playAudio("I am flying to Tokyo tomorrow morning.")} className="text-teal-800 hover:text-teal-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 2: "We <strong>are having</strong> dinner with the manager tonight." (Đã hẹn lịch)</span>
                      <button onClick={() => playAudio("We are having dinner with the manager tonight.")} className="text-teal-800 hover:text-teal-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Nâng cao */}
            <div className="p-5 rounded-2xl bg-teal-50/80 border-2 border-teal-300/80 text-teal-950 space-y-3 mt-4">
              <div className="flex items-center gap-2 text-teal-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-teal-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Nâng cao</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Nhầm lẫn giữa thói quen lâu dài (Hiện tại đơn) và hành động tạm thời (Hiện tại tiếp diễn):</strong> Học sinh thường thấy câu có trạng từ chỉ tần suất là tự động chọn Hiện tại đơn mà quên xét ngữ cảnh tạm thời.<br />
                    <div className="mt-1.5 space-y-1 text-slate-800 bg-white p-2.5 rounded-lg border border-teal-200">
                      <div>• <em>"I work in a bank."</em> (Công việc chính thức, định cư lâu dài ➔ dùng <strong>Hiện tại đơn</strong>).</div>
                      <div>• <em>"I'm working as a waiter this summer."</em> (Chỉ làm thêm tạm thời trong kỳ nghỉ hè ➔ bắt buộc dùng <strong>Hiện tại tiếp diễn</strong>).</div>
                    </div>
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
            {/* Phân chia 2 khối: Trạng từ chỉ thời điểm & Câu mệnh lệnh cảnh báo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Khối 1: Trạng từ và cụm từ chỉ thời gian */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-teal-600" />
                    1. Trạng từ & Cụm từ chỉ thời gian
                  </h4>
                  <span className="text-[11px] font-mono bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 rounded-md font-semibold">
                    Time Markers
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200">
                    <div className="font-bold text-teal-950 font-mono text-xs">
                      Ngay tại thời điểm nói (Right now):
                    </div>
                    <div className="text-teal-900 mt-1 font-sans space-y-1">
                      <div>• <strong>now</strong> (bây giờ)</div>
                      <div>• <strong>right now</strong> (ngay bây giờ)</div>
                      <div>• <strong>at the moment</strong> (lúc này, thời điểm này)</div>
                      <div>• <strong>at present</strong> (hiện tại)</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 font-mono text-xs">
                      Khoảng thời gian tạm thời xung quanh hiện tại:
                    </div>
                    <div className="text-slate-700 mt-1 font-sans space-y-1">
                      <div>• <strong>these days</strong> (dạo này, những ngày này)</div>
                      <div>• <strong>this week / this month / this semester</strong> (tuần này, tháng này, học kỳ này)</div>
                      <div>• <strong>nowadays</strong> (ngày nay, dạo này)</div>
                      <div>• <strong>for the time being / currently</strong> (hiện thời, hiện tại)</div>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1 text-xs">
                    <div className="flex items-center justify-between bg-slate-50 p-2 rounded border border-slate-200">
                      <span>• "What are you doing <strong>at the moment</strong>?"</span>
                      <button onClick={() => playAudio("What are you doing at the moment?")} className="text-teal-700"><Volume2 className="w-3.5 h-3.5" /></button>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 p-2 rounded border border-slate-200">
                      <span>• "She is working from home <strong>this week</strong>."</span>
                      <button onClick={() => playAudio("She is working from home this week.")} className="text-teal-700"><Volume2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Khối 2: Câu mệnh lệnh / Cảnh báo đứng đầu câu */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <Bell className="w-4 h-4 text-cyan-600" />
                    2. Câu mệnh lệnh & Cảnh báo đứng đầu câu (Warning Cues)
                  </h4>
                  <span className="text-[11px] font-mono bg-cyan-50 text-cyan-800 border border-cyan-200 px-2 py-0.5 rounded-md font-semibold">
                    Imperatives !
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 border border-slate-200">
                  Các câu cảm thán hoặc mệnh lệnh có dấu chấm than (<strong>!</strong>) lôi kéo sự chú ý vào hành động đang xảy ra ngay lúc nói:
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="grid grid-cols-2 gap-2 font-mono">
                    <div className="p-2 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-950 font-bold">
                      • Look! (Nhìn kìa!)
                    </div>
                    <div className="p-2 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-950 font-bold">
                      • Listen! (Nghe kìa!)
                    </div>
                    <div className="p-2 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-950 font-bold">
                      • Be quiet! (Trật tự đi!)
                    </div>
                    <div className="p-2 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-950 font-bold">
                      • Keep silent! (Giữ im lặng!)
                    </div>
                    <div className="p-2 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-950 font-bold">
                      • Watch out! (Coi chừng!)
                    </div>
                    <div className="p-2 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-950 font-bold">
                      • Hurry up! (Nhanh lên!)
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1 text-xs">
                    <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <span>• "<strong>Listen!</strong> Someone is singing in the next room."</span>
                      <button onClick={() => playAudio("Listen! Someone is singing in the next room.")} className="text-cyan-700"><Volume2 className="w-3.5 h-3.5" /></button>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <span>• "<strong>Watch out!</strong> The bus is coming fast!"</span>
                      <button onClick={() => playAudio("Watch out! The bus is coming fast!")} className="text-cyan-700"><Volume2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Nhận biết & Dấu hiệu */}
            <div className="p-5 rounded-2xl bg-teal-50/80 border-2 border-teal-300/80 text-teal-950 space-y-3 mt-4">
              <div className="flex items-center gap-2 text-teal-900 font-extrabold text-sm sm:text-base">
                <ShieldAlert className="w-5 h-5 text-teal-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Nhận biết & Dấu hiệu</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Bị đánh lừa bởi các dấu hiệu giả định:</strong> Học sinh thấy từ <em>always</em> thường mặc định chọn thì Hiện tại đơn, nhưng quên mất cấu trúc nâng cao khi <em>always</em> đi kèm Hiện tại tiếp diễn để mang sắc thái phàn nàn, khó chịu.<br />
                    <span className="text-slate-800 font-mono text-xs block mt-0.5">
                      💡 Ví dụ phân biệt: <em>"He always comes on time."</em> (Thói quen tốt ➔ Hiện tại đơn) vs <em>"He is always coming late!"</em> (Phàn nàn vì hay đi trễ ➔ Hiện tại tiếp diễn).
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Bẫy Stative Verbs đi sau câu mệnh lệnh:</strong> Dù đứng sau <em>Look!</em> hay <em>Listen!</em>, nếu động từ thuộc nhóm trạng thái miêu tả diện mạo hay cảm nhận (<em>look, sound, smell, taste, feel</em>), tuyệt đối vẫn dùng Hiện tại đơn.<br />
                    <span className="text-rose-700 font-mono text-xs block mt-0.5">
                      ❌ Viết: "Look! That cake is smelling delicious" là SAI.
                    </span>
                    <span className="text-teal-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-teal-600 inline" /> Sửa đúng: <strong>"Look! That cake smells delicious."</strong>
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
