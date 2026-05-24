"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Fineprint",
      description:
        "AI-powered contract analysis platform that gives users plain-English summaries, clause-by-clause risk scores, and actionable checklists before they sign anything. Shipped across three surfaces: a web app for PDF/DOCX uploads, a native iOS app with a built-in document scanner, and a Chrome extension that auto-detects Terms of Service pages for one-click analysis.",
      tech: "Next.js, TypeScript, Supabase, GPT-4o, GraphQL, Clerk, Swift, Chrome Extensions",
      link: "https://fineprint.dev",
    },
    {
      title: "Attention Arsenal",
      description:
        "The reminder app that never gives up. I kept snoozing my notifications while brainrotting, so I made an app that fights back. 400+ users and 12.6K+ App Store impressions.",
      tech: "Swift, Core Data, iCloud, Scheduled Notifications",
      link: "https://attentionarsenal.com",
    },
    {
      title: "Crypto Cribs",
      description:
        "Decentralized travel platform replacing Airbnb with blockchain-powered transparency. Built at EASYA Hackathon @ Harvard.",
      award: "1st Place — Composable dApps Track",
      tech: "Blockchain, Web3, React",
      link: "https://github.com/theonlyhennygod/Crypto-Cribs/",
    },
    {
      title: "TradeGuard AI",
      description:
        "AI platform helping commodity traders identify fraudulent documents and assess transaction risks through sophisticated analysis.",
      tech: "React, TypeScript, Express, OpenAI, Supabase",
      link: "https://tradeguardai.com",
    },
    {
      title: "MassCourtsPlus",
      description:
        "Next.js app providing public access to Massachusetts court case data with sub-200ms search across 6M+ records and 99.9% uptime.",
      tech: "Next.js, TypeScript, Prisma, MySQL, Clerk",
    },
    {
      title: "Chess3",
      description:
        "Web3 chess platform with interactive chessboard interface and Solidity smart contracts enabling secure, transparent betting between players.",
      award: "Best dApp Deployed on Linea — ETHPrague 2024",
      tech: "Solidity, Web3.js, React, Ethereum, Linea",
    },
  ];

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
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/70 hover:text-black text-sm"
                  >
                    View →
                  </a>
                )}
              </div>

              <p className="text-black/80 mb-3">{project.description}</p>

              {project.award && (
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
