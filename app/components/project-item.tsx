'use client'

import { ExternalLink, Github, ChevronDown } from "lucide-react";
import SkillTags from "./skill-tags";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectItemProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
  liveUrl?: string | null;
}

export default function ProjectItem({
  title,
  description,
  technologies,
  features,
  github,
  liveUrl
}: ProjectItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Function to render feature text without GitHub links (handled separately)
  const renderFeatureText = (feature: string) => {
    // Remove the GitHub link from the text
    return feature.replace(/\[GitHub\]\(https:\/\/github\.com\/[^)]+\)/, '');
  };

  return (
    <div className="bg-card border rounded-lg shadow-sm">
      <button
        type="button"
        className="w-full text-left p-4 sm:p-6 flex items-start sm:items-center justify-between gap-3 sm:gap-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base">{description}</p>
        </div>
        <div className="flex gap-2">
          {github && !features.some(feature => feature.includes('[GitHub]')) && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          <div className="shrink-0 rounded-md p-2 hover:bg-muted transition-colors" aria-hidden="true">
            <ChevronDown
              className={cn(
                'h-5 w-5 text-muted-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                isOpen ? 'rotate-180' : 'rotate-0'
              )}
            />
          </div>
        </div>
      </button>

      <div
        className={cn(
          'grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-0">
            <div className="mb-4">
              <SkillTags skills={technologies} size="medium" variant="default" />
            </div>
            
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>{renderFeatureText(feature)}</span>
                  </span>
                  {feature.includes('[GitHub]') && (
                    <a 
                      href={feature.match(/\[GitHub\]\((https:\/\/github\.com\/[^)]+)\)/)?.[1] || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-black p-2"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 