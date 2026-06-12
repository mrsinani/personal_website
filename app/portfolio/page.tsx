"use client";

import { motion } from "framer-motion";
import { getEnabledPortfolioProjectsByCategory } from "@/lib/portfolio-projects";

export default function PortfolioPage() {
  const sections = getEnabledPortfolioProjectsByCategory();
  const hasProjects = sections.some((section) => section.projects.length > 0);

  return (
    <div className="scroll-container mt-[110px] sm:mt-[80px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-black mb-2">
            Freelance Portfolio
          </h1>
          <p className="text-black/60">
            Websites and online tools I&apos;ve built for real businesses and
            projects.
          </p>
        </div>

        {!hasProjects ? (
          <div className="bg-white/30 backdrop-blur-md p-8 rounded-lg shadow-lg border border-white/40 text-center">
            <p className="text-black/70">
              No projects are live here yet. Enable entries in{" "}
              <code className="text-sm bg-white/50 px-1.5 py-0.5 rounded">
                lib/portfolio-projects.ts
              </code>
              .
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {sections.map((section, sectionIdx) => (
              <section key={section.category}>
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-black">
                    {section.title}
                  </h2>
                  <p className="text-sm text-black/50 mt-1">
                    {section.subtitle}
                  </p>
                </div>

                <div className="space-y-6">
                  {section.projects.map((project, idx) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: sectionIdx * 0.05 + idx * 0.08,
                      }}
                      className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/40"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-black">
                          {project.title}
                        </h3>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black/70 hover:text-black text-sm shrink-0 ml-4"
                          >
                            View →
                          </a>
                        )}
                      </div>

                      <p className="text-black/80">{project.description}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            ))}

            <p className="text-center text-sm text-black/50 pt-2">
              These are projects I&apos;ve done for events, friends, and
              clients.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
