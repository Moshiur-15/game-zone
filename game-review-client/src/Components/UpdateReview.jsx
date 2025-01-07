import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function UpdateReview() {
  const data = useLoaderData();
  const {
    _id,
    userName,
    userEmail,
    rating,
    reviewDescription,
    gameTitle,
    cover,
    genre
  } = data;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const genre = form.genre.value;
    const userEmail = form.userEmail.value;
    const cover = form.coverUrl.value;
    const gameTitle = form.gameTitle.value;
    const reviewDescription = form.reviewDescription.value;
    const rating = form.rating.value;
    const update = {
      userName,
      userEmail,
      cover,
      gameTitle,
      reviewDescription,
      rating,
      genre
    };
    fetch(`https://game-review-server-chi.vercel.app/allReview/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "The Update",
            text: "Update successfully!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="max-w-3xl my-10 mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Update Review
      </h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div className="sm:flex gap-2">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Game Cover URL
            </label>
            <input
              defaultValue={cover}
              type="url"
              name="coverUrl"
              placeholder="https://example.com/cover.jpg"
              required
              className="input border-green-600 w-full"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-gray-700"
            >
              Genre
            </label>
            <select
              name="genre"
              defaultValue={genre}
              required
              className="input border-green-600 w-full"
            >
              <option disabled selected>
                Select Genre
              </option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="RPG">RPG</option>
                <option value="arcade">Arcade</option>
                <option value="rating">Rating</option>
                <option value="strategy">Strategy</option>
                <option value="simulation">Simulation</option>
                <option value="fps">Fps</option>
            </select>
          </div>
        </div>

        <div className="sm:flex gap-2">
          <div className="w-full">
            <label
              htmlFor="gameTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Game Title
            </label>
            <input
              defaultValue={gameTitle}
              type="text"
              name="gameTitle"
              placeholder="Enter game title"
              required
              className="input border-green-600 w-full"
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Rating (1-5)
            </label>
            <input
              defaultValue={rating}
              type="number"
              name="rating"
              min="1"
              max="5"
              required
              className="input border-green-600 w-full"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Review Description
          </label>
          <textarea
            defaultValue={reviewDescription}
            name="reviewDescription"
            rows="5"
            placeholder="Write your review here"
            required
            className="textarea border-green-600 w-full"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            type="text"
            name="userName"
            defaultValue={userName}
            readOnly
            className="input border-green-600 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            User Email
          </label>
          <input
            readOnly
            type="email"
            name="userEmail"
            defaultValue={userEmail}
            className="input border-green-600 w-full"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold btn"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}
