import Image from "next/image";
import HeroSection from "@/component/herosection/page";
import AboutPage from "@/component/About/page";
import ProjectPage from "@/component/Project/Project";
import SkillsPage from "@/component/Skills/Skils";  
import ClickSpark from "@/components/ClickSpark";

export default function Home() {
  return (
    <>

    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    > 

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
      </ClickSpark>
    </>
        
  );
}
