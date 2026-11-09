import PostCardSkeleton from "@/components/PostCardSkeleton";

export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="h-9 w-48 animate-pulse rounded bg-gray-200" />
      <div className="mt-2 h-6 w-32 animate-pulse rounded bg-gray-200" />

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <PostCardSkeleton key={i} />
        ))}
      </div>
    </main>
  );
}