"use client";
import React, { useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
// import RootLayout from "../../layout";

export default function ResetPassword({ params }) {
  const searchParam = useSearchParams();
  const [authState, setAuthState] = useState({
    password: "",
    cpassword: "",
  });  

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const submit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post("/api/reset-password", {
        email: params.email,
        signature: searchParam.get("signature"),
        password: authState.password,
        password_confirmation: authState.cpassword,
      })      
      .then((res) => {        
        const response = res.data;        
        if (response.status == 400) {
            setError("Password Not Changed.");
            setLoading(false);
        } else if (response.status == 200) {
            setError("Password Changed. Login with New Password");
            setLoading(false);
        }
        else if (response.status == 500) {
          setError("Password doesn't matches.");
          setLoading(false);
      }
      })
      .catch((err) => {
        setLoading(false);
        console.log("err..", err);
      });
  };
  return (
    // <RootLayout showHeader={false} showFooter={false}>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-[500px] p-5 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold">Reset Password?</h1>
          <form onSubmit={submit}>
            <div className="mt-5">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Enter your new password"
                className="w-full h-10 p-2 border rounded-md outline-red-400"
                onChange={(event) =>
                  setAuthState({ ...authState, password: event.target.value })
                }
              />
            </div>
            <div className="mt-5">
              <label className="block">Confirm Password</label>
              <input
                type="password"
                placeholder="Enter your confirm password"
                className="w-full h-10 p-2 border rounded-md outline-red-400"
                onChange={(event) =>
                  setAuthState({ ...authState, cpassword: event.target.value })
                }
              />
            </div>
            {error &&(
            // <div className={`bg-${error === 'Password Changed. Login with New Password' ? 'green-300' : 'red'} text-white w-fit text-sm py-1 px-3 rounded-md mt-2`}>
              <div className="bg-red-700 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
              </div>
            )}
            <div className="mt-5">
              <button
                className="w-full bg-black p-2 rounded-lg text-white"
                disabled={loading}
              >
                {loading ? "Processing.." : "Submit"}
              </button>
            </div>
            <div className="mt-5 text-center">
              <Link href="/LoginModule" className="text-orange-400">
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
  //  </RootLayout>
  );
}
