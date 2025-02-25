import { useContext, useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import UseNavLink from "./useNavlink";
import logo from "../assets/logo.jpg";

export default function NavBer() {
  const { user, logOut, handleToggle, dark } = useContext(AuthContext);
  const [isDark, setIsDark] = useState(dark);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsDark(dark);
  }, [dark]);

  const link = (
    <div className="flex items-center flex-col lg:flex-row dark:text-white  gap-5">
      <UseNavLink title="Home" to="/" />
      <UseNavLink title="All Review" to="/AllReview" />
      <UseNavLink title="Latest News" to="/latestNews" />
      {user && (
        <>
          <UseNavLink title="Add Review" to="/AddReview" />
          <UseNavLink title="My Review" to="/MyReview" />
          <UseNavLink title="WistList" to="/WistList" />
        </>
      )}
    </div>
  );
  return (
    <div className="relative py-1">
      {/* Main Content */}
      <div className="navbar container mx-auto text-black dark:text-white ">
        <div className="navbar-start">
          <div className="dropdown dropdown-open lg:hidden">
            {/* Dropdown button */}
            <div
              tabIndex={0}
              role="button"
              className="px-3 py-2 bg-blue-500 text-white rounded-md"
              onClick={toggleDropdown}
            >
              {isOpen ? (
                <IoMdClose className="md:text-2xl" />
              ) : (
                <BiMenuAltLeft className="md:text-2xl" />
              )}
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className="w-40 md:w-56 dropdown-content menu px-4 py-10 dark:bg-gray-800 bg-blue-100 rounded-md shadow-2xl"
              >
                {link}
              </ul>
            )}
          </div>
          <div className="flex gap-2 items-center">
            <img
              className="hidden lg:block h-10 w-10 rounded-full"
              src={logo}
              alt=""
            />
            <h2 className="btn btn-ghost text-lg md:text-2xl font-bold px-2 lg:px-0 text-black dark:text-white">
              GameZone
            </h2>
          </div>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-3">{link}</ul>
          </div>

          {/* Login/Logout Buttons */}
          <div className="mr-2">
            {user ? (
              <button
                onClick={logOut}
                className="w-max text-black dark:text-white text-xs md:text-base ml-2"
              >
                Log out
              </button>
            ) : (
              ""
            )}
          </div>

          {/* dark mode */}
          <div className="flex items-center mr-3">
            <label className="swap swap-rotate">
              <input
                onChange={() => {
                  handleToggle();
                  setIsDark(!isDark);
                }}
                type="checkbox"
                checked={isDark}
              />
              {isDark ? (
                <FaSun className="text-yellow-400 w-6 h-6" />
              ) : (
                <FaMoon className="text-gray-800 w-6 h-6" />
              )}
            </label>
          </div>

          <div>
            {user ? (
              ""
            ) : (
              <div className="flex md:flex-row md:gap-3 gap-0 items-center text-sm">
                <Link to="/register">
                  <button className="px-3 md:px-6 py-2 bg-blue-500 text-white rounded-md text-xs md:text-base">
                    Register
                  </button>
                </Link>
                <Link to="/login">
                  <button className="ml-1 px-3 md:px-6 py-2 bg-blue-500 text-white rounded-md text-xs md:text-base">
                    Login
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* User Avatar */}
          <div>
            {user && (
              <div className="flex justify-center items-center ml-2">
                <img
                  className="max-w-[40px] max-h-[40px] border-2 border-blue-600 rounded-full"
                  src={user.photoURL}
                  alt={user.displayName}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
