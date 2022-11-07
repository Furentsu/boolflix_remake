import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import requests from "../axios/requests";
import axios from "../axios/axios";

export default function HomeScreen() {
  const [navbarData, setNavbarData] = useState("");
  const [loading, setLoading] = useState(true);
  const [genreResults, setGenreResults] = useState({
    netflixOriginals: undefined,
    horrors: undefined,
    actions: undefined,
    comedies: undefined,
    documentaries: undefined,
  });

  const onNavbarDataChange = (data) => {
    setNavbarData(data);
  };

  const filterGenres = (movies) => {
    return movies?.filter((movie) => {
      if (!navbarData.query) {
        return true;
      }
      return (
        movie.title?.toLowerCase().includes(navbarData.query?.toLowerCase()) ||
        movie.name?.toLowerCase().includes(navbarData.query?.toLowerCase()) ||
        movie.original_title
          ?.toLowerCase()
          .includes(navbarData.query?.toLowerCase())
      );
    });
  };

  const fetchGenres = async () => {
    try {
      const netflixOriginals = await axios.get(
        requests.fetchNetflixOriginalsMovies
      );
      const horrors = await axios.get(requests.fetchHorrorMovies);
      const actions = await axios.get(requests.fetchActionMovies);
      const comedies = await axios.get(requests.fetchComedyMovies);
      const documentaries = await axios.get(requests.fetchDocumentaries);

      setGenreResults({
        netflixOriginals: filterGenres(netflixOriginals.data.results),
        horrors: filterGenres(horrors.data.results),
        actions: filterGenres(actions.data.results),
        comedies: filterGenres(comedies.data.results),
        documentaries: filterGenres(documentaries.data.results),
      });

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => fetchGenres);

  const rows = [
    {
      title: "NETFLIX ORIGINALS",
      isPoster: true,
      isLarge: true,
      films: genreResults.netflixOriginals,
      needle: navbarData.query,
    },
    {
      title: "Horror",
      isPoster: false,
      isLarge: false,
      films: genreResults.horrors,
      needle: navbarData.query,
    },
    {
      title: "Action",
      isPoster: false,
      isLarge: false,
      films: genreResults.actions,
      needle: navbarData.query,
    },
    {
      title: "Comedy",
      isPoster: false,
      isLarge: false,
      films: genreResults.comedies,
      needle: navbarData.query,
    },
    {
      title: "Documentaries",
      isPoster: false,
      isLarge: false,
      films: genreResults.documentaries,
      needle: navbarData.query,
    },
  ];

  return loading ? null : (
    <div>
      <Navbar onDataChange={onNavbarDataChange} />
      <Jumbotron />
      {rows
        .filter((f) => f.films.length > 0)
        .map((row, key) => (
          <Row key={key} {...row} />
        ))}
    </div>
  );
}
