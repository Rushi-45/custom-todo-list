
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginDetails = { username: "user", password: "123" };

  const handleLogin = () => {
    if (username === "") {
      toast.error("Please enter username");
    } else if (username === loginDetails.username && password === loginDetails.password) {
      localStorage.setItem("token", "AZAZAZAZ");
      navigate("/dashboard");
    } else if (username === loginDetails.username && password !== loginDetails.password) {
      toast.error("Invalid password.");
    } else if (username !== loginDetails.username && password === loginDetails.password) {
      toast.error("Invalid username.");
    }
  };

  const isLoggedIn = localStorage.getItem("token");
  if (isLoggedIn) {
    navigate("/dashboard");
  }

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <ToastContainer />
      <div className="max-w-sm w-full p-6 bg-white rounded-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Login</h1>
        <p className="text-gray-600 mb-4">Please enter the following details to login</p>
        <form>
          <div className="mb-4">
            <label className="block">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="form-control bg-gray-200 px-4 py-2 rounded-md w-full"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="form-control bg-gray-200 px-4 py-2 rounded-md w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="" className="text-red-500 text-sm">Forgot password ?</a>
          </div>
          <button
            type="button"
            className="bg-green-600 text-white rounded-lg py-2 px-4 mt-4 w-full"
            onClick={() => handleLogin()}
          >
            Login
          </button>
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Don't have an account{" "}
              <a href="" className="text-green-600 font-bold">
                Register now
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;