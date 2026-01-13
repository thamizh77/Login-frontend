import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      if (res.data.success) {
        window.location.href = "/dashboard";
      }
    } catch (err) {
      setError("Invalid credentials or server error");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-zinc-900 p-8 w-96 rounded">
        <h1 className="text-white text-2xl mb-6">Sign In</h1>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-zinc-800 text-white rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 bg-zinc-800 text-white rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-red-600 p-3 text-white rounded">
          Sign In
        </button>
      </form>
    </div>
  );
}
