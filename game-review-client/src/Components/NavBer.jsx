import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import UseNavLink from "./useNavlink";
import logo from "../assets/logo.jpg";

export default function NavBer() {
  const { user, logOut, handleToggle, dark } = useContext(AuthContext);
  const [isDark, setIsDark] = useState(dark);
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false); // For profile dropdown

  useEffect(() => {
    setIsDark(dark);
  }, [dark]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleProfileDropdown = () => setProfileOpen(!profileOpen);

  const link = (
    <div className="flex items-center flex-col lg:flex-row dark:text-white gap-5">
      <UseNavLink title="Home" to="/" />
      <UseNavLink title="All Review" to="/AllReview" />
      <UseNavLink title="Latest News" to="/latestNews" />
      <UseNavLink title="Contact" to="/contact" />
    </div>
  );

  return (
    <div className="relative py-1">
      {/* Main Navbar */}
      <div className="navbar container mx-auto text-black dark:text-white">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:mr-10 xl:mr-0">{link}</ul>
        </div>
        <div className="navbar-end">
          {/* Dark Mode Toggle */}
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
                  src="https://img.icons8.com/?size=100&id=648&format=png&color=000000"
                  alt="Light Mode Icon"
                  className="w-8 bg-white rounded-full"
                />
              ) : (
                <img
                  src="https://img.icons8.com/?size=100&id=nNtT9r4dDsaU&format=png&color=000000"
                  alt="Dark Mode Icon"
                  className="w-8"
                />
              )}
            </label>
          </div>

          {/* User Profile Dropdown */}
          <div className="relative">
            {user ? (
              <div>
                <div
                  className="flex justify-center items-center cursor-pointer"
                  onClick={toggleProfileDropdown}
                  data-tooltip-id="user-tooltip"
                  data-tooltip-content={`${user.displayName}`}
                >
                  <img
                    className="md:max-h-[45px] md:max-w-[45px] max-h-[35px] max-w-[35px] border-2 border-blue-600 rounded-full"
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                </div>
                <Tooltip id="user-tooltip" className="z-50" />

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                    <ul className="py-2">
                      <li>
                        <UseNavLink
                          title="Add Review"
                          to="/AddReview"
                          className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        />
                      </li>
                      <li>
                        <UseNavLink
                          title="My Review"
                          to="/MyReview"
                          className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        />
                      </li>
                      <li>
                        <UseNavLink
                          title="Wishlist"
                          to="/WistList"
                          className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        />
                      </li>
                      <li>
                        <button
                          onClick={logOut}
                          className="block w-full text-left px-6 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
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
        </div>
      </div>
    </div>
  );
}
