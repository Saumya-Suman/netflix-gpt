import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector} from "react-redux";
import {LOGO} from '../utils/constant';
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice.jsx";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch(() => {
        navigate("/error");
      });
  };
   //IMPORTANT
  //This function is like a event listner & whenever page load each time it will check auth & we are doing this to check authentication & setting up our store.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL} = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });

   //Unsubscribe when component unmount --REMOVED 
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex items-center justify-between w-screen relative z-10">
      <img
        className="w-[92] h-20  mx-5"
        src={LOGO}
        alt="logo"
      />
      {/* if user is null don't load this page */}
      {user && (
        <div className="z-10 mx-5 flex ">
          <button className="font-bold text-white bg-red-500 p-2 mr-3">GPT Search</button>
          <img
            className="mx-4 w-12 h-12"
            src={user?.photoURL}
            alt="usericon"
          />
          <button className="" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
