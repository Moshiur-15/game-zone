import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
    console.log(item)
  return (
    <div>
      <div key={item._id} className="w-full">
        <div className="bg-blue-50 dark:bg-gray-800 flex flex-col md:flex-row items-center xl:gap-6 p-4 sm:p-0">
          <div className="w-full md:w-1/2">
            <img
              src={item.cover}
              className="w-full h-[220px] md:h-[250px] object-cover"
              alt="Game Cover"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 relative">
            <div className="my-4">
              <div className="flex items-center">
                <span className="p-1 bg-blue-500"></span>
                <p className="text-sm font-semibold dark:text-gray-100 ml-2 uppercase text-gray-600">
                  {item.genre}
                </p>
              </div>
              <h2 className="text-lg md:text-xl font-extrabold uppercase dark:text-gray-100 transition-colors duration-300">
                {item.gameTitle}
              </h2>
            </div>

            <div className="border-b-2 dark:border-gray-400 border-gray-300"></div>

            {/* Rating Section */}
            <div className="py-4">
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300 mb-4">
                {item.reviewDescription.slice(0, 90)}...
              </p>

              <Link
                to={`/reviewDetails/${item._id}`}
                className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white hover:bg-blue-600/80 transition-all w-max group"
              >
                Read More
                <FaArrowUpLong className="text-sm rotate-45 group-hover:-rotate-90 duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
