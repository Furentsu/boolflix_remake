import React from "react";

export default function Card({ title, poster, isLarge }) {
  const baseURL = `https:/image.tmdb.org/t/p/original/`;

  return (
    <div className="inline-block hover:scale-110 transition duration-300 ease-out hover:ease-in px-3">
      <div className={`${isLarge ? `w-[350px] h-full` : `w-[300px] h-full`}`}>
        <img
          src={baseURL + poster}
          alt={title}
          className="object-fit border border-transparent hover:border hover:border-white hover:rounded-lg"
        />
      </div>
    </div>
  );
}
