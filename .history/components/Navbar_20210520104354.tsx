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
        <Link href="/"><div class="flex flex-wrap justify-center">
          <div class="w-6/12 sm:w-4/12 px-4">
            <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" alt="..." class="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
          </div>
        </div>
          <a className="pt-4 font-bold text-white">Wishlist</a>
        </Link>
        <Link href="/SignIn">
          <a className="pt-4 font-bold text-white">SignIn</a>
        </Link>
        <Link href="/Profile">
          {/* <div className="w-6/12 pt-4 sm:w-4/12" >
            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" className="h-auto max-w-full align-middle border-none rounded-full shadow-lg" />
          </div> */}
          <div className="flex flex-wrap justify-center">
            <div className="w-6/12 px-4 sm:w-4/12">
              <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" alt="..." className="h-auto max-w-full align-middle border-none rounded-full shadow-lg" />
            </div>
          </div>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
