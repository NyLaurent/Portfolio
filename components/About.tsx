'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


function About() {
    const initial = { opacity: 0, y: 100 };
    const animate = { opacity: 1, y: 0 };
    const transition = { duration: 1.5 };
  return (
    <>
      <div 
      
      className=" flex items-center justify-center relative min-h-[80vh]" id="about">
        <motion.div className="h-auto shadow-2xl rounded-xl shadow-gray-200 bg-white absolute top-[80px] border-black px-4 md:px-8 lg:px-10 mx-4 md:mx-10 lg:right-56 lg:left-56 flex p-6 md:p-8 flex-col lg:flex-row gap-4" initial={initial} whileInView={animate} transition={transition}>
          <div className="w-full lg:w-5/12 p-6 flex flex-col items-center justify-center relative gap-6">
            <div className="w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/me/laurent3.jpg" 
                alt="Laurent Nyumbayire" 
                width={400}
                height={533}
                className="w-full h-full object-cover object-top" 
              />
            </div>
            <ContactComponent />
          </div>
          <div className="flex-1 p-10">
              <h1 className="text-3xl font-bold">I&apos;m a Software Engineer</h1>
            <div className="mt-10">
              <p className="mt-5 text-stone-600 leading-5">
              Hi, I &apos;m Laurent Nyumbayire. As a passionate software developer, I love turning ideas into innovative and meaningful solutions. I enjoy blending my technical skills with creative problem-solving to build applications that truly make a difference in people's lives.
              </p>
              <p className="mt-3 text-stone-600 leading-5">
              I thrive in teamwork, bringing positivity and creativity to every project. Let's connect!
              </p>
              <More />
            </div>
           
          </div>

        </motion.div>
      </div>
      
     
    </>
  );
}

export default About;


const More:React.FC=()=>{
    return <>
      <div className="mt-8">
        <a href="https://docs.google.com/document/d/1nRokXKy6zWlGdXigLdMGb_4tLL_idzMOVU0JCkNmHwk/edit?usp=sharing" target="_blank" rel="noopener noreferrer" download>
            <button className="px-5 py-1.5 text-white font-semibold bg-purple-500 rounded-lg hover:shadow-lg shadow-gray-200">Resume</button>
        </a>
        <button className="ml-2 px-6 py-1.5 hover:bg-sky-50 rounded-lg animate-bounce hover:animate-none">Let&apos;s chat </button>
      </div>
    </>
}

const Contact:React.FC<{img:string,to:string}>=({img,to})=>{
  
   return <>
   <a href={to} target="_blank">
        <button className={`p-2 rounded transition-all border border-purple-500 hover:scale-110 delay-75`}>
            <Image src={img} width={20} height={20} alt="" />
        </button>

   </a>
   </>
}


export const ContactComponent:React.FC=()=>{
     return  <>
         <div className="flex gap-2 px-4 py-2 shadow-2xl shadow-gray-200 bg-white rounded-lg justify-center">
             <Contact img="/assets/instagram.svg" to="https://www.instagram.com/laulan_6/?hl=en"/>
             <Contact img="/assets/linkedin.svg" to="https://www.linkedin.com/in/nyumbayire-laurent/"/>
             <Contact img="/assets/github.svg" to="https://github.com/NyLaurent/"/>
             <Contact img="/assets/twitter-alt.svg" to="https://x.com/Lau_lanez"/>
         </div>
     </>
}
