"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    if (adminId === "admin" && password === "1234") {
      localStorage.setItem("isAdmin", "true");

      // 🔑 Force navigation
      router.replace("/admin/issues");
    } else {
      setError("Invalid admin credentials");
    }
  }

  return (
    <main className="min-h-screen bg-yellow-50 flex items-center justify-center px-6">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg border border-gray-200">
        <h1 className="text-2xl font-bold text-black text-center">
          Municipality Login
        </h1>

        {error && (
          <p className="mt-4 text-center text-red-700 font-semibold">
            {error}
          </p>
        )}

        <div className="mt-6">
          <label className="block font-semibold text-black">Admin ID</label>
          <input
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            className="mt-2 w-full rounded-lg border-2 border-gray-400 bg-white p-3 text-black"
          />
        </div>

        <div className="mt-5">
          <label className="block font-semibold text-black">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded-lg border-2 border-gray-400 bg-white p-3 text-black"
          />
        </div>

        <button
          type="button"
          onClick={handleLogin}
          className="mt-8 w-full rounded-full bg-yellow-500 py-3 text-lg font-bold text-black hover:bg-yellow-600"
        >
          Login
        </button>
      </div>
    </main>
  );
}
