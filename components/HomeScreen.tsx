'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
                onGoReviews={scrollToContentAi}
              />

              <HomeLatestWorkshopCard onGoWorkshop={() => setActiveTab("workshop")} />

              <HomeWorkshopReviewsMarquee />

              <HomeMemberBanner />

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
              className="flex max-h-[min(88dvh,calc(100dvh-3rem))] w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex shrink-0 items-center justify-between border-b border-neutral-200 px-4 py-3">
                <p className="text-sm font-semibold text-neutral-900">
                  {heroIntroContent.title}
                </p>
                <button
                  type="button"
                  onClick={() => setIsHeroIntroOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-600 hover:bg-neutral-100"
                  aria-label="닫기"
                >
                  ×
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 text-left">
                {heroIntroContent.paragraphs.map((text) => (
                  <p key={text} className="text-sm leading-6 text-neutral-700">
                    {text}
                  </p>
                ))}

                <ul className="mt-4 space-y-2 text-sm text-neutral-800">
                  {heroIntroContent.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[0.2rem] text-neutral-400" aria-hidden>
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

