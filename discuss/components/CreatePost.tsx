"use client";

import { createPost } from "@/actions/create-post";
import React, { useActionState } from "react";

type Props = {
  slug: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreatePost = ({ slug, open, setOpen }: Props) => {

  const [formState, action] = useActionState(
    createPost.bind(null, slug),
    {
      errors: {
        title: [],
        description: [],
        formError: [],
      },
    }
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 text-white rounded-2xl w-full max-w-md p-6 border border-zinc-700 shadow-xl">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Create Post</h2>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <form action={action} className="flex flex-col gap-4">

          <input
            name="title"
            type="text"
            placeholder="Title"
            className="bg-zinc-800 px-4 py-2 rounded"
          />

          {formState.errors.title?.map((err, i) => (
            <p key={i} className="text-red-500">{err}</p>
          ))}

          <textarea
            name="description"
            placeholder="Description"
            rows={4}
            className="bg-zinc-800 px-4 py-2 rounded"
          />

          {formState.errors.description?.map((err, i) => (
            <p key={i} className="text-red-500">{err}</p>
          ))}

          {formState.errors.formError?.map((err, i) => (
            <p key={i} className="text-red-500 text-center">{err}</p>
          ))}

          <div className="flex justify-end gap-3">
            <button type="button" onClick={() => setOpen(false)}>
              Cancel
            </button>

            <button type="submit" className="bg-white text-black px-4 py-2 rounded">
              Create
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreatePost;