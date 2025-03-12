import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Title from "./sheard/title";
import Card from "./sheard/Card";

export default function HighestRated() {
  const [highestRated, setHighestRated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://game-review-server-chi.vercel.app/allReview")
      .then((response) => response.json())
      .then((data) => {
        const sortData = data.sort((a, b) => b.rating - a.rating).slice(0, 6);
        setHighestRated(sortData);
        setLoading(false);
      });
  }, []);

  return (
    <div className="dark:text-white px-4 md:px-8">
      {loading ? (
        <div className="flex justify-center items-center py-32 md:py-56">
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div>
          <Title title="Highest Rated Games" />
          <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover the top-rated games based on user reviews. These games
            have received the highest ratings and are favorites among gamers.
            Check them out below!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {highestRated.reverse().map((item) => (
              <Card item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
