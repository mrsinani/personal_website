"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const mlExperience = [
    {
      role: "Machine Learning Engineer Intern",
      company: "Massachusetts Registry of Deeds",
      period: "Sep 2025 – Dec 2025",
      description:
        "Architected a modular OCR + vision-language pipeline that transcribed and structured 269,000+ historical handwritten index entries dating back to the 1600s. Launched a searchable app for archival and public research use.",
    },
    {
      role: "AI Fellow",
      company: "MIT",
      period: "May 2024 – May 2025",
      description:
        "Designed and deployed an AI pipeline integrating a fine-tuned 2D CNN with automated classification logic, achieving 82% accuracy on broadband network impairment detection, replacing a fully manual review process.",
    },
  ];

  const softwareExperience = [
    {
      role: "Software Engineer",
      company: "Civera",
      period: "Jan 2026 – Present",
      description:
        "Engineered a natural-language-to-SQL analytics platform enabling non-technical users to query millions of Massachusetts court records in plain English, with a multi-stage GPT-4o pipeline and real-time SSE streaming.",
    },
    {
      role: "Software Engineer Intern",
      company: "MILL5",
      period: "May 2025 – Sep 2025",
      description:
        "Engineered backend services using Azure and Node.js, integrating Salesforce and ZoomInfo APIs to automate data aggregation and lead enrichment, reducing latency by over 40%.",
    },
    {
      role: "Full Stack Engineer Intern",
      company: "Civera",
      period: "Jan 2025 – May 2025",
      description:
        "Shipped a full-stack Next.js application enabling sub-200ms search across 6M+ court records. Built resilient backend infrastructure with 99.9% uptime.",
    },
  ];

  const awards = [
    {
      title: "1st Place — EasyA Harvard Hackathon",
      date: "Sep 2025",
    },
    {
      title: "3rd Place — Avalanche Blockchain BU Hackathon",
      date: "Mar 2025",
    },
    {
      title: "Best dApp Deployed on Linea — ETHPrague 2024",
      date: "Jun 2024",
    },
  ];

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
      >
        <span className="font-semibold text-black">{title}</span>
        <span className="text-black/60 text-xl">
          {openSection === id ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence>
        {openSection === id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-3">
              {experiences.map((exp, idx) => (
                <ExperienceItem key={idx} exp={exp} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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

          <p className="text-black mb-8">
            I build full-stack applications and ML systems that solve real
            problems at scale. Currently engineering NLP-to-SQL tooling at
            Civera.
          </p>

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
            Boston University · B.S. Computer Science · Sep 2022 – May 2026
          </p>

          <h2 className="text-2xl font-bold mb-3 text-black">Skills</h2>
          <div className="space-y-2 text-sm text-black/80">
            <p>
              <span className="font-semibold text-black">Tools:</span> React,
              Python, Next.js, TypeScript, Node.js, Tailwind, GraphQL, Supabase,
              Prisma, MySQL, PostgreSQL, Docker, GitHub Actions, CI/CD
            </p>
            <p>
              <span className="font-semibold text-black">AI/ML:</span> OpenAI
              API, GPT-4o, LLM Prompt Engineering, Azure Cognitive Services
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
