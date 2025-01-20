import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-background flex flex-row justify-between shadow-sm shadow-accent-100 px-8 py-5">
      <div className="flex items-center">
        <Link to="/" className="text-3xl font-bold">
          UU
        </Link>
      </div>
      <div className="flex flex-row gap-6 items-center">
        <Link to="/login" className="text-l hover:text-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
