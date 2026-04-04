"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prismaClient";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const postSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
});

type CreateFormStateError = {
  errors: {
    title?: string[];
    description?: string[];
    formError?: string[];
  };
};

export const createPost = async (
  slug: string,
  prevState: CreateFormStateError,
  formData: FormData
): Promise<CreateFormStateError> => {



  const result = postSchema.safeParse({
    title: formData.get("title") as string,
    description: formData.get("description") as string,
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();

  if (!session?.user?.id) {
    return {
      errors: {
        formError: ["You must be logged in"],
      },
    };
  }

  let post: Post;

  try {
    const topic = await prisma.topic.findFirst({
      where: { slug },
    });

    if (!topic) {
      return {
        errors: {
          formError: ["Topic not found"],
        },
      };
    }

     post = await prisma.post.create({
      data: {
        title: result.data.title,
        content: result.data.description,
        userId: session.user.id,
        topicId: topic.id,
      },
    });


    

  } catch (error) {
    return {
      errors: {
        formError: ["Something went wrong"],
      },
    };
  }
    revalidatePath(`/topics/${slug}`);

    redirect(`/topics/${slug}/posts/${post.id}`)
};