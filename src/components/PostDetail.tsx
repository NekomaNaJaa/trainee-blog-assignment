import Link from "next/link";
import type { Post } from "@/types/blog";

interface PostDetailProps {
  post: Post;
  authorName: string;
}

export default function PostDetail({ post, authorName }: PostDetailProps) {
  return (
    <>
      <Link
        href="/posts"
        className="inline-block text-sm leading-5 text-muted hover:text-ink"
      >
        กลับไปหน้ารายการ
      </Link>

      <article className="mt-6 rounded-md border border-line bg-raised p-6 sm:p-8">
        {/* แถบอำพัน + title สีอำพัน */}
        <h1 className="border-l-4 border-accent pl-4 font-serif text-3xl leading-10 text-accent first-letter:uppercase">
          {post.title}
        </h1>

        <p className="mt-4 text-sm leading-5 text-muted">
          เขียนโดย <span className="text-ink">{authorName}</span>
        </p>

        {/* ไม่ใช้ whitespace-pre-line: ให้ข้อความไหลต่อเนื่องเป็นย่อหน้า */}
        <p className="mt-6 border-t border-line pt-6 font-serif text-lg leading-8 text-ink/90 first-letter:uppercase">
          {post.body}
        </p>
      </article>
    </>
  );
}