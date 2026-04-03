"use client"
import { createSnippet } from "@/actions/actions";
import { useActionState, useState } from "react";


const Create = () => {


  const [error, setError] = useState < string | null>(null);

  const formData = async (formData: FormData) => {


    const res = await createSnippet(formData)

    if(!res.success) {

      setError(res.message as string)
    }

    else {
      setError(error)
      window.location.href = "/";
    }
  }


  
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
        
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-6 text-center">
          Create Snippet
        </h1>

        {/* Form */}
        <form action={formData} className="space-y-4">
          
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
          <p className="py-3 text-red-500 text-md font-semibold">{error}</p>
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