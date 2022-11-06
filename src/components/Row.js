import React, { useState, useEffect, useMemo } from "react";
import axios from "../axios/axios";
import Card from "./Card";
import { useSelector } from "react-redux";
import { selectSearch } from "../features/search/searchSlice";

export default function Row({ title, fetchUrl, isPoster, isLarge }) {
  const [movies, setMovies] = useState([]);
  const needle = useSelector(selectSearch);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data?.results);
    }

    fetchData();
  }, [fetchUrl]);

  const filtered = useMemo(() => {
    if (!needle) {
      return movies;
    }
    return movies.filter((movie) => {
      return (
        movie.title?.toLowerCase().includes(needle.toLowerCase()) ||
        movie.name?.toLowerCase().includes(needle.toLowerCase()) ||
        movie.original_title?.toLowerCase().includes(needle.toLowerCase())
      );
    });
  }, [needle, movies]);

  return (
    <div className="">
      <h2 className="pl-5 text-4xl font-semibold text-white">{title}</h2>

      <div
        className={`layout flex overflow-x-scroll scrollbar-hide ${
          isPoster ? `py-16 mb-4` : `py-8 mb-12`
        }`}
      >
        {filtered.map((movie) => {
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

// {needle !== "" &&
// movies.map((filtered) => {
//   console.log(filtered.title);
//   return (
//     ((isPoster && filtered.poster_path) ||
//       (!isPoster && filtered.backdrop_path)) && (
//       <Card
//         key={filtered.id}
//         title={filtered.name || filtered.title}
//         poster={
//           isPoster ? filtered.poster_path : filtered.backdrop_path
//         }
//         isLarge={isLarge}
//       />
//     )
//   );
// })}
