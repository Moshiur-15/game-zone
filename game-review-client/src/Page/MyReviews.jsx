import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineSystemSecurityUpdate } from "react-icons/md";
import Title from "../Components/sheard/title";

export default function MyReviews() {
  const { user } = useContext(AuthContext);
  const [delateData, setDelateData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setDelateData([]);
      setLoading(true);
      fetch(
        `https://game-review-server-chi.vercel.app/allReview?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setDelateData(data);
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

  const handleDelate = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://game-review-server-chi.vercel.app/allReview/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = delateData.filter((data) => data._id !== id);
              setDelateData(remaining);
            }
          });
      }
    });
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto py-10">
        {/* Title and Description */}
        <div className="text-center mb-8">
          <Title title="🌟 My Reviews" />
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-2 transition-colors duration-300 max-w-4xl mx-auto">
            Here are your saved game reviews. You can update or delete them
            anytime! Manage your reviews to keep your list up to date. Feel free
            to edit your reviews or remove them if needed.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white dark:bg-gray-800 shadow-md rounded-lg transition-colors duration-300">
            <thead>
              <tr className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white uppercase text-sm">
                <th className="py-3 px-4">ID</th>
                <th className="py-3 px-4">Game Title</th>
                <th className="py-3 px-4">Genre</th>
                <th className="py-3 px-4">Published Year</th>
                <th className="py-3 px-4">Rating</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {delateData.map((data, index) => (
                <tr
                  key={data._id}
                  className={`${
                    index % 2 === 0
                      ? "bg-gray-200 dark:bg-gray-700"
                      : "bg-gray-100 dark:bg-gray-800"
                  } hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 text-gray-900 dark:text-white text-center`}
                >
                  <td className="border px-4 py-3">{index + 1}</td>
                  <td className="border px-4 py-3">{data.gameTitle}</td>
                  <td className="border px-4 py-3">{data.genre}</td>
                  <td className="border px-4 py-3">{data.publishingYear}</td>
                  <td className="border px-4 py-3">{data.rating}</td>

                  <td className="border px-4 py-3 flex justify-center gap-6 items-center text-center">
                    <Link to={`/UpdateReview/${data._id}`}>
                      <button
                        className="w-6 h-6 rounded-full tooltip tooltip-top hover:text-blue-500 transition-colors duration-200"
                        data-tip="Update"
                      >
                        <MdOutlineSystemSecurityUpdate size={20} />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelate(data._id)}
                      className="w-6 h-6 rounded-full text-xl tooltip tooltip-top hover:text-red-500 transition-colors duration-200"
                      data-tip="Delete"
                    >
                      <TiDeleteOutline size={20} />
                    </button>
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
