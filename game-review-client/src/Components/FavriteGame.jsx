import freeFire from "../assets/0001-13528825705_20201124_153005_0000.jpg";
import pubg from "../assets/pubg.jpg";
import coc from "../assets/coc.jpg";
import minecraft from "../assets/images.jpg";
import { FaArrowUpLong } from "react-icons/fa6";
export default function PopularGames() {
  const games = [
    {
      id: 1,
      name: "PUBG",
      description:
        "A thrilling battle royale game where players compete to be the last one standing.",
      image: pubg,
    },
    {
      id: 2,
      name: "Free Fire",
      description:
        "Fast-paced action and dynamic gameplay make Free Fire a fan favorite.",
      image: freeFire,
    },
    {
      id: 3,
      name: "Clash of Clans",
      description:
        "Build and defend your village while conquering others in this top-rated strategy game.",
      image: coc,
    },
    {
      id: 4,
      name: "Minecraft",
      description:
        "Create, explore, and survive in the endlessly imaginative world of Minecraft.",
      image: minecraft,
    },
  ];

  return (
    <div className="pb-8 bg-gray-100 dark:bg-gray-900 my-20">
      <div className="container mx-auto py-12 px-3 md:px-10 text-gray-900 rounded-lg p-4 dark:bg-gray-900 dark:text-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-1 dark:text-white">
          Currently Popular Games
        </h2>
        <p className="text-center mb-8 dark:text-gray-400 text-gray-600">
          Check out some of the hottest games that players are loving right now!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="dark:bg-gray-800 bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden p-4 flex flex-col justify-between"
            >
              <div>
                <div className="w-full h-48 overflow-hidden rounded-md mb-4">
                  <img
                    src={game.image}
                    className="w-full h-full object-cover hover:scale-105 duration-300"
                    alt={game.name}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1.5">{game.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {game.description}
                </p>
              </div>
              <button className="text-blue-500 font-semibold pt-1 self-start flex items-center gap-1 hover:underline">
                Read More{" "}
                <FaArrowUpLong className="text-sm transform rotate-45" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
