import React, { useState } from "react";

export default function Searchbar(props) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => setQuery(e.target.value);

  const handleClick = () => {
    const userInput = query;

    props?.onSearch?.(userInput);
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
