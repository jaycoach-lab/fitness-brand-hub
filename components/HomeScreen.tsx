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
import HomeLatestWorkshopCard from "./home/HomeLatestWorkshopCard";
import HomeEbookPromos from "./home/HomeEbookPromos";
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

              <HomeLatestWorkshopCard />

              <HomeWorkshopReviewsMarquee />

              <HomeEbookPromos onGoLibrary={() => setActiveTab("library")} />

              <section>
                <HomeCourseReviews items={courseReviewItems} />

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

