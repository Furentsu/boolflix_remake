import React from "react";
import HomeScreen from "./screens/HomeScreen";
import Movies from "./screens/MoviesScreen";
import TvSeries from "./screens/TvSeriesScreen";
import ErrorPage from "./screens/ErrorPage";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
      errorElement: <ErrorPage />,
    },
    {
      path: "movies",
      element: <Movies />,
      errorElement: <ErrorPage />,
    },
    {
      path: "tv",
      element: <TvSeries />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
