import React, { useEffect, useState } from "react";
import requests from "../axios/requests";
import instance from "../axios/axios";
import ReverseCard from "../components/ReverseCard";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const fetchPopularMovies = async () => {
    try {
      const resMovies = await instance.get(requests.fetchPopularMovies);
      setMovies(resMovies.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => fetchPopularMovies, []);

  return (
    <div className="max-w-screen layout pt-7">
      <h1 className="text-white text-5xl">Discover Movies</h1>

      <div className="w-full py-10">
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-20 overscroll-x-hidden">
          {movies.map((movie, key) => (
            <ReverseCard
              key={key}
              title={movie.title}
              poster={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
