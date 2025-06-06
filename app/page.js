import Image from "next/image";
import HomePage from "@/components/home";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experiences from "@/components/experiences";
import Coding from "@/components/coding";
import Endorsements from "@/components/endorsements";
import Contact from "@/components/contact";
import Agent from "@/components/agent";
export default function Home() {
  return (
    <>
    <HomePage/>
    <About/>
    <Projects/>
    <Experiences/>
    <Coding/>
    <Endorsements/>
    <Contact/>
    <Agent/>
    </>
  );
}
