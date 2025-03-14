import React, { useEffect, useState } from "react";
import Title from "../Components/sheard/title";
import Card from "../Components/sheard/Card";

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
            <div className="py-10">
              <Title title="All Reviews" />
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center max-w-lg mx-auto">
                Discover what people are saying about the most popular games.
                Read honest reviews and share your thoughts too!
              </p>
            </div>

            <div className="pb-5 md:flex justify-center gap-5 mt-8 px-3 md:px-0">
              {/* Sort Options */}
              <select
                className="py-2 px-4 bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 w-full md:w-72 lg:w-96 mb-3 md:mb-0"
                onChange={(e) => setSortOption(e.target.value)}
                value={sortOption}
              >
                <option>Option</option>
                <option value="rating-dec">Rating:Sort By Descending</option>
                <option value="year-dec">Year:Sort By Descending</option>
              </select>

              {/* Filter by Genre */}
              <select
                className="py-2 px-4 bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 w-full md:w-72 lg:w-96"
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 container mx-auto px-3 xl:px-0">
                {filterReview?.map((item) => (
                  <Card item={item} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
