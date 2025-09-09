
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple hardcoded admin check
    if (username === "Kemboi" && password === "Kemboi@6112") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form
        onSubmit={handleLogin}
        className="bg-black p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl text-white font-bold mb-6 text-center">Admin Login</h2>
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full text-gray-200 mb-4 px-4 py-2 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full text-white mb-6 px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-lime-300 text-black font-semibold py-2 rounded-md hover:bg-lime-400"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
