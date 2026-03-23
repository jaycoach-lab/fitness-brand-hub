'use client';

type CourseReviewItem = {
  title: string;
  subtitle: string;
};

type HomeCourseReviewsProps = {
  items: CourseReviewItem[];
};

export default function HomeCourseReviews({ items }: HomeCourseReviewsProps) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-neutral-900">정규과정 후기</h4>
      <div className="mt-3 -mx-4 overflow-x-auto px-4 sm:-mx-5 sm:px-5">
        <div className="flex gap-3 pb-1">
          {items.map((item) => (
            <div key={item.title} className="w-[7rem] shrink-0">
              <div className="aspect-[9/16] w-full rounded-lg bg-neutral-200" />
              <p className="mt-2 line-clamp-2 text-xs leading-4 text-neutral-600">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

