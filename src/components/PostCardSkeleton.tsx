export default function PostCardSkeleton() {
  return (
    <div className="flex h-full animate-pulse flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="h-14 space-y-2">
        <div className="h-5 w-full rounded bg-gray-200" />
        <div className="h-5 w-2/3 rounded bg-gray-200" />
      </div>
      <div className="mt-3 h-10 space-y-2">
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-5/6 rounded bg-gray-200" />
      </div>
      <div className="mt-auto pt-4">
        <div className="h-5 w-20 rounded bg-gray-200" />
      </div>
    </div>
  );
}