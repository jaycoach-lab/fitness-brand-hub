'use client';

export default function HomeMemberBanner() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white px-4 py-4">
      <div className="flex flex-row items-center justify-between gap-3">
        <div className="min-w-0 flex-1 text-left">
          <p className="text-sm font-semibold text-neutral-900">
            피트니스 1인 기업 멤버가 되어보세요.
          </p>
          <p className="mt-1 text-xs leading-5 text-neutral-500">
            741명의 피트니스 전문가가 함께 합니다.
          </p>
        </div>
        <a
          href="https://www.geekus.kr/fitnessbusinessschool"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-neutral-900 px-3 py-2 text-xs font-semibold text-white"
        >
          함께하기
        </a>
      </div>
    </section>
  );
}

