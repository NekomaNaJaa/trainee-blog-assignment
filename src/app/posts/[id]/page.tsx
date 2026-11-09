import { notFound } from "next/navigation";
import { connection } from "next/server";

import CommentList from "@/components/CommentList";
import PostDetail from "@/components/PostDetail";
import { getComments, getPost, getUser, isNotFound } from "@/lib/api";
import type { Post } from "@/types/blog";

interface PageProps {
  // Next 15+ : params เป็น Promise ต้อง await
  params: Promise<{ id: string }>;
}

export default async function PostDetailPage({ params }: PageProps) {
  await connection();
  const { id } = await params;
  const postId = Number(id);

  // id ไม่ใช่ตัวเลขจำนวนเต็มบวก -> 404
  if (!Number.isInteger(postId) || postId < 1) {
    notFound();
  }

  // call 1: ดึงบทความก่อน เพราะต้องใช้ userId จากผลลัพธ์
  let post: Post;
  try {
    post = await getPost(postId);
  } catch (error) {
    if (isNotFound(error)) notFound();
    throw error; // error อื่นส่งต่อให้ error.tsx
  }

  // call 2 + 3: ผู้เขียนกับคอมเมนต์ไม่พึ่งกัน ดึงพร้อมกัน
  const [author, comments] = await Promise.all([
    getUser(post.userId),
    getComments(postId),
  ]);

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-12">
      <PostDetail post={post} authorName={author.name} />
      <CommentList comments={comments} />
    </main>
  );
}