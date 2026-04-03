"use server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const deleteSnippet = async (id: number | undefined) => {
  await prisma.snippets.delete({
    where: {
      id,
    },
  });

  redirect("/");
};

export async function createSnippet(formData: FormData) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  if (!title || !code) {
    return { success: false, message: "title and code are required" };
  }

  try {
    await prisma.snippets.create({
      data: {
        title,
        code,
      },
    });

    return { success: true };
  } catch (error) {
    return { success: false, message: "Database error, try again" };
  }
}
