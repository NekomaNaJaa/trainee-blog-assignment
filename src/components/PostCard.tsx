import Link from "next/link";
import type { Post } from "@/types/blog";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      {/* ชื่อบทความ: จำกัด 2 บรรทัด */}
      <h2 className="line-clamp-2 text-lg font-semibold capitalize text-gray-900">
        {post.title}
      </h2>

      {/* ตัวอย่างเนื้อหา: ตัดทอนเหลือ 3 บรรทัด */}
      <p className="mt-3 line-clamp-3 text-sm text-gray-600">
        {post.body}
      </p>

      {/* ลิงก์ไปหน้ารายละเอียด */}
      <Link
        href={`/posts/${post.id}`}
        className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
      >
        อ่านต่อ &rarr;
      </Link>
    </article>
  );
}