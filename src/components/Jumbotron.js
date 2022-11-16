import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import requests from "../axios/requests";
import truncate from "../utils/utilities";

export default function Jumbotron() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(requests.fetchTrending);
      setMovie(
        res.data?.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );

      return res;
    }

    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
      className="layout h-[100vh] pt-20 sm:pt-96 bg-cover bg-center bg-no-repeat relative mb-24"
    >
      <div className="max-w-100vw flex flex-col items-start sm:justify-center pt-10 md:max-w-[70%] lg:max-w-[60%] xl:max-w-[45%] 2xl:max-w-[40%] z-10 relative">
        <h1 className="text-white text-3xl sm:text-5xl pb-10 font-bold">
          {movie?.name || movie?.title}
        </h1>
        <p className="text-white text-lg pb-10">
          {truncate(movie?.overview, 300)}
        </p>
        <div className="w-full flex flex-col md:flex-row items-start">
          <button className="btn-white mb-4 md:mb-0 w-[75%] sm:w-[50%] md:w-[25%]">
            Play
          </button>
          <button className="btn-dark w-[75%] sm:w-[50%] md:w-[25%] md:ml-3">
            Other info
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundImage:
            "linear-gradient(180deg,transparent, rgba(37,37,37,0.61), #000)",
        }}
        className="h-full top-0 left-0 w-full absolute "
      ></div>
    </div>
  );
}
