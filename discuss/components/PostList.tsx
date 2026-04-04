import { Post } from "@prisma/client";
import React from "react";
import Link from "next/link";

type PostWithData = Post & {
  topic: {
    slug: string;
  };
  _count: {
    comments: number;
  };
  user: {
    name?: string | null;
  };
};

const PostList = ({ posts }: { posts: PostWithData[] }) => {
  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-6">

      {posts.length === 0 && (
        <div className="text-center text-zinc-400 text-lg mt-20">
          🚫 No posts yet. Be the first to create one!
        </div>
      )}

      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/topics/${post.topic.slug}/posts/${post.id}`}
        >
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-5 shadow-md hover:shadow-lg hover:border-white/30 transition cursor-pointer">

            {/* TITLE */}
            <h2 className="text-xl font-semibold text-white mb-2 line-clamp-1">
              {post.title}
            </h2>

            {/* CONTENT */}
            <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
              {post.content}
            </p>

            {/* FOOTER */}
            <div className="flex justify-between items-center text-xs text-zinc-500">

              <div className="flex items-center gap-2">
                <span>👤</span>
                <span>{post.user?.name || "Unknown"}</span>
              </div>

              <div className="flex items-center gap-4">
                <span>💬 {post._count.comments}</span>
                <span>🕒 {new Date(post.createdAt).toLocaleDateString()}</span>
              </div>

            </div>

          </div>
        </Link>
      ))}

    </div>
  );
};

export default PostList;