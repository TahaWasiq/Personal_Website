import Image from "next/image";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Education from "./components/education";
import Skills from "./components/skills";
import SectionTitle from "./components/section-title";
import PersonalHeader from "./components/header";

export default function Home() {


  return (
    <div className="min-h-screen bg-background">
      {/* Header component */}
      <PersonalHeader />
      
      {/* Main content */}
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-16">
        {/* Experience section */}
        <section>
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Experience" />
            <Experience />
          </div>
        </section>
        
        {/* Education section */}
        <section>
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Education" />
            <Education />
          </div>
        </section>
        
        {/* Skills section */}
        <section>
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Skills" />
            <Skills />
          </div>
        </section>
        
        {/* Projects section */}
        <section>
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Projects" />
            <Projects />
          </div>
        </section>
      </main>
    </div>
  );
}
