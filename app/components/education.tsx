import TimeLineItem from "./time-line-item";
import { getEducation } from "@/lib/resume-data";

export default function Education() {
  const education = getEducation();

  return (
    <div className="space-y-6">
      {education.map((educationItem, index) => (
        <TimeLineItem 
          key={`${educationItem.school}-${educationItem.degree}-${index}`}
          id={`education-${index}`}
          title={educationItem.degree}
          organization={educationItem.school}
          location={educationItem.location}
          duration={educationItem.duration}
          description={educationItem.description}
          type="education"
          isExpandable={true}
          logo={educationItem.logo}
        />
      ))}
    </div>
  );
}