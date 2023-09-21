import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="w-full h-screen bg-login-bg bg-cover relative">
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-black bg-opacity-50"></div>
      <Header />
      <div className="w-3/12 absolute top-[25%] left-[38%] ">
        <form className="box-border bg-black px-14 py-10 bg-opacity-80 text-white rounded-xl">
          <h1 className="text-3xl mb-8 font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              className="w-full bg-[#333] focus:outline-none p-3 mb-5 rounded-md"
              placeholder="Name"
            />
          )}
          <input
            type="text"
            className="w-full bg-[#333] focus:outline-none p-3 mb-5 rounded-md"
            placeholder="Enter Email"
          />
          <input
            type="password"
            className="w-full bg-[#333] focus:outline-none p-3 rounded-md mb-7"
            placeholder="Password"
          />
          <button className="w-full bg-[#e50914] p-3 rounded-md mb-5">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-[#737373]">
            {isSignIn ? "New to Netflix?" : "Already a member?"}
            <span
              className="text-white font-normal cursor-pointer"
              onClick={toggleForm}
            >
              {isSignIn ? " Sign up now" : " Sign in now"}
            </span>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
