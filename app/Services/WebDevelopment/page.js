import React from "react";

const WebDevelopment = () => {
  return (
    <>
      <div
        className=" p-4 flex justify-center items-center"
        style={{
          background:
            "linear-gradient(rgba(48, 129, 195, 0.7), rgba(17, 136, 184, 0.8))",
        }}
      >
        <div className="pt-8 sm:h-80 md:h-64 lg:h-72 xl:h-72">
          <h2 className="text-center font-semibold text-xl md:text-2xl xl:text-3xl text-white pt-10">
            WEB DEVELOPMENT
          </h2>
          <h4 className="text-white text-base md:text-lg xl:text-xl font-semibold text-center pt-1">
            "Elevate Your Online Presence with Our Web Solutions!"
          </h4>
          <p className="text-white text-center text-sm md:text-base xl:text-lg pt-8 xl:pt-14 px-3">
            Web development is the process of designing and building websites,
            from simple static pages to complex web applications. It involves a
            combination of technical skills, creativity, and problem-solving
            abilities to create dynamic and engaging websites that deliver a
            great user experience.
          </p>
        </div>
      </div>
      <div className="px-20">
        <p className="flex justify-center items-center text-start text-sm md:text-base xl:text-lg py-2 px-10">
          The web development process typically involves three main components:
          front-end development, back-end development, and web design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 py-4 px-10">
          <div>
            <h3 className="text-center text-xl md:text-2xl xl:text-3xl text-[#1789b3] font-bold my-2">
              Front-End Development
            </h3>
            <p className="text-justify text-sm md:text-base xl:text-lg mt-4">
              Front-end development, also known as client-side development, is
              the process of creating the user interface of a website or web
              application. This includes designing the layout, graphics, and
              text, as well as coding the HTML, CSS, and JavaScript that make
              the website interactive and responsive.
            </p>
            <p className="text-justify text-sm md:text-base xl:text-lg">
              Front-end developers use a variety of tools and frameworks, such
              as React, Vue, and Angular, to build dynamic and engaging user
              interfaces. They also ensure that the website is optimized for
              different devices and browsers, so that users can access the
              content easily and seamlessly.
            </p>
          </div>
          <div>
            <h3 className="text-center text-xl md:text-2xl xl:text-3xl text-[#1789b3] font-bold mt-2">
              Back-End Development
            </h3>
            <p className="text-justify text-sm md:text-base xl:text-lg mt-4">
              Back-end development, also known as server-side development, is
              the process of building the infrastructure and functionality that
              powers a website or web application. This includes coding the
              server-side scripts, databases, and APIs that store and process
              data, as well as managing the web server and hosting environment.
            </p>
            <p className="text-justify text-sm md:text-base xl:text-lg">
              Back-end developers use a variety of programming languages and
              frameworks, such as PHP, Python, Ruby, and Node.js, to build
              scalable and secure web applications. They also work closely with
              front-end developers to ensure that the website or application
              functions smoothly and efficiently.
            </p>
          </div>
        </div>

        <div className="py-8 px-10">
          <h3 className="text-center text-xl md:text-2xl xl:text-3xl text-[#1789b3] font-bold ">
            Web Design
          </h3>
          <p className="text-justify text-sm md:text-base xl:text-lg mt-2">
            Web design is the process of creating the visual and interactive
            elements of a website or web application. This includes designing
            the color scheme, typography, and layout, as well as creating the
            graphics, images, and multimedia content that enhance the user
            experience.
          </p>
          <p className="text-justify text-sm md:text-base xl:text-lg">
            Web designers use a variety of tools and techniques, such as
            Photoshop, Sketch, and Adobe XD, to create visually stunning and
            engaging websites. They also work closely with front-end developers
            to ensure that the design is optimized for different devices and
            screen sizes.
          </p>
        </div>

        <div className="conclusion px-10 py-5">
          <h4 className="text-center text-xl md:text-2xl xl:text-3xl text-[#1789b3] font-bold ">
            Conclusion{" "}
          </h4>
          <p className="text-justify text-sm md:text-base xl:text-lg mt-2">
            Web development is a complex and dynamic field that requires a
            combination of technical skills, creativity, and problem-solving
            abilities. Whether you're building a simple website or a complex web
            application, the key to success is to focus on delivering a great
            user experience that engages and delights your audience.
          </p>
          <p className="text-justify text-sm md:text-base xl:text-lg">
            If you're looking to build a website or web application, it's
            important to choose a web development team that has the expertise
            and experience to deliver a high-quality product. With the right
            team in place, you can create a dynamic and engaging website that
            stands out from the competition and delivers real value to your
            users.
          </p>
        </div>
      </div>
    </>
  );
};

export default WebDevelopment;
