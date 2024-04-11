"use client";
import { useEffect } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserInfo() {
  const { status,data: session } = useSession();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("username", session?.user?.name);
    }
  }, [session]);
    
  if (status === "authenticated") {
    return (
      <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <Image
          className="rounded-full"
          src={session?.user?.image}
          width={60}
          height={60}
        />
          <div>
            Name: <span className="font-bold">{session?.user?.name}</span>
          </div>
          <div>
            Email: <span className="font-bold">{session?.user?.email}</span>
          </div>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
          >
            Log Out
          </button>
        </div>
      </div>
    );
  } else {
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">

        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
} 
}
