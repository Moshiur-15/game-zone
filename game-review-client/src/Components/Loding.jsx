import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-row justify-center min-h-[calc(100vh-250px)]">
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
}
