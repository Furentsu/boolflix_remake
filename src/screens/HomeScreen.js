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
      <Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
    </div>
  );
}
