import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export default function Wishlist() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setData([]);
      fetch(
        `https://game-review-server-chi.vercel.app/Wishlist?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-32 md:py-56">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <section className="py-10 dark:bg-gray-900">
      <div className="container mx-auto min-h-[calc(100vh-320px)] bg-white dark:bg-gray-900  transition-all duration-300 px-4 xl:px-0">
        {/* Page Title & Description */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white uppercase">
          ❤️ Your Wishlist
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-3xl mx-auto text-lg">
            Here are your saved games, carefully selected for you.Easily
            explore, review, and manage your wishlist.Keep track of your
            favorite games anytime, anywhere!
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white uppercase text-sm">
                <th className="py-2 px-3">Game Title</th>
                <th className="py-2 px-3">Genre</th>
                <th className="py-2 px-3">Published Year</th>
                <th className="py-2 px-3">Rating</th>
              </tr>
            </thead>
            <tbody>
              {data.map((game, index) => (
                <tr
                  key={game._id}
                  className={`${
                    index % 2 === 0
                      ? "bg-gray-100 dark:bg-gray-700"
                      : "bg-gray-200 dark:bg-gray-800"
                  } hover:bg-gray-300 dark:hover:bg-gray-600 text-center text-gray-900 dark:text-white transition-all duration-200`}
                >
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    {game.gameTitle || "N/A"}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    {game.genre || "N/A"}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    {game.publishingYear || "N/A"}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    {game.rating || "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
