import Link from "next/link";

interface SearchBarProps {
  defaultValue: string;
}

export default function SearchBar({ defaultValue }: SearchBarProps) {
  return (
    // form GET: ส่ง ?q=... ไป /posts เอง ไม่ต้องใช้ JavaScript ฝั่ง client
    <form action="/posts" method="get" className="mt-6 flex gap-2">
      <input
        // key เปลี่ยนตามคำค้นหา: input สร้างใหม่ ค่าในช่องตรงกับ URL เสมอ
        key={defaultValue}
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder="ค้นหาจากชื่อบทความหรือเนื้อหา..."
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        ค้นหา
      </button>

      {/* แสดงเฉพาะตอนกำลังค้นหาอยู่: คลิกเดียวล้างกลับหน้าทั้งหมด */}
      {defaultValue && (
        <Link
          href="/posts"
          className="shrink-0 rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          ล้าง
        </Link>
      )}
    </form>
  );
}