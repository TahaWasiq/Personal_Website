import TimeLineItem from "./time-line-item";
import { getExperience } from "@/lib/resume-data";

export default function Experience() {
  const experiences = getExperience();
  
  return (
    <div className="space-y-6">
      {experiences.map((experience) => (
        <TimeLineItem 
          key={experience.id}  // ← Add this key prop
          id={experience.id}
          title={experience.title}
          organization={experience.company}
          location={experience.location}
          duration={experience.duration}
          description={experience.description}
          technologies={experience.technologies}
          type="experience"
          isExpandable={true}
          logo={experience.logo}
        />
      ))}
    </div>
  );
}