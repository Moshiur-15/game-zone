import { useContext, useEffect, useState } from "react";
import { FaSun, FaMoon, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { BiSolidLogIn } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import UseNavLink from "./useNavlink";
import logo from "../assets/logo-2.png";
import logo2 from "../assets/logo.png";
import { PiEyesFill } from "react-icons/pi";
import { TbNews } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import { FaPlusCircle } from "react-icons/fa"; // Add Review Icon
import { FaRegListAlt } from "react-icons/fa"; // My Review Icon
import { FaHeart } from "react-icons/fa";

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
      <UseNavLink title="Home" to="/" icon={<FaHome />} />
      <UseNavLink title="All Review" to="/AllReview" icon={<PiEyesFill />} />
      <UseNavLink title="Latest News" to="/latestNews" icon={<TbNews />} />
      {user && (
        <>
          <div className="flex items-center">
            <FaPlusCircle className="text-blue-500" />
            <UseNavLink title="Add Review" to="/AddReview" />
          </div>
          <div className="flex items-center">
            <FaRegListAlt className="text-green-500" />
            <UseNavLink title="My Review" to="/MyReview" />
          </div>
          <div className="flex items-center">
            <FaHeart className="text-red-500" />
            <UseNavLink title="WistList" to="/WistList" />
          </div>
        </>
      )}
    </div>
  );
  return (
    <div className="relative py-1">
      {/* Main Content */}
      <div className="navbar container mx-auto text-black dark:text-white ">
        <div className="navbar-start">
          <>
            {dark ? (
              <img className="h-11 rounded-full" src={logo2} alt="" />
            ) : (
              <img className="h-10 rounded-full" src={logo} alt="" />
            )}
          </>
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
                className="w-max text-black dark:text-white text-base ml-2 hover:scale-105 duration-700 font-semibold flex items-center"
              >
                <BiSolidLogIn />
                Log out
              </button>
            ) : (
              ""
            )}
          </div>

          {/* dark mode */}
          <div className={`flex items-center ${user ? "" : "mr-2"}`}>
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
              <div>
                <Link to="/login">
                  <button className="px-3 w-max sm:px-6 py-2 hover:border hover:border-blue-300 bg-blue-500 text-white text-xs md:text-base font-bold transition-all duration-500 hover:bg-white hover:text-black">
                    Join Now
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

          <div className="dropdown dropdown-bottom dropdown-end lg:hidden ml-2 relative">
            {/* Dropdown button */}
            <div
              tabIndex={0}
              role="button"
              className="text-black dark:text-white rounded-md"
              onClick={toggleDropdown}
            >
              {isOpen ? (
                <IoMdClose className="text-3xl md:text-4xl" />
              ) : (
                <AiOutlineMenu className="text-3xl md:text-4xl" />
              )}
            </div>

            {/* Modal */}
            {isOpen && (
              <ul
                tabIndex={0}
                className="w-40 md:w-56 dropdown-content menu px-4 py-10 dark:bg-gray-800 bg-blue-100 rounded-md shadow-2xl left-0 absolute top-full transform -translate-x-full"
              >
                {link}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
