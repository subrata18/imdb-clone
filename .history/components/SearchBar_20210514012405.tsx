import { KeyboardEvent, useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const searchHandler = (event: any) => {
    if (event.keyCode === 13) {
      //console.log(query);
    }
  };

  return (
    <div className="flex justify-between w-9/12 h-8 px-2 m-3 bg-white rounded">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={(event) => searchHandler(event)}
        className="w-full h-8 outline-none"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mt-1 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
