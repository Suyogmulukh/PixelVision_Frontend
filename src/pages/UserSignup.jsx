import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";
import PasswordInput from "../components/inputs/PasswardInput";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    const newUser = {
      fullname: fullName,
      email: email,
      password: password,
    };

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiUrl}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...userData }),
      });
      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
      setEmail("");
      setFullName("");
      setPassword("");
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setError("Email already exists. Please use a different email.");
      } else {
        setError("An error occurred. Please try again later.");
      }
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
          <div className="w-full lg:w-4/6/12 h-[35vh] sm:h-[45vh] lg:h-[77vh] flex items-end bg-[url('/login.png')] bg-cover bg-center rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none p-6 sm:p-8 lg:p-10 z-50">
            <div>
              <h4 className="text-2xl sm:text-3xl text-gray-100 lg:text-gray-900 font-semibold leading-[35px] sm:leading-[45px] mb-3 sm:mb-5">
                Edit <br /> Beautiful Image
              </h4>
              <p className="text-[11px] sm:text-[12px] text-slate-100 lg:text-gray-800 leading-4 sm:leading-5 pr-2 sm:pr-3 -mb-3 sm:-mb-5">
                Create an account to start editing and preserving your
                <br className="hidden sm:block" />
                memories in your Beautiful picture...
              </p>
            </div>
          </div>

          {/* Right side - Form section */}
          <div className="w-full lg:w-2/5 min-h-[50vh] lg:h-[68vh] bg-white rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none relative p-6 sm:p-10 lg:p-16 shadow-lg shadow-cyan-200/20">
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <h4 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-9 px-1 sm:px-2">
                SignUp
              </h4>

              {error && (
                <p className="text-red-500 text-xs sm:text-sm mb-3 sm:mb-4">
                  {error}
                </p>
              )}

              <input
                required
                className="input-box"
                type="text"
                placeholder="Fullname"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />

              <input
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="input-box"
                type="email"
                placeholder="email@example.com"
              />

              <PasswordInput
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                type="password"
                placeholder="password"
              />

              <button className="btn-primary w-full">Create account</button>
            </form>

            <p className="text-xs text-slate-500 text-center my-3 sm:my-4">
              OR
            </p>

            <Link
              to="/User-Login"
              className="btn-primary btn-light w-full text-center lg:px-[100px] px-[105px]"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
