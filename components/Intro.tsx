"use client";
import React from "react";
import Image from "next/image";

import Typed from "typed.js";

function Intro() {
  return (
    <div className="bg-gradient-to-r from-white to-purple-300   px-2 md:px-10 lg:px-56 pt-4 mt-1 flex items-center justify-center md:h-[92vh]">
      <div className="flex-1 flex  h-full flex-col-reverse lg:flex-row gap-9 justify-between mt-[100px] lg:mt-0">
        <div className="flex-1 h-full pl-8 ">
          <IntroText />
        </div>
        <div className=" flex-1 h-full mb-10 lg:mb-0 flex items-center">
          <Image
            src={"/assets/intro.png"}
            height={700}
            width={600}
            alt="this is"
            className="rounded-full mx-auto h-auto max-w-full"
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
        <h1 className="text-4xl font-semibold mb-8">
        Hey there!, I&apos;m <br />
          Nyumbayire Laurent
        </h1>
        <p className="text-stone-500 leading-5 w-[90%] mb-5 ">
        A Full Stack Developer from the heart of Rwanda.
         I get excited about building beautiful, functional web 
         applications that make a difference. When I &apos;m not crafting clean code,
          I &apos;m thinking about how to make technology more intuitive and enjoyable for everyone.
        </p>

        <div className="flex gap-2 items-center ">
          <p className="text-2xl ">I am into</p>
          <span ref={el} className="text-2xl font-semibold  text-blue-500" />
        </div>

        <button
  className="px-4 py-2 text-white font-semibold animate-pulse hover:animate-none bg-purple-500 w-[150px] rounded-lg mt-4 hover:scale-110 transition delay-75"
  onClick={() => document.getElementById("target-component")?.scrollIntoView({ behavior: "smooth" })}
>
  Say Hello
</button>

      </div>
    </>
  );


};


const QuickFacts:React.FC=()=>{
    return <>
    </>
}
