"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsCaretDownFill } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from 'next/navigation';


const Header = () => {
  const [sidenav, setSidenav] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [logout, setLogout] = useState(false);

  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false }); // Set redirect to false to prevent automatic redirection
    router.push('/'); // Manually navigate to the home page
  };

  const { status,data: session } = useSession();
  // console.log("Status: ",status);
  // if (status == "authenticated") {
  //   setLogout(true);
  // }
  const closeSidenav = () => {
    setSidenav(false);
  };

  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth <= 768) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Click occurred outside the dropdown, so close it
        setIsDropdownOpen(false);
      }
    };
    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const dropdownRef = useRef(null);

  return (
    <>
      <div className="flex items-center justify-between px:20 md:px-20 xl:px-16 py-2 z-50 bg-white fixed w-full border-b-2 border-b-[#1789b3] ">
        
        {status === 'authenticated'? (  
        //  src="/assets/images/Car.jpg"
        <div className="flex">
          {session?.user?.image != null ? (
            <Image
            className="rounded-full"
            src={session?.user?.image}          
            width={40}
            height={40}
          /> 
          ):(
            <Image
         className="rounded-full"        
        src="/assets/images/google_icon.png"
         width={40}
         height={40}
       /> 
          )}
          
                <span className="font-bold flex items-center">{session?.user?.name}</span>
                </div> )
        :
        (<img src="/logo.png" alt="" className="h-16 w-auto px-2 " />)
         
        }
        
        {/* <img src="/logo.png" alt="" className="h-16 w-auto px-2 " /> */}
        {/* toggler-button  */}
        <HiMenuAlt2
          onClick={() => setSidenav(!sidenav)}
          className="inline-block lg:hidden cursor-pointer w-8 h-6 absolute top-6 right-14 text-[#1789b3] transform delay-30 transition-transform"
        />
        {showMenu && (
          <ul className="md:gap-8 xl:gap-12 flex relative">
            <li>
              <Link
                href="/"
                className="active font-semibold text-lg hover:text-[#1789b3] hover:underline origin-top-left uppercase decoration-[2px] decoration-[#1789b3] underline-offset-4 cursor-pointer duration-300 active:text-[#1789b3]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="font-semibold text-lg hover:text-[#1789b3] hover:underline uppercase decoration-[#1789b3] decoration-[2px] underline-offset-4 cursor-pointer duration-300 active:text-[#1789b3]  "
              >
                {" "}
                About
              </Link>
            </li>
            <li>
            {status === 'authenticated'?                        
              (
                
                <Link
                href="/Blogs/Residency"
                className="font-semibold text-lg hover:text-[#1789b3] hover:underline uppercase decoration-[2px] decoration-[#1789b3] underline-offset-4 cursor-pointer duration-300 active:text-[#1789b3] "
              >{" "}
                Take survey
              </Link>
            )              
              :
              (
              <Link
                href="/LoginModule"
                className="font-semibold text-lg hover:text-[#1789b3] hover:underline uppercase decoration-[2px] decoration-[#1789b3] underline-offset-4 cursor-pointer duration-300 active:text-[#1789b3] "
              >{" "}
                Take survey
              </Link>
              )
              }

              {/* <Link
                href="/Blogs/Residency"
                className="font-semibold text-lg hover:text-[#1789b3] hover:underline uppercase decoration-[2px] decoration-[#1789b3] underline-offset-4 cursor-pointer duration-300 active:text-[#1789b3] "
              >{" "}
                Take survey
              </Link> */}
            </li>
           <li>
              
              {status === 'authenticated'?                        
              (
                
              <button className="font-extrabold text-lg hover:text-[#1789b3] hover:underline uppercase decoration-[2px] decoration-[#1789b3] underline-offset-4 cursor-pointer duration-300 active:text-[#1789b3] text-red-500"
              onClick={handleSignOut}
              >                
                Logout
              
            </button>
            )              
              :
              (<Link
                href="/LoginModule"
                className="font-semibold text-lg hover:text-[#1789b3] hover:underline uppercase decoration-[2px] decoration-[#1789b3] underline-offset-4 cursor-pointer duration-300 active:text-[#1789b3] "
                
              >
                Login
                
              </Link>)
              }
              </li>
            <li>
              <Link
                href="/Contact"
                className="font-semibold text-lg hover:text-[#1789b3] hover:underline uppercase decoration-[2px] decoration-[#1789b3] underline-offset-4 cursor-pointer duration-300 active:text-[#1789b3] "
              >
                Contact{" "}
              </Link>
            </li>
          </ul>
        )}

        {sidenav && (
          <div
            className={`fixed border-2 border-b-[#1789b3] top-20 left-0 right-0 w-full h-fit bg-white transition-transform delay-300 transform opacity-0 ${
              sidenav
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-full"
            } text-black bg-opacity-80 z-50 shadow-2xl ease-in-out duration-300`}
          >
            <div className="w-full h-full relative">
              <div className="w-full h-full bg-white p-6 px-12">
                <ul className=" flex flex-col gap-4 text-base">
                  <li>
                    <Link
                      href="/"
                      onClick={closeSidenav}
                      className="font-semibold text-base  hover:text-[#1789b3] uppercase decoration-[2px] decoration-[#1789b3] underline-offset-4 cursor-pointer duration-300"
                    >
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/About"
                      onClick={closeSidenav}
                      className="font-semibold text-base  hover:text-[#1789b3] uppercase decoration-[2px] decoration-[#1789b3] underline-offset-4 cursor-pointer duration-300"
                    >
                      {" "}
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/Blogs/Residency"
                      className="font-semibold text-base  hover:text-[#1789b3] uppercase decoration-[2px] decoration-[#1789b3] underline-offset-4 cursor-pointer duration-300"
                    >{" "}
                      Take survey
                    </Link>
                  </li>

                  <li>
                  <Link
                    href="/LoginModule"
                    className="font-semibold text-base  hover:text-[#1789b3] uppercase decoration-[2px] decoration-[#1789b3] underline-offset-4 cursor-pointer duration-300"
                  >{" "}
                    Login
                  </Link>
                  </li>
            
                  <li>
                    <Link
                      href="/Contact"
                      onClick={closeSidenav}
                      className="font-semibold text-base hover:text-[#1789b3] uppercase decoration-[2px] decoration-[#1789b3] underline-offset-4 cursor-pointer duration-300"
                    >
                      {" "}
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
