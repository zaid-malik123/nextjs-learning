"use client";

import { useState } from "react";
import CreatePost from "./CreatePost";

const TopicShowClient = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>

      <button
        onClick={() => setOpen(true)}
        className="px-3 py-2 bg-white text-black font-medium rounded-md"
      >
        Create Post
      </button>

      {open && <CreatePost slug={id} open={open} setOpen={setOpen} />}
    </div>
  );
};

export default TopicShowClient;