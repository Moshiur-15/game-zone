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
    <section className="dark:bg-slate-900 py-10">
      <div className="max-w-3xl mx-auto p-6 bg-gray-200/80 dark:bg-slate-700 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Update Review
      </h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div className="sm:flex gap-2">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Game Cover URL
            </label>
            <input
              defaultValue={cover}
              type="url"
              name="coverUrl"
              placeholder="https://example.com/cover.jpg"
              required
              className="input w-full focus:outline-none dark:bg-slate-800 dark:text-slate-400"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Genre
            </label>
            <select
              name="genre"
              defaultValue={genre}
              required
              className="input w-full focus:outline-none dark:bg-slate-800 dark:text-slate-400"
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
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Game Title
            </label>
            <input
              defaultValue={gameTitle}
              type="text"
              name="gameTitle"
              placeholder="Enter game title"
              required
              className="input w-full focus:outline-none dark:bg-slate-800 dark:text-slate-400"
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Rating (1-5)
            </label>
            <input
              defaultValue={rating}
              type="number"
              name="rating"
              min="1"
              max="5"
              required
              className="input w-full focus:outline-none dark:bg-slate-800 dark:text-slate-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Review Description
          </label>
          <textarea
            defaultValue={reviewDescription}
            name="reviewDescription"
            rows="5"
            placeholder="Write your review here"
            required
            className="textarea w-full focus:outline-none dark:bg-slate-800 dark:text-slate-400"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            User Name
          </label>
          <input
            type="text"
            name="userName"
            defaultValue={userName}
            readOnly
            className="input w-full focus:outline-none dark:bg-slate-800 dark:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            User Email
          </label>
          <input
            readOnly
            type="email"
            name="userEmail"
            defaultValue={userEmail}
            className="input w-full focus:outline-none dark:bg-slate-800 dark:text-slate-400"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full text-white font-semibold btn bg-blue-500 hover:bg-blue-600 border-none"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
    </section>
  );
}
