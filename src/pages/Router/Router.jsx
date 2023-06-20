import { Route, Routes } from "react-router-dom";
import { Template } from "../../components/Template";

import { Home } from "../Home";
import { Support } from "../Support";
import { RoadmapTrainee } from "../RoadmapTrainee/RoadmapTrainee";

const pages = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "/support",
    element: <Support />,
    title: "support",
  },
  {
    path: "/roadmaptrainee",
    element: <RoadmapTrainee />,
    title: "roadmap-trainee",
  },
];

export function Router() {
  const pageRoutes = pages.map(({ path, element, title }) => {
    return (
      <Route
        key={title}
        path={`/${path}`}
        element={<Template>{element}</Template>}
      />
    );
  });
  return <Routes>{pageRoutes}</Routes>;
}
