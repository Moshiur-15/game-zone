import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./Page/Home.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import AllReview from "./Page/AllReviews.jsx";
import AddReview from "./Page/AddReview.jsx";
import WistList from "./Page/Wishlist.jsx";
import { RouterProvider } from "react-router";
import ErrorPage from "./Page/ErrorPage.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import ReviewDetail from "./Components/ReviewDetail.jsx";
import UpdateReview from "./Components/UpdateReview.jsx";
import LatestNews from "./Components/LatestNews.jsx";
import Review from "./Page/Review.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/AllReview",
        element: <AllReview />,
      },
      {
        path: "/latestNews",
        element: <LatestNews />,
      },
      {
        path: "/AddReview",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/reviewDetails/:id",
        element: <ReviewDetail />,
        loader: ({ params }) =>
          fetch(
            `https://game-review-server-chi.vercel.app/allReview/${params.id}`
          ),
      },
      {
        path: "/MyReview",
        element: (
          <PrivateRoute>
            <Review/>
          </PrivateRoute>
        ),
      },
      {
        path: "/UpdateReview/:id",
        element: (
          <PrivateRoute>
            <UpdateReview />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://game-review-server-chi.vercel.app/allReview/${params.id}`
          ),
      },
      {
        path: "/WistList",
        element: (
          <PrivateRoute>
            <WistList />
          </PrivateRoute>
        ),
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
