import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Start from "./pages/Start";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
