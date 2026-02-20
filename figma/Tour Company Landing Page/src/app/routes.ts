import { createBrowserRouter } from "react-router";
import Home from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "*",
    Component: Home, // Redirect all to home for this landing page
  },
]);
