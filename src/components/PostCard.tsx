import Link from "next/link";
import type { Post } from "@/types/blog";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="group grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-line py-6 sm:grid-cols-[3rem_1fr]"
    >
      {/* เลขบทความ = id จริงจาก API */}
      <span className="pt-1.5 text-sm tabular-nums text-muted">
        {String(post.id).padStart(3, "0")}
      </span>

      <div className="min-w-0">
        <h2 className="line-clamp-2 font-serif text-xl leading-7 text-ink first-letter:uppercase group-hover:text-accent">
          {post.title}
        </h2>
        {/* ตัดเหลือ 2 บรรทัด */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
          {post.body}
        </p>
        <span className="mt-3 block text-sm leading-5 text-accent">
          อ่านต่อ
        </span>
      </div>
    </Link>
  );
}
