import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Searchbar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleChange = (e) => setQuery(e.target.value);

  const handleClick = () => {
    const userInput = query;

    if (userInput) {
      dispatch({ type: "search/movieSearch", payload: userInput });
      setQuery("");
    }
  };

  return (
    <div className="flex">
      <input
        className="searchbar-input"
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={handleChange}
      />
      <button onClick={() => handleClick()}>Search</button>
    </div>
  );
}
