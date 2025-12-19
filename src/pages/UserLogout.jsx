import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // Use environment variable for backend URL
  const apiUrl = import.meta.env.VITE_API_URL;
  axios
    .get(`${apiUrl}/users/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem("token");
        navigate("/User-Login");
      }
    });

  return <div>UserLogout</div>;
};

export default UserLogout;
