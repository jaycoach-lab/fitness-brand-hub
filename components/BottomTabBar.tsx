import { type ReactNode } from "react";

type TabKey = "home" | "library" | "workshop" | "vod" | "reviews";

type BottomTabBarProps = {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
};

function IconHome() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconBook() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function IconPlay() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
    </svg>
  );
}

const tabs: { key: TabKey; label: string; icon: ReactNode }[] = [
  { key: "home",     label: "홈",       icon: <IconHome /> },
  { key: "library",  label: "자료실",   icon: <IconBook /> },
  { key: "workshop", label: "워크샵",   icon: <IconUsers /> },
  { key: "vod",      label: "VOD 강의", icon: <IconPlay /> },
];

export default function BottomTabBar({
  activeTab,
  onSelectTab,
}: BottomTabBarProps) {
  return (
    <nav className="sticky inset-x-0 bottom-0 border-t border-neutral-200 bg-white/95 px-2 py-2 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-between gap-1">
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onSelectTab(tab.key)}
              className={`flex flex-1 flex-col items-center gap-0.5 rounded-2xl px-2 py-1.5 text-[10px] font-medium transition-colors ${
                isActive
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-400 hover:bg-neutral-100"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
