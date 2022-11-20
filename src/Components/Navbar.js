import React, { useState } from "react";
import { GiGymBag, GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
const Navbar = () => {
  const uiItems = [
    {
      id: 0,
      title: "Home",
      goto: "/"
    },
    {
      id: 1,
      title: "Programs",
      goto: "/programs"
    },
    {
      id: 2,
      title: " Why us",
      goto: "/whyus"
    },
    {
      id: 0,
      title: "Plans",
      goto: "/plans"
    },
    {
      id: 0,
      title: "Members",
      goto: "/members",
      style: `mb-0 mr-0`,
    },
  ];
  const [navItem, setNavItem] = useState(true);
  return (
    <div className="p-6 flex justify-between items-center relative bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="LOGO flex items-center md:text-2xl lg:text-5xl font-bold text-xl cursor-pointer">
        <GiGymBag className="text-amber-600" />
        <span className=" ">
          <span className="text-amber-600">HIRO</span> CLUB
        </span>
      </div>
      <div className="UI ">
        <ul className=" hidden md:flex">
          {uiItems.map(({ id, title, goto }) => (
            <Link to={goto}> <li
              key={id}
              className="px-4  font-semibold hover:text-amber-500 transition-all duration-200 cursor-pointer hover:border-b border-amber-500 mr-2"
            >
              {title}
            </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="BTN hidden md:block">
        <button className="px-4 py-2  rounded-sm font-semibold bg-gradient-to-r from-amber-700 to-amber-600 hover:bg-gradient-to-r hover:from-amber-700 hover:to-amber-500">
          Join Now
        </button>
      </div>
      <div
        className="md:hidden text-red-300"
        onClick={() => setNavItem(!navItem)}
      >
        {navItem ? (
          <GiHamburgerMenu size={20} className="text-amber-600" />
        ) : (
          <GrClose size={20} className="" />
        )}
      </div>
      <div
        className={
          !navItem
            ? `UI absolute right-10 top-10 ease-in duration-300 transition-all md:hidden bg-gradient-to-b from-amber-500 via-amber-600 to-amber-700 rounded-tl-md rounded-bl-md rounded-br-md z-50`
            : `fixed -right-[500px]`
        }
      >
        <ul className=" p-4  ">
          {uiItems.map(({ id, title, style, goto }) => (
            <Link to={goto}> <li
              key={id}
              className={`mb-4 hover:cursor-pointer hover:border-b hover:border-white font-semibold text-lg ${style}`}
            >
              {title}
            </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
