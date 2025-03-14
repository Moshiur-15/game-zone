import NR1 from "../assets/NR1.webp";
import NR2 from "../assets/NR2.webp";
import NR3 from "../assets/NR3.webp";
import NR4 from "../assets/NR4.webp";
import NR5 from "../assets/NR5.webp";
import Title from "./sheard/title";

export default function NewRelease() {
  return (
    <div className="px-4 md:px-6 xl:px-0">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-1 dark:text-white">
       
      </h2>
      <Title title="New Releases" />

      {/* Description */}
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
      Discover the latest and most exciting game releases, featuring fresh titles and must-try experiences that are taking the gaming world by storm.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <div className="p-4 bg-gray-200 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 dark:bg-gray-600">
          <img
            src={NR1}
            className="w-full h-full object-cover rounded-md"
            alt="New Release 1"
          />
        </div>
        <div className="p-4 bg-gray-200 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 dark:bg-gray-600">
          <img
            src={NR2}
            className="w-full h-full object-cover rounded-md"
            alt="New Release 2"
          />
        </div>
        <div className="p-4 bg-gray-200 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 dark:bg-gray-600">
          <img
            src={NR3}
            className="w-full h-full object-cover rounded-md"
            alt="New Release 3"
          />
        </div>
        <div className="p-4 bg-gray-200 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 dark:bg-gray-600">
          <img
            src={NR4}
            className="w-full h-full object-cover rounded-md"
            alt="New Release 4"
          />
        </div>
        <div className="p-4 bg-gray-200 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 dark:bg-gray-600">
          <img
            src={NR5}
            className="w-full h-full object-cover rounded-md"
            alt="New Release 5"
          />
        </div>
      </div>
    </div>
  );
}
