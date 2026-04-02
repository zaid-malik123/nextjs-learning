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