'use client';

type HomeQuickMenuProps = {
  onGoLibrary: () => void;
  onGoWorkshop: () => void;
  onGoReviews: () => void;
};

export default function HomeQuickMenu({
  onGoLibrary,
  onGoWorkshop,
  onGoReviews,
}: HomeQuickMenuProps) {
  return (
    <section>
      <h3 className="text-base font-semibold text-neutral-900">빠른 이동 메뉴</h3>
      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-2.5">
        <button
          type="button"
          onClick={onGoLibrary}
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
          onClick={onGoWorkshop}
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
          onClick={onGoReviews}
          className="flex w-full flex-col items-center rounded-xl px-2 py-3 active:bg-neutral-100"
        >
          <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center">
            <img
              src="/home-quickmenu-vod.png"
              alt=""
              className="h-20 w-20 object-contain"
            />
          </div>
          <p className="mt-2.5 w-full min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-center text-[11px] leading-4 font-semibold text-neutral-900 sm:text-[11px]">
            VOD 강의
          </p>
        </button>
      </div>
    </section>
  );
}

