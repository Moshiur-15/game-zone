import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import {
  FaRegCalendarAlt,
  FaStar,
  FaUserAlt,
  FaEnvelope,
} from "react-icons/fa";
import Title from "./sheard/title";

export default function ReviewDetail() {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();

  const {
    publishingYear,
    genre,
    gameTitle,
    _id,
    rating,
    reviewDescription,
    cover,
    userName,
    userEmail,
  } = data;
  const dataWish = { genre, gameTitle, publishingYear, rating };

  const handleWishlist = (dataWish) => {
    if (!user) {
      Swal.fire({
        title: "Please Login !",
        icon: "error",
      });
      return null;
    }
    fetch("https://game-review-server-chi.vercel.app/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...dataWish,
        userEmail: user.email,
        userName: user.displayName,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "The Wishlist",
          text: "Added to Wishlist successfully!",
          icon: "success",
        });
      });
  };
  console.log(data);
  return (
    <div className="dark:bg-gray-700/90">
      <div className="py-10 lg:py-20 text-center ">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white"></h2>
        <Title title="Review Details" />
        <p className="pb-8 md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Discover in-depth insights, reviews, and ratings for the latest and
          most popular games. Everything you need to level up your gaming
          experience!
        </p>
      </div>

      <div className="px-5 pt-5 py-10 relative -top-20 mx-auto max-w-4xl">
        <div className="mx-auto space-y-4 dark:bg-gray-800 md:flex gap-14 bg-blue-50">
          <div className="px-5 pt-5 sm:py-5 relative ">
            <img
              src={cover}
              alt="Game cover"
              className="rounded-lg sm:min-w-[300px] h-full w-full rounded-l-lg object-cover border dark:border-none border-blue-100"
            />
            <p className="top-7 left-6 absolute font-normal bg-blue-200 text-black dark:text-gray-300 dark:bg-blue-900 rounded-full px-4 text-sm">
              {genre}
            </p>
          </div>
          <div className="sm:py-8 px-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
              {gameTitle}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs md:text-base mt-2">
              {reviewDescription}
            </p>

            {/* Additional Info */}
            <div className="flex items-center space-x-4 mt-3">
              <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
                <FaRegCalendarAlt className="mr-2 text-gray-500" />
                {publishingYear}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
                <FaStar className="mr-1 text-yellow-500" /> ({rating})
              </p>
            </div>

            {/* Reviewer Info */}
            <div className="mt-4 border-t pt-2 text-xs md:text-base dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 font-semibold flex items-center">
                <FaUserAlt className="mr-2 text-gray-500" />
                <span className="font-bold">{userName || "Anonymous"}</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                <FaEnvelope className="mr-2 text-gray-500" />
                <span className="text-blue-600 hover:underline">
                  {userEmail || "N/A"}
                </span>
              </p>
            </div>

            {/* Wishlist Button */}
            <button
              className="w-full hover:border hover:border-blue-300 bg-blue-500 text-white text-xs md:text-base font-bold transition-all duration-500 hover:bg-white hover:text-black py-2.5 my-4"
              onClick={() => handleWishlist(dataWish)}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
