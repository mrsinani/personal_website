"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const projects = [
    {
      title: "Crypto Cribs",
      description:
        "Decentralized travel and real estate platform that reimagines short-term rentals by replacing high-fee, centralized intermediaries like Airbnb with blockchain-powered transparency and fairness.",
      award:
        "1st Place Winner – Composable dApps & Interoperable Infrastructure Track at EASYA Hackathon @ Harvard",
      technologies: "Blockchain, Web3, Smart Contracts, React",
      link: "https://github.com/theonlyhennygod/Crypto-Cribs/",
      timeline: "Sep 2025",
      delay: 0.05,
    },
    {
      title: "Attention Arsenal",
      description:
        "A native iOS productivity app built in Swift/SwiftUI. The reminder app that never gives up – designed to help people stay on track with persistent, thoughtful notifications.",
      technologies: "Swift, SwiftUI, iOS",
      link: "https://apps.apple.com/us/app/attention-arsenal/id6749694041",
      timeline: "Sep 2025",
      delay: 0.1,
    },
    {
      title: "TradeGuard AI",
      description:
        "Developed a comprehensive full-stack platform that leverages AI to help commodity brokers and traders identify fraudulent trade documents and assess transaction risks. The platform processes trade documents through sophisticated AI analysis to provide detailed risk assessments and fraud detection.",
      technologies:
        "React, TypeScript, Vite, Material-UI, Tailwind CSS, Express.js, Supabase PostgreSQL, OpenAI API, Stripe, Railway, Docker",
      keyFeatures: [
        "Custom GPT-4 assistant with specialized trade document analysis",
        "Multi-stage analysis pipeline with structured data extraction",
        "Risk scoring algorithm with weighted fraud indicators",
        "Full application stack including frontend, backend, authentication, and database architecture",
      ],
      link: "https://tradeguardai.com/",
      timeline: "Apr 2025",
      delay: 0.15,
    },
    {
      title: "MassCourtsPlus Platform",
      description:
        "A Next.js web application that provides public access to Massachusetts court case data with advanced search and filtering capabilities. The platform features streaming search results, multi-criteria filtering, detailed case information display, and user authentication.",
      technologies:
        "Next.js, React, TypeScript, Prisma ORM, MySQL, Material-UI, Tailwind CSS, Clerk Authentication",
      keyFeatures: [
        "Sub-200ms search across 6M+ court records",
        "Multi-criteria filtering (court, case type, status, date range)",
        "Resilient data access layer with JSON fallback for 99.9% uptime",
      ],
      timeline: "Jan 2025 – May 2025",
      company: "Built at Civera",
      delay: 0.2,
    },
    {
      title: "Chess3",
      description:
        "Led frontend integration using React and Chess.js to create an interactive chessboard interface for Web3 users. Collaborated on backend implementation using Solidity, deploying smart contracts which enable secure, transparent betting between players.",
      award: '"Best dApp Deployed on Linea" – ETH Prague 2024',
      technologies: "Solidity, Web3.js, React, Ethereum, Linea, Chess.js",
      timeline: "ETH Prague 2024",
      delay: 0.25,
    },
  ];

  return (
    <div
      className="max-h-[calc(100vh-120px)] overflow-y-auto"
      style={{ marginTop: "80px", position: "relative", top: "0px" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: project.delay }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  {project.title && (
                    <h2 className="text-2xl font-bold text-black mb-1">
                      {project.title}
                    </h2>
                  )}
                  {project.timeline && (
                    <p className="text-sm text-gray-600">{project.timeline}</p>
                  )}
                  {project.company && (
                    <p className="text-sm text-gray-500">{project.company}</p>
                  )}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/70 hover:text-black text-sm font-medium"
                  >
                    View →
                  </a>
                )}
              </div>

              {project.description && (
                <p className="text-black mb-4">{project.description}</p>
              )}

              {project.keyFeatures && (
                <div className="mb-4">
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {project.keyFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.award && (
                <p className="text-black font-semibold text-sm mb-4">
                  🏆 {project.award}
                </p>
              )}

              {project.technologies && (
                <p className="text-gray-600 text-sm">{project.technologies}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
