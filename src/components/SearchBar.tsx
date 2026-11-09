import Link from "next/link";

interface SearchBarProps {
  defaultValue: string;
}

export default function SearchBar({ defaultValue }: SearchBarProps) {
  return (
    <form action="/posts" method="get" className="mt-6 flex gap-2">
      <input
        // key เปลี่ยนตามคำค้นหา: ช่องกรอกตรงกับ URL เสมอ
        key={defaultValue}
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder="ค้นหาจากชื่อบทความหรือเนื้อหา"
        className="h-10 w-full rounded-md border border-line bg-raised px-4 text-sm text-ink placeholder:text-muted"
      />
      <button
        type="submit"
        className="h-10 shrink-0 rounded-md bg-accent px-5 text-sm font-medium text-canvas hover:brightness-110"
      >
        ค้นหา
      </button>
      {defaultValue && (
        <Link
          href="/posts"
          className="flex h-10 shrink-0 items-center rounded-md border border-line px-4 text-sm text-muted hover:text-ink"
        >
          ล้าง
        </Link>
      )}
    </form>
  );
}