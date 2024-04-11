"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useState,useEffect } from 'react';
import ChatIcon from "@/app/ChatIcon/page"; 
import Chatbot from "@/app/ChatBotModule/page";


const Banner = () => {
  useEffect(() => {
    localStorage.clear();
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  
  return (
    <div className="py-8 flex justify-center items-center">
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
        <SwiperSlide>
          <div
            className="overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 py-60 md:py-30 xl:py-20"
            style={{
              background:
                "linear-gradient(rgba(3, 108, 188, 0.6), rgba(71, 130, 182, 0.5))",
            }}
          >
            <div>
              <h1 className="text-xl md:text-5xl xl:text-7xl text-center flex justify-center items-center mt-16 md:mt-32 lg:mt-48 xl:mt-56 px-5 py-2 text-white font-bold">
                {" "}
                Nature,
              </h1>
              <p className="text-white text-center text-base md:text-xl xl:text-3xl text-normal ">
                {" "}
                "Healthy Environment, Healthy Mind"
              </p>
            </div>
            <div className="mt-20">
              <img
                src="/assets/images/gamedevelopment.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 py-60 md:py-30 xl:py-20"
            style={{
              background:
                "linear-gradient(rgba(3, 108, 188, 0.6), rgba(71, 130, 182, 0.5));",
            }}
          >
            <div>
              <h1 className="text-xl md:text-5xl xl:text-7xl text-center flex justify-center items-center mt-16 md:mt-32 lg:mt-48 xl:mt-56 px-5 py-2 text-white font-bold">
                {" "}
                Healthy Environment,
              </h1>
              <p className="text-white text-center text-base md:text-xl xl:text-3xl text-normal ">
                {" "}
                "A beautiful Environment Starts with you!"
              </p>
            </div>
            <div className="mt-20">
              <img
                src="/assets/images/page2.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </SwiperSlide>        
        <div>
        <ChatIcon onClick={togglePopup} />
        {isPopupOpen && <Chatbot onClose={togglePopup} />}
        </div>
      </Swiper>
      
    </div>
  );
};

export default Banner;
