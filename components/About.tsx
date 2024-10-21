'use client'

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


function About() {
    const initial = { opacity: 0, y: 100 }; // Initial state: invisible and 50px above the viewport
    const animate = { opacity: 1, y: 0 }; // Animation state: fully visible and at its original position
    const transition = { duration: 1.5 };
  return (
    <>
      <div 
      
      className=" flex items-center justify-center relative h-[60vh]" id="about">
        <motion.div className=" h-[750px] md:h-[800px] lg:h-[100%]  shadow-2xl rounded-xl shadow-gray-200 bg-white   absolute top-[80px] border-black px-2 md:mx-10 lg:right-56 lg:left-56 flex p-4  flex-col lg:flex-row  " initial={initial}  whileInView={animate} transition={transition}>
          <div className=" w-full lg:w-5/12  p-3 flex items-center justify-center">
          <Image src={'/assets/p12.png'}  height={100} width={500} alt=""  className="w-[90%] md:h-72"/>
          <ContactComponent />
          </div>
          <div className="flex-1 p-10 ">
              <h1 className="text-3xl font-bold ">I&apos;m a software developer </h1>
            <div className="mt-10">
              <p className="mt-5 text-stone-600 leading-5">
                Hi! I&apos;m Sewase Angel, a software developer with a passion for
                turning ideas into code. Creativity, attention to detail, and a
                love for learning fuel my work.
              </p>
              <p className=" text-stone-600 leading-5">
                I thrive in collaborative environments, believing teamwork
                unlocks the best solutions. Let&apos;s chat if you&apos;re looking for a
                developer who brings a positive attitude and a creative spark to
                the table!
              </p>
            </div>
            <More />
          </div>

        </motion.div>
      </div>
      
     
    </>
  );
}

export default About;


const More:React.FC=()=>{
    return <>
      <div className="mt-10">
        <button  className="px-5 py-1.5 text-white font-semibold bg-purple-500  rounded-lg hover:shadow-lg shadow-gray-200">Resume</button>
        <button className="ml-2 px-6 py-1.5 hover:bg-sky-50 rounded-lg  animate-bounce hover:animate-none ">let&apos;s chat </button>
      </div>
    </>
}

const Contact:React.FC<{img:string,to:string}>=({img,to})=>{
  
   return <>
   <a href={to} target="_blank">
        <button className={`p-2 rounded transition-all border border-purple-500 hover:scale-110 delay-75`} >
            <Image src={img}  width={20} height={20} alt="" />
        </button>

   </a>
   </>
}


export const ContactComponent:React.FC=()=>{
     return  <>
         <div className="absolute md:bottom-10 md:right-4 lg:left-24 md:flex gap-2 px-4 py-2  w-[200px] shadow-2xl shadow-gray-200 bg-white hidden md">
             <Contact img="/assets/instagram.svg" to="https://www.instagram.com/direct/new/?username=s_angel.11"/>
             <Contact img="/assets/linkedin.svg" to="https://www.linkedin.com/in/sewase-angel-416346299/"/>
             <Contact img="/assets/github.svg" to="https://github.com/Angelosewase"/>
             <Contact img="/assets/twitter-alt.svg" to="https://x.com/angel_sewase"/>
         </div>
     </>
}
