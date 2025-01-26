import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "src/context/UserContext/userContext";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { logout } from "src/lib/auth";
import { useTheme } from "src/hooks/theme";

const Navbar = () => {
  const [theme, toggleTheme] = useTheme();
  const { firebaseUser } = useContext(UserContext);

  const anonymous = (
    <>
      <Link to="/login" className="text-l text-text hover:text-primary">
        Login
      </Link>
    </>
  );

  const loggedIn = (
    <>
      <button className="text-l hover:text-primary" onClick={logout}>
        Logout
      </button>
    </>
  );

  return (
    <div className="bg-background flex flex-row justify-between shadow-sm shadow-accent-200 px-8 py-5">
      <div className="flex items-center">
        <Link
          to="/"
          className="text-3xl text-text font-bold hover:text-primary"
        >
          UU
        </Link>
      </div>
      <div className="flex flex-row gap-6 items-center">
        <button onClick={toggleTheme}>
          {theme === "dark" ? (
            <IoSunnyOutline className="text-3xl text-text" />
          ) : (
            <IoMoonOutline className="text-3xl text-text" />
          )}
        </button>
        {!firebaseUser ? anonymous : loggedIn}
      </div>
    </div>
  );
};

export default Navbar;
