import React, { useEffect } from "react";

import logo from "../../assets/logo/smpalbanna.png";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const TestAuth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      window.location.href = "/user-validation";
      return;
    }
  }, []);

  const toggleVisibility = () => setVisible(!visible);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://cbt-smpit.vercel.app/login", {
        nama_panggilan: username,
        id_pendaftar: password,
      });

      const user = res.data.user;
      console.log(res.data.user);

      // Simpan user ID ke localStorage
      localStorage.setItem("userId", user.id);

      // Redirect ke halaman user-validation
      window.location.href = "/user-validation";
    } catch (err) {
      console.error(err);
      if (err.response) {
        setMessage(err.response.data.error || "Login gagal");
      } else {
        setMessage("Terjadi kesalahan koneksi");
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center text-black bg-base px-4">
        <main className="w-full max-w-md mx-auto mt-5">
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full">
              <img src={logo} alt="smp-logo" className="object-contain" />
            </div>
          </div>
          {/* Login card */}
          <form onSubmit={handleLogin} className="mt-3">
            <div className="bg-white w-full text-center rounded-lg shadow-secondary py-8 px-4 sm:px-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-6">Login</h2>
              <div className="flex flex-col justify-start items-start mb-4">
                <label className="pl-2 mb-2 text-sm text-base text-black">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value.toUpperCase())}
                  className="border w-full px-3 py-2 rounded-md text-sm text-base text-black focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition duration-300"
                />
              </div>
              <div className="relative flex flex-col justify-start items-start mb-4">
                <label className="pl-2 mb-2 text-sm text-black">Password</label>
                <div className="relative w-full">
                  <input
                    type={visible ? "text" : "password"}
                    placeholder="ID Pendaftar"
                    value={password}
                    onChange={(e) => setPassword(e.target.value.toUpperCase())}
                    className="border w-full px-3 py-2 rounded-md text-sm text-base pr-10 text-black focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition duration-300"
                  />
                  <span
                    onClick={toggleVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  >
                    {visible ? <EyeOff size={20} /> : <Eye size={20} />}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-gradient-to-t from-indigo-400 to-blue-300 px-6 font-semibold text-white rounded-xl shadow-lg py-2 hover:scale-105 transition-transform text-sm sm:text-base"
                >
                  Masuk
                </button>
              </div>
              {message && (
                <p className="text-red-500 mt-4 text-xs sm:text-sm">{message}</p>
              )}
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default TestAuth;
