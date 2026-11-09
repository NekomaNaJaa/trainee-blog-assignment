import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/api";

export default async function PostsPage() {
  // ดึงข้อมูลฝั่ง server ก่อน render
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
      <p className="mt-2 text-gray-600">ทั้งหมด {posts.length} บทความ</p>

      {/* Grid responsive: 1 คอลัมน์ มือถือ / 2 แท็บเล็ต / 3 เดสก์ท็อป */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}