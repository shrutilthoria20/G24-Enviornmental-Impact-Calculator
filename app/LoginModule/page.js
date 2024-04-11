"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
import RootLayout from "../layout";


export default function SignInOne() {

  // const {status}=useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email,password);
    if(!email || !password){
      setError("All fields are necessary.");
      return;
    }
    try {
      const res = await signIn("credentials", {
        email,
        password,        
        callbackUrl: "/",        
      });

      console.log("RESsssssssss",res);
      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      else{
        router.push("/");
      }
      // router.push("/");
      // router.redirect("/");
      
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogin = async () => {
    await signIn("google", {
      callbackUrl: "/",
      redirect: true,
    });
  };

  return (
    <RootLayout showHeader={false} showFooter={false}>
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover object-top max-w-full max-h-full"
              // src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
              src="/login.png"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
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
              Login
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Don't have an account?
              <Link
                href="/RegisterModule"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline ml-2"
              >
                Sign Up
              </Link>
            </p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      onChange={e => setEmail(e.target.value)}
                    ></input>
                    
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
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
                      onChange={e => setPassword(e.target.value)}
                    ></input>
                    
                  </div>
                  <div className="text-right">
                    <Link href="/ForgotPassModule">Forgot password ?</Link>
                  </div>
                </div>
                <div>
                  <button              
                    className="inline-flex w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7 text-white bg-black/70 hover:bg-black/80">
                    Login
                  </button>
                </div>
                {/* <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">Invalid Credentials</div> */}
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

              {/* {status==="authenticated" ?( redirect("/")) : (( redirect("/LoginModule")))}     */}

              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                // onClick={() => signIn("google")}
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
}