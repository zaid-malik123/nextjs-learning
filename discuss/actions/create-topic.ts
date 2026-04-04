"use server"

import { auth } from "@/auth";
import { prisma } from "@/lib/prismaClient";
import { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {z} from "zod";

const createTopicSchema = z.object({
    name: z.string().min(3, {message: "name must be 3 char or long"}),
    description: z.string().min(10, "description must be 10 char or long")
})

type createFormStateError = {
    errors: {
        name?: string[],
        description?: string[],
        formError?: string[]
    }
}

export const createTopic = async ( prevState: createFormStateError, formData: FormData ): Promise<createFormStateError> => {


    const result = createTopicSchema.safeParse({
        name: formData.get("name") as string,
        description: formData.get("description") as string

    });

    if(!result.success) {

        return {
            errors: result.error.flatten().fieldErrors
        }

    }

    const session = await auth();

    let topic: Topic

    if(!session || !session.user) {
        return {
            errors: {
                formError: ["You have to login first"]
            }
        }
    }

    try {

         topic = await prisma.topic.create({
            data: {
                slug: result.data.name,
                description: result.data.description
            }
        })
        
    } catch (error) {
        if(error instanceof Error) {
            return {
                errors: {
                    formError: [error.message]
                }
            }
        }

        else {
            return {
                errors: {
                    formError: ["something went wrong"]
                }
            }
        }
    }

    revalidatePath("/");

    redirect(`/topics/${topic.slug}`)
    

}