'use client';

import Image from "next/image";

type HomeEbookPromosProps = {
  onGoLibrary: () => void;
};

export default function HomeEbookPromos({ onGoLibrary }: HomeEbookPromosProps) {
  return (
    <>
      <section className="rounded-3xl border border-neutral-200 bg-white px-5 pt-5 pb-0">
        <div className="flex flex-col">
          <div className="space-y-3 text-center">
            <h3 className="text-xl font-bold leading-7 text-neutral-900">
              <span className="block">피트니스 전문가를 위한</span>
              <span className="block">1인 기업 올인원 가이드</span>
            </h3>
            <p className="text-sm leading-6 text-neutral-500">1인 기업가로 성장하는 실전 전략</p>
          </div>
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={onGoLibrary}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-neutral-900 px-5 text-sm font-semibold text-white"
            >
              무료로 읽기
            </button>
          </div>
          <div className="relative mt-6 w-full overflow-hidden rounded-2xl">
            <Image
              src="/ebook-cover-v2.png"
              alt="피트니스 1인 기업 올인원 가이드"
              width={819}
              height={1024}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-neutral-900 bg-black px-5 pt-5 pb-0">
        <div className="flex flex-col">
          <div className="space-y-3 text-center">
            <h3 className="text-xl font-bold leading-7 text-white">월급쟁이 트레이너로 살아남기</h3>
            <p className="text-sm leading-6 text-white/80">막연한 불안에서 완전한 독립으로</p>
          </div>
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={onGoLibrary}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-neutral-900"
            >
              무료로 읽기
            </button>
          </div>
          <div className="relative mt-6 w-full overflow-hidden rounded-2xl">
            <Image
              src="/ebook-salaryman-v2.png"
              alt="월급쟁이 트레이너로 살아남기"
              width={819}
              height={1024}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}

