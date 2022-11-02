import React from "react";

export default function Card({ title, poster }) {
  const baseURL = `https:/image.tmdb.org/t/p/original/`;

  return (
    <div className="inline-block hover:scale-110 transition duration-300 ease-out hover:ease-in">
      <div className="w-[350px] overflow-hidden">
        <img
          src={baseURL + poster}
          alt={title}
          className="object-fit hover:border-2 hover:border-white hover:rounded-lg"
        />
      </div>
    </div>
  );
}
