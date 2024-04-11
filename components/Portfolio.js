import React from "react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="py-8">
      <div className="text">
        <h2 className="text-center text-xl md:text-3xl xl:text-5xl font-semibold py-2">
          Our Portfolio
        </h2>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10">
          <div className=" flex flex-col text-justify mb-0 max-w-sm shadow-2xl rounded-2xl cursor-pointer">
            <img
              src="https://images.pexels.com/photos/2442888/pexels-photo-2442888.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="rounded-lg "
              alt=""
            />

            <div className="relative flex flex-col justify-center overflow-hidden z-20 min-h-min bottom-[25px] border rounded-xl bg-white m-3">
              <h2 className="text-center py-1"> portfolio title </h2>
              <div className="flex gap-3 px-5 justify-center">
                <p className="tracking-wider border rounded-xl bg-slate-100 p-1 m-1">
                  React Js
                </p>
                <p className="tracking-wider border rounded bg-slate-100 p-1 m-1">
                  Node Js
                </p>
                <p className="tracking-wider border rounded bg-slate-100 p-1 m-1">
                  Android
                </p>
              </div>
            </div>
          </div>
          <div className="text-justify py-2 px-4 max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            consequuntur minus in voluptatum rerum dolore, quisquam quibusdam ut
            eveniet quis commodi nihil voluptatem.
            <div className="flex mt-3">
              <Link
                href="#"
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
          <div className="text-justify py-2 px-4 max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            consequuntur minus in voluptatum rerum dolore, quisquam quibusdam ut
            eveniet quis commodi nihil voluptatem.
            <div className="flex mt-3">
              <Link
                href="#"
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
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
