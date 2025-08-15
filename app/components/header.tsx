import { MapPin } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { getPersonalInfo } from "@/lib/resume-data"

const PROFILE_PIC_SRC = "/Profile_pic.jpeg";

export default function PersonalHeader() {
  const personalInfo = getPersonalInfo();
  return (
    <section className="w-full bg-slate-900 py-12 sm:py-16 px-4 sm:px-6 md:px-12">
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
            {/* Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{personalInfo.name}</h1>

            {/* Role & Location */}
            <div className="space-y-2 text-slate-300">
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
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>
      </div>
    </section>
  )
}