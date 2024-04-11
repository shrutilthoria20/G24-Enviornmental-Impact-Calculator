import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Featuresdata = [
  {
    iconSrc: "/assets/images/features/agile-development.svg",
    title: "Agile Development",
    description:
      "We adhere to the Agile Development process, which enables us to deliver projects with the highest caliber and a strong product for flexible businesses.",
  },
  {
    iconSrc: "/assets/images/features/client-centric-development.svg",
    title: "Client Centric Development",
    description:
      "To cut the solutions and promote business growth, we craft the needs of the client on the web, mobile, and blockchain.",
  },
  {
    iconSrc: "/assets/images/features/data-backups.svg",
    title: "Data Backups",
    description:
      "Backups are the best options, and we cautiously maintain our clients' job backups to handle tragedies as best we can.",
  },
  {
    iconSrc: "/assets/images/features/data-protection.svg",
    title: "Data Protection",
    description:
      "Our business guarantees the highest level of security for all of your personal information by signing an NDA. We provide top-notch products in order to uphold anonymity.",
  },
  {
    iconSrc: "/assets/images/features/dedicated-development-team.svg",
    title: "Dedicated Development Team",
    description:
      "Our knowledgeable staff makes use of projects to deliver the best outcomes. The team puts all of their work into it and doesn't stop until it's finished.",
  },
  {
    iconSrc: "/assets/images/features/enhancement.svg",
    title: "Enhancement",
    description:
      "Our technical team is always available to offer ideas and changes during the Discovery, Designing, and Development phases to help them improve their product as much as possible.",
  },
  {
    iconSrc: "/assets/images/features/excellent-support.svg",
    title: "Excellent Support",
    description:
      "We are always available to help our customers in any way we can to meet their needs and expectations.",
  },
  {
    iconSrc: "/assets/images/features/quality.svg",
    title: "Quality Deliverance",
    description:
      "By ensuring that all of their job requirements are met at the most competitive price in the industry, we believe in providing our clients with high-quality products.",
  },
];

const Features = () => {
  return (
    <div className="py-6">
      <div
        className="bg-cover bg-no-repeat py-4"
        style={{
          background:
            "linear-gradient(rgba(2, 2, 2, 0.5), rgba(0, 0, 0, 0.8)), url(/assets/images/bacgrnd.jpg)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="text">
          <h2 className="text-center text-white font-semibold text-xl md:text-2xl xl:text-5xl my-3">
            Our Key Features
          </h2>
          <p className="text-white text-md md:text-lg xl:text-2xl text-center mt-3 mb-3">
            Services That We Deliver Makes Us Dignified As One of The Top App
            Development Companies.
          </p>
        </div>
        <div className="row no-gutters">
          <div className="flex justify-center items-center">
            <Swiper
              grabCursor={true}
              slidesPerView={5}
              spaceBetween={30}
              autoplay={true}
              speed={1000}
              loop={true}
              modules={[Autoplay]}
              freeMode={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {Featuresdata.map((feature, index) => (
                <SwiperSlide key={index} className="py-6 px-4 ">
                  <div className="flex flex-col  items-center rounded-lg shadow-lg border-0 max-w-[20rem] md:max-w-[19rem] h-[20rem] bg-[#1789b3] mx-4 lg:mx-0 px-2 py-2 md:px-4 md:py-2 xl:px-8 xl:py-4">
                    <img
                      src={feature.iconSrc}
                      alt=""
                      className="h-12 w-12 xl:h-10 xl:w-10 mt-2 self-center"
                    />
                    <h4 className="text-md md:text-md xl:text-lg font-semibold my-3 text-center">
                      <a href="#" className="text-white">
                        {feature.title}
                      </a>
                    </h4>
                    <p className="text-white text-justify">
                      {feature.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
