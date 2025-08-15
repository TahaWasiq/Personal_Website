import SkillTags from './skill-tags';

interface SkillsItemProps {
  category: string;
  skills: string[];
}

const categoryLabels: Record<string, string> = {
  'programming': 'Programming:',
  'frameworks_tools': 'Frameworks / Tools:',
  'concepts': 'Concepts:',
};

export default function SkillsItem({ category, skills }: SkillsItemProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground mb-4">
        {categoryLabels[category] || category}
      </h3>
      
      <SkillTags skills={skills} size="large" variant="outline" />
    </div>
  );
} 