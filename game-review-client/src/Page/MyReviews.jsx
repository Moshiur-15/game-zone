import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineSystemSecurityUpdate } from "react-icons/md";

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
    <div className="container mx-auto min-h-[calc(100vh-320px)] py-10">
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
              <th className="py-2 px-3">Id</th>
              <th className="py-2 px-3">Game Title</th>
              <th className="py-2 px-3">Genre</th>
              <th className="py-2 px-3">Published Year</th>
              <th className="py-2 px-3">Rating</th>
              <th className="py-2 px-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {delateData.map((data, index) => (
              <tr
                key={data._id}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-50 text-center`}
              >
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{data.gameTitle}</td>
                <td className="border px-4 py-2">{data.genre}</td>
                <td className="border px-4 py-2">{data.publishingYear}</td>
                <td className="border px-4 py-2">{data.rating}</td>

                <td className="border px-4 py-2 flex justify-center gap-10  items-center text-center">
                  <Link to={`/UpdateReview/${data._id}`}>
                    <button
                      className="w-4 h-4 rounded-full tooltip tooltip-top"
                      data-tip="Update"
                    >
                      <MdOutlineSystemSecurityUpdate />
                    </button>
                  </Link>
                  <Link>
                    <button
                      onClick={() => handleDelate(data._id)}
                      className="w-4 h-4 rounded-full text-xl tooltip tooltip-top"
                      data-tip="Delate"
                    >
                      <TiDeleteOutline />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
