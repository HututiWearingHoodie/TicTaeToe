import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Start from "./pages/Start";
import Game from "./pages/Game";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "game",
          element: <Start />,
        },
        {
          path: "board",
          element: <Game />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
