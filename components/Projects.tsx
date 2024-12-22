"use client";

import Image from "next/image";
import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="w-full bg-gray-50   md:px-2 lg:px-52  flex  flex-col items-center pt-20 pb-10" id="projects">
      <h1 className="text-4xl font-bold ">Projects </h1>
      <div className="w-full py-3 flex justify-evenly   mt-10  flex-wrap j">
        {projects.map((data, idx) => (
          <Project {...data} key={idx} />
        ))}
      </div>
      <a
        href="https://github.com/NyLaurent"
        className="mt-5 mb-3 px-4 py-0.5 text-black flex items-center gap-2 rounded"
      >
        check out more on github
        <ArrowLongRightIcon color="black" width={20} height={20} />
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
  techstark,
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
          <div className="flex gap-2 text-sm text-gray-500 flex-row">
            Tech Stark:
            {techstark.map((data, idx) => (
              <Tech text={data} key={idx} />
            ))}
          </div>
          <p className="leading-4  mt-2 text-[13px] text-gray-500">
            {description}
          </p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
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
  techstark: Array<string>;
  description: string;
}

const projects: Array<project> = [
  {
    imgurl: "/assets/projects/about.png",
    name: "Diagnoss",
    link: "https://github.com/Diagnoos/app-diagnoos",
    hostedLink: "https://diagnoss.com",
    techstark: ["React native","Nativewind","Typescript","Expo"],
    description:
      "Diagnoss web app streamlines medical operations with features like appointment scheduling, patient records, billing, prescriptions, and communication, enhancing efficiency and care quality.",
  },
  {
    imgurl: "/assets/projects/gura.png",
    name: "Gura",
    link: "https://gura-kappa.vercel.app",
    hostedLink: "https://gura.com",
    techstark: ["react", "tailwindcss"],
    description:
      "Gura implements online buying and selling of products, featuring product listings, shopping cart, secure payments, and order management, enhancing convenience for users",
  },
  {
    imgurl: "/assets/projects/rideShare.png",
    name: "Ride share",
    link: "https://github.com/NyLaurent/ride-share",
    hostedLink: "https://rideshare.com",
    techstark: ["react native", "tailwindcss", "typescript", "expo"],
    description:
      "A transport and delivery app facilitates efficient logistics management, enabling users to request and track deliveries, manage routes, and ensure timely transportation of goods or services.",
  },
  {
    imgurl: "/assets/projects/deliveroo.png",
    name: "Delivoroo <clone>",
    hostedLink: "https://gura.com",
    link: "https://github.com/NyLaurent/deliveroo-clone",
    techstark: ["react native", "tailwindcss", "typescript", "expo"],
    description:
      "I created a Deliveroo clone as a learning project where I tackled various challenges, gained valuable experience, and honed my skills in building a comprehensive food delivery platform.",
  },
  {
    imgurl: "/assets/projects/iLead.png",
    name: "I Lead",
    hostedLink: "https://gura.com",
    link: "https://github.com/NyLaurent/ilead",
    techstark: ["react", "tailwindcss", "typescript"],
    description:
      " iLead management system .This web-based platform will  track student progress,  manage resources and day to day operation of i lead program in RCA",
  },
  {
    imgurl: "/assets/projects/nextjsdashboard.png",
    name: "nextjs dashboard",
    hostedLink: "https://gura.com",
    link: "https://github.com/NyLaurent/nextjs-dashboard",
    techstark: ["nextjs", "tailwindcss", "node js ", "typescript"],
    description:
      "A sales dashboard learning project visualizes sales data, showing key metrics and trends to help you practice monitoring progress and making data-driven decisions.",
  },
];
