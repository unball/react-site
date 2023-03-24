import { Route, Routes } from "react-router-dom";

import { Home } from "../Home";

const pages = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
//   {
//     path: "",
//     element: "",
//     title: "competitions",
//   },
//   {
//     path: "",
//     element: "",
//     title: "areas",
//   },
//   {
//     path: "",
//     element: "",
//     title: "support",
//   },
//   {
//     path: "",
//     element: "",
//     title: "home",
//   },
//   {
//     path: "",
//     element: "",
//     title: "about",
//   },
];

export function Router() {
  const pageRoutes = pages.map(({path, element, title}) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });
  return <Routes>{pageRoutes}</Routes>;
}