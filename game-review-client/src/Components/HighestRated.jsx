import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
  console.log(highestRated);
  return (
    <section className="container mx-auto mb-20">
      <div className="py-5 px-5 rounded-md dark:text-white">
        {loading ? (
          <div className="flex justify-center items-center py-32 md:py-56">
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2 dark:text-white mt-14">
              Highest Rated Games
            </h2>
            <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Discover the top-rated games based on user reviews. These games
              have received the highest ratings and are favorites among gamers.
              Check them out below!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10">
              {highestRated.reverse().map((item) => (
                <div
                  key={item._id}
                  className="group"
                >
                  <div className="bg-white overflow-hidden dark:bg-gray-800 shadow-lg rounded-lg">
                    <div className="overflow-hidden">
                      <img
                        src={item.cover}
                        className="w-full h-[200px] object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-t-lg"
                        alt="image not found"
                      />
                    </div>
                    <div className="px-6 py-4">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold dark:text-gray-100 transition-colors duration-300">
                          {item.gameTitle}
                        </h2>
                        <p className="font-normal dark:text-gray-300 bg-blue-200 dark:bg-blue-900 rounded-full px-4 text-black text-sm">
                          <span>{item.genre}</span>
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                        {item.reviewDescription.slice(0, 90)}...
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
                      <Link to={`/reviewDetails/${item._id}`} className=" flex items-center w-full justify-center rounded-md bg-blue-500/90 hover:bg-blue-600 py-2 text-gray-200">
                        Read More
                        <FaArrowUpLong className="text-sm transform rotate-45" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
