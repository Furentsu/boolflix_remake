import React, { useState } from "react";

function Searchbar() {
  const [needle, setNeedle] = useState("");

  return (
    <input
      className="searchbar-input"
      type="text"
      placeholder="Search movie..."
      onChange={(e) => setNeedle(e.target.value)}
      value={needle}
    />
  );
}

export default Searchbar;
