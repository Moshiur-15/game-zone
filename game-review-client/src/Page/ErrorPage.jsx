import { Link, useRouteError } from "react-router-dom";
import error from "../assets/error.avif";

export default function ErrorPage() {
  const err = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-10">
      <img
        src={error}
        alt="Error"
        className="w-[300px] md:w-[400px] mb-6 rounded"
      />
      <h1 className="text-blue-600 font-semibold md:text-3xl text-xl text-center mb-4">
        Oops! {err.statusText || "Something went wrong!"}
      </h1>
      <p className="text-gray-600 text-center mb-6 max-w-md">
        We couldn't find the page you're looking for. Please go back to the
        homepage.
      </p>
      <Link to="/">
        <button className="btn border-2 border-blue-600 bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 py-2 px-6 rounded-lg text-lg">
          Go back
        </button>
      </Link>
    </div>
  );
}
