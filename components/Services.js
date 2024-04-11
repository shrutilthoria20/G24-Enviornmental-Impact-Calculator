import React from "react";
import servicesData from "@/app/data/servicesdata";
import Link from "next/link";

const Services = () => {
  return (
    <div className="py-8">
      <div className="text">
        <h2 className="text-center text-xl md:text-3xl xl:text-5xl font-semibold py-2">
          Services We Offer
        </h2>
      </div>
      <div className="flex justify-center items-center py-1">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 mt-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg max-w-sm max-h-full justify-center"
              style={{ boxShadow: "3px 3px 6px 6px rgb(0 0 0 / 0.1)" }}
            >
              <div className="flex items-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-12 h-12 mr-3"
                />
                <h4 className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-[#1789b3]">
                  {service.title}
                </h4>
              </div>
              <p className="text-xs md:text-sm xl:text-base mt-3 py-3 text-gray-600 text-justify">
                {service.description}
              </p>

              <div className="flex mt-3">
                <Link
                  href={service.link}
                  className="relative bottom-1 text-white inline-block transition ease-in rounded px-10 py-2"
                  style={{
                    background:
                      "linear-gradient(to bottom, #1789b3 0%, #3d83df 100%)",
                  }}
                >
                  Read More
                  <img
                    src="/assets/images/services/arrow-right-white-button.svg"
                    className="absolute ms-2 bottom-3 right-2"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
