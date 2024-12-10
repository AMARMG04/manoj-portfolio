import Link from "next/link";
import React from "react";

const Footer = () => {
  const Links = [
    {
      title: "Instagram",
      link: "https://www.instagram.com/the_boorish_mind/",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/manoj-mg-3350b6249/",
    },
  ];
  return (
    <div className="h-fit w-full bg-[#0b0b0b] dark:bg-neutral-800 p-10 lg:px-40">
        <div className="flex flex-row gap-10 justify-end items-center h-full text-white">
          {Links.map((link, index) => (
            <Link href={link.link} key={index} target="_blank">
              <p className="font-nohemi_m text-lg">{link.title}</p>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default Footer;
