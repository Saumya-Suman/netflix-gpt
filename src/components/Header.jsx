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
    <div className="flex items-center justify-between w-full absolute top-0 left-0 z-50 px-8 py-4 bg-gradient-to-b from-black/80 to-transparent">
      <img
        className="w-40 h-16"
        src={LOGO}
        alt="logo"
      />
      {/* if user is null don't load this page */}
      {user && (
        <div className="flex items-center space-x-4 text-white">
          <button className="font-bold bg-red-600 px-3 py-2 rounded-lg">GPT Search</button>
          <img
            className="w-12 h-12 rounded-md"
            src={user?.photoURL}
            alt="usericon"
          />
          <button className="font-bold bg-red-600 px-3 py-2 rounded-lg" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
