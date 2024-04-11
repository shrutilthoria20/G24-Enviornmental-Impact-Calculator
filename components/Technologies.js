import Link from "next/link";
import React, { useState } from "react";
import TechData from "@/app/data/techdata";

const Technologies = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getGridClass = (tabCount) => {
    if (tabCount < 6) {
      return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4"; // Use 4 columns if there are less than 6 tabs
    } else {
      // Define other grid classes based on your responsive design
      return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6";
    }
  };

  return (
    <div className="py-10 flex items-center flex-col">
      <div className="text">
        <h2 class="text-center text-xl md:text-3xl xl:text-5xl my-3">
          Technologies We Work On
        </h2>
      </div>
      <div className="container flex flex-col justify-center ">
        {/* Nav pills */}
        <ul
          className="flex flex-wrap items-center justify-center border-transparent"
          style={{
            transition: "color 0.15s ease-in-out",
            transition: "background-color 0.15s ease-in-out",
          }}
        >
          {Object.keys(TechData).map((tab) => (
            <li className="p-4 cursor-pointer bg-white" key={tab}>
              <a
                className={`text-[#ccc] ${
                  activeTab === tab
                    ? "active text-[#1f1f1f] !important border-b-2 outline-none px-2 border-b-[#1789b3] !important"
                    : ""
                }`}
                role="tab"
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
        <hr />

        {/* Tab panes */}
        <div className="flex justify-center items-center">
          <div
            className={`grid ${getGridClass(TechData[activeTab].length)} gap-4`}
          >
            {TechData[activeTab].map((tech, tab) => (
              <div
                key={tab}
                className={`flex flex-col ${
                  activeTab === tab ? "show active" : ""
                } items-center justify-center flex-wrap`}
                role="tabpanel"
              >
                <div className="px-4 py-8 flex flex-wrap">
                  <div className="flex flex-col items-center">
                    <img
                      src={tech.imgSrc}
                      alt={tech.imgAlt}
                      width="50px"
                      height="50px"
                    />
                    <p className="flex mt-2 text-center">{tech.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
