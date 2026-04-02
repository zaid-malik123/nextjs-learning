import { prisma } from "@/lib/prisma";
import Link from "next/link";

const Home = async () => {

  const snippets = await prisma.snippets.findMany();

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Snippets</h1>

        <Link href="/snippets/new" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          New
        </Link>
      </div>

      {/* Snippet List */}
      <div className="space-y-4">

        {snippets.map((snippet) => (
           <div key={snippet.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
          <span>{snippet.title}</span>
          <Link href={`/snippets/${snippet.id}`} className="text-blue-600 hover:underline">
            View
          </Link>
        </div>
        ))}

        

      </div>

    </div>
  );
};

export default Home;