import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-full px-6 py-4 border-b shadow-sm bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          MyApp
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6 text-gray-700 font-medium">

          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>

          <Link href="/post" className="hover:text-blue-600 transition">
            Post
          </Link>

        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">

          <Link
            href="/login"
            className="px-4 py-2 border rounded-md hover:bg-gray-100 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Signup
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Nav;