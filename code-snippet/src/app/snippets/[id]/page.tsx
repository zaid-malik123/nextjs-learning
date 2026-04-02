import React from "react";

const SingleSnippet = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Swap Two Numbers</h1>

          <div className="flex gap-2">
            <button className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600">
              Edit
            </button>

            <button className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-700">
              Delete
            </button>
          </div>
        </div>

        {/* Code Block */}
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
          {`const swap = (n1, n2) => {
  const temp = n1;
  n1 = n2;
  n2 = temp;
};`}
        </div>
      </div>
    </div>
  );
};

export default SingleSnippet;
