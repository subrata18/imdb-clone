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
          <a className="pt-4" >
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprofile&psig=AOvVaw3ZTkN88TGJ8fRgZip3E5Lt&ust=1621565933327000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKigjv6h1_ACFQAAAAAdAAAAABAD" />
          </a>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
