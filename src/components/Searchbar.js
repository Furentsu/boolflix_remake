import React, { useState } from "react";

export default function Searchbar(props) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => setQuery(e.target.value);

  const handleClick = () => {
    const userInput = query;

    props?.onSearch?.(userInput);
  };

  return (
    <div className="flex w-1/2">
      <div className="w-full">
        <div className="relative flex flex-row-reverse items-center">
          <input
            type="text"
            className="block w-full p-3 text-sm text-gray-900 border rounded-full dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-300 dark:text-white focus:outline-0"
            placeholder="Search for title..."
            value={query}
            onChange={handleChange}
            required
          />
          <button
            className="text-white absolute focus:outline-none px-4 py-2"
            onClick={() => handleClick()}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
