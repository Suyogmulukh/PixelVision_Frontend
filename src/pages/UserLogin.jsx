import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";
import PasswordInput from "../components/inputs/PasswardInput";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const validateForm = () => {
    if (!email || !password) {
      setError("All fields are required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        { email, password },
        { withCredentials: true }
      );
      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/home");
      }
    } catch (error) {
      setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setError(
        error.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen h-screen bg-cyan-50 overflow-hidden relative">
      {/* Background decorative boxes */}
      <div className="login-ui-box right-4 sm:right-10 -top-20 sm:-top-40" />
      <div className="login-ui-box bg-cyan-200 -bottom-20 sm:-bottom-36 right-1/4 sm:right-2/4" />

      <div className="container min-h-screen h-screen flex items-center justify-center px-4 sm:px-8 lg:px-20 mx-auto">
        {/* Main container - stacked on mobile, side-by-side on desktop */}
        <div className="w-full max-w-4xl flex flex-col lg:flex-row items-stretch lg:items-end gap-0">
          {/* Left side - Image/Welcome section */}
          <div className="w-full lg:w-4/6/12 h-[35vh] sm:h-[45vh] lg:h-[77vh] flex items-end bg-[url('/signUP.png')] bg-cover bg-center rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none p-6 sm:p-8 lg:p-10 z-50">
            <div>
              <h4 className="text-2xl sm:text-3xl text-white font-semibold leading-[30px] sm:leading-[40px] mb-3 sm:mb-5 text-opacity-90">
                Login <br /> Your Account
              </h4>
              <p className="text-[11px] sm:text-[12px] text-white leading-4 sm:leading-5 pr-2 sm:pr-3 -mb-3 sm:-mb-5 text-opacity-90">
                Login Your exciting account To Create Beautiful Images{" "}
                <br className="hidden sm:block" /> And Enhance Your Gallery
              </p>
            </div>
          </div>

          {/* Right side - Form section */}
          <div className="w-full lg:w-2/5 min-h-[50vh] lg:h-[68vh] bg-white rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none relative p-6 sm:p-10 lg:p-16 shadow-lg shadow-cyan-200/20">
            <form onSubmit={submitHandler}>
              <h4 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-9 px-1 sm:px-2">
                Login
              </h4>

              <input
                type="email"
                placeholder="Email"
                className="input-box"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />

              <PasswordInput
                className="input-box"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                required
                minLength={6}
                placeholder="Password"
              />

              {error && (
                <p className="text-red-500 text-xs sm:text-sm mt-2">{error}</p>
              )}

              <button className="btn-primary w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="text-xs text-slate-500 text-center my-3 sm:my-4">
              OR
            </p>

            <Link
              to="/User-signup"
              className="btn-primary btn-light w-full text-center px-[60px] lg:px-[50px] text-nowrap"
            >
              Create new Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
