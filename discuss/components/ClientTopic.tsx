"use client";

import CreateTopic from "@/components/CreateTopic";
import React, { useState } from "react";

const ClientTopic = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-white text-black px-4 py-2 rounded-xl font-semibold hover:bg-zinc-200 transition shadow-md"
      >
        + Create Topic
      </button>

      {open && <CreateTopic open={open} setOpen={setOpen} />}
    </>
  );
};

export default ClientTopic;