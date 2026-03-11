type TabKey = "home" | "library" | "workshop" | "reviews";

type BottomTabBarProps = {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
};

const tabs: { key: TabKey; label: string }[] = [
  { key: "home", label: "홈" },
  { key: "library", label: "자료실" },
  { key: "workshop", label: "워크샵" },
  { key: "reviews", label: "후기" },
];

export default function BottomTabBar({
  activeTab,
  onSelectTab,
}: BottomTabBarProps) {
  return (
    <nav className="sticky inset-x-0 bottom-0 border-t border-neutral-200 bg-white/95 px-4 py-2 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-between gap-2">
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onSelectTab(tab.key)}
              className={`flex flex-1 flex-col items-center rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                isActive
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-500 hover:bg-neutral-100"
              }`}
            >
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

