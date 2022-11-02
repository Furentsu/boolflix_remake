import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import Card from "./Card";

export default function Row({ title, fetchUrl, isPoster, isLarge }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data?.results);
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="">
      <h2 className="pl-5 text-4xl font-semibold text-white">{title}</h2>

      <div
        className={`layout flex overflow-x-scroll scrollbar-hide ${
          isPoster ? `py-16 mb-4` : `py-8 mb-12`
        }`}
      >
        {movies.map((movie) => {
          return (
            ((isPoster && movie.poster_path) ||
              (!isPoster && movie.backdrop_path)) && (
              <Card
                key={movie.id}
                title={movie.name || movie.title}
                poster={isPoster ? movie.poster_path : movie.backdrop_path}
                isLarge={isLarge}
              />
            )
          );
        })}
      </div>
    </div>
  );
}
// " "
