import Image from "next/image";
import HeroSection from "@/component/herosection/page";
import AboutPage from "@/component/About/page";
import ProjectPage from "@/component/Project/Project";
import SkillsPage from "@/component/Skills/Skils";  

export default function Home() {
  return (
    <>
     <section id="home">
        <HeroSection/>
    </section>

    <section id="about">
      <AboutPage/>
    </section>

    <section id="projects">
      <ProjectPage/>
    </section>

    <section id="skills">
      <SkillsPage/>
    </section>
    </>
  );
}
