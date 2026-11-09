import Link from "next/link";
import type { Post } from "@/types/blog";

interface PostDetailProps {
  post: Post;
  authorName: string;
}

export default function PostDetail({ post, authorName }: PostDetailProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <Link href="/posts" className="text-sm text-blue-600 hover:text-blue-800">
        &larr; กลับไปหน้ารายการ
      </Link>

      {/* ชื่อบทความ */}
      <h1 className="mt-4 text-3xl font-bold capitalize text-gray-900">
        {post.title}
      </h1>

      {/* ชื่อผู้เขียน */}
      <p className="mt-2 text-sm text-gray-500">
        เขียนโดย <span className="font-medium text-gray-700">{authorName}</span>
      </p>

      {/* เนื้อหาทั้งหมด */}
      <p className="mt-6 whitespace-pre-line leading-relaxed text-gray-700">
        {post.body}
      </p>
    </article>
  );
}