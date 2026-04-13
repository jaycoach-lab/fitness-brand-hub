'use client';

export default function VodScreen() {
  return (
    <div className="flex h-full flex-col px-4 py-5 text-left">
      <h2 className="text-lg font-semibold text-neutral-900">VOD 강의</h2>
      <p className="mt-1.5 text-sm text-neutral-500">
        오늘 배워서 바로 써먹는 실전 강의
      </p>

      <div className="mt-4 space-y-4">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <article className="relative min-h-[220px] overflow-hidden rounded-3xl bg-[#1C1B1B]">

            {/* 배경 사선 텍스처 */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, transparent, transparent 22px, rgba(255,255,255,0.025) 22px, rgba(255,255,255,0.025) 23px)",
              }}
              aria-hidden
            />

            {/* 왼쪽 콘텐츠 영역 */}
            <div className="relative z-10 flex h-full flex-col justify-between p-5 pr-[36%]">
              {/* 배지 */}
              <span className="inline-flex w-fit items-center rounded-md bg-[#DFFF00]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#DFFF00]">
                판매중
              </span>

              {/* 제목 + 설명 */}
              <div className="mt-4">
                <h3 className="text-[1.3rem] font-bold leading-snug text-white">
                  실패하지 않는<br />가격 상승의 10가지 기술
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                  오늘 배워서 바로 써먹는<br />가격 상승 기술!
                </p>
              </div>

              {/* 가격 + 버튼 */}
              <div className="mt-5">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs text-neutral-500 line-through">790,000원</span>
                  <span className="text-base font-bold text-white">360,000원</span>
                </div>
                <span className="mt-3 inline-flex items-center rounded-full bg-[#DFFF00] px-5 py-2.5 text-sm font-semibold text-[#1C1B1B]">
                  수강 신청
                </span>
              </div>
            </div>

            {/* 오른쪽 코치 사진 영역 */}
            <div className="absolute bottom-0 right-0 top-0 w-[36%]">
              {/* 사진 플레이스홀더 — 파일 준비되면 아래 주석 해제 후 div 제거
              <Image
                src="/slots/vod-coach-photo.png"
                alt="Jaycoach"
                fill
                className="object-cover object-top [transform:scaleX(-1)]"
              />
              */}
              <div className="flex h-full w-full items-end justify-center bg-gradient-to-b from-neutral-700/40 to-neutral-800/60 pb-6">
                <span className="text-[10px] text-neutral-600">사진 준비 중</span>
              </div>

              {/* 왼쪽으로 자연스럽게 블렌드 */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#1C1B1B] to-transparent" aria-hidden />
            </div>

          </article>
        </a>
      </div>
    </div>
  );
}
