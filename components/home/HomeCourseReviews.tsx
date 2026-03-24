'use client';

import Image from "next/image";

type CourseReviewItem = {
  title: string;
  subtitle: string;
};

type HomeCourseReviewsProps = {
  items: CourseReviewItem[];
};

export default function HomeCourseReviews({ items }: HomeCourseReviewsProps) {
  const reviewItems = [
    ...items,
    { title: "수강 후기 8", subtitle: "실제 수강생 후기 요약 텍스트" },
    { title: "수강 후기 9", subtitle: "실제 수강생 후기 요약 텍스트" },
  ];
  const reviewLinks: Record<number, string> = {
    0: "https://www.instagram.com/reel/DURgtUfk_jI/",
    1: "https://youtube.com/shorts/ueeVYTSibzs?feature=share",
    2: "https://youtube.com/shorts/Gtf8iMyvdbk?feature=share",
    3: "https://youtube.com/shorts/MXBqvdhAZT8?feature=share",
    4: "https://youtube.com/shorts/ISbVxIkCEgM?feature=share",
    5: "https://youtube.com/shorts/GmU6wLh8dlo?feature=share",
    6: "https://youtube.com/shorts/rUjHkWunQ9Y?feature=share",
    7: "https://youtube.com/shorts/FjWQFYiN6GI?feature=share",
    8: "https://youtube.com/shorts/sbMC4zLrHj8?feature=share",
  };

  return (
    <div>
      <h4 className="text-sm font-semibold text-neutral-900">정규과정 후기</h4>
      <div className="mt-3 -mx-4 overflow-x-auto px-4 sm:-mx-5 sm:px-5">
        <div className="flex gap-3 pb-1">
          {reviewItems.map((item, index) => {
            const link = reviewLinks[index];
            const thumbnail = (
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg bg-neutral-200">
                <Image
                  src="/slots/home-review-regular-thumb.png"
                  alt=""
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
            );

            if (link) {
              return (
                <a
                  key={item.title}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-[7rem] shrink-0"
                >
                  {thumbnail}
                  <p className="mt-2 line-clamp-2 text-xs leading-4 text-neutral-600">
                    {item.subtitle}
                  </p>
                </a>
              );
            }

            return (
              <div key={item.title} className="w-[7rem] shrink-0">
                {thumbnail}
                <p className="mt-2 line-clamp-2 text-xs leading-4 text-neutral-600">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

