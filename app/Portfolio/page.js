import React from "react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="py-8">
      <div className="text">
        <h2 className="text-center text-xl md:text-3xl xl:text-5xl font-bold py-2">
          Our Portfolio
        </h2>
      </div>
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10 py-6">
          <div className="flex mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            nisi quaerat tempore molestias deleniti alias, corrupti odit
            sapiente aperiam consequatur repellat quibusdam exercitationem!
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
          <div className="flex mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            nisi quaerat tempore molestias deleniti alias, corrupti odit
            sapiente aperiam consequatur repellat quibusdam exercitationem!
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
          <div className="flex mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            nisi quaerat tempore molestias deleniti alias, corrupti odit
            sapiente aperiam consequatur repellat quibusdam exercitationem!
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
  );
};

export default Portfolio;
