import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import requests from "../axios/requests";

export default function Jumbotron() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(requests.fetchNetflixOriginals);
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
    <>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        }}
        className="layout-mobile h-[calc(100vh-4rem)] pt-20 sm:pt-40 bg-cover bg-center bg-no-repeat relative"
      >
        <div className="max-w-100vw flex flex-col items-start sm:justify-center pt-10 md:max-w-[80%] lg:max-w-[50%] xl:max-w-[55%] z-10 relative">
          <h1 className="text-white text-3xl pb-10 font-bold">
            {movie?.name || movie?.title}
          </h1>
          <p className="text-white text-lg pb-10">{movie?.overview}</p>
          <div className="w-full flex flex-col md:flex-row items-start">
            <button className="btn-white mb-4 md:mb-0 w-[75%] sm:w-[50%] md:w-[25%]">
              Play
            </button>
            <button className="btn-dark w-[75%] sm:w-[50%] md:w-[25%] md:ml-3">
              Other info
            </button>
          </div>
        </div>

        <div class="h-full top-0 left-0 w-full bg-black absolute opacity-40"></div>
      </div>
    </>
  );
}
