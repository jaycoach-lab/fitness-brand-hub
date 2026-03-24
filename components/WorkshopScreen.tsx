import Image from "next/image";

export default function WorkshopScreen() {
  return (
    <div className="flex h-full flex-col px-4 py-5 text-left">
      <h2 className="text-lg font-semibold text-neutral-900">워크샵</h2>
      <p className="mt-1.5 text-sm text-neutral-500">
        함께 성장하는 오프라인 및 온라인 교육 프로그램
      </p>

      <div className="mt-4 space-y-4">
        <a
          href="https://www.latpeed.com/products/OGMv4"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="relative aspect-[16/9] w-full bg-neutral-200">
              <Image
                src="/slots/home-workshop-banner.png"
                alt=""
                fill
                className="h-full w-full object-cover"
              />
              <span className="absolute right-2 top-2 inline-flex items-center rounded-md bg-blue-600 px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.55),0_0_8px_rgba(37,99,235,0.35)] animate-pulse">
                모집 중
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-neutral-900">
                피트니스 1인 기업 워크샵
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-neutral-500">
                <li>2026.04.19</li>
                <li>부산 만덕구 · 10명 정원</li>
              </ul>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-neutral-400 line-through">
                    100,000원
                  </span>
                  <span className="text-base font-semibold text-neutral-900">
                    0원
                  </span>
                </div>
                <span className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white">
                  신청하기
                </span>
              </div>
            </div>
          </article>
        </a>

        <a
          href="https://www.latpeed.com/products/OGMv4"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="relative aspect-[16/9] w-full bg-neutral-200">
              <Image
                src="/slots/home-workshop-banner.png"
                alt=""
                fill
                className="h-full w-full object-cover"
              />
              <span className="absolute right-2 top-2 inline-flex items-center rounded-md bg-amber-500 px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-[0_0_20px_rgba(245,158,11,0.55),0_0_8px_rgba(245,158,11,0.35)] animate-pulse">
                곧 오픈
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-neutral-900">
                [제이코치 X 카일] 당신의 가격은 틀렸습니다.
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-neutral-500">
                <li>2026.04.26</li>
                <li>[오프라인] 서울 구로역 근처 · 15명</li>
              </ul>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-neutral-400 line-through">
                    150,000원
                  </span>
                  <span className="text-base font-semibold text-neutral-900">
                    50,000원
                  </span>
                </div>
                <span className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white">
                  신청하기
                </span>
              </div>
            </div>
          </article>
        </a>
      </div>
    </div>
  );
}
