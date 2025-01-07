import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl font-bold text-red-500 md:text-5xl mt-10">404</h1>
        <h1 className="text-green-600 font-semibold md:text-2xl text-xl mb-2">{err.statusText}</h1>
        <Link to='/'>
        <button className="btn border-2 border-green-600 bg-white">Go back</button>
        </Link>
    </div>
  );
}

