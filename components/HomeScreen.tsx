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
          <>
            <section className="mt-3 rounded-3xl bg-neutral-900 px-5 py-5 text-white">
              <div className="max-w-[11.5rem] text-left">
                <p className="text-[11px] font-medium tracking-[0.14em] text-white/70">
                  피트니스 1인 기업
                </p>
                <h2 className="mt-3 text-[1.3rem] font-extrabold leading-[1.18]">
                  <span className="block">피트니스 전문가를 위한</span>
                  <span className="block">실전 1인 기업 교육</span>
                </h2>
                <p className="mt-4 text-[13px] leading-6 text-white/75">
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
                    className="inline-flex min-h-10 items-center justify-center rounded-full bg-white px-4.5 text-[13px] font-semibold text-neutral-900"
                  >
                    무료 자료실
                  </button>
                </div>
              </div>
            </section>

            <section className="mt-5">
              <h3 className="text-base font-semibold text-neutral-900">
                빠른 이동 메뉴
              </h3>
              <div className="mt-4 grid grid-cols-3 gap-1.5">
                <button
                  type="button"
                  onClick={() => setActiveTab("library")}
                  className="flex w-full flex-col items-center px-1 py-1.5"
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[9px] font-semibold tracking-[0.08em] text-neutral-600">
                    LIB
                  </div>
                  <p className="mt-2 w-full text-center text-[10px] leading-4 font-semibold text-neutral-900">
                    무료 전자책
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("workshop")}
                  className="flex w-full flex-col items-center px-1 py-1.5"
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[9px] font-semibold tracking-[0.08em] text-neutral-600">
                    WKS
                  </div>
                  <p className="mt-2 w-full text-center text-[10px] leading-4 font-semibold text-neutral-900">
                    진행중인 워크샵
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("reviews")}
                  className="flex w-full flex-col items-center px-1 py-1.5"
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[9px] font-semibold tracking-[0.08em] text-neutral-600">
                    AI
                  </div>
                  <p className="mt-2 w-full text-center text-[10px] leading-4 font-semibold text-neutral-900">
                    🚀 Content Boost AI
                  </p>
                </button>
              </div>
            </section>
          </>
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

