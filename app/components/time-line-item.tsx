'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import SkillTags from './skill-tags'
import { Experience } from '@/lib/resume-data'
import Image from 'next/image'

interface TimeLineItemProps {
  id: string;
  title: string;    // title (experience) OR degree (education)
  organization: string;  // company (experience) OR school (education)
  location: string;
  duration: string;
  description: string[];
  technologies?: string[];
  isExpandable?: boolean;
  type: 'experience' | 'education';
  logo: string;
  logoStyle?: 'circular' | 'oval';
}

export default function TimeLineItem({
  id,
  title,
  organization,
  location,
  duration,
  description,
  technologies,
  logo,
  logoStyle
}: TimeLineItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cn('bg-card border rounded-lg shadow-sm transition-colors')}>
      <button
        type="button"
        className="w-full text-left p-6 flex items-start sm:items-center justify-between gap-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        {/* Logo section - black background for IBM, default for others */}
        <div className={cn(
          "shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex items-center justify-center",
          organization.toLowerCase().includes('ibm') 
            ? "bg-black" // Black background for IBM
            : "bg-muted" // Default background for others
        )}>
          <img 
            src={logo} 
            alt={`${organization} logo`} 
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain" 
          />
        </div>

        {/* Content section */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <h4 className="text-lg font-medium text-foreground mt-1">
            {organization} - <span className="text-muted-foreground">{location}</span>
          </h4>
        </div>

        {/* Right side: Date and Chevron */}
        <div className="shrink-0 flex flex-col items-end gap-2">
          <span className="text-muted-foreground text-sm">{duration}</span>
          <div className="rounded-md p-2 hover:bg-muted transition-colors" aria-hidden="true">
            <ChevronDown
              className={cn(
                'h-5 w-5 text-muted-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                isOpen ? 'rotate-180' : 'rotate-0'
              )}
            />
          </div>
        </div>
      </button>

      {/* Expandable content */}
      <div
        className={cn(
          'grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-0">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
              {description.map((descriptionItem, index) => (
                <li key={`${id}-desc-${index}`}>{descriptionItem}</li>
              ))}
            </ul>

            {technologies && technologies.length > 0 && (
              <div className="mt-4 pt-4 border-t border-border">
                <SkillTags skills={technologies} size="small" variant="default" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 