import AboutMe from "./components/home/about-me"
import Education from "./components/home/education"
import Experience from "./components/home/experience"
import HeroSection from "./components/home/hero-section"
import Languages from "./components/home/language"
import Skills from "./components/home/skills"
import TopMenu from "./components/menu/menu-top"
import Projects from "./components/home/project"

const page = () => {
  return (
    <>
    <main className="flex flex-col lg:flex-row">
      <div className="lg:w-1/4  lg:sticky lg:top-0 lg:h-screen border-x border-primary/10 bg-[#c8d8fa]">        
        <TopMenu />
        <HeroSection />
      </div>
      <div className="lg:w-3/4 flex flex-col">
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Education />     
        <Languages />
      </div>
    </main>
    </>
  )
}

export default page