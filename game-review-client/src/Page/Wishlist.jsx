import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
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
    <div className="container mx-auto min-h-[calc(100vh-320px)] py-10">
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
              <th className="py-2 px-3">Game Title</th>{" "}
              <th className="py-2 px-3">Genre</th>
              <th className="py-2 px-3">Published Year</th>
              <th className="py-2 px-3">Rating</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr
                key={data._id}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-50 text-center`}
              >
                <td className="border px-4 py-2">{data.gameTitle || "N/A"}</td>
                <td className="border px-4 py-2">{data.genre || "N/A"}</td>
                <td className="border px-4 py-2">
                  {data.publishingYear || "N/A"}
                </td>
                <td className="border px-4 py-2">{data.rating || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
