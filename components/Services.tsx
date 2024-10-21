'use client'
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import {motion} from 'framer-motion'

function Services() {
  return (
    <>
      <div className="w-full bg-slate-800   md:px-2 lg:px-52  flex  flex-col items-center pt-16 pb-10" id="services">
        <h1 className="text-2xl md:text-4xl font-semibold text-white mb-1">
          Do you have a project idea ?
        </h1>
        <h1 className="text-2xl md:text-4xl font-semibold text-white">
          Let&apos;s discuss your project{" "}
        </h1>
        <p className="text-gray-400 font-semibold text-center md:w-[50%] text-sm mt-6 ">
          {" "}
          As a developer, I&apos;m highly interested in collaborating on projects.
          I&apos;m a quick learner and a strong team player. I&apos;m confident I can make
          a real difference in achieving the project goals. Let me know how we
          can move forward!
        </p>
        <a
          href=""
          className="border border-purple-500  mt-6 mb-3  px-5 py-2 flex   items-center gap-2 bg-purple-500 text-white transition-all  rounded hover:scale-110  "
        >
          Let&apos;s work together
          <ArrowLongRightIcon color="" width={20} height={20} />
        </a>
      </div>
      <WhatIDo />
    </>
  );
}

export default Services;

const WhatIDo: React.FC = () => {
    const [state,setState]= useState<number>(1)
  return (
    <>
      <div className="w-full   md:px-5  lg:px-52  flex   items-center  py-20 bg-gray-50 flex-col md:flex-row px-3 ">
        <div className="flex-1  flex   flex-col ">
          <h1 className="text-2xl md:text-4xl font-slate-800 font-bold">
            What I do ?
          </h1>
          <p className="text-gray-400   text-sm mt-8 leading-[18px] md:mr-[20%] ">
            I turn ideas into awesome apps and websites! I design the
            user-friendly interfaces you see (the front-end), build the brain
            behind the scenes (the back-end), and can even create mobile apps
            for your phone or tablet. Basically, I make sure everything works
            smoothly together, no matter what device you use.
          </p>
          <a
            href=""
            className="border border-purple-500  mt-10 mb-3  px-5 py-2 flex  w-[120px] items-center gap-2 bg-purple-500 text-white transition-all  rounded hover:scale-110  "
          >
            Say hello!
          </a>
        </div>
        <div className="flex-1  flex gap-6  flex-col">
          {servicesData.map((data,idx)=><WhatIDoComponent {...data} key={idx} state={state} setState={setState}/>)}
        </div>
      </div>
    </>
  );
};

const WhatIDoComponent: React.FC<props> = ({ title, description,state,setState,id }) => {
   const animate={
    rotate:2,
    scale:1.05,

   }

  function handleHover(){
    setState(id)
  }


  return (
    <>
      <motion.div className={`bg-white border-l-4  ${state === id ? 'border-purple-500 shadow-lg shadow-gray-100':'border-white'}   px-4  py-2  shadow-gray-200 rounded` }whileHover={animate} onMouseEnter={handleHover}>
        <h1 className="text-lg mb-1 font-bold">{title}</h1>
        <p className=" text-slate-600  text-sm mt-4 leading-[18px]">
          {description}
        </p>
      </motion.div>
    </>
  );
};


interface service {
  title: string;
  description: string;
  id: number;
}

interface props extends service{
    state:number,
    setState:Function
}

const servicesData: Array<service> = [
  {
    title: "Frontend development",
    description:
      "I craft user-friendly interfaces (UI) that bring websites and apps to life.  My skills in HTML, CSS, and JavaScript ensure visually appealing and interactive experiences across all devices.",
    id: 1,
  },
  {
    title: "Backend development",
    description:
      "I build the brains behind websites and apps.  My back-end development expertise ensures smooth functionality, data security, and seamless communication between users and servers.",
    id: 2,
  },
  {
    title: "Mobile development",
    description:
      "I turn ideas into native mobile apps!  With my expertise, I can craft user-friendly and engaging experiences for smartphones and tablets.",
    id: 3,
  },
];
