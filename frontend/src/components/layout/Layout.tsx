import { Outlet } from "react-router";
import Navbar from "src/components/layout/Navbar";

const Layout = () => {
  return (
    <div className="w-full h-[100vh] overflow-hidden flex flex-col bg-background">
      <Navbar />
      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
