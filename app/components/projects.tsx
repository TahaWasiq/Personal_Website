import ProjectItem from "./project-item";
import { getProjects } from "@/lib/resume-data";

export default function Projects() {
  const projects = getProjects();
  
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <ProjectItem 
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          features={project.features}
          github={project.github}
          liveUrl={project.liveUrl}
        />
      ))}
    </div>
  );
} 