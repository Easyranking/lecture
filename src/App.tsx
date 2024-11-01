import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainrouter";

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRouter} />
    </div>
  );
};

export default App;
