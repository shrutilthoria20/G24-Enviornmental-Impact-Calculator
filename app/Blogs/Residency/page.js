"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { useEffect} from 'react';


const Blogs = () => {
  // const [data, setData] = useState('');

  // useEffect(() => {
  //   // Retrieve data from localStorage on component mount
  //   const storedData = localStorage.getItem('yourDataKey');
  //   if (storedData) {
  //     setData(storedData);
  //   }
  // }, []);

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   // Update state and localStorage when data changes
  //   setData(value);
  //   localStorage.setItem('yourDataKey', value);
  // };

  const [selectedValue, setSelectedValue] = useState();

  useEffect(() => {
    // Retrieve selected value from localStorage on component mount
    if (typeof window !== 'undefined') {
      // Retrieve selected value from localStorage on component mount
      const storedValue = localStorage.getItem('selectedRadioValue');
      if (storedValue) {
        setSelectedValue(storedValue);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    // Update selected value and store it in localStorage
    if (typeof window !== 'undefined') {
      setSelectedValue(value);
      localStorage.setItem('selectedRadioValue', value);
      console.log(value);
    }
  };
  return (
    <>
      <div className="relative justify-center cursor-pointer h-screen w-screen">
  <div className="flex items-center justify-center h-screen w-screen">
    <img
      src="/assets/images/Residency.png"
      alt="Blurred Image"
      className="w-screen h-screen object-fill"
    />
  </div>
  
  <div className="absolute inset-12">
    <div>
      <h2 className="text-slate-500 text-lg md:text-2xl xl:text-4xl text-center font-bold mt-10">
        Living Type
      </h2>
    </div>
    
    <div className="text-center">
      <p className="text-gray-700 text-base md:text-xl xl:text-2xl font-semibold mt-6 mb-6 px-10 lg:px-40">
        Which housing type best describes your home?
      </p>
      <div className="leading-tight font-semibold">
        <label className="inline-flex items-center space-x-2">
          <input type="radio" name="test" className="ml-1" value="Appartments" checked={selectedValue === 'Appartments'} onChange={handleChange}/> 
          Apartments
        </label>
        
        <label className="inline-flex items-center space-x-2">
          <input type="radio" name="test" className="ml-5" value="Terraced_House" checked={selectedValue === 'Terraced_House'} onChange={handleChange}/> 
          Terraced House
        </label>
        
        <label className="inline-flex items-center space-x-2">
          <input type="radio" name="test" className="ml-5" value="Hotels" checked={selectedValue === 'Hotels'} onChange={handleChange}/> 
          Hotels
        </label>
      </div>
    </div>
  </div>

  <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
  <Link href="/Blogs/Motorbike">
    <button className="border border-none rounded-full p-3  text-gray-800 font-semibold shadow-lg shadow-neutral-400 hover:shadow-green-800 transition duration-300 ease-in-out">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 hover:w-7 hover:h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  </Link>                  
</div>

</div>

      </>
  );
};

export default Blogs;
