'use client';

import { useState } from "react";
import TopBar from "./TopBar";
import BottomTabBar from "./BottomTabBar";
import PlaceholderScreen from "./PlaceholderScreen";

type TabKey = "home" | "library" | "workshop" | "reviews";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState<TabKey>("home");

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50">
      <TopBar />

      <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-5 pb-5">
        {activeTab === "home" ? (
          <PlaceholderScreen
            title="홈 화면 준비 중"
            description="섹션 1~5 콘텐츠는 이후 단계에서 다시 채워집니다."
          />
        ) : activeTab === "library" ? (
          <PlaceholderScreen
            title="자료실"
            description="전자책과 자료들은 곧 이곳에서 볼 수 있어요."
          />
        ) : activeTab === "workshop" ? (
          <PlaceholderScreen
            title="워크샵"
            description="진행 중인 워크샵 정보가 이 탭에 표시됩니다."
          />
        ) : (
          <PlaceholderScreen
            title="후기"
            description="정규 과정과 워크샵 후기가 이 탭에 모입니다."
          />
        )}
      </main>

      <BottomTabBar activeTab={activeTab} onSelectTab={setActiveTab} />
    </div>
  );
}

