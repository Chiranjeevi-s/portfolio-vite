import { useRoutes } from "react-router-dom";
import DefaultView from "./components/default-view";
import LandingPage from "./pages/landing-page";

const Router: React.FC = () => {
  const pages = [
    {
      element: <DefaultView />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
      ],
    },
  ];
  const element = useRoutes(pages);
  return <>{element}</>;
};

export default Router;
