import Link from "next/link";
import { connection } from "next/server";
import Pagination from "@/components/Pagination";
import PostCard from "@/components/PostCard";
import SearchBar from "@/components/SearchBar";
import { getPosts } from "@/lib/api";

const PAGE_SIZE = 9; // 3 คอลัมน์ x 3 แถว

interface PageProps {
  // Next 15+ : searchParams เป็น Promise ต้อง await
  searchParams: Promise<{ q?: string | string[]; page?: string | string[] }>;
}

// ถ้า query ซ้ำ (?q=a&q=b) จะได้ array: เอาตัวแรก
function first(value: string | string[] | undefined): string {
  return (Array.isArray(value) ? value[0] : value) ?? "";
}

export default async function PostsPage({ searchParams }: PageProps) {
  await connection();

  const params = await searchParams;
  const keyword = first(params.q).trim();
  const requestedPage = Number(first(params.page)) || 1;

  const posts = await getPosts();

  // ค้นหา: ชื่อหรือเนื้อหา ไม่สนตัวพิมพ์เล็ก/ใหญ่
  const lower = keyword.toLowerCase();
  const filtered = keyword
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(lower) ||
          p.body.toLowerCase().includes(lower)
      )
    : posts;

  // แบ่งหน้า: จำกัดเลขหน้าให้อยู่ในช่วง 1..totalPages
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(Math.max(requestedPage, 1), totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const visiblePosts = filtered.slice(start, start + PAGE_SIZE);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
      <p className="mt-2 text-gray-600">
        {keyword
          ? `พบ ${filtered.length} บทความ สำหรับ "${keyword}"`
          : `ทั้งหมด ${posts.length} บทความ`}
      </p>

      <SearchBar defaultValue={keyword} />

      {visiblePosts.length === 0 ? (
        // ไม่พบผลลัพธ์
        <div className="mt-16 text-center">
          <p className="text-gray-600">ไม่พบบทความที่ตรงกับคำค้นหา</p>
          <Link
            href="/posts"
            className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            ล้างคำค้นหา
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            query={keyword}
          />
        </>
      )}
    </main>
  );
}