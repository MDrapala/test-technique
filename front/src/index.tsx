import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./assets/styles/index.css";
import React from "react";
import App from "./pages/App";
import MovieDetails from "./pages/MovieDetails";
import ErrorPage from "./pages/error";
import Favorites from "./pages/Favorites";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const RouterApp = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetails />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={RouterApp} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
