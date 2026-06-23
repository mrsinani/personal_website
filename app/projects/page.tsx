"use client";
import { motion } from "framer-motion";
import { profile } from "@/lib/site-data";

export default function Projects() {
  const projects = profile.projects;

  return (
    <div className="scroll-container mt-[110px] sm:mt-[80px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="space-y-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/40"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-bold text-black">
                  {project.title}
                </h2>
                {"url" in project && project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/70 hover:text-black text-sm"
                  >
                    View →
                  </a>
                )}
              </div>

              <p className="text-black/80 mb-3">{project.description}</p>

              {"award" in project && project.award && (
                <p className="text-sm font-semibold text-black mb-2">
                  {project.award}
                </p>
              )}

              <p className="text-sm text-gray-600">{project.tech}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
