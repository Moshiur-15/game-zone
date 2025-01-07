import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import UseNavLink from "./useNavlink";

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
              className="px-4 py-2 bg-blue-500 text-white rounded-full"
              onClick={toggleDropdown}
            >
              {isOpen ? (
                <IoMdClose className="text-2xl " />
              ) : (
                <BiMenuAltLeft className="text-2xl" />
              )}
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className="w-40 md:w-56 dropdown-content menu px-4 py-10 dark:bg-gray-800 bg-blue-100 rounded-md shadow-2xl"
              >
                {link}
                <h2 className="text-center mt-3"><UseNavLink title="Contact" to="/contact" /></h2>
              </ul>
            )}
          </div>
          <a className="btn btn-ghost text-[14px] md:text-2xl font-bold px-2 lg:px-0 text-black dark:text-white">
            GameZone
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end gap-1">
          <div className="md:mr-4 flex items-center">
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
                <img
                  src="https://img.icons8.com/?size=100&id=nNtT9r4dDsaU&format=png&color=000000"
                  alt="Dark Mode Icon"
                  className="w-10"
                />
              ) : (
                <img
                  src="https://img.icons8.com/?size=100&id=648&format=png&color=000000"
                  alt="Light Mode Icon"
                  className="w-10"
                />
              )}
            </label>
          </div>
          {/* User Avatar */}
          <div>
            {user && (
              <div
                className="flex justify-center items-center"
                data-tooltip-id="user-tooltip"
                data-tooltip-content={`${user.displayName}`}
              >
                <img
                  className="md:max-h-[50px] md:max-w-[50px] max-h-[35px] max-w-[35px] border-2 border-blue-600 rounded-full"
                  src={user.photoURL}
                  alt={user.displayName}
                />
              </div>
            )}
            <Tooltip id="user-tooltip" className="z-50" />
          </div>
          {/* Login/Logout Buttons */}
          <div>
            {user ? (
              <button
                onClick={logOut}
                className="px-6 py-2 bg-blue-500 text-white rounded-full"
              >
                Log out
              </button>
            ) : (
              <div className="flex md:flex-row md:gap-3 gap-0 items-center text-sm">
                <Link to="/register">
                  <button className="px-6 py-2 bg-blue-500 text-white rounded-full">
                    Register
                  </button>
                </Link>
                <Link to="/login">
                  <button className="px-6 py-2 bg-blue-500 text-white rounded-full">
                    Login
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
