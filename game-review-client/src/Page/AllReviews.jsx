import React, { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AllReviews() {
  const [review, setReview] = useState([]);
  const [sortGenre, setSortGenre] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filterReview, setFilterReview] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://game-review-server-chi.vercel.app/allReview")
      .then((response) => response.json())
      .then((data) => {
        setReview(data);
        setFilterReview(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filterReview = [...review];
    if (sortOption === "rating-dec") {
      filterReview.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "year-dec") {
      filterReview.sort((a, b) => b.publishingYear - a.publishingYear);
    }

    if (sortGenre) {
      filterReview = filterReview.filter(
        (review) => review.genre === sortGenre
      );
    }
    setFilterReview(filterReview);
  }, [review, sortOption, sortGenre]);

  return (
    <div className="dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      {loading ? (
        <div className="flex justify-center items-center py-32 md:py-56">
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <section className="pb-20">
          <div className="rounded-md">
            {/* Welcome Section */}
            <div className="bg-blue-100 dark:bg-gray-800 py-10">
              <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2">
                All Reviews
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center max-w-lg mx-auto">
                Discover what people are saying about the most popular games.
                Read honest reviews and share your thoughts too!
              </p>
            </div>

            <div className="pb-5 md:flex justify-center gap-5 mt-8 px-3 md:px-0">
              {/* Sort Options */}
              <select
                className="py-2 px-4 rounded bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 w-full md:w-72 lg:w-96 mb-3 md:mb-0"
                onChange={(e) => setSortOption(e.target.value)}
                value={sortOption}
              >
                <option>Option</option>
                <option value="rating-dec">Rating:Sort By Descending</option>
                <option value="year-dec">Year:Sort By Descending</option>
              </select>

              {/* Filter by Genre */}
              <select
                className="py-2 px-4 rounded bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 w-full md:w-72 lg:w-96"
                onChange={(e) => setSortGenre(e.target.value)}
                value={sortGenre}
              >
                <option value="">All Genre</option>
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

            {/* Review List */}
            {filterReview.length === 0 ? (
              <div>
                <h2 className="text-center text-2xl py-5">
                  No reviews found for the selected genre!
                </h2>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 container mx-auto px-3 xl:px-0">
                {filterReview?.map((item) => (
                  <Link to={`/reviewDetails/${item._id}`} key={item._id}>
                    <div className="rounded-t-lg group bg-white dark:bg-gray-800 dark:border-gray-700 transition-shadow duration-300 border">
                      <div className="overflow-hidden rounded-t-lg">
                        <img
                          src={item.cover}
                          className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-700"
                          alt="image not found"
                        />
                      </div>
                      <div className="px-6 py-4">
                        <div className="flex justify-between items-center">
                          <h2 className="text-xl font-semibold dark:text-gray-100 group-hover:text-blue-500 transition-colors duration-300">
                            {item.gameTitle}
                          </h2>
                          <p className="font-normal dark:text-gray-300 bg-blue-200 dark:bg-blue-900 rounded-full px-4 text-black text-sm">
                            <span>{item.genre}</span>
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                          {item.reviewDescription.slice(0, 100)}...
                        </p>

                        {/* Rating Section */}
                        <div className="flex items-center gap-3 my-2">
                          <div className="flex items-center">
                            <img
                              src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                              alt="Rating Icon"
                              className="w-5 group-hover:scale-110 transition-transform duration-300"
                            />
                            <img
                              src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                              alt="Rating Icon"
                              className="w-5 group-hover:scale-110 transition-transform duration-300"
                            />
                            <img
                              src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                              alt="Rating Icon"
                              className="w-5 group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <p className="group-hover:text-blue-500 transition-colors duration-300">
                            ({item.rating})
                          </p>
                        </div>
                        <button className=" flex items-center w-full justify-center rounded-md bg-blue-500/90 hover:bg-blue-600 py-2 text-gray-200">
                          Read More
                          <FaArrowUpLong className="text-sm transform rotate-45" />
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
