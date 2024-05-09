"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RootLayout from "../layout";
import { signIn } from "next-auth/react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [conf_password,setConf_Password]=useState("");
  const [error,setError]=useState("");
  // const token="false";

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!name || !email || !password || !conf_password){
        setError("All fields are necessary.");
        return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!password.match(passwordRegex)) {
      setError("Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one special character, and one number.");
      return;
    }
    
    try {
        const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }  
      if (password == conf_password){
        const res = await fetch("api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name,email,password}),
        });
        if (res.ok) {
          const form = e.target;
          form.reset();
          router.push("/LoginModule");
        } else {
          console.log("User registration failed.");
        }
      }
      else{
        setError("Password doesn't matches.");
        return;
      }
      


    } catch (error) {
      console.log("Error during registration: ", error);
    }

    
  }
  const googleLogin = async () => {
    await signIn("google", {
      callbackUrl: "/",
      redirect: true,
    });
  }; 
  return (
    <RootLayout showHeader={false} showFooter={false}>
    <section>
    <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-screen">
    <div className="relative flex items-end px-4 pb-10 pt-20 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover object-top max-w-full max-h-full"
          src="/login.png"
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="relative">
        <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24 py-20">
          <h3 className="text-4xl font-bold text-white">
            Carbon Footprint
          </h3>
          <h2 className="text-white text-xl font-semibold mt-10">
            “We are the first generation to feel the effect of climate change and the last generation who can do something about it.”
          </h2>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
          Sign up
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Already have an account?
          <Link
            href="/LoginModule"
            title=""
            className="font-medium text-black transition-all duration-200 hover:underline ml-2"
          >
            Sign In
          </Link>
        </p>
            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      id="name"
                      onChange={e => setName(e.target.value)}
                    ></input>
                  
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={e => setEmail(e.target.value)}
                    ></input>
                   
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={e => setPassword(e.target.value)}
                    ></input>
                    
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Confirm Password"
                      id="password_confirmation"
                      onChange={e => setConf_Password(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div>
                  <button className="inline-flex w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7 text-white  bg-black/70 hover:bg-black/80">
                    Create Account
                  </button>
                </div>

                {error &&(
                  <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                  {error}
                </div>)
                }
                
              </div>
            </form>
            <p className="text-center my-3">-- OR --</p>
            
            {/* Google Login Button */}
            <div className="space-y-3 mt-3">
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"                
                onClick={googleLogin}
              >
                <span className="mr-2 inline-block"></span>
                <Image
                  src="/google_icon.png"
                  height={30}
                  width={30}
                  alt="Google Icon"
                  className="mr-3"
                />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </RootLayout>
  );
};






