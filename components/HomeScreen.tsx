'use client';

import { useState } from "react";
import Image from "next/image";
import TopBar from "./TopBar";
import BottomTabBar from "./BottomTabBar";
import LibraryScreen from "./LibraryScreen";
import WorkshopScreen from "./WorkshopScreen";
import PlaceholderScreen from "./PlaceholderScreen";
import HomeMemberBanner from "./home/HomeMemberBanner";
import HomeContentAICallout from "./home/HomeContentAICallout";
import HomeWorkshopReviewsMarquee from "./home/HomeWorkshopReviewsMarquee";
import HomeQuickMenu from "./home/HomeQuickMenu";
import HomeHeroSection from "./home/HomeHeroSection";

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

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState<TabKey>("home");

  return (
    <div className="bg-neutral-50">
      <div className="mx-auto flex h-[100dvh] w-full max-w-md flex-col overflow-hidden">
        <TopBar />

        <main className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pb-6 pt-2 sm:px-5 sm:pb-5 sm:pt-0">
          {activeTab === "home" ? (
            <div className="flex flex-col space-y-[1.25rem]">
              <HomeHeroSection onGoLibrary={() => setActiveTab("library")} />

              <HomeQuickMenu
                onGoLibrary={() => setActiveTab("library")}
                onGoWorkshop={() => setActiveTab("workshop")}
                onGoReviews={() => setActiveTab("reviews")}
              />

              <HomeMemberBanner />

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
                  </div>
                  <div className="absolute inset-0 z-10 flex h-full flex-col justify-between">
                    <div className="-mt-1 flex flex-wrap items-center gap-2 px-5 py-5 sm:px-6 sm:py-6">
                      <span className="inline-flex items-center rounded-md bg-red-600 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_0_20px_rgba(220,38,38,0.55),0_0_8px_rgba(220,38,38,0.35)] animate-pulse">
                        마감 임박!
                      </span>
                      <span className="text-xs font-semibold text-red-500">
                        잔여 3석
                      </span>
                    </div>
                    <div className="mt-auto px-5 pb-3 pt-2 sm:px-6">
                      <h4 className="text-[1.7rem] font-bold leading-snug sm:text-[1.8rem]">
                        피트니스 1인 기업 워크샵
                      </h4>
                      <p className="mt-0.5 pl-0.5 text-xs text-white/80">
                        일시 : 2024.04.16 (일) | 부산 만덕구
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <HomeWorkshopReviewsMarquee />

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

                <HomeContentAICallout />

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

