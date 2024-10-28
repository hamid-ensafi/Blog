"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { login } from "./../_lib/auth";
import { Metadata } from 'next';

export const metadata = {
  title: 'Login ',
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: loginMutate } = useMutation({
    mutationFn: ({ username, password }) => login(username, password),
    onSuccess: () => {
      window.location.href = "/blog";
    },
    onError: (error) => {
      console.error("An error occurred:", error);
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutate({ username, password });
  };

  return (
    <form className="w-2/12 flex flex-col gap-2" onSubmit={handleLogin}>
      <div className="flex flex-col">
        <label className="p-2 text-slate-200">User Name</label>
        <input
          className="rounded px-2 py-1"
          placeholder="username@example.com"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="p-2 text-slate-200">Password</label>
        <input
          className="rounded px-2 py-1"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="bg-slate-500 rounded p-2 mt-2 text-slate-200"
        type="submit"
      >
        Submit Form
      </button>
    </form>
  );
}
