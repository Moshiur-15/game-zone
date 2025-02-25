import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import register from "../assets/register.png";
import yourBackgroundImageUrl from "../assets/lbg.jpg";
import { ImSpinner2 } from "react-icons/im";

export default function Register() {
  const { createUser, setUser, profile, googleProvider } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const [loading2, setLoading2] = useState(false); // Loading state
  const navigate = useNavigate();
  const location = useLocation();

  // handleGoogleProvider
  const handleGoogleProvider = () => {
    setLoading2(true);
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
      })
      .finally(() => setLoading2(false));
  };

  const handleRegister = (e) => {
    setLoading(true);
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
      })
      .finally(() => setLoading(false)); // Stop loading
  };

  return (
    <div
      className="flex items-center justify-center py-20 min-h-screen w-full bg-slate-100 bg-cover bg-center dark:bg-gray-800"
      style={{ backgroundImage: `url(${yourBackgroundImageUrl})` }}
    >
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg mx-0 md:mx-16 xl:mx-0 dark:bg-gray-900 dark:text-white">
        <section className="md:w-1/2 max-w-2xl">
          <img className="w-full" src={register} alt="Register" />
        </section>
        <section className="md:w-1/2 md:border-l md:pl-5 max-w-3xl p-8">
          <h2 className="text-lg md:text-2xl font-bold mb-4 text-gray-800 text-center dark:text-white">
            Register Your Account
          </h2>
          <form onSubmit={handleRegister}>
            <div>
              <label className="label">
                <span className="label-text dark:text-gray-300">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-600 dark:text-white dark:border-gray-500"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text dark:text-gray-300">PhotoURL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Enter your photo URL"
                required
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-600 dark:text-white dark:border-gray-500"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text dark:text-gray-300">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-600 dark:text-white dark:border-gray-500"
              />
            </div>
            <div className="relative">
              <label className="label">
                <span className="label-text dark:text-gray-300">Password</span>
              </label>
              <input
                name="password"
                type={showPass ? "text" : "password"}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-600 dark:text-white dark:border-gray-500"
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
              className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold shadow transition duration-300"
            >
              {loading ? (
                <ImSpinner2 className="animate-spin text-lg" />
              ) : (
                <CgLogIn className="text-lg" />
              )}
              <span>{loading ? "Singing in..." : "Register"}</span>
            </button>

            <button
              type="button"
              onClick={handleGoogleProvider}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-2 text-blue-500 border border-blue-600 rounded-lg hover:bg-blue-100 dark:text-blue-400 dark:border-blue-500 dark:hover:bg-blue-600 font-semibold shadow transition duration-300 disabled:bg-gray-300"
              disabled={loading}
            >
              {loading2 ? (
                <ImSpinner2 className="animate-spin" />
              ) : (
                <FaGoogle />
              )}
              <span>{loading2 ? "Singing in..." : "Continue with Google"}</span>
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
            have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Login
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
