import React from "react";

export default function ReverseCard({ title, poster }) {
  const baseURL = `https:/image.tmdb.org/t/p/original/`;

  return (
    <div className="">
      <div className="">
        <img src={baseURL + poster} alt={title} className="object-fit" />
      </div>
    </div>
  );
}
