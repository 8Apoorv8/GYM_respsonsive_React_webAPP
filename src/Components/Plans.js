import React from "react";
import bg from "../Assets/plansBG.jpg";
import { FaHeartbeat } from "react-icons/fa";
import { RiVipCrownFill } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
import { TiTick } from "react-icons/ti";
import { motion as m } from "framer-motion";
const Plans = () => {
  const cards = [
    {
      id: 0,
      icon: <FaHeartbeat />,
      name: "BASIC PLAN",
      price: "$ 25",
      p1: (
        <p className="flex items-center">
          <TiTick />2 hrs of excercises
        </p>
      ),
      p2: (
        <p className="flex items-center">
          <TiTick />
          Free coach guiding
        </p>
      ),
      p3: (
        <p className="flex items-center">
          <TiTick />
          Acess to the Community
        </p>
      ),
      more: "see more Benfits",
    },
    {
      id: 1,
      icon: <RiVipCrownFill />,
      name: "PREMIUM PLAN",
      price: "$ 30",
      p1: (
        <p className="flex items-center">
          <TiTick />5 hrs of excercises
        </p>
      ),
      p2: (
        <p className="flex items-center">
          <TiTick />
          Free coach guiding
        </p>
      ),
      p3: (
        <p className="flex items-center">
          <TiTick />
          Acess minibar
        </p>
      ),
      more: "see more Benfits",
      style: `text-white scale-105 hover:scale-110`,
    },
    {
      id: 2,
      icon: <CgGym />,
      name: "PRO PLAN",
      price: "$ 45",
      p1: (
        <p className="flex items-center">
          <TiTick />8 hrs of excercises
        </p>
      ),
      p2: (
        <p className="flex items-center">
          <TiTick />
          Free Private Coach
        </p>
      ),
      p3: (
        <p className="flex items-center">
          <TiTick />
          Acess Merchendise
        </p>
      ),
      more: "see more Benfits",
    },
  ];
  return (
    <m.div
      transition={{ staggerChildren: 0.5, duration: 0.75 }}
      whileInView={{ x: "0", opacity: 1 }}
      initial={{ x: "-100%", opacity: 0 }}
      exit={{ x: "-100%", opacity: 0 }}
      className="text-white h-full w-full bg-cover bg-center bg-no-repeat p-14 lg:px-24"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <m.div
        whileInView={{ opacity: 1, y: "-0%" }}
        initial={{ opacity: 0, y: "100%" }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: "100%" }}
        className="TEXT text-2xl font-semibold flex flex-col justify-start items-center lg:flex-row lg:justify-between overflow-hidden"
      >
        <span className="md:text-3xl ">READY TO START</span>
        <span className="text-amber-600 my-2 lg:my-0 text-3xl md:text-5xl lg:text-6xl">
          YOUR JOURNEY
        </span>
        <span className="md:text-3xl "> WITH US</span>
      </m.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {cards.map(({ id, icon, name, price, p1, p2, p3, more, style }) => (
          <m.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            exit={{ opacity: 0 }}
            key={id}
            className={` p-8 md:p-14 my-3 hover:scale-105 transition-all duration-150 ease-in hover:cursor-pointer ${style} `}
          >
            <div className={`text-amber-600 text-4xl  ${style}`}>{icon}</div>
            <div className="font-bold my-4">{name}</div>
            <div className="font-bold text-5xl mb-4">{price}</div>
            <div>
              <ul className="text-gray-300">
                <li>{p1}</li>
                <li className="my-4">{p2}</li>
                <li>{p3}</li>
              </ul>
            </div>
            <div className="mt-4">{more}</div>
            <button className="mt-4 px-6 py-2 w-full bg-white text-black font-semibold max-w-xs hover:text-amber-600 transition-all duration-200">
              Join Now
            </button>
          </m.div>
        ))}
      </div>
    </m.div>
  );
};

export default Plans;
