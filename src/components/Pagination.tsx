import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  query: string;
}

// สร้าง URL ของหน้าที่ต้องการ โดยเก็บคำค้นหาไว้
function buildHref(query: string, page: number): string {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `/posts?${qs}` : "/posts";
}

const baseButton = "rounded-lg border px-3 py-1.5 text-sm";
const activeStyle = "border-blue-600 bg-blue-600 text-white";
const normalStyle = "border-gray-300 bg-white text-gray-700 hover:bg-gray-100";
const disabledStyle = "border-gray-200 bg-gray-100 text-gray-400";

export default function Pagination({
  currentPage,
  totalPages,
  query,
}: PaginationProps) {
  // มีหน้าเดียว ไม่ต้องแสดง
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
    >
      {currentPage > 1 ? (
        <Link
          href={buildHref(query, currentPage - 1)}
          className={`${baseButton} ${normalStyle}`}
        >
          &larr; ก่อนหน้า
        </Link>
      ) : (
        <span className={`${baseButton} ${disabledStyle}`}>&larr; ก่อนหน้า</span>
      )}

      {pages.map((page) => (
        <Link
          key={page}
          href={buildHref(query, page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={`${baseButton} ${
            page === currentPage ? activeStyle : normalStyle
          }`}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages ? (
        <Link
          href={buildHref(query, currentPage + 1)}
          className={`${baseButton} ${normalStyle}`}
        >
          ถัดไป &rarr;
        </Link>
      ) : (
        <span className={`${baseButton} ${disabledStyle}`}>ถัดไป &rarr;</span>
      )}
    </nav>
  );
}