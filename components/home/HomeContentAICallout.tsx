'use client';

export default function HomeContentAICallout() {
  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-b from-[#4A4AC8] to-[#0D0D1A] p-5 text-center sm:p-6">
      <p className="text-sm font-semibold text-white/90">
        🚀 콘텐츠 부스트 AI
      </p>
      <h4 className="mt-3 text-xl font-bold text-white sm:text-[1.35rem]">
        어떤 릴스 대본을 만들고 싶으세요?
      </h4>
      <p className="mt-1.5 text-xs text-white/70 sm:text-[0.8125rem]">
        한 줄만 입력하면, 숏폼 대본을 만들어드려요
      </p>
      <div
        className="pointer-events-none select-none mx-auto mt-5 flex h-12 w-full max-w-md items-center justify-center rounded-xl border border-white/10 bg-[#232330] px-4 text-sm text-white/50"
        aria-hidden
      >
        서비스가 70% 완료되었습니다.
      </div>
    </div>
  );
}

