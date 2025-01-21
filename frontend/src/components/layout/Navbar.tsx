import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "src/context/UserContext/userContext";
import { logout } from "src/lib/auth";

const Navbar = () => {
  const { firebaseUser } = useContext(UserContext);

  const anonymous = (
    <div className="flex flex-row gap-6 items-center">
      <Link to="/login" className="text-l hover:text-primary">
        Login
      </Link>
    </div>
  );

  const loggedIn = (
    <div className="flex flex-row gap-6 items-center">
      <button className="text-l hover:text-primary" onClick={logout}>
        Logout
      </button>
    </div>
  );

  return (
    <div className="bg-background flex flex-row justify-between shadow-sm shadow-accent-100 px-8 py-5">
      <div className="flex items-center">
        <Link to="/" className="text-3xl font-bold">
          UU
        </Link>
      </div>
      {!firebaseUser ? anonymous : loggedIn}
    </div>
  );
};

export default Navbar;
