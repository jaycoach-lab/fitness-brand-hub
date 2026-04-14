'use client';

export default function HomeMemberBanner() {
  return (
    <section
      className="relative overflow-hidden rounded-2xl px-4 py-4 shadow-[0_10px_30px_-12px_rgba(11,16,32,0.55),0_0_24px_-12px_rgba(223,255,0,0.35)]"
      style={{
        background:
          "linear-gradient(135deg, #0B1020 0%, #173A8C 48%, #2E5BFF 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 18% 0%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 55%), linear-gradient(115deg, rgba(255,255,255,0) 36%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0) 64%), radial-gradient(90% 60% at 100% 120%, rgba(46,91,255,0.35) 0%, rgba(46,91,255,0) 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-4 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, rgba(223,255,0,0) 0%, rgba(223,255,0,0.9) 50%, rgba(223,255,0,0) 100%)",
          boxShadow: "0 0 10px rgba(223,255,0,0.55)",
        }}
      />
      <div className="relative flex flex-row items-center justify-between gap-3">
        <div className="min-w-0 flex-1 text-left">
          <p
            className="whitespace-nowrap text-base font-bold tracking-tight text-[#F8FAFF]"
            style={{ textShadow: "0 0 10px rgba(223,255,0,0.22)" }}
          >
            <span className="text-[#DFFF00]">▶︎</span> 1인 기업 전략 상담을 신청하세요 (90분)
          </p>
          <p className="mt-1 text-xs leading-5 text-[rgba(248,250,255,0.78)]">
            300명 이상의 트레이너, 필라테스 강사님의 삶이 달라졌습니다
          </p>
        </div>
        <a
          href="https://www.latpeed.com/products/KVW93"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-[#DFFF00] px-3 py-2 text-xs font-extrabold text-[#111111] shadow-[0_4px_14px_rgba(223,255,0,0.35)]"
        >
          신청하기
        </a>
      </div>
    </section>
  );
}

