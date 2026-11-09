import type { Comment } from "@/types/blog";

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-gray-900">
        ความคิดเห็น ({comments.length})
      </h2>

      <ul className="mt-4 space-y-4">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            <p className="font-medium capitalize text-gray-900">
              {comment.name}
            </p>
            <p className="text-xs text-gray-500">{comment.email}</p>
            <p className="mt-2 whitespace-pre-line text-sm text-gray-700">
              {comment.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}