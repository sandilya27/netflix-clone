import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const login = () => {
    const result = validateData(email.current.value, password.current.value);

    setError(result);
    if (result) return;

    //signup && signin logic
    if (!isSignIn) {
      //signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229",
          })
            .then(() => {
              const { displayName, email, uid, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              setError(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    } else {
      //signin
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="w-full h-screen bg-login-bg bg-cover relative">
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-black bg-opacity-50"></div>
      <Header />
      <div className="w-3/12 absolute top-[25%] left-[38%] ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="box-border bg-black px-14 py-10 bg-opacity-80 text-white rounded-xl"
        >
          <h1 className="text-3xl mb-8 font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              className="w-full bg-[#333] focus:outline-none p-3 mb-5 rounded-md"
              placeholder="Name"
            />
          )}
          <input
            ref={email}
            type="text"
            className="w-full bg-[#333] focus:outline-none p-3 mb-5 rounded-md"
            placeholder="Enter Email"
          />
          <input
            ref={password}
            type="password"
            className="w-full bg-[#333] focus:outline-none p-3 rounded-md mb-7"
            placeholder="Password"
          />
          {error && <p className="mb-2 text-red-600">*{error}</p>}
          <button
            onClick={login}
            className="w-full bg-[#e50914] p-3 rounded-md mb-5"
          >
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
