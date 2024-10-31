import { createBrowserRouter } from "react-router-dom";

import { Card } from "../pages/card";
import Layout from "../layout/layout";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Card /> }],
  },
]);
