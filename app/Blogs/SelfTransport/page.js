"use client";
import React, { useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {RadioGroup, Radio, input} from "@nextui-org/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const usePersistentState = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : defaultValue;
  });

  const handleChange = (newValue) => {
    // const parsedValue = !isNaN(newValue) ? parseInt(newValue, 10) : newValue;
    setValue(newValue);
    localStorage.setItem(key, newValue);
    
  };

  return [value, handleChange];
};

const Blogs = () => {
  const [Self_Radio, setSelectedRadio] = usePersistentState('Self_Radio', '');
  const [Self_Range, setSelectedRange] = usePersistentState('Self_Range', 0);

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };

  const handleRangeChange = (e) => {
    setSelectedRange(parseInt(e.target.value, 10));
  };

  return (
    <>
      {/* <div
        className="p-6 md:10 lg:p-12"
        style={{
          background:
            "linear-gradient(rgba(48, 129, 195, 0.7), rgba(17, 136, 184, 0.8))",
        }}
      >
        <div className="p-1 md:p-3">
          <h2 className="text-center font-semibold text-xl md:text-2xl xl:text-3xl text-white  pt-12 md:pt-10 lg:pt-7">
            Take Survey
          </h2>
          <h4 className=" text-white text-base md:text-lg xl:text-xl font-semibold text-center pt-1 pb-1 md:pb-2 lg:pb-4">
          "Small steps, big change: reduce your ecological footprint"
          </h4>
        </div>
      </div> */}
      

      <div className="justify-center cursor-pointer">
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
        
          <div className="flex items-center justify-center">
              <img
                src="/assets/images/Self.png"
                alt="Blurred Image"
                className="w-full blur-sm"
              />
            </div>
            <div  className="absolute inset-12">
              <div>
                <h2 className="text-slate-500 text-lg md:text-2xl xl:text-4xl text-center font-bold mt-10">
                  Self Transport footprint
                </h2>              
              </div>
              <div className="text-center">
                <p className="text-gray-700 text-base md:text-xl xl:text-2xl font-semibold mt-6 mb-6 px-40 ">
                  Which type of self transportation you often use ?
                </p>
                <div class="leading-tight font-semibold">
                  <label class="inline-flex items-center space-x-2">
                      <input type="radio" name="Self_Radio" class="ml-1" value="Foot-Walk" checked={Self_Radio === 'Foot-Walk'} onChange={handleRadioChange}/> 
                      Foot-Walk
                  </label>
                  <label class="inline-flex items-center space-x-2">
                      <input type="radio" name="Self_Radio" class="ml-5" value="Bicycle" checked={Self_Radio === 'Bicycle'} onChange={handleRadioChange}/> 
                      Bicycle
                  </label>                  
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-700 text-base md:text-xl xl:text-2xl font-semibold mt-6 mb-6 px-40 ">
                  How far do you travel by self transportation each week ? 
                </p>
                
                <div className="flex flex-col items-center mt-8">
                  <div className="flex justify-between w-64 text-gray-600">
                    <span>HARDLY</span>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      step="1"
                      value={Self_Range}
                      onChange={handleRangeChange}
                      className="slider appearance-none w-64 h-2 bg-gray-300 rounded-full outline-none"
                    />
                    <span>VERY</span>
                  </div>
                  <span className="mt-2 text-gray-700">{Self_Range} kms</span>
                  <style jsx>{`
                    /* Custom Styles */
                    .slider::-webkit-slider-thumb {
                      -webkit-appearance: none;
                      appearance: none;
                      width: 20px;
                      height: 20px;
                      background: #4f46e5;
                      border-radius: 50%;
                      cursor: pointer;
                    }

                    .slider::-moz-range-thumb {
                      width: 20px;
                      height: 20px;
                      background: #4f46e5;
                      border-radius: 50%;
                      cursor: pointer;
                    }
                  `}</style>
                </div>

              </div>
              </div>

              <div className="">
                <div className="absolute top-1/2">
                  <Link href="/Blogs/Motorbike">
                  <button className="border border-black rounded-xl p-2 hover:bg-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                  </svg>
                  </button>
                  </Link>
                  </div>

                  <div className="absolute top-1/2 right-0">
                  <Link href="/Blogs/Car">
                    <button className="border border-black rounded-xl p-2 hover:bg-green-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg>
                    </button>
                  </Link>                  
                  </div>                                
              </div>          
              
        </SwiperSlide>
        </Swiper>
      </div>
      </>
  );
};

export default Blogs;
