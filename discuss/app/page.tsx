"use client";

import CreateTopic from "@/components/CreateTopic";
import React, { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      <button
        onClick={() => setOpen(true)}
        className="px-5 py-2 bg-white text-black rounded-xl font-semibold hover:bg-zinc-200 transition"
      >
        Create Topic
      </button>

      {/* MODAL */}
      {open && (

        <CreateTopic open={open} setOpen={setOpen} />
        
      )}
    </div>
  );
};

export default Home;