import React from "react";

const Process = () => {
  const processSteps = [
    {
      title: "1. Requirement Gathering",
      image: "/assets/images/process/requirementgather.jpg",
      description:
        "To start our job, we adhere to the top goal of gathering requirements, resources, and information.",
    },
    {
      title: "2. UI/UX Design",
      image: "/assets/images/process/ui-uxdesign.png",
      description:
        "We use the most up-to-date design resources to produce eye-catching and endearing models to make it the best user-friendly experience.",
    },
    {
      title: "3. Prototype",
      image: "/assets/images/process/protoptype.png",
      description:
        "You will receive your prototype after designing, which will be sent forward for the product development process.",
    },
    {
      title: "4. Development",
      image: "/assets/images/process/development.png",
      description:
        "You will receive your prototype after designing, which will be sent forward for the product development process.",
    },
    {
      title: "5. Quality Assurance",
      image: "/assets/images/process/qa.jpg",
      description:
        "CodeHabit places a high value on quality and offers 100 % bug-free software with no compromises.",
    },
    {
      title: "6. Deployment",
      image: "/assets/images/process/deployment.jpg",
      description:
        "Your software is prepared to launch on the App store or Play Store after a trial and following all procedures.",
    },
    {
      title: "7. Support & Maintenance",
      image: "/assets/images/process/support.jpg",
      description:
        "Our business provides you with all the support you need, and after implementation, the team is always available to respond to any questions.",
    },
  ];

  return (
    <div className="py-5">
      <div className="text">
        <h2 className="text-center font-semibold text-xl md:text-3xl xl:text-5xl">
          Process We Follow
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 py-4 gap-6 px-0 mt-15 lg:px-5 xl:px-10  items-center justify-center">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="rounded-lg p-6 px-4 py-10 max-w-xs"
              style={{ boxShadow: "3px 3px 6px 6px rgb(0 0 0 / 0.1)" }}
            >
              <div className="flex items-center justify-center flex-col xl:m-5 h-48">
                <img
                  src={step.image}
                  alt={step.title}
                  className=" mr-3 mb-3 w-12 h-12"
                />
                <h5 className="m-0 text-[#1789b3] text-base xl:text-xl font-semibold">
                  {step.title}
                </h5>
                <div>
                  <p className="text-base py-2 text-justify">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
