import { handleSignOut } from "@/app/actions/SignOut";
import { handleSignIn } from "@/app/actions/Singin";
import { auth } from "@/auth";

export default async function Header() {
  const session = await auth();

  return (
    <header className="w-full border-b border-zinc-800 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        {/* App Name */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-2xl border border-white/20 bg-white text-black flex items-center justify-center text-xl font-bold shadow-lg">
            D
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Discuss</h1>
            <p className="text-xs text-zinc-400">Talk. Share. Explore.</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search discussions..."
              className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-3 pr-12 text-sm text-white outline-none transition focus:border-white focus:ring-2 focus:ring-white/20"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.04 6.04a7.5 7.5 0 0 0 10.61 10.61Z"
              />
            </svg>
          </div>
        </div>

        {/* Buttons */}
        {/* Buttons / User */}
        <div className="flex items-center gap-3">
          {!session?.user ? (
            <>
              <form action={handleSignIn}>
                <button className="rounded-2xl border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-black">
                  Sign In
                </button>
              </form>

              <button className="rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200">
                Sign Up
              </button>
            </>
          ) : (
            <div className="relative group">
              {/* Profile Image */}
              <img
                src={session.user.image ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaXZJACO1kxvhfwMeJG6nO-7Pt3uk2HnkhA&s"}
                alt="user"
                className="h-10 w-10 rounded-full border border-white/20 cursor-pointer"
              />

              {/* Dropdown */}
              <div className="absolute right-0 mt-3 w-48 rounded-xl border border-zinc-700 bg-zinc-900 p-3 shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                <p className="text-sm font-medium text-white">
                  {session.user.name}
                </p>
                <p className="text-xs text-zinc-400 mb-3">
                  {session.user.email}
                </p>

                <form action={handleSignOut}>
                  <button className="w-full rounded-lg bg-white px-3 py-2 text-sm font-medium text-black hover:bg-zinc-200">
                    Logout
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
