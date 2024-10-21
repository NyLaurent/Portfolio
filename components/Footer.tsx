import React from "react";

function Footer() {
  return (
    <div className="w-full bg-gray-800    md:px-2 lg:px-52  flex  items-center pt-36 md:pt-32 mt-[200px] lg:mt-0 pb-10 text-gray-300 ">
      <div className="flex gap-2  items-center   w-full">
        <button className="bg-purple-400 text-2xl text-gray-200 rounded-full px-3 text-center py-1 flex items-center justify-center  ">
          A
        </button>
        <h1 className="text-2xl font-semibold ">Angel</h1>
        <div className="  w-[50%] h-full flex   items-center md:justify-between flex-1  justify-center">
          <div className="flex-1 md:flex  gap-10 items-center justify-center hidden">
            <a href="" className="text-sm font-semibold font-sans">
              Home
            </a>
            <a href="#about" className="text-sm  font-sans">
              About{" "}
            </a>
            <a href="#projects" className="text-sm  font-sans">
              projects
            </a>
            <a href="#services" className="text-sm  font-sans">
              Services
            </a>{" "}
            <a href="#contacts" className="text-sm  font-sans">
              contacts
            </a>
          </div>
         <div>
         Copyright © 2024 Angel.
        </div> 
        </div>
      </div>
    </div>
  );
}

export default Footer;
