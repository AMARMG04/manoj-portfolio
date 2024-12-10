import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center my-[120px] gap-4">
      <div className="flex  lg:gap-5">
        <div className="flex flex-col justify-center items-center gap-4 relative ">
          <Image
            src="/assets/profile.jpeg"
            alt="hero"
            width={2000}
            height={2000}
            className="w-[100px] lg:w-40 lg:h-40 rounded-full object-cover ml-20 lg:ml-32"
          />
          <h1 className="ml-[70px] lg:ml-32 text-[18px] lg:text-[24px] font-nohemi_m bg-gradient-to-r from-slate-400 to-cyan-900 text-transparent bg-clip-text">Software Developer</h1>
        </div>
        <div className="mt-4">
          <p className="text-stone-300 text-xl font-anderson_r">I AM</p>
          <p className=" text-2xl lg:text-4xl font-anderson_b bg-gradient-to-r from-zinc-100 to-cyan-700 text-transparent bg-clip-text">MANOJ</p>
        </div>
        
      </div>
      <div className="text-[32px] lg:text-[58px] max-w-[1200px] text-center leading-tight">
        <p className="font-nohemi_m bg-gradient-to-r from-neutral-400 dark:from-neutral-100 to-black dark:to-stone-700 text-transparent bg-clip-text">I develop premium websites using the power of modern web technologies.</p>
      </div>
    </div>
  );
};

export default Hero;
