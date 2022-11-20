import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineYoutube,
} from "react-icons/ai";
const Form = () => {
  return (
    <div className=" md:h-[30vh]  w-full md:flex md:justify-between md:items-center px-16 grid   items-center bg-gradient-to-r from-gray-200 to-gray-300">
      <div>
        <form className="flex flex-col justify-center items-center mt-8">
          <input
            type="text"
            placeholder="Enter your Email"
            className="px-3 py-2 focus:outline-none focus:outline-amber-600 text-amber-600 "
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="my-4 px-3 py-2 focus:outline-none focus:outline-amber-600 text-amber-600 
            "
          />
          <button
            type="submit"
            className="px-6 py-2 hover:bg-gradient-to-r hover:from-amber-600 hover:to-amber-500 border border-amber-600 hover:text-white mb-3 font-semibold transition-all  duration-300"
          >
            Contact
          </button>
        </form>
      </div>
      <div className="flex text-3xl  justify-center my-6 md:my-0 ">
        <AiOutlineInstagram className="hover:text-amber-600 ml-2 md:ml-8 cursor-pointer transition-all duration-200" />
        <AiOutlineTwitter className="hover:text-amber-600 ml-2 md:ml-8 cursor-pointer transition-all duration-200" />
        <AiFillFacebook className="hover:text-amber-600 ml-2 md:ml-8 cursor-pointer transition-all duration-200" />
        <AiOutlineYoutube className="hover:text-amber-600 ml-2 md:ml-8 cursor-pointer transition-all duration-200" />
      </div>
      <div className="text-center text-gray-800 md:text-start">
        <h1>Shanti-Nagar, Uttar Pradesh</h1>
        <h2>Main road, Shanti Nagar</h2>
        <h4>Near Agroha Inter College</h4>
        <h4>MuzaffarNagar,251001</h4>
      </div>
    </div>
  );
};

export default Form;
