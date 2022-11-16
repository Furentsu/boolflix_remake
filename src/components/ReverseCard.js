import React from "react";
import truncate from "../utils/utilities";

export default function ReverseCard({ title, poster, vote, overview }) {
  const baseURL = `https:/image.tmdb.org/t/p/original/`;

  return (
    <div class="w-[300px] h-[400px] bg-transparent group perspective">
      <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div class="absolute backface-hidden w-full h-full">
          <img
            src={baseURL + poster}
            alt={title}
            className="object-fit rounded-lg"
          />
        </div>
        <div class="absolute my-rotate-y-180 backface-hidden w-full h-[450px] bg-white overflow-hidden rounded-lg">
          <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
            <h1 class="text-3xl font-semibold">{title}</h1>
            <p class="my-2">{vote}/10</p>
            <p>{truncate(overview, 250)}</p>
            <button class="bg-black px-6 py-2 font-semibold text-white rounded-full absolute bottom-0 delay-500 duration-200 group-hover:bottom-10 scale-0 group-hover:scale-100">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <>
  //     <div className="group relative h-full">
  //       <div className="absolute top-0 left-0 w-full h-full">
  //         <img src={baseURL + poster} alt={title} className="object-fit" />
  //       </div>
  //       <div className="absolute top-0 left-0 w-full h-full bg-white invisible group-hover:visible ">
  //         <h3>{title}</h3>
  //       </div>
  //     </div>
  //   </>
  // );
}
