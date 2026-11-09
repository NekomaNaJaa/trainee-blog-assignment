export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <div className="animate-pulse rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        {/* ลิงก์กลับ */}
        <div className="h-5 w-40 rounded bg-gray-200" />
        {/* title */}
        <div className="mt-4 h-9 w-3/4 rounded bg-gray-200" />
        {/* ผู้เขียน */}
        <div className="mt-2 h-5 w-40 rounded bg-gray-200" />
        {/* body */}
        <div className="mt-6 space-y-2.5">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-2/3 rounded bg-gray-200" />
        </div>
      </div>

      {/* หัวข้อคอมเมนต์ */}
      <div className="mt-8 h-7 w-48 animate-pulse rounded bg-gray-200" />
      <ul className="mt-4 space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <li
            key={i}
            className="animate-pulse rounded-lg border border-gray-200 bg-white p-4"
          >
            <div className="h-5 w-1/2 rounded bg-gray-200" />
            <div className="mt-1 h-3 w-1/3 rounded bg-gray-200" />
            <div className="mt-2 space-y-1.5">
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-5/6 rounded bg-gray-200" />
              <div className="h-4 w-2/3 rounded bg-gray-200" />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}