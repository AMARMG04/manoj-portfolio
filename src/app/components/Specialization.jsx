import React from "react";
import Image from "next/image";

const Specialization = () => {
  const solutions = [
    {
      title: "Full-Stack Development",
      image: "/assets/full-stack.svg",
      content:
        "Building robust web applications with seamless frontend and backend integration using the MERN stack and beyond.",
    },
    {
      title: "Mobile App Development",
      image: "/assets/mobile.png",
      content:
        "Creating high-performance, cross-platform mobile applications with modern tools like React Native.",
    },
    {
      title: "AI-Powered Solutions",
      image: "/assets/AI.png",
      content:
        "Developing intelligent applications powered by AI for efficient task management, natural language processing, and more.",
    },
    {
      title: "IoT & Edge Computing",
      image: "/assets/iot.png",
      content:
        "Innovating with IoT and edge technologies to deliver real-time solutions for a smarter world.",
    },
  ];
  return (
    <div className="my-20">
      <h1 className="text-center text-[32px] lg:text-[48px] font-nohemi_m bg-gradient-to-br from-neutral-400 dark:from-neutral-100 to-black dark:to-stone-700 text-transparent bg-clip-text">
        Crafting Solutions, My Way
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-8">
        {solutions.map((solution, index) => (
          <div
            className="relative min-h-[400px] rounded-3xl shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_5px_25px_-15px_rgba(250,250,250,0.5)]"
            key={index}
          >
            <div className="absolute top-[70px] lg:top-[100px] px-10 py-4 text-xl flex flex-col justify-between space-y-4">
              <Image
                src={solution.image}
                key={index}
                alt="image"
                width={1000}
                height={1000}
                className="w-20 h-20"
              />
              <h1 className="text-xl lg:text-2xl font-nohemi_m">
                {solution.title}
              </h1>
              <p className="text-[18px] lg:text-md font-dm_sans dark:text-white font-semibold">
                {solution.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialization;
