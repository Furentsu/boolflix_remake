import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import requests from "../axios/requests";

export default function HomeScreen() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginalsMovies}
        isPoster={true}
        isLarge={true}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isPoster={false}
        isLarge={false}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isPoster={false}
        isLarge={false}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isPoster={false}
        isLarge={false}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isPoster={false}
        isLarge={false}
      />
    </div>
  );
}
