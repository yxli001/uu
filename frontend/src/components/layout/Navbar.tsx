import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "src/context/UserContext/userContext";
import { logout } from "src/lib/auth";

const Navbar = () => {
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
        {!firebaseUser ? anonymous : loggedIn}
      </div>
    </div>
  );
};

export default Navbar;
