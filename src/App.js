import { React } from "react";
import Home from "./pages/Home";
import Media from "./pages/Media";
import ErrorPage from "./pages/ErrorPage";
import requests from "./axios/requests";

import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route
              exact
              path="movies"
              element={
                <Media url={requests.fetchPopularMovies} current={"/movies"} />
              }
            />

            <Route
              exact
              path="tv"
              element={
                <Media url={requests.fetchPopularTvSeries} current={"/tv"} />
              }
            />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
