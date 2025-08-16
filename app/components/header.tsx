'use client'

import { useState, useEffect } from "react"
import { MapPin, Mail, Phone, Github, Linkedin, Sun, Moon } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { getPersonalInfo } from "@/lib/resume-data"
import { cn } from "@/lib/utils"
import { useTheme } from "@/lib/theme-provider"

const PROFILE_PIC_SRC = "/Profile_pic.jpeg";

export default function PersonalHeader() {
  const personalInfo = getPersonalInfo();
  const [showArabic, setShowArabic] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Auto-transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowArabic(prev => !prev);
    }, 3000); // Switch every 3 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  return (
    <section className="w-full bg-slate-900 dark:bg-slate-900 py-12 sm:py-16 px-4 sm:px-6 md:px-12" style={{ backgroundColor: theme === 'dark' ? undefined : '#16367a' }}>
      <div className="container mx-auto max-w-4xl">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-[300px_1fr] md:gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <Avatar className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                <AvatarImage src={PROFILE_PIC_SRC} alt="Profile" />
                <AvatarFallback className="bg-emerald-500 text-slate-900 text-lg font-semibold">
                  TW
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            {/* Interactive Name */}
            <div className="relative overflow-hidden pb-2">
              <div className="group relative w-full text-left transition-all duration-500 ease-in-out">
                {/* English Name */}
                <h1 
                  className={cn(
                    "text-3xl sm:text-4xl md:text-5xl font-bold text-white transition-all duration-1000 ease-in-out leading-tight",
                    showArabic ? "transform -translate-y-full opacity-0" : "transform translate-y-0 opacity-100"
                  )}
                >
                  {personalInfo.name}
                </h1>
                
                {/* Arabic Name */}
                <h1 
                  className={cn(
                    "absolute top-0 left-0 text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 transition-all duration-1000 ease-in-out leading-tight",
                    showArabic ? "transform translate-y-0 opacity-100" : "transform translate-y-full opacity-0"
                  )}
                  style={{ direction: 'rtl' }}
                >
                  طه واثق
                </h1>
                
                {/* Hover indicator */}
                <div className={cn(
                  "absolute -bottom-2 left-0 w-1/3 h-0.5 bg-emerald-500 transform transition-all duration-300 ease-in-out",
                  showArabic ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </div>
            </div>

            {/* Role & Location */}
            <div className="space-y-2 text-slate-200">
              {personalInfo.roles.map((role, index) => (
                <div key={index} className="flex items-center justify-center md:justify-start gap-2">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                  <span className="text-base sm:text-lg">{role}</span>
                </div>
              ))}
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span className="text-base sm:text-lg">{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Text */}
        <div className="mt-8 sm:mt-12 max-w-3xl">
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>
        
        {/* Floating Social Footer Tab */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-lg border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 ease-in-out hover:bg-slate-100/90 dark:hover:bg-slate-700/90 hover:scale-110"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <Moon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            )}
          </button>
          
          {/* Contact Icons */}
          <div className="flex items-center gap-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 ease-in-out hover:bg-slate-100/90 dark:hover:bg-slate-700/90">
            {/* Email */}
            <a 
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 transition-colors duration-200 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:scale-110"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            {/* Phone */}
            <a 
              href={`tel:${personalInfo.phone}`}
              className="p-2 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 transition-colors duration-200 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:scale-110"
              title="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            
            {/* GitHub */}
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 transition-colors duration-200 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:scale-110"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            
            {/* LinkedIn */}
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 transition-colors duration-200 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}