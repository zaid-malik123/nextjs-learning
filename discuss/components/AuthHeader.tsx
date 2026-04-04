"use client";

import { handleSignOut } from "@/actions/SignOut";
import { handleSignIn } from "@/actions/Singin";
import { useSession } from "next-auth/react";
import React from "react";

const AuthHeader = () => {
  const { data: session } = useSession();

  if(!session?.user) return null

  let authContent: React.ReactNode;

  if (!session?.user) {
    authContent = (
      <>
        <form className="flex items-center gap-4" action={handleSignIn}>
          <button className="rounded-2xl border border-white/20 px-5 py-2.5">
            Sign In
          </button>
        </form>

        <button className="rounded-2xl bg-white px-5 py-2.5 text-black">
          Sign Up
        </button>
      </>
    );
  } else {
    // LOGGED IN
    authContent = (
      <div className="relative group">
        <img
          src={session.user.image ?? "https://via.placeholder.com/40"}
          alt="user"
          className="h-10 w-10 rounded-full"
        />

        <div className="absolute right-0 mt-3 w-48 opacity-0 invisible group-hover:visible group-hover:opacity-100">
          <p className="text-sm font-medium mt-5">{session.user.name}</p>
          <p className="text-sm font-medium mt-2 mb-3">{session.user.email}</p>

          <form action={handleSignOut}>
            <button className="rounded-2xl bg-white px-5 py-2.5 text-black font-medium">Logout</button>
          </form>
        </div>
      </div>
    );
  }

  return <div>{authContent}</div>;
};

export default AuthHeader;