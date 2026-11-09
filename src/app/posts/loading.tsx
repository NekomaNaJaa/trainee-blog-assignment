import PostCardSkeleton from "@/components/PostCardSkeleton";

export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12">
      {/* ตรงกับ h1 (44px), คำอธิบาย (24px), ช่องค้นหา (40px) */}
      <div className="animate-pulse">
        <div className="flex h-11 items-center">
          <div className="h-6 w-48 rounded bg-line" />
        </div>
        <div className="mt-2 flex h-6 items-center">
          <div className="h-3.5 w-24 rounded bg-line" />
        </div>
        <div className="mt-6 h-10 rounded-md bg-line" />
      </div>

      <div className="mt-8 border-t border-line">
        {Array.from({ length: 6 }).map((_, i) => (
          <PostCardSkeleton key={i} />
        ))}
      </div>
    </main>
  );
}