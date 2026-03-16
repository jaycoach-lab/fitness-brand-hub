'use client';

import { useState } from "react";
import Image from "next/image";
import TopBar from "./TopBar";
import BottomTabBar from "./BottomTabBar";
import LibraryScreen from "./LibraryScreen";
import WorkshopScreen from "./WorkshopScreen";
import PlaceholderScreen from "./PlaceholderScreen";

type TabKey = "home" | "library" | "workshop" | "reviews";

const courseReviewItems = [
  { title: "정규과정 수강 후기", subtitle: "브랜드 방향이 훨씬 또렷해졌어요" },
  { title: "실전 적용 후기", subtitle: "회원 커뮤니케이션 방식이 달라졌어요" },
  { title: "운영 전환 후기", subtitle: "혼자서도 운영 흐름을 잡을 수 있었어요" },
  { title: "수강 후기 4", subtitle: "실제 수강생 후기 요약 텍스트" },
  { title: "수강 후기 5", subtitle: "실제 수강생 후기 요약 텍스트" },
  { title: "수강 후기 6", subtitle: "실제 수강생 후기 요약 텍스트" },
  { title: "수강 후기 7", subtitle: "실제 수강생 후기 요약 텍스트" },
];

const workshopReviewItems = [
  { body: "이 워크샵을 듣고 나서 제 수업 퀄리티가 완전히 달라졌어요. 강력 추천합니다!", author: "필라테스 강사 김OO" },
  { body: "현장에서 바로 적용할 수 있는 팁이 많았어요. 다음 워크샵도 기대됩니다.", author: "트레이너 이OO" },
  { body: "막연했던 운영 방향을 구체적으로 정리할 수 있었어요. 감사합니다.", author: "센터 운영 준비중 박OO" },
  { body: "짧은 시간 안에 궁금했던 내용을 명확히 풀 수 있었어요. 추천해요!", author: "필라테스 강사 최OO" },
  { body: "1인 기업으로 전환하는 데 필요한 실전 노하우를 많이 배웠어요.", author: "트레이너 정OO" },
];

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState<TabKey>("home");

  return (
    <div className="bg-neutral-50">
      <div className="mx-auto flex h-[100dvh] w-full max-w-md flex-col overflow-hidden">
        <TopBar />

        <main className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pb-6 pt-2 sm:px-5 sm:pb-5 sm:pt-0">
          {activeTab === "home" ? (
            <div className="flex flex-col space-y-[1.25rem]">
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
                      onClick={() => setActiveTab("library")}
                      className="inline-flex min-h-10 items-center justify-center rounded-full bg-white px-4.5 text-[13px] font-semibold text-neutral-900 sm:min-h-11 sm:px-5 sm:text-sm"
                    >
                      더 알아보기
                    </button>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-base font-semibold text-neutral-900">
                  빠른 이동 메뉴
                </h3>
                <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-2.5">
                  <button
                    type="button"
                    onClick={() => setActiveTab("library")}
                    className="flex w-full flex-col items-center rounded-xl px-2 py-3 active:bg-neutral-100"
                  >
                    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center">
                      <img
                        src="/home-quickmenu-ebook.png"
                        alt=""
                        className="h-20 w-20 object-contain"
                      />
                    </div>
                    <p className="mt-2.5 w-full min-w-0 text-center text-[11px] leading-4 font-semibold text-neutral-900 sm:text-[11px]">
                      무료 전자책
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("workshop")}
                    className="flex w-full flex-col items-center rounded-xl px-2 py-3 active:bg-neutral-100"
                  >
                    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center">
                      <img
                        src="/home-quickmenu-workshop.png"
                        alt=""
                        className="h-20 w-20 object-contain"
                      />
                    </div>
                    <p className="mt-2.5 w-full min-w-0 text-center text-[11px] leading-4 font-semibold text-neutral-900 sm:text-[11px]">
                      진행중인 워크샵
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("reviews")}
                    className="flex w-full flex-col items-center rounded-xl px-2 py-3 active:bg-neutral-100"
                  >
                    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center">
                      <img
                        src="/home-quickmenu-ai.png"
                        alt=""
                        className="h-20 w-20 object-contain [filter:drop-shadow(0_0_14px_rgba(15,23,42,0.52))]"
                      />
                    </div>
                    <p className="mt-2.5 w-full min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-center text-[11px] leading-4 font-semibold text-neutral-900 sm:text-[11px]">
                      🚀 Content AI
                    </p>
                  </button>
                </div>
              </section>

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

              <section>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-neutral-900">
                    최신 워크샵
                  </h3>
                  <span className="text-xs font-medium text-neutral-500">
                    전체보기 &gt;
                  </span>
                </div>
                <div className="relative mt-3 flex min-h-[12rem] flex-col overflow-hidden rounded-2xl bg-neutral-900 px-5 py-5 text-white sm:px-6 sm:py-6">
                  <div className="pointer-events-none absolute inset-0">
                    <Image
                      src="/slots/home-workshop-banner.png"
                      alt=""
                      fill
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/55" />
                  </div>
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-md bg-red-600 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_0_20px_rgba(220,38,38,0.55),0_0_8px_rgba(220,38,38,0.35)] animate-pulse">
                        마감 임박!
                      </span>
                      <span className="text-xs text-white/90">잔여 3석</span>
                    </div>
                    <div className="flex-1 min-h-[1.5rem]" />
                    <div className="pt-1 pb-0.5">
                      <h4 className="text-2xl font-bold leading-snug sm:text-[1.5rem]">
                        피트니스 1인 기업 워크샵
                      </h4>
                      <p className="mt-2 text-xs text-white/80">
                        일시 : 2024.04.16 (일) | 부산 만덕구
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-neutral-900">
                    워크샵 후기
                  </h3>
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
                        <p className="text-xs text-amber-500" aria-hidden>★★★★★</p>
                        <p className="mt-2 line-clamp-3 text-xs leading-4 text-neutral-700">
                          {item.body}
                        </p>
                        <p className="mt-2 text-[10px] text-neutral-500">
                          — {item.author}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="rounded-3xl border border-neutral-200 bg-white px-5 pt-5 pb-0">
                <div className="flex flex-col">
                  <div className="space-y-3 text-center">
                    <h3 className="text-xl font-bold leading-7 text-neutral-900">
                      <span className="block">피트니스 전문가를 위한</span>
                      <span className="block">1인 기업 올인원 가이드</span>
                    </h3>
                    <p className="text-sm leading-6 text-neutral-500">
                      1인 기업가로 성장하는 실전 전략
                    </p>
                  </div>
                  <div className="mt-5 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setActiveTab("library")}
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
                    <h3 className="text-xl font-bold leading-7 text-white">
                      월급쟁이 트레이너로 살아남기
                    </h3>
                    <p className="text-sm leading-6 text-white/80">
                      막연한 불안에서 완전한 독립으로
                    </p>
                  </div>
                  <div className="mt-5 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setActiveTab("library")}
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

              <section>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">
                    정규과정 후기
                  </h4>
                  <div className="mt-3 -mx-4 overflow-x-auto px-4 sm:-mx-5 sm:px-5">
                    <div className="flex gap-3 pb-1">
                      {courseReviewItems.map((item) => (
                        <div
                          key={item.title}
                          className="w-[7rem] shrink-0"
                        >
                          <div className="aspect-[9/16] w-full rounded-lg bg-neutral-200" />
                          <p className="mt-2 line-clamp-2 text-xs leading-4 text-neutral-600">
                            {item.subtitle}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

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

              </section>
            </div>
          ) : activeTab === "library" ? (
          <LibraryScreen />
        ) : activeTab === "workshop" ? (
          <WorkshopScreen />
        ) : (
          <PlaceholderScreen
            title="후기"
            description="정규 과정과 워크샵 후기가 이 탭에 모입니다."
          />
        )}
        </main>

        <BottomTabBar activeTab={activeTab} onSelectTab={setActiveTab} />
      </div>
    </div>
  );
}

