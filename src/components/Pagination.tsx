import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  query: string;
}

function buildHref(query: string, page: number): string {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `/posts?${qs}` : "/posts";
}

const item = "flex h-9 min-w-9 items-center justify-center rounded-md px-3 text-sm";
const normal = "text-muted hover:text-ink";
const current = "bg-accent font-medium text-canvas";
const disabled = "text-line";

export default function Pagination({
  currentPage,
  totalPages,
  query,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex flex-wrap items-center justify-center gap-1"
    >
      {currentPage > 1 ? (
        <Link href={buildHref(query, currentPage - 1)} className={`${item} ${normal}`}>
          ก่อนหน้า
        </Link>
      ) : (
        <span className={`${item} ${disabled}`}>ก่อนหน้า</span>
      )}

      {pages.map((page) => (
        <Link
          key={page}
          href={buildHref(query, page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={`${item} ${page === currentPage ? current : normal}`}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages ? (
        <Link href={buildHref(query, currentPage + 1)} className={`${item} ${normal}`}>
          ถัดไป
        </Link>
      ) : (
        <span className={`${item} ${disabled}`}>ถัดไป</span>
      )}
    </nav>
  );
}