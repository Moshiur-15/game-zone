import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { CgLogIn } from "react-icons/cg";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

export default function Login() {
  const { loginUser, setUser, googleProvider } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleProvider = () => {
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
      .catch((error) => toast.error(`${error.message}`));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
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
      .catch((error) => toast.error(`${error.message}`));
  };

  return (
    <div className="flex items-center justify-center py-10 bg-blue-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-[45px] text-gray-500 hover:text-gray-800"
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
              <span className="ml-2 text-sm text-gray-600">Remember Me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg font-semibold shadow transition duration-300"
          >
            <CgLogIn className="text-lg" />
            <span>Login</span>
          </button>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleProvider}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-100 font-semibold shadow transition duration-300"
          >
            <FaGoogle />
            <span>Continue with Google</span>
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
