import Link from "next/link";
import SearchBar from "./SearchBar";

// TODO FIX THIS | problem in importing the file

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gray-900 h-14 md:justify-around">
      <Link href="/">
        <a className="pt-3 mx-3">
          <span className="px-2 text-2xl font-extrabold bg-yellow-400 rounded ">
            IMDb
          </span>
        </a>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mx-3 mt-4 text-white rounded cursor-pointer hover:bg-gray-700 lg:hidden md:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <div className="justify-around hidden w-11/12 mx-3 align-middle md:flex">
        <SearchBar />
        <Link href="/">
          <a className="pt-4 font-bold text-white">Wishlist</a>
        </Link>
        <Link href="/SignIn">
          <a className="pt-4 font-bold text-white">SignIn</a>
        </Link>
        <Link href="/Profile">
          <a className="pt-4 " >
            <img width="20" height="20" viewbox="0 0 16 16" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
          </a>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
