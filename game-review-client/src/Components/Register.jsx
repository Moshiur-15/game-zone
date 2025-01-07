import  { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

export default function Register() {
  const { createUser, setUser, profile, googleProvider } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // handleGoogleProvider
  const handleGoogleProvider = () => {
    googleProvider()
      .then((result) => {
        setUser(result.user);
        navigate(location.state ? location.state : "/");
        Swal.fire({
          title: "The Register",
          text: "Register successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        return toast.error(`${error.message}`);
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Password must contain at least one uppercase letter."
      );
    } else if (!/[a-z]/.test(password)) {
      return toast.error(
        "Password must contain at least one lowercase letter."
      );
    } else if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long.");
    }
    createUser(email, password)
      .then((res) => {
        setUser(res.user);
        profile({ displayName: name, photoURL: photo });
        navigate(location.state ? location.state : "/");
        Swal.fire({
          title: "The Register",
          text: "Register successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        return toast.error(`${error.message}`);
      });
  };
  return (
    <div className="flex items-center justify-center py-10 min-h-[calc(100vh-250px)] bg-blue-500">
      <div className="w-full max-w-md p-8 shadow-md hover:shadow-lg rounded-lg bg-white">
        <h2 className="text-lg md:text-2xl font-bold mb-4 text-gray-800 text-center ">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister}>
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">PhotoURl</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo URL"
              required
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div className="relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 bottom-[10px]"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg font-semibold shadow transition duration-300"
          >
            <CgLogIn className="text-lg" />
            <span>Register</span>
          </button>
          <button
            type="button"
            onClick={handleGoogleProvider}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-100 font-semibold shadow transition duration-300"
          >
            <FaGoogle />
            <span>Continue with Google</span>
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
           have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
