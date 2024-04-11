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
                src="/assets/images/Residency.png"
                alt="Blurred Image"
                className="w-full blur-sm"
              />
            </div>
                      
            <div  className="absolute inset-12">
              
              <div>
                <h2 className="text-slate-500 text-lg md:text-2xl xl:text-4xl text-center font-bold mt-10">
                  Living Type
                </h2>              
              </div>
              <div className="text-center">
                <p className="text-gray-700 text-base md:text-xl xl:text-2xl font-semibold mt-6 mb-6 px-40 ">
                  Which housing type best describes your home ?
                </p>
                <div class="leading-tight font-semibold">
        
                  <label class="inline-flex items-center space-x-2">
                      <input type="radio" name="test" class="ml-1" value="Appartments" checked={selectedValue === 'Appartments'} onChange={handleChange}/> 
                      Appartments
                  </label>
                  <label class="inline-flex items-center space-x-2">
                      <input type="radio" name="test" class="ml-5" value="Terraced_House" checked={selectedValue === 'Terraced_House'} onChange={handleChange}/> 
                      Terraced_House
                  </label>
                  <label class="inline-flex items-center space-x-2">
                      <input type="radio" name="test" class="ml-5" value="Hotels" checked={selectedValue === 'Hotels'} onChange={handleChange}/> 
                      Hotels
                  </label>                  
                </div>

                

              </div>      
              
              </div>
              <div className="">
              {/* <div className="float-left">
                <Link href="/Blogs/Flight">
                <button className="border border-black rounded-xl p-2 hover:bg-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                </svg>
                </button>
                </Link>
                </div> */}

                <div className="absolute top-1/2 right-0">
                <Link href="/Blogs/Motorbike">
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
