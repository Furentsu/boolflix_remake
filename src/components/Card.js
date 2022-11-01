import React from "react";

export default function Card({ title, poster }) {
  const baseURL = `https:/image.tmdb.org/t/p/original/`;

  return (
    <div className="inline-block">
      <div className="w-[350px] h-full overflow-hidden">
        <img src={baseURL + poster} alt={title} className="object-fit" />
      </div>
    </div>
  );
}
