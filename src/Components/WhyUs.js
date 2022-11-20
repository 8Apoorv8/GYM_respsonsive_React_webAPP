import React from "react";
import bg from "../Assets/whyUS3.jpg";
import sub1 from "../Assets/whyusSub1.jpg";
import sub2 from "../Assets/whyusSub2.jpg";
import sub3 from "../Assets/whyusSub3.jpg";
import sub4 from "../Assets/whyusSub4.jpg";
import { TiTickOutline } from "react-icons/ti";
import { SiMotorola, SiNokia } from "react-icons/si";
import { AiOutlineApple } from "react-icons/ai";
import { motion as m } from "framer-motion";
const WhyUs = () => {
  const points = [
    { id: 0, icons: <TiTickOutline />, info: "OVER 140+ EXPERT COACHES" },
    {
      id: 1,
      icons: <TiTickOutline />,
      info: "TRAIN SMARTER AND FASTER THAN BEFORE",
    },
    { id: 2, icons: <TiTickOutline />, info: "1 FREE PROGRAM FOR NEW MEMBERS" },
    { id: 3, icons: <TiTickOutline />, info: "RELIABLE PARTNERS" },
  ];
  return (
    <m.div
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.65, ease: "easeOut", staggerChildren: 0.5 }}
      exit={{ x: "-100%", opacity: 0 }}
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center h-screen w-full sticky p-10 flex flex-col lg:flex-row justify-center lg:justify-between items-center overflow-hidden"
    >
      <m.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 3 }}
        exit={{ opacity: 0 }}
        className="LEFT text-white "
      >
        <div>
          <p className="text-xl text-amber-600 font-semibold">SOME REASONS</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl my-3">
            WHY CHOOSE US?
          </h1>
          {points.map(({ id, icons, info }) => (
            <div key={id} className="flex items-center">
              <span className="text-amber-600 text-3xl">{icons}</span>
              <p className="font-semibold leading-7 ">{info}</p>
            </div>
          ))}
        </div>
        <div className="MIDDLE flex flex-col text-gray-400 mt-6">
          <p className="text-2xl">Our Partners </p>
          <div className="flex my-4 text-3xl items-center">
            <SiMotorola className=" hover:cursor-pointer" />
            <AiOutlineApple className="ml-3  hover:cursor-pointer" />
            <SiNokia className="ml-3 text-5xl hover:cursor-pointer" />
          </div>
        </div>
      </m.div>

      <div className="RIGHT flex  h-[70vh] w-[60%]">
        <img src={sub3} alt="" className="hidden lg:block" />
        <div className="flex flex-col ml-2">
          <img src={sub2} alt="" className="h-[35vh] lg:mb-3 " />
          <div className="lg:flex h-[34vh]  hidden">
            <img src={sub1} alt="" className="w-[50%] mr-3" />
            <img src={sub4} alt="" className="w-[47%]" />
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default WhyUs;
