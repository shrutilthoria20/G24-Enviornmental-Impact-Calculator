"use client";
import React from "react";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <>
      <div
        className=" p-12"
        style={{
          background:
            "linear-gradient(rgba(48, 129, 195, 0.7), rgba(17, 136, 184, 0.8))",
        }}
      >
        <h2 className="text-center font-bold text-xl md:text-2xl xl:text-3xl text-white p-7">
          CONTACT US{" "}
        </h2>
        <h4 className="text-white text-base md:text-lg xl:text-xl font-semibold text-center p-1">
          Ready to tranform your ideas into reality?
        </h4>

        <p className="text-white text-base md:text-lg xl:text-xl font-semibold text-center m-2">
          {" "}
          Get in touch with us today to discuss your Software development needs.
          Whether you have a specific project in mind or need guidance on the
          best approach, our team is here to assist you. Let's embark on a
          journey of innovation and success together.{" "}
        </p>
      </div>
      <div className="px-20">
        <div className="flex items-center my-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.2948090859168!2d72.63141007409892!3d23.195924409839225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b627ec2abd5%3A0xd21e1ee3027ad69e!2sCodeHabbit!5e0!3m2!1sen!2sin!4v1687170045962!5m2!1sen!2sin"
            width="100%"
            height="400px"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-1">
          <div className="px-8 py-6">
            <h3 className="text-xl md:text-2xl xl:text-3xl text-start font-semibold pl-3 capitalize text-[#1789b3] mb-8 ">
              Get In Touch
            </h3>
            <div className="flex flex-col">
              <div className="flex gap-10">
                <div className="flex space-x-6">
                  <div className="text-[#1789b3] flex items-center justify-center w-10 h-10 md:w-14 md:h-14 text-lg bg-none md:bg-[#f9e0e0] hover:bg-[#1789b3] rounded-full cursor-pointer hover:text-white">
                    <FaLocationDot
                      className="hover:bg-[#1789b3] duration-300 text-sm md:text-base lg:text-lg"
                      style={{ borderRadius: "50px" }}
                    />
                  </div>

                  <span className="font-semibold flex justify-center text-base md:text-lg lg:text-xl ">
                    Location:
                  </span>
                </div>
                <p className=" text-sm md:text-base lg:text-lg text-[#3d3e45] text-justify">
                  421/D, 4th floor, Super Mall 1,
                  <br />
                  Infocity, Gandhinagar, <br />
                  Gujarat, India - 382007.
                </p>
              </div>
              <div className="flex gap-16">
                <div className="flex space-x-6">
                  <div className="text-[#1789b3] flex items-center justify-center w-10 h-10 md:w-14 md:h-14  text-lg bg-none md:bg-[#f9e0e0] hover:bg-[#1789b3] rounded-full cursor-pointer hover:text-white">
                    <FaEnvelope
                      className="hover:bg-[#1789b3] duration-300 text-sm md:text-base lg:text-lg "
                      style={{ borderRadius: "50px" }}
                    />
                  </div>
                  <span className="font-semibold justify-center text-base lg:text-xl mt-1 me-6">
                    Email:
                  </span>
                </div>
                <p className=" text-sm lg:text-lg text-[#3d3e45] mt-2 me-32">
                  info@codehabit.in
                </p>
              </div>
              <div className="flex pt-4 gap-20">
                <div className="flex space-x-6">
                  <div className="text-[#1789b3] flex items-center justify-center w-10 h-10 md:w-14 md:h-14  text-lg bg-none md:bg-[#f9e0e0] hover:bg-[#1789b3] rounded-full cursor-pointer hover:text-white">
                    <FaMobileAlt
                      className="hover:bg-[#1789b3] duration-300 text-sm md:text-base lg:text-lg m-1"
                      style={{ borderRadius: "50px" }}
                    />
                  </div>
                  <span className="font-semibold text-base lg:text-xl mt-1 me-10">
                    Call:
                  </span>
                </div>
                <p className=" text-sm lg:text-lg pb-4 text-[#3d3e45] me-28">
                  +919714322345
                </p>
              </div>
            </div>
          </div>
          <div>
            <form
              action=""
              className="px-10 py-6 border rounded m-8 me-5 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 justify-between">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Full Name*"
                  className="py-2 px-2 me-6 border-b my-3 outline-none "
                />
                <input
                  type="number"
                  name=""
                  id=""
                  s
                  placeholder="Contact number*"
                  className="py-2 px-2 outline-none border-b my-3  "
                />
              </div>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email*"
                className="py-2 px-2 w-full outline-none border-b my-3  "
              />

              <textarea
                name=""
                id=""
                cols="20"
                rows="5"
                placeholder="Comment Here*"
                className="py-2 px-2  w-full outline-none border-b my-3 "
              ></textarea>
              <div className="flex justify-center items-center">
                <button className="rounded-full bg-[#1789b3] align-center justify-center text-center px-6 py-2 text-white text-lg font-semibold hover:text-[#1789b3] hover:border-2 border-[#1789b3] hover:bg-white duration-300">
                  {" "}
                  Send Message{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
