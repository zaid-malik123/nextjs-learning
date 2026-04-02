import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

const Create = () => {

  async function createSnippet(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

     await prisma.snippets.create({
      data: {
        title,
        code
      }
    })

  redirect("/")    
  }
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
        
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-6 text-center">
          Create Snippet
        </h1>

        {/* Form */}
        <form action={createSnippet} className="space-y-4">
          
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Title
            </label>
            <input
              name="title"
              type="text"
              placeholder="Enter title..."
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Code Input */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Code
            </label>
            <textarea
              name="code"
              placeholder="Enter your code..."
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Create
          </button>

        </form>
      </div>

    </div>
  );
};

export default Create;