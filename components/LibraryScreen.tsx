export default function LibraryScreen() {
  return (
    <div className="flex h-full flex-col px-4 py-5 text-left">
      <style>{`
        .badge-gloss {
          background: linear-gradient(180deg, rgba(255,255,255,0.65) 0%, transparent 55%);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.75),
            0 0 0 1px rgba(255,255,255,0.35);
        }
        .badge-shine-amber {
          animation: badge-shine-amber 3.2s ease-in-out infinite;
        }
        .badge-shine-emerald {
          animation: badge-shine-emerald 3.2s ease-in-out infinite;
        }
        @keyframes badge-shine-amber {
          0%, 100% {
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.75),
              0 0 0 1px rgba(251,191,36,0.55),
              0 0 14px 2px rgba(251,191,36,0.5);
          }
          50% {
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.85),
              0 0 0 1px rgba(251,191,36,0.8),
              0 0 22px 6px rgba(251,191,36,0.8);
          }
        }
        @keyframes badge-shine-emerald {
          0%, 100% {
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.75),
              0 0 0 1px rgba(52,211,153,0.55),
              0 0 14px 2px rgba(52,211,153,0.5);
          }
          50% {
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.85),
              0 0 0 1px rgba(52,211,153,0.8),
              0 0 22px 6px rgba(52,211,153,0.8);
          }
        }
      `}</style>
      <h2 className="text-lg font-semibold text-neutral-900">자료실</h2>
      <p className="mt-1.5 text-sm text-neutral-500">
        전문성 향상을 위한 엄선된 자료를 만나보세요.
      </p>

      <div className="mt-4 space-y-3">
        <a
          href="https://www.geekus.kr/fitnessbusinessschool/classroom/185"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="badge-gloss badge-shine-amber inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-medium text-amber-800">
                인기
              </span>
            </div>
            <div className="relative mt-3 aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100">
              <img
                src="/library-ebook-story.png"
                alt="피트니스 1인 기업 이야기"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
              전자책
            </p>
            <h3 className="mt-1 text-base font-semibold text-neutral-900">
              피트니스 1인 기업 이야기
            </h3>
            <p className="mt-1 text-sm leading-5 text-neutral-500">
              트레이너, 필라테스 강사 800명 이상 읽었습니다
            </p>
          </article>
        </a>

        <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="badge-gloss badge-shine-emerald inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-medium text-emerald-800">
              New!
            </span>
          </div>
          <div className="relative mt-3 aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100">
            <img
              src="/library-salaryman.png"
              alt="월급쟁이 트레이너로 살아남기"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
            전자책
          </p>
          <h3 className="mt-1 text-base font-semibold text-neutral-900">
            월급쟁이 트레이너로 살아남기
          </h3>
          <p className="mt-1 text-sm leading-5 text-neutral-500">
            막연한 불안에서 완전한 독립으로
          </p>
        </article>
      </div>
    </div>
  );
}
