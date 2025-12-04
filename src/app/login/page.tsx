"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [User, setUser] = React.useState({
    email: "",
    password: "",
  })

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async() => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", User);
      console.log("login successful", response.data);
      toast.success("Login Successful");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if(User.email.length > 0 && User.password.length > 0){
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [User]);

  return (
    <div className="flex flex-col justify-center items-center gap-2 p-50">
      <h1>Login Page</h1>
      <input
        type="email"
        placeholder="Email"
        value={User.email}
        onChange={(e) => setUser({ ...User, email: e.target.value })}
        className="border border-gray-300 p-2 rounded-md"
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={User.password}
        onChange={(e) => setUser({ ...User, password: e.target.value })}
        className="border border-gray-300 p-2 rounded-md"
      />

      <button
        className="bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600"
        onClick={onLogin}
      >
        Login here
      </button>

      <Link href="/signup">Click here to Signup</Link>
    </div>
  );
}
