"use client";

import React, { useState } from "react";
import {
  EnvelopeOpenIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { ContactComponent as Contact1 } from "./About";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";


function Contacts() {
  const [state, setState] = useState<number>(1);
  return (
    <>
      <motion.div className=" flex items-center justify-center relative h-[60vh]" id="contacts" initial={{opacity:0}} whileInView={{opacity:1}} transition={{type:'spring', bounce:0.5, duration:2}}>
        <div className="h-auto md:h-auto lg:h-[100%]   rounded-xl shadow-md bg-white   absolute top-[80px] border-black px-2 lg:right-56 lg:left-56 flex p-4  flex-col lg:flex-row w-auto md:w-[90%] lg:w-auto">
          <div className="flex-1  p-6 ">
            <h1 className="text-3xl font-bold ">Let&apos;s discuss your project </h1>
            <p className="text-gray-500   text-xs  mt-1 leading-4">
              Always happy to help! Don&apos;t hesitate to contact me if you need
              anything.
            </p>
            <div className="mt-6 flex flex-col gap-4">
              {contactsData.map((data, idx) => (
                <ContactComponet
                  {...data}
                  key={idx}
                  state={state}
                  setState={setState}
                />
              ))}
            </div>
            <Contact1 />
          </div>
          <div className="flex-1  p-6">
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Contacts;

const ContactComponet: React.FC<props> = ({
  state,
  setState,
  id,
  name,
  details,
  Icon,
}) => {
  function handleHover() {
    setState(id);
  }
  return (
    <>
      <div
        className={`px-5 py-3 rounded ${
          state === id && "shadow-md"
        }    shadow-gray-200 flex gap-3  w-[300px] items-center transition-all`}
        onMouseEnter={handleHover}
      >
        <div
          className={`p-1.5 ${
            state === id
              ? "bg-purple-500 text-white"
              : " bg-purple-50 text-purple-500"
          } rounded transition-all`}
        >
          <Icon width={25} height={25} />
        </div>
        <div className="">
          <p className="text-xs  font-light text-gray-400 mb-0.5 ">{name}:</p>
          <p className="text-xs font-semibold">{details}</p>
        </div>
      </div>
    </>
  );
};

interface contact {
  name: string;
  details: string;
  id: number;
  Icon: React.FC<any>;
}

interface props extends contact {
  state: number;
  setState: Function;
}

const contactsData: Array<contact> = [
  {
    name: "Adress",
    details: "Kigali, Rwanda",
    id: 1,
    Icon: MapPinIcon,
  },
  {
    name: "My email",
    details: "sewasejo8@gmail.com",
    id: 2,
    Icon: EnvelopeOpenIcon,
  },
  {
    name: "Call me now",
    details: "+250 725 541 525",
    id: 3,
    Icon: PhoneIcon,
  },
];
