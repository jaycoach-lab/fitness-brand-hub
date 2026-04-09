'use client';

import Image from "next/image";

type HomeLatestWorkshopCardProps = {
  onGoWorkshop: () => void;
};

export default function HomeLatestWorkshopCard({
  onGoWorkshop,
}: HomeLatestWorkshopCardProps) {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-neutral-900">최신 워크샵</h3>
        <button
          type="button"
          onClick={onGoWorkshop}
          className="text-xs font-medium text-neutral-500"
        >
          전체보기 &gt;
        </button>
      </div>

      <a
        href="https://www.latpeed.com/products/ewBrO"
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-3 flex min-h-[12rem] flex-col overflow-hidden rounded-2xl bg-neutral-900 px-5 py-5 text-white sm:px-6 sm:py-6"
      >
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/slots/home-workshop-banner.png"
            alt=""
            fill
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 z-10 flex h-full flex-col justify-between">
          <div className="-mt-1 flex flex-wrap items-center gap-2 px-5 py-5 text-xs sm:px-6 sm:py-6">
            <span className="inline-flex items-center rounded-md bg-red-600 px-3 py-1.5 font-semibold text-white shadow-[0_0_20px_rgba(220,38,38,0.55),0_0_8px_rgba(220,38,38,0.35)] animate-pulse">
              신규 모집!
            </span>
            <span className="font-semibold text-red-500">잔여 2석</span>
          </div>

          <div className="mt-auto px-5 pb-3 pt-2 sm:px-6">
            <h4 className="text-[1.56rem] font-bold leading-snug sm:text-[1.68rem]">
              피트니스 전문가를 위한
              <br />
              프라이싱과 세일즈설계
            </h4>
            <p className="mt-1 pl-0.5 text-xs text-white/80">
              일시 : 2026.04.29 (일) | 서울 구로구 근처
            </p>
          </div>
        </div>
      </a>
    </section>
  );
}

