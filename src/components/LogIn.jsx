import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate.jsx";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth} from "../utils/firebase.jsx";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser} from '../utils/userSlice';
import {USER_AVATAR} from '../utils/constant.jsx';
import { BG_LOGIN } from "../utils/constant.jsx";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  //want to store error message so use state variable
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null); // <-- Added ref for name input
  const email = useRef(null); // store ref of field --like input , button etc.
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate  form
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return; //If error message is present then I want to return my code from there.

    //Check Sign In or SignUp Logic
    if (!isSignInForm) {
      //Write logic for sign Up Form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: {USER_AVATAR},
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
           //console.log(user); //object recieves
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "_" + errorMessage);
        });
    } else {
      //Write logic for signIn Form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
           console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "_" + errorMessage);
        });
    }
  };

  return (
    <div className="w-screen h-screen py-20">
      <div className="absolute inset-0 z-0">
        <img
          src= {BG_LOGIN}
          alt="bg-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 flex items-center justify-center h-[calc(100vh-10rem)]">
        <form
          className="bg-black text-white max-w-md bg-black/85 p-8 mx-auto left-0 right-0 focus:outline-none mb-15 "
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-4xl mb-4">
            {isSignInForm ? "SignIn" : "SignUp"}
          </h2>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-4 bg-black/60 border border-gray-600 rounded focus:outline-white placeholder-gray-400"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="w-full p-3 mb-4 bg-black/60 border border-gray-600 rounded focus:outline-white placeholder-gray-400"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="block w-full border border-gray-600 p-3 mb-4 focus:outline-white "
          />
          <p className="text-red-500 text-lg font-bold p-2">{errorMessage}</p>
          <button
            className="w-full p-3 mb-4 bg-red-600 text-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="w-full p-3 mb-1 placeholder-gray-500 text-center">
            OR
          </div>
          <button className="w-full p-3 mb-4 bg-white/50 focus:outline-none">
            Use a sign-in code
          </button>
          <p className="w-full p-2 mb-2 hover:underline cursor-pointer text-center">
            Forgot password?
          </p>
          <div className="">
            <label className="text-lg ">
              <input type="checkbox" className="mr-3" />
              Remember me
            </label>
          </div>
          <p className="mb-4 mt-3 text-lg text-gray-300">
            {isSignInForm ? "New to Netflix?" : "Already Registered..!"}
            <span
              className="text-white hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign Up Now" : "Sign In Now"}
            </span>
          </p>
          <p className="mb-4 mt-3 text-sm text-gray-300">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
          <Link to="" className="cursor-pointer text-blue-600 hover:underline">
            Learn more
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
