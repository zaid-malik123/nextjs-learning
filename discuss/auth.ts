import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prismaClient";


if(!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET){
    throw new Error("The secret is missing in the Auth.ts file.")
}

export const {handlers: {GET, POST}} = NextAuth({
  adapter: PrismaAdapter(prisma),  
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async session({user, session}) {

        if(session && user) {
            session.user.id = user.id
        }

        return session;

    }
  }
});
