import React, { useState } from 'react';
import { BookOpen, Sparkles, Volume2, AlertTriangle, Play, ChevronDown, ChevronUp, Check, X, Clock, HelpCircle, Eye, ArrowRight, ShieldAlert, Layers } from 'lucide-react';
import { playAudio } from '../utils/audio';

interface NearFutureDeepDiveProps {
  onStartPractice?: () => void;
}

export const NearFutureDeepDive: React.FC<NearFutureDeepDiveProps> = ({ onStartPractice }) => {
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
      {/* Header Banner: Near Future Masterclass */}
      <div className="bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-900 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-cyan-100 text-xs font-semibold mb-2 backdrop-blur-md border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
              <span>Chuyên Đề Trọng Điểm Đề Thi THPTQG & Vào 10</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
              NEAR FUTURE MASTERCLASS (BE GOING TO)
            </h3>
            <p className="text-xs sm:text-sm text-cyan-100/90 mt-1 max-w-2xl leading-relaxed">
              Mô-đun học tập toàn diện thì Tương lai gần: Cấu trúc To Be + Going to + V-bare, kế hoạch & dự định đã toan tính từ trước, dự đoán có căn cứ bằng chứng trực quan mắt thấy, phân biệt sống còn với Will và Hiện tại tiếp diễn.
            </p>
          </div>

          {onStartPractice && (
            <button
              onClick={onStartPractice}
              className="px-5 py-3 bg-white text-blue-950 rounded-xl text-xs font-bold hover:bg-cyan-50 active:scale-95 transition-all shadow-sm flex items-center gap-2 whitespace-nowrap self-start md:self-auto shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Luyện 8 câu phản xạ Tương lai gần</span>
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
              ? 'border-blue-600 text-blue-800 bg-white font-bold'
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
              ? 'border-blue-600 text-blue-800 bg-white font-bold'
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
              ? 'border-blue-600 text-blue-800 bg-white font-bold'
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
            {/* Phân vùng Cards: Cấu trúc 3 dạng & Thành phần cốt lõi */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card 1: Cấu trúc 3 dạng câu */}
              <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 shadow-2xs">
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    <h4 className="text-base font-bold text-slate-900">
                      1. Cấu Trúc 3 Dạng Câu (Khẳng định - Phủ định - Nghi vấn)
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">
                    Be + going to + V-bare
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
                      <span className="text-blue-600 font-bold">am / is / are</span> +{' '}
                      <span className="text-cyan-700 font-bold">going to</span> +{' '}
                      <span className="text-emerald-700 font-bold">V (nguyên thể / V-bare)</span>
                    </div>
                    <div className="text-[11px] text-slate-600 space-y-0.5 pt-1 border-t border-slate-100">
                      <div>• <strong>I</strong> $\rightarrow$ <strong>am</strong> ('m)</div>
                      <div>• <strong>He / She / It / Danh từ số ít</strong> $\rightarrow$ <strong>is</strong> ('s)</div>
                      <div>• <strong>We / You / They / Danh từ số nhiều</strong> $\rightarrow$ <strong>are</strong> ('re)</div>
                    </div>
                  </div>

                  {/* Ví dụ khẳng định */}
                  <div className="mt-3 space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100/80 flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-emerald-950 flex items-center gap-1.5">
                          <span>I am going to visit my grandparents this weekend.</span>
                          <button
                            onClick={() => playAudio('I am going to visit my grandparents this weekend.')}
                            className="text-emerald-700 hover:text-emerald-900 p-0.5 rounded hover:bg-emerald-100 transition-colors"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-emerald-800/80 text-[11px] mt-0.5">
                          Tôi dự định sẽ đi thăm ông bà vào cuối tuần này. (Kế hoạch đã định sẵn)
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100/80 flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-emerald-950 flex items-center gap-1.5">
                          <span>She is going to buy a new car.</span>
                          <button
                            onClick={() => playAudio('She is going to buy a new car.')}
                            className="text-emerald-700 hover:text-emerald-900 p-0.5 rounded hover:bg-emerald-100 transition-colors"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-emerald-800/80 text-[11px] mt-0.5">
                          Cô ấy dự định sẽ mua một chiếc xe ô tô mới. (Đã tiết kiệm tiền và lên kế hoạch)
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
                      <span className="text-rose-600 font-bold">am / is / are + not</span> +{' '}
                      <span className="text-cyan-700 font-bold">going to</span> +{' '}
                      <span className="text-emerald-700 font-bold">V (nguyên thể)</span>
                    </div>
                    <div className="text-[11px] text-slate-500 italic">
                      * Dạng viết tắt: <strong>'m not</strong> | <strong>isn't</strong> | <strong>aren't</strong>
                    </div>
                  </div>

                  {/* Ví dụ phủ định */}
                  <div className="mt-3 space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-rose-50/60 border border-rose-100/80 flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-rose-950 flex items-center gap-1.5">
                          <span>We aren't going to travel abroad this summer.</span>
                          <button
                            onClick={() => playAudio("We aren't going to travel abroad this summer.")}
                            className="text-rose-700 hover:text-rose-900 p-0.5 rounded hover:bg-rose-100 transition-colors"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-rose-800/80 text-[11px] mt-0.5">
                          Chúng tôi không có kế hoạch đi du lịch nước ngoài vào mùa hè này.
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-rose-50/60 border border-rose-100/80 flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-rose-950 flex items-center gap-1.5">
                          <span>He isn't going to change his mind.</span>
                          <button
                            onClick={() => playAudio("He isn't going to change his mind.")}
                            className="text-rose-700 hover:text-rose-900 p-0.5 rounded hover:bg-rose-100 transition-colors"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-rose-800/80 text-[11px] mt-0.5">
                          Anh ấy sẽ không thay đổi quyết định của mình đâu.
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
                      <span className="text-blue-600 font-bold">Am / Is / Are</span> +{' '}
                      <span className="text-indigo-600 font-bold">S</span> +{' '}
                      <span className="text-cyan-700 font-bold">going to</span> +{' '}
                      <span className="text-emerald-700 font-bold">V (nguyên thể)</span>?
                    </div>
                    <div className="text-xs text-slate-600 pt-1 border-t border-slate-100 font-mono">
                      <span className="text-emerald-700 font-bold">Yes, S + am/is/are.</span>
                      <span className="mx-2 text-slate-300">|</span>
                      <span className="text-rose-700 font-bold">No, S + am not / isn't / aren't.</span>
                    </div>
                  </div>

                  <div className="mt-3 text-xs">
                    <div className="p-2.5 rounded-lg bg-blue-50/60 border border-blue-100/80">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-blue-950">
                          Are you going to watch the match tonight?
                        </span>
                        <button
                          onClick={() => playAudio('Are you going to watch the match tonight? Yes, I am.')}
                          className="text-blue-700 hover:text-blue-900 p-0.5 rounded hover:bg-blue-100 transition-colors"
                          title="Nghe phát âm"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-blue-800/80 text-[11px] mt-0.5">
                        → Yes, I am. / No, I'm not. (Bạn có định xem trận đấu tối nay không?)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Thành phần cốt lõi & Cơ chế hoạt động */}
              <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                      <h4 className="text-base font-bold text-slate-900">
                        2. Thành Phần Cốt Lõi (3 Mắt Xích Không Thể Tách Rời)
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 font-semibold">
                      To Be + going to + V
                    </span>
                  </div>

                  {/* 3 mắt xích */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-cyan-600" />
                        <span>MÔ HÌNH 3 MẮT XÍCH CỦA CÂU TƯƠNG LAI GẦN</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
                          <div className="font-mono font-bold text-blue-700 text-sm">1. TO BE</div>
                          <div className="text-[11px] text-slate-600 mt-1 font-semibold">am / is / are</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">Chia theo ngôi chủ ngữ</div>
                        </div>

                        <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200">
                          <div className="font-mono font-bold text-cyan-700 text-sm">2. CỤM CỐ ĐỊNH</div>
                          <div className="text-[11px] text-slate-600 mt-1 font-semibold">going to</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">Không được đổi hoặc bỏ</div>
                        </div>

                        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                          <div className="font-mono font-bold text-emerald-700 text-sm">3. ĐỘNG TỪ CHÍNH</div>
                          <div className="text-[11px] text-slate-600 mt-1 font-semibold">V-bare</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">Nguyên thể không "to"</div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        Cụm từ <strong>"going to"</strong> ở đây là một thành tố chỉ thì tương lai (tương đương nghĩa <em>"sắp / dự định"</em>), chứ <strong>không mang nghĩa là "đang đi đâu đó"</strong> (không phải động từ di chuyển Go trong Hiện tại tiếp diễn).
                      </p>
                    </div>

                    {/* Trường hợp đặc biệt với go và come */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200/80 space-y-2">
                      <div className="flex items-center gap-2 text-cyan-950 font-bold text-xs">
                        <Sparkles className="w-4 h-4 text-cyan-600" />
                        <span>QUY TẮC TRÁNH LẶP TỪ VỚI "GO" VÀ "COME"</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Khi động từ chính là <strong>go</strong> hoặc <strong>come</strong>, người bản xứ rất ít khi dùng <em>"going to go"</em> hoặc <em>"going to come"</em> vì nghe nặng nề và lặp từ. Thay vào đó, họ thường dùng <strong>Hiện tại tiếp diễn</strong>:
                      </p>
                      <div className="bg-white p-2.5 rounded-lg border border-cyan-100 text-xs font-mono text-cyan-950 space-y-1">
                        <div>Thường dùng: <strong>"I am going to Paris tomorrow."</strong></div>
                        <div className="text-[11px] text-slate-500">(thay vì: <em>"I am going to go to Paris tomorrow."</em>)</div>
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
                      CẢNH BÁO 3 LỖI SAI CẤU TRÚC PHỔ BIẾN NHẤT (STRUCTURE MISTAKES)
                    </h5>
                    <p className="text-xs text-rose-900/90 mt-0.5">
                      Đừng để mất điểm oan vì 3 thói quen viết ẩu này trong bài kiểm tra:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
                    {/* Lỗi 1: Quên to be */}
                    <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-2xs space-y-2">
                      <div className="font-bold text-rose-900 flex items-center gap-1.5">
                        <X className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>1. Quên chia To Be (am/is/are)</span>
                      </div>
                      <div className="text-[11px] text-slate-600 leading-relaxed">
                        Viết rơi rụng động từ To be hoặc viết nhầm thành <em>is go to</em>.
                      </div>
                      <div className="font-mono text-[11px] p-2 rounded bg-rose-50 text-rose-900 space-y-1">
                        <div>❌ <strong>Sai:</strong> I <span className="underline">going to buy</span> a car.</div>
                        <div className="text-emerald-700 font-semibold">✔ <strong>Đúng:</strong> I <strong>am going to buy</strong> a car.</div>
                      </div>
                    </div>

                    {/* Lỗi 2: Chia sai To be theo ngôi */}
                    <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-2xs space-y-2">
                      <div className="font-bold text-rose-900 flex items-center gap-1.5">
                        <X className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>2. Chia sai To Be theo chủ ngữ</span>
                      </div>
                      <div className="text-[11px] text-slate-600 leading-relaxed">
                        Dùng nhầm <em>is</em> cho chủ ngữ số nhiều hoặc <em>are</em> cho chủ ngữ số ít.
                      </div>
                      <div className="font-mono text-[11px] p-2 rounded bg-rose-50 text-rose-900 space-y-1">
                        <div>❌ <strong>Sai:</strong> They <span className="underline">is</span> going to leave.</div>
                        <div className="text-emerald-700 font-semibold">✔ <strong>Đúng:</strong> They <strong>are</strong> going to leave.</div>
                      </div>
                    </div>

                    {/* Lỗi 3: Chia sai động từ sau going to */}
                    <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-2xs space-y-2">
                      <div className="font-bold text-rose-900 flex items-center gap-1.5">
                        <X className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>3. Chia động từ sau "going to"</span>
                      </div>
                      <div className="text-[11px] text-slate-600 leading-relaxed">
                        Thêm <em>-s/-es</em>, chia <em>V2</em> hoặc thêm <em>-ing</em> vào động từ chính.
                      </div>
                      <div className="font-mono text-[11px] p-2 rounded bg-rose-50 text-rose-900 space-y-1">
                        <div>❌ <strong>Sai:</strong> He is going to <span className="underline">works</span>.</div>
                        <div className="text-emerald-700 font-semibold">✔ <strong>Đúng:</strong> He is going to <strong>work</strong>.</div>
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
            {/* Accordion 1: Kế hoạch hoặc dự định đã được lên từ trước */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item1')}
                className="w-full p-5 text-left flex items-center justify-between bg-slate-50 hover:bg-slate-100/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-cyan-100 text-cyan-800 font-bold flex items-center justify-center text-xs">
                    01
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      1. Kế hoạch hoặc dự định đã được lên từ trước (Plans & Intentions)
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Đã suy nghĩ, chuẩn bị hoặc lên kế hoạch từ trước thời điểm nói
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
                    Dùng để diễn tả một hành động mà người nói <strong>đã có ý định, kế hoạch hoặc sắp xếp từ trước</strong> thời điểm phát ngôn (trái ngược hoàn toàn với quyết định bộc phát nảy sinh tức thời của thì Tương lai đơn <em>Will</em>).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    <div className="p-4 rounded-xl bg-cyan-50/70 border border-cyan-200/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-cyan-950 text-xs">Dự định xây nhà mới</span>
                        <button
                          onClick={() => playAudio('We are going to build a new house next year.')}
                          className="p-1 rounded text-cyan-700 hover:bg-cyan-200/60"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="font-mono text-[11.5px] text-cyan-900 font-semibold">
                        "We <strong>are going to build</strong> a new house next year."
                      </div>
                      <div className="text-[11px] text-slate-600">
                        → Chúng tôi dự định xây nhà mới vào năm tới. (Gia đình đã bàn bạc, chuẩn bị ngân sách và lên bản vẽ thiết kế từ trước).
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-cyan-50/70 border border-cyan-200/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-cyan-950 text-xs">Kế hoạch mua máy tính xách tay</span>
                        <button
                          onClick={() => playAudio("I have saved enough money. I'm going to buy a new laptop.")}
                          className="p-1 rounded text-cyan-700 hover:bg-cyan-200/60"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="font-mono text-[11.5px] text-cyan-900 font-semibold">
                        "I have saved enough money. I<strong>'m going to buy</strong> a new laptop."
                      </div>
                      <div className="text-[11px] text-slate-600">
                        → Tôi đã tiết kiệm đủ tiền. Tôi dự định sẽ mua một chiếc máy tính xách tay mới. (Ý định đã ấp ủ từ lâu).
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: Dự đoán có căn cứ, có bằng chứng ở hiện tại */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item2')}
                className="w-full p-5 text-left flex items-center justify-between bg-slate-50 hover:bg-slate-100/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs">
                    02
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      2. Dự đoán có căn cứ, có bằng chứng ở hiện tại (Predictions with Evidence)
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Dự đoán một việc chắc chắn sắp diễn ra dựa trên bằng chứng mắt thấy tai nghe cụ thể
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
                    Dùng khi người nói đưa ra phán đoán về một sự việc sắp sửa xảy ra <strong>dựa trên những dấu hiệu hoặc chứng cớ rõ ràng ngay trước mắt ở hiện tại</strong>.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-blue-950 text-xs flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-blue-600" />
                          <span>Bằng chứng: Mây đen vần vũ</span>
                        </span>
                        <button
                          onClick={() => playAudio('Look at those dark clouds! It is going to rain.')}
                          className="p-1 rounded text-blue-700 hover:bg-blue-200/60"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="font-mono text-[11.5px] text-blue-900 font-semibold">
                        "Look at those dark clouds! It <strong>is going to rain</strong>."
                      </div>
                      <div className="text-[11px] text-slate-600">
                        → Nhìn những đám mây đen kịt kìa! Trời sắp mưa rồi. (Mây đen là bằng chứng hiển nhiên mắt thấy $\rightarrow$ không được dùng <em>will rain</em>).
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-blue-950 text-xs flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-blue-600" />
                          <span>Bằng chứng: Cốc nước chênh vênh</span>
                        </span>
                        <button
                          onClick={() => playAudio('Be careful! That glass is going to fall off the table!')}
                          className="p-1 rounded text-blue-700 hover:bg-blue-200/60"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="font-mono text-[11.5px] text-blue-900 font-semibold">
                        "Be careful! That glass <strong>is going to fall</strong> off the table!"
                      </div>
                      <div className="text-[11px] text-slate-600">
                        → Cẩn thận! Chiếc cốc đó sắp rơi khỏi bàn rồi kìa! (Mép cốc đang nghiêng ngả trước mắt).
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 3: So Sánh 3 Thì Diễn Tả Tương Lai (Be Going To vs Will vs Present Continuous) */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item3')}
                className="w-full p-5 text-left flex items-center justify-between bg-slate-50 hover:bg-slate-100/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center text-xs">
                    03
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      3. So Sánh Đỉnh Cao: Be Going To vs Will vs Present Continuous
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Phân biệt mức độ chắc chắn và tính chất sắp xếp giữa 3 thì tương lai
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* Will */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="font-bold text-indigo-800 text-xs uppercase">
                        1. Will (Tương lai đơn)
                      </div>
                      <div className="text-[11px] text-slate-600">
                        • Quyết định <strong>tức thì lúc nói</strong>.<br/>
                        • Dự đoán <strong>cảm tính</strong> (không có bằng chứng).
                      </div>
                      <div className="font-mono text-[11px] text-slate-900 pt-1 border-t border-slate-200">
                        "I think it will be sunny."
                      </div>
                    </div>

                    {/* Be Going To */}
                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-1.5">
                      <div className="font-bold text-blue-800 text-xs uppercase">
                        2. Be Going To (Tương lai gần)
                      </div>
                      <div className="text-[11px] text-slate-600">
                        • Đã có <strong>ý định / kế hoạch trước</strong>.<br/>
                        • Dự đoán <strong>có bằng chứng trước mắt</strong>.
                      </div>
                      <div className="font-mono text-[11px] text-blue-900 pt-1 border-t border-blue-200">
                        "I'm going to buy a laptop."
                      </div>
                    </div>

                    {/* Present Continuous */}
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5">
                      <div className="font-bold text-emerald-800 text-xs uppercase">
                        3. Present Continuous (HT Tiếp Diễn)
                      </div>
                      <div className="text-[11px] text-slate-600">
                        • Lịch trình cá nhân <strong>đã chốt vé / giờ / người hẹn</strong> (gần như 100% xảy ra).
                      </div>
                      <div className="font-mono text-[11px] text-emerald-900 pt-1 border-t border-emerald-200">
                        "I'm flying to Tokyo at 9 AM tomorrow."
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Nâng cao */}
            <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/70 p-5 sm:p-6 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-500 text-white shrink-0 mt-0.5">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div className="space-y-3 w-full">
                  <div>
                    <h5 className="text-sm font-bold text-amber-950 uppercase tracking-wide">
                      CẢNH BÁO BẪY ĐỀ THI: NHẦM LẪN GIỮA "BE GOING TO" VÀ "WILL"
                    </h5>
                    <p className="text-xs text-amber-900/90 mt-0.5">
                      Học sinh thường dùng lẫn lộn hai cấu trúc này trong bài tập viết lại câu hoặc điền khuyết:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="bg-white p-3.5 rounded-xl border border-amber-200 space-y-1.5">
                      <div className="font-bold text-rose-800">
                        ❌ Bẫy dùng "Will" khi có bằng chứng mắt thấy:
                      </div>
                      <div className="font-mono text-[11px] text-slate-800">
                        "Look at that child on the ladder! He <span className="underline text-rose-600">will fall</span>."
                      </div>
                      <div className="font-mono text-[11px] text-emerald-800 font-semibold">
                        ✔ Sửa đúng: "...He <strong>is going to fall</strong>."
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Vì nhìn thấy đứa trẻ đang chao đảo trên thang là bằng chứng hiện tại rõ ràng!
                      </div>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-amber-200 space-y-1.5">
                      <div className="font-bold text-rose-800">
                        ❌ Bẫy dùng "Be going to" cho quyết định bộc phát:
                      </div>
                      <div className="font-mono text-[11px] text-slate-800">
                        "It's cold in here. I <span className="underline text-rose-600">am going to close</span> the window."
                      </div>
                      <div className="font-mono text-[11px] text-emerald-800 font-semibold">
                        ✔ Sửa đúng: "...I <strong>will close</strong> the window."
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Vì cảm thấy lạnh là phản xạ bộc phát nảy ra ngay lúc nói, không có kế hoạch trước!
                      </div>
                    </div>
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
            {/* Phân vùng 2 khối: Trạng từ thời gian & Dấu hiệu trực quan */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Khối 1: Trạng từ chỉ thời gian phổ biến */}
              <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 shadow-2xs">
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-600" />
                    <h4 className="text-base font-bold text-slate-900">
                      1. Trạng Từ Chỉ Thời Gian Phổ Biến
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded font-semibold">
                    Time Signals
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <p className="text-slate-600 leading-relaxed">
                    Các trạng từ chỉ thời gian này dùng chung với tương lai đơn, nhưng khi đi kèm <strong>ngữ cảnh đã lên kế hoạch hoặc chuẩn bị từ trước</strong> thì ưu tiên dùng <em>Be Going To</em>:
                  </p>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
                    <div className="font-bold text-cyan-900 flex items-center justify-between">
                      <span>• tomorrow / tonight</span>
                      <span className="text-[11px] text-slate-500">ngày mai / tối nay</span>
                    </div>
                    <div className="font-mono text-[11px] text-cyan-800">
                      "I <strong>am going to study</strong> with Lan tonight."
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
                    <div className="font-bold text-cyan-900 flex items-center justify-between">
                      <span>• next week / next month / next year</span>
                      <span className="text-[11px] text-slate-500">tuần tới / tháng tới</span>
                    </div>
                    <div className="font-mono text-[11px] text-cyan-800">
                      "They <strong>are going to open</strong> a new branch next month."
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
                    <div className="font-bold text-cyan-900 flex items-center justify-between">
                      <span>• this weekend / in two days / in the future</span>
                      <span className="text-[11px] text-slate-500">cuối tuần này / 2 ngày nữa</span>
                    </div>
                    <div className="font-mono text-[11px] text-cyan-800">
                      "We <strong>are going to celebrate</strong> his birthday this weekend."
                    </div>
                  </div>
                </div>
              </div>

              {/* Khối 2: Dấu hiệu ngữ cảnh đặc biệt (Căn cứ dự đoán) */}
              <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 shadow-2xs">
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-blue-600" />
                    <h4 className="text-base font-bold text-slate-900">
                      2. Dấu Hiệu Ngữ Cảnh Đặc Biệt (Bằng Chứng Trực Quan)
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-blue-700 bg-blue-100 px-2 py-0.5 rounded font-semibold">
                    Visual Evidence
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <p className="text-slate-600 leading-relaxed">
                    Đây là dấu hiệu nhận biết <strong>chắc chắn 100%</strong> của thì Tương lai gần trong các đề thi THPT và Vào 10:
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-blue-950 font-bold">
                      Look! (Nhìn kìa!)
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-blue-950 font-bold">
                      Watch out! (Coi chừng!)
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-blue-950 font-bold">
                      Be careful! (Cẩn thận!)
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-blue-950 font-bold">
                      Look at... (Hãy nhìn vào...)
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs space-y-1.5">
                    <div className="font-bold text-blue-950 flex items-center justify-between">
                      <span>Ví dụ kinh điển trong đề thi:</span>
                      <button
                        onClick={() => playAudio('Watch out! That car is going to hit the tree!')}
                        className="text-blue-700 hover:text-blue-900 p-0.5 rounded"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="font-mono text-blue-900 font-semibold text-[11.5px]">
                      "Watch out! That car <strong>is going to hit</strong> the tree!"
                    </div>
                    <div className="text-[11px] text-slate-600">
                      → Coi chừng! Chiếc xe kia sắp tông vào cái cây kìa! (Xe đang lao nhanh mất lái về phía gốc cây $\rightarrow$ bằng chứng nguy hiểm cận kề).
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi chỉ nhìn vào từ chỉ thời gian */}
            <div className="rounded-2xl border-2 border-indigo-300 bg-indigo-50/70 p-5 sm:p-6 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-indigo-600 text-white shrink-0 mt-0.5">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div className="space-y-3 w-full">
                  <div>
                    <h5 className="text-sm font-bold text-indigo-950 uppercase tracking-wide">
                      CẢNH BÁO BẪY: KHÔNG NÊN CHỈ NHÌN VÀO TỪ CHỈ THỜI GIAN ĐỂ CHỌN THÌ!
                    </h5>
                    <p className="text-xs text-indigo-900/90 mt-0.5">
                      Thói quen cứ thấy <em>"tomorrow"</em> hay <em>"next week"</em> là chọn ngay <em>"will"</em> sẽ dẫn đến nhiều câu sai đáng tiếc:
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-indigo-200 shadow-2xs space-y-2 text-xs">
                    <p className="text-slate-700 leading-relaxed">
                      Từ chỉ thời gian như <em>tomorrow, next week</em> chỉ báo hiệu hành động thuộc về tương lai. Để chọn đúng thì, bạn bắt buộc phải đọc kỹ <strong>sắc thái và tiền đề của câu</strong>:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-[11px]">
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                        <div className="text-slate-900 font-bold">1. Quyết định bốc đồng / dự đoán vô căn cứ:</div>
                        <div className="text-indigo-700 font-semibold">→ Chọn WILL + V-bare</div>
                        <div className="text-[10.5px] text-slate-500">"I don't know yet. Maybe I <strong>will stay</strong> home tomorrow."</div>
                      </div>

                      <div className="p-3 rounded-lg bg-cyan-50 border border-cyan-200 space-y-1">
                        <div className="text-cyan-950 font-bold">2. Có sự chuẩn bị / dự định / bằng chứng:</div>
                        <div className="text-cyan-800 font-semibold">→ Chọn AM/IS/ARE GOING TO + V-bare</div>
                        <div className="text-[10.5px] text-slate-600">"I bought the paint. I <strong>am going to paint</strong> my room tomorrow."</div>
                      </div>
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
