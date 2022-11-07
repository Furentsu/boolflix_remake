import React from "react";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
