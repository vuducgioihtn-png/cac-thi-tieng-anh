import React, { useState } from 'react';
import { BookOpen, Sparkles, Volume2, AlertTriangle, Play, ChevronDown, ChevronUp, Check, X, Clock, HelpCircle, Layers, Flame, ArrowRight } from 'lucide-react';
import { playAudio } from '../utils/audio';

interface PresentPerfectContinuousDeepDiveProps {
  onStartPractice?: () => void;
}

export const PresentPerfectContinuousDeepDive: React.FC<PresentPerfectContinuousDeepDiveProps> = ({ onStartPractice }) => {
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
      {/* Header Banner: Present Perfect Continuous Masterclass */}
      <div className="bg-gradient-to-r from-sky-700 via-teal-700 to-indigo-900 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-sky-100 text-xs font-semibold mb-2 backdrop-blur-md border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
              <span>Chuyên Đề Trọng Điểm Điểm 9+</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
              PRESENT PERFECT CONTINUOUS MASTERCLASS
            </h3>
            <p className="text-xs sm:text-sm text-sky-100/90 mt-1 max-w-2xl leading-relaxed">
              Mô-đun học tập toàn diện thì Hiện tại hoàn thành tiếp diễn: Cấu trúc Have/Has been + V-ing, nhấn mạnh tính liên tục không ngắt quãng, giải thích hệ quả & dấu vết ở hiện tại, cùng bí kíp so sánh đỉnh cao với Hiện tại hoàn thành đơn.
            </p>
          </div>

          {onStartPractice && (
            <button
              onClick={onStartPractice}
              className="px-5 py-3 bg-white text-sky-950 rounded-xl text-xs font-bold hover:bg-sky-50 active:scale-95 transition-all shadow-sm flex items-center gap-2 whitespace-nowrap self-start md:self-auto shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Luyện 8 câu phản xạ HT HT tiếp diễn</span>
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
              ? 'border-sky-600 text-sky-800 bg-white font-bold'
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
              ? 'border-sky-600 text-sky-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>TAB 2: CÁCH DÙNG & SO SÁNH ĐỈNH CAO</span>
        </button>

        <button
          onClick={() => setActiveTab('tab3')}
          className={`px-6 py-4 whitespace-nowrap transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'tab3'
              ? 'border-sky-600 text-sky-800 bg-white font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>TAB 3: DẤU HIỆU & BẪY ĐỀ THI</span>
        </button>
      </div>

      {/* Nội Dung Từng Tab */}
      <div className="p-6 sm:p-8">
        {/* ========================================================================= */}
        {/* TAB 1: CÔNG THỨC CHI TIẾT 3 DẠNG (Khối cấu trúc nền tảng) */}
        {/* ========================================================================= */}
        {activeTab === 'tab1' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Phân vùng Cards: Cấu trúc 3 dạng câu */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card 1: Khẳng định & Phủ định */}
              <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 shadow-2xs">
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                    <h4 className="text-base font-bold text-slate-900">
                      1. Thể Khẳng Định & Thể Phủ Định
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-semibold">
                    Have/Has been + V-ing
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
                  <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-2xs space-y-2">
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 font-mono">
                      <span className="text-indigo-600 font-bold">S (I / We / You / They / N số nhiều)</span>{' '}
                      + <span className="text-sky-600 font-bold">have been</span> +{' '}
                      <span className="text-teal-600 font-bold">V-ing</span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 font-mono">
                      <span className="text-purple-600 font-bold">S (He / She / It / N số ít)</span>{' '}
                      + <span className="text-sky-600 font-bold">has been</span> +{' '}
                      <span className="text-teal-600 font-bold">V-ing</span>
                    </div>
                  </div>

                  {/* Ví dụ khẳng định */}
                  <div className="mt-3 space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100/80 flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-emerald-950 flex items-center gap-1.5">
                          <span>It has been raining for two hours.</span>
                          <button
                            onClick={() => playAudio('It has been raining for two hours.')}
                            className="text-emerald-700 hover:text-emerald-900 p-0.5 rounded hover:bg-emerald-100 transition-colors"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-emerald-800/80 text-[11px] mt-0.5">
                          Trời đã và đang mưa liên tục suốt hai tiếng đồng hồ rồi.
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100/80 flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-emerald-950 flex items-center gap-1.5">
                          <span>They have been working here since 2020.</span>
                          <button
                            onClick={() => playAudio('They have been working here since 2020.')}
                            className="text-emerald-700 hover:text-emerald-900 p-0.5 rounded hover:bg-emerald-100 transition-colors"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-emerald-800/80 text-[11px] mt-0.5">
                          Họ đã làm việc miệt mài ở đây liên tục từ năm 2020 đến nay.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phủ định */}
                <div>
                  <div className="text-xs font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-[10px] font-bold">
                      -
                    </span>
                    <span>Cấu Trúc Phủ Định (-)</span>
                  </div>

                  {/* Formula Box */}
                  <div className="bg-white p-4 rounded-xl border border-rose-100 shadow-2xs space-y-2">
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 font-mono">
                      <span className="text-indigo-600 font-bold">S (I/We/You/They)</span> +{' '}
                      <span className="text-rose-600 font-bold">have not (haven't)</span> +{' '}
                      <span className="text-sky-600 font-bold">been</span> +{' '}
                      <span className="text-teal-600 font-bold">V-ing</span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 font-mono">
                      <span className="text-purple-600 font-bold">S (He/She/It)</span> +{' '}
                      <span className="text-rose-600 font-bold">has not (hasn't)</span> +{' '}
                      <span className="text-sky-600 font-bold">been</span> +{' '}
                      <span className="text-teal-600 font-bold">V-ing</span>
                    </div>
                  </div>

                  {/* Ví dụ phủ định */}
                  <div className="mt-3 space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-rose-50/60 border border-rose-100/80 flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-rose-950 flex items-center gap-1.5">
                          <span>She hasn't been feeling well lately.</span>
                          <button
                            onClick={() => playAudio("She hasn't been feeling well lately.")}
                            className="text-rose-700 hover:text-rose-900 p-0.5 rounded hover:bg-rose-100 transition-colors"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-rose-800/80 text-[11px] mt-0.5">
                          Dạo gần đây cô ấy liên tục thấy không được khỏe trong người.
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-rose-50/60 border border-rose-100/80 flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-rose-950 flex items-center gap-1.5">
                          <span>We haven't been waiting long.</span>
                          <button
                            onClick={() => playAudio("We haven't been waiting long.")}
                            className="text-rose-700 hover:text-rose-900 p-0.5 rounded hover:bg-rose-100 transition-colors"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-rose-800/80 text-[11px] mt-0.5">
                          Chúng tôi mới chờ một chút thôi, chưa phải đợi lâu đâu.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Thể Nghi vấn & Bản chất cấu trúc */}
              <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <h4 className="text-base font-bold text-slate-900">
                        2. Thể Nghi Vấn (?) & Bản Chất Cấu Trúc
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold">
                      Have/Has + S + been + V-ing?
                    </span>
                  </div>

                  {/* Nghi vấn cấu trúc */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold">
                        ?
                      </span>
                      <span>Câu Hỏi Yes / No & Trả Lời</span>
                    </div>

                    {/* Formula Box */}
                    <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-2xs space-y-2">
                      <div className="text-xs sm:text-sm font-semibold text-slate-800 font-mono">
                        <span className="text-blue-600 font-bold">Have / Has</span> +{' '}
                        <span className="text-indigo-600 font-bold">S</span> +{' '}
                        <span className="text-sky-600 font-bold">been</span> +{' '}
                        <span className="text-teal-600 font-bold">V-ing</span>?
                      </div>
                      <div className="text-xs text-slate-600 pt-1 border-t border-slate-100 font-mono">
                        <span className="text-emerald-700 font-bold">Yes, S + have / has.</span>
                        <span className="mx-2 text-slate-300">|</span>
                        <span className="text-rose-700 font-bold">No, S + haven't / hasn't.</span>
                      </div>
                    </div>

                    {/* Ví dụ nghi vấn */}
                    <div className="mt-3 space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-blue-50/60 border border-blue-100/80">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-blue-950">
                            Have you been sleeping?
                          </span>
                          <button
                            onClick={() => playAudio('Have you been sleeping? Yes, I have.')}
                            className="text-blue-700 hover:text-blue-900 p-0.5 rounded hover:bg-blue-100 transition-colors"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-blue-800/80 text-[11px] mt-0.5">
                          → Yes, I have. / No, I haven't. (Có phải nãy giờ bạn ngủ gật không?)
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-blue-50/60 border border-blue-100/80">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-blue-950">
                            Has he been waiting long?
                          </span>
                          <button
                            onClick={() => playAudio('Has he been waiting long? Yes, he has.')}
                            className="text-blue-700 hover:text-blue-900 p-0.5 rounded hover:bg-blue-100 transition-colors"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-blue-800/80 text-[11px] mt-0.5">
                          → Yes, he has. / No, he hasn't. (Anh ấy đã đứng đợi từ nãy đến giờ lâu chưa?)
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bản chất cấu trúc */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200/80">
                    <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs mb-2">
                      <Layers className="w-4 h-4 text-indigo-600" />
                      <span>BẢN CHẤT CÔNG THỨC LAI (HYBRID STRUCTURE)</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Cấu trúc thì này là sự kết hợp toán học tuyệt vời giữa 2 yếu tố:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2.5 text-[11px]">
                      <div className="bg-white p-2.5 rounded-lg border border-indigo-100 shadow-2xs">
                        <span className="font-bold text-indigo-700">1. Hoàn thành (Perfect):</span>
                        <div className="font-mono text-slate-800 mt-0.5">Have/Has + Been (V3 của be)</div>
                        <span className="text-slate-500">→ Nối từ quá khứ đến hiện tại</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-teal-100 shadow-2xs">
                        <span className="font-bold text-teal-700">2. Tiếp diễn (Continuous):</span>
                        <div className="font-mono text-slate-800 mt-0.5">Be + V-ing</div>
                        <span className="text-slate-500">→ Nhấn mạnh tính liên tục, hành động đang diễn ra</span>
                      </div>
                    </div>
                    <div className="mt-2 text-[11px] font-semibold text-indigo-900 bg-white/70 p-2 rounded-lg border border-indigo-100">
                      ⚡ <strong>Ý đồ người nói:</strong> Muốn người nghe cảm nhận rõ <em>mồ hôi, công sức, độ dài thời gian</em> hoặc <em>sự miệt mài không gián đoạn</em>!
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
                      CẢNH BÁO BẪY CẤU TRÚC THƯỜNG GẶP (STRUCTURE TRAPS)
                    </h5>
                    <p className="text-xs text-rose-900/90 mt-0.5">
                      3 lỗi mất điểm đáng tiếc nhất của học sinh trong bài thi trắc nghiệm chia động từ:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
                    {/* Bẫy 1: Quên "been" */}
                    <div className="bg-white p-3.5 rounded-xl border border-rose-200 shadow-2xs space-y-1.5">
                      <div className="font-bold text-rose-900 flex items-center gap-1.5">
                        <X className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                        <span>Bẫy 1: Rơi rụng chữ "been"</span>
                      </div>
                      <div className="text-[11px] text-slate-600">
                        Nhiều bạn viết vội thành: <code>have/has + V-ing</code> (thiếu hoàn toàn <code>been</code>), hoặc nhầm sang thì tiếp diễn đơn giản <code>is/are + V-ing</code> khi thấy khoảng thời gian <em>for/since</em>.
                      </div>
                      <div className="font-mono text-[10.5px] p-1.5 rounded bg-rose-50 text-rose-800">
                        Sai: She has working here.<br/>
                        Đúng: She <strong>has been working</strong> here.
                      </div>
                    </div>

                    {/* Bẫy 2: Nhầm have/has với ngôi */}
                    <div className="bg-white p-3.5 rounded-xl border border-rose-200 shadow-2xs space-y-1.5">
                      <div className="font-bold text-rose-900 flex items-center gap-1.5">
                        <X className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                        <span>Bẫy 2: Lộn xộn Have vs Has</span>
                      </div>
                      <div className="text-[11px] text-slate-600">
                        Chủ ngữ ngôi thứ ba số ít (<em>He, She, It, John, The child</em>) bắt buộc phải đi với <strong>has been</strong>, tuyệt đối không dùng <em>have been</em>.
                      </div>
                      <div className="font-mono text-[10.5px] p-1.5 rounded bg-rose-50 text-rose-800">
                        Sai: The baby have been crying.<br/>
                        Đúng: The baby <strong>has been crying</strong>.
                      </div>
                    </div>

                    {/* Bẫy 3: Nhầm V3 thay vì V-ing */}
                    <div className="bg-white p-3.5 rounded-xl border border-rose-200 shadow-2xs space-y-1.5">
                      <div className="font-bold text-rose-900 flex items-center gap-1.5">
                        <X className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                        <span>Bẫy 3: Nhầm thành Bị động (V3)</span>
                      </div>
                      <div className="text-[11px] text-slate-600">
                        Nếu viết <code>have/has been + V3/ed</code>, câu lập tức biến thành <strong>Thể bị động của HTHT</strong>! Để diễn tả tiếp diễn chủ động, sau <code>been</code> phải là <strong>V-ing</strong>.
                      </div>
                      <div className="font-mono text-[10.5px] p-1.5 rounded bg-rose-50 text-rose-800">
                        Sai: I have been repaired my car.<br/>
                        Đúng: I have been <strong>repairing</strong> my car.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: CÁC TRƯỜNG HỢP DÙNG KÈM VÍ DỤ ĐIỂN HÌNH (Giao diện Accordion) */}
        {/* ========================================================================= */}
        {activeTab === 'tab2' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Accordion 1: Hành động bắt đầu quá khứ kéo dài liên tục đến nay */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item1')}
                className="w-full p-5 text-left flex items-center justify-between bg-slate-50 hover:bg-slate-100/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-sky-100 text-sky-800 font-bold flex items-center justify-center text-xs">
                    01
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      Hành động bắt đầu trong quá khứ, kéo dài LIÊN TỤC đến hiện tại và có thể tiếp diễn ở tương lai
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Trường hợp kinh điển nhất — Nhấn mạnh vào độ dài thời gian và tính miệt mài không ngắt quãng
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
                    Dùng để diễn tả một hành động xuất phát từ một mốc thời gian trong quá khứ, diễn ra liên tục xuyên suốt và tại thời điểm hiện tại người nói <strong>vẫn đang tiếp tục làm</strong> hành động đó mà chưa hề dừng lại.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-200/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sky-950 font-mono text-xs">
                          "I have been studying English for 5 years."
                        </span>
                        <button
                          onClick={() => playAudio('I have been studying English for five years.')}
                          className="p-1 rounded text-sky-700 hover:bg-sky-200/60"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-xs text-slate-600">
                        → Tôi đã học tiếng Anh liên tục suốt 5 năm nay (và hiện tại tôi vẫn đang tiếp tục dùi mài mỗi ngày).
                      </div>
                      <div className="text-[11px] text-sky-800 font-semibold bg-white/80 p-2 rounded border border-sky-100">
                        🎯 Nhấn mạnh: Cả một quá trình rèn luyện bền bỉ dài 5 năm.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-200/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sky-950 font-mono text-xs">
                          "They have been living in this city since 2018."
                        </span>
                        <button
                          onClick={() => playAudio('They have been living in this city since 2018.')}
                          className="p-1 rounded text-sky-700 hover:bg-sky-200/60"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-xs text-slate-600">
                        → Họ đã sinh sống liên tục tại thành phố này kể từ năm 2018 đến giờ và vẫn đang sống tại đây.
                      </div>
                      <div className="text-[11px] text-sky-800 font-semibold bg-white/80 p-2 rounded border border-sky-100">
                        🎯 Nhấn mạnh: Sự gắn bó liên tục không gián đoạn từ mốc 2018.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: Hành động vừa kết thúc để lại DẤU VẾT/KẾT QUẢ rõ rệt ở hiện tại */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item2')}
                className="w-full p-5 text-left flex items-center justify-between bg-slate-50 hover:bg-slate-100/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-xs">
                    02
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      Hành động vừa mới kết thúc nhưng để lại KẾT QUẢ / DẤU VẾT rõ rệt ở hiện tại
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Cực kỳ quan trọng trong đề thi vào 10, THPTQG & IELTS: Dấu hiệu "mắt thấy tai nghe" ở hiện tại!
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
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 font-medium">
                    🔥 <strong>Mẹo nhận diện nhanh trong đề thi:</strong> Nếu đề bài cho một câu cảm thán hoặc miêu tả hiện trạng thực tế ở hiện tại (ví dụ: <em>Why are you so tired? / The ground is wet / His clothes are dirty</em>) $\rightarrow$ Hành động trước đó vừa diễn ra gây ra hiện trạng này <strong>chắc chắn phải chia ở thì Hiện tại hoàn thành tiếp diễn</strong>!
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-xs">Sửa xe đạp</span>
                        <button
                          onClick={() => playAudio('Why are your hands dirty? I have been repairing my bicycle.')}
                          className="p-1 rounded text-slate-600 hover:bg-slate-200"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] font-mono text-indigo-700">
                        "Why are your hands dirty?"<br/>
                        → "I <strong>have been repairing</strong> my bicycle."
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Vết dầu mỡ đen trên tay ở hiện tại là bằng chứng rõ mồn một cho việc vừa cặm cụi sửa xe.
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-xs">Mặt đất ướt sũng</span>
                        <button
                          onClick={() => playAudio('The ground is wet. It has been raining.')}
                          className="p-1 rounded text-slate-600 hover:bg-slate-200"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] font-mono text-teal-700">
                        "The ground is wet.<br/>
                        It <strong>has been raining</strong>."
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Mưa có thể vừa dứt, nhưng mặt đất ướt nhẹp và vũng nước là dấu tích chứng minh trời vừa mưa một trận liên tục.
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-xs">Thở dốc, mệt lả</span>
                        <button
                          onClick={() => playAudio('You look exhausted! Yes, I have been running for an hour.')}
                          className="p-1 rounded text-slate-600 hover:bg-slate-200"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] font-mono text-rose-700">
                        "You look exhausted!"<br/>
                        → "I <strong>have been running</strong>."
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Mồ hôi nhễ nhại và hơi thở dồn dập ở hiện tại là kết quả của việc vừa chạy bộ liên tục suốt một tiếng.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 3: So sánh đỉnh cao HTHT vs HTHTTD */}
            <div className="rounded-2xl border border-indigo-200 bg-white overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion('item3')}
                className="w-full p-5 text-left flex items-center justify-between bg-indigo-50/70 hover:bg-indigo-100/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-xs">
                    03
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-indigo-950 flex items-center gap-2">
                      <span>So sánh đỉnh cao: Hiện tại hoàn thành (HTHT) vs HT hoàn thành tiếp diễn (HTHTTD)</span>
                      <span className="px-2 py-0.5 rounded-full bg-indigo-200/80 text-indigo-800 text-[10px] font-extrabold uppercase">
                        Trọng tâm thi cử
                      </span>
                    </h4>
                    <p className="text-xs text-indigo-900/80 mt-0.5">
                      Bảng so sánh chi tiết: KẾT QUẢ / SỐ LƯỢNG (How many) vs QUÁ TRÌNH / THỜI GIAN (How long) & Quy tắc Stative Verbs
                    </p>
                  </div>
                </div>
                {accordionOpen.item3 ? (
                  <ChevronUp className="w-5 h-5 text-indigo-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-indigo-400" />
                )}
              </button>

              {accordionOpen.item3 && (
                <div className="p-6 border-t border-indigo-100 space-y-6 text-xs sm:text-sm">
                  {/* Bảng so sánh 2 cột */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 text-xs">
                          <th className="p-3 font-bold w-1/4">Tiêu chí phân biệt</th>
                          <th className="p-3 font-bold text-indigo-700 w-[37.5%]">
                            Hiện Tại Hoàn Thành (HTHT)
                          </th>
                          <th className="p-3 font-bold text-sky-700 w-[37.5%]">
                            HT Hoàn Thành Tiếp Diễn (HTHTTD)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs">
                        <tr>
                          <td className="p-3 font-bold text-slate-900 bg-slate-50/50">
                            1. Trọng tâm nhấn mạnh
                          </td>
                          <td className="p-3 text-slate-800">
                            <span className="font-bold text-indigo-800">KẾT QUẢ / THÀNH QUẢ ĐÃ XONG</span>
                            <div className="text-[11px] text-slate-500 mt-0.5">
                              Nhấn mạnh hành động đã hoàn tất và kết quả của nó.
                            </div>
                          </td>
                          <td className="p-3 text-slate-800">
                            <span className="font-bold text-sky-800">QUÁ TRÌNH / TÍNH LIÊN TỤC</span>
                            <div className="text-[11px] text-slate-500 mt-0.5">
                              Nhấn mạnh độ dài thời gian, sự miệt mài, không bận tâm hành động đã xong hay chưa.
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td className="p-3 font-bold text-slate-900 bg-slate-50/50">
                            2. Câu hỏi tương ứng
                          </td>
                          <td className="p-3">
                            <span className="font-mono font-bold text-indigo-700">
                              How much? / How many? / How many times?
                            </span>
                            <div className="text-[11px] text-slate-600 mt-0.5">
                              (Hỏi về số lượng thành phẩm, bao nhiêu lần)
                            </div>
                          </td>
                          <td className="p-3">
                            <span className="font-mono font-bold text-sky-700">
                              How long...?
                            </span>
                            <div className="text-[11px] text-slate-600 mt-0.5">
                              (Hỏi về độ dài thời gian diễn ra)
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td className="p-3 font-bold text-slate-900 bg-slate-50/50">
                            3. Ví dụ đối chiếu trực quan
                          </td>
                          <td className="p-3 space-y-1">
                            <div className="font-semibold text-slate-900">
                              "I have written <strong className="text-indigo-600">3 emails</strong> today."
                            </div>
                            <div className="text-[11px] text-slate-600">
                              → Đã xong được 3 email (nhấn mạnh số lượng thành phẩm cụ thể).
                            </div>
                          </td>
                          <td className="p-3 space-y-1">
                            <div className="font-semibold text-slate-900">
                              "I have been writing emails <strong className="text-sky-600">all morning</strong>."
                            </div>
                            <div className="text-[11px] text-slate-600">
                              → Cả buổi sáng cắm cúi viết email (nhấn mạnh độ dài thời gian, có thể chưa xong).
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td className="p-3 font-bold text-slate-900 bg-slate-50/50">
                            4. Tính chất tạm thời vs Lâu dài
                          </td>
                          <td className="p-3 text-slate-700">
                            Thường mang tính chất <strong>ổn định, lâu dài hơn</strong>.
                          </td>
                          <td className="p-3 text-slate-700">
                            Thường nhấn mạnh tính chất <strong>tạm thời (temporary)</strong> hơn.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Vùng đặc biệt 1: Các động từ dùng được cả hai */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wide flex items-center gap-1.5 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Trường hợp ngoại lệ: Dùng thì nào cũng đúng và nghĩa tương đương</span>
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Với các động từ vốn mang bản chất hoạt động lâu dài như <strong>live (sống), work (làm việc), teach (dạy học), study (học tập)</strong> khi đi kèm với <em>since/for</em>, cả 2 thì đều đúng và không có sự khác biệt lớn về ngữ nghĩa:
                    </p>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200 font-mono text-slate-800">
                        I <strong>have lived</strong> in Hanoi for 10 years.
                      </div>
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200 font-mono text-slate-800">
                        = I <strong>have been living</strong> in Hanoi for 10 years.
                      </div>
                    </div>
                  </div>

                  {/* Vùng đặc biệt 2: Cấm tiệt Stative Verbs */}
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                    <h5 className="font-bold text-rose-950 text-xs uppercase tracking-wide flex items-center gap-1.5 mb-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                      <span>CẤM KỴ TUYỆT ĐỐI: STATIVE VERBS (ĐỘNG TỪ TRẠNG THÁI)</span>
                    </h5>
                    <p className="text-xs text-rose-900 leading-relaxed">
                      Các động từ chỉ trạng thái cảm xúc, nhận thức, giác quan, sở hữu như: <strong>know, believe, like, love, hate, want, understand, remember, seem, belong, own, have (sở hữu)</strong>... <strong>TUYỆT ĐỐI KHÔNG</strong> được chia ở thì Hiện tại hoàn thành tiếp diễn! Dù có kéo dài suốt bao nhiêu năm, bắt buộc phải lùi về dùng <strong>Hiện tại hoàn thành đơn</strong>:
                    </p>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
                      <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
                        <span className="font-bold">✓ ĐÚNG:</span> I <strong>have known</strong> her for 10 years.
                      </div>
                      <div className="p-2.5 rounded-lg bg-rose-100/70 border border-rose-300 text-rose-900 line-through">
                        <span className="font-bold">✗ SAI:</span> I have been knowing her for 10 years.
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
                  <Flame className="w-5 h-5" />
                </div>
                <div className="space-y-3 w-full">
                  <div>
                    <h5 className="text-sm font-bold text-amber-950 uppercase tracking-wide">
                      CẢNH BÁO BẪY SỐ LƯỢNG (THE QUANTITY TRAP IN EXAMS)
                    </h5>
                    <p className="text-xs text-amber-900/90 mt-0.5">
                      Bẫy kinh điển số 1 trong các đề thi THPT Quốc Gia & chuyên Anh:
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-2xs space-y-2 text-xs">
                    <p className="text-slate-800 leading-relaxed">
                      Khi câu có xuất hiện <strong>số lượng cụ thể</strong> (số cuốn sách, số bức tranh, số cốc nước, số lần làm việc gì...), thí sinh bắt buộc phải chọn <strong>Hiện tại hoàn thành đơn</strong>, KHÔNG được chọn tiếp diễn dù có chữ <em>today, this week</em>!
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                      <div className="p-2 rounded bg-rose-50 text-rose-900 border border-rose-200">
                        ❌ <strong>SAI:</strong> I have been reading <span className="underline">5 books</span> this month.
                      </div>
                      <div className="p-2 rounded bg-emerald-50 text-emerald-900 border border-emerald-200">
                        ✔ <strong>ĐÚNG:</strong> I <strong>have read</strong> 5 books this month.
                      </div>
                    </div>
                    <div className="text-[11px] text-amber-800 italic pt-1">
                      → Quy tắc ghi nhớ: <em>"Thấy số lượng quả ngọt thành phẩm $\rightarrow$ Đánh ngay thì Hoàn thành đơn!"</em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: DẤU HIỆU NHẬN BIẾT & TỪ CHỈ THỜI GIAN (Khối bổ trợ kỹ năng) */}
        {/* ========================================================================= */}
        {activeTab === 'tab3' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Khối từ chỉ thời gian liên tục */}
            <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 shadow-2xs">
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <h4 className="text-base font-bold text-slate-900">
                    1. Các Dấu Hiệu Đặc Trưng Của Thì Hiện Tại Hoàn Thành Tiếp Diễn
                  </h4>
                </div>
                <span className="text-xs font-mono text-sky-700 bg-sky-100 px-2 py-0.5 rounded font-semibold">
                  Continuity Signals
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {/* 1. All + time */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                  <div className="font-bold text-sky-900 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-md bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold">
                      A
                    </span>
                    <span>Cụm Từ "All + thời gian"</span>
                  </div>
                  <div className="font-mono text-indigo-700 text-[11px]">
                    all day / all morning / all afternoon / all week / all night
                  </div>
                  <p className="text-slate-600 text-[11px]">
                    Diễn tả hành động chiếm trọn cả một khoảng thời gian dài liên tục không rời mắt.
                  </p>
                  <div className="p-2 rounded bg-sky-50 text-[11px] text-sky-950 font-mono">
                    "He has been playing games <strong>all night</strong>."
                  </div>
                </div>

                {/* 2. For + khoảng thời gian liên tục */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                  <div className="font-bold text-teal-900 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-md bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold">
                      B
                    </span>
                    <span>For + Khoảng thời gian</span>
                  </div>
                  <div className="font-mono text-teal-700 text-[11px]">
                    for 3 hours, for 2 days, for ages, for hours on end...
                  </div>
                  <p className="text-slate-600 text-[11px]">
                    Khi muốn nhấn mạnh tính chất "miệt mài" diễn ra suốt ngần ấy thời gian.
                  </p>
                  <div className="p-2 rounded bg-teal-50 text-[11px] text-teal-950 font-mono">
                    "I have been waiting for you <strong>for two hours</strong>!"
                  </div>
                </div>

                {/* 3. Since + Mốc thời gian */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                  <div className="font-bold text-indigo-900 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
                      C
                    </span>
                    <span>Since + Mốc thời gian</span>
                  </div>
                  <div className="font-mono text-indigo-700 text-[11px]">
                    since 8 AM, since this morning, since Monday...
                  </div>
                  <p className="text-slate-600 text-[11px]">
                    Bắt đầu từ một mốc cố định và diễn biến liên tục không ngắt quãng đến nay.
                  </p>
                  <div className="p-2 rounded bg-indigo-50 text-[11px] text-indigo-950 font-mono">
                    "She has been crying <strong>since early morning</strong>."
                  </div>
                </div>

                {/* 4. Recently / Lately */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                  <div className="font-bold text-purple-900 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-md bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">
                      D
                    </span>
                    <span>Recently / Lately</span>
                  </div>
                  <div className="font-mono text-purple-700 text-[11px]">
                    lately, recently (dạo gần đây)
                  </div>
                  <p className="text-slate-600 text-[11px]">
                    Nhấn mạnh một chuỗi thói quen hoặc hành động đang diễn ra dồn dập trong những ngày gần đây.
                  </p>
                  <div className="p-2 rounded bg-purple-50 text-[11px] text-purple-950 font-mono">
                    "I have been sleeping badly <strong>lately</strong>."
                  </div>
                </div>

                {/* 5. How long...? */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                  <div className="font-bold text-amber-900 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold">
                      E
                    </span>
                    <span>Câu Hỏi "How long...?"</span>
                  </div>
                  <div className="font-mono text-amber-700 text-[11px]">
                    How long have you been + V-ing?
                  </div>
                  <p className="text-slate-600 text-[11px]">
                    Câu hỏi mở đầu kinh điển nhất để hỏi về độ dài thời gian của một hành vi đang tiếp diễn.
                  </p>
                  <div className="p-2 rounded bg-amber-50 text-[11px] text-amber-950 font-mono">
                    "<strong>How long have you been</strong> learning English?"
                  </div>
                </div>

                {/* 6. Dấu vết hiện tại */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                  <div className="font-bold text-rose-900 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-md bg-rose-100 text-rose-700 flex items-center justify-center text-xs font-bold">
                      F
                    </span>
                    <span>Ngữ Cảnh Kết Quả Ở Hiện Tại</span>
                  </div>
                  <div className="font-mono text-rose-700 text-[11px]">
                    look exhausted, wet ground, breath heavily...
                  </div>
                  <p className="text-slate-600 text-[11px]">
                    Một vế câu mô tả ngoại hình hoặc hiện tượng vật lý đang diễn ra trước mắt người nói.
                  </p>
                  <div className="p-2 rounded bg-rose-50 text-[11px] text-rose-950 font-mono">
                    "You're out of breath! <strong>Have you been running</strong>?"
                  </div>
                </div>
              </div>
            </div>

            {/* Bảng phân tách dấu hiệu HTHT vs HTHTTD */}
            <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 shadow-2xs">
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-indigo-600" />
                  <h4 className="text-base font-bold text-slate-900">
                    2. Bảng Phân Tuyến Dấu Hiệu Nhận Biết: HTHT Đơn vs HTHT Tiếp Diễn
                  </h4>
                </div>
                <span className="text-xs font-mono text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded font-semibold">
                  Quick Cheat Sheet
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* Cột 1: HTHT Đơn */}
                <div className="bg-white p-5 rounded-xl border border-indigo-200 shadow-2xs space-y-3">
                  <div className="font-bold text-indigo-900 text-sm flex items-center gap-2 border-b border-indigo-100 pb-2">
                    <Check className="w-4 h-4 text-indigo-600" />
                    <span>DẤU HIỆU CỦA HIỆN TẠI HOÀN THÀNH (ĐƠN)</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      <span><strong>already, yet, just</strong> (vừa mới, đã rồi, chưa)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      <span><strong>ever, never</strong> (từng, chưa bao giờ - trải nghiệm cuộc đời)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      <span><strong>several times, twice, once</strong> (số lần lặp lại)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      <span><strong>so far, up to now, until now</strong> (cho đến nay)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      <span><strong>How many...? / How much...?</strong> (hỏi số lượng)</span>
                    </li>
                  </ul>
                  <div className="text-[11px] text-indigo-800 bg-indigo-50 p-2.5 rounded-lg border border-indigo-100 font-semibold">
                    💡 Thấy các từ này $\rightarrow$ Ưu tiên chọn ngay <strong>have/has + V3/ed</strong>!
                  </div>
                </div>

                {/* Cột 2: HTHT Tiếp diễn */}
                <div className="bg-white p-5 rounded-xl border border-sky-200 shadow-2xs space-y-3">
                  <div className="font-bold text-sky-900 text-sm flex items-center gap-2 border-b border-sky-100 pb-2">
                    <Check className="w-4 h-4 text-sky-600" />
                    <span>DẤU HIỆU CỦA HT HOÀN THÀNH TIẾP DIỄN</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                      <span><strong>all day, all morning, all week...</strong> (suốt cả...)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                      <span><strong>How long...?</strong> (đã làm trong bao lâu liên tục)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                      <span><strong>for hours on end, continuously</strong> (liên tục hàng giờ liền)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                      <span><strong>for + time NOW</strong> (ví dụ: for 3 hours now)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                      <span><strong>Cảnh báo dấu vết hiện tại</strong> (bùn đất, mồ hôi, thở dốc, mắt đỏ hoe)</span>
                    </li>
                  </ul>
                  <div className="text-[11px] text-sky-800 bg-sky-50 p-2.5 rounded-lg border border-sky-100 font-semibold">
                    💡 Thấy các cụm này $\rightarrow$ Ưu tiên chọn ngay <strong>have/has been + V-ing</strong>!
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ Cảnh Báo (Alert Box): Lỗi sai thường gặp - Phần Nhận biết & Bẫy đề thi */}
            <div className="rounded-2xl border-2 border-indigo-300 bg-indigo-50/70 p-5 sm:p-6 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-indigo-600 text-white shrink-0 mt-0.5">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div className="space-y-3 w-full">
                  <div>
                    <h5 className="text-sm font-bold text-indigo-950 uppercase tracking-wide">
                      CẢNH BÁO BẪY ĐỀ THI: "HOW LONG" VS "HOW MANY" & BẪY STATIVE VERBS
                    </h5>
                    <p className="text-xs text-indigo-900/90 mt-0.5">
                      Ghi nhớ 2 nguyên tắc vàng để không bao giờ bị trừ điểm oan:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    {/* Bẫy 1 */}
                    <div className="bg-white p-3.5 rounded-xl border border-indigo-200 shadow-2xs space-y-1.5">
                      <div className="font-bold text-indigo-950 flex items-center gap-1.5">
                        <ArrowRight className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                        <span>Bẫy Câu Hỏi: How long vs How many</span>
                      </div>
                      <div className="text-slate-600 text-[11px] leading-relaxed">
                        • <strong>How long:</strong> Ưu tiên cao nhất cho thì Tiếp diễn.<br/>
                        <em>"How long have you been studying?"</em><br/>
                        • <strong>How many / How much:</strong> Bắt buộc lùi về Hoàn thành đơn.<br/>
                        <em>"How many units have you completed?" (KHÔNG dùng been completing)</em>
                      </div>
                    </div>

                    {/* Bẫy 2 */}
                    <div className="bg-white p-3.5 rounded-xl border border-indigo-200 shadow-2xs space-y-1.5">
                      <div className="font-bold text-indigo-950 flex items-center gap-1.5">
                        <ArrowRight className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                        <span>Bẫy Câu Có "Since/For" Nhưng Dùng Động Từ Trạng Thái</span>
                      </div>
                      <div className="text-slate-600 text-[11px] leading-relaxed">
                        Dù câu có chứa <em>for 10 years / since 2010</em> (rất giống tiếp diễn), nhưng nếu động từ trong ngoặc là <strong>understand, love, know, believe, belong</strong> $\rightarrow$ Bạn phải chọn <strong>HTHT đơn</strong>!
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
