// app/snippets/[id]/page.tsx
import { deleteSnippet } from "@/actions/actions";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

const SingleSnippet = async ({ params }: { params: { id: string } }) => {
  const id = parseInt((await params).id); // ✅ no await here

  // Fetch the snippet
  const snippet = await prisma.snippets.findUnique({
    where: { id },
  });

  if (!snippet) {
    return <div className="text-center mt-10 text-red-500">Snippet not found!</div>;
  }

  const deleteSnippetAction = deleteSnippet.bind(null, id);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl">
        
        {/* Top Section */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">{snippet.title}</h1>

          <div className="flex gap-2">
            {/* Edit Link */}
            <Link
              href={`/snippets/${id}/edit`}
              className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600"
            >
              Edit
            </Link>

            {/* Delete Button using Server Action */}
            <form action={deleteSnippetAction}>
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </form>
          </div>
        </div>

        {/* Code Block */}
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
          <pre>{snippet.code}</pre>
        </div>

      </div>
    </div>
  );
};

export default SingleSnippet;