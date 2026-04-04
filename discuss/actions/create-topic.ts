"use server"

import { prisma } from "@/lib/prismaClient";


export const createTopic = async ( formData: FormData ) => {

    const name = formData.get("name") as string;

    const description = formData.get("description") as string;

    console.log(name , "   ", description )
    

}