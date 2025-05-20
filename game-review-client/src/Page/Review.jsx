import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineSystemSecurityUpdate } from "react-icons/md";
import Title from "../Components/sheard/title";

export default function Review() {
  const { user } = useContext(AuthContext);
  const [deleteData, setDeleteData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setDeleteData([]);
      setLoading(true);
      fetch(`https://game-review-server-chi.vercel.app/allReview?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setDeleteData(data);
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
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-md"></span>
      </div>
    );
  }

  const handleDelete = (id) => {
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
              Swal.fire("Deleted!", "Your review has been deleted.", "success");
              const remaining = deleteData.filter((data) => data._id !== id);
              setDeleteData(remaining);
            }
          });
      }
    });
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 min-h-[calc(100vh-300px)] transition-colors duration-300">
      <div className="container mx-auto py-10">
        {/* Title and Description */}
        <div className="text-center mb-8">
          <Title title="🌟 My Reviews" />
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-2 transition-colors duration-300 max-w-4xl mx-auto">
            Here are your saved game reviews. You can update or delete them
            anytime! Keep your list up to date.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white dark:bg-gray-800 shadow-md rounded-lg transition-colors duration-300">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white uppercase text-sm">
                <th className="py-3 px-4">ID</th>
                <th className="py-3 px-4">Game Title</th>
                <th className="py-3 px-4">Genre</th>
                <th className="py-3 px-4">Published Year</th>
                <th className="py-3 px-4">Rating</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {deleteData.map((data, index) => (
                <tr
                  key={data._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-200 dark:bg-gray-700" : "bg-gray-100 dark:bg-gray-800"
                  } hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 text-gray-900 dark:text-white text-center`}
                >
                  <td className=" px-4 py-3">{index + 1}</td>
                  <td className=" px-4 py-3">{data.gameTitle}</td>
                  <td className=" px-4 py-3">{data.genre}</td>
                  <td className=" px-4 py-3">{data.publishingYear}</td>
                  <td className=" px-4 py-3">{data.rating}</td>

                  <td className=" px-4 py-3 flex justify-center gap-6 items-center text-center">
                    <Link to={`/UpdateReview/${data._id}`}>
                      <button
                        className="w-6 h-6 rounded-full tooltip tooltip-top hover:text-blue-500 focus:outline-none transition-colors duration-200"
                        data-tip="Update"
                        tabIndex={0}
                      >
                        <MdOutlineSystemSecurityUpdate size={20} />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="w-6 h-6 rounded-full text-xl tooltip tooltip-top hover:text-red-500 focus:outline-none transition-colors duration-200"
                      data-tip="Delete"
                      tabIndex={0}
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
