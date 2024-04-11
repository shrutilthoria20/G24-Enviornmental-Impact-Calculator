"use client";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <>
      <div
        className=" p-12"
        style={{
          background:
            "linear-gradient(rgba(48, 129, 195, 0.7), rgba(17, 136, 184, 0.8))",
        }}
      >
        <div className="p-3">
          <h2 className="text-center font-semibold text-xl md:text-2xl xl:text-3xl text-white pt-7">
            {" "}
            ABOUT US{" "}
          </h2>
          <h4 className=" text-white text-base md:text-lg xl:text-xl font-semibold text-center pt-1 pb-4">
            {" "}
            "Unlocking the Power of Safety, One Habit at a Time"{" "}
          </h4>
        </div>

        <p className="text-white text-sm md:text-base xl:text-lg text-justify pt-lg-5 pb-3 px-3">
        The Environment Impact Calculator is a tool designed to help individuals understand 
        and assess their daily environmental footprint. By gathering information on energy 
        consumption and transportation habits, the calculator offers insights into the 
        environmental impact of these activities. The system operates by collecting records 
        from the community, processing and standardizing this data using PySpark, and then 
        presenting it through a user-friendly interface built with React.js. Behind the scenes, 
        a robust Python backend ensures accurate calculations, delivering precise feedback 
        on users' environmental contributions. This initiative serves as a practical approach 
        to promote awareness and encourage sustainable living practices.
        </p>
      </div>
     {/*} <div className="flex justify-center items-center">
        <div className="py-8 px-10">
          <div>
            <h3 className="text-center font-semibold text-xl md:text-2xl xl:text-3xl mb-5">
              {" "}
              Our Services{" "}
            </h3>
            <div className="p-2 ">
              <div className="flex">
                <BsFillCheckCircleFill size={16} className="mt-2 mx-1" />
                <b>Car pollution:</b>{" "}
              </div>
              <div className="ms-6 text-justify text-sm md:text-base">
              Car pollution is when cars release harmful gases and particles into the air. 
              These pollutants come from burning fuel like gasoline or diesel in car engines. T
              hey can cause health problems for people and damage the environment. To reduce car pollution, 
              we can use cleaner fuels, drive less, and choose electric or hybrid cars.
              </div>
              <br />
              <div className="flex">
                <BsFillCheckCircleFill size={16} className="mt-2 mx-1" />
                <b>Flight pollution: </b>
              </div>
              <div className="ms-6 text-justify text-sm md:text-base">
              Flight pollution is the pollution caused by airplanes when they fly through the air. 
              These planes emit gases and particles into the atmosphere, contributing to global warming 
              and poor air quality. The gases released by planes, like carbon dioxide and nitrogen oxides, 
              trap heat in the atmosphere, leading to climate change. Additionally, the particles released 
              can affect human health and the environment. Flight pollution is a significant concern because 
              air travel is a major contributor to greenhouse gas emissions worldwide.
              </div>
              <br />
              <div className="flex">
                <BsFillCheckCircleFill size={16} className="mt-2 mx-1" />
                <b>Motorbike pollution</b>{" "}
              </div>
              <div className="ms-6 text-justify text-sm md:text-base">
              Motorbike pollution is when motorcycles release harmful substances into
              the air, like gases and particles, which can cause environmental and health
              problems. These pollutants come from the exhaust pipes of motorbikes and 
              contribute to air pollution, which can make the air we breathe dirty and 
              harmful to our health. To reduce motorbike pollution, using cleaner fuels,
              maintaining vehicles properly, and promoting alternative transportation 
              methods like cycling or public transit 
              can help lessen its impact on the environment and our well-being.
              </div>
              <br />
              <div className="flex">
                <BsFillCheckCircleFill size={16} className="mt-2 mx-1" />
                <b>Public transport pollution:</b>{" "}
              </div>
              <div className="ms-6 text-justify text-sm md:text-base">
              Public transport pollution refers to the harmful substances released 
              into the air from buses, trains, and other forms of public transportation. 
              These pollutants, like carbon dioxide and nitrogen oxides, come from burning
               fuels like diesel and gasoline. When lots of people use public transport, 
               it can create a lot of pollution, which is bad for the environment and our health. 
               It's important to find ways to reduce this pollution, like using cleaner fuels or 
               switching to electric vehicles, 
              to make our cities cleaner and healthier places to live.
              </div>
              <br />
              <div className="flex">
                <BsFillCheckCircleFill size={16} className="mt-2 mx-1" />
                <b>Self transport pollution:</b>{" "}
              </div>
              <div className="ms-6 text-justify text-sm md:text-base">
              Self-transport pollution happens when we use our cars, bikes, 
              or other vehicles, and it creates dirty stuff that harms the air we breathe. 
              This pollution comes from the exhaust of our vehicles, like the smoke that comes
               out of the back of a car. It's bad because it adds to the pollution already in 
               the air, making it harder for us to breathe and causing health problems. To help 
               reduce self-transport pollution, we can use cleaner modes of transportation like walking, 
              biking, or using public transportation more often
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>*/}
    </>
  );
};

export default About;
