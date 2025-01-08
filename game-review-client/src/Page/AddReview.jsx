import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddReview = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const Form = e.target;

    const cover = Form.coverUrl.value;
    const gameTitle = Form.gameTitle.value;
    const reviewDescription = Form.reviewDescription.value;
    const rating = Form.rating.value;
    const publishingYear = Form.publishingYear.value;
    const genre = Form.genre.value;
    const userName = Form.userName.value;
    const userEmail = Form.userEmail.value;
    const data = {
      cover,
      gameTitle,
      reviewDescription,
      rating,
      publishingYear,
      genre,
      userName,
      userEmail,
    };

    fetch("https://game-review-server-chi.vercel.app/allReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        Form.reset();
        Swal.fire({
          title: "The Rating",
          text: "Rating added successfully",
          icon: "success",
        });
      });
  };

  return (
    <section className="dark:bg-slate-900 md:py-16">
      <div className="max-w-3xl mx-auto bg-gray-200/80 dark:bg-slate-700 rounded-lg shadow-xl py-8 px-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2 dark:text-white">
          Add New Review
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-4 max-w-lg mx-auto">
          Share your thoughts on the game you're playing! Rate it and tell
          others what you loved or didn’t enjoy about it.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="coverUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Game Cover URL
            </label>
            <input
              type="url"
              name="coverUrl"
              placeholder="https://example.com/cover.jpg"
              required
              className="input w-full focus:outline-none dark:bg-slate-800 dark:text-slate-400"
            />
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
                type="text"
                name="gameTitle"
                placeholder="Enter game title"
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
                required
                className="input w-full focus:outline-none dark:bg-slate-800 dark:text-gray-300"
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
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Rating (1-5)
              </label>
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                required
                className="input w-full focus:outline-none dark:bg-slate-800 dark:text-gray-300"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="publishingYear"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Publishing Year
              </label>
              <select
                name="publishingYear"
                required
                className="input w-full focus:outline-none dark:bg-slate-800 dark:text-gray-300"
              >
                <option disabled selected>
                  Publishing Year
                </option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="reviewDescription"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Review Description
            </label>
            <textarea
              minLength={100}
              name="reviewDescription"
              rows="5"
              placeholder="Write your review here"
              required
              className="textarea w-full focus:outline-none dark:bg-slate-800 dark:text-slate-400"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              User Name
            </label>
            <input
              type="text"
              name="userName"
              defaultValue={user?.displayName}
              readOnly
              className="input w-full focus:outline-none dark:bg-slate-800 dark:text-gray-300"
            />
          </div>

          <div>
            <label
              htmlFor="userEmail"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              User Email
            </label>
            <input
              type="email"
              name="userEmail"
              defaultValue={user?.email}
              readOnly
              className="input w-full focus:outline-none dark:bg-slate-800 dark:text-gray-300"
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
};

export default AddReview;
