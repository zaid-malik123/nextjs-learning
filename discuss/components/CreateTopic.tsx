import { createTopic } from "@/actions/create-topic";
import React from "react";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateTopic = ({ open, setOpen }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      {/* MODAL BOX */}
      <div className="bg-zinc-900 text-white rounded-2xl w-full max-w-md p-6 border border-zinc-700 shadow-xl">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Create Topic</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-zinc-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* FORM */}
        <form action={createTopic} className="flex flex-col gap-4">
          {/* NAME */}
          <input
            name="name"
            type="text"
            placeholder="Topic Name"
            className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-2 outline-none focus:border-white"
          />

          {/* DESCRIPTION */}
          <textarea
            name="description"
            placeholder="Description..."
            rows={4}
            className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-2 outline-none focus:border-white resize-none"
          />

          {/* BUTTONS */}
          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white hover:text-black transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTopic;
