"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    location: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<null | string>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (
      formState.email &&
      formState.location &&
      formState.message &&
      formState.name &&
      formState.subject
    ) {
      setIsDisabled(false);
    }
  }, [formState]);

  async function handleformSubmission() {
    setIsLoading(true);
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...formState }),
    });
    const data = await response.json();

    if (data.success) {
      setStatus("Email sent successfully!");
      setTimeout(() => {
        setStatus(null);
      }, 3000);
    } else {
      console.log(data);
      setStatus(data.message || "Failed to send email.");
    }
    setFormState({
      name: "",
      email: "",
      location: "",
      message: "",
      subject: "",
    });
    setIsLoading(false);
  }

  return (
    <div id="target-component">
      <p className="text-gray-500 text-sm mt-1 leading-4">
        I’m excited to hear from you! Fill out the form below and let’s start a
        conversation.
      </p>
      <form action="" className="mt-8 flex flex-col gap-4">
        <Input
          field="name"
          setdatastate={setFormState}
          formState={formState}
          value={formState.name || ""}
          placeholder="Name*"
        />
        <Input
          field="email"
          setdatastate={setFormState}
          formState={formState}
          value={formState.email || ""}
          placeholder="Email*"
          type="email"
        />
        <Input
          field="location"
          setdatastate={setFormState}
          formState={formState}
          value={formState.location || ""}
          placeholder="Location*"
        />
        <Input
          field="subject"
          setdatastate={setFormState}
          formState={formState}
          value={formState.subject || ""}
          placeholder="Subject*"
        />
        <Input
          field="message"
          setdatastate={setFormState}
          formState={formState}
          value={formState.message || ""}
          placeholder="Message*"
        />
      </form>
      <button
        className={`flex gap-2 items-center py-1 px-3 rounded   bg-purple-500 text-white md:mt-10 mt-20 ${
          !isDisabled && "hover:scale-110"
        } transition  ${ isDisabled && 'opacity-50'}`}
        onClick={handleformSubmission}
        disabled={isDisabled || isLoading}
      >
        {isLoading ? "Sending..." : "Submit"}
        {isLoading && <span className="loader" />}
        <PaperAirplaneIcon height={22} width={22} />
      </button>
      {status && <p className="text-sm text-purple-500">{status}</p>}
    </div>
  );
}

export default ContactForm;

const Input: React.FC<{
  setdatastate: React.Dispatch<React.SetStateAction<FormState>>;
  field: keyof FormState;
  formState: FormState;
  value: string;
  placeholder: string;
  type?: string;
}> = ({
  setdatastate,
  field,
  formState,
  value,
  placeholder,
  type = "text",
}) => {
  const [state, setState] = useState<boolean>(false);

  function handleInput(value: string) {
    setdatastate({ ...formState, [field]: value });
  }

  return (
    <motion.div
      initial={false}
      animate={{
        borderBottomColor: state ? "#a855f7" : "#e5e7eb",
        color: state ? "#a855f7" : "#000000",
      }}
      transition={{ duration: 0.3 }}
      className="outline-none w-full border-b-2 bg-white"
    >
      <motion.input
        type={type}
        name={field}
        id={field}
        placeholder={placeholder}
        className={`w-full bg-white outline-none placeholder:font-light ${
          state && "placeholder:text-purple-500"
        }`}
        onFocus={() => setState(true)}
        onBlur={() => setState(false)}
        onChange={(e) => handleInput(e.target.value)}
        value={value}
        required
      />
    </motion.div>
  );
};

export interface FormState {
  name: string | null;
  email: string | null;
  location: string | null;
  subject: string | null;
  message: string | null;
}
