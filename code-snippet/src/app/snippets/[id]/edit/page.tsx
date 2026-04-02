import React from "react";

const EditSnippet = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
        
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-6 text-center">
          Edit Snippet
        </h1>

        {/* Form */}
        <form className="space-y-4">
          
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              defaultValue="Swap Two Numbers"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Code Input */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Code
            </label>
            <textarea
              rows={5}
              defaultValue={`const swap = (n1, n2) => {
  const temp = n1;
  n1 = n2;
  n2 = temp;
};`}
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