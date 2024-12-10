"use client";
import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CgClose, CgMenu } from "react-icons/cg";

const Navbar = () => {
  const pathname = usePathname();
  const Navlinks = [
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1-daT6r4MdvSm6W72mQjMk7Ej-ciS1060/view?usp=sharing",
    },
    // {
    //   label: "Projects",
    //   href: "/projects",
    // },
    {
      label: "Blogs",
      href: "/blogs",
    },
  ];

  const [selectMenu, setSelectMenu] = useState(false);

  const toggleSelectMenu = () => {
    setSelectMenu(!selectMenu);
  };

  return (
    <>
      <div className="flex justify-between items-center mt-8 lg:mt-16 mx-6 lg:mx-40">
        <h2 className="text-3xl font-abster">
          <Link href="/">M</Link>
        </h2>
        <div className="hidden lg:flex items-center gap-10">
          {Navlinks.map((link) => (
            <a
              href={`${link.href}`}
              key={link.href}
              className="font-nohemi_m text-lg"
            >
              {link.label}
            </a>
          ))}
          <ThemeSwitch></ThemeSwitch>
        </div>
        <div className="flex gap-8 items-center lg:hidden">
        <ThemeSwitch></ThemeSwitch>
        <CgMenu size="2em" onClick={toggleSelectMenu}/>
          {selectMenu && (
            <div
              className={
                selectMenu
                  ? "absolute bottom-0 right-0 top-0 z-10 h-[100%] flex flex-col gap-4 text-white backdrop-blur-2xl bg-black/40 w-[300px] pr-6 pt-8 ease-in duration-200"
                  : "absolute bottom-0 right-0 hidden top-0 z-10 h-screen flex-col gap-4 text-white backdrop-blur-2xl bg-black/40 w-[300px] pr-6 pt-8 ease-in duration-200"
              }
            >
              <div className="flex flex-col justify-end items-end gap-10 w-full">
              <CgClose size="2em" onClick={toggleSelectMenu}/>

                <div className="flex flex-col gap-8 items-end">
                  {Navlinks.map((link, index) => (
                    <Link
                      href={link.href}
                      key={index}
                      className={`relative font-medium text-2xl ${
                        pathname === link.href
                          ? `underline decoration-wavy underline-offset-8`
                          : ` underline-offset-8 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:top-7 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`
                      }`}
                      onClick={toggleSelectMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
                  
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
