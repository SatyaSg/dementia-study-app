import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between shadow-md sticky top-0 z-50">
      <Link
        to="/"
        className="text-lg font-bold tracking-tight hover:text-blue-300 transition-colors"
      >
        Dementia Care
      </Link>
      <span className="text-sm text-gray-400 hidden sm:block">
        Healthcare — Certificate
      </span>
    </nav>
  );
}
