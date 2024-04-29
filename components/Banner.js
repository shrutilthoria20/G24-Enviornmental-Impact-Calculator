"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useState,useEffect } from 'react';
import ChatIcon from "@/app/ChatIcon/page"; 
import Chatbot from "@/app/ChatBotModule/page";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Banner = () => {

  useEffect(() => {
    localStorage.clear();
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const { status,data: session } = useSession();
  
  return (
    <div className="py-8 justify-center items-center">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
<Swiper
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 2,
        },
      }}
    >
      <SwiperSlide>
        <div className="overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-2 py-8 md:py-16 xl:py-20" style={{ background: "linear-gradient(rgba(3, 108, 188, 0.6), rgba(71, 130, 182, 0.5))" }}>
          <div>
            <h1 className="text-xl md:text-4xl lg:text-5xl xl:text-6xl text-center mt-4 md:mt-0 px-5 py-2 text-white font-bold">Nature</h1>
            <p className="text-white text-center text-base md:text-xl xl:text-2xl">"Healthy Environment, Healthy Mind"</p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="/assets/images/gamedevelopment.png" alt="" className="img-fluid mx-auto" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-2 py-8 md:py-16 xl:py-20" style={{ background: "linear-gradient(rgba(3, 108, 188, 0.6), rgba(71, 130, 182, 0.5))" }}>
          <div>
            <h1 className="text-xl md:text-4xl lg:text-5xl xl:text-6xl text-center mt-4 md:mt-0 px-5 py-2 text-white font-bold">Healthy Environment</h1>
            <p className="text-white text-center text-base md:text-xl xl:text-2xl">"A beautiful Environment Starts with you!"</p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="/assets/images/page2.png" alt="" className="img-fluid mx-auto" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
        <div>
        <ChatIcon onClick={togglePopup} />
        {isPopupOpen && <Chatbot onClose={togglePopup} />}
        </div>
      </Swiper>
      
      <div className="max-w-xl mx-auto bg-white rounded-md overflow-hidden">
  <div className="p-4">
    <h2 className="text-lg font-semibold text-black">Take The Carbon Footprint Survey</h2>
    <p className="text-gray-700 mt-2">Help's you understand your impact on the environment and identify areas for improvement.</p>
  </div>
  <div className="px-4 py-3 bg-white">
  {status === 'authenticated'?(
    <Link href="/Blogs/Residency">  
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
      Click Here to Start
    </button>
  </Link>
  ):(
    <Link href="/LoginModule">  
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
      Click Here to Start
    </button>
  </Link>
  )

  }  
  </div>
</div>


      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Benefits of Using a Carbon Footprint Calculator</h2>
      <ul className="list-none">
        <li className="mb-2">
          <strong className="text-blue-500">Awareness:</strong> Learn how your travel habits affect the environment.
        </li>
        <li className="mb-2">
          <strong className="text-blue-500">Cutting Emissions:</strong> Take action to produce less pollution from your transportation.
        </li>
        <li className="mb-2">
          <strong className="text-blue-500">Cost Savings:</strong> Find ways to spend less on fuel and travel costs.
        </li>
        <li className="mb-2">
          <strong className="text-blue-500">Supporting Change:</strong> Speak up for better transportation rules and projects that help the planet.
        </li>
        <li className="mb-2">
          <strong className="text-blue-500">Setting Goals:</strong> Decide on targets for reducing pollution and keep track of how you're doing.
        </li>
        <li className="mb-2">
          <strong className="text-blue-500">Making Smart Choices:</strong> Think carefully about how you travel, what you drive, and the routes you take.
        </li>        
      </ul>
    </div>    

    </div>
    
    
    
  );
};

export default Banner;
