import { Outlet } from "react-router";
import Navbar from "src/components/layout/Navbar";
import { UserContextProvider } from "src/context/UserContext/UserContextProvider";

const Layout = () => {
  return (
    <UserContextProvider>
      <div className="w-full h-[100vh] overflow-hidden flex flex-col bg-background">
        <Navbar />
        <div className="w-full h-full">
          <Outlet />
        </div>
      </div>
    </UserContextProvider>
  );
};

export default Layout;
