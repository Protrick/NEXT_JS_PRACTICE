"use client"
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { axios } from "axios";

export default function SignupPage(){
    const [User, setUser] = React.useState({
        email:"",
        password:"",
        username:""
    })

    const onSignup = async () => {

    }

    return(
        <div className="flex flex-col justify-center items-center gap-2 p-50">
            <h1>Signup Page</h1>
            <input type="text" placeholder="Username" value={User.username} onChange={(e) => setUser({...User, username: e.target.value})} 
            className="border border-gray-300 p-2 rounded-md"/>
            <br />
            <input type="email" placeholder="Email" value={User.email} onChange={(e) => setUser({...User, email: e.target.value})} className="border border-gray-300 p-2 rounded-md"/>
            <br />
            <input type="password" placeholder="Password" value={User.password} onChange={(e) => setUser({...User, password: e.target.value})} className="border border-gray-300 p-2 rounded-md"/>

            <button className="bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600" onClick={onSignup}>
                Signup here
            </button>

            <Link href="/login">Click here to Login</Link>
        </div>
    )
}