import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-xl px-4 py-24">
      <h1 className="font-serif text-3xl text-ink">ไม่พบหน้านี้</h1>
      <p className="mt-3 text-muted">
        ลิงก์อาจผิด หรือบทความนี้ไม่มีอยู่แล้ว
      </p>
      <Link
        href="/posts"
        className="mt-6 inline-flex h-10 items-center rounded-md bg-accent px-5 text-sm font-medium text-canvas hover:brightness-110"
      >
        ดูบทความทั้งหมด
      </Link>
    </main>
  );
}