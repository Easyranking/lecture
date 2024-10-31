import { Outlet } from "react-router-dom";
import { Header } from "../static/Header";
import Footer from "../static/Footer";

export const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
