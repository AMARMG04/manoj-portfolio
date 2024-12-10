import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center my-[120px] gap-4">
      <div className="flex ml-32 gap-5">
        <div className="flex flex-col items-center gap-4 relative">
          <Image
            src="/assets/profile.jpeg"
            alt="hero"
            width={2000}
            height={2000}
            className="w-40 h-40 top-1/2 left-1/2 rounded-full object-cover"
          />
          <h1 className="text-[24px] font-nohemi_m bg-gradient-to-r from-slate-400 to-cyan-900 text-transparent bg-clip-text">Software Developer</h1>
        </div>
        <div className="mt-4">
          <p className="text-stone-300 text-xl font-anderson_r">I AM</p>
          <p className=" text-4xl font-anderson_b bg-gradient-to-r from-zinc-100 to-cyan-700 text-transparent bg-clip-text">MANOJ</p>
        </div>
      </div>
      <div className="text-[58px] max-w-[1200px] text-center leading-tight">
        <p className="font-nohemi_sb bg-gradient-to-r from-neutral-400 dark:from-neutral-100 to-black dark:to-stone-700 text-transparent bg-clip-text">I develop premium websites using the power of modern web technologies.</p>
      </div>
    </div>
  );
};

export default Hero;
