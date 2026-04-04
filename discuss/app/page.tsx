import ClientTopic from "@/components/ClientTopic";
import PostList from "@/components/PostList";
import { fetchTopPosts } from "@/lib/query/post";

const Home = async () => {
  const posts = await fetchTopPosts();

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* HEADER */}
      <div className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">🔥 Dev Forum</h1>

        <ClientTopic />
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT - POSTS */}
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold mb-4 text-zinc-300">
            Latest Posts
          </h2>

          <PostList posts={posts} />
        </div>

        {/* RIGHT - SIDEBAR */}
        <div className="hidden md:block">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 sticky top-6">
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <p className="text-sm text-zinc-400">
              This is a developer community where you can ask questions,
              share knowledge, and learn from others 🚀
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;