import { SkeletonLine } from "@/components/Skeleton";

export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-12">
      <div className="animate-pulse">
        <SkeletonLine width="w-32" height="h-5" />

        <div className="mt-6 rounded-md border border-line bg-raised p-6 sm:p-8">
          {/* title 2 บรรทัด พร้อมแถบด้านซ้าย */}
          <div className="border-l-4 border-line pl-4">
            <SkeletonLine width="w-full" height="h-10" />
            <SkeletonLine width="w-1/2" height="h-10" />
          </div>

          <div className="mt-4">
            <SkeletonLine width="w-40" height="h-5" />
          </div>

          {/* body 4 บรรทัด */}
          <div className="mt-6 border-t border-line pt-6">
            <SkeletonLine width="w-full" height="h-8" />
            <SkeletonLine width="w-full" height="h-8" />
            <SkeletonLine width="w-full" height="h-8" />
            <SkeletonLine width="w-2/3" height="h-8" />
          </div>
        </div>

        <div className="mt-10">
          <div className="border-l-4 border-line pl-3">
            <SkeletonLine width="w-40" height="h-8" />
          </div>
          <div className="mt-4 space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="rounded-md border border-line bg-raised p-4"
              >
                <SkeletonLine width="w-1/2" />
                <SkeletonLine width="w-1/3" height="h-5" />
                <div className="mt-2">
                  <SkeletonLine width="w-full" />
                  <SkeletonLine width="w-full" />
                  <SkeletonLine width="w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}