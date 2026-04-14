'use client';

import { useEffect, useRef, useState } from "react";
import TopBar from "./TopBar";
import BottomTabBar from "./BottomTabBar";
import LibraryScreen from "./LibraryScreen";
import WorkshopScreen from "./WorkshopScreen";
import HomeMemberBanner from "./home/HomeMemberBanner";
import HomeContentAICallout from "./home/HomeContentAICallout";
import HomeWorkshopReviewsMarquee from "./home/HomeWorkshopReviewsMarquee";
import HomeQuickMenu from "./home/HomeQuickMenu";
import HomeHeroSection from "./home/HomeHeroSection";
import HomeLatestWorkshopCard from "./home/HomeLatestWorkshopCard";
import HomeEbookPromos from "./home/HomeEbookPromos";
import ReviewsScreen from "./ReviewsScreen";
import HomeCourseReviews from "./home/HomeCourseReviews";
import VodScreen from "./VodScreen";

type TabKey = "home" | "library" | "workshop" | "vod" | "reviews";

const courseReviewItems = [
  { title: "정규과정 수강 후기", subtitle: "브랜드 방향이 훨씬 또렷해졌어요" },
  { title: "실전 적용 후기", subtitle: "회원 커뮤니케이션 방식이 달라졌어요" },
  { title: "운영 전환 후기", subtitle: "혼자서도 운영 흐름을 잡을 수 있었어요" },
  { title: "수강 후기 4", subtitle: "실제 수강생 후기 요약 텍스트" },
  { title: "수강 후기 5", subtitle: "실제 수강생 후기 요약 텍스트" },
  { title: "수강 후기 6", subtitle: "실제 수강생 후기 요약 텍스트" },
  { title: "수강 후기 7", subtitle: "실제 수강생 후기 요약 텍스트" },
];

const heroIntroContent = {
  title: "피트니스 1인 기업 소개",
  paragraphs: [
    "센터에 의존하지 않고, 내 이름으로 고객을 모으고 수익을 만드는 방법을 배우는 프로그램입니다.",
    "처음 시작하는 분도 따라올 수 있게, 실제 현장에서 바로 쓰는 방식으로 설명합니다.",
  ],
  points: [
    "내 브랜드(이름)를 만들고 알리는 방법",
    "고객이 끊기지 않게 만드는 운영 방법",
    "가격/상품을 정리해서 수익을 만드는 방법",
  ],
} as const;

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState<TabKey>("home");
  const [isHeroIntroOpen, setIsHeroIntroOpen] = useState(false);
  const [heroIntroSavedScrollTop, setHeroIntroSavedScrollTop] = useState(0);
  const mainScrollRef = useRef<HTMLElement | null>(null);
  const contentAiAnchorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  useEffect(() => {
    if (!isHeroIntroOpen) {
      return;
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsHeroIntroOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isHeroIntroOpen]);

  useEffect(() => {
    const mainEl = mainScrollRef.current;
    if (!mainEl) {
      return;
    }

    if (isHeroIntroOpen) {
      const current = mainEl.scrollTop;
      setHeroIntroSavedScrollTop(current);
      return;
    }

    mainEl.scrollTop = heroIntroSavedScrollTop;
  }, [isHeroIntroOpen, heroIntroSavedScrollTop]);

  const scrollToContentAi = () => {
    if (isHeroIntroOpen) {
      return;
    }

    if (activeTab !== "home") {
      setActiveTab("home");
    }

    if (!contentAiAnchorRef.current) {
      return;
    }

    contentAiAnchorRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-neutral-50">
      <div className="relative mx-auto flex h-[100dvh] w-full max-w-md flex-col overflow-hidden">
        <TopBar />

        <main
          ref={mainScrollRef}
          className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pb-6 pt-2 sm:px-5 sm:pb-5 sm:pt-0"
          style={isHeroIntroOpen ? { overflowY: "hidden" } : undefined}
        >
          {activeTab === "home" ? (
            <div className="flex flex-col space-y-[1.25rem]">
              <HomeHeroSection onOpenIntro={() => setIsHeroIntroOpen(true)} />

              <HomeQuickMenu
                onGoLibrary={() => setActiveTab("library")}
                onGoWorkshop={() => setActiveTab("workshop")}
                onGoReviews={() => setActiveTab("vod")}
              />

              <HomeMemberBanner />

              <HomeLatestWorkshopCard onGoWorkshop={() => setActiveTab("workshop")} />

              <HomeWorkshopReviewsMarquee />

              <HomeEbookPromos onGoLibrary={() => setActiveTab("library")} />

              <section>
                <HomeCourseReviews items={courseReviewItems} />

                <div ref={contentAiAnchorRef} />
                <HomeContentAICallout />

              </section>
            </div>
          ) : activeTab === "library" ? (
          <LibraryScreen />
        ) : activeTab === "workshop" ? (
          <WorkshopScreen />
        ) : activeTab === "vod" ? (
          <VodScreen />
        ) : (
          <ReviewsScreen items={courseReviewItems} />
        )}
        </main>

        <BottomTabBar activeTab={activeTab} onSelectTab={setActiveTab} />

        {activeTab === "home" && isHeroIntroOpen ? (
          <div
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
            role="dialog"
            aria-modal="true"
            aria-label={heroIntroContent.title}
            onClick={() => setIsHeroIntroOpen(false)}
          >
            <div
              className="flex max-h-[min(88dvh,calc(100dvh-3rem))] w-full max-w-md flex-col overflow-hidden rounded-3xl bg-[#FDFDF5] shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex shrink-0 items-center border-b border-neutral-200 bg-white px-3 py-3">
                <button
                  type="button"
                  onClick={() => setIsHeroIntroOpen(false)}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl font-light leading-none text-neutral-900 transition-colors hover:bg-neutral-100"
                  aria-label="닫기"
                >
                  ×
                </button>
                <p className="min-w-0 flex-1 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
                  FITNESS SOLO-PRENEUR
                </p>
                <div className="h-10 w-10 shrink-0" aria-hidden />
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-4 pb-24 pt-7 touch-pan-y">
                <h2 className="px-1 text-center text-[1.4rem] font-bold leading-snug tracking-tight text-neutral-900">
                  <span className="block">센터에 의지하지 않고</span>
                  <span className="mt-0.5 block">살아남을 수 있으신가요?</span>
                </h2>

                <div className="mt-5 flex w-full justify-center overflow-x-auto">
                  <p className="w-max max-w-none whitespace-nowrap rounded-full bg-[#DFFF00]/40 px-4 py-2 text-center text-xs font-medium text-neutral-900 sm:text-sm">
                    내 이름으로 고객을 모으는 1인 기업의 시작
                  </p>
                </div>

                <div className="relative mt-7 rounded-3xl bg-white p-5 shadow-sm">
                  <svg
                    className="pointer-events-none absolute right-4 top-4 h-7 w-7 text-neutral-400 opacity-35"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M9 21h6M10 21.5a1.5 1.5 0 003 0M12 3a5 5 0 00-3 9.2V16a1 1 0 001 1h4a1 1 0 001-1v-3.8A5 5 0 0012 3z" />
                  </svg>

                  <p className="pr-9 text-left text-sm font-medium leading-[1.65] text-neutral-900">
                    <span className="mr-1 inline-flex align-baseline rounded-full bg-neutral-900 px-2.5 py-0.5 text-xs font-semibold leading-none text-[#DFFF00]">
                      피트니스 1인 기업
                    </span>
                    은 자신의 전문성을 브랜드로 만들고, 공간의 제약 없이 고객을 연결하며, 지속 가능한 수익 구조를 설계하는 일입니다.
                  </p>
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-1 shrink-0 rounded-full bg-[#DFFF00]" aria-hidden />
                    <h3 className="text-base font-bold text-neutral-900">1인 기업가 독립 사례</h3>
                  </div>

                  <div className="mt-4 aspect-video w-full overflow-hidden rounded-2xl bg-[#1c1c1c]">
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/K-sb1VbbtCY"
                      title="1인 기업가 독립 사례"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-1 shrink-0 rounded-full bg-[#DFFF00]" aria-hidden />
                    <h3 className="text-base font-bold text-neutral-900">누구에게 필요한가요?</h3>
                  </div>

                  <div className="mt-4 flex gap-3.5 rounded-2xl bg-white p-4 shadow-sm">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DFFF00]"
                      aria-hidden
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        className="text-neutral-900"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M12 3L2 9v12h20V9L12 3zm0 2.2l6.9 4.1H5.1L12 5.2zM4 11h16v8H4v-8zm2 2v4h2v-4H6zm4 0v4h2v-4h-2zm4 0v4h2v-4h-2zm4 0v4h2v-4h-2z" />
                      </svg>
                    </span>
                    <p className="min-w-0 flex-1 self-center text-left text-sm font-bold leading-relaxed text-neutral-900">
                      센터에 의지하지 않고 수익을 만들고 싶은 운동 지도자
                    </p>
                  </div>

                  <div className="mt-3 flex gap-3.5 rounded-2xl bg-white p-4 shadow-sm">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DFFF00]"
                      aria-hidden
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        className="text-neutral-900"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M4 17 L9 11 L13 15 L20 7" />
                      </svg>
                    </span>
                    <p className="min-w-0 flex-1 self-center text-left text-sm font-bold leading-relaxed text-neutral-900">
                      높은 노동 강도에도 수익 변화가 없어 고민 중인 지도자
                    </p>
                  </div>

                  <div className="mt-3 flex gap-3.5 rounded-2xl bg-white p-4 shadow-sm">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DFFF00]"
                      aria-hidden
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        className="text-neutral-900"
                        fill="currentColor"
                        aria-hidden
                      >
                        <ellipse cx="12" cy="7" rx="6" ry="2.8" />
                        <ellipse cx="12" cy="12" rx="6" ry="2.8" />
                        <ellipse cx="12" cy="17" rx="6" ry="2.8" />
                      </svg>
                    </span>
                    <p className="min-w-0 flex-1 self-center text-left text-sm font-bold leading-relaxed text-neutral-900">
                      내 이름으로 고객의 제품 구조를 만들고 싶은 운동 지도자
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-1 shrink-0 rounded-full bg-[#DFFF00]" aria-hidden />
                    <h3 className="text-base font-bold text-neutral-900">
                      1인 기업가로 성장할 때 마주할 3가지 변화
                    </h3>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DFFF00] text-sm font-bold text-neutral-900">
                          &lt;
                        </span>
                        <div className="min-w-0">
                          <p className="font-bold text-neutral-900">시간과 공간의 자유</p>
                          <p className="mt-1.5 text-sm leading-relaxed text-neutral-700">
                            언제 어디서나 일하는 방식과 장소를 스스로 정하며, 센터 일정에 묶이지 않고 움직일 수 있습니다.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DFFF00] text-base font-bold leading-none text-neutral-900">
                          ○
                        </span>
                        <div className="min-w-0">
                          <p className="font-bold text-neutral-900">독립적인 브랜드 소유권</p>
                          <p className="mt-1.5 text-sm leading-relaxed text-neutral-700">
                            나만의 철학과 가치가 담긴 이름과 메시지를 직접 소유하고, 브랜드 방향을 내가 결정합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DFFF00] text-sm font-bold text-neutral-900">
                          ↗
                        </span>
                        <div className="min-w-0">
                          <p className="font-bold text-neutral-900">지속 가능한 커리어 설계</p>
                          <p className="mt-1.5 text-sm leading-relaxed text-neutral-700">
                            단기 수익에만 의존하지 않고, 오래 유지할 수 있는 수익 구조와 커리어를 설계합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-1 shrink-0 rounded-full bg-[#DFFF00]" aria-hidden />
                    <h3 className="text-base font-bold text-neutral-900">About Jaycoach</h3>
                  </div>

                  <div className="relative mt-4 overflow-hidden rounded-2xl shadow-sm">
                    <img
                      src="/about-jaycoach.png"
                      alt="Jaycoach"
                      className="block h-auto w-full"
                      decoding="async"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-lg font-bold text-white">제이코치</p>
                      <p className="mt-0.5 text-sm font-semibold text-[#DFFF00]">피트니스 1인 기업학교 대표</p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3 text-left text-sm leading-relaxed text-neutral-800">
                    <li className="flex gap-2">
                      <span className="mt-0.5 shrink-0 text-amber-600" aria-hidden>
                        🔸
                      </span>
                      <span>한양대학교 경영학 석사 I 선수 가치 평가 연구로 학위논 문 KCI 등재</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 shrink-0 text-amber-600" aria-hidden>
                        🔸
                      </span>
                      <span>현장 경력 10년 | 경험 기반 피트니스 업계 특화된 브랜 딩·경영 전략 교육 진행</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 shrink-0 text-amber-600" aria-hidden>
                        🔸
                      </span>
                      <span>2025년 15개 브랜드 론칭 I 1인 기업-소규모 센터까지 브랜드 구축 사례 축적</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 shrink-0 text-amber-600" aria-hidden>
                        🔸
                      </span>
                      <span>피트니스 업계 종사자를 위한 전문 경영·브랜딩 교육 제공</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 shrink-0 text-amber-600" aria-hidden>
                        🔸
                      </span>
                      <span>브랜드 기획부터 시장 진입, 가격 전략, 매출 구조 설계까 지 실전 노하우 보유</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 shrink-0 text-amber-600" aria-hidden>
                        🔸
                      </span>
                      <span>소규모 피트니스 센터 대상 상품 설계 및 가격 전략 자문 다수</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 shrink-0 text-amber-600" aria-hidden>
                        🔸
                      </span>
                      <span>해외 고객 유치, 공공기관 협업, 대학•센터•기업 출강 등 다양한 성장 사례 보유</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

