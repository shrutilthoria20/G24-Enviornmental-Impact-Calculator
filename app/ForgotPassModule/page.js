"use client";
import React, { useState } from "react";
import axios from "axios";
import RootLayout from "../layout";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if(!email){
      setError("All fields are necessary.");
      return;
    }
    try {
      axios
        .post("/api/forgot-password", { email: email })
        .then((res) => {
          setLoading(false);          
          const response = res.data;
          console.log(response);
          if (response.status == 200) {
            setError("Email has been sent on your mail. Thank You !!");          
            setLoading(false);
          } else if (response.status == 500) {
            setError("No user found with this email.");
            setLoading(false);
          }
          if (response.status == 400) {                
            setError("No user found with this email.");
            setLoading(false);
          }
      })
    }catch (error) {
      setLoading(false);
      console.log("Error during registration: ", error);
    }
  };
  
  return (
    <RootLayout showHeader={false} showFooter={false}>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-[500px] p-5 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold">Forgot Passowrd ?</h1>
          <p>
            Don't worry it happens. just enter your email below and we will send
            an email to you.
          </p>
          <form onSubmit={submit}>
            <div className="mt-5">
              <label className="block">Email</label>
              <input
                type="email"
                placeholder="tushar@gmail.com"
                className="w-full h-10 p-2 border rounded-md outline-red-400"
                onChange={(event) => setEmail(event.target.value)}
              />
              {/* <span className="text-red-500">{errors?.email}</span> */}
              {error &&(
                  // <div className={`bg-${error == 'Email has been sent on your mail. Thank You !!' ? 'green' : 'red'}-700 text-white w-fit text-sm py-1 px-3 rounded-md mt-2`}>
                    <div className={`bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2`}>
                    
                  {error}
                </div>)
                }
            </div>
            <div className="mt-5">
              <button
                className="w-full bg-black p-2 rounded-lg text-white"
                disabled={loading}
              >
                {loading ? "Processing" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      </RootLayout>
  );
}
