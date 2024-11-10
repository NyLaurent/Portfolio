"use client";
import React from "react";
import Image from "next/image";
import Typed from "typed.js";

function Intro() {
  return (
    <div className="bg-gradient-to-r from-white to-purple-50   px-2 md:px-10 lg:px-56 pt-4 mt-1 flex items-center justify-center md:h-[92vh] 
    ">
      <div className="flex-1 flex  h-full flex-col-reverse lg:flex-row mt-[100px] lg:mt-0">
        <div className="flex-1 h-full pl-8 ">
          <IntroText />
        </div>
        <div className=" flex-1 h-full mb-10 lg:mb-0 flex items-center">
          <Image
            src={"/assets/p11.gif"}
            height={700}
            width={600}
            alt="this is"
            className=" rounded-xl mx-auto   h-[300px] w-[300px] md:h-auto md:w-auto"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;

const IntroText: React.FC = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front end development.", "Back end development ", 'Mobile development','Data science', 'Cybersecurity', 'Machine Learning'],
      typeSpeed: 50,
      loop: true,
      showCursor: false,
      backDelay: 10,
      backSpeed: 80,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="flex flex-col  justify-center h-full  ">
        <h1 className="text-5xl font-semibold mb-10">
          Hello, I&apos;m <br />
          Nyumbayire Laurent
        </h1>
        <p className="text-stone-500 leading-5 w-[90%] mb-5 ">
          I&apos;m a full stack developer based in Rwanda, I strive to build
          immersive and beautiful applications through carefully crafted code
          and user-centric design
        </p>

        <div className="flex gap-2 items-center ">
          <p className="text-2xl ">I am into</p>
          <span ref={el} className="text-2xl font-semibold  text-blue-500" />
        </div>

        <button className="px-4 py-2 text-white font-semibold animate-pulse hover:animate-none  bg-purple-500 w-[100px] rounded-lg  mt-4 hover:scale-110 transition delay-75  ">Say Hello </button>
      </div>
    </>
  );


};


const QuickFacts:React.FC=()=>{
    return <>
    </>
}
