import React, { useEffect, useState } from "react";
import requests from "../axios/requests";
import instance from "../axios/axios";
import ReverseCard from "../components/ReverseCard";

export default function TvSeries() {
  const [tvSeries, setTvSeries] = useState([]);

  const fetchPopularTvSeries = async () => {
    try {
      const resTvSeries = await instance.get(requests.fetchPopularTvSeries);
      setTvSeries(resTvSeries.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => fetchPopularTvSeries, []);

  return (
    <div className="max-w-screen layout pt-7">
      <h1 className="text-white text-4xl">Discover Tv Series</h1>

      <div className="max-w-full py-20">
        <div className="max-w-full flex flex-col items-center sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-20 overscroll-x-hidden overflow-x-hidden">
          {tvSeries.map((tvSeries, key) => (
            <ReverseCard
              key={key}
              title={tvSeries.title || tvSeries.name}
              poster={tvSeries.poster_path}
              vote={tvSeries.vote_average}
              overview={tvSeries.overview}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
