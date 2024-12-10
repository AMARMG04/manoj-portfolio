import Image from "next/image";
import Hero from "./components/Hero";
import Specialization from "./components/Specialization"
import Marquee from "./components/Marquee"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <div className="mt-16 mx-40">
        <Hero />
      </div>
      <Marquee></Marquee>
      <div className="mt-16 mx-40">
        <Specialization></Specialization>
      </div>
      <Footer></Footer>
    </>
  );
}
