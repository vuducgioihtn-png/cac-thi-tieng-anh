import React, { useState } from 'react';
import { BookOpen, Sparkles, Volume2, AlertTriangle, Play, ChevronDown, ChevronUp, Check, X, Compass, Clock, Award } from 'lucide-react';
import { playAudio } from '../utils/audio';

interface PresentPerfectDeepDiveProps {
  onStartPractice?: () => void;
}

export const PresentPerfectDeepDive: React.FC<PresentPerfectDeepDiveProps> = ({ onStartPractice }) => {
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
      {/* Header Banner: Present Perfect Masterclass */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-slate-950 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-purple-100 text-xs font-semibold mb-2 backdrop-blur-md border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-purple-200" />
              <span>Chuyên Đề Trọng Điểm</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
              PRESENT PERFECT MASTERCLASS
            </h3>
            <p className="text-xs sm:text-sm text-purple-100/90 mt-1 max-w-2xl leading-relaxed">
              Mô-đun học tập toàn diện thì Hiện tại hoàn thành: Cấu trúc Have/Has + V3/ed, phân biệt "have been to" vs "have gone to", chuyên đề hành động kéo dài (For/Since), trải nghiệm cuộc đời và vị trí vàng của Already/Yet.
            </p>
          </div>

          {onStartPractice && (
            <button
              onClick={onStartPractice}
              className="px-5 py-3 bg-white text-indigo-950 rounded-xl text-xs font-bold hover:bg-purple-50 active:scale-95 transition-all shadow-sm flex items-center gap-2 whitespace-nowrap self-start md:self-auto shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Luyện 8 câu phản xạ HT hoàn thành</span>
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
          <BookOpen className="w-4 h-4 text-indigo-600" />
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
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>TAB 2: CÁC CÁCH DÙNG MỞ RỘNG</span>
        </button>

        <button
          onClick={() => setActiveTab('tab3')}
          className={`px-6 py-4 whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'tab3'
              ? 'border-indigo-600 text-indigo-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <Volume2 className="w-4 h-4 text-indigo-600" />
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
            {/* Phân vùng 2 Cards: Cấu trúc 3 dạng câu & Phân biệt Have/Has/V3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card 1: Cấu trúc 3 dạng câu */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-indigo-600" />
                    1. Cấu trúc 3 dạng câu (Khẳng định - Phủ định - Nghi vấn)
                  </h4>
                  <span className="text-[11px] font-mono bg-indigo-50 text-indigo-800 border border-indigo-200 px-2 py-0.5 rounded-md font-semibold">
                    have/has + V3/ed
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Khẳng định */}
                  <div className="p-3.5 rounded-xl bg-indigo-50/70 text-indigo-950 border border-indigo-100">
                    <div className="font-bold text-indigo-900">
                      (+) Khẳng định:
                    </div>
                    <div className="font-mono text-xs text-indigo-900 mt-1 space-y-1 bg-white/70 p-2 rounded border border-indigo-100">
                      <div>• S (I / We / You / They / N số nhiều) + <strong>have + V3/ed</strong></div>
                      <div>• S (He / She / It / N số ít) + <strong>has + V3/ed</strong></div>
                    </div>
                    <div className="text-xs text-indigo-900/90 mt-2 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span>• They <strong>have lived</strong> here for 5 years.</span>
                        <button onClick={() => playAudio("They have lived here for five years.")} className="text-indigo-700 hover:text-indigo-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• She <strong>has finished</strong> her project.</span>
                        <button onClick={() => playAudio("She has finished her project.")} className="text-indigo-700 hover:text-indigo-900 p-1">
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
                      <div>• S (I / We / You / They) + <strong>have not (haven't) + V3/ed</strong></div>
                      <div>• S (He / She / It) + <strong>has not (hasn't) + V3/ed</strong></div>
                    </div>
                    <div className="text-xs text-rose-900/90 mt-2 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span>• We <strong>haven't seen</strong> him today.</span>
                        <button onClick={() => playAudio("We haven't seen him today.")} className="text-rose-700 hover:text-rose-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• He <strong>hasn't arrived</strong> yet.</span>
                        <button onClick={() => playAudio("He hasn't arrived yet.")} className="text-rose-700 hover:text-rose-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Nghi vấn */}
                  <div className="p-3.5 rounded-xl bg-purple-50/70 text-purple-950 border border-purple-100">
                    <div className="font-bold text-purple-900">
                      (?) Nghi vấn:
                    </div>
                    <div className="font-mono text-xs text-purple-900 mt-1 bg-white/70 p-2 rounded border border-purple-100">
                      Have / Has + S + <strong>V3/ed</strong>?
                    </div>
                    <div className="text-[11px] text-purple-800 font-medium mt-1">
                      Trả lời: Yes, S + have/has. / No, S + haven't/hasn't.
                    </div>
                    <div className="text-xs text-purple-950 mt-2 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span>• <strong>Have</strong> you ever <strong>visited</strong> London? ➔ Yes, I have / No, I haven't.</span>
                        <button onClick={() => playAudio("Have you ever visited London? Yes, I have.")} className="text-purple-700 hover:text-purple-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• <strong>Has</strong> she <strong>called</strong> you? ➔ Yes, she has / No, she hasn't.</span>
                        <button onClick={() => playAudio("Has she called you? Yes, she has.")} className="text-purple-700 hover:text-purple-900 p-1">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Phân biệt Have/Has & Dạng phân từ hai V3/ed */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-purple-600" />
                    2. Phân biệt Trợ động từ Have / Has & Dạng V3/ed
                  </h4>
                  <span className="text-[11px] font-mono bg-purple-50 text-purple-800 border border-purple-200 px-2 py-0.5 rounded-md font-semibold">
                    Auxiliary & Participle
                  </span>
                </div>

                {/* Phân biệt Have và Has */}
                <div className="p-3.5 bg-slate-50 rounded-xl text-xs text-slate-800 border border-slate-200 space-y-1.5">
                  <div className="font-bold text-slate-900 text-xs">Phân chia theo ngôi chủ ngữ:</div>
                  <div>• <strong>HAVE ('ve)</strong>: Dùng với chủ ngữ <em>I, We, You, They</em> và Danh từ số nhiều.</div>
                  <div>• <strong>HAS ('s)</strong>: Dùng với chủ ngữ <em>He, She, It</em>, Danh từ số ít và Danh từ không đếm được.</div>
                </div>

                {/* Phân từ hai V3/ed */}
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200 space-y-1.5">
                    <div className="font-bold text-purple-950 flex items-center justify-between">
                      <span>• Động từ theo quy tắc (Regular Verbs):</span>
                      <span className="font-mono text-[10px] bg-purple-200 px-1.5 py-0.5 rounded text-purple-900 font-semibold">+ ed</span>
                    </div>
                    <div className="text-slate-700">
                      Thêm đuôi <em>-ed</em> tương tự như thì Quá khứ đơn:
                    </div>
                    <div className="font-mono text-purple-900">
                      work ➔ <strong>worked</strong> | play ➔ <strong>played</strong> | live ➔ <strong>lived</strong> | stop ➔ <strong>stopped</strong>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5">
                    <div className="font-bold text-amber-950 flex items-center justify-between">
                      <span>• Động từ bất quy tắc (Irregular Verbs):</span>
                      <span className="font-mono text-[10px] bg-amber-200 px-1.5 py-0.5 rounded text-amber-900 font-semibold">Cột 3 (V3)</span>
                    </div>
                    <div className="text-slate-700">
                      Bắt buộc dùng động từ ở <strong>Cột 3 (Past Participle)</strong> trong bảng bất quy tắc:
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 font-mono text-[11px] text-amber-950 mt-1">
                      <div>• go ➔ went ➔ <strong>gone</strong></div>
                      <div>• see ➔ saw ➔ <strong>seen</strong></div>
                      <div>• be ➔ was/were ➔ <strong>been</strong></div>
                      <div>• do ➔ did ➔ <strong>done</strong></div>
                      <div>• take ➔ took ➔ <strong>taken</strong></div>
                      <div>• write ➔ wrote ➔ <strong>written</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Cấu trúc */}
            <div className="p-5 rounded-2xl bg-indigo-50/80 border-2 border-indigo-300/80 text-indigo-950 space-y-3">
              <div className="flex items-center gap-2 text-indigo-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Cấu trúc</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Nhầm lẫn trợ động từ "have" và "has":</strong> Học sinh hay nhầm lẫn giữa ngôi thứ ba số ít với ngôi số nhiều (*"She have finished"* hoặc *"The boys has left"*).<br />
                    <span className="text-indigo-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-indigo-600 inline" /> Sửa đúng: Chủ ngữ số ít dùng has: <strong>"She has finished."</strong>; Chủ ngữ số nhiều dùng have: <strong>"The boys have left."</strong>
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Quên đổi động từ chính về dạng V3/ed (nhầm với nguyên thể hoặc V2):</strong> Học sinh sau khi viết <em>have/has</em> lại quen tay dùng nguyên thể hoặc lấy cột 2 (V2 của quá khứ đơn).<br />
                    <span className="text-rose-700 font-mono text-xs block mt-0.5">
                      ❌ Viết: "I have went to the supermarket" hoặc "He has saw that film" là SAI.
                    </span>
                    <span className="text-indigo-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-indigo-600 inline" /> Sửa đúng: Phải đổi về V3 (cột 3): <strong>"I have gone to the supermarket."</strong> / <strong>"He has seen that film."</strong>
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
              Khối kiến thức chuyên sâu nâng cao dành cho bài thi phân biệt Quá khứ đơn vs Hiện tại hoàn thành và thi THPT:
            </div>

            {/* Accordion 1: Hành động bắt đầu trong quá khứ kéo dài đến hiện tại */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item1')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold font-mono">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Hành động bắt đầu trong quá khứ, kéo dài đến hiện tại và có thể tiếp tục ở tương lai
                    </h4>
                    <span className="text-[11px] text-slate-500">Nhấn mạnh tính liên tục của hành động/trạng thái (thường đi với For và Since)</span>
                  </div>
                </div>
                {accordionOpen.item1 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item1 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Diễn tả một sự việc hoặc mối quan hệ bắt đầu từ một mốc thời gian trong quá khứ, duy trì liên tục đến thời điểm nói và vẫn còn đang tiếp diễn ở hiện tại (hoặc tương lai).
                  </p>

                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 1: "I <strong>have known</strong> her for ten years." (Quen nhau 10 năm trước và giờ vẫn là bạn)</span>
                      <button onClick={() => playAudio("I have known her for ten years.")} className="text-indigo-800 hover:text-indigo-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 2: "They <strong>have lived</strong> in this house since 2015."</span>
                      <button onClick={() => playAudio("They have lived in this house since 2015.")} className="text-indigo-800 hover:text-indigo-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: Hành động đã xảy ra nhưng không rõ thời gian cụ thể (Nhấn mạnh kết quả) */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item2')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold font-mono">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Hành động đã xảy ra nhưng không rõ thời gian cụ thể (Nhấn mạnh kết quả hiện tại)
                    </h4>
                    <span className="text-[11px] text-slate-500">Quan tâm đến hậu quả/kết quả ở hiện tại hơn là thời điểm sự việc diễn ra</span>
                  </div>
                </div>
                {accordionOpen.item2 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item2 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Hành động đã hoàn tất trong quá khứ tại một thời điểm không xác định hoặc không quan trọng, nhưng kết quả hoặc dấu vết của nó vẫn tồn tại và ảnh hưởng trực tiếp đến thời điểm nói.
                  </p>

                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-200 font-medium text-slate-900 flex items-center justify-between">
                      <div>
                        <span>Ví dụ 1: "Somebody <strong>has stolen</strong> my bicycle!"</span>
                        <div className="text-[11px] text-slate-500 mt-0.5">➔ Hậu quả ở hiện tại: Bây giờ tôi không có xe để đi.</div>
                      </div>
                      <button onClick={() => playAudio("Somebody has stolen my bicycle!")} className="text-indigo-800 hover:text-indigo-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-200 font-medium text-slate-900 flex items-center justify-between">
                      <div>
                        <span>Ví dụ 2: "She <strong>has lost</strong> her keys."</span>
                        <div className="text-[11px] text-slate-500 mt-0.5">➔ Kết quả ở hiện tại: Hiện tại cô ấy không thể vào được nhà.</div>
                      </div>
                      <button onClick={() => playAudio("She has lost her keys.")} className="text-indigo-800 hover:text-indigo-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 3: Trải nghiệm tính đến thời điểm hiện tại */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item3')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold font-mono">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Trải nghiệm cuộc đời tính đến hiện tại (Life Experiences)
                    </h4>
                    <span className="text-[11px] text-slate-500">Đã từng hoặc chưa từng làm điều gì trong đời (thường đi với Ever, Never, Cấu trúc so sánh)</span>
                  </div>
                </div>
                {accordionOpen.item3 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item3 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa & Cấu trúc đặc biệt:</strong> Dùng khi tổng kết kinh nghiệm/trải nghiệm tính đến thời điểm này. Thường kết hợp với <em>ever, never</em> hoặc các cấu trúc so sánh bậc nhất (<em>the most, the best</em>) và số lần (<em>the first time, twice...</em>).
                  </p>

                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 1: "This is the best movie I <strong>have ever seen</strong>."</span>
                      <button onClick={() => playAudio("This is the best movie I have ever seen.")} className="text-indigo-800 hover:text-indigo-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 2: "It is the first time she <strong>has driven</strong> a car."</span>
                      <button onClick={() => playAudio("It is the first time she has driven a car.")} className="text-indigo-800 hover:text-indigo-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 4: Hành động vừa mới xảy ra */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item4')}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold font-mono">
                    4
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Hành động vừa mới diễn ra (với Just, Recently, Lately)
                    </h4>
                    <span className="text-[11px] text-slate-500">Sự việc vừa mới hoàn tất cách thời điểm nói một khoảnh khắc rất ngắn</span>
                  </div>
                </div>
                {accordionOpen.item4 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {accordionOpen.item4 && (
                <div className="p-5 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ý nghĩa:</strong> Diễn tả một sự việc vừa hoàn thành xong tức thì. Trạng từ <em>just</em> được đặt giữa trợ động từ <em>have/has</em> và <em>V3</em>.
                  </p>

                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 1: "I <strong>have just finished</strong> my lunch."</span>
                      <button onClick={() => playAudio("I have just finished my lunch.")} className="text-indigo-800 hover:text-indigo-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-200 font-medium text-slate-900 flex items-center justify-between">
                      <span>Ví dụ 2: "They <strong>have recently moved</strong> to a new city."</span>
                      <button onClick={() => playAudio("They have recently moved to a new city.")} className="text-indigo-800 hover:text-indigo-950 p-1">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Nâng cao */}
            <div className="p-5 rounded-2xl bg-indigo-50/80 border-2 border-indigo-300/80 text-indigo-950 space-y-3 mt-4">
              <div className="flex items-center gap-2 text-indigo-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Nâng cao</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Dùng Hiện tại hoàn thành khi có mốc thời gian quá khứ xác định:</strong> Nếu câu có từ chỉ rõ thời điểm trong quá khứ (<em>yesterday, in 2010, last week, 3 days ago, when I was young</em>), bắt buộc dùng <strong>Quá khứ đơn</strong>, tuyệt đối <strong>KHÔNG</strong> dùng Hiện tại hoàn thành.<br />
                    <span className="text-rose-700 font-mono text-xs block mt-0.5">
                      ❌ Viết: "I have visited London last year" là SAI.
                    </span>
                    <span className="text-indigo-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-indigo-600 inline" /> Sửa đúng: <strong>"I visited London last year."</strong> (Có mốc cụ thể ➔ Quá khứ đơn) vs <strong>"I have visited London."</strong> (Không nói rõ khi nào ➔ Hiện tại hoàn thành).
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Nhầm lẫn kinh điển giữa "Have been to" và "Have gone to":</strong><br />
                    <div className="mt-1.5 space-y-1.5 text-slate-800 bg-white p-2.5 rounded-lg border border-indigo-200">
                      <div>
                        • <strong>Have/has been to:</strong> Đã từng đến đâu và <strong>hiện tại đã trở về</strong>.<br />
                        <span className="text-slate-600 font-sans italic text-xs">Ví dụ: "I have been to Paris twice." (Tôi đã từng đến Paris 2 lần và giờ tôi đang ở đây).</span>
                      </div>
                      <div>
                        • <strong>Have/has gone to:</strong> Đã đi đến đâu và <strong>vẫn đang ở đó / chưa về</strong>.<br />
                        <span className="text-slate-600 font-sans italic text-xs">Ví dụ: "He has gone to Paris, so he isn't here now." (Anh ấy đã đi Paris và hiện chưa về).</span>
                      </div>
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
            {/* Phân chia 2 khối: Giới từ chỉ khoảng/mốc thời gian & Trạng từ nhận biết */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Khối 1: Giới từ chỉ thời gian trọng tâm (Since / For) */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    1. Giới từ chỉ thời gian trọng tâm: SINCE & FOR
                  </h4>
                  <span className="text-[11px] font-mono bg-indigo-50 text-indigo-800 border border-indigo-200 px-2 py-0.5 rounded-md font-semibold">
                    Core Prepositions
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {/* FOR */}
                  <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200">
                    <div className="font-bold text-indigo-950 font-mono text-xs flex items-center justify-between">
                      <span>FOR + [Khoảng thời gian] (Period of Time)</span>
                      <span className="bg-indigo-200/80 px-1.5 py-0.2 rounded text-[10px]">Độ dài</span>
                    </div>
                    <div className="text-indigo-900/90 mt-1 font-sans">
                      Diễn tả độ dài của khoảng thời gian kéo dài liên tục:
                    </div>
                    <div className="text-slate-700 mt-1 font-mono text-xs space-y-0.5">
                      <div>• <strong>for 3 years</strong> (được 3 năm)</div>
                      <div>• <strong>for a long time</strong> (trong một thời gian dài)</div>
                      <div>• <strong>for 5 months / for two hours / for ages</strong>...</div>
                    </div>
                  </div>

                  {/* SINCE */}
                  <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-200">
                    <div className="font-bold text-purple-950 font-mono text-xs flex items-center justify-between">
                      <span>SINCE + [Mốc thời gian] (Point in Time)</span>
                      <span className="bg-purple-200/80 px-1.5 py-0.2 rounded text-[10px]">Khởi điểm</span>
                    </div>
                    <div className="text-purple-900/90 mt-1 font-sans">
                      Diễn tả mốc thời gian bắt đầu hành động:
                    </div>
                    <div className="text-slate-700 mt-1 font-mono text-xs space-y-0.5">
                      <div>• <strong>since 2015</strong> (kể từ năm 2015)</div>
                      <div>• <strong>since last week</strong> (kể từ tuần trước)</div>
                      <div>• <strong>since I was a child / since 8 AM</strong>...</div>
                    </div>
                  </div>

                  {/* Cấu trúc phối thì */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <div className="font-bold text-slate-900 font-mono text-[11px] text-indigo-900">
                      Cấu trúc phối thì kinh điển:
                    </div>
                    <div className="font-mono text-indigo-950 font-semibold mt-1">
                      S + have/has + V3/ed + SINCE + S + V2/ed (Quá khứ đơn)
                    </div>
                    <div className="text-slate-600 mt-1 italic text-[11px]">
                      Ví dụ: "I haven't seen him since he moved to Hanoi."
                    </div>
                  </div>
                </div>
              </div>

              {/* Khối 2: Trạng từ nhận biết phổ biến & Vị trí vàng */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <Compass className="w-4 h-4 text-purple-600" />
                    2. Trạng từ nhận biết phổ biến & Vị trí vàng
                  </h4>
                  <span className="text-[11px] font-mono bg-purple-50 text-purple-800 border border-purple-200 px-2 py-0.5 rounded-md font-semibold">
                    Adverbs
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center justify-between">
                      <span>• Already (đã... rồi) & Just (vừa mới)</span>
                      <span className="font-mono text-[10px] bg-slate-200 px-1.5 py-0.5 rounded text-slate-700">have/has + Adv + V3</span>
                    </div>
                    <div className="text-slate-600">
                      Đứng giữa trợ động từ và V3: <em>"She has <strong>already</strong> left."</em> / <em>"I have <strong>just</strong> arrived."</em>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200 space-y-1">
                    <div className="font-bold text-rose-950 flex items-center justify-between">
                      <span>• Yet (chưa)</span>
                      <span className="font-mono text-[10px] bg-rose-200 px-1.5 py-0.5 rounded text-rose-900">Cuối câu phủ định / nghi vấn</span>
                    </div>
                    <div className="text-slate-700">
                      Chuyên dùng trong câu phủ định hoặc câu hỏi: <em>"I haven't finished <strong>yet</strong>."</em> / <em>"Have you eaten <strong>yet</strong>?"</em>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-200 space-y-1">
                    <div className="font-bold text-purple-950 flex items-center justify-between">
                      <span>• Ever (đã từng) & Never (chưa bao giờ)</span>
                      <span className="font-mono text-[10px] bg-purple-200 px-1.5 py-0.5 rounded text-purple-900">Trước V3</span>
                    </div>
                    <div className="text-slate-700">
                      <em>"Have you <strong>ever</strong> been to Japan?"</em> / <em>"I have <strong>never</strong> eaten sushi."</em>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-bold text-slate-900">
                      • So far, Up to now, Until now, Recently, Lately (cho đến nay, gần đây)
                    </div>
                    <div className="text-slate-600">
                      Thường đứng ở đầu câu hoặc cuối câu: <em>"<strong>So far</strong>, we have finished three units."</em>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Nhận biết & Dấu hiệu */}
            <div className="p-5 rounded-2xl bg-indigo-50/80 border-2 border-indigo-300/80 text-indigo-950 space-y-3 mt-4">
              <div className="flex items-center gap-2 text-indigo-900 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>⚠️ LỖI SAI THƯỜNG GẶP (Common Mistakes) - Phần Nhận biết & Dấu hiệu</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Đặt sai vị trí của từ "Yet" và "Already":</strong><br />
                    • <strong>Yet:</strong> Thường đứng ở <strong>cuối câu</strong> phủ định hoặc câu nghi vấn (*"I haven't done it yet"*). Học sinh hay đặt nhầm lên giữa câu (*"I yet haven't done it"* là sai).<br />
                    • <strong>Already:</strong> Thường đứng <strong>sau have/has và trước V3</strong> (*"I have already finished"*), hoặc cuối câu để nhấn mạnh. Không đặt trước have/has.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Nhầm lẫn giữa "Since" và "For":</strong> Học sinh hay nhầm lẫn việc dùng since đi với khoảng thời gian thay vì mốc thời gian.<br />
                    <span className="text-rose-700 font-mono text-xs block mt-0.5">
                      ❌ Viết: "I have lived here since 5 years" là SAI.
                    </span>
                    <span className="text-indigo-800 font-semibold flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-indigo-600 inline" /> Sửa đúng: Khoảng thời gian dùng FOR: <strong>"for 5 years"</strong>; hoặc mốc thời gian: <strong>"since 2019"</strong> / <strong>"since 5 years ago"</strong>.
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
