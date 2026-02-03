"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const mlExperience = [
    {
      role: "Machine Learning Engineer",
      company: "Commonwealth of Massachusetts",
      period: "Sep 2025 - Dec 2025",
      description:
        "Built OCR + vision-language pipeline processing 269K+ handwritten records from the 1600s. Deployed searchable Streamlit app for archival research.",
    },
    {
      role: "AI Fellow",
      company: "Break Through Tech",
      period: "May 2024 - May 2025",
      description:
        "Trained CNN achieving 82% accuracy classifying broadband network impairments. 20% improvement over baseline models.",
    },
  ];

  const softwareExperience = [
    {
      role: "Software Engineer",
      company: "MILL5",
      period: "May 2025 - Sep 2025",
      description:
        "Built Azure backend services integrating Salesforce and ZoomInfo APIs. Developed Vision AI prototypes with OCR for client applications.",
    },
    {
      role: "Full Stack Engineer",
      company: "Civera",
      period: "Jan 2025 - May 2025",
      description:
        "Shipped Next.js app with sub-200ms search across 6M+ court records. Built resilient backend with 99.9% uptime.",
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
    <div className="scroll-container" style={{ marginTop: "80px" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-black">About</h1>

          <p className="text-black mb-8">
            CS student at Boston University. I build full-stack applications and
            ML systems that solve real problems.
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

          <h2 className="text-2xl font-bold mb-3 text-black">Education</h2>
          <p className="text-black mb-8">
            Boston University · B.S. Computer Science · Jan 2024 - May 2026
          </p>

          <h2 className="text-2xl font-bold mb-3 text-black">Skills</h2>
          <div className="space-y-2 text-sm text-black/80">
            <p>
              <span className="font-semibold text-black">Languages:</span>{" "}
              Python, JavaScript, TypeScript, Java, C++, SQL, Kotlin
            </p>
            <p>
              <span className="font-semibold text-black">Tools:</span> React,
              Next.js, Node.js, Azure, Docker, TensorFlow, Git
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
