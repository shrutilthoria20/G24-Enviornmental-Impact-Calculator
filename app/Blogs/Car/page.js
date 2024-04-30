"use client";
import React, { useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import RangeSlider from "../Silder/page";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const usePersistentState = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    // Check if window is defined (i.e., if the code is running on the client side)
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? storedValue : defaultValue;
    }
    // If window is not defined (e.g., during server-side rendering), return default value
    return defaultValue;
  });

  const handleChange = (newValue) => {
    // const parsedValue = !isNaN(newValue) ? parseInt(newValue, 10) : newValue;
    if (typeof window !== 'undefined') {
      setValue(newValue);
      localStorage.setItem(key, newValue);
    }
    // console.log('Key: ',key,'value: ',parsedValue);
  };


  return [value, handleChange];
};


const Blogs = () => {
  const [Car_Radio, setSelectedRadio] = usePersistentState('Car_Radio', );
  const [Car_Range, setSelectedRange] = usePersistentState('Car_Range', 0);

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };

  const handleRangeChange = (e) => {
    setSelectedRange(parseInt(e.target.value, 10));
  };


  return (
    <>
            <div className="relative justify-center cursor-pointer h-screen w-screen">      
          <div className="flex items-center justify-center h-screen w-screen">
              <img
                src="/assets/images/Car.jpg"
                alt="Blurred Image"
                className="w-screen h-screen object-fill"
              />
            </div>
            <div  className="absolute inset-12">
              <div>
                <h2 className="text-slate-500 text-lg md:text-2xl xl:text-4xl text-center font-bold mt-10">
                  Car footprint
                </h2>              
              </div>
              <div className="text-center">
                <p className="text-gray-700 text-base md:text-xl xl:text-2xl font-semibold mt-6 mb-6 px-10 lg:px-40">
                  Which type of fuel economy of the vehical you use ? 
                </p>
                <div class="leading-tight font-semibold">
                  <label class="inline-flex items-center space-x-2">
                      <input type="radio" name="Car_Radio" class="ml-1" value="Diesel" checked={Car_Radio === 'Diesel'} onChange={handleRadioChange}/> 
                      Diesel
                  </label>
                  <label class="inline-flex items-center space-x-2">
                      <input type="radio" name="Car_Radio" class="ml-5" value="Petrol" checked={Car_Radio === 'Petrol'} onChange={handleRadioChange}/> 
                      Petrol
                  </label>
                  <label class="inline-flex items-center space-x-2">
                      <input type="radio" name="Car_Radio" class="ml-5" value="Bio-Fuel" checked={Car_Radio === 'Bio-Fuel'} onChange={handleRadioChange}/> 
                      Bio-Fuel
                  </label>
                  <label class="inline-flex items-center space-x-2">
                      <input type="radio" name="Car_Radio" class="ml-5" value="Electric" checked={Car_Radio === 'Electric'} onChange={handleRadioChange}/> 
                      Electric
                  </label>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-700 text-base md:text-xl xl:text-2xl font-semibold mt-6 mb-6 px-10 lg:px-40">
                  How far do you travel by car per week ? 
                </p>
                <div className="flex flex-col items-center mt-8">
      <div className="flex justify-between w-64 text-gray-600">
        <span>0</span>
        <input
          type="range"
          min="0"
          max="800"
          step="1"
          name="Motor_Range"
          value={Car_Range}
          onChange={handleRangeChange}
          className="slider appearance-none w-64 h-2 bg-gray-300 rounded-full outline-none"
        />
        <span>800</span>
      </div>
      <span className="mt-2 text-gray-700">{Car_Range} kms</span>
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
                <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
                  <Link href="/Blogs/SelfTransport">
                    <button className="border border-none rounded-full p-3  text-gray-800 font-semibold shadow-lg shadow-neutral-400 hover:shadow-red-800 transition duration-300 ease-in-out">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 hover:w-7 hover:h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                      </svg>
                    </button>
                  </Link>
                </div>

                <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
                  <Link href="/Blogs/PublicTransport">
                    <button className="border border-none rounded-full p-3  text-gray-800 font-semibold shadow-lg shadow-neutral-400 hover:shadow-green-800 transition duration-300 ease-in-out">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 hover:w-7 hover:h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  </Link>                  
                </div>                                
              </div>

                 
      </div>
      </>
  );
};

export default Blogs;
