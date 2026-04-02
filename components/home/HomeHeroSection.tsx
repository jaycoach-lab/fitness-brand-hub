'use client';

import Image from "next/image";

type HomeHeroSectionProps = {
  onOpenIntro: () => void;
};

export default function HomeHeroSection({ onOpenIntro }: HomeHeroSectionProps) {
  return (
    <section className="relative min-h-[10.5rem] overflow-hidden rounded-[1.25rem] border border-neutral-200 bg-neutral-900 px-5 py-6 text-white sm:px-6 sm:py-6">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/slots/home-hero-visual.png"
          alt=""
          fill
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 max-w-[11.5rem] text-left sm:max-w-[11.75rem]">
        <p className="text-[11px] font-medium tracking-[0.14em] text-white/70 sm:text-xs">
          피트니스 1인 기업
        </p>
        <h2 className="mt-3 max-w-[11.5rem] text-[1.3rem] font-extrabold leading-[1.18] sm:max-w-[11.75rem] sm:text-[1.45rem]">
          <span className="block whitespace-nowrap">피트니스 전문가를 위한</span>
          <span className="block whitespace-nowrap">실전 1인 기업 교육</span>
        </h2>
        <p className="mt-4 max-w-[11rem] text-[13px] leading-6 text-white/75 sm:max-w-[11.25rem] sm:text-sm">
          센터에 의존하지 않고
          <br />
          자기 이름으로 고객을 모으고
          <br />
          수익을 만드는 방법을 배웁니다.
        </p>
        <div className="mt-5">
          <button
            type="button"
            onClick={onOpenIntro}
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-white px-4.5 text-[13px] font-semibold text-neutral-900 sm:min-h-11 sm:px-5 sm:text-sm"
          >
            더 알아보기
          </button>
        </div>
      </div>
    </section>
  );
}

