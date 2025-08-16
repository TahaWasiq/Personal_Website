'use client'

import { useTheme } from '@/lib/theme-provider'

interface SkillTagsProps {
  skills: string[];
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'muted' | 'outline';
}

export default function SkillTags({ 
  skills, 
  size = 'medium', 
  variant = 'default' 
}: SkillTagsProps) {
  const { theme } = useTheme()
  
  const sizeClasses = {
    small: 'px-1.5 py-0.5 text-xs',
    medium: 'px-2 py-1 text-xs',
    large: 'px-3 py-1.5 text-sm'
  };

  const getVariantClasses = (variant: string) => {
    const baseClasses = {
      default: 'bg-muted/80 text-muted-foreground',
      muted: 'bg-muted/70 text-muted-foreground',
      outline: 'border border-border bg-muted/60 text-muted-foreground'
    };
    
    const hoverClasses = theme === 'dark' 
      ? 'hover:bg-white hover:text-black' 
      : 'hover:bg-black hover:text-white';
    
    return `${baseClasses[variant as keyof typeof baseClasses]} ${hoverClasses} transition-colors duration-200`;
  };

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className={`${sizeClasses[size]} ${getVariantClasses(variant)} rounded-md`}
        >
          {skill}
        </span>
      ))}
    </div>
  );
} 