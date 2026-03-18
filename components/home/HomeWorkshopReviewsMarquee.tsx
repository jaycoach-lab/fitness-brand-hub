'use client';

const workshopReviewItems = [
  {
    body: "이 워크샵을 듣고 나서 제 수업 퀄리티가 완전히 달라졌어요. 강력 추천합니다!",
    author: "필라테스 강사 김OO",
  },
  {
    body: "현장에서 바로 적용할 수 있는 팁이 많았어요. 다음 워크샵도 기대됩니다.",
    author: "트레이너 이OO",
  },
  {
    body: "막연했던 운영 방향을 구체적으로 정리할 수 있었어요. 감사합니다.",
    author: "센터 운영 준비중 박OO",
  },
  {
    body: "짧은 시간 안에 궁금했던 내용을 명확히 풀 수 있었어요. 추천해요!",
    author: "필라테스 강사 최OO",
  },
  {
    body: "1인 기업으로 전환하는 데 필요한 실전 노하우를 많이 배웠어요.",
    author: "트레이너 정OO",
  },
];

export default function HomeWorkshopReviewsMarquee() {
  return (
    <section>
      <style>{`
        @keyframes workshopReviewFlow {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .workshop-review-flow {
          animation: workshopReviewFlow 20s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .workshop-review-flow {
            animation: none;
          }
        }
      `}</style>

      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-neutral-900">워크샵 후기</h3>
        <a
          href="https://www.geekus.kr/fitnessbusinessschool?c=337"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-neutral-500"
        >
          전체보기 &gt;
        </a>
      </div>

      <div className="mt-3 -mx-4 overflow-hidden px-4 sm:-mx-5 sm:px-5">
        <div className="flex gap-2 pb-1 workshop-review-flow">
          {[...workshopReviewItems, ...workshopReviewItems].map((item, i) => (
            <div
              key={i}
              className="w-[9.6rem] shrink-0 rounded-lg border border-neutral-200 bg-white p-2.5 shadow-sm"
            >
              <p className="text-xs text-amber-500" aria-hidden>
                ★★★★★
              </p>
              <p className="mt-2 line-clamp-3 text-xs leading-4 text-neutral-700">
                {item.body}
              </p>
              <p className="mt-2 text-[10px] text-neutral-500">— {item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

