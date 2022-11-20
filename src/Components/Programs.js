import React from "react";
import ProImg from "../Assets/ProgramImg.jpg";
import { CiDumbbell } from "react-icons/ci";
import { FaRunning } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { RiHeartPulseLine } from "react-icons/ri";
import JoinNow from "./JoinNow";

import { motion as m } from "framer-motion";
const ProgramData = [
  {
    id: 0,
    img: <CiDumbbell />,
    title: "Strength Training",
    info: "In this program, you are trained to improve your strength through many excercises.",
  },
  {
    id: 1,
    img: <FaRunning />,
    title: "Cardio Training",
    info: "In this program, you are trained to sequential moves in range of 20 until 30 minutes.",
  },
  {
    id: 2,
    img: <AiFillFire />,
    title: "Fat Burning",
    info: "This program is suitable for you who wants to get rid of your belly fat and want to look younf young and feel young.",
  },
  {
    id: 3,
    img: <RiHeartPulseLine />,
    title: "Health Fitness",
    info: "In this program, you are trained to improve your overall cardiovascular strength along with some muscle building tips.",
  },
];
const Programs = () => {
  return (
    <div className="overflow-hidden">
      <m.div
        whileInView={{ x: "0%" }}
        initial={{ x: "-100%" }}
        transition={{ duration: 0.65, ease: "easeOut", staggerChildren: 0.3 }}
        exit={{ opacity: 1, x: "-100%" }}
        style={{ backgroundImage: `url(${ProImg})` }}
        className="  h-full w-full bg-cover bg-no-repeat bg-center "
      >
        <m.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ opacity: 0, y: '30%' }}
          transition={{ duration: .75, delay: 0.2 }}
          exit={{ opacity: 0 }}
          className="flex justify-between items-center flex-col md:flex-row px-24 italic">
          <h1 className="text-white text-2xl md:text-3xl font-bold">
            EXPLORE OUR
          </h1>
          <h1 className="text-amber-600 text-xl md:text-3xl lg:text-4xl my-4 font-bold">
            PROGRAMS
          </h1>
          <h1 className="text-white md:text-3xl font-bold">TO SHAPE YOU</h1>
        </m.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:pl-20 px-6">
          {ProgramData.map(({ id, img, title, info }) => (
            <m.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.80, delay: 0.4 }}
              exit={{ opacity: 0 }}
              key={id}
              className="text-white p-8 md:w-[80%]  lg:w-[25vw] border border-amber-600 my-2 "
            >
              <h1 className="text-2xl">{img}</h1>
              <h1 className="font-bold my-4">{title}</h1>
              <h3 className="text-gray-300">{info}</h3>
              <JoinNow />
            </m.div>
          ))}
        </div>

      </m.div>
    </div>
  );
};

export default Programs;
