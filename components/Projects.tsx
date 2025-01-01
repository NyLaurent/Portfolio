"use client";

import Image from "next/image";
import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

function Projects() {
  const [type, setType] = React.useState<string>("All");

  const filteredProjects = projects.filter((project) => {
    if (type === "All") return true;
    if (type === "Web Development") return project.category === "Web";
    if (type === "Mobile") return project.category === "Mobile";
    if (type === "Full Stack") return project.category === "Full Stack";
    return false;
  });

  return (
    <div className="w-full bg-gray-50   md:px-2 lg:px-52  flex  flex-col items-center pt-20 pb-10" id="projects">
      <h1 className="text-4xl font-bold ">Projects </h1>
      <p className="text-center text-gray-600 mt-2">
        Here is a brief overview of my projects. You can explore more on my GitHub.
      </p>
      <NavigationComponent setState={setType} state={type} />
      <div className="w-full py-3 flex justify-evenly   mt-10  flex-wrap j">
        {filteredProjects.map((data, idx) => (
          <Project {...data} key={idx} />
        ))}
      </div>
      <a
        href="https://github.com/NyLaurent"
        className="mt-5 mb-3 px-6 py-2 text-white bg-purple-600 rounded-lg flex items-center gap-2 transition-transform transform hover:scale-105 hover:bg-purple-700"
      >
        Check out more on github
        <ArrowLongRightIcon color="white" width={20} height={20} />
      </a>
    </div>
  );
}

export default Projects;

const Project: React.FC<project> = ({
  name,
  imgurl,
  description,
  link,
  
  hostedLink,
}) => {
  const initial = { opacity: 0, y: 50 };
  const animate = { opacity: 1, y: 0 };

  return (
    <>
      <motion.div
        className="flex flex-col h-[360px]  w-[340px] border border-gray-100 rounded bg-white mt-3 hover:scale-150 group relative"
        initial={initial}
        whileInView={animate}
        // transition={transition}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
          rotate: 2,
        }}
        transition={{ type: "spring", stiffness: 100, duration: 1 }}
      >
        <div className="flex-1 w-full overflow-hidden">
          <Image
            src={imgurl}
            width={400}
            height={100}
            alt=""
            className=" h-auto "
          />
        </div>
        <div className="flex-1 w-full flex flex-col px-3 ">
          <h1 className="text-lg font-bold mb-1">{name}</h1>
          {/* <div className="flex gap-2 text-sm text-gray-500 flex-row">
            Tech Stark:
            {techstark.map((data, idx) => (
              <Tech text={data} key={idx} />
            ))}
          </div> */}
          <p className="leading-4  mt-2 text-[13px] text-gray-500">
            {description}
          </p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
          <a
            href={link}
            target="_blank"
            className="flex items-center justify-center px-4 py-2 text-black rounded shadow-md mr-2"
          >
            <img src="/assets/github.svg" alt="GitHub" width={20} height={20} style={{color:'black'}} />
          </a>
          <a
            href={hostedLink}
            target="_blank"
            className="flex items-center justify-center px-4 py-2 text-black rounded shadow-md ml-2"
          >
            <img src="/assets/link.svg" alt="Hosted" width={20} height={20} />
          </a>
        </div>
      </motion.div>
    </>
  );
};

const Tech: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <span className="text-xs   items-center flex justify-center  font-semibold ">
        {text}
      </span>
    </>
  );
};

interface project {
  imgurl: string;
  name: string;
  link: string;
  hostedLink: string;
  // techstark: Array<string>;
  description: string;
  category: string;
}

const projects: Array<project> = [
  {
    imgurl: "/assets/projects/about.png",
    name: "Diagnoss",
    link: "https://github.com/Diagnoos/app-diagnoos",
    hostedLink: "https://diagnoss.com",
    // techstark: ["React native","Nativewind","Typescript","Expo"],
    description:
      "Diagnoss web app streamlines medical operations with features like appointment scheduling, patient records, billing, prescriptions, and communication, enhancing efficiency and care quality.",
    category: "Mobile",
  },
  {
    imgurl: "/assets/projects/haha.png",
    name: "Haha",
    link: "https://github.com/NyLaurent/Haha",
    hostedLink: "https://haha-raomhnjup-nyumbayire-laurents-projects.vercel.app/",
    // techstark: ["react", "tailwindcss"],
    description:
      "Gura implements online buying and selling of products, featuring product listings, shopping cart, secure payments, and order management, enhancing convenience for users",
    category: "Full Stack",
  },
  {
    imgurl: "/assets/projects/image.png",
    name: "Ezy-Chat",
    link: "https://github.com/Ndahiroloicke/easy-chat",
    hostedLink: "https://github.com/Ndahiroloicke/easy-chat",
    // techstark: ["react native", "tailwindcss", "typescript", "expo"],
    description:
      "ezy-chat is a React Native-based chat application that leverages Firebase Authentication for secure user login and signup, with Firestore as its database for storing user data. The app ensures robust form validations using Formik and Yup, providing users with a seamless and reliable communication experience",
    category: "Mobile",
  },
   {
    imgurl: "/assets/projects/car.png",
    name: "CarExhibit",
    link: "https://github.com/NyLaurent/CarExhibit",
    hostedLink: "https://car-exhibit.vercel.app/",
    // techstark: ["react native", "tailwindcss", "typescript", "expo"],
    description:"🚗 CarExhibit - A modern automotive platform using Next.js 14 and RapidAPI. Explore cars with real-time data, intelligent search, and fast loading. With server-side rendering and a sleek UI, elevate your car search experience! ✨",
    category: "Web",
  },
  
  {
    imgurl: "/assets/projects/iLead.png",
    name: "I Lead",
    hostedLink: "https://github.com/NyLaurent/Ilead_website",
    link: "https://github.com/NyLaurent/Ilead_website",
    // techstark: ["react", "tailwindcss", "typescript"],
    description:
      " iLead management system .This web-based platform will  track student progress,  manage resources and day to day operation of i lead program in RCA",
    category: "Web",
  },
  {
    imgurl: "/assets/projects/psvf.png",
    name: "PSSL Website",
    hostedLink: "https://pssl.vercel.app/",
    link: "https://github.com/NyLaurent/PSVF",
    // techstark: ["nextjs", "tailwindcss", "node js ", "typescript"],
    description:
      "A responsive and informative website dedicated to Petit Séminaire Saint Léon Kabgayi, highlighting its rich history, academic programs, core values, and extracurricular activities. The site serves as a hub for students, parents, and staff, providing updates on school events, resources, and essential contact information, while reflecting the school’s commitment to excellence in education and formation.",
    category: "Web",
  },
];

const NavigationComponent: React.FC<{ setState: Function; state: string }> = ({
  setState,
  state,
}) => {
  return (
    <div className="py-2 px-4 bg-white shadow-md shadow-gray-200 rounded-md mt-6 flex gap-1 mb-4">
      <Button setState={setState} state={state} text="All" />
      <Button setState={setState} state={state} text="Web Development" />
      <Button setState={setState} state={state} text="Mobile" />
      <Button setState={setState} state={state} text="Full Stack" />
    </div>
  );
};

const Button: React.FC<{
  setState: Function;
  state: string;
  text: string;
}> = ({ setState, state, text }) => {
  function handleClick() {
    setState(text);
  }

  return (
    <button
      onClick={handleClick}
      className={`py-1.5 px-2 md:px-4 ${
        text === state ? "bg-purple-500 text-white font-semibold" : "bg-white"
      } rounded transition-all`}
    >
      {text}
    </button>
  );
};
