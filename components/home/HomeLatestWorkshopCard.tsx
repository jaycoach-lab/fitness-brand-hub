'use client';

import Image from "next/image";

export default function HomeLatestWorkshopCard() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-neutral-900">최신 워크샵</h3>
        <span className="text-xs font-medium text-neutral-500">전체보기 &gt;</span>
      </div>

      <div className="relative mt-3 flex min-h-[12rem] flex-col overflow-hidden rounded-2xl bg-neutral-900 px-5 py-5 text-white sm:px-6 sm:py-6">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/slots/home-workshop-banner.png"
            alt=""
            fill
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 z-10 flex h-full flex-col justify-between">
          <div className="-mt-1 flex flex-wrap items-center gap-2 px-5 py-5 sm:px-6 sm:py-6">
            <span className="inline-flex items-center rounded-md bg-red-600 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_0_20px_rgba(220,38,38,0.55),0_0_8px_rgba(220,38,38,0.35)] animate-pulse">
              마감 임박!
            </span>
            <span className="text-xs font-semibold text-red-500">잔여 3석</span>
          </div>

          <div className="mt-auto px-5 pb-3 pt-2 sm:px-6">
            <h4 className="text-[1.7rem] font-bold leading-snug sm:text-[1.8rem]">
              피트니스 1인 기업 워크샵
            </h4>
            <p className="mt-0.5 pl-0.5 text-xs text-white/80">
              일시 : 2024.04.16 (일) | 부산 만덕구
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

