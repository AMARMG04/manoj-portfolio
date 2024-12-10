import Link from "next/link";
import React from "react";

const Footer = () => {
  const Links = [
    {
      title: "Instagram",
      link: "",
    },
    {
      title: "LinkedIn",
      link: "",
    },
  ];
  return (
    <div className="h-20 w-full bg-[#0b0b0b] dark:bg-neutral-800 px-40">
        <div className="flex flex-row gap-10 justify-end items-center h-full text-white">
          {Links.map((link, index) => (
            <Link href={link.link} key={index}>
              <p className="font-nohemi_m text-lg">{link.title}</p>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default Footer;