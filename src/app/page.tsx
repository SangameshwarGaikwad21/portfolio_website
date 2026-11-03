
import HeroSection from "@/component/herosection/page";
import AboutPage from "@/component/About/page";
import ProjectPage from "@/component/Project/page";
import SkillsPage from "@/component/Skills/Skils";
import ClickSpark from "@/components/ClickSpark";
import ContactPage from "@/component/Contact/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ClickSpark
        sparkColor="#8b5cf6"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutPage />
        </section>

        <section id="skills">
          <SkillsPage />
        </section>

        <section id="projects">
          <ProjectPage />
        </section>

        <section id="contact">
          <ContactPage />
        </section>
      </ClickSpark>
    </main>
  );
}
