import React from "react";
import pix from "../assets/Dribbble-Logo.png";
import {
  MdArrowDownward,
  MdArrowDropDown,
  MdArrowForward,
} from "react-icons/md";

export const Header = () => {
  const body = [
    {
      id: 1,
      title: "Explore",
    },
    {
      id: 2,
      title: "Hire a Designer",
    },
    {
      id: 3,
      title: "Find Jobs",
    },
    {
      id: 3,
      title: "Blog",
    },
  ];

  return (
    <div className="w-full h-[80px] flex justify-center">
      <div className="w-[95%] h-[100%] flex justify-between">
        <div className="w-[60%] h-[100%] flex  items-center">
          <div className="m-6 cursor-pointer ">
            <img src={pix} alt="" width={90} height={50} />
          </div>
          <div className=" h-[100%] flex items-center gap-5">
            {body.map((el) => (
              <div className="font-montserrat text-[12px] font-semibold">
                <nav className=" flex gap-3 justify-center items-center cursor-pointer">
                  <p className=""> {el.title}</p> <MdArrowDropDown />
                </nav>
              </div>
            ))}
            <nav></nav>
          </div>
        </div>
        <div className="w-[40%] h-[100%] flex justify-end items-center gap-2">
          <button className="w-[80px] h-[40px] border rounded-[20px] bg-slate-50  cursor-pointer">
            Sign Up
          </button>
          <button className="w-[80px] h-[40px] border rounded-[20px] bg-black text-white  cursor-pointer">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
