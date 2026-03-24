'use client';

import HomeCourseReviews from "./home/HomeCourseReviews";
import HomeWorkshopReviewsMarquee from "./home/HomeWorkshopReviewsMarquee";

type CourseReviewItem = {
  title: string;
  subtitle: string;
};

type ReviewsScreenProps = {
  items: CourseReviewItem[];
};

export default function ReviewsScreen({ items }: ReviewsScreenProps) {
  return (
    <div className="flex h-full flex-col space-y-[1.25rem] text-left">
      <HomeCourseReviews items={items} />
      <HomeWorkshopReviewsMarquee />
    </div>
  );
}

