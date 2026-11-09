import type { Comment } from "@/types/blog";

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <section className="mt-10">
      <h2 className="border-l-4 border-accent pl-3 font-serif text-2xl leading-8 text-accent">
        ความคิดเห็น <span className="text-muted">{comments.length}</span>
      </h2>

      <ul className="mt-4 space-y-3">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="rounded-md border border-line bg-raised p-4"
          >
            <p className="font-medium leading-6 text-ink first-letter:uppercase">
              {comment.name}
            </p>
            <p className="text-sm leading-5 text-muted">{comment.email}</p>
            <p className="mt-2 text-sm leading-6 text-ink/80">{comment.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}