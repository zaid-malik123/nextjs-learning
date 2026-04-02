import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

const EditSnippet = async ({params}: {params: {id: string}}) => {

    const id = parseInt((await params).id);


    const snippet = await prisma.snippets.findUnique({
        where: {
            id,
        },
    });

    const formUpdateSnippet = async (formData: FormData) => {
        "use server";

        const title = formData.get("title") as string;
        const code = formData.get("code") as string;

        await prisma.snippets.update({
            where: {
                id,
            },
            data: {
                title,
                code,
            },
        });

        redirect("/")
    }



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
        
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-6 text-center">
          Edit Snippet
        </h1>

        {/* Form */}
        <form action={formUpdateSnippet} className="space-y-4">
          
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Title
            </label>
            <input
            name="title"
              type="text"
              defaultValue={`${snippet?.title}`}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Code Input */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Code
            </label>
            <textarea
            name="code"
              rows={5}
              defaultValue={`${snippet?.code}`}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Update
          </button>

        </form>
      </div>

    </div>
  );
};

export default EditSnippet;