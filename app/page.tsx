import Image from "next/image";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <TechStack />
      <Projects />
      <Services />
      <Contacts />
      <Footer />
    </>
  );
}
