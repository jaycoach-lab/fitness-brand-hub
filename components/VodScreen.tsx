'use client';

// 강의 추가 시 이 배열에 객체를 추가하면 카드가 자동으로 늘어납니다
const courses = [
  {
    id: 1,
    label: "[피트니스 전문가 전용]",
    title: "실패하지 않는 가격 상승 기술 10가지",
    duration: "7시간 10분",
    instructor: "제이코치",
    rating: 4.9,
    originalPrice: "790,000",
    discountPercent: "55%",
    discountedPrice: "355,500",
    href: "#", // 수강 신청 링크 — 확정되면 이 값을 교체
  },
];

export default function VodScreen() {
  return (
    <div className="-mx-4 -mt-2 sm:-mx-5">
      <style>{`
        @keyframes neon-pulse-red {
          0%, 100% { box-shadow: 0 0 4px rgba(255,49,49,0.5), 0 0 10px rgba(255,49,49,0.25); }
          50%       { box-shadow: 0 0 8px rgba(255,49,49,0.8), 0 0 18px rgba(255,49,49,0.45); }
        }
        @keyframes neon-pulse-green {
          0%, 100% { box-shadow: 0 0 4px rgba(22,163,74,0.5), 0 0 10px rgba(22,163,74,0.25); }
          50%       { box-shadow: 0 0 8px rgba(22,163,74,0.8), 0 0 18px rgba(22,163,74,0.45); }
        }
        .neon-red-badge   { animation: neon-pulse-red   2s ease-in-out infinite; }
        .neon-green-badge { animation: neon-pulse-green 2s ease-in-out infinite; }
        @keyframes neon-scroll-hint {
          0%, 100% {
            opacity: 0.85;
            text-shadow:
              0 0 4px rgba(223,255,0,0.45),
              0 0 10px rgba(223,255,0,0.25);
          }
          50% {
            opacity: 1;
            text-shadow:
              0 0 6px rgba(223,255,0,0.85),
              0 0 16px rgba(223,255,0,0.55),
              0 0 26px rgba(24,73,229,0.25);
          }
        }
        .neon-scroll-hint { animation: neon-scroll-hint 2.4s ease-in-out infinite; color: #2b2a51; }
        @keyframes vod-sheet-enter {
          0%   { transform: translateY(20px); opacity: 0.9; }
          5%   { transform: translateY(-8px); opacity: 1; }
          9%   { transform: translateY(3px); }
          12%  { transform: translateY(0); }
          42%  { transform: translateY(20px); }
          47%  { transform: translateY(-8px); }
          51%  { transform: translateY(3px); }
          54%  { transform: translateY(0); }
          84%  { transform: translateY(20px); }
          89%  { transform: translateY(-8px); }
          93%  { transform: translateY(3px); }
          100% { transform: translateY(0); opacity: 1; }
        }
        .vod-sheet-enter { animation: vod-sheet-enter 6.6s ease-in-out 1 both; }
      `}</style>

      {/* 상단 사진 — sticky: main 스크롤 시 top-0에 고정 */}
      <div className="sticky top-0 h-[58dvh] min-h-[28rem] overflow-hidden">
        <img
          src="/slots/vod-mainmain.jpg"
          alt="VOD 강의 메인"
          className="h-full w-full object-cover object-top"
          decoding="async"
        />
      </div>

      {/* 흰 시트 — z-10으로 사진 위에 올라오며 스크롤됨 */}
      <div className="vod-sheet-enter relative z-10 -mt-6 min-h-[calc(100dvh-10rem)] rounded-t-[3rem] bg-[#f7f9fb] px-6 pb-10 pt-14">

        {/* 스크롤 안내 */}
        <div className="neon-scroll-hint mb-6 flex flex-col items-center gap-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="text-xs font-semibold tracking-wide">위로 스크롤 하세요</span>
        </div>

        {/* 시트 헤더 */}
        <p className="text-center text-[1.35rem] font-bold leading-relaxed tracking-tight text-neutral-900">
          제이코치의 1인 기업 커리큘럼을<br />직접 경험해 보세요!
        </p>
        <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-[#DFFF00]/40" />

        {/* 강의 카드 목록 */}
        <div className="mt-6 flex flex-col gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-3xl border border-[#aba9d7]/15 bg-white p-5 shadow-[0_12px_32px_rgba(43,42,81,0.06)]"
            >

              {/* 배지 + 별점 */}
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="neon-red-badge inline-flex items-center rounded-full bg-[#FFF1F1] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FF3131]">
                    Premium VOD
                  </span>
                  <span className="neon-green-badge inline-flex items-center rounded-full bg-[#F0FFF0] px-3 py-1 text-xs font-bold tracking-wider text-[#16a34a]">
                    제이코치 추천!
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[#1849e5]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="text-xs font-bold">{course.rating}</span>
                </div>
              </div>

              {/* 강의 라벨 + 제목 + 메타 */}
              <div className="mt-3">
                <p className="mb-1 text-sm font-bold text-[#1849e5]">{course.label}</p>
                <h2 className="text-xl font-extrabold leading-snug text-neutral-900">
                  {course.title}
                </h2>
                <div className="mt-2 flex items-center gap-4 text-sm text-neutral-500">
                  <div className="flex items-center gap-1">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span>{course.instructor}</span>
                  </div>
                </div>
              </div>

              {/* 가격 */}
              <div className="mt-3 flex flex-col gap-1">
                <span className="text-sm text-neutral-400 line-through">{course.originalPrice}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-[#E53935]">{course.discountPercent}</span>
                  <span className="text-2xl font-extrabold text-neutral-900">{course.discountedPrice}</span>
                  <span className="text-base font-bold text-neutral-900">원</span>
                </div>
              </div>

              {/* 수강하기 버튼 */}
              <a
                href={course.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#6B7280] px-8 py-4 text-base font-bold text-white shadow-sm shadow-black/10 transition-transform duration-200 active:scale-[0.98]"
              >
                <span>곧 오픈</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
              </a>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
