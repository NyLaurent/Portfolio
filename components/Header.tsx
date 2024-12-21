"use client";

import React, { useEffect } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { InView, useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

function Header() {
  const [state, setViewState] = React.useState<boolean>(false);
  const [ref, inView] = useInView({ threshold: 0.1 });
  useEffect(() => {
    setViewState(inView);
  }, [inView]);

  const [showmodal, setShowModal] = React.useState<boolean>(false);

  return (
    <>
      <div
        className="w-full bg-white flex  justify-between  items-center   px-5 md:px-4 lg:px-52 pt-3  fixed z-50 lg:relative top-0 "
        ref={ref}
      >
        <div className="flex gap-2  items-center  ">
          <button className="p-1 flex items-center justify-center">
            <img src="/assets/lanez.jpg" alt="Logo" className="w-10 h-10 rounded-full" />
          </button>
          {/* <h1 className="text-2xl font-semibold ">Laurent</h1> */}
        </div>
        <Navigation />
        <ResponsiveNav setState={setShowModal} state={showmodal} />
      </div>
      {!state && <Component />}
    </>
  );
}

export default Header;

const Navigation: React.FC = () => {
  return (
    <>
      <div className=" hidden w-[50%] h-full  lg:flex items-center justify-between ">
        <div className="flex-1 flex  gap-10 items-center justify-center">
          <a href="" className="text-sm font-medium ">
            Home
          </a>
          <a href="#about" className="text-sm font-medium ">
            About
          </a>
          <a href="#projects" className="text-sm font-medium ">
            Projects
          </a>
          <a href="#services" className="text-sm font-medium ">
            Services
          </a>
        </div>
        <button className="bg-gradient-to-r from-purple-200 to-purple-500  rounded px-4 py-2  mr-3  text-white">
          <a href="#contacts">Contact</a>
        </button>
      </div>
    </>
  );
};

function Component() {
  const initial = { opacity: 0, y: -50 }; // Initial state: invisible and 50px above the viewport
  const animate = { opacity: 1, y: 0 }; // Animation state: fully visible and at its original position
  const transition = { duration: 0.5 };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className="hidden fixed top-0  lg:flex items-center  shadow-md shadow-gray-200  gap-10  justify-center ml-[100px] lg:ml-[550px] px-8 py-3 rounded-full mt-2 z-50 bg-white"
    >
      {/* Your element content */}
      <a href="" className="text-sm font-medium">
        Home
      </a>
      <a href="#about" className="text-sm font-medium">
        About
      </a>
      <a href="#projects" className="text-sm font-medium">
        Projects
      </a>
      <a href="#services" className="text-sm font-medium">
        Services
      </a>
      <a href="#contacts" className="text-sm font-medium">
        Contacts
      </a>
    </motion.div>
  );
}

//mobile containers

const MobileNavigationModal: React.FC<{
  setState: Function;
}> = ({ setState }) => {
  function handlehidemodal() {
    console.log("clicked");
    setState(false);
  }

  return (
    <>
      <div className="fixed top-0 right-0 w-[90%] md:w-[70%]  bg-white  flex flex-col items-end border-l pt-8 bottom-0 px-4">
        <button onClick={handlehidemodal}>
          <XMarkIcon width={25} height={25} className="mb-2 " color="black " />
        </button>
        <div className="flex flex-col gap-10 w-full  ">
          <NavComponent to="" label="Home" setState={setState} />
          <NavComponent to="#about" label="About " setState={setState} />
          <NavComponent to="#projects" label="Projects" setState={setState} />
          <NavComponent to="#services" label="Services" setState={setState} />
          <NavComponent to="#contacts" label="Contacts" setState={setState} />
        </div>
      </div>
    </>
  );
};

const ResponsiveNav: React.FC<{ setState: Function; state: boolean }> = ({
  setState,
  state,
}) => {
  function handleClick() {
    setState(true);
  }

  return (
    <>
      <div className="block lg:hidden ">
        <button onClick={handleClick}>
          <Bars3BottomRightIcon
            width={25}
            height={25}
            className=""
            color="black "
          />
        </button>
        {state && <MobileNavigationModal setState={setState} />}
      </div>
    </>
  );
};

const NavComponent: React.FC<{
  label: string;
  to: string;
  setState: Function;
}> = ({ label, to, setState }) => {
  const router = useRouter();

  function handleClick() {
    router.push (`/${to}`);
    setState(false)
  }

  return (
    <div className="w-full hover:bg-purple-400 rounded flex items-center justify-center hover:text-white font-semibold" onClick={handleClick}>
      {label}
    </div>
  );
};
