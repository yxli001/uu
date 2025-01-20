import { Link } from "react-router";
import { FaMicrosoft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col p-10 h-full">
      <div className="flex flex-col mx-auto w-[90%] sm:w-[60%] lg:w-[40%] xl:max-w-[28rem] bg-white px-8 py-8 shadow-lg rounded-lg">
        <h1 className="text-3xl text-center font-semibold mb-10">Login</h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-text-100 rounded px-2 py-1"
              placeholder="example@ucsd.edu"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border border-text-100 rounded px-2 py-1"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-center">
            <Link
              to="/login"
              className="text-primary-400 hover:text-primary-500"
            >
              Forgot password?
            </Link>
          </div>
          <button className="bg-primary hover:bg-primary-500 w-full text-white rounded p-2 mt-2">
            Login
          </button>
          <div className="flex justify-center">
            <Link
              to="/login"
              className="text-primary-400 hover:text-primary-500"
            >
              Don't have an account?
            </Link>
          </div>
        </form>

        <p className="w-full text-center border-b border-b-text-100 leading-[0.1em] my-12">
          <span className="bg-white px-3 text-text-400">or</span>
        </p>

        <div className="flex flex-col gap-5 mb-5">
          <button className="relative flex justify-center items-center bg-white hover:bg-background-50 border border-text-100 w-full text-text rounded p-2">
            <FcGoogle className="absolute left-4" size={23} />
            Continue with Google
          </button>
          <button className="relative flex justify-center items-center bg-text-800 hover:bg-text-900 w-full text-white rounded p-2">
            <FaMicrosoft className="absolute left-4" size={20} />
            Continue with Microsoft
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
