import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="text-5xl font-bold text-gray-900">404</h1>
      <p className="mt-3 text-gray-600">ไม่พบหน้าหรือบทความที่ต้องการ</p>
      <Link
        href="/posts"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        กลับไปหน้ารายการ
      </Link>
    </main>
  );
}