"use server"
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";


export const deleteSnippet = async (id: number | undefined) => {
  await prisma.snippets.delete({
    where: {
      id,
    },
  });

  redirect("/")

}

export async function createSnippet(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    if(!title || !code) {
      throw new Error("Title and code are required")
    }

     await prisma.snippets.create({
      data: {
        title,
        code
      }
    })

  redirect("/")    
  }