import React, { useState } from 'react';
import { BookOpen, Sparkles, Volume2, AlertTriangle, Play, ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import { playAudio } from '../utils/audio';

interface PresentSimpleDeepDiveProps {
  onStartPractice?: () => void;
}

export const PresentSimpleDeepDive: React.FC<PresentSimpleDeepDiveProps> = ({ onStartPractice }) => {
  const [activeTab, setActiveTab] = useState<'tab1' | 'tab2' | 'tab3'>('tab1');

  // Accordion state for Tab 2
  const [accordionOpen, setAccordionOpen] = useState<{ [key: string]: boolean }>({
    item1: true,
    item2: true,
    item3: true,
    item4: true,
    item5: true,
  });

  const toggleAccordion = (key: string) => {
    setAccordionOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mt-8 transition-all">
      {/* Header Banner: Present Simple Masterclass */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-slate-900 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-emerald-100 text-xs font-semibold mb-2 backdrop-blur-md border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>Chuyên Đề Trọng Điểm</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
              PRESENT SIMPLE MASTERCLASS
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 max-w-2xl leading-relaxed">
              Mô-đun học tập toàn diện thì Hiện tại đơn: Phân vùng Động từ thường & To be, quy tắc thêm s/es, chuyên đề chân lý/thời gian biểu cố định, vị trí trạng từ tần suất & hệ thống cảnh báo bẫy đề thi.
            </p>
          </div>

          {onStartPractice && (
            <button
              onClick={onStartPractice}
              className="px-5 py-3 bg-white text-emerald-950 rounded-xl text-xs font-bold hover:bg-emerald-50 active:scale-95 transition-all shadow-sm flex items-center gap-2 whitespace-nowrap self-start md:self-auto shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Luyện 8 câu phản xạ HT đơn</span>
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
              ? 'border-emerald-600 text-emerald-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <BookOpen className="w-4 h-4 text-emerald-600" />
          <span>TAB 1: CÔNG THỨC CHI TIẾT 3 DẠNG</span>
        </button>

        <button
          onClick={() => setActiveTab('tab2')}
          className={`px-6 py-4 whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'tab2'
              ? 'border-emerald-600 text-emerald-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>TAB 2: CÁC CÁCH DÙNG MỞ RỘNG</span>
        </button>

        <button
          onClick={() => setActiveTab('tab3')}
          className={`px-6 py-4 whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'tab3'
              ? 'border-emerald-600 text-emerald-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <Volume2 className="w-4 h-4 text-emerald-600" />
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
            {/* Phân vùng 2 Cards: Động từ thường & Động từ To be */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card 1: Động từ thường (Regular / Irregular Verbs) */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-600" />
                    1. Động từ thường (Action Verbs)
                  </h4>
                  <span className="text-[11px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-md font-semibold">
                    V / V(s/es)
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Khẳng định */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 text-emerald-950 border border-emerald-100">
                    <div className="font-bold text-emerald-900">
                      (+) Khẳng định:
                    </div>
                    <div className="font-mono text-xs text-emerald-900 mt-1 space-y-1 bg-white/70 p-2 rounded border border-emerald-100">
                      <div>• S (I / We / You / They / N số nhiều) + <strong>V (nguyên thể)</strong></div>
                      <div>• S (He / She / It / N số ít) + <strong>V(s/es)</strong></div>
                    </div>
                    <div className="text-xs text-emerald-900/90 mt-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>• They <strong>work</strong> hard every day.</span>
                        <button onClick={() => playAudio("They work hard every day")} className="text-emerald-700 hover:text-emerald-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• She <strong>works</strong> in a bank.</span>
                        <button onClick={() => playAudio("She works in a bank")} className="text-emerald-700 hover:text-emerald-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Phủ định */}
                  <div className="p-3.5 rounded-xl bg-rose-50/70 text-rose-950 border border-rose-100">
                    <div className="font-bold text-rose-900">
                      (-) Phủ định:
                    </div>
                    <div className="font-mono text-xs text-rose-900 mt-1 space-y-1 bg-white/70 p-2 rounded border border-rose-100">
                      <div>• S (I / We / You / They) + <strong>don't + V (nguyên thể)</strong></div>
                      <div>• S (He / She / It) + <strong>doesn't + V (nguyên thể)</strong></div>
                    </div>
                    <div className="text-xs text-rose-900/90 mt-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>• We <strong>don't like</strong> fast food.</span>
                        <button onClick={() => playAudio("We don't like fast food")} className="text-rose-700 hover:text-rose-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• He <strong>doesn't drink</strong> coffee.</span>
                        <button onClick={() => playAudio("He doesn't drink coffee")} className="text-rose-700 hover:text-rose-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Nghi vấn */}
                  <div className="p-3.5 rounded-xl bg-blue-50/70 text-blue-950 border border-blue-100">
                    <div className="font-bold text-blue-900">
                      (?) Nghi vấn:
                    </div>
                    <div className="font-mono text-xs text-blue-900 mt-1 bg-white/70 p-2 rounded border border-blue-100">
                      Do / Does + S + <strong>V (nguyên thể)</strong>?
                    </div>
                    <div className="text-[11px] text-blue-800 font-medium mt-1">
                      Trả lời: Yes, S + do/does. / No, S + don't/doesn't.
                    </div>
                    <div className="text-xs text-blue-950 mt-2 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span>• <strong>Do</strong> you <strong>speak</strong> English? ➔ Yes, I do / No, I don't.</span>
                        <button onClick={() => playAudio("Do you speak English? Yes, I do")} className="text-blue-700 hover:text-blue-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• <strong>Does</strong> she <strong>live</strong> here? ➔ Yes, she does / No, she doesn't.</span>
                        <button onClick={() => playAudio("Does she live here? Yes, she does")} className="text-blue-700 hover:text-blue-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Động từ "To be" (Am / Is / Are) */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-teal-600" />
                    2. Động từ "To be" (Am / Is / Are)
                  </h4>
                  <span className="text-[11px] font-mono bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 rounded-md font-semibold">
                    am / is / are
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 border border-slate-200 space-y-1">
                  <div>• <strong>I</strong> ➔ am ('m)</div>
                  <div>• <strong>He / She / It / N số ít</strong> ➔ is ('s)</div>
                  <div>• <strong>We / You / They / N số nhiều</strong> ➔ are ('re)</div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Khẳng định */}
                  <div className="p-3.5 rounded-xl bg-teal-50/70 text-teal-950 border border-teal-100">
                    <div className="font-bold text-teal-900 flex items-center justify-between">
                      <span>(+) Khẳng định</span>
                      <span className="font-mono text-xs bg-teal-100/80 px-2 py-0.5 rounded text-teal-900 font-semibold">
                        S + am/is/are + O / Adj
                      </span>
                    </div>
                    <div className="text-xs text-teal-900/90 mt-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>• I <strong>am</strong> a teacher.</span>
                        <button onClick={() => playAudio("I am a teacher")} className="text-teal-700 hover:text-teal-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• She <strong>is</strong> happy.</span>
                        <button onClick={() => playAudio("She is happy")} className="text-teal-700 hover:text-teal-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• They <strong>are</strong> students.</span>
                        <button onClick={() => playAudio("They are students")} className="text-teal-700 hover:text-teal-900 p-1">
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
                        S + am/is/are + not ('m not / isn't / aren't)
                      </span>
                    </div>
                    <div className="text-xs text-rose-900/90 mt-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>• He <strong>isn't</strong> late.</span>
                        <button onClick={() => playAudio("He isn't late")} className="text-rose-700 hover:text-rose-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• We <strong>aren't</strong> tired.</span>
                        <button onClick={() => playAudio("We aren't tired")} className="text-rose-700 hover:text-rose-900 p-1">
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
                        Am/Is/Are + S + O / Adj?
                      </span>
                    </div>
                    <div className="text-[11px] text-blue-800 font-medium mt-1">
                      Trả lời: Yes, S + am/is/are / No, S + 'm not / isn't / aren't.
                    </div>
                    <div className="text-xs text-blue-950 mt-2 flex items-center justify-between">
                      <span>• <strong>Are</strong> you <strong>ready</strong>? ➔ Yes, I am / No, I'm not.</span>
                      <button onClick={() => playAudio("Are you ready? Yes, I am")} className="text-blue-700 hover:text-blue-900 p-1">
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Khối Quy tắc chính tả thêm "-s/es" & Quy tắc phát âm */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {/* Card Quy tắc thêm s/es */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                    3. Quy tắc thêm "-s/es" (Ngôi He/She/It/Danh từ số ít)
                  </h4>
                  <span className="text-[11px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-md font-semibold">
                    Spelling Rules
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200">
                    <div className="font-bold text-amber-950 flex items-center gap-1.5">
                      <span>• Tận cùng là: <strong>-o, -s, -ch, -x, -sh, -z</strong> ➔ thêm <strong>-es</strong></span>
                    </div>
                    <div className="text-amber-900 mt-1 font-mono text-[11px]">
                      Mẹo nhớ: "Ôi Sông Chợ Xưa Sóng Zữ"
                    </div>
                    <div className="text-slate-700 mt-1">
                      Ví dụ: watch ➔ <strong>watches</strong>, go ➔ <strong>goes</strong>, fix ➔ <strong>fixes</strong>, wash ➔ <strong>washes</strong>, miss ➔ <strong>misses</strong>.
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900">
                      • Tận cùng là <strong>Phụ âm + "y"</strong> ➔ đổi "y" thành "i" rồi thêm <strong>-es</strong>
                    </div>
                    <div className="text-slate-700 mt-1">
                      Ví dụ: study ➔ <strong>studies</strong>, fly ➔ <strong>flies</strong>, cry ➔ <strong>cries</strong>.
                    </div>
                    <div className="text-emerald-800 font-medium mt-1">
                      Lưu ý: <strong>Nguyên âm (a, e, i, o, u) + "y"</strong> chỉ thêm <strong>-s</strong> thông thường: play ➔ <strong>plays</strong>, buy ➔ <strong>buys</strong>.
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900">
                      • Các trường hợp còn lại ➔ thêm <strong>-s</strong>
                    </div>
                    <div className="text-slate-700 mt-1">
                      Ví dụ: work ➔ <strong>works</strong>, read ➔ <strong>reads</strong>, speak ➔ <strong>speaks</strong>.
                    </div>
                    <div className="text-indigo-800 font-semibold mt-1">
                      Động từ bất quy tắc đặc biệt: have ➔ <strong>has</strong>.
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Quy tắc phát âm đuôi -s/es */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                    4. Quy tắc phát âm đuôi "-s/es" (/s/, /ɪz/, /z/)
                  </h4>
                  <span className="text-[11px] font-mono bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 rounded-md font-semibold">
                    Pronunciation
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                    <div className="font-bold text-emerald-950 flex items-center justify-between">
                      <span>Phát âm là /s/: Sau âm vô thanh (/p/, /t/, /k/, /f/, /θ/)</span>
                      <span className="font-mono text-emerald-800 font-bold bg-emerald-100 px-1.5 py-0.5 rounded">/s/</span>
                    </div>
                    <div className="text-emerald-900 mt-1 font-mono text-[11px]">
                      Mẹo nhớ thần thánh: "Thời phong kiến phương Tây"
                    </div>
                    <div className="text-slate-700 mt-1">
                      Ví dụ: stops (/p/), hats (/t/), books (/k/), laughs (/f/), months (/θ/).
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200">
                    <div className="font-bold text-blue-950 flex items-center justify-between">
                      <span>Phát âm là /ɪz/: Sau âm rít (/s/, /z/, /ʃ/, /tʃ/, /ʒ/, /dʒ/)</span>
                      <span className="font-mono text-blue-800 font-bold bg-blue-100 px-1.5 py-0.5 rounded">/ɪz/</span>
                    </div>
                    <div className="text-slate-700 mt-1">
                      Kết thúc bằng chữ cái: <em>-s, -ss, -ch, -sh, -x, -z, -ge, -ce</em>.
                    </div>
                    <div className="text-slate-700 mt-1">
                      Ví dụ: watches, boxes, kisses, wishes, changes, dances.
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-200">
                    <div className="font-bold text-purple-950 flex items-center justify-between">
                      <span>Phát âm là /z/: Sau các âm hữu thanh còn lại & nguyên âm</span>
                      <span className="font-mono text-purple-800 font-bold bg-purple-100 px-1.5 py-0.5 rounded">/z/</span>
                    </div>
                    <div className="text-slate-700 mt-1">
                      Các âm còn lại: /b/, /d/, /g/, /v/, /m/, /n/, /l/, /r/, các nguyên âm...
                    </div>
                    <div className="text-slate-700 mt-1">
                      Ví dụ: plays, runs, calls, loves, dogs, sees, reads.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Cấu trúc */}
            <div className="p-5 rounded-2xl bg-emerald-50/80 border-2 border-emerald-300/80 text-emerald-950 space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Cấu trúc</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Quên thêm "s/es" ở ngôi thứ ba số ít (He/She/It):</strong> Học sinh hay quên chia động từ theo chủ ngữ số ít, viết sai thành <em>"He work hard"</em>.<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Ngôi He/She/It/Danh từ số ít bắt buộc thêm s/es: <strong>He works hard</strong>, <strong>She watches TV</strong>.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Dư thừa đuôi "s" sau trợ động từ "doesn't" hoặc "does":</strong> Khi đã mượn trợ động từ <em>does / doesn't</em> trong câu nghi vấn hoặc phủ định, động từ chính bắt buộc phải về dạng nguyên thể không chia, nhưng học sinh hay viết nhầm thành <em>"He doesn't works"</em> hoặc <em>"Does he works?"</em>.<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Bỏ đuôi s: <strong>He doesn't work</strong> / <strong>Does he work?</strong>
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Nhầm lẫn giữa trợ động từ "Do/Does" với động từ "To be":</strong> Viết sai thành <em>"Does you happy?"</em> hoặc <em>"Are you like music?"</em>.<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Đi với Tính từ / Danh từ dùng To be: <strong>Are you happy?</strong>; Đi với Động từ thường dùng trợ động từ Do/Does: <strong>Do you like music?</strong>
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

            {/* Accordion 1: Chân lý, sự thật hiển nhiên (General Truths / Facts) */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item1')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold font-mono">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Chân lý, sự thật hiển nhiên (General Truths / Scientific Facts)
                    </h4>
                    <span className="text-[11px] text-slate-500">Quy luật tự nhiên, chân lý khoa học bất biến ở mọi thời điểm</span>
                  </div>
                </div>
                {accordionOpen.item1 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item1 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Diễn tả các quy luật tự nhiên, định lý khoa học, chân lý luôn luôn đúng ở mọi thời điểm, không phụ thuộc vào mốc thời gian nói.
                  </p>

                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 1: "The Earth <strong>revolves</strong> around the Sun."</span>
                      <button onClick={() => playAudio("The Earth revolves around the Sun")} className="text-emerald-800 hover:text-emerald-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 2: "Water <strong>boils</strong> at 100°C."</span>
                      <button onClick={() => playAudio("Water boils at 100 degrees Celsius")} className="text-emerald-800 hover:text-emerald-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: Thói quen, hành động lặp đi lặp lại ở hiện tại (Habits / Routines) */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item2')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold font-mono">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Thói quen, hành động lặp đi lặp lại ở hiện tại (Habits / Routines)
                    </h4>
                    <span className="text-[11px] text-slate-500">Nếp sinh hoạt thường nhật, diễn ra định kỳ</span>
                  </div>
                </div>
                {accordionOpen.item2 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item2 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Diễn tả hành động xảy ra thường xuyên, lặp đi lặp lại như một thói quen hoặc nếp sống (thường đi kèm trạng từ chỉ tần suất).
                  </p>

                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 1: "I <strong>wake up</strong> at 6 AM every day."</span>
                      <button onClick={() => playAudio("I wake up at 6 AM every day")} className="text-emerald-800 hover:text-emerald-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 2: "She usually <strong>jogs</strong> in the park after work."</span>
                      <button onClick={() => playAudio("She usually jogs in the park after work")} className="text-emerald-800 hover:text-emerald-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 3: Lịch trình, thời gian biểu, chương trình cố định (Timetables / Schedules) */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item3')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold font-mono">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Lịch trình, thời gian biểu cố định (Timetables / Fixed Schedules)
                    </h4>
                    <span className="text-[11px] text-slate-500">Lịch tàu xe, máy bay, chiếu phim... diễn ra trong tương lai nhưng dùng Hiện tại đơn</span>
                  </div>
                </div>
                {accordionOpen.item3 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item3 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Diễn tả thời gian biểu cố định của phương tiện giao thông (tàu xe, máy bay), lịch chiếu phim, lịch học... Dù hành động xảy ra trong tương lai nhưng bắt buộc dùng Hiện tại đơn vì tính chất cố định bất di bất dịch của lịch trình.
                  </p>

                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 1: "The train <strong>leaves</strong> at 8 PM tonight."</span>
                      <button onClick={() => playAudio("The train leaves at 8 PM tonight")} className="text-emerald-800 hover:text-emerald-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 2: "Our flight <strong>departs</strong> tomorrow morning."</span>
                      <button onClick={() => playAudio("Our flight departs tomorrow morning")} className="text-emerald-800 hover:text-emerald-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 4: Câu điều kiện loại 1 (Conditional Sentence Type 1) */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item4')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold font-mono">
                    4
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Câu điều kiện loại 1 (Conditional Type 1) - Mệnh đề IF
                    </h4>
                    <span className="text-[11px] text-slate-500">Giả định sự việc có thể xảy ra ở hiện tại hoặc tương lai</span>
                  </div>
                </div>
                {accordionOpen.item4 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item4 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa & Cấu trúc:</strong> Trong câu điều kiện loại 1 diễn tả điều kiện có thật ở hiện tại/tương lai, <strong>mệnh đề IF bắt buộc chia ở thì Hiện tại đơn</strong>:
                  </p>
                  <div className="p-3 bg-emerald-50 rounded-xl font-mono text-emerald-950 font-semibold border border-emerald-200 text-xs">
                    If + S + V(s/es), S + will + V (nguyên thể)
                  </div>

                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 1: "If it <strong>rains</strong> tomorrow, we will stay at home."</span>
                      <button onClick={() => playAudio("If it rains tomorrow, we will stay at home")} className="text-emerald-800 hover:text-emerald-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 2: "If she <strong>studies</strong> hard, she will pass the exam."</span>
                      <button onClick={() => playAudio("If she studies hard, she will pass the exam")} className="text-emerald-800 hover:text-emerald-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 5: Mệnh đề trạng ngữ chỉ thời gian trong tương lai (Future Time Clauses) */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item5')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold font-mono">
                    5
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Mệnh đề trạng ngữ chỉ thời gian tương lai (Time Clauses)
                    </h4>
                    <span className="text-[11px] text-slate-500">Sau when, as soon as, until, before, after - Lùi về Hiện tại đơn</span>
                  </div>
                </div>
                {accordionOpen.item5 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item5 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Quy tắc lùi thì thi cử:</strong> Khi diễn tả 2 hành động liên tiếp trong tương lai, mệnh đề đi kèm với các liên từ thời gian (<em>when, as soon as, until, before, after, by the time</em>) <strong>tuyệt đối không dùng "will"</strong>, mà bắt buộc chia thì <strong>Hiện tại đơn</strong>:
                  </p>
                  <div className="p-3 bg-emerald-50 rounded-xl font-mono text-emerald-950 font-semibold border border-emerald-200 text-xs">
                    S + will + V (nguyên thể) + [When / As soon as / Before / After] + S + V(s/es)
                  </div>

                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 1: "I will call you as soon as I <strong>arrive</strong> at the airport."</span>
                      <button onClick={() => playAudio("I will call you as soon as I arrive at the airport")} className="text-emerald-800 hover:text-emerald-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 2: "We will wait here until he <strong>comes</strong>."</span>
                      <button onClick={() => playAudio("We will wait here until he comes")} className="text-emerald-800 hover:text-emerald-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Nâng cao */}
            <div className="p-5 rounded-2xl bg-emerald-50/80 border-2 border-emerald-300/80 text-emerald-950 space-y-3 mt-4">
              <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Nâng cao</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Dùng Hiện tại đơn thay vì Hiện tại tiếp diễn cho hành động tạm thời:</strong> Học sinh hay nhầm lẫn thói quen lâu dài bản chất với hành động chỉ diễn ra tạm thời xung quanh thời điểm nói.<br />
                    <div className="mt-1 space-y-1 text-slate-800 bg-white p-2.5 rounded-lg border border-emerald-200">
                      <div>• <em>"He lives in Hanoi."</em> (Bản chất lâu dài, nơi cư trú ổn định ➔ dùng Hiện tại đơn).</div>
                      <div>• <em>"He is living in Hanoi this month."</em> (Chỉ ở tạm thời tháng này ➔ dùng Hiện tại tiếp diễn).</div>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Chia Hiện tại đơn sai trong mệnh đề trạng ngữ chỉ thời gian tương lai:</strong> Sau các liên từ thời gian như <em>when, as soon as, until, before, after</em>, mệnh đề tương lai bắt buộc phải lùi về thì Hiện tại đơn (tuyệt đối không dùng will).<br />
                    <span className="text-rose-700 font-mono text-xs block mt-0.5">
                      ❌ Viết: "When I will come back home, I will call you" là SAI.
                    </span>
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: <strong>"When I come back home, I will call you."</strong>
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
            {/* Phân chia 2 khối: Trạng từ tần suất & Cụm từ chu kỳ thời gian */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Khối 1: Trạng từ chỉ tần suất (Adverbs of Frequency) */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-600" />
                    1. Trạng từ chỉ tần suất (Adverbs of Frequency)
                  </h4>
                  <span className="text-[11px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-md font-semibold">
                    Vị trí vàng
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-800 border border-slate-200 space-y-1">
                  <div>• Đứng <strong>TRƯỚC động từ thường</strong>: <em>S + Adv + V</em></div>
                  <div>• Đứng <strong>SAU động từ To be / trợ động từ</strong>: <em>S + To be + Adv</em></div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200">
                    <div className="font-bold text-emerald-950 font-mono text-xs">
                      Các trạng từ phổ biến (từ 100% ➔ 0%):
                    </div>
                    <div className="text-slate-700 mt-1 text-xs space-y-1">
                      <div>• <strong>always</strong> (100% - luôn luôn)</div>
                      <div>• <strong>usually</strong> (80% - thường xuyên)</div>
                      <div>• <strong>often / frequently</strong> (60% - thường)</div>
                      <div>• <strong>sometimes</strong> (50% - thỉnh thoảng)</div>
                      <div>• <strong>seldom / rarely / hardly</strong> (10% - hiếm khi)</div>
                      <div>• <strong>never</strong> (0% - không bao giờ)</div>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1 text-xs">
                    <div className="flex items-center justify-between bg-slate-50 p-2 rounded border border-slate-200">
                      <span>• "She <strong>always arrives</strong> early." (Đứng trước V thường)</span>
                      <button onClick={() => playAudio("She always arrives early")} className="text-emerald-700"><Volume2 className="w-3.5 h-3.5" /></button>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 p-2 rounded border border-slate-200">
                      <span>• "They <strong>are usually</strong> busy." (Đứng sau To be)</span>
                      <button onClick={() => playAudio("They are usually busy")} className="text-emerald-700"><Volume2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Khối 2: Cụm từ chỉ chu kỳ thời gian (Time Expressions) */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-teal-600" />
                    2. Cụm từ chỉ chu kỳ thời gian (Time Expressions)
                  </h4>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200">
                    <div className="font-bold text-teal-950 font-mono text-xs sm:text-sm">
                      Every + khoảng thời gian
                    </div>
                    <div className="text-teal-900/90 mt-1 font-sans">
                      • <strong>every day</strong> (mỗi ngày), <strong>every week</strong> (mỗi tuần), <strong>every month</strong>, <strong>every year</strong>...
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 font-mono text-xs sm:text-sm">
                      Số lần + a / per + khoảng thời gian
                    </div>
                    <div className="text-slate-700 mt-1 font-sans space-y-0.5">
                      <div>• <strong>once a week</strong> (một lần một tuần)</div>
                      <div>• <strong>twice a month</strong> (hai lần một tháng)</div>
                      <div>• <strong>three times a year</strong> (ba lần một năm)</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 font-mono text-xs sm:text-sm">
                      Các buổi trong ngày lặp lại định kỳ
                    </div>
                    <div className="text-slate-600 mt-1 font-sans">
                      • <em>in the morning</em>, <em>in the afternoon</em>, <em>at night</em>... (trong ngữ cảnh thói quen sinh hoạt lặp đi lặp lại).
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Nhận biết & Vị trí trạng từ */}
            <div className="p-5 rounded-2xl bg-emerald-50/80 border-2 border-emerald-300/80 text-emerald-950 space-y-3 mt-4">
              <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Nhận biết & Trạng từ</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Đặt sai vị trí trạng từ chỉ tần suất:</strong> Học sinh hay đặt trạng từ ở cuối câu hoặc sau động từ theo thói quen dịch nghĩa tiếng Việt (*"She goes always to school"*).<br />
                    <span className="text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline" /> Sửa đúng: Trạng từ đứng <strong>trước động từ thường</strong>: <strong>"She always goes to school."</strong>
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Nhầm lẫn tính linh hoạt của trạng từ "sometimes":</strong> Từ <em>sometimes</em> đặc biệt linh hoạt: có thể đứng ở <strong>đầu câu, giữa câu (trước V thường) hoặc cuối câu</strong> đều đúng ngữ pháp. Học sinh hay bị lúng túng khi làm bài tập viết lại câu hoặc sắp xếp trật tự từ.<br />
                    <span className="text-slate-800 font-mono text-xs block mt-0.5">
                      💡 Cả 3 cách đều đúng: <em>"Sometimes I read books"</em> = <em>"I sometimes read books"</em> = <em>"I read books sometimes."</em>
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
