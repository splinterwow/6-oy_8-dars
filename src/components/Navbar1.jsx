import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfin";
import NavLinks from "./NavLinks";
import { FaSun, FaMoon } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/useGlobal";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

function themeFromLocalStorage() {
  return localStorage.getItem("theme") || themes.winter;
}

function Navbar() {
  const { dispatch, user } = useContext(GlobalContext);
  const [currentTheme, setCurrentTheme] = useState(themeFromLocalStorage());
  const [isDarkMode, setIsDarkMode] = useState(currentTheme === themes.dracula);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const handleMode = () => {
    const newTheme =
      currentTheme === themes.winter ? themes.dracula : themes.winter;
    setCurrentTheme(newTheme);
    setIsDarkMode(newTheme === themes.dracula);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOG_OUT" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-base-300 py-6 mb-10">
      <div className="navbar align-content">
        <div className="navbar-start">
          <Link to="/" className="btn btn-secondary hidden lg:flex">
            MyMarket
          </Link>
          <div className="dropdown lg:hidden btn-secondary">
            <div tabIndex={0} role="button" className="btn m-1">
              MyMarket
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLinks />
        </div>
        <div className="navbar-end flex gap-5 items-center">
          <label className="swap swap-rotate">
            <input type="checkbox" checked={isDarkMode} onChange={handleMode} />
            <FaSun
              className={
                isDarkMode
                  ? "swap-off fill-current w-6 h-6"
                  : "swap-on fill-current w-6 h-6"
              }
            />
            <FaMoon className={ isDarkMode ? "swap-on fill-current w-6 h-6" : "swap-off fill-current w-6 h-6"}/>
          </label>

          {user && <p>{user.displayName}</p>}

          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL} alt="Avatar" />
            </div>
          </div>

          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
