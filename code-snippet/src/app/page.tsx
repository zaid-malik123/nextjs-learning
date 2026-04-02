"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Top Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Snippets</h1>

        <button onClick={() => router.push("/snippets/new")} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          New
        </button>
      </div>

      {/* Snippet List */}
      <div className="space-y-4">

        {/* Card 1 */}
        <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
          <span>Add two numbers</span>
          <button onClick={() => router.push("/snippets/1")} className="text-blue-600 hover:underline">View</button>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
          <span>Remove two numbers</span>
          <button className="text-blue-600 hover:underline">View</button>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
          <span>Swap two numbers</span>
          <button className="text-blue-600 hover:underline">View</button>
        </div>

      </div>

    </div>
  );
};

export default Home;