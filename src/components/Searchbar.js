import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { store } from "../app/store";
// import movieSearch from "../features/search/searchSlice";
// import selectSearch from "../features/search/searchSlice";

export default function Searchbar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  // function handleClick() {
  //   console.log(query);
  //   dispatch(movieSearch({ type: "search/movieSearch" }, query));
  // }
  const handleChange = (e) => setQuery(e.target.value);

  const handleClick = () => {
    const userInput = query;

    if (userInput) {
      dispatch({ type: "search/movieSearch", payload: userInput });
      // And clear out the text input
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
