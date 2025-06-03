"use client";
import { motion } from "framer-motion";

export default function About() {
  // Animation for the content
  const contentAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="max-h-[calc(100vh-120px)] overflow-y-auto"
      style={{ marginTop: "80px", position: "relative", top: "0px" }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        variants={contentAnimation}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-black">about me</h1>
          <div className="space-y-6 text-black">
            <p>
              Hey there! I'm a Computer Science student at Boston University,
              set to graduate in May 2026. I'm currently working as a Software
              Engineer at MILL5, where I develop enterprise-grade cloud
              applications using Microsoft Azure and AI technologies. I'm
              passionate about AI, full-stack development, and using tech to
              solve real-world problems.
            </p>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Work Experience
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold">
                    Software Engineer - MILL5
                  </h3>
                  <p className="text-gray-600 text-sm">
                    May 2025 - Present · Boston, Massachusetts
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                    <li>
                      Developing enterprise-grade cloud applications with Vision
                      AI and machine learning models
                    </li>
                    <li>
                      Working with Microsoft Azure services for scalable
                      deployment and performance optimization
                    </li>
                    <li>
                      Building backend services and integrating platforms like
                      Salesforce and ZoomInfo
                    </li>
                    <li>
                      Participating in agile development methodologies and
                      pursuing Azure certifications (AZ-900, AI-102)
                    </li>
                    <li>
                      <strong>Technologies:</strong> Microsoft Azure, Python,
                      JavaScript, Node.js, SQL, REST APIs
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold">
                    Full Stack Engineer - Civera
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Jan 2025 - May 2025 · Boston, Massachusetts (Remote)
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                    <li>
                      Built a full-stack Next.js application for Massachusetts
                      court case data access
                    </li>
                    <li>
                      Engineered resilient data layer using Prisma ORM with
                      MySQL and JSON fallback
                    </li>
                    <li>
                      Implemented streaming search with real-time results and
                      advanced filtering
                    </li>
                    <li>
                      Integrated Clerk authentication and created responsive
                      Material-UI components
                    </li>
                    <li>
                      <strong>Technologies:</strong> Next.js, React, TypeScript,
                      Prisma ORM, MySQL, Material-UI, Tailwind CSS
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-black">Education</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Boston University - B.S. in Computer Science (Jan 2024 - May
                  2026)
                </li>
                <li>
                  Adelphi University - B.S. in Computer Science (Sep 2022 - Jan
                  2024)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Skills & Technologies
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Microsoft Azure
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Python
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Next.js
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  Node.js
                </span>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                  Machine Learning
                </span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                  SQL
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  REST APIs
                </span>
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">
                  Prisma ORM
                </span>
                <span className="bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-sm">
                  MySQL
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Achievements
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Spring '24 Dean's List at Boston University</li>
                <li>
                  Spring '23 and Fall '23 Dean's List at Adelphi University
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
