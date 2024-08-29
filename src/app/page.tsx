import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import { ProjectStreamlinedExperience } from "@/components/ProjectStreamlinedExperience";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Navbar />
      <Experience />
      <HeroSection />
      <Skills />
      <ProjectStreamlinedExperience />
      <Projects />
      <Contact />
    </main>
  );
}
