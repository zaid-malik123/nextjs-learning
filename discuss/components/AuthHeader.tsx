"use client";

import { handleSignOut } from "@/actions/SignOut";
import { handleSignIn } from "@/actions/Singin";
import { useSession } from "next-auth/react";

const AuthHeader = () => {
  const { data: session, status } = useSession();

  // 🔹 loading state
  if (status === "loading") {
    return (
      <div className="h-10 w-20 bg-zinc-800 animate-pulse rounded-xl"></div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {!session?.user ? (
        <>
          {/* SIGN IN */}
          <form action={handleSignIn}>
            <button className="rounded-2xl border border-white/20 px-5 py-2.5 hover:bg-white hover:text-black transition">
              Sign In
            </button>
          </form>

          {/* SIGN UP */}
          <button className="rounded-2xl bg-white px-5 py-2.5 text-black hover:bg-zinc-200 transition">
            Sign Up
          </button>
        </>
      ) : (
        // 🔹 USER DROPDOWN
        <div className="relative group">
          <img
            src={session.user.image ?? "https://via.placeholder.com/40"}
            alt="user"
            className="h-10 w-10 rounded-full border border-white/20 cursor-pointer"
          />

          {/* DROPDOWN */}
          <div className="absolute right-0 mt-3 w-52 rounded-2xl bg-zinc-900 border border-zinc-700 p-4 shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
            
            <p className="text-sm font-semibold">{session.user.name}</p>
            <p className="text-xs text-zinc-400 mb-3">
              {session.user.email}
            </p>

            <form action={handleSignOut}>
              <button className="w-full rounded-xl bg-white px-4 py-2 text-black text-sm font-medium hover:bg-zinc-200 transition">
                Logout
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthHeader;