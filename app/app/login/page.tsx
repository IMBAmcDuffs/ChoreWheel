"use client";

import { signIn } from "@/lib/auth";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      window.location.href = "/chore-list";
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold text-center mb-8">Sign In</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded text-sm">{error}</div>
        )}
        <button
          type="submit"
          className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
