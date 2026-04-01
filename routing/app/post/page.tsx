import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-full flex items-center justify-between flex-col">
      <h1 className="text-8xl font-bold text-center mt-5">POST PAGE</h1>

      <div className="flex flex-col gap-5">
            <Link href="/post/1" className="text-blue-600 font-bold mt-5 underline">POST 1</Link>
            <Link href="/post/2" className="text-blue-600 font-bold mt-5 underline">POST 2</Link>
            <Link href="/post/3" className="text-blue-600 font-bold mt-5 underline">POST 3</Link>
      </div>
    </div>
  );
};

export default page;
