import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import Card from "./Card";

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data?.results);
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="layout">
      <h2 className="layout text-5xl text-white pt-16 pb-4">{title}</h2>

      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex flex-nowrap"></div>
        {movies.map((movie) => {
          return (
            <Card
              key={movie.id}
              title={movie.name || movie.title}
              poster={movie.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
}
