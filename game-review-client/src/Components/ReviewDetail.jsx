import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
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
  return (
    <div>
      <div className="bg-gray-200 py-10 px-3 rounded-md shadow-lg">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-6">
          Review Details
        </h2>
        <div>
          <div key={_id} className="max-w-2xl mx-auto">
            <div className="rounded-lg overflow-hidden bg-white shadow-md">
              <div className="relative">
                <img
                  src={cover}
                  alt="Game cover"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {gameTitle}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                   <span className="font-bold">Genre:</span>{genre}
                </p>
                <p className="text-gray-600 text-sm">
                  
                  <span className="font-bold">Published Year:</span>{publishingYear}
                </p>
                <p className="mt-2">
                   <span className="font-bold">Rating:</span>({rating})
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  
                  <span className="text-gray-700 font-bold">Review Details:</span>{reviewDescription}
                </p>
              </div>
              <div className="px-6 border-t border-gray-200 mt-4">
                <p className="text-sm text-gray-600 font-semibold">
                  Reviewer:{" "}
                  <span className="font-bold">{user?.displayName}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Email:{" "}
                  <span className="text-green-600 hover:underline">
                    {user?.email}
                  </span>
                </p>
              </div>
              <div className="px-5 mb-6 mt-2">
                <button
                  className="text-white bg-green-500 hover:bg-green-700 w-full py-2 px-4 rounded-lg  transition duration-300 ease-in-out"
                  onClick={() => handleWishlist(dataWish)}
                >
                  Add To Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
