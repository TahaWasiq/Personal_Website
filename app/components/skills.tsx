import SkillsItem from "./skills-item";
import { getSkills } from "@/lib/resume-data";

export default function Skills() {
  const skills = getSkills();
  
  return (
    <div className="space-y-6">
      <SkillsItem category="programming" skills={skills.programming} />
      <SkillsItem category="frameworks_tools" skills={skills.frameworks_tools} />
      <SkillsItem category="concepts" skills={skills.concepts} />
    </div>
  );
} 