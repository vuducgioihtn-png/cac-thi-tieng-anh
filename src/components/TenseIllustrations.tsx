import React from 'react';
import { TenseId } from '../types';

interface IllustrationProps {
  tenseId: TenseId;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TenseIllustration: React.FC<IllustrationProps> = ({ tenseId, className = '', size = 'md' }) => {
  const heightClass = size === 'sm' ? 'h-24' : size === 'lg' ? 'h-48' : 'h-36';

  switch (tenseId) {
    case 'present_simple':
      return (
        <div className={`w-full ${heightClass} bg-emerald-50/60 rounded-xl flex items-center justify-center p-3 relative overflow-hidden border border-emerald-100 ${className}`}>
          <svg viewBox="0 0 320 120" className="w-full h-full text-emerald-600">
            {/* Timeline base */}
            <line x1="20" y1="58" x2="300" y2="58" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Repetition dots */}
            <circle cx="50" cy="58" r="4" fill="#10B981" />
            <circle cx="105" cy="58" r="4" fill="#10B981" />
            <circle cx="160" cy="58" r="6" fill="#059669" />
            <circle cx="215" cy="58" r="4" fill="#10B981" />
            <circle cx="270" cy="58" r="4" fill="#10B981" />

            {/* Repeating circular cycle above now */}
            <circle cx="160" cy="38" r="18" stroke="#059669" strokeWidth="2.5" fill="none" strokeDasharray="5 3" />
            <polygon points="172,21 181,25 174,32" fill="#059669" />
            
            <text x="160" y="80" textAnchor="middle" fontSize="11" fill="#059669" fontWeight="bold">ĐIỂM HIỆN TẠI (NOW)</text>
            <text x="160" y="95" textAnchor="middle" fontSize="9" fill="#047857">Thói quen lặp đi lặp lại / Chân lý</text>
            <text x="160" y="16" textAnchor="middle" fontSize="11" fill="#047857" fontWeight="bold">CHU KỲ THƯỜNG XUYÊN</text>
          </svg>
        </div>
      );

    case 'present_continuous':
      return (
        <div className={`w-full ${heightClass} bg-teal-50/60 rounded-xl flex items-center justify-center p-3 relative overflow-hidden border border-teal-100 ${className}`}>
          <svg viewBox="0 0 320 120" className="w-full h-full">
            <line x1="20" y1="58" x2="300" y2="58" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Active zone around NOW */}
            <rect x="105" y="42" width="110" height="32" rx="16" fill="#CCFBF1" stroke="#0D9488" strokeWidth="2" />
            
            {/* Pulsing wave inside */}
            <path d="M 120,58 Q 130,46 140,58 T 160,58 T 180,58 T 195,58" fill="none" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" />
            
            {/* Live camera dot */}
            <circle cx="202" cy="52" r="3.5" fill="#EF4444" />
            
            <circle cx="160" cy="58" r="4.5" fill="#0F766E" />
            <text x="160" y="88" textAnchor="middle" fontSize="11" fill="#0F766E" fontWeight="bold">ĐANG DIỄN RA (NOW)</text>
            <text x="160" y="102" textAnchor="middle" fontSize="9" fill="#115E59">Hành động tạm thời / Ngay lúc nói</text>
            <text x="160" y="22" textAnchor="middle" fontSize="11" fill="#115E59" fontWeight="bold">KHOẢNH KHẮC TIẾP DIỄN</text>
          </svg>
        </div>
      );

    case 'present_perfect':
      return (
        <div className={`w-full ${heightClass} bg-cyan-50/60 rounded-xl flex items-center justify-center p-3 relative overflow-hidden border border-cyan-100 ${className}`}>
          <svg viewBox="0 0 320 120" className="w-full h-full">
            <line x1="20" y1="58" x2="300" y2="58" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Past start node */}
            <circle cx="65" cy="58" r="6" fill="#0891B2" />
            <text x="65" y="78" textAnchor="middle" fontSize="10" fill="#0891B2" fontWeight="bold">QUÁ KHỨ</text>
            <text x="65" y="92" textAnchor="middle" fontSize="9" fill="#64748B">Bắt đầu từ trước</text>

            {/* Bridge arc connecting past to NOW */}
            <path d="M 65,54 Q 132,18 198,54" fill="none" stroke="#0891B2" strokeWidth="3" strokeDasharray="5 3" />
            <polygon points="198,54 190,46 191,56" fill="#0891B2" />
            
            {/* NOW anchor with result pin */}
            <circle cx="205" cy="58" r="7.5" fill="#06B6D4" stroke="#0891B2" strokeWidth="2" />
            <polygon points="201,57 204,61 211,52" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            
            <text x="205" y="78" textAnchor="middle" fontSize="10" fill="#0891B2" fontWeight="bold">HIỆN TẠI (NOW)</text>
            <text x="205" y="92" textAnchor="middle" fontSize="9" fill="#0E7490">Để lại kết quả / Vẫn còn</text>
            <text x="135" y="20" textAnchor="middle" fontSize="11" fill="#0E7490" fontWeight="bold">CẦU NỐI: QUÁ KHỨ ➔ HIỆN TẠI</text>
          </svg>
        </div>
      );

    case 'present_perfect_continuous':
      return (
        <div className={`w-full ${heightClass} bg-sky-50/60 rounded-xl flex items-center justify-center p-3 relative overflow-hidden border border-sky-100 ${className}`}>
          <svg viewBox="0 0 320 120" className="w-full h-full">
            <line x1="20" y1="58" x2="300" y2="58" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Dense shaded progress wave */}
            <rect x="55" y="50" width="135" height="16" rx="8" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
            <path d="M 60,58 C 70,52 80,64 90,58 C 100,52 110,64 120,58 C 130,52 140,64 150,58 C 160,52 170,64 180,58" fill="none" stroke="#0284C7" strokeWidth="2" />

            <circle cx="195" cy="58" r="6.5" fill="#0369A1" />
            <text x="120" y="80" textAnchor="middle" fontSize="10" fill="#0369A1" fontWeight="bold">KÉO DÀI LIÊN TỤC TỚI NAY</text>
            <text x="120" y="94" textAnchor="middle" fontSize="9" fill="#075985">Nhấn mạnh độ dài thời gian không ngắt quãng</text>
            <text x="160" y="24" textAnchor="middle" fontSize="11" fill="#075985" fontWeight="bold">LIÊN TỤC TỪ QUÁ KHỨ ĐẾN HIỆN TẠI</text>
          </svg>
        </div>
      );

    case 'past_simple':
      return (
        <div className={`w-full ${heightClass} bg-amber-50/60 rounded-xl flex items-center justify-center p-3 relative overflow-hidden border border-amber-100 ${className}`}>
          <svg viewBox="0 0 320 120" className="w-full h-full">
            <line x1="20" y1="58" x2="300" y2="58" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Firm historical cross/pin in the past */}
            <circle cx="80" cy="58" r="14" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
            <line x1="73" y1="51" x2="87" y2="65" stroke="#B45309" strokeWidth="2.5" />
            <line x1="87" y1="51" x2="73" y2="65" stroke="#B45309" strokeWidth="2.5" />
            
            <text x="80" y="85" textAnchor="middle" fontSize="10" fill="#92400E" fontWeight="bold">ĐÃ CHẤM DỨT</text>
            <text x="80" y="99" textAnchor="middle" fontSize="9" fill="#B45309">Trong quá khứ (xong hẳn)</text>

            {/* Severed gap to NOW */}
            <circle cx="225" cy="58" r="5" fill="#94A3B8" />
            <text x="225" y="82" textAnchor="middle" fontSize="10" fill="#64748B" fontWeight="600">HIỆN TẠI (NOW)</text>
            
            <text x="150" y="24" textAnchor="middle" fontSize="11" fill="#B45309" fontWeight="bold">HOÀN TẤT TRONG QUÁ KHỨ (CÓ MỐC RÕ)</text>
          </svg>
        </div>
      );

    case 'past_continuous':
      return (
        <div className={`w-full ${heightClass} bg-orange-50/60 rounded-xl flex items-center justify-center p-3 relative overflow-hidden border border-orange-100 ${className}`}>
          <svg viewBox="0 0 320 120" className="w-full h-full">
            <line x1="20" y1="58" x2="300" y2="58" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Ongoing past wave */}
            <rect x="50" y="46" width="95" height="24" rx="12" fill="#FFEDD5" stroke="#EA580C" strokeWidth="2" />
            <text x="97" y="62" textAnchor="middle" fontSize="9" fill="#C2410C" fontWeight="bold">Đang diễn ra...</text>

            {/* Interrupter lightning / arrow */}
            <polygon points="122,22 118,44 128,44 124,56 134,42 125,42" fill="#DC2626" />
            <text x="126" y="16" textAnchor="middle" fontSize="9" fill="#DC2626" fontWeight="bold">Xen vào!</text>

            {/* Labels below */}
            <text x="97" y="84" textAnchor="middle" fontSize="9" fill="#9A3412" fontWeight="bold">Hành động dài (was/were V-ing)</text>
            <text x="97" y="98" textAnchor="middle" fontSize="8.5" fill="#C2410C">bị hành động ngắn (V-ed) cắt ngang</text>

            <circle cx="230" cy="58" r="5" fill="#94A3B8" />
            <text x="230" y="80" textAnchor="middle" fontSize="10" fill="#64748B" fontWeight="600">Hiện tại</text>
          </svg>
        </div>
      );

    case 'past_perfect':
      return (
        <div className={`w-full ${heightClass} bg-rose-50/60 rounded-xl flex items-center justify-center p-3 relative overflow-hidden border border-rose-100 ${className}`}>
          <svg viewBox="0 0 320 120" className="w-full h-full">
            {/* Main horizontal timeline axis */}
            <line x1="20" y1="55" x2="300" y2="55" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Step 1: Earlier past (HAD + V3) - clearly spaced to the left */}
            <circle cx="65" cy="55" r="11" fill="#E11D48" stroke="#9F1239" strokeWidth="2" />
            <text x="65" y="60" textAnchor="middle" fontSize="11" fill="#FFF" fontWeight="bold">1</text>
            
            {/* Step 1 text stacked vertically to completely avoid horizontal overlap */}
            <text x="65" y="78" textAnchor="middle" fontSize="10" fill="#E11D48" fontWeight="bold">XẢY RA TRƯỚC</text>
            <text x="65" y="93" textAnchor="middle" fontSize="9" fill="#9F1239" fontWeight="bold">Had + V3</text>

            {/* Connecting curved progression arrow */}
            <path d="M 80,48 Q 120,32 155,48" fill="none" stroke="#E11D48" strokeWidth="2" strokeDasharray="3 3" />
            <polygon points="158,49 150,44 151,52" fill="#E11D48" />

            {/* Step 2: Later past (V-ed) - positioned with comfortable 105px gap */}
            <circle cx="170" cy="55" r="9" fill="#FDA4AF" stroke="#E11D48" strokeWidth="2" />
            <text x="170" y="59" textAnchor="middle" fontSize="10" fill="#881337" fontWeight="bold">2</text>
            
            {/* Step 2 text stacked vertically */}
            <text x="170" y="78" textAnchor="middle" fontSize="10" fill="#9F1239" fontWeight="bold">XẢY RA SAU</text>
            <text x="170" y="93" textAnchor="middle" fontSize="9" fill="#881337">Quá khứ đơn (V-ed)</text>

            {/* Point of Reference: Present (NOW) */}
            <circle cx="270" cy="55" r="5" fill="#94A3B8" />
            <text x="270" y="78" textAnchor="middle" fontSize="10" fill="#64748B" fontWeight="600">HIỆN TẠI</text>
            <text x="270" y="93" textAnchor="middle" fontSize="9" fill="#94A3B8">(Now)</text>

            {/* Prominent top title */}
            <text x="160" y="18" textAnchor="middle" fontSize="11" fill="#BE123C" fontWeight="bold">QUÁ KHỨ CỦA QUÁ KHỨ (TRƯỚC HÀNH ĐỘNG KHÁC)</text>
          </svg>
        </div>
      );

    case 'past_perfect_continuous':
      return (
        <div className={`w-full ${heightClass} bg-red-50/60 rounded-xl flex items-center justify-center p-3 relative overflow-hidden border border-red-100 ${className}`}>
          <svg viewBox="0 0 320 120" className="w-full h-full">
            <line x1="20" y1="55" x2="300" y2="55" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Extended duration stripe before past event */}
            <rect x="40" y="47" width="95" height="16" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
            <text x="87" y="59" textAnchor="middle" fontSize="8.5" fill="#991B1B" fontWeight="bold">Quá trình liên tục...</text>
            <text x="87" y="78" textAnchor="middle" fontSize="9.5" fill="#B91C1C" fontWeight="bold">Had been V-ing</text>
            <text x="87" y="92" textAnchor="middle" fontSize="8.5" fill="#991B1B">kéo dài suốt nhiều giờ</text>

            {/* Cutoff milestone in past */}
            <line x1="145" y1="35" x2="145" y2="75" stroke="#991B1B" strokeWidth="2" />
            <circle cx="145" cy="55" r="4" fill="#991B1B" />
            <text x="155" y="78" textAnchor="start" fontSize="9.5" fill="#991B1B" fontWeight="bold">Mốc quá khứ</text>
            <text x="155" y="92" textAnchor="start" fontSize="8.5" fill="#7F1D1D">(Before / When...)</text>

            {/* NOW */}
            <circle cx="265" cy="55" r="5" fill="#94A3B8" />
            <text x="265" y="78" textAnchor="middle" fontSize="10" fill="#64748B" fontWeight="600">HIỆN TẠI</text>
            <text x="160" y="20" textAnchor="middle" fontSize="11" fill="#B91C1C" fontWeight="bold">KÉO DÀI LIÊN TỤC TRƯỚC MỐC QUÁ KHỨ</text>
          </svg>
        </div>
      );

    case 'future_simple':
      return (
        <div className={`w-full ${heightClass} bg-indigo-50/60 rounded-xl flex items-center justify-center p-3 relative overflow-hidden border border-indigo-100 ${className}`}>
          <svg viewBox="0 0 320 120" className="w-full h-full">
            <line x1="20" y1="58" x2="300" y2="58" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="85" cy="58" r="6" fill="#64748B" />
            <text x="85" y="80" textAnchor="middle" fontSize="10" fill="#64748B" fontWeight="bold">NOW</text>
            <text x="85" y="94" textAnchor="middle" fontSize="9" fill="#94A3B8">Quyết định bộc phát</text>

            {/* Arrow leaping into future */}
            <path d="M 95,52 Q 155,20 215,52" fill="none" stroke="#4F46E5" strokeWidth="2.5" />
            <polygon points="218,53 209,46 211,56" fill="#4F46E5" />

            <circle cx="225" cy="58" r="7" fill="#4F46E5" />
            <text x="225" y="80" textAnchor="middle" fontSize="10" fill="#4338CA" fontWeight="bold">TƯƠNG LAI</text>
            <text x="225" y="94" textAnchor="middle" fontSize="9" fill="#4F46E5">Will + V-bare</text>
            <text x="160" y="20" textAnchor="middle" fontSize="11" fill="#3730A3" fontWeight="bold">BỘC PHÁT / LỜI HỨA / DỰ ĐOÁN</text>
          </svg>
        </div>
      );

    case 'near_future':
      return (
        <div className={`w-full ${heightClass} bg-blue-50/60 rounded-xl flex items-center justify-center p-3 relative overflow-hidden border border-blue-100 ${className}`}>
          <svg viewBox="0 0 320 120" className="w-full h-full">
            <line x1="20" y1="58" x2="300" y2="58" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Dark cloud with raindrops near now */}
            <circle cx="110" cy="38" r="10" fill="#94A3B8" />
            <circle cx="123" cy="34" r="13" fill="#64748B" />
            <circle cx="137" cy="38" r="9" fill="#94A3B8" />
            <line x1="115" y1="50" x2="110" y2="60" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
            <line x1="125" y1="50" x2="120" y2="60" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
            <line x1="135" y1="50" x2="130" y2="60" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />

            <text x="160" y="80" textAnchor="middle" fontSize="10.5" fill="#1D4ED8" fontWeight="bold">SẮP SỬA XẢY RA (CÓ BẰNG CHỨNG)</text>
            <text x="160" y="95" textAnchor="middle" fontSize="9" fill="#2563EB">Be going to + V (Kế hoạch định sẵn / Dấu hiệu trước mắt)</text>
            <text x="160" y="18" textAnchor="middle" fontSize="11" fill="#1E40AF" fontWeight="bold">TƯƠNG LAI GẦN (BE GOING TO)</text>
          </svg>
        </div>
      );

    case 'future_continuous':
      return (
        <div className={`w-full ${heightClass} bg-violet-50/60 rounded-xl flex items-center justify-center p-3 relative overflow-hidden border border-violet-100 ${className}`}>
          <svg viewBox="0 0 320 120" className="w-full h-full">
            <line x1="20" y1="58" x2="300" y2="58" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="65" cy="58" r="5" fill="#64748B" />
            <text x="65" y="80" textAnchor="middle" fontSize="10" fill="#64748B" fontWeight="600">HIỆN TẠI</text>

            {/* Future specific time window with ongoing activity */}
            <rect x="170" y="42" width="95" height="32" rx="16" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" />
            <path d="M 185,58 Q 195,46 205,58 T 225,58 T 245,58" fill="none" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" />
            
            <text x="217" y="88" textAnchor="middle" fontSize="10" fill="#5B21B6" fontWeight="bold">ĐANG TIẾP DIỄN</text>
            <text x="217" y="102" textAnchor="middle" fontSize="8.5" fill="#6D28D9">Tại mốc giờ tương lai (At 10 a.m tomorrow)</text>
            <text x="160" y="20" textAnchor="middle" fontSize="11" fill="#5B21B6" fontWeight="bold">TIẾP DIỄN TẠI THỜI ĐIỂM TƯƠNG LAI</text>
          </svg>
        </div>
      );

    case 'future_perfect':
      return (
        <div className={`w-full ${heightClass} bg-purple-50/60 rounded-xl flex items-center justify-center p-3 relative overflow-hidden border border-purple-100 ${className}`}>
          <svg viewBox="0 0 320 120" className="w-full h-full">
            <line x1="20" y1="58" x2="300" y2="58" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="55" cy="58" r="5" fill="#64748B" />
            <text x="55" y="80" textAnchor="middle" fontSize="10" fill="#64748B" fontWeight="600">HIỆN TẠI</text>

            {/* Completion before future deadline */}
            <circle cx="160" cy="58" r="8" fill="#9333EA" />
            <polygon points="156,57 159,61 166,52" fill="none" stroke="#FFF" strokeWidth="1.8" />
            <text x="160" y="80" textAnchor="middle" fontSize="9.5" fill="#7E22CE" fontWeight="bold">ĐÃ XONG</text>
            <text x="160" y="94" textAnchor="middle" fontSize="8.5" fill="#9333EA">Will have + V3</text>

            {/* Future Deadline Marker (By the end of year / By 2030) */}
            <line x1="245" y1="34" x2="245" y2="82" stroke="#A855F7" strokeWidth="2.5" strokeDasharray="4 2" />
            <polygon points="245,34 257,41 245,48" fill="#A855F7" />
            <text x="245" y="94" textAnchor="middle" fontSize="9.5" fill="#6B21A8" fontWeight="bold">DEADLINE (BY...)</text>

            <text x="160" y="18" textAnchor="middle" fontSize="11" fill="#6B21A8" fontWeight="bold">HOÀN TẤT TRƯỚC MỐC TƯƠNG LAI</text>
          </svg>
        </div>
      );

    case 'future_perfect_continuous':
      return (
        <div className={`w-full ${heightClass} bg-fuchsia-50/60 rounded-xl flex items-center justify-center p-3 relative overflow-hidden border border-fuchsia-100 ${className}`}>
          <svg viewBox="0 0 320 120" className="w-full h-full">
            <line x1="20" y1="58" x2="300" y2="58" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Long marathon running bar */}
            <rect x="55" y="50" width="145" height="16" rx="8" fill="#FAE8FF" stroke="#C026D3" strokeWidth="2" />
            <text x="127" y="80" textAnchor="middle" fontSize="9.5" fill="#86198F" fontWeight="bold">Will have been V-ing</text>
            <text x="127" y="94" textAnchor="middle" fontSize="8.5" fill="#A21CAF">Tính liên tục kéo dài suốt nhiều năm</text>

            {/* Future target milestone */}
            <line x1="235" y1="36" x2="235" y2="80" stroke="#A21CAF" strokeWidth="2" />
            <circle cx="235" cy="58" r="6" fill="#A21CAF" />
            <text x="235" y="94" textAnchor="middle" fontSize="9.5" fill="#701A75" fontWeight="bold">Mốc tương lai</text>

            <text x="160" y="20" textAnchor="middle" fontSize="11" fill="#701A75" fontWeight="bold">TÍNH ĐẾN MỐC TƯƠNG LAI: ĐỦ ĐỘ DÀI LIÊN TỤC</text>
          </svg>
        </div>
      );

    default: // mixed
      return (
        <div className={`w-full ${heightClass} bg-slate-50 rounded-xl flex items-center justify-center p-3 relative overflow-hidden border border-slate-200 ${className}`}>
          <svg viewBox="0 0 320 120" className="w-full h-full">
            <line x1="20" y1="58" x2="300" y2="58" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="80" cy="58" r="6" fill="#D97706" />
            <circle cx="160" cy="58" r="8" fill="#059669" />
            <circle cx="240" cy="58" r="6" fill="#4F46E5" />
            <text x="80" y="82" textAnchor="middle" fontSize="10" fill="#92400E" fontWeight="bold">QUÁ KHỨ</text>
            <text x="160" y="84" textAnchor="middle" fontSize="11" fill="#065F46" fontWeight="bold">HIỆN TẠI</text>
            <text x="240" y="82" textAnchor="middle" fontSize="10" fill="#3730A3" fontWeight="bold">TƯƠNG LAI</text>
            <text x="160" y="24" textAnchor="middle" fontSize="12" fill="#1E293B" fontWeight="bold">PHẢN XẠ PHÂN BIỆT 12 THÌ TIẾNG ANH</text>
          </svg>
        </div>
      );
  }
};
