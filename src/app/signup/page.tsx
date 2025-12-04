"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import  axios  from "axios";
import { set } from "mongoose";
import toast from "react-hot-toast";

export default function SignupPage(){
    const router = useRouter();
    const [User, setUser] = React.useState({
        email:"",
        password:"",
        username:""
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [Loading, setLoading] = React.useState(false);

    useEffect(() => {
        if(User.email.length > 0 && User.password.length > 0 && User.username.length > 0){
            setButtonDisabled(false);
        }
        else setButtonDisabled(true);
    },[User])

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("api/users/signup", User);
            console.log("signup success", response.data);
            router.push("/login");
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        } finally{
            setLoading(false);
        }
    }

    return (
      <div className="flex flex-col justify-center items-center gap-2 p-50">
        <h1>{Loading ? "Loading..." : "Signup page"}</h1>
        <input
          type="text"
          placeholder="Username"
          value={User.username}
          onChange={(e) => setUser({ ...User, username: e.target.value })}
          className="border border-gray-300 p-2 rounded-md"
        />
        <br />
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
          onClick={onSignup}
        >
          {buttonDisabled ? "Fill data" : "Sign up"}
        </button>

        <Link href="/login">Click here to Login</Link>
      </div>
    );
}