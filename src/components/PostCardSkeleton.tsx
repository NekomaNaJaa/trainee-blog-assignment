import { SkeletonLine } from "@/components/Skeleton";

export default function PostCardSkeleton() {
  return (
    <div className="grid animate-pulse grid-cols-[2.5rem_1fr] gap-x-4 border-b border-line py-6 sm:grid-cols-[3rem_1fr]">
      <div className="pt-1.5">
        <div className="h-3.5 w-6 rounded bg-line" />
      </div>
      <div>
        <SkeletonLine width="w-full" height="h-7" />
        <SkeletonLine width="w-2/3" height="h-7" />
        <div className="mt-2">
          <SkeletonLine width="w-full" />
          <SkeletonLine width="w-5/6" />
        </div>
        <div className="mt-3">
          <SkeletonLine width="w-16" height="h-5" />
        </div>
      </div>
    </div>
  );
}