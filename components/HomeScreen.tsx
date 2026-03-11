'use client';

import { useState } from "react";
import TopBar from "./TopBar";
import BottomTabBar from "./BottomTabBar";
import PlaceholderScreen from "./PlaceholderScreen";

type TabKey = "home" | "library" | "workshop" | "reviews";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState<TabKey>("home");

  return (
    <div className="bg-neutral-50">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col">
        <TopBar />

        <main className="flex flex-1 flex-col px-4 pb-6 pt-2 sm:px-5 sm:pb-5 sm:pt-0">
          {activeTab === "home" ? (
            <div className="flex flex-col space-y-[1.25rem]">
            <section className="min-h-[10.5rem] overflow-hidden rounded-[1.25rem] border border-neutral-200 bg-neutral-900 px-5 py-6 text-white sm:px-6 sm:py-6">
              <div className="max-w-[11.5rem] text-left sm:max-w-[11.75rem]">
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
                    무료 자료실
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[10px] font-semibold tracking-[0.08em] text-neutral-600 shadow-sm">
                    LIB
                  </div>
                  <p className="mt-2.5 w-full text-center text-[11px] leading-4 font-semibold text-neutral-900 sm:text-[11px]">
                    무료 전자책
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("workshop")}
                  className="flex w-full flex-col items-center rounded-xl px-2 py-3 active:bg-neutral-100"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[10px] font-semibold tracking-[0.08em] text-neutral-600 shadow-sm">
                    WKS
                  </div>
                  <p className="mt-2.5 w-full text-center text-[11px] leading-4 font-semibold text-neutral-900 sm:text-[11px]">
                    진행중인 워크샵
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("reviews")}
                  className="flex w-full flex-col items-center rounded-xl px-2 py-3 active:bg-neutral-100"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[10px] font-semibold tracking-[0.08em] text-neutral-600 shadow-sm">
                    AI
                  </div>
                  <p className="mt-2.5 w-full text-center text-[11px] leading-4 font-semibold text-neutral-900 sm:text-[11px]">
                    🚀 Content Boost AI
                  </p>
                </button>
              </div>
            </section>
          </div>
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
    </div>
  );
}

