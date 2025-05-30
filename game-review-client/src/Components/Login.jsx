import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { CgLogIn } from "react-icons/cg";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import login from "../assets/logins.png";
import yourBackgroundImageUrl from "../assets/lbg.jpg";
import { ImSpinner2 } from "react-icons/im"; // Loading Icon

export default function Login() {
  const { loginUser, setUser, googleProvider } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const [loading2, setLoading2] = useState(false); // Loading state
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleProvider = () => {
    setLoading2(true); // Start loading
    googleProvider()
      .then((result) => {
        setUser(result.user);
        navigate(location.state ? location.state : "/");
        Swal.fire({
          title: "Login Successful",
          text: "You have logged in successfully!",
          icon: "success",
        });
      })
      .catch((error) => toast.error(`${error.message}`))
      .finally(() => setLoading2(false)); // Stop loading
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((res) => {
        setUser(res.user);
        navigate(location.state ? location.state : "/");
        Swal.fire({
          title: "Login Successful",
          text: "You have logged in successfully!",
          icon: "success",
        });
      })
      .catch((error) => toast.error(`${error.message}`))
      .finally(() => setLoading(false)); // Stop loading
  };

  return (
    <section
      className="bg-slate-50 dark:bg-gray-800"
      style={{
        backgroundImage: `url(${yourBackgroundImageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-center py-20 container mx-auto min-h-[calc(100vh-300px)]">
        <div className="flex flex-col md:flex-row bg-white dark:bg-gray-900 shadow-lg rounded-lg">
          <section className="md:w-1/2 max-w-2xl">
            <img className="w-full" src={login} alt="" />
          </section>
          {/* form section */}
          <section className="md:w-1/2 md:border-l md:pl-5 max-w-3xl p-8">
            <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-white mb-6">
              Welcome Back
            </h2>
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2"
                >
                  Password
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-[45px] text-gray-500 dark:text-gray-300 hover:text-gray-800"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    required
                    type="checkbox"
                    className="text-blue-500 focus:ring focus:ring-blue-400 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                    Remember Me
                  </span>
                </label>
                <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold shadow transition duration-300 disabled:bg-blue-300"
                disabled={loading}
              >
                {loading ? <ImSpinner2 className="animate-spin text-lg" /> : <CgLogIn className="text-lg" />}
                <span>{loading ? "Logging in..." : "Login"}</span>
              </button>

              {/* Google Login */}
              <button
                type="button"
                onClick={handleGoogleProvider}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-2 text-blue-500 border border-blue-600 rounded-lg hover:bg-blue-100 dark:text-blue-400 dark:border-blue-500 dark:hover:bg-blue-600 font-semibold shadow transition duration-300 disabled:bg-gray-300"
                disabled={loading}
              >
                {loading2 ? <ImSpinner2 className="animate-spin" /> : <FaGoogle />}
                <span>{loading2 ? "Login in..." : "Continue with Google"}</span>
              </button>
            </form>
            {/* Register Link */}
            <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
              Don’t have an account?{" "}
              <Link to="/register" className="text-blue-600 dark:text-blue-400 hover:underline">
                Register
              </Link>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
