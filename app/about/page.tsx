"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { profile } from "@/lib/site-data";

export default function About() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const mlExperience = profile.experience.filter((exp) =>
    ["Machine Learning Engineer Intern", "AI Fellow"].includes(exp.role)
  );

  const softwareExperience = profile.experience.filter((exp) =>
    ["Software Engineer", "Software Engineer Intern", "Full Stack Engineer Intern"].includes(
      exp.role
    )
  );

  const awards = profile.awards;

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const ExperienceItem = ({
    exp,
  }: {
    exp: { role: string; company: string; period: string; description: string };
  }) => (
    <div className="py-3 border-b border-gray-200 last:border-b-0">
      <h4 className="font-semibold text-black">{exp.role}</h4>
      <p className="text-sm text-gray-600">
        {exp.company} · {exp.period}
      </p>
      <p className="text-sm text-black/80 mt-2">{exp.description}</p>
    </div>
  );

  const DropdownSection = ({
    title,
    id,
    experiences,
  }: {
    title: string;
    id: string;
    experiences: typeof mlExperience;
  }) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection(id)}
        className="w-full px-4 py-3 flex justify-between items-center bg-white/70 hover:bg-white/90 transition-colors"
        aria-expanded={openSection === id}
      >
        <span className="font-semibold text-black">{title}</span>
        <span className="text-black/60 text-xl">
          {openSection === id ? "−" : "+"}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: openSection === id ? "auto" : 0,
          opacity: openSection === id ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
        aria-hidden={openSection !== id}
      >
        <div className="px-4 pb-3">
          {experiences.map((exp, idx) => (
            <ExperienceItem key={idx} exp={exp} />
          ))}
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="scroll-container mt-[110px] sm:mt-[80px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-black">About</h1>

          <p className="text-black mb-8">{profile.bio}</p>

          <h2 className="text-2xl font-bold mb-4 text-black">Experience</h2>
          <div className="space-y-3 mb-8">
            <DropdownSection
              title="Software Engineering"
              id="software"
              experiences={softwareExperience}
            />
            <DropdownSection
              title="ML / AI"
              id="ml"
              experiences={mlExperience}
            />
          </div>

          <h2 className="text-2xl font-bold mb-4 text-black">
            Hackathons & Awards
          </h2>
          <div className="space-y-2 mb-8">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
              >
                <span className="text-black/80 text-sm font-medium">
                  {award.title}
                </span>
                <span className="text-gray-500 text-xs ml-4 shrink-0">
                  {award.date}
                </span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-3 text-black">Education</h2>
          <p className="text-black mb-8">
            {profile.education.school} · {profile.education.degree} ·{" "}
            {profile.education.period}
          </p>

          <h2 className="text-2xl font-bold mb-3 text-black">Skills</h2>
          <div className="space-y-2 text-sm text-black/80">
            <p>
              <span className="font-semibold text-black">Tools:</span>{" "}
              {profile.skills.tools}
            </p>
            <p>
              <span className="font-semibold text-black">AI/ML:</span>{" "}
              {profile.skills.aiMl}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
