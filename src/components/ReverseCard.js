import React from "react";
import truncate from "../utils/utilities";

export default function ReverseCard({ title, poster, vote, overview }) {
  const baseURL = `https:/image.tmdb.org/t/p/original/`;

  return (
    <div className="w-[300px] h-[400px] mx-auto bg-transparent group perspective">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute backface-hidden w-full h-full">
          <img
            src={baseURL + poster}
            alt={title}
            className="object-fit rounded-lg"
          />
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-[450px] bg-white overflow-hidden rounded-lg">
          <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="my-2">{vote}/10</p>
            <p>{truncate(overview, 250)}</p>
            <button className="bg-black hover:bg-white border border-transparent hover:border hover:border-black px-6 py-2 font-semibold text-white hover:text-black rounded-full absolute bottom-0 duration-500 group-hover:bottom-10 scale-0 group-hover:scale-100">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
