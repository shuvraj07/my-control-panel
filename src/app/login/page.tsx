"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !pwd) {
      setError("Please enter both email and password.");
      return;
    }
    // 🔒 TODO: replace with real auth call
    router.push("/login/success");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-sm space-y-4 bg-white p-6 rounded shadow"
    >
      <h2 className="text-xl font-medium text-center">Log in</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />

      <input
        type="password"
        placeholder="Password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        className="w-full py-2 rounded bg-black text-white hover:bg-gray-800"
      >
        Log in
      </button>

      <p className="text-sm text-center mt-2">
        Don’t have an account?{" "}
        <Link href="/login/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
}
