import React, { useEffect, useState, useRef } from "react";
import instance from "../axios/axios";
import ReverseCard from "../components/ReverseCard";
import Navbar from "../components/Navbar";
import { current } from "@reduxjs/toolkit";

export default function Media(props) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const currentUrl = useRef(window.location.pathname);

  useEffect(() => {
    if (currentUrl.current !== props.current) {
      const fetchData = async () => {
        setLoading(true);

        try {
          const response = await instance.get(props.url + `&page=${page}`);
          setData(response.data.results);
          setHasMore(response.data.results.length > 0);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.error(error);
        }
      };

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });

      if (hasMore) {
        fetchData();
      }
    } else {
      const fetchData = async () => {
        setLoading(true);

        try {
          const response = await instance.get(props.url + `&page=${page}`);
          setData([...data, ...response.data.results]);
          setHasMore(response.data.results.length > 0);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.error(error);
        }
      };

      if (hasMore) {
        fetchData();
      }
    }
    currentUrl.current = props.current;
  }, [page, props.current]);

  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  return (
    <>
      <Navbar />
      <div className="max-w-screen layout pt-7">
        <h1 className="text-white text-4xl pt-28">
          {currentUrl.current === "/movies"
            ? "Discover Movies"
            : "Discover Tv Series"}
        </h1>

        <div className="w-full py-20">
          <div className="w-full flex flex-col justify-center items-center self-center sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-20 overscroll-x-hidden">
            {data.map((media, key) => (
              <ReverseCard
                key={key}
                title={media.title}
                poster={media.poster_path}
                vote={media.vote_average}
                overview={media.overview}
              />
            ))}
            {loading && <div>Loading...</div>}
            {!hasMore && <div>You've reached the end!</div>}
          </div>
        </div>
      </div>
    </>
  );
}

// TO DO --> Navbar hamburger menu - Firebase
