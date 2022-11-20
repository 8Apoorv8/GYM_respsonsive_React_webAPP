import React from "react";
import { BsHeartFill } from "react-icons/bs";
import BackImg from "../Assets/GymHomepage.jpg";
import { motion as m } from "framer-motion";


const Hero = () => {
  return (
    <div className="overflow-hidden">
      <m.div
        whileInView={{ y: "0%" }}
        initial={{ y: "40%" }}
        transition={{ duration: 0.75, ease: "easeOut", staggerChildren: 0.3 }}
        exit={{ opacity: 1 }}
        style={{ backgroundImage: `url(${BackImg})` }}
        className="h-screen bg-cover bg-no-repeat bg-center px-6 md:px-10 "
      >
        <div className="text-white flex flex-col md:flex-row h-screen md:items-center md:justify-between relative top-32 md:top-0  w-full">
          <m.div whileInView={{ x: 0 }}
            initial={{ x: "-100%" }}
            transition={{ duration: 0.65, delay: 0.3 }}
            exit={{ x: "-100%" }}

            className="LEFT md:w-[72%] ">
            <h3 className="py-2 md:text-2xl lg:text-3xl">
              THIS IS THE BEST CLUB IN THE TOWN.
            </h3>
            <h1 className="my-4 text-3xl md:text-5xl lg:text-8xl font-bold">
              SHAPE YOUR IDEAL BODY
            </h1>
            <p className="text-gray-400 text-sm my-4">
              Here we will help you build the body you desire so that you life
              your life to the fullest.
            </p>
            <div

              className="BTN font-semibold ">
              <button

                className="px-4 py-2 bg-amber-600 hover:bg-none">GET STARTED</button>
              <button className="ml-4 border border-amber-600 px-4 py-2 hover:text-amber-600">
                LEARN MORE
              </button>
            </div>
          </m.div>
          <div className="RIGHT flex items-center justify-center relative md:w-[18%]">
            <m.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: '140%' }}
              transition={{ duration: 1 }}
              exit={{ x: "200%" }}
              className="bg-gradient-to-b from-amber-500 to-amber-600 px-6 py-6 rounded absolute top-14 md:top-0 md:hidden lg:block lg:-top-28 lg:-left-18 lg:py-3  "
            >
              <m.h3
                whileInView={{ scale: [1, 1.24, 1.12, 1] }}
                initial={{ scale: 0 }}
                transition={{ duration: 2, delay: 0.8 }}
                className="text-red-500"
              >
                <BsHeartFill size={30} />
              </m.h3>
              <h3 className="text-gray-700 my-3 font-semibold ">Heart Rate</h3>
              <h3 className="text-xl">113 bpm</h3>
            </m.div>
          </div>
        </div >

      </m.div >
    </div>
  );
};

export default Hero;
