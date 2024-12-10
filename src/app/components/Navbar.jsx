import React from "react"
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const Navlinks = [
    {
      label:"Resume", 
      href: "https://drive.google.com/file/d/1-daT6r4MdvSm6W72mQjMk7Ej-ciS1060/view?usp=sharing"
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
  return (
    <>
      <div className="flex justify-between items-center mt-16 mx-40">
        <h2 className="text-3xl font-abster"><Link href='/'>M</Link></h2>

        <div className="flex items-center gap-10">
          {Navlinks.map((link) => (
            <a href={`${link.href}`} key={link.href} className="font-nohemi_m text-lg">
              {link.label}
            </a>
          ))}
          <ThemeSwitch></ThemeSwitch>
        </div>
      </div>
    </>
  );
};

export default Navbar;
